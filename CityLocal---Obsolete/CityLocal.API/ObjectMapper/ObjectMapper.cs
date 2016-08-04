using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityLocal.API
{
    public class ObjectMapper : IObjectMapper
    {
        public IMapper CLMapper { get; set; }
        public ObjectMapper()
        {
            var config = new MapperConfiguration(cfg =>
             {
                 cfg.AddProfile<ObjectMapperProfile>();
             }
            );

            CLMapper = config.CreateMapper();
        }
    }
}
