import React, {useState} from "react";

export type ManType = {
	name: string
	age: number
	lessons: { title: string }[]
	address: { street: { title: string } }
}

type PropsType = {
	title: string
	man: ManType
	food: Array<string>
	car: { model: string }
}

function useMyState(m: string) {
	return [m, function () {
	}]
}

const ManComponent = ({title, man, ...rest}: PropsType) => {
	
	const [message, setMessage] = useState("hello")
	
	return <div>
		<h1>{title}</h1>
		<div>{man.name}</div>
		<div>{rest.car.model}</div>
	</div>
}