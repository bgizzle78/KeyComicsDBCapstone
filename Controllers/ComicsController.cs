using Key_Comic_DB_Capstone.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Key_Comic_DB_Capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IComicsRepository _comicsRepository;
        public PostController(IComicsRepository comicsRepository)
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
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ComicsController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        // PUT api/<ComicsController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE api/<ComicsController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
