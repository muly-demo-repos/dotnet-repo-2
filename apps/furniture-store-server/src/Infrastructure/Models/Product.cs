using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FurnitureStore.Infrastructure.Models;

[Table("Products")]
public class Product
{
    public string? CategoryId { get; set; }

    [ForeignKey(nameof(CategoryId))]
    public Category? Category { get; set; } = null;

    [Required()]
    public DateTime CreatedAt { get; set; }

    [StringLength(1000)]
    public string? Description { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    [StringLength(1000)]
    public string? Name { get; set; }

    public List<OrderItem>? OrderItems { get; set; } = new List<OrderItem>();

    [Range(-999999999, 999999999)]
    public double? Price { get; set; }

    [StringLength(1000)]
    public string? Sku { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
