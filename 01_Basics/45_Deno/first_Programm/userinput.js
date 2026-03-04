/*1bWI_Basics
Copyright(C) 2025 Niklas Dreher

This program is free software: you can redistribute it and / or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.If not, see < http://www.gnu.org/licenses/gpl.txt>.
*/

let number1 = prompt("Gib die erste Zahl ein!")
let number2 = prompt("Gib die Zweite Zahl ein!")

let number1asNumber = parseInt(number1)
let number2asNumber = parseInt(number2)

let result = number1asNumber + number2asNumber

console.log("result: " + result)
