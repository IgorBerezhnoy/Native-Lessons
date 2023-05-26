import {StudentType} from '../02/02';
import {HouseType} from './03_02';
import {CityType, GovernmentBuildings} from '../02/02_02';

const sum = (a: number, b: number) => {
    return a + b;
};
export const addSkill =
    (st: StudentType, skill: string) => {
        st.technologies.push({
            id: new Date().getTime(),
            title: skill
        });
    };
export const addSkill2 =
    (st: StudentType, skill: string) => {
        st.technologies.push({
            id: new Date().getTime(),
            title: skill
        });
    };

export const makeStudentActive = (st: StudentType, js: string) => {
    st.isActive = true;
};
export const doesStudentLiveIn = (st: StudentType, city: string) => {
    return st.address.city.title == city;
};

export const addMoneyToBudget= (Building: GovernmentBuildings, number: number)=>{
    Building.budget+=number
}

export const repairHouse= (house: HouseType)=>{
    house.repaired=true
}
export const toFireStaff= (building: GovernmentBuildings, number: number)=>{
building.staffCount-=number
}
export const toHireStaff= (building: GovernmentBuildings, number: number)=>{
building.staffCount+=number
}
export const createMessage= (city: CityType)=>{
    return`Hello ${city.title} citizens I want you be happy.All ${city.citizensNumber} men`

}