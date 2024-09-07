import {GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export function demolishHousesOnTheStreet(houses: HouseType[], street: string) {
	return houses.filter(h => h.address.street.title !== street);
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number) {
	return buildings.filter(b => b.staffCount > number)
}


// export function demolishHousesOnTheStreet(city: CityType, street: string) {
//   city.houses = city.houses.filter(h => h.address.street.title !== street)
// }
//
// export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number) {
//   return buildings.filter(b => b.staffCount > number)
// }