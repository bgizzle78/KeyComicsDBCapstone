using Key_Comic_DB_Capstone.Models;
using System;
using System.Collections.Generic;

namespace Key_Comic_DB_Capstone.Repositories
{
    public interface IComicsRepository
    {
        List<Comics> GetAllComics();
        Comics GetById(int id);
        void Add(Comics comics);
        void Delete(int id);
        //void Update(Comics comics);
    }
}
