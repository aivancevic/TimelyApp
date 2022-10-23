using Microsoft.EntityFrameworkCore;
using TimelyAPI.Models;

namespace TimelyAPI.Data
{
    public class TimelyDbContext : DbContext
    {
        public TimelyDbContext(DbContextOptions options) : base(options)
        {

        }

        //DbSet

        public DbSet<TimelyModel> Timelies { get; set; }
    }
}
