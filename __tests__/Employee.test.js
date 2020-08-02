const Employee = require('../lib/Employee')

test('getting parent employee info', () => {
    const employee = new Employee('Janet');

    expect(employee.name).toBe('Janet');
    expect(employee.id).toEqual(Number);
    expect(employee.email).toEqual(expect.any(String));
})

test('calling employee.function', () => {
    const employee = new Employee('Janet');

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
    expect(employee.getRole()).toEqual('Employee');

});