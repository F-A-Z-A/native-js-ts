function increaseAge(u: User09Type) {
  u.age++
}

type User09Type = {
  name: string
  age: number
  address: { title: string }
}

test("big test", () => {
  
  const user: User09Type = {
    name: "Andrey",
    age: 40,
    address: {
      title: "Nadym"
    }
  }
  
  increaseAge(user)
  
  expect(user.age).toBe(41)
  
  const superman = user
  
  superman.age = 1000
  
  expect(user.age).toBe(1000)
})

test("array test", () => {
  
  const users = [
    {
      name: "Andrey",
      age: 40
    },
    {
      name: "Andrey",
      age: 40
    }
  ]
  
  const admins = users
  
  admins.push({name: "newUser", age: 11})
  
  expect(users[2]).toEqual({name: "newUser", age: 11})
})

test("value type test", () => {
  
  const usersCount = 100;
  
  let adminsCount = usersCount;
  
  adminsCount = ++adminsCount
  
  expect(adminsCount).toBe(101)
})

test("big test - 2", () => {
  
  const user: User09Type = {
    name: "Andrey",
    age: 40,
    address: {
      title: "Nadym"
    }
  }
  
  const user2: User09Type = {
    name: "Ludw",
    age: 18,
    address: user.address
  }
  
  user2.address.title = "Tumen"
  
  expect(user.address.title).toBe("Tumen")
})