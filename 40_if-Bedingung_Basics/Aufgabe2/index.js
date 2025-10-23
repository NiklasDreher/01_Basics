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

function trafficLight(x) {
let colour = x

    if (colour == "green") {
        console.log("You may go")
    }
    if (colour == "yellow") {
        console.log("Caution!")
    }
    if (colour == "red") {
        console.log("Stop!")
    }
}

function randomLight() {
    let randomColour = ""
    
    let randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber == 0) {
        randomColour = "green"
    }
    if (randomNumber == 1) {
        randomColour = "yellow"
    }
    if (randomNumber == 2) {
        randomColour = "red"
    }

    return randomColour
}

trafficLight(randomLight())
}

main()
