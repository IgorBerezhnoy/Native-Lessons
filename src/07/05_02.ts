import {GovernmentBuildings, HouseType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings= (buildings: Array<GovernmentBuildings>)=>{
    return buildings.map(el=>el.address.street.title)
}
export const getStreetsTitlesOfHouses= (houses: Array<HouseType>)=>{
   return houses.map(el=>el.address.street.title)
}

export const createGreetingMessageForPeople= (houses: Array<HouseType>)=>{
    return houses.map(el=>`Hello guys from ${el.address.street.title}`)
}