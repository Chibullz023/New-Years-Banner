/* Function NYEDays()
   Purpose: Calculate the number of days between New Year's and a given date

   Variables
   CheckDay: A date object containing the given date
   XYear: The 4-digit year value of the given date
   XDay: December 31 in the year of the given date
   DayCount: The number of days between New Year's Eve and the given date
*/

function NYEDays(CheckDay) {
    var XYear = CheckDay.getFullYear();
    var XDay = new Date("December, 31, 2020");
    XDay.setFullYear(XYear);
    var DayCount = (XDay - CheckDay) / (1000 * 60 * 60 * 24);
    DayCount = Math.round(DayCount);
    return DayCount;
}

/* Calcuating the days till New years Eve. */

var now = new Date();
var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

Today = new Date();
TodayDay = Today.getDate();
TodayMon = Today.getMonth();
TodayYear = Today.getFullYear();

if (TodayMon == 0) { TodayMonth = "January"; }
else if (TodayMon == 1) { TodayMonth = "February"; }
else if (TodayMon == 2) { TodayMonth = "March"; }
else if (TodayMon == 3) { TodayMonth = "April"; }
else if (TodayMon == 4) { TodayMonth = "May"; }
else if (TodayMon == 5) { TodayMonth = "June"; }
else if (TodayMon == 6) { TodayMonth = "July"; }
else if (TodayMon == 7) { TodayMonth = "August"; }
else if (TodayMon == 8) { TodayMonth = "September"; }
else if (TodayMon == 9) { TodayMonth = "October"; }
else if (TodayMon == 10) { TodayMonth = "November"; }
else if (TodayMon == 11) { TodayMonth = "December"; }
else { TodayMonth = TodayMon; }


/* Adding statement for the current day */

today = new Date();

BigDay = new Date("December 31, 2020");
msPerDay = 24 * 60 * 60 * 1000;
timeLeft = (BigDay.getTime() - today.getTime());
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft) * 24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);
