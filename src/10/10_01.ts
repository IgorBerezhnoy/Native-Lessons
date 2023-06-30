export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}
export type WithCompaniesType = {
    companies: { id: number, title: string }[]
}

export type CompaniesType={
    [key:string]:{ id: number, title: string }[]
}
export function makeHairstyle(user: UserWithLaptopType, power: number) {
    const copy = {
        ...user,
        hair: user.hair / power
    };
    // copy.hair=user.hair/power;
    return copy;
}

export const moveUser = (user: UserWithLaptopType, city: string) => ({
    ...user, address: {...user.address, city}
});
// copy.hair=user.hair/power;


export const upgradeLaptop = (user: UserWithLaptopType, laptop: string) => ({
        ...user,
        laptop: {...user.laptop, title: laptop}
    }
);
export const changeHouse = (user: UserWithLaptopType & UserWithBooksType, house: number) => ({
        ...user,
        address: {...user.address, house}
    }
);

export const addNewBook = (user: UserWithLaptopType & UserWithBooksType, newBook: string) => ({
    ...user,
    books: [...user.books, newBook]
});

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...user,
    books: user.books.map(el => el = el === oldBook ? el = newBook : el)
});
export const removeBook = (user: UserWithLaptopType & UserWithBooksType, BookForDelete: string) => ({
    ...user,
    books: user.books.filter(el => el !== BookForDelete)
});
export const addNewCompany = (user: UserWithLaptopType & WithCompaniesType, newCompanyTitle: string) => {
    let newCompany = {id: 3, title: newCompanyTitle};
    return {...user, companies: [...user.companies, newCompany]};
};
export const updateCompany = (user: UserWithLaptopType & WithCompaniesType, id: number, title: string) => ({
    ...user,
    companies: user.companies.map(el => el.id == id ? ({...el, title}) : el)
});
export const updateCompanyTitle = (companies: CompaniesType, userName: string, id:number,title: string) => ({
    ...companies,
   [userName]: companies[userName].map(el => el.id == id ? ({...el, title}) : el)
});
// export const updateCompanyTitle2 = (companies: CompaniesType, userName: string, id:number,title: string) => ({
//     ...companies,
//    [userName]: companies[userName].map(el => el.id == id ? ({...el, title}) : el)
// });

