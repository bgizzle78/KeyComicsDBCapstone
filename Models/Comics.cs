using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Key_Comic_DB_Capstone.Models
{
    public class Comics
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int IssueNumber { get; set; }
        public string CoverArtist { get; set; }
        public string StoryWriter { get; set; }
        public string CoverImage { get; set; }
        public string ComicReleased { get; set; }
    }
}
