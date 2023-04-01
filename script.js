

przyciskPoradnia = function()
    {
        console.log("uruchomiłeś przycisk od poradni");
        let a = document.querySelector('#main1')
        a.style.gridColumn = '1/span 4'
        a.style.visibility = 'visible'
        let b = document.querySelector('#main2')
        b.style.visibility = 'hidden'
    }

przyciskPrzyjecie = function()
    {
        console.log("uruchomiłeś przycisk od przyjecia");
        let a = document.querySelector('#main1')
        a.style.visibility = 'hidden'
        let b = document.querySelector('#main2')
        b.style.gridColumn = '1/span 4'
        b.style.visibility = 'visible'
    }

let poradnia = document.querySelector("#poradnia");
poradnia.addEventListener("click", przyciskPoradnia)

let przyjecie = document.querySelector("#przyjecie");
przyjecie.addEventListener("click", przyciskPrzyjecie)

generujPlikiPoradnia = function()
    {
        console.log('rozpoczynam generowanie plikow')

/* tu będzie funkcja służąca do wygenerowania zgód pacjentów na bazie template'a
po pobraniu danych pacjenta z pliku excel? albo prostszego - wtedy będzie jeszcze funkcja
do konwersji z excela do prostszych
*/



    }

let generuj = document.querySelector('#generujPlikiPoradnia');
generuj.addEventListener('click', generujPlikiPoradnia)