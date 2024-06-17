namespace FurnitureStore.APIs.Dtos;

public class CategoryDto : CategoryIdDto
{
    public DateTime CreatedAt { get; set; }

    public string? Description { get; set; }

    public string? Name { get; set; }

    public List<ProductIdDto>? Products { get; set; }

    public DateTime UpdatedAt { get; set; }
}
