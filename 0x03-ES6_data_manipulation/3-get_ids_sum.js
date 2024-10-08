export default function getStudentIdsSum(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.reduce((accumulator, student) => accumulator + student.id, 0);
  }
  return [];
}
