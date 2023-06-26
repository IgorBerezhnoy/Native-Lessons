function icreaseAge(user: UserType) {
    user.age++;
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}
test('object test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    };
    icreaseAge(user);

    expect(user.age).toBe(33);
    const superMam = user;
    superMam.age = 1000;

    expect(user.age).toBe(1000);
});
test('Array test', () => {
    let users = [{
        name: 'Dimych',
        age: 32
    }, {
        name: 'Dimych',
        age: 32
    }];
    let admin = users;
    admin.push({name: 'Bandyugan', age: 10});


    expect(users.length).toBe(3);

});
test('value test', () => {
    let usersCount = 100;

    let adminCount = usersCount;
    adminCount = adminCount + 1;

    expect(adminCount).toBe(101);
    expect(usersCount).toBe(100);

});
test('object address test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    };
    let addr = user.address;
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    };
    user2.address.title = 'Kanary';

    expect(user.address).toBe(user2.address);
});
test('array address test', () => {
    const address={
        title: 'Kanary'
    }
    let user = {
        name: 'Dimych',
        age: 32,
        address: address
    };
    let addr = user.address;
    let user2 = {
        name: 'Natasha',
        age: 30,
        address: address
    };

    const users=[user,user2,{name: "Misha", age: 4, address: address}]
    const admins=[user,user2]
    admins[0].name="Dmitry"

    expect(users[0].name).toBe("Dmitry");
    expect(user.name).toBe("Dmitry");
});
