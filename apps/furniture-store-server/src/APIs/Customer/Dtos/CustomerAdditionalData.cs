using System.ComponentModel.DataAnnotations;

namespace FurnitureStore.APIs;

public class CustomerAdditionalData
{
    [Required()]
    public string Description { get; set; }

    [Required()]
    public int ValueProjection { get; set; }
}
