using FurnitureStore.Infrastructure;

namespace FurnitureStore.APIs;

public class OrdersService : OrdersServiceBase
{
    public OrdersService(FurnitureStoreDbContext context)
        : base(context) { }
}
