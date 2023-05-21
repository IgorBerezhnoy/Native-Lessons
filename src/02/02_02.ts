export  type HouseType={
    buildedAt:number
    repaired:boolean
    address:AddressType
    id?:number
}
export  type AddressType={
    number?:number
    street:StreetType
}
export type StreetType={
    title:string
}

export type GovernmentBuildingsType={
    type:'HOSPITAL'|'FIRE-STATION'
    budget:number
    staffCount:number
    address:AddressType
}

export type CityType={

    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}