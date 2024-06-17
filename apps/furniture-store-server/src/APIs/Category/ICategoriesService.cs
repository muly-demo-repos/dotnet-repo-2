using FurnitureStore.APIs.Common;
using FurnitureStore.APIs.Dtos;

namespace FurnitureStore.APIs;

public interface ICategoriesService
{
    /// <summary>
    /// Meta data about Category records
    /// </summary>
    public Task<MetadataDto> CategoriesMeta(CategoryFindMany findManyArgs);

    /// <summary>
    /// Connect multiple Products records to Category
    /// </summary>
    public Task ConnectProducts(CategoryIdDto idDto, ProductIdDto[] productsId);

    /// <summary>
    /// Disconnect multiple Products records from Category
    /// </summary>
    public Task DisconnectProducts(CategoryIdDto idDto, ProductIdDto[] productsId);

    /// <summary>
    /// Find multiple Products records for Category
    /// </summary>
    public Task<List<ProductDto>> FindProducts(
        CategoryIdDto idDto,
        ProductFindMany ProductFindMany
    );

    /// <summary>
    /// Update multiple Products records for Category
    /// </summary>
    public Task UpdateProducts(CategoryIdDto idDto, ProductIdDto[] productsId);

    /// <summary>
    /// Create one Category
    /// </summary>
    public Task<CategoryDto> CreateCategory(CategoryCreateInput categoryDto);

    /// <summary>
    /// Delete one Category
    /// </summary>
    public Task DeleteCategory(CategoryIdDto idDto);

    /// <summary>
    /// Find many Categories
    /// </summary>
    public Task<List<CategoryDto>> Categories(CategoryFindMany findManyArgs);

    /// <summary>
    /// Get one Category
    /// </summary>
    public Task<CategoryDto> Category(CategoryIdDto idDto);

    /// <summary>
    /// Update one Category
    /// </summary>
    public Task UpdateCategory(CategoryIdDto idDto, CategoryUpdateInput updateDto);
}
