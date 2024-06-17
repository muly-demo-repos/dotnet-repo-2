using Microsoft.AspNetCore.Mvc;

namespace FurnitureStore.APIs;

[ApiController()]
public class CustomersController : CustomersControllerBase
{
    public CustomersController(ICustomersService service)
        : base(service) { }
}
