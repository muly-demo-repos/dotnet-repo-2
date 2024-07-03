using FurnitureStore.Infrastructure.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FurnitureStore.Infrastructure;

public class FurnitureStoreDbContext : IdentityDbContext<IdentityUser>
{
    public FurnitureStoreDbContext(DbContextOptions<FurnitureStoreDbContext> options)
        : base(options) { }

    public DbSet<CategoryDbModel> Categories { get; set; }

    public DbSet<ProductDbModel> Products { get; set; }

    public DbSet<CustomerDbModel> Customers { get; set; }

    public DbSet<OrderDbModel> Orders { get; set; }

    public DbSet<OrderItemDbModel> OrderItems { get; set; }
}
