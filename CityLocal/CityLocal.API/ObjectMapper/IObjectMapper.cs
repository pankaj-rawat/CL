using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityLocal.API
{
    public interface IObjectMapper
    {
        IMapper CLMapper { get; set; }
    }
}
