using Microsoft.AspNetCore.Mvc;

namespace FurnitureStore.APIs;

[ApiController()]
public class ProductsController : ProductsControllerBase
{
    public ProductsController(IProductsService service)
        : base(service) { }
}
