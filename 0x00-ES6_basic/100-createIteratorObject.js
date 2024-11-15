export default function* createIteratorObject(report) {
  const allDepartments = report.allEmployees;
  for (const departmentEmployees of Object.values(allDepartments)) {
    for (const employee of departmentEmployees) {
      yield employee;
    }
  }
}
