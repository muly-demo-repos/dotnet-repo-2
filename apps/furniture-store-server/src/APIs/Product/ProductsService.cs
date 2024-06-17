using FurnitureStore.Infrastructure;

namespace FurnitureStore.APIs;

public class ProductsService : ProductsServiceBase
{
    public ProductsService(FurnitureStoreDbContext context)
        : base(context) { }
}
