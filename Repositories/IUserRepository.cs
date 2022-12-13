using Key_Comic_DB_Capstone.Models;
using System.Collections.Generic;

namespace Key_Comic_DB_Capstone.Repositories
{
    public interface IUserRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
        List<UserProfile> GetAll();
        UserProfile GetUserById(int id);
    }
}
