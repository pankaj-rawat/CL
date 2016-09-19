"use strict";
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["InActive"] = 2] = "InActive";
    Status[Status["Verified"] = 3] = "Verified";
    Status[Status["VerificationPending"] = 4] = "VerificationPending";
    Status[Status["ReportedDataIncorrect"] = 5] = "ReportedDataIncorrect";
    Status[Status["Blocked"] = 6] = "Blocked";
})(exports.Status || (exports.Status = {}));
var Status = exports.Status;
(function (Role) {
    Role[Role["Guest"] = 1] = "Guest";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["BussinessOwner"] = 3] = "BussinessOwner";
    Role[Role["RegisteredUser"] = 4] = "RegisteredUser";
})(exports.Role || (exports.Role = {}));
var Role = exports.Role;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 7] = "Sunday";
})(exports.WeekDay || (exports.WeekDay = {}));
var WeekDay = exports.WeekDay;
//# sourceMappingURL=definition.js.map