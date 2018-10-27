A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline,
he decides to cancel class if fewer than some number of students are present when class starts.
Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

angryProfessor has the following parameter(s):

k: the threshold number of students
a: an array of integers representing arrival times

Solution:

function angryProfessor(k, a) {
  const onTimeStudents = a.filter(student => student <= 0);
  if (onTimeStudents.length >= k) {
    return "NO";
  } else {
    return "YES";
  }
}
