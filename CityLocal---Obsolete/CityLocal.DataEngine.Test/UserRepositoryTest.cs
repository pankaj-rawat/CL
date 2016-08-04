using CityLocal.DataEngine.Interfaces;
using CityLocal.DataEngine.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace CityLocal.DataEngine.Test
{
    public class UserRepositoryTest
    {
        [Fact]
        public void TestAdd()
        {
            IUserRepository sut = new UserRepository();
            User user = new User { Id = 1 };
            int newUserId=sut.Add(user);
            Assert.Equal(1, newUserId);
        }
    }
}
