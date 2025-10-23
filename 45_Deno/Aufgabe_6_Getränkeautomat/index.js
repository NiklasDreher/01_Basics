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

    let selection = parseInt(prompt("Was für ein Getränk willst du: 1 Cola, 2 Bier, 3 Wasser, 4 Tee"))

    let drink

    if(selection == 1){
        drink = "Cola"
    } else if(selection == 2){
        drink = "Bier"
    } else if(selection == 3){
        drink = "Wasser"
    } else if(selection == 4){
        drink = "Tee"
    }

    console.log("Danke für deine Bestellung von " + drink)
}

main()