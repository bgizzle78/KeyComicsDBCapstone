using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Key_Comic_DB_Capstone.Models;
using Key_Comic_DB_Capstone.Utils;
using System.Data;

namespace Key_Comic_DB_Capstone.Repositories
{
    public class ComicsRepository : BaseRepository, IComicsRepository
    {
        public ComicsRepository(IConfiguration configuration) : base(configuration) { }

        public List<Comics> GetAllComics()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                          SELECT Id, Title, IssueNumber, CoverArtist, StoryWriter, CoverImage
                            FROM Comics"
                    ;

                    var reader = cmd.ExecuteReader();

                    var comics = new List<Comics>();
                    while (reader.Read())
                    {
                        comics.Add(new Comics()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            IssueNumber = DbUtils.GetInt(reader, "IssueNumber"),
                            CoverArtist = DbUtils.GetString(reader, "CoverArtist"),
                            StoryWriter = DbUtils.GetString(reader, "StoryWriter"),
                            CoverImage = DbUtils.GetString(reader, "CoverImage"),
                        });
                    }

                    reader.Close();

                    return comics;
                }
            }
        }
    }
}