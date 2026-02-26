using System.Collections.Generic;
using Key_Comic_DB_Capstone.Models;

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
