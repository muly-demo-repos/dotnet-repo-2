using FurnitureStore.APIs;
using FurnitureStore.APIs.Common;
using FurnitureStore.APIs.Dtos;
using FurnitureStore.APIs.Errors;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FurnitureStore.APIs;

[Route("api/[controller]")]
[ApiController()]
public abstract class CategoriesControllerBase : ControllerBase
{
    protected readonly ICategoriesService _service;

    public CategoriesControllerBase(ICategoriesService service)
    {
        _service = service;
    }

    /// <summary>
    /// Meta data about Category records
    /// </summary>
    [HttpPost("meta")]
    public async Task<ActionResult<MetadataDto>> CategoriesMeta(
        [FromQuery()] CategoryFindMany filter
    )
    {
        return Ok(await _service.CategoriesMeta(filter));
    }

    /// <summary>
    /// Connect multiple Products records to Category
    /// </summary>
    [HttpPost("{Id}/products")]
    [Authorize(Roles = "user")]
    public async Task<ActionResult> ConnectProducts(
        [FromRoute()] CategoryIdDto idDto,
        [FromQuery()] ProductIdDto[] productsId
    )
    {
        try
        {
            await _service.ConnectProducts(idDto, productsId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Disconnect multiple Products records from Category
    /// </summary>
    [HttpDelete("{Id}/products")]
    [Authorize(Roles = "user")]
    public async Task<ActionResult> DisconnectProducts(
        [FromRoute()] CategoryIdDto idDto,
        [FromBody()] ProductIdDto[] productsId
    )
    {
        try
        {
            await _service.DisconnectProducts(idDto, productsId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Find multiple Products records for Category
    /// </summary>
    [HttpGet("{Id}/products")]
    [Authorize(Roles = "user")]
    public async Task<ActionResult<List<ProductDto>>> FindProducts(
        [FromRoute()] CategoryIdDto idDto,
        [FromQuery()] ProductFindMany filter
    )
    {
        try
        {
            return Ok(await _service.FindProducts(idDto, filter));
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    /// <summary>
    /// Update multiple Products records for Category
    /// </summary>
    [HttpPatch("{Id}/products")]
    [Authorize(Roles = "user")]
    public async Task<ActionResult> UpdateProducts(
        [FromRoute()] CategoryIdDto idDto,
        [FromBody()] ProductIdDto[] productsId
    )
    {
        try
        {
            await _service.UpdateProducts(idDto, productsId);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Create one Category
    /// </summary>
    [HttpPost()]
    [Authorize(Roles = "user")]
    public async Task<ActionResult<CategoryDto>> CreateCategory(CategoryCreateInput input)
    {
        var category = await _service.CreateCategory(input);

        return CreatedAtAction(nameof(Category), new { id = category.Id }, category);
    }

    /// <summary>
    /// Delete one Category
    /// </summary>
    [HttpDelete("{Id}")]
    [Authorize(Roles = "user")]
    public async Task<ActionResult> DeleteCategory([FromRoute()] CategoryIdDto idDto)
    {
        try
        {
            await _service.DeleteCategory(idDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }

    /// <summary>
    /// Find many Categories
    /// </summary>
    [HttpGet()]
    [Authorize(Roles = "user")]
    public async Task<ActionResult<List<CategoryDto>>> Categories(
        [FromQuery()] CategoryFindMany filter
    )
    {
        return Ok(await _service.Categories(filter));
    }

    /// <summary>
    /// Get one Category
    /// </summary>
    [HttpGet("{Id}")]
    [Authorize(Roles = "user")]
    public async Task<ActionResult<CategoryDto>> Category([FromRoute()] CategoryIdDto idDto)
    {
        try
        {
            return await _service.Category(idDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    /// <summary>
    /// Update one Category
    /// </summary>
    [HttpPatch("{Id}")]
    [Authorize(Roles = "user")]
    public async Task<ActionResult> UpdateCategory(
        [FromRoute()] CategoryIdDto idDto,
        [FromQuery()] CategoryUpdateInput categoryUpdateDto
    )
    {
        try
        {
            await _service.UpdateCategory(idDto, categoryUpdateDto);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }

        return NoContent();
    }
}
