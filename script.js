c = 5
d = 6

funkcja = function(evt)
    {
        console.log("uruchomiłeś przycisk nr 1");
        console.log(evt.target)
        console.log(evt.type)
    }

function funkcja2()
    {
        console.log("uruchomiłeś przycisk nr 2");
    }

let a = document.querySelector("#poradnia");
a.addEventListener("click", funkcja)

let b = document.querySelector("#przyjecie");
b.addEventListener("click", funkcja2)
