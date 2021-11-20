// Classes
interface PersonInterface {
    name: string
    getId(): number
    register(): string
}

class Person implements PersonInterface {
    private id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    public getId() {
        return this.id
    }

    register() {
        return `${this.name} is now registered`
    }

}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

console.log(brad.register())
console.log(brad, mike)

// Sub Classes
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.name);
console.log(emp.register());

