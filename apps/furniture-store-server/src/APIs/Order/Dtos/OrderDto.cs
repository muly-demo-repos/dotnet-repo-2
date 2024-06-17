namespace FurnitureStore.APIs.Dtos;

public class OrderDto : OrderIdDto
{
    public DateTime CreatedAt { get; set; }

    public CustomerIdDto? Customer { get; set; }

    public DateTime? OrderDate { get; set; }

    public List<OrderItemIdDto>? OrderItems { get; set; }

    public DateTime UpdatedAt { get; set; }
}
