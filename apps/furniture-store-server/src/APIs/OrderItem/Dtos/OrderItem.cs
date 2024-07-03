namespace FurnitureStore.APIs.Dtos;

public class OrderItem
{
    public DateTime CreatedAt { get; set; }

    public string Id { get; set; }

    public string? Order { get; set; }

    public double? Price { get; set; }

    public string? Product { get; set; }

    public int? Quantity { get; set; }

    public DateTime UpdatedAt { get; set; }
}
