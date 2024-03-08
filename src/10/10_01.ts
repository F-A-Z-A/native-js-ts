export type UserType = {
  name: string
  hair: number
  address: { city: string, house?: number }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBookType = UserType & {
  books: string[]
}

export type WithCompanyType = UserType & {
  companies: { id: number, title: string }[]
}

export function makeHairStyle(u: UserType, power: number) {
  const copy = {...u, hair: u.hair / power}
  // copy.hair = u.hair / power;
  return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
  const copy = {...u, address: {...u.address, city}}
  return copy;
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptopTitle: string) {
  const copy = {...u, laptop: {...u.laptop, title: laptopTitle}}
  return copy;
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType, house: number) {
  const copy = {...u, address: {...u.address, house}}
  return copy;
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBookType, newBooks: string[]) {
  return {...u, books: [...u.books, ...newBooks]}
  // return {...u, books: [...u.books.concat(newBooks)]}
}

export function updateBooks(u: UserWithLaptopType & UserWithBookType, oldBook: string, newBook: string) {
  return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export function removeBook(u: UserWithLaptopType & UserWithBookType, book: string) {
  return {...u, books: u.books.filter(b => b !== book)}
}

export function addNewCompany(u: UserWithLaptopType & WithCompanyType, newCompany: { id: number, title: string }) {
  return {...u, companies: [...u.companies, {...newCompany}]}
  // return {...u, books: [...u.books.concat(newBooks)]}
}

export function updateCompanyName(u: UserWithLaptopType & WithCompanyType, index: number, title: string) {
  return {...u, companies: u.companies.map(c => c.id === index ? {...c, title} : c)}
}

export function updateCompany(
  companies: { [key: string]: { id: number, title: string }[] },
  userName: string,
  companyID: number,
  newTitle: string) {
  return {
    ...companies,
    [userName]: [...companies[userName].map(el => el.id === companyID ? {...el, title: newTitle} : el)]
  }
}

