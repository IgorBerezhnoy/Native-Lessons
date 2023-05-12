import {student, StudentType} from '../02/02';

export const addSkill = (student: StudentType, technologies: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: technologies
    });
};
export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
};


export const sum = (a: number, b: number) => {
    debugger
    return a + b;
};

export const doesStudentLiveIn=(student:StudentType,city:string)=>{
    return student.address.city.title === city;
}