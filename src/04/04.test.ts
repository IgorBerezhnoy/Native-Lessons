test('should take old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(el=>el>90);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});
test('should take cheaper 160 ', () => {
    const courses = [{title: 'css', price: 100},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}];
    const cheapPredicate = courses.filter(el=>el.price<160);
    expect(cheapPredicate.length).toBe(2);
    expect(cheapPredicate[0].price).toBe(100);
    expect(cheapPredicate[0].title).toBe("css");
    expect(cheapPredicate[1].title).toBe("React");
    expect(cheapPredicate[1].price).toBe(150);
});
test ("get only completed task ", ()=>{
    const tasks=[
        {id:1, title:"Bread", isDone:false },
        {id:2, title:"Milk", isDone:true },
        {id:3, title:"Sold", isDone:false },
        {id:4, title:"Sugar", isDone:true },
    ]
    const completedTasks=tasks.filter(el=>!el.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
})
