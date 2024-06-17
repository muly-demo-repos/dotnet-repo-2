using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FurnitureStore.Infrastructure.Models;

[Table("OrderItems")]
public class OrderItem
{
    [Required()]
    public DateTime CreatedAt { get; set; }

    [Key()]
    [Required()]
    public string Id { get; set; }

    public string? OrderId { get; set; }

    [ForeignKey(nameof(OrderId))]
    public Order? Order { get; set; } = null;

    [Range(-999999999, 999999999)]
    public double? Price { get; set; }

    public string? ProductId { get; set; }

    [ForeignKey(nameof(ProductId))]
    public Product? Product { get; set; } = null;

    [Range(-999999999, 999999999)]
    public int? Quantity { get; set; }

    [Required()]
    public DateTime UpdatedAt { get; set; }
}
