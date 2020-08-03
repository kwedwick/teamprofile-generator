const Manager = require('../lib/Manager')

test('check to see Employee super() importing correctly', () => {
    const manager = new Manager('Janet')

    expect(manager.name).toBe('Janet');
    expect(manager.id).toEqual(Number);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(Number);
})

test('check manager functions', () => {
    const manager = new Manager('Janet');

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
    expect(manager.getRole()).toEqual('Manager');
})