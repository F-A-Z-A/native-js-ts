import {
  addNewBooksToUser, addNewCompany,
  makeHairStyle,
  moveUser,
  moveUserToOtherHouse, removeBook, updateBooks, updateCompany, updateCompanyName,
  upgradeUserLaptop,
  UserType,
  UserWithBookType,
  UserWithLaptopType, WithCompanyType
} from "./10_01"

test.skip("reference type test", () => {
  const user: UserType = {
    name: "Andrey",
    hair: 40,
    address: {
      city: "Nadym"
    }
  };
  
  const awesomeUser = makeHairStyle(user, 2);
  
  expect(user.hair).toBe(40);
  expect(awesomeUser.hair).toBe(20);
  expect(awesomeUser.address).toBe(user.address);
});

test.skip("change address", () => {
  let user: UserWithLaptopType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"}
  };
  
  const movedUser = moveUser(user, "Tumen");
  
  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.city).toBe("Tumen");
});

test.skip("update laptop to macbook", () => {
  let user: UserWithLaptopType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"}
  };
  
  const userCopy = upgradeUserLaptop(user, "MacBook");
  
  expect(user).not.toBe(userCopy);
  expect(user.address).toBe(userCopy.address);
  expect(user.laptop).not.toBe(userCopy.laptop);
  expect(userCopy.laptop.title).toBe("MacBook");
  expect(user.laptop.title).toBe("ROG");
});

test.skip("user with laptop and book", () => {
  let user: UserWithLaptopType & UserWithBookType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"},
    books: ["css", "html", "js", "react"]
  };
  
  const userCopy = moveUserToOtherHouse(user, 99);
  
  expect(user).not.toBe(userCopy);
  expect(user.books).toBe(userCopy.books);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(userCopy.address.house).toBe(99);
});

test.skip("add new books to user", () => {
  let user: UserWithLaptopType & UserWithBookType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"},
    books: ["css", "html", "js", "react"]
  };
  
  const userCopy = addNewBooksToUser(user, ["ts", "rest api"]);
  
  expect(user).not.toBe(userCopy);
  expect(user.address).toBe(userCopy.address);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.books).not.toBe(userCopy.books);
  expect(user.books.length).toBe(4);
  expect(userCopy.books.length).toBe(6);
  expect(userCopy.books[4]).toBe("ts");
  expect(userCopy.books[5]).toBe("rest api");
});

test.skip("update js to ts", () => {
  let user: UserWithLaptopType & UserWithBookType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"},
    books: ["css", "html", "js", "react"]
  };
  
  const userCopy = updateBooks(user, "js", "ts");
  
  expect(user).not.toBe(userCopy);
  expect(user.address).toBe(userCopy.address);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.books).not.toBe(userCopy.books);
  expect(user.books.length).toBe(userCopy.books.length);
  expect(user.books[2]).toBe("js");
  expect(userCopy.books[2]).toBe("ts");
});

test.skip("remove js book", () => {
  let user: UserWithLaptopType & UserWithBookType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"},
    books: ["css", "html", "js", "react"]
  };
  
  const userCopy = removeBook(user, "js");
  
  expect(user).not.toBe(userCopy);
  expect(user.address).toBe(userCopy.address);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.books).not.toBe(userCopy.books);
  expect(user.books.length).toBe(4);
  expect(userCopy.books.length).toBe(3);
});

test.skip("add new company", () => {
  let user: UserWithLaptopType & WithCompanyType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"},
    companies: [
      {id: 1, title: "Epam"},
      {id: 2, title: "Incubator"},
    ]
  };
  
  const userCopy = addNewCompany(user, {id: 3, title: "Google"});
  
  expect(user).not.toBe(userCopy);
  expect(user.companies.length).toBe(2);
  expect(userCopy.companies.length).toBe(3);
});

test.skip("update company name", () => {
  let user: UserWithLaptopType & WithCompanyType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"},
    companies: [
      {id: 1, title: "Epam"},
      {id: 2, title: "Incubator"},
    ]
  };
  
  const userCopy = updateCompanyName(user, 1, "EPAM");
  
  expect(user).not.toBe(userCopy);
  expect(user.address).toBe(userCopy.address);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.companies).not.toBe(userCopy.companies);
  expect(user.companies[0].title).toBe("Epam");
  expect(userCopy.companies[0].title).toBe("EPAM");
});

test("update company", () => {
  let user: UserWithLaptopType = {
    name: "Andrey",
    hair: 40,
    address: {city: "Nadym", house: 12},
    laptop: {title: "ROG"},
  };
  
  const companies = {
    "Andrey": [{id: 1, title: "Epam"}, {id: 2, title: "Incubator"}],
    "Dimych": [{id: 2, title: "Incubator"}],
  }
  
  const companyCopy = updateCompany(companies, "Andrey", 1, "EPAM")
  
  expect(companies["Andrey"]).not.toBe(companyCopy["Andrey"]);
  expect(companies["Dimych"]).toBe(companyCopy["Dimych"]);
  expect(companies["Andrey"][0].title).toBe("Epam");
  expect(companyCopy["Andrey"][0].title).toBe("EPAM");
});