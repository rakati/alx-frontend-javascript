export default function createReportObject(employeesList) {
  const employeesReport = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return employeesReport;
}
