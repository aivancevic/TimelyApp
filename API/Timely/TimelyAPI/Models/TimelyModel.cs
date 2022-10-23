using System.ComponentModel.DataAnnotations;

namespace TimelyAPI.Models
{
    public class TimelyModel
    {
        [Key]
        public Guid Id { get; set; } 

        public string ProjectName { get; set; }
        public DateTime Start { get; set; }
        public DateTime Stop { get; set; }
        public DateTime Duration { get; set; }
    }
}