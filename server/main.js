let no = "Du får inte köpa snus"
let yes = "Köp snus :)"
let age = 26

if (age < 17) {
    console.log(no)
}
else if (age >= 17 && age <= 25) {
    console.log(yes)
}
else {
    console.log("Mer snus åt folket!")
}