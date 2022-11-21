
export const usersObj = {
    '0': 'Alex',
    '1': 'Valera',
    '2': 'Nika',
    '3': 'Tanya',
}
type UsersType = {
[key: string] : {id: number, name: string}
}

export const users: UsersType = {
    '0': {id: 101, name: 'Alex'},
    '3232312': {id: 3232312, name: 'Valera'},
    '1212': {id: 1212, name: 'Nika'},
    '1': {id: 1, name: 'Tanya'},
}

let user = {id: 101656546, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray =
    [
        {id: 101, name: 'Alex'},
        {id: 3232312, name: 'Valera'},
        {id: 1212, name: 'Nika'},
        {id: 1, name: 'Tanya'}
    ]

