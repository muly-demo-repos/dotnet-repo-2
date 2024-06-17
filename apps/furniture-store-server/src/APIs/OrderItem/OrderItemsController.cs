using Microsoft.AspNetCore.Mvc;

namespace FurnitureStore.APIs;

[ApiController()]
public class OrderItemsController : OrderItemsControllerBase
{
    public OrderItemsController(IOrderItemsService service)
        : base(service) { }
}
