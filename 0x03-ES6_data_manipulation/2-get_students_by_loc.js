export default function getStudentsByLocation(studentsList, location) {
  if (studentsList instanceof Array) {
    return studentsList.filter((student) => student.location === location);
  }
  return [];
}
