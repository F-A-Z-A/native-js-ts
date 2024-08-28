import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";
import {StudentType} from "../02-objects/02.";

export const sum = (a: number, b: number) => {
	return a + b;
}

// const res = sum(sum(2, 3), sum(2, 4))

export const addSkill = (st: StudentType, skill: string) => {
	st.technologies.push({
		id: new Date().getTime(),
		title: skill
	})
};

export function makeStudentActive(s: StudentType) {
	s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
	return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
	building.budget += budget
}

export const repairHouse = (house: HouseType) => {
	house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, person: number) => {
	building.staffCount -= person
}

export const toHireStaff = (building: GovernmentBuildingType, person: number) => {
	building.staffCount += person
}

export const createMassage = (props: CityType) => {
	return `Hello ${props.title} ${props.citizensNumber}!`
}
