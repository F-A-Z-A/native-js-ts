// const userId = 456
//
// class DeleteUserAction {
//   constructor() {
//     this.type = 'DELETE_USER';
//     this.payload = {
//       userId: userId
//     }
//   }
// }

// ---------------------------------------------------------------------------------

class User {
  _name = ""

  constructor(name, site, dob) {
    this._name = name;
    this.site = site;
    this.dateOfBirth = dob;
    this.counter = 0;
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }

  hello() {
    this.counter++;
    console.log(`i am ${this._name} from ${this.site}!`);
  }
}

const u1 = new User("Andrey", "Nadym", 20011984)
const u2 = new User("Sergey", "Nadym", 11052011)

u2.name = "Luda"

// let users = [u1, u2]

// users.forEach(u => u.hello())

class Coder extends User {
  constructor(name, site, dob, tech) {
    super(name, site, dob)
    this.tech = tech
  }

  code() {
    console.log(`i am ${this._name}, here is my ${this.tech} code: const sum = (a, b) => a + b`)
  }

  hello() {
    super.hello();
    console.log(`Go away`)
  }
}

const coder1 = new Coder("Andrey Coder", "Nadym", 20011984, "c#")
// coder1.hello()
// coder1.code()

class Hacker extends Coder {
  constructor(a, b, c, d) {
    super();
    this.tech = "XXX"
    this._name = "XXXXX"
  }

  code() {
    console.log(`i am hack everything`)
  }
}

const hacker = new Hacker("Andrey Coder", "Nadym", 20011984, "c#")
// hacker.hello()
// hacker.code()


let users = [u1, u2, coder1, hacker]

// users.forEach(u => u.hello())

class SuperArray extends Array {
  get Length() {
    return 1000
  }
}
