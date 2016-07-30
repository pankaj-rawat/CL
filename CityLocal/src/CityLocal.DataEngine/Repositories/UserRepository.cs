using CityLocal.DataEngine.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityLocal.DataEngine.Repositories
{
    public class UserRepository : IUserRepository
    {
        public int Add(User user)
        {
            return user.Id;
        }

        public User Find(int id)
        {
            User user = new User();
            user.Id = 1;
            user.Email = "123@email.com";
            user.CreatedOn = DateTime.Today;
            user.LastupdatedOn = DateTime.Today;
            user.Password = "Password";
            user.PhoneCell = 9811666755;
            return user;
        }

        public IEnumerable<User> GetAll()
        {
            
            IList<User> users = new List<User>();
            User user = new User();
            user.Id = 1;
            user.Email = "123@email.com";
            user.CreatedOn = DateTime.Today;
            user.LastupdatedOn = DateTime.Today;
            user.Password = "Password";
            user.PhoneCell = 9811666755;
            users.Add(user);

            user = new User();
            user.Id = 1;
            user.Email = "123@email.com";
            user.CreatedOn = DateTime.Today;
            user.LastupdatedOn = DateTime.Today;
            user.Password = "Password";
            user.PhoneCell = 9811666755;
            users.Add(user);
            return users;
        }

        public int Remove(int id)
        {
            throw new NotImplementedException();
        }

        public int Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}
