namespace FurnitureStore.APIs.Dtos;

public class ProductUpdateInput
{
    public CategoryIdDto? Category { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string? Description { get; set; }

    public string? Id { get; set; }

    public string? Name { get; set; }

    public List<OrderItemIdDto>? OrderItems { get; set; }

    public double? Price { get; set; }

    public string? Sku { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
