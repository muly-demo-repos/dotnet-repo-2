using Microsoft.AspNetCore.Mvc;

namespace FurnitureStore.APIs;

[ApiController()]
public class OrdersController : OrdersControllerBase
{
    public OrdersController(IOrdersService service)
        : base(service) { }
}
