using FurnitureStore.Infrastructure;

namespace FurnitureStore.APIs;

public class CategoriesService : CategoriesServiceBase
{
    public CategoriesService(FurnitureStoreDbContext context)
        : base(context) { }
}
