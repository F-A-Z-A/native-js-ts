// const deleteUserAC = (userId) => ({
//   type: 'DELETE_USER',
//   payload: {
//     userId: userId
//   }
// })

function commonHello() {
  console.log(`i am ${this.name} from ${this.site}!`)
}

const userFabric = (name) => {
  const user = {
    name: name,
    site: "it-incubator",
    dateOfBirth: new Date(20011984),
    hello: commonHello
  }
  return user;
}

const u1 = userFabric("Andrey")
const u2 = userFabric("Sergey")

u1.hello()
u2.hello()

console.log(u1.hello === u2.hello)