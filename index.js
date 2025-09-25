// Write your solution in this file!
// 1. Initialize employee object
const employee = {
  name: "John",
  streetAddress: "123 Main St",
};

// 2. Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// 3. Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 4. Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 5. Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
