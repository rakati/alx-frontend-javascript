export default function createEmployeesObject(departmentName, employees) {
  const l = {};
  l[`${departmentName}`] = employees;
  return l;
}
