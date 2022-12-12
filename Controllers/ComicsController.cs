using Key_Comic_DB_Capstone.Models;
using Key_Comic_DB_Capstone.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Key_Comic_DB_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ComicsController : ControllerBase
    {
        private readonly IComicsRepository _comicsRepository;
        public ComicsController (IComicsRepository comicsRepository)
        {
            _comicsRepository = comicsRepository;
        }
    
        // GET: api/<ComicsController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_comicsRepository.GetAllComics());
        }

        // GET api/<ComicsController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var comics = _comicsRepository.GetById(id);
            if (comics == null)
            {
                return NotFound();
            }
            return Ok(comics);
        }

        // POST api/<ComicsController>
        [HttpPost]
        public IActionResult Comics(Comics comics)
        {
            _comicsRepository.Add(comics);
            return CreatedAtAction("Get", new { id = comics.Id }, comics);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _comicsRepository.Delete(id);
            return NoContent();
        }

        // PUT api/<ComicsController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}
    }
}
