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
    let score = parseInt(prompt("What's the score"))

    if(score > 90){
        console.log("Grade: A")
    } else if (score >= 80 && score <= 89){
        console.log("Grade: B")
    } else if (score >= 70 && score <= 79){
        console.log("Grade: C")
    } else if (score >= 60 && score <= 69){
        console.log("Grade: D")
    } else {
        console.log("Grade: F")
    }

}

main()