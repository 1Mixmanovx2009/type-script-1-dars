"use strict";
// 1.1
// let newValue: string | null = prompt("Qiymat kiriting")
// let newValue1: string | null = prompt("Qiymat kiriting")
// let list: string [] = []
// function collectList(value: string | null): void {
//     if (value) {
//         list.push(value)
//     }
// }
// collectList(newValue)
// console.log(list);
// 1.2
// let numberList:number[] = [21, 44, 22, 77, 33, 98, 33, 1]
// function findMaxNumber(arr:number[]):number{
//     let maxNum:number = arr[0]
//     for(let num of arr){
//         if(num >= maxNum){
//             maxNum = num
//         }
//     }
//     return maxNum
// }
// const result:number = findMaxNumber(numberList)
// console.log(result);
// 1.3
// let value:string | null = prompt("Soz kiriting")
// let list:string[] = ["salom", "yaxshi", "zor"]
// function findValue(newValue:string | null, arr:string[]):void{
//     let count:number = 0
//     arr.forEach((item:string) => {
//         if(item == newValue){
//             count++
//         }
//     })
//     console.log(count > 0 ? true : false);
// }
// findValue(value,list)
// 1.4
// function getEvenNumbers(arr: number[]): number[] {
//     return arr.filter((num) => num % 2 === 0);
//   }
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenNumbers = getEvenNumbers(numbers);
//   console.log(evenNumbers);
// 1.5
// function findSum(numbers: number[]): number {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }
// const numbers: number[] = [1, 2, 3, 4, 5];
// const sum = findSum(numbers);
// console.log("Array elementlari yig'indisi:", sum);
// 1.6
// type User = { id: number; name: string; email: string; password: string; address: string };
// const getUserNameAndEmail = (users: User[]) => users.map(({ name, email }) => ({ name, email }));
// const users: User[] = [
//   {
//     id: 1, 
//     name: "Ali", 
//     email: "ali@example.com", 
//     password: "1234", 
//     address: "Tashkent" 
//   },
//   {
//     id: 2, 
//     name: "Sara", 
//     email: "sara@example.com", 
//     password: "5678", 
//     address: "Samarkand" 
//   },
// ];
// console.log(getUserNameAndEmail(users));
// 1.7
// type User = {
//     id: number;
//     name: string;
//     address: string;
// };
// const users: User[] = [
//     { id: 1, name: "User 1", address: "Address 1" },
//     { id: 2, name: "User 2", address: "Address 2" },
//     { id: 3, name: "User 3", address: "Address 3" },
//     { id: 4, name: "User 4", address: "Address 4" },
//     { id: 5, name: "User 5", address: "Address 5" },
//     { id: 6, name: "User 6", address: "Address 6" },
//     { id: 7, name: "User 7", address: "Address 7" },
//     { id: 8, name: "User 8", address: "Address 8" },
//     { id: 9, name: "User 9", address: "Address 9" },
//     { id: 10, name: "User 10", address: "Address 10" } 
// ];
// function findUserAddressById(id: number, users: User[]): string | undefined {
//     const user = users.find(user => user.id === id);
//     return user?.address;
// }
// console.log(findUserAddressById(5, users)); 
// 1.8
// type User = {
//     id: number;
//     name: string;
//     address: string;
// };
// function extractNames(arr: User[]): string[] {
//     return arr.map(user => user.name);
// }
// const users: User[] = [
//     { id: 1, name: "User 1", address: "Address 1" },
//     { id: 2, name: "User 2", address: "Address 2" },
//     { id: 3, name: "User 3", address: "Address 3" },
//     { id: 4, name: "User 4", address: "Address 4" },
//     { id: 5, name: "User 5", address: "Address 5" },
// ];
// console.log(extractNames(users)); 
// 1.9
// function findLargestNumbers(arr1: number[], arr2: number[]): string[] {
//     const largestInArr1 = Math.max(...arr1);
//     const largestInArr2 = Math.max(...arr2);
//     return [largestInArr1.toString(), largestInArr2.toString()];
// }
// const array1 = [1, 5, 9, 3, 7];
// const array2 = [10, 2, 15, 8, 4];
// console.log(findLargestNumbers(array1, array2)); 
// 1.10
// function separateEvenOdd(arr: number[]): { evens: number[], odds: number[] } {
//     const evens = arr.filter(num => num % 2 === 0);
//     const odds = arr.filter(num => num % 2 !== 0);
//     return { evens, odds };
// }
// const numbers = [1, -2, 3, 4, -5, 6, -7, 8, -9, 10];
// console.log(separateEvenOdd(numbers));
// 2.1
// function reverseNumber(num: number): number {
//     const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
//     return reversed;
// }
// console.log(reverseNumber(123));
// 2.2
// function factorial(num: number): number {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1);
// }
// console.log(factorial(5)); 
// 2.3
// type Person = {
//     name: string;
//     age: number;
// };
// function compareAges(person1: Person, person2: Person): string {
//     return person1.age > person2.age ? person1.name : person2.name;
// }
// const personA = { name: "Sobit", age: 30 };
// const personB = { name: "Aziz", age: 25 };
// console.log(compareAges(personA, personB)); 
// 2.4
// function printNumbers(n: number): void {
//     if (n <= 0) return;
//     printNumbers(n - 1);
//     console.log(n);
// }
// printNumbers(5); 
// 2.5
// let user = { name: "Shaxzod" };
// let age = { age: 25 };
// let userJob = { job: "Developer" };
// const mergedObject = { ...user, ...age, ...userJob };
// console.log(mergedObject);
// 2.6
// const salaries = {
//     aXodim: 150,
//     bXodim: 180,
//     cXodim: 210,
// };
// function totalSalary(salaries: { [key: string]: number }): number {
//     return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
// }
// console.log(totalSalary(salaries)); 
// 2.7
// function findMax(arr: number[]): number {
//     return Math.max(...arr);
// }
// console.log(findMax([2, 8, 3, 10, 5]));
// 2.8
// let arr = [2, 4, 6, 7, true, false, null, undefined];
// function sumArray(arr: (number | boolean | null | undefined)[]): number {
//     return arr.reduce((sum, val) => sum + (typeof val === 'number' ? val : val === true ? 1 : 0), 0);
// }
// console.log(sumArray(arr)); 
