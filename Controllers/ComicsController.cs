using Key_Comic_DB_Capstone.Models;
using Key_Comic_DB_Capstone.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace KeyComicDBCapstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ComicsController : ControllerBase
    {
        private readonly IComicsRepository _comicsRepository;
        public ComicsController(IComicsRepository comicsRepository)
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

        //DELETE api/<ComicsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _comicsRepository.Delete(id);
            return NoContent();
        }

        // PUT api/<ComicsController>/5
        [HttpPut("{id}")]
        public IActionResult Update(Comics comics)
        {
            _comicsRepository.Update(comics);
            return Ok(comics);
        }

        //GET api/<ComicsController>
        [HttpGet("search")]
        public IActionResult Search(string q)
        {
            return Ok(_comicsRepository.Search(q));
        }
    }
}