using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityLocal.DataEngine
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedOn { get; set; }
        public long PhoneLandLine { get; set; }
        public long PhoneCell { get; set; }
        public int MyProperty { get; set; }
        public DateTime LastupdatedOn { get; set; }
    }
}
