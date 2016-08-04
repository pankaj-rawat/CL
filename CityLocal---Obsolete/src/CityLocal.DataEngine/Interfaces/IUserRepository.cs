using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityLocal.DataEngine.Interfaces
{
    public interface IUserRepository
    {
        int Add(User user);
        int Update(User user);
        int Remove(int id);
        User Find(int id);
        IEnumerable<User> GetAll();
    }
}
