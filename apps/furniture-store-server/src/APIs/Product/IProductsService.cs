using FurnitureStore.APIs.Common;
using FurnitureStore.APIs.Dtos;

namespace FurnitureStore.APIs;

public interface IProductsService
{
    /// <summary>
    /// Create one Product
    /// </summary>
    public Task<ProductDto> CreateProduct(ProductCreateInput productDto);

    /// <summary>
    /// Delete one Product
    /// </summary>
    public Task DeleteProduct(ProductIdDto idDto);

    /// <summary>
    /// Find many Products
    /// </summary>
    public Task<List<ProductDto>> Products(ProductFindMany findManyArgs);

    /// <summary>
    /// Get one Product
    /// </summary>
    public Task<ProductDto> Product(ProductIdDto idDto);

    /// <summary>
    /// Connect multiple OrderItems records to Product
    /// </summary>
    public Task ConnectOrderItems(ProductIdDto idDto, OrderItemIdDto[] orderItemsId);

    /// <summary>
    /// Disconnect multiple OrderItems records from Product
    /// </summary>
    public Task DisconnectOrderItems(ProductIdDto idDto, OrderItemIdDto[] orderItemsId);

    /// <summary>
    /// Find multiple OrderItems records for Product
    /// </summary>
    public Task<List<OrderItemDto>> FindOrderItems(
        ProductIdDto idDto,
        OrderItemFindMany OrderItemFindMany
    );

    /// <summary>
    /// Get a Category record for Product
    /// </summary>
    public Task<CategoryDto> GetCategory(ProductIdDto idDto);

    /// <summary>
    /// Meta data about Product records
    /// </summary>
    public Task<MetadataDto> ProductsMeta(ProductFindMany findManyArgs);

    /// <summary>
    /// Update multiple OrderItems records for Product
    /// </summary>
    public Task UpdateOrderItems(ProductIdDto idDto, OrderItemIdDto[] orderItemsId);

    /// <summary>
    /// Update one Product
    /// </summary>
    public Task UpdateProduct(ProductIdDto idDto, ProductUpdateInput updateDto);
}
