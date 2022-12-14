using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Key_Comic_DB_Capstone.Models;
using Key_Comic_DB_Capstone.Utils;
using System.Data;
using System.Data.SqlClient;

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
                          SELECT Id, Title, IssueNumber, CoverArtist, StoryWriter, CoverImage, ComicReleased
                            FROM Comics";

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
                            ComicReleased = DbUtils.GetString(reader, "ComicReleased")
                        });
                    }

                    reader.Close();

                    return comics;
                }
            }
        }
        public Comics GetById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT Id, Title, IssueNumber, CoverArtist, StoryWriter, CoverImage, ComicReleased
                FROM Comics
                WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    Comics comics = null;
                    while (reader.Read())
                    {
                        comics = new Comics()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            IssueNumber = DbUtils.GetInt(reader, "IssueNumber"),
                            CoverArtist = DbUtils.GetString(reader, "CoverArtist"),
                            StoryWriter = DbUtils.GetString(reader, "StoryWriter"),
                            CoverImage = DbUtils.GetString(reader, "CoverImage"),
                            ComicReleased = DbUtils.GetString(reader, "ComicReleased"),
                        };
                    }

                    reader.Close();

                    return comics;
                }
            }
        }
    
            public void Add(Comics comics)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                        INSERT INTO Comics (Title, IssueNumber, CoverArtist, StoryWriter, CoverImage, ComicReleased)
                        OUTPUT INSERTED.ID
                        VALUES (@title, @issueNumber, @coverArtist, @storyWriter, @coverImage, @comicReleased)";

                        cmd.Parameters.AddWithValue("@title", comics.Title);
                        cmd.Parameters.AddWithValue("@issueNumber", comics.IssueNumber);
                        cmd.Parameters.AddWithValue("@coverArtist", comics.CoverArtist);
                        cmd.Parameters.AddWithValue("@storyWriter", comics.StoryWriter);
                        cmd.Parameters.AddWithValue("@coverImage", comics.CoverImage);
                        cmd.Parameters.AddWithValue("@comicReleased", comics.ComicReleased);

                        comics.Id = (int)cmd.ExecuteScalar();
                    };
                }
            }
        public void Delete(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Comics
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                };
            }
        }
        public void Update(Comics comics)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE Comics
                            SET Title = @title,
                                IssueNumber = @issueNumber,
                                CoverArtist = @coverArtist,
                                StoryWriter = @storyWriter,
                                CoverImage = @coverImage,
                                ComicReleased = @comicReleased                            
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", comics.Id);
                    cmd.Parameters.AddWithValue("@title", comics.Title);
                    cmd.Parameters.AddWithValue("@issueNumber", comics.IssueNumber);
                    cmd.Parameters.AddWithValue("@coverArtist", comics.CoverArtist);
                    cmd.Parameters.AddWithValue("@storyWriter", comics.StoryWriter);
                    cmd.Parameters.AddWithValue("@coverImage", comics.CoverImage);
                    cmd.Parameters.AddWithValue("@comicReleased", comics.ComicReleased);


                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

