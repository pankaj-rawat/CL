using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityLocal.DataEngine
{
    public class City
    {
        public int Id { get; set; }
        public String Name   { get; set; }
        public State State { get; set; }
    }
}
