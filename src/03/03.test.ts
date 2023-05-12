import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';
import {CityType, GovernmentBuildingsType, HouseType} from '../02/02_02';

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Dimych',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [{
            id: 1,
            title: 'HTML'
        }, {
            id: 2,
            title: 'CSS'
        }, {
            id: 3,
            title: 'React'
        }]
    };
});

test('new tech skill should be to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
});
test('Student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
});
test('does the student live in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');
    expect(result1).toBe(false);
    expect(result2).toBe(true);
});

export const addMoneyToBudget= (city: GovernmentBuildingsType, budget: number)=>{
city.budget+=budget
}
export const repairHouse= (house: HouseType)=>{
    house.repaired=true
}
export const toFireStaff= (government: GovernmentBuildingsType, staffCountToFire: number)=>{
    government.staffCount-=staffCountToFire
}
export const toHireStaff= (government: GovernmentBuildingsType, staffCountToHire: number)=>{
    government.staffCount+=staffCountToHire
}
export const createMessage= (props: CityType)=>{

    return`Hello New ${props.title} I want yo be happy. All ${props.citizensNumber} men`
}