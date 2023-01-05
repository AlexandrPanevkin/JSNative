const strings = ['Alex', 'Donald', 'Bob']
console.log(strings.sort())

const strings1 = ['Alex', 'Donald', 'Bob', 100]
console.log(strings1.sort())

const strings2 = ['Alex', 'alex', 'Donald', 'Bob', 100]
console.log(strings2.sort())

//1. Сортирует строки из коробки, т.е. без доп. параметров
//2. Сортирует строки типа по "алфавиту" unicode
//3. Работает мутабельно
//4. Возвращает ссылку на исходный массив

const numbers = [1000, 250, 99, 801]
console.log(numbers.sort())

//5. Для остальных случаев необходимо передать коллбэк

// const compareFunc = (a, b) => {
//     if (a > b) {
//         return 10
//     } else {
//         return -100
//     }
// }

const compareFunc = (a, b) => a - b
console.log(numbers.sort(compareFunc))
console.log(numbers.sort((a, b) => a - b))

//6. Вместе с sort часто используют метод reverse

const nums = [1, 3, 12, 23, 34, 56, 67]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;

            [nums[i + 1], nums[1] = [nums[i], nums[i + 1]]]
        }
    }
    if (isSorted) break
}