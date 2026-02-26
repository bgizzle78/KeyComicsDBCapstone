using System;
using Key_Comic_DB_Capstone.Models;
using Key_Comic_DB_Capstone.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace KeyComicDBCapstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        //private readonly IUserProfileRepository _userProfileRepository;
        private readonly IUserRepository _userRepository;
        public UserProfileController(IUserRepository userRepository)
        {
            //_userProfileRepository = userProfileRepository;
            _userRepository = userRepository;
        }

        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userRepository.GetByEmail(email);

            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_userRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userRepository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
        [HttpPost]
        public IActionResult Add(UserProfile userProfile)
        {
            _userRepository.Add(userProfile);
            return CreatedAtAction(
                "GetByEmail",
                new { email = userProfile.Email },
                userProfile);
        }
    }
}
