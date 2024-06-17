using FurnitureStore.Infrastructure;

namespace FurnitureStore.APIs;

public class OrderItemsService : OrderItemsServiceBase
{
    public OrderItemsService(FurnitureStoreDbContext context)
        : base(context) { }
}
