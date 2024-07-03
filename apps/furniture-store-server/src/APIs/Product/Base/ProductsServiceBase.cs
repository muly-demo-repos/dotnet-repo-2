using FurnitureStore.APIs;
using FurnitureStore.APIs.Common;
using FurnitureStore.APIs.Dtos;
using FurnitureStore.APIs.Errors;
using FurnitureStore.APIs.Extensions;
using FurnitureStore.Infrastructure;
using FurnitureStore.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace FurnitureStore.APIs;

public abstract class ProductsServiceBase : IProductsService
{
    protected readonly FurnitureStoreDbContext _context;

    public ProductsServiceBase(FurnitureStoreDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Create one Product
    /// </summary>
    public async Task<Product> CreateProduct(ProductCreateInput createDto)
    {
        var product = new ProductDbModel
        {
            CreatedAt = createDto.CreatedAt,
            Description = createDto.Description,
            Name = createDto.Name,
            Price = createDto.Price,
            Sku = createDto.Sku,
            UpdatedAt = createDto.UpdatedAt
        };

        if (createDto.Id != null)
        {
            product.Id = createDto.Id;
        }
        if (createDto.Category != null)
        {
            product.Category = await _context
                .Categories.Where(category => createDto.Category.Id == category.Id)
                .FirstOrDefaultAsync();
        }

        if (createDto.OrderItems != null)
        {
            product.OrderItems = await _context
                .OrderItems.Where(orderItem =>
                    createDto.OrderItems.Select(t => t.Id).Contains(orderItem.Id)
                )
                .ToListAsync();
        }

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        var result = await _context.FindAsync<ProductDbModel>(product.Id);

        if (result == null)
        {
            throw new NotFoundException();
        }

        return result.ToDto();
    }

    /// <summary>
    /// Delete one Product
    /// </summary>
    public async Task DeleteProduct(ProductWhereUniqueInput uniqueId)
    {
        var product = await _context.Products.FindAsync(uniqueId.Id);
        if (product == null)
        {
            throw new NotFoundException();
        }

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Find many Products
    /// </summary>
    public async Task<List<Product>> Products(ProductFindManyArgs findManyArgs)
    {
        var products = await _context
            .Products.Include(x => x.Category)
            .Include(x => x.OrderItems)
            .ApplyWhere(findManyArgs.Where)
            .ApplySkip(findManyArgs.Skip)
            .ApplyTake(findManyArgs.Take)
            .ApplyOrderBy(findManyArgs.SortBy)
            .ToListAsync();
        return products.ConvertAll(product => product.ToDto());
    }

    /// <summary>
    /// Get one Product
    /// </summary>
    public async Task<Product> Product(ProductWhereUniqueInput uniqueId)
    {
        var products = await this.Products(
            new ProductFindManyArgs { Where = new ProductWhereInput { Id = uniqueId.Id } }
        );
        var product = products.FirstOrDefault();
        if (product == null)
        {
            throw new NotFoundException();
        }

        return product;
    }

    /// <summary>
    /// Connect multiple OrderItems records to Product
    /// </summary>
    public async Task ConnectOrderItems(
        ProductWhereUniqueInput uniqueId,
        OrderItemWhereUniqueInput[] orderItemsId
    )
    {
        var product = await _context
            .Products.Include(x => x.OrderItems)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (product == null)
        {
            throw new NotFoundException();
        }

        var orderItems = await _context
            .OrderItems.Where(t => orderItemsId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();
        if (orderItems.Count == 0)
        {
            throw new NotFoundException();
        }

        var orderItemsToConnect = orderItems.Except(product.OrderItems);

        foreach (var orderItem in orderItemsToConnect)
        {
            product.OrderItems.Add(orderItem);
        }

        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Disconnect multiple OrderItems records from Product
    /// </summary>
    public async Task DisconnectOrderItems(
        ProductWhereUniqueInput uniqueId,
        OrderItemWhereUniqueInput[] orderItemsId
    )
    {
        var product = await _context
            .Products.Include(x => x.OrderItems)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (product == null)
        {
            throw new NotFoundException();
        }

        var orderItems = await _context
            .OrderItems.Where(t => orderItemsId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();

        foreach (var orderItem in orderItems)
        {
            product.OrderItems?.Remove(orderItem);
        }
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Find multiple OrderItems records for Product
    /// </summary>
    public async Task<List<OrderItem>> FindOrderItems(
        ProductWhereUniqueInput uniqueId,
        OrderItemFindManyArgs productFindManyArgs
    )
    {
        var orderItems = await _context
            .OrderItems.Where(m => m.ProductId == uniqueId.Id)
            .ApplyWhere(productFindManyArgs.Where)
            .ApplySkip(productFindManyArgs.Skip)
            .ApplyTake(productFindManyArgs.Take)
            .ApplyOrderBy(productFindManyArgs.SortBy)
            .ToListAsync();

        return orderItems.Select(x => x.ToDto()).ToList();
    }

    /// <summary>
    /// Get a Category record for Product
    /// </summary>
    public async Task<Category> GetCategory(ProductWhereUniqueInput uniqueId)
    {
        var product = await _context
            .Products.Where(product => product.Id == uniqueId.Id)
            .Include(product => product.Category)
            .FirstOrDefaultAsync();
        if (product == null)
        {
            throw new NotFoundException();
        }
        return product.Category.ToDto();
    }

    /// <summary>
    /// Meta data about Product records
    /// </summary>
    public async Task<MetadataDto> ProductsMeta(ProductFindManyArgs findManyArgs)
    {
        var count = await _context.Products.ApplyWhere(findManyArgs.Where).CountAsync();

        return new MetadataDto { Count = count };
    }

    /// <summary>
    /// Update multiple OrderItems records for Product
    /// </summary>
    public async Task UpdateOrderItems(
        ProductWhereUniqueInput uniqueId,
        OrderItemWhereUniqueInput[] orderItemsId
    )
    {
        var product = await _context
            .Products.Include(t => t.OrderItems)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (product == null)
        {
            throw new NotFoundException();
        }

        var orderItems = await _context
            .OrderItems.Where(a => orderItemsId.Select(x => x.Id).Contains(a.Id))
            .ToListAsync();

        if (orderItems.Count == 0)
        {
            throw new NotFoundException();
        }

        product.OrderItems = orderItems;
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Update one Product
    /// </summary>
    public async Task UpdateProduct(ProductWhereUniqueInput uniqueId, ProductUpdateInput updateDto)
    {
        var product = updateDto.ToModel(uniqueId);

        if (updateDto.OrderItems != null)
        {
            product.OrderItems = await _context
                .OrderItems.Where(orderItem =>
                    updateDto.OrderItems.Select(t => t).Contains(orderItem.Id)
                )
                .ToListAsync();
        }

        _context.Entry(product).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Products.Any(e => e.Id == product.Id))
            {
                throw new NotFoundException();
            }
            else
            {
                throw;
            }
        }
    }
}
