using FurnitureStore.APIs.Dtos;
using FurnitureStore.Infrastructure.Models;

namespace FurnitureStore.APIs.Extensions;

public static class ProductsExtensions
{
    public static Product ToDto(this ProductDbModel model)
    {
        return new Product
        {
            Category = model.CategoryId,
            CreatedAt = model.CreatedAt,
            Description = model.Description,
            Id = model.Id,
            Name = model.Name,
            OrderItems = model.OrderItems?.Select(x => x.Id).ToList(),
            Price = model.Price,
            Sku = model.Sku,
            UpdatedAt = model.UpdatedAt,
        };
    }

    public static ProductDbModel ToModel(
        this ProductUpdateInput updateDto,
        ProductWhereUniqueInput uniqueId
    )
    {
        var product = new ProductDbModel
        {
            Id = uniqueId.Id,
            Description = updateDto.Description,
            Name = updateDto.Name,
            Price = updateDto.Price,
            Sku = updateDto.Sku
        };

        // map required fields
        if (updateDto.CreatedAt != null)
        {
            product.CreatedAt = updateDto.CreatedAt.Value;
        }
        if (updateDto.UpdatedAt != null)
        {
            product.UpdatedAt = updateDto.UpdatedAt.Value;
        }

        return product;
    }
}
