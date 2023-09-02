// фабричная функция


type DeleteUserType=ReturnType<typeof deleteUser>
const deleteUser = (userId: string) => {
    return {
        type: 'Delete_user',
        payload: {
            userId
        }
    };
};

// constructor
function DeleteUser(userID: string) {
    // @ts-ignore
    this.type = 'Delete_user';
    // @ts-ignore
    this.payload= {
        userID:userID
    }
}


// @ts-ignore
let action1 = new DeleteUser('135');
console.log(action1);