function header(exercise) {
  console.log("-----------------------", exercise, "-----------------------");
}

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
header("esercizio1")

let sum= 10+ 20

console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
header("esercizio2")
let random= Math.floor(Math.random() * 21)


console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
header("esercizio3")

const me =
{
  name: "Bebo",
  surname: "Macis",
  age: "28"
}

console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
header("esercizio4")
delete me.age
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
header("esercizio5")
me.skills = ["html", "css", "javascript"];

console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
header("esercizio6")

me.skills.push("excel")

console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
header("esercizio7")
// Funzioni
me.skills.pop()

console.log(me);
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
header("esercizio8")

const dice = () => {
    const element= Math.floor(Math.random() * 6) +1
  return element
}

console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
header("esercizio9")

const whoIsBigger = (num1, num2) => {
  if (num1>num2) {
    return num1
  }else
  return num2
}

console.log("il numero maggiore è ", whoIsBigger(3,4));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
header("esercizio10")

const splitMe = (string) => {
  return string.split(" ")
}

console.log(splitMe("ciao benvenuti a tutti"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
header("esercizio11")

const deleteOne = (string, boolean) => {
  if (boolean ==="true") {
    let newArray = string.split("")
    newArray.shift()
    let newString = newArray.join(" ")
    return newString
  }else {
    let newArray = string.split("")
    newArray.pop()
    let newString = newArray.join(" ")
    return newString
  }
}

console.log(deleteOne("ciao amici", "true"));
console.log(deleteOne("ciao amici", "false"));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
header("esercizio12")

const onlyLetters = (string) =>{
let arrayString= string.split("") 
// trasformo la stringa in array
  for (let i = 0; i < arrayString.length; i++) {
    // ciclo ogni lettera dell'array
    for (let ind = 0; ind < 10; ind++) {
      let number = ind;
      // ciclo dei numeri da 0 a 9 e li inserisco in una variabile
      if (parseInt(arrayString[i]) === number) {
        // se l'elemento dell'array e un "numero" uguale al numero nella variabile
        arrayString.splice(i,1)
        // elimina l'elemento corrente altrimenti non fare niente
      }
    }
    
  }
  // converti l'array in stringa
  return arrayString.join("")
}


console.log(onlyLetters("siamo in 2 o in 4"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
header("esercizio13")
const isThisAnEmail = (string) =>{
  return string.includes("@") && (string.includes(".it") || string.includes(".com"))
   
}

console.log(isThisAnEmail("bebo@gmail.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
header("esercizio14")

const whatDayIsIt = () => {
  let data = new Date()
  data.getDay()
  switch (data.getDay()) {
    case 0:
    giorno = "domenica";
    break;
    case 1:
    giorno = "lunedì";
    break;
    case 2:
    giorno = "martedì";
    break;
    case 3:
    giorno = "mercoledì";
    break;
    case 4:
    giorno = "giovedì";
    break;
    case 5:
    giorno = "venerdì";
    break;
    case 6:
    giorno = "sabato";
    break;
    }
  return giorno 
}

console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
header("esercizio15")

let rollTheDices = (param) =>{
  let object= {
    sum: 0,
    value: []
  }
  for (let i = 0; i < param; i++) {
    let result= dice()
      object.value.push(result)
      object.sum += result
  }
  return object
}

console.log(rollTheDices("3"));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
header("esercizio16")
const howManyDays = (date) =>{

}
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
header("esercizio17")
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
header("esercizio18")

const deleteProp = (object, string) => {
  delete object[string]
  return object
}

console.log(deleteProp(me, "name"));

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
header("esercizio19")

function newestMovie(array) {
  let movieYear= parseInt(array[0].Year)
  let nameMovie=""
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i].Year) > movieYear) {
      movieYear= parseInt(array[i].Year)
      nameMovie= array[i].Title
    }
  } 
  return nameMovie
}

console.log(newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
header("esercizio20")

const countMovies = (array) => {
  return array.length
}
console.log(countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
header("esercizio21")

const onlyTheYears = (array) => {
  const newArray=array.map(array => array.Year)
  return newArray
}
console.log(onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
header("esercizio22")

const onlyInLastMillennium = (array) => {
  const newArray=[]
  for (let i = 0; i < array.length; i++) {
    const element = array[i].Year;
    const filmName= array[i].Title
    if (element <2000) {
      newArray.push(filmName)
      newArray.push(element)
    }
  }
  return newArray
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
header("esercizio23")

const sumAllTheYears = (array) => {
  let totalYears= 0
  for (let i = 0; i < array.length; i++) {
    const element = parseInt(array[i].Year);
    totalYears += element
  }
  return totalYears
}
console.log(sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
header("esercizio24")

const SearchFilm = ( array, Title) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i].Title;
    switch (true) {
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      case element=== Title:
        console.log(array[i]);
        break;
      default:
    }
  }
}

SearchFilm(movies,"Avengers: Age of Ultron")
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
header("esercizio25")

const searchAndDivide = (string) => {
  let match= []
  let unMatch= []
  for (let i = 0; i < movies.length; i++) {
  const title = movies[i].Title;
  
    if (title.includes(string)) {
      match.push(title)
    }else{
      unMatch.push(title)
    }
  }
  console.log("match è formato da", match);
  console.log("unMatch è formato da", unMatch);
return match , unMatch
}

console.log(searchAndDivide("of"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
header("esercizio26")

// const removeIndex = (i) => {
//   movies.splice(i,1)
//   console.log(movies);
//   return movies
// }

// console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
header("esercizio27")

const container = document.getElementById("#container")

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
header("esercizio28")

const allTd = document.querySelectorAll("body td")

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
header("esercizio29")

const print = () => {
  console.log(td.forEach(elem => elem.innerText));
  
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
header("esercizio30")

const changeA = () => {
  const a= document.querySelectorAll("body a")
      a.forEach(elem=> elem.style.backgroundColor = "red")
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
header("esercizio31")

const addElement = () => {
  const ul = document.getElementById("#myList")
  const li= document.createElement("li")
  li.innerText= "new li"
  ul.appendChild(li)
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
header("esercizio32")

const toEmpty = () => {
  const ul = document.getElementById("#myList")
  ul.toEmpty()
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
header("esercizio33")
const addClass = () => {
  const tr = document.querySelectorAll("body tr")
  tr.classlist.add("test")
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
header("esercizio34")
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
header("esercizio35")
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

