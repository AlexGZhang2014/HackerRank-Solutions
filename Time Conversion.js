Problem:

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description:

Complete the timeConversion function in the editor below.
It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s): s = a string representing time in  hour format

Solution:

function timeConversion(s) {
  const letters = ['A', 'P', 'M'];
  let standardTime = s.split('').filter(x => !letters.includes(x)).join('').split(':');
  let prevHour = parseInt(standardTime[0]);
  if (s.includes('P') && prevHour < 12) {
    const newHour = prevHour + 12;
    const newHourString = newHour.toString();
    standardTime.shift();
    standardTime.unshift(newHourString);
    return standardTime.join(':');
  } else if (s.includes('A') && prevHour === 12) {
    const zeroHour = "00";
    standardTime.shift();
    standardTime.unshift(zeroHour);
    return standardTime.join(':');
  } else {
     return standardTime.join(':');
  }
}
