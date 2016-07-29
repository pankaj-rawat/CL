using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CityLocal.API.Models;
using Microsoft.AspNetCore.Mvc;
using CityLocal.DataEngine.Repositories;
using CityLocal.DataEngine.Interfaces;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CityLocal.API.Controllers
{
    [Route("clapi/[controller]")]
    public class UsersController : Controller
    {
        private readonly IObjectMapper mapper;
        private readonly IUserRepository user;
        public UsersController(IUserRepository userRepository,IObjectMapper objMapper)
        {
            user = userRepository;
            mapper = objMapper;
        }

        //[HttpGet]
        //public IEnumerable<User> Get()
        //{
        //    IEnumerable<DataEngine.User> users = user.GetAll();
        //    return users.ToList().Select(Mapper.Map<DataEngine.User, User>);
        //}

        [HttpGet("{id}")]
        public User Get(int id)
        {
            return mapper.CLMapper.Map<User>(user.Find(id));
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
