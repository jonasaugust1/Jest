const example = require('../dist/example.class')

test("Tem que ser igual", () => {
    expect(example.return10()).toBe(10)
})

test("Tem que ser Null", () => {
    expect(example.returnNull()).toBeNull()
})

test("Tem que ser Undefined", () => {
    expect(example.returnUndefined()).toBeUndefined()
})

test("Tem que ser Defined", () => {
    expect(example.returnString()).toBeDefined()
})

test("Tem que ser True", () => {
    expect(example.returnTrue()).toBeTruthy()
})

test("Tem que ser False", () => {
    expect(example.returnFalse()).toBeFalsy()
})

test("Tem que ter Joao", () => {
    expect(example.returnArray()).toContain("Joao");
})

test("Tem que ser tudo igual", () => {
    expect(example.returnArray()).toEqual(["Joao", "Maria", "Jonas", "Miguel"])
})

test("Não tem que ser igual", () => {
    expect(example.returnArray()).not.toEqual(["Jonas", "Miguel", "Maria", "Joao"])
})

test("Tem que ser maior", () => {
    expect(example.return10()).toBeGreaterThan(8)
})

test("Tem que ser maior ou igual", () => {
    expect(example.return10()).toBeGreaterThanOrEqual(10)
})

test("Tem que ser menor", () => {
    expect(example.return10()).toBeLessThan(12)
})

test("Tem que conter Hello World", () => {
    expect(example.returnString()).toMatch(/Hello world/)
})

test("Tem que conter Hello World", () => {
    expect(example.returnString()).toMatch(new RegExp('Hello|World'))
})

test("tem que retornar um Error", () => {
    expect(() => {
        example.returnException()
    }).toThrow();
})