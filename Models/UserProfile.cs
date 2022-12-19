using System.ComponentModel.DataAnnotations;

namespace Key_Comic_DB_Capstone.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }

    }
}
