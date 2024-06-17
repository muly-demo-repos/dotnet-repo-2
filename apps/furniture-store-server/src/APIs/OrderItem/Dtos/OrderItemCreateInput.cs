namespace FurnitureStore.APIs.Dtos;

public class OrderItemCreateInput
{
    public DateTime CreatedAt { get; set; }

    public string? Id { get; set; }

    public OrderIdDto? Order { get; set; }

    public double? Price { get; set; }

    public ProductIdDto? Product { get; set; }

    public int? Quantity { get; set; }

    public DateTime UpdatedAt { get; set; }
}
