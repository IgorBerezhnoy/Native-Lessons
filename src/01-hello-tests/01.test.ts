import {mult, splitIntoWords, sum} from './01';

let a :number
let b :number
let c :number
beforeEach(()=>{
    a=1
    b=2
    c=3
})

test('sum should be correct', () => {

    const result = sum(a, b);
    a=100
    const result1 = sum(a, b);
    expect(result).toBe(3);
    expect(result1).toBe(102);
});
test('multiply should be correct', () => {

    const result = mult(a, b);
    const result1 = mult(c, b);
    expect(result).toBe(2);
    expect(result1).toBe(6);
});

test("splitting into should be correct", ()=>{
    const sent1="Hello my friend!"
    const sent2="JS - the best programing language."
    const result1 = splitIntoWords(sent1)
    const result2=splitIntoWords(sent2)
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")


    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programing")
    expect(result2[4]).toBe("language")
})
