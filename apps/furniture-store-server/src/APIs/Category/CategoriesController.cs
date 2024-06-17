using Microsoft.AspNetCore.Mvc;

namespace FurnitureStore.APIs;

[ApiController()]
public class CategoriesController : CategoriesControllerBase
{
    public CategoriesController(ICategoriesService service)
        : base(service) { }
}
