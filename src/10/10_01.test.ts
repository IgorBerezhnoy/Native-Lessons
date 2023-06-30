import {
    addNewBook, addNewCompany,
    changeHouse, CompaniesType,
    makeHairstyle,
    moveUser, removeBook, updateBook, updateCompany, updateCompanyTitle,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';


test('reference type tes', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }, laptop: {
            title: 'ZenBook'
        }
    };
    const cutUser = makeHairstyle(user, 2);
    user = cutUser;


    expect(cutUser.hair).toBe(16);
    expect(cutUser.address).toBe(user.address);
});
test('change address test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };
    const moveUser1 = moveUser(user, 'Kiev');

    expect(user).not.toBe(moveUser1);
    expect(user.address).not.toBe(moveUser1.address);
    expect(moveUser1.address.city).toBe('Kiev');
    expect(user.laptop).toBe(moveUser1.laptop);

});
test('upgrade laptop to macbook test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };
    const userWithNewLaptop = upgradeLaptop(user, 'MacBook');

    expect(user).not.toBe(userWithNewLaptop);
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop);
    expect(userWithNewLaptop.laptop.title).toBe('MacBook');
    expect(user.laptop.title).toBe('ZenBook');
    expect(user.address).toBe(userWithNewLaptop.address);

});
test('upgrade number house test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React']
    };
    const userWithChangedHouses = changeHouse(user, 13);

    expect(user).not.toBe(userWithChangedHouses);
    expect(user.address).not.toBe(userWithChangedHouses.address);
    expect(userWithChangedHouses.address.house).toBe(13);
    expect(user.address.house).toBe(12);
    expect(user.laptop).toBe(userWithChangedHouses.laptop);
});
test('add new book test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React']
    };
    const userWithNewBook = addNewBook(user, 'ts');

    expect(user).not.toBe(userWithNewBook);
    expect(user.books).not.toBe(userWithNewBook.books);
    expect(user.books.length).toBe(4);
    expect(userWithNewBook.books.length).toBe(5);
    expect(userWithNewBook.books[4]).toBe('ts');
    expect(user.address.house).toBe(12);
    expect(user.laptop).toBe(userWithNewBook.laptop);
    expect(user.address).toBe(userWithNewBook.address);
});
test('update js book to ts test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React']
    };
    const userWithNewUpdateBook = updateBook(user, user.books[2], 'ts');

    expect(user).not.toBe(userWithNewUpdateBook);
    expect(user.books).not.toBe(userWithNewUpdateBook.books);
    expect(user.books.length).toBe(4);
    expect(userWithNewUpdateBook.books.length).toBe(4);
    expect(userWithNewUpdateBook.books[2]).toBe('ts');
    expect(user.address.house).toBe(12);
    expect(user.laptop).toBe(userWithNewUpdateBook.laptop);
    expect(user.address).toBe(userWithNewUpdateBook.address);
});
test('remove book test', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'React'],

    };
    const userWithoutBook = removeBook(user, user.books[2]);

    expect(user).not.toBe(userWithoutBook);
    expect(user.books).not.toBe(userWithoutBook.books);
    expect(user.books.length).toBe(4);
    expect(userWithoutBook.books.length).toBe(3);
    expect(user.address.house).toBe(12);
    expect(user.laptop).toBe(userWithoutBook.laptop);
    expect(user.address).toBe(userWithoutBook.address);
});
test('add new company test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-Incubator'}]

    };
    const userWithNewCompany = addNewCompany(user, 'Google');

    expect(user).not.toBe(userWithNewCompany);
    expect(user.companies.length).toBe(2);
    expect(userWithNewCompany.companies.length).toBe(3);
    expect(userWithNewCompany.companies[2].title).toBe('Google');
    expect(user.address.house).toBe(12);
    expect(user.laptop).toBe(userWithNewCompany.laptop);
    expect(user.address).toBe(userWithNewCompany.address);
});
test('update company test', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}]

    };
    const userWithUpdateCompany = updateCompany(user, 1, 'Epam');

    expect(user).not.toBe(userWithUpdateCompany);
    expect(user.companies.length).toBe(2);
    expect(userWithUpdateCompany.companies.length).toBe(2);
    expect(userWithUpdateCompany.companies[0].title).toBe('Epam');
    expect(user.companies[0].title).toBe('Епам');
    expect(user.address.house).toBe(12);
    expect(user.laptop).toBe(userWithUpdateCompany.laptop);
    expect(user.address).toBe(userWithUpdateCompany.address);
});
test('update company test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
    };
    let companies: CompaniesType = {
        ['Dimych']: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}],
        ['Artem']: [{id: 4, title: 'IT-Incubator'}]
    };


    const updateCompany: CompaniesType = updateCompanyTitle(companies, 'Dimych', 1, 'Epam');

    expect(companies).not.toBe(updateCompany);
    expect(companies['Dimych'].length).toBe(2);
    expect(updateCompany['Dimych'].length).toBe(2);
    expect(updateCompany['Dimych'][0].title).toBe('Epam');
    expect(companies['Dimych'][0].title).toBe('Епам');
});


//
// test('add new books test', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk',
//             house: 12
//         },
//         laptop: {
//             title: 'ZenBook'
//         },
//         books: ['css', 'html', 'js', 'React']
//     };
//     const userWithNewBooks = addNewBooks(user, ['ts', 'rest api']);
//
//     expect(user).not.toBe(userWithNewBooks);
//     expect(user.books).not.toBe(userWithNewBooks.books);
//     expect(user.books.length).toBe(4);
//     expect(userWithNewBooks.books.length).toBe(6);
//     expect(userWithNewBooks.books).toBe(['ts', 'rest api', 'css', 'html', 'js', 'React']);
//     expect(user.address.house).toBe(12);
//     expect(user.laptop).toBe(userWithNewBooks.laptop);
//     expect(user.address).toBe(userWithNewBooks.address);
// });
//
