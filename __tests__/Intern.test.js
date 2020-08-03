const Intern = require('../lib/Intern')

test('check to see Employee super() importing correctly', () => {
    const intern = new Intern('Janet')

    expect(intern.name).toBe('Janet');
    expect(intern.id).toEqual(Number);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('check manager functions', () => {
    const intern = new Intern('Janet');

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
    expect(intern.getRole()).toEqual('Intern');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})