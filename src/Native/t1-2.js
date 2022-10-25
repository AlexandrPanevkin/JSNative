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
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const funcNames = (st) => st.name
const funcScores = (st) => st.scores
const funcStudents = (st) => ({...st, isStudent: true})


const globalM = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

console.log(globalM(students, funcNames))
console.log(globalM(students, funcScores))
console.log(globalM(students, funcStudents))

const globalF = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result.push(array[i])
        }
    }
    return result
}

console.log(globalF(students, s => s.age > 20))
console.log(students.filter(s => s.age > 20))

const globalFd = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            return array[i]
        }
    }
}

console.log(globalFd(students, s => s.name === "Bob"))
console.log(students.find(s => s.name === "Bob"))

const globalPush = (array, el) => {
    array[array.length] = el;
    return array.length;
}

console.log(globalPush(students, {name: "Egor"}))

const numbers = [1, 2, 3, 4, 5]

const globalIndex = (arr, el) => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === el) {
            return i
        }
    }
    return -1
}


console.log(globalIndex(numbers, 2))

