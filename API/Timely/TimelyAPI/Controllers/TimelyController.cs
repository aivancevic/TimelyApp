using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TimelyAPI.Data;
using TimelyAPI.Models;

namespace TimelyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TimelyController : Controller
    {
        private readonly TimelyDbContext timelyDbContext;

        public TimelyController(TimelyDbContext timelyDbContext)
        {
            this.timelyDbContext = timelyDbContext;
        }

        //Get all projects Route: api/Timely
        [HttpGet]
        [ActionName("GetProjects")]
        public async Task <IActionResult> GetProjects() 
        {
          var timelies = await timelyDbContext.Timelies.ToListAsync();
          return Ok(timelies);
        }

        //Get project Route: api/Timely/latestDate
        [HttpGet]
        [Route("latestDate")]
        [ActionName("GetProjectLatestDate")]
        public async Task<IActionResult> GetProjectLatestDate()
        {
            var timelies = await timelyDbContext.Timelies.OrderByDescending(x => x.Start).FirstOrDefaultAsync();
            return Ok(timelies);
        }

        //Get all project by id 
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetProject")]
        public async Task<IActionResult> GetProjectById([FromRoute] Guid id)
        {
            var project = await timelyDbContext.Timelies.FirstOrDefaultAsync(x => x.Id == id);
            if (project != null)
            {
                return Ok(project);
            }
            else
                return NotFound("Project not found");
        }

        //Add project
        [HttpPost]

        public async Task <IActionResult> AddProject([FromBody] TimelyModel timely)
        {
            timely.Id = Guid.NewGuid();
            timely.Start = timely.Start.AddHours(2);
            await timelyDbContext.Timelies.AddAsync(timely);
            await timelyDbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProjects), timely.Id, timely);
        }

        [HttpPut]
        [Route("{id:guid}")]

        public async Task<IActionResult> UpdateProject([FromRoute] Guid id, [FromBody] TimelyModel timely)
        {
            var project = await timelyDbContext.Timelies.FirstOrDefaultAsync(x => x.Id == id);

            if (project != null)
            {
                project.ProjectName = timely.ProjectName;
                project.Stop = timely.Stop.AddHours(2);
                project.Start = timely.Start;
                project.Duration = timely.Duration;
                await timelyDbContext.SaveChangesAsync();
                return Ok(project);
            }
            else
                return NotFound("Project not found");
        }

        //Delete project
        [HttpDelete]
        [Route("delete/{id:guid}")]

        public async Task<IActionResult> DeleteProject([FromRoute] Guid id)
        {
            var project = await timelyDbContext.Timelies.FirstOrDefaultAsync(x => x.Id == id);

            if (project != null)
            {
                timelyDbContext.Remove(project);              
                await timelyDbContext.SaveChangesAsync();
                return Ok(project);
            }
            else
                return NotFound("Project not found");
        }
    }
}
