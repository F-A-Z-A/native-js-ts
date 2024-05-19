// function DeleteUserAction(userId) {
//   // this = {}
//   this.type = 'DELETE_USER';
//   this.payload = {
//     userId: userId
//   }
//   // return this
// }
//
// const action1 = new DeleteUserAction(7777)
// const action2 = new DeleteUserAction(9999)
//
// console.log(action1.constructor.name)
// console.log(action2)

function User(name, site, dob) {
  this.name = name;
  this.site = site;
  this.dateOfBirth = dob;
}

User.prototype.hello = function () {
  console.log(`i am ${this.name} from ${this.site}!`)
}

const u1 = new User("Andrey", "Nadym", 20011984)
const u2 = new User("Sergey", "Nadym", 11052011)

u1.hello()
u2.hello()