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

function main() {
    
    let temperature

    temperature = parseInt(prompt("Whats the temperature?"))

    if (temperature < -16) {
        console.log("You should stay inside")
    } else if(temperature < 11){
        console.log("you should wear warm clothing")
    } else if(temperature < 29){
        console.log("You should go outside")
    } else if(temperature < 41){
        console.log("You should go swimming")
    } else {
        console.log("You should go inside an Coolbox")
    }

}

main()