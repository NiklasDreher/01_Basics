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

function main(){
    let grade = parseInt(prompt("Grade 0-100 : "))
    let attendance = parseInt(prompt("attendance 0-100 : "))
    let extraCredit = parseInt(prompt("Extra Credit 0-10 : "))

    if(grade >= 80 && ( attendance >= 90 || extraCredit > 5)){
        console.log("Eligible for advanced exam.")
    } else {
        console.log("Not eligible for advanced exam.")
    }
}

main()