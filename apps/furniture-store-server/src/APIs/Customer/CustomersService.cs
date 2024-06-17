using FurnitureStore.Infrastructure;

namespace FurnitureStore.APIs;

public class CustomersService : CustomersServiceBase
{
    public CustomersService(FurnitureStoreDbContext context)
        : base(context) { }
}
