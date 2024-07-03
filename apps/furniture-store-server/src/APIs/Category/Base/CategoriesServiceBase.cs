using FurnitureStore.APIs;
using FurnitureStore.APIs.Common;
using FurnitureStore.APIs.Dtos;
using FurnitureStore.APIs.Errors;
using FurnitureStore.APIs.Extensions;
using FurnitureStore.Infrastructure;
using FurnitureStore.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace FurnitureStore.APIs;

public abstract class CategoriesServiceBase : ICategoriesService
{
    protected readonly FurnitureStoreDbContext _context;

    public CategoriesServiceBase(FurnitureStoreDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Meta data about Category records
    /// </summary>
    public async Task<MetadataDto> CategoriesMeta(CategoryFindManyArgs findManyArgs)
    {
        var count = await _context.Categories.ApplyWhere(findManyArgs.Where).CountAsync();

        return new MetadataDto { Count = count };
    }

    /// <summary>
    /// Connect multiple Products records to Category
    /// </summary>
    public async Task ConnectProducts(
        CategoryWhereUniqueInput uniqueId,
        ProductWhereUniqueInput[] productsId
    )
    {
        var category = await _context
            .Categories.Include(x => x.Products)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (category == null)
        {
            throw new NotFoundException();
        }

        var products = await _context
            .Products.Where(t => productsId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();
        if (products.Count == 0)
        {
            throw new NotFoundException();
        }

        var productsToConnect = products.Except(category.Products);

        foreach (var product in productsToConnect)
        {
            category.Products.Add(product);
        }

        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Disconnect multiple Products records from Category
    /// </summary>
    public async Task DisconnectProducts(
        CategoryWhereUniqueInput uniqueId,
        ProductWhereUniqueInput[] productsId
    )
    {
        var category = await _context
            .Categories.Include(x => x.Products)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (category == null)
        {
            throw new NotFoundException();
        }

        var products = await _context
            .Products.Where(t => productsId.Select(x => x.Id).Contains(t.Id))
            .ToListAsync();

        foreach (var product in products)
        {
            category.Products?.Remove(product);
        }
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Find multiple Products records for Category
    /// </summary>
    public async Task<List<Product>> FindProducts(
        CategoryWhereUniqueInput uniqueId,
        ProductFindManyArgs categoryFindManyArgs
    )
    {
        var products = await _context
            .Products.Where(m => m.CategoryId == uniqueId.Id)
            .ApplyWhere(categoryFindManyArgs.Where)
            .ApplySkip(categoryFindManyArgs.Skip)
            .ApplyTake(categoryFindManyArgs.Take)
            .ApplyOrderBy(categoryFindManyArgs.SortBy)
            .ToListAsync();

        return products.Select(x => x.ToDto()).ToList();
    }

    /// <summary>
    /// Update multiple Products records for Category
    /// </summary>
    public async Task UpdateProducts(
        CategoryWhereUniqueInput uniqueId,
        ProductWhereUniqueInput[] productsId
    )
    {
        var category = await _context
            .Categories.Include(t => t.Products)
            .FirstOrDefaultAsync(x => x.Id == uniqueId.Id);
        if (category == null)
        {
            throw new NotFoundException();
        }

        var products = await _context
            .Products.Where(a => productsId.Select(x => x.Id).Contains(a.Id))
            .ToListAsync();

        if (products.Count == 0)
        {
            throw new NotFoundException();
        }

        category.Products = products;
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Create one Category
    /// </summary>
    public async Task<Category> CreateCategory(CategoryCreateInput createDto)
    {
        var category = new CategoryDbModel
        {
            CreatedAt = createDto.CreatedAt,
            Description = createDto.Description,
            Name = createDto.Name,
            UpdatedAt = createDto.UpdatedAt
        };

        if (createDto.Id != null)
        {
            category.Id = createDto.Id;
        }
        if (createDto.Products != null)
        {
            category.Products = await _context
                .Products.Where(product =>
                    createDto.Products.Select(t => t.Id).Contains(product.Id)
                )
                .ToListAsync();
        }

        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        var result = await _context.FindAsync<CategoryDbModel>(category.Id);

        if (result == null)
        {
            throw new NotFoundException();
        }

        return result.ToDto();
    }

    /// <summary>
    /// Delete one Category
    /// </summary>
    public async Task DeleteCategory(CategoryWhereUniqueInput uniqueId)
    {
        var category = await _context.Categories.FindAsync(uniqueId.Id);
        if (category == null)
        {
            throw new NotFoundException();
        }

        _context.Categories.Remove(category);
        await _context.SaveChangesAsync();
    }

    /// <summary>
    /// Find many Categories
    /// </summary>
    public async Task<List<Category>> Categories(CategoryFindManyArgs findManyArgs)
    {
        var categories = await _context
            .Categories.Include(x => x.Products)
            .ApplyWhere(findManyArgs.Where)
            .ApplySkip(findManyArgs.Skip)
            .ApplyTake(findManyArgs.Take)
            .ApplyOrderBy(findManyArgs.SortBy)
            .ToListAsync();
        return categories.ConvertAll(category => category.ToDto());
    }

    /// <summary>
    /// Get one Category
    /// </summary>
    public async Task<Category> Category(CategoryWhereUniqueInput uniqueId)
    {
        var categories = await this.Categories(
            new CategoryFindManyArgs { Where = new CategoryWhereInput { Id = uniqueId.Id } }
        );
        var category = categories.FirstOrDefault();
        if (category == null)
        {
            throw new NotFoundException();
        }

        return category;
    }

    /// <summary>
    /// Update one Category
    /// </summary>
    public async Task UpdateCategory(
        CategoryWhereUniqueInput uniqueId,
        CategoryUpdateInput updateDto
    )
    {
        var category = updateDto.ToModel(uniqueId);

        if (updateDto.Products != null)
        {
            category.Products = await _context
                .Products.Where(product => updateDto.Products.Select(t => t).Contains(product.Id))
                .ToListAsync();
        }

        _context.Entry(category).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Categories.Any(e => e.Id == category.Id))
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
