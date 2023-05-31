test("should take old men older then 90",()=>{
    const ages = [18, 20, 21, 22, 1, 100, 90, 14];

    const oldAges=ages.filter(el=>el>90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})
test("should take chipper 160",()=>{
    const courses = [{title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150}];

    const cheapCourses=courses.filter(el=>el.price<160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(110)
    expect(cheapCourses[1].price).toBe(150)

})

test("get only completed tasks",()=>{
    const tasks=[
        {id:1, title:"Bread", isDone:false},
        {id:2, title:"milk", isDone:true},
        {id:3, title:"solt", isDone:false},
        {id:4, title:"Sugar", isDone:true}
    ]

    const completedTasks=tasks.filter(el=>el.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe("milk")
    expect(completedTasks[1].title).toBe("Sugar")
})