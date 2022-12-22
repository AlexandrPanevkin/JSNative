export type UserWithLaptopType = {
    name: string,
    age: number,
    address: {
        city: string,
        house: number
    },
    laptop: {
        title: string
    }
}

export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooksType, addedBook: string) {
    return {
        ...user,
        books: [...user.books, addedBook]
    }
}