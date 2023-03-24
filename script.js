c = 5
d = 6

funkcja = function()
    {
        console.log("uruchomiłeś przycisk nr 1");
    }

function funkcja2(argument1, argument2)
    {
        wynik = argument1+argument2;
        console.log("uruchomiłeś przycisk nr 2");
        console.log(wynik)
    }

let poradnia = document.querySelector("#poradnia");
poradnia.addEventListener("click", funkcja)

let przyjecie = document.querySelector("#przyjecie");
przyjecie.addEventListener("click", funkcja2(c, d))
