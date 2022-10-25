// number, string, boolean, null, undefined, Nan
// Array, object

const user1 = {
    name: "Bob",
    age: 25,
    isStudent: true
}

const address = {
    country: "Sudan",
    city: "Hartum"
}

const user2 = user1

let num1 = 10
let num2 = num1
num2= 'hey'
console.log(num1)
console.log(num2)

user2.name = "Anna"
console.log(user1)

// делаем копию => вносим изменения в копию => используем копию с изменениями

const userCopy = {}
userCopy.age = user1.age
userCopy.isStudent = user1.isStudent
userCopy.name = "Bob"

console.log(user1)
console.log(userCopy)

const userCopy2 = {...user1, isMarried: undefined} // добавление нового свойства;

const userCopy3 = {...userCopy2, isMarried: false} // изменение существующего свойства

const userCopy4 = {...userCopy3, ...address} // слияние двух объектов
const userCopy5 = {...userCopy4, country} // имя свойства совпадает с имененем переменной

// deep copy
const user = {
    id: 1,
    name: "Bob",
    age: 25,
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum" // => "Минск"
    }
}


const deepCopyUser = {...user, address: {...user.address, city: "Минск"}}

deepCopyUser.address.city = "Минск";
console.log(user.address === deepCopyUser.address)

const users = [
    {
        id: 1,
        name:"Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum"
        }
    },
    {
        id: 2,
        name:"Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum"
        }
    },
    {
        id: 3,
        name:"Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum"
        }
    },
    {
        id: 4,
        name:"Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum"
        }
    },
]

const newUser = {
    id: 5,
    name:"Donald",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum"
    }
}

const users2 = [...users, newUser]
const users3 = users2.map(u => u.id === 5 ? {...u, name: "Joe", address: {...u.address, city: "Minsk"}} : u)
console.log(users3)
