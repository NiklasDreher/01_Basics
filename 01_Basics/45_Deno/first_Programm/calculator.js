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

let number1 = parseInt(prompt("Gib die erste Zahl ein!"))
let number2 = parseInt(prompt("Gib die Zweite Zahl ein!"))


let selection = parseInt(prompt("1 add, 2 subtract"))

let result

if(selection == 1){
    result = number1 + number2
} else if(selection == 2){
    result = number1 - number2
}

console.log(result)