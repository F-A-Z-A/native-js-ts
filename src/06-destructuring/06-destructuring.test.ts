import {ManType} from "./06-destructuring";

let props: ManType;
beforeEach(() => {
  props = {
    name: "Andrey",
    age: 40,
    lessons: [{title: "1"}, {title: "2"}],
    address: {
      street: {
        title: "name street"
      }
    }
  }
})

test("111", () => {
  
  
  // const age = props.age;
  // const lesson = props.lessons;
  const {age, lessons} = props
  const {title} = props.address.street
  
  
  const a = props.age;
  const l = props.lessons;
  
  expect(age).toBe(40);
  expect(lessons.length).toBe(2);
  
  expect(a).toBe(40);
  expect(l.length).toBe(2);
})

test("222", () => {
  const l1 = props.lessons[0];
  const l2 = props.lessons[1];
  
  const [ls1, ls2] = props.lessons;
  const [ls1, ...restLessons] = props.lessons;
  
  expect(l1.title).toBe("1")
  expect(l2.title).toBe("2")
  
  expect(ls1.title).toBe("1")
  expect(ls2.title).toBe("2")
})