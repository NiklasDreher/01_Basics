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
    let age = parseInt(prompt("Whats your age : "))
    let money = parseInt(prompt("How much money do you have in euros : "))

    if(age >= 18 && money >= 12){
        console.log("Ticket purchased")
    } else if(age >= 18 && money < 12){
        console.log("Not enough money")
    } else {
        console.log("Too young to watch the movie")
    }
}

main()