using FurnitureStore.APIs.Dtos;
using FurnitureStore.Infrastructure.Models;

namespace FurnitureStore.APIs.Extensions;

public static class OrderItemsExtensions
{
    public static OrderItemDto ToDto(this OrderItem model)
    {
        return new OrderItemDto
        {
            CreatedAt = model.CreatedAt,
            Id = model.Id,
            Order = new OrderIdDto { Id = model.OrderId },
            Price = model.Price,
            Product = new ProductIdDto { Id = model.ProductId },
            Quantity = model.Quantity,
            UpdatedAt = model.UpdatedAt,
        };
    }

    public static OrderItem ToModel(this OrderItemUpdateInput updateDto, OrderItemIdDto idDto)
    {
        var orderItem = new OrderItem
        {
            Id = idDto.Id,
            Price = updateDto.Price,
            Quantity = updateDto.Quantity
        };

        // map required fields
        if (updateDto.CreatedAt != null)
        {
            orderItem.CreatedAt = updateDto.CreatedAt.Value;
        }
        if (updateDto.UpdatedAt != null)
        {
            orderItem.UpdatedAt = updateDto.UpdatedAt.Value;
        }

        return orderItem;
    }
}
