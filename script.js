let imieNazwiskoPacjenta = ''
let peselPacjenta =''
let daneLekarza =''
let data=''
let listaPacjentowGabinetu = []


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
    }

checkAll = function()
{
    boxy = document.getElementsByClassName('checkboxy')
    if (boxy[0].checked === true)
        {
        for(let i=1; i<boxy.length;i++){
        boxy[i].checked = true}
        }
    if (boxy[0].checked === false)
        {
        for(let i=1; i<boxy.length;i++){
        boxy[i].checked = false}
        }

}

// część skryptu odpowiedzialna za przeczytanie pliku csv z listą i danymi pacjentów

    const myForm = document.getElementById("myForm");
    const csvFile = document.getElementById("csvFile");
  
    myForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Dane zatwierdzone");
      const input = csvFile.files[0];
      const reader = new FileReader();
      reader.onload = function (event) {
        const text = event.target.result;
        const data = csvToArray(text);
        listaPacjentowGabinetu = data
      };
      reader.readAsText(input);
      });


    function csvToArray(str, delimiter = ";") {

        str = str.substring(63,)    //obcinam niepotrzebną część pliku csv, która jest generowana z AMMSa
        const headers = str.slice(0, str.indexOf("\n")).split(delimiter);    //obcinam piewszy rząd i dzielę go na elementy rozdzielone ";" to są nagłówki

        const rows = str.slice(str.indexOf("\n") + 1).split('\n'); //od \n czyli od końca nagłówków dzielę plik na kolejne liniki i otrzymuję zbiór linijek

        let pacjenci = []                                    //pacjenci to array

        for(let wiersz = 0; wiersz < rows.length; wiersz++)   //biorę po kolei każdą linijkę i...
        {
          let pacjent = {}                                    //pacjent jest objektem
          const element = rows[wiersz].split(delimiter);     // dzielę go na pojedyncze elementy z tabeli i następnie
          for(let el = 0; el < element.length; el++)          // iteruję po elementach wpisując je w formie nagłówek:wartość jako kolejne objekty zbioru pacjenci
          {                                                   // jako kolejne objekty zbioru pacjenci
            pacjent[headers[el]] = element[el]
          }
          pacjenci.push(pacjent)
        }

      
      return pacjenci
      }





function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
}

window.generate = function generate()
/* tu będzie funkcja służąca do wygenerowania zgód pacjentów na bazie template'a
po pobraniu danych pacjenta z pliku excel? albo prostszego - wtedy będzie jeszcze funkcja
do konwersji z excela do prostszych
*/
{
    
for(let i=0;listaPacjentowGabinetu[i];i++)
    {
    let pacjent=listaPacjentowGabinetu[i]
//        console.log('imie ' + pacjent.Imiona)
//        console.log('nazwisko ' + pacjent.Nazwisko)

    loadFile(
        "/templates/formularz.docx",
        function (error, content) 
            {
            if (error) 
                {
                throw error;
                }
            var zip = new PizZip(content);
            var doc = new window.docxtemplater(zip, 
                {
                paragraphLoop: true,
                linebreaks: true,
                });
            doc.render(
                {
                imie: pacjent.Imiona,
                nazwisko: pacjent.Nazwisko,
                PESEL: pacjent.PESEL,
                daneLekarza: daneLekarza,
                data: data
                });
                
            var blob = doc.getZip().generate({
                type: "blob",
                mimeType:
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                compression: "DEFLATE",
            });
            // Output the document using Data-URI
          saveAs(blob, pacjent.Imiona +' '+ pacjent.Nazwisko +'.docx');
            }
            );
    }
};

let generuj = document.querySelector('#generujPlikiPoradnia');
generuj.addEventListener('click', generate)










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