using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityLocal.API
{
    public class ObjectMapperProfile : AutoMapper.Profile
    {
        public ObjectMapperProfile()
        {
            this.CreateMap<DataEngine.User, CityLocal.API.Models.User>();
            this.CreateMap<CityLocal.API.Models.User, DataEngine.User>();
        }       
    }
}
