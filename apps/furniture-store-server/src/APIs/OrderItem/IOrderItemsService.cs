using FurnitureStore.APIs.Common;
using FurnitureStore.APIs.Dtos;

namespace FurnitureStore.APIs;

public interface IOrderItemsService
{
    /// <summary>
    /// Create one OrderItem
    /// </summary>
    public Task<OrderItemDto> CreateOrderItem(OrderItemCreateInput orderitemDto);

    /// <summary>
    /// Delete one OrderItem
    /// </summary>
    public Task DeleteOrderItem(OrderItemIdDto idDto);

    /// <summary>
    /// Find many OrderItems
    /// </summary>
    public Task<List<OrderItemDto>> OrderItems(OrderItemFindMany findManyArgs);

    /// <summary>
    /// Get one OrderItem
    /// </summary>
    public Task<OrderItemDto> OrderItem(OrderItemIdDto idDto);

    /// <summary>
    /// Get a Order record for OrderItem
    /// </summary>
    public Task<OrderDto> GetOrder(OrderItemIdDto idDto);

    /// <summary>
    /// Get a Product record for OrderItem
    /// </summary>
    public Task<ProductDto> GetProduct(OrderItemIdDto idDto);

    /// <summary>
    /// Meta data about OrderItem records
    /// </summary>
    public Task<MetadataDto> OrderItemsMeta(OrderItemFindMany findManyArgs);

    /// <summary>
    /// Update one OrderItem
    /// </summary>
    public Task UpdateOrderItem(OrderItemIdDto idDto, OrderItemUpdateInput updateDto);
}
