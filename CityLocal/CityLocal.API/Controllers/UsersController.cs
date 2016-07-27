using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CityLocal.API.Interfaces;
using CityLocal.API.Models;
using CityLocal.API.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CityLocal.API.Controllers
{
    [Route("clapi/[controller]")]
    public class UsersController : Controller
    {
        [HttpGet]
        public IEnumerable<User> Get()
        {
            IUserRepository user=new UserRepository();
            return user.GetAll();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            IUserRepository user = new UserRepository();
            return user.Find(id);
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
