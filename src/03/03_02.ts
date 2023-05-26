export type CityType = {
    title: string
    houses: Array<HouseType>,
    governmentBuildings: Array<GovernmentBuildings>,
    citizensNumber: number
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


type AddressType = {
    number?: number
    street: TitleType
}

type TitleType = {
    title: string
}
type GovernmentBuildings ={
    type: string,
    budget: number,
    staffCount: number,
    address: AddressType
}

