import React, {ChangeEvent, MouseEvent} from 'react';

// const callback = () => {
//   console.log("hi")
// }
//
// window.setTimeout(callback, 1000)

export const User = () => {
  
  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name);
  }
  
  const nameChanged = () => {
    console.log("name changed")
  }
  
  const ageChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("age change: " + event.currentTarget.value)
  }
  
  const focusLost = () => {
    console.log("focus lost")
  }
  
  return (
    <div>
      <textarea onChange={nameChanged} onBlur={focusLost}>Andrey</textarea>
      <input onChange={ageChanged} type={"number"}/>
      <button name={"delete"} onClick={deleteUser}>X</button>
      <button name={"save"} onClick={deleteUser}>X</button>
    </div>
  )
}