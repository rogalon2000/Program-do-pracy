let imieNazwiskoPacjenta = ''
let peselPacjenta =''
let daneLekarza =''
let data=''


przyciskPoradnia = function()
    {
        console.log("uruchomiłeś przycisk od poradni");
        let a = document.querySelector('#main1')
        a.style.gridColumn = '1/span 4'
        a.style.visibility = 'visible'
        let b = document.querySelector('#main2')
        b.style.visibility = 'hidden'
        let c = document.querySelector('#danePacjent')
        let d = document.querySelector('#danePESEL')
        c.style.visibility = 'hidden'
        d.style.visibility = 'hidden'
    }

przyciskPrzyjecie = function()
    {
        console.log("uruchomiłeś przycisk od przyjecia");
        let a = document.querySelector('#main1')
        a.style.visibility = 'hidden'
        let b = document.querySelector('#main2')
        b.style.gridColumn = '1/span 4'
        b.style.visibility = 'visible'
        let c = document.querySelector('#danePacjent')
        let d = document.querySelector('#danePESEL')
        c.style.visibility = 'visible'
        d.style.visibility = 'visible'
    }

let poradnia = document.querySelector("#poradnia");
poradnia.addEventListener("click", przyciskPoradnia)

let przyjecie = document.querySelector("#przyjecie");
przyjecie.addEventListener("click", przyciskPrzyjecie)

let getValue = function(field, mod)
    {
    if(mod === 1)
        {
        let a = document.querySelector('#danePacjent');
        imieNazwiskoPacjenta = field.value
        if (field.value === ''){a.innerHTML=''}
        else {a.innerHTML='Imię i nazwisko pacjenta: ' + field.value}
        }
    else if(mod === 2)
        {
        let a = document.querySelector('#danePESEL');
        peselPacjenta = field.value
        if (field.value === ''){a.innerHTML=''}
        else {a.innerHTML='PESEL pacjenta: ' + field.value}
        }
    else if(mod === 3)
        {
        let a = document.querySelector('#daneLekarz');
        daneLekarza = field.value
        if (field.value === ''){a.innerHTML=''}
        else {a.innerHTML='Dane lekarza: ' + field.value}
        }
    else if(mod === 4)
        {
        let a = document.querySelector('#daneData');
        data = field.value
        if (field.value === ''){a.innerHTML=''}
        else {a.innerHTML='Data: ' + field.value}
        }
    let wartosc = field.value;
    console.log(wartosc);
    }





















generujPlikiPoradnia = function()
    {
        console.log('rozpoczynam generowanie plikow do poradni')

/* tu będzie funkcja służąca do wygenerowania zgód pacjentów na bazie template'a
po pobraniu danych pacjenta z pliku excel? albo prostszego - wtedy będzie jeszcze funkcja
do konwersji z excela do prostszych
*/

    }

let generuj = document.querySelector('#generujPlikiPoradnia');
generuj.addEventListener('click', generujPlikiPoradnia)



generujPlikiPrzyjecie = function()
    {
        console.log('rozpoczynam generowanie plikow do przyjęcia')

/* tu będzie funkcja służąca do wygenerowania dokumentów do przyjęcia do OIT na bazie template'ów
po pobraniu danych pacjenta z pliku excel? albo prostszego - wtedy będzie jeszcze funkcja
do konwersji z excela do prostszych
*/

    }

let generuj2 = document.querySelector('#generujPlikiPrzyjecie');
generuj2.addEventListener('click', generujPlikiPrzyjecie)