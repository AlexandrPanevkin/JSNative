import {addNewBooksToUser, moveUser, upgradeUserLaptop, UserWithBooksType, UserWithLaptopType} from "./10";



test('change address', ()=>{
    let user:UserWithLaptopType = {
        name: 'Alex',
        age: 25,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', ()=>{
    let user:UserWithLaptopType = {
        name: 'Alex',
        age: 25,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
})

test('add new books to user', ()=>{
    let user:UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        age: 25,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Lenovo'
        },
        books: ['css', 'html', 'js']
    }

    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('ts')
})
