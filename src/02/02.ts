type LocalCityType = {
  title: string
  countryTitle: string
}

type TechType = {
  id: number
  title: string
}

type AdressType = {
  streetTitle: string
  city: LocalCityType
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  adress: AdressType
  technologies: Array<TechType>
}

export const student: StudentType = {
  id: 1,
  name: "Dimych",
  age: 32,
  isActive: false,
  adress: {
    streetTitle: "Surganova 2",
    city: {
      title: "Minsk",
      countryTitle: "Belarus"
    }
  },
  technologies: [
    {
      id: 1,
      title: "HTML"
    },
    {
      id: 2,
      title: "JS"
    },
    {
      id: 3,
      title: "React"
    }
  ]
}