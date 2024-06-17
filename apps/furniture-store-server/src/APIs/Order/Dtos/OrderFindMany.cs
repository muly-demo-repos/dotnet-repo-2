using FurnitureStore.APIs.Common;
using FurnitureStore.Infrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace FurnitureStore.APIs.Dtos;

[BindProperties(SupportsGet = true)]
public class OrderFindMany : FindManyInput<Order, OrderWhereInput> { }
