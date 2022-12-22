const todoListId_1 = '1'
const todoListId_2 = '2'


const todoLists = [
    {
        id: todoListId_1,
        title: 'What to learn',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
    },
]

const getPropName = (param) => `${param} name`

const tasks = {
    [todoListId_1]: [{id: '11', title: 'HTML'},
        {id: '12', title: 'CSS'},
        {id: '13', title: 'JS'},],
    [todoListId_2]: [
        {id: '21', title: 'Milk'},
        {id: '22', title: 'Beer'},
        {id: '23', title: 'Water'},
    ],
    "user name": "Bob",
    [getPropName('student')]: 'Alex',
    [10 + 30]: 'hey' //'40'
}

console.log(tasks['user name'])

//delete 23

console.log({...tasks, [todoListId_2]: tasks[todoListId_2].filter(t => t.id !== '23')})

//reduce

const nums = [1, 2, 3, 4, 5]

console.log(nums.reduce((acc, el) => acc + el, 0))

//acc = 0, el = 1 => 1
//acc = 1, el = 2 => 3
//acc = 3, el = 3 => 6
//acc = 6, el = 4 => 10
//acc = 10, el = 5 => 15
// => 15

console.log(nums.reduce((acc, el) => acc > el ? acc : el))

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 25,
        isMarried: false,
        scores: 100
    }
];

console.log(students.filter(s => s.name !== 'Nick'))
console.log(students.reduce((acc, st) => {
    if (st.name !== 'Nick') {
        acc.push(st)
    }
    return acc
}, []))

console.log(students.map(st=>({...st, scores: st.scores + 10})))
console.log(students.reduce((acc, st) => {
    const copySt = {...st, scores: st.scores + 10}
    acc.push(copySt)
    return acc
}, []))


console.log(students.reduce((acc, st)=> {
    acc[st.name] = {...st}
    delete acc[st.name].name
    return acc
}))

console.log(students.reduce((acc, el)=>{
    acc[el.id] = el
    delete acc[el.id].id
    return acc
}, {}))