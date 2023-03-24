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
poradnia.addEventListener("click", funkcja)                 /* to się uruchamia grzecznie po klinięciu przycisku */

let przyjecie = document.querySelector("#przyjecie");
przyjecie.addEventListener("click", () => funkcja2(c, d))         /* to mi się uruchamia przy ładowaniu strony, zamiast po klinięciu przycisku */

/* jak mam zrobić, żeby kliknięcie przycisku uruchamiało funkcję, która przyjmuje jakieś argumenty? */
