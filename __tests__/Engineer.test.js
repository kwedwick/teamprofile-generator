const Engineer = require('../lib/Engineer')

test('check to make sure info is pulled from employee', () => {
    const engineer = new Engineer('Janet')

    expect(engineer.name).toBe('Janet');
    expect(engineer.id).toEqual(Number);
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('check engineer functions', () => {
    const engineer = new Engineer('Janet');

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})