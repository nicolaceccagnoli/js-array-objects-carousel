/*

    Milestone 0:
        --  Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.     OK

    Milestone 1:
        --  Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.  OK
        --  Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. OK

    Milestone 2:
        --  Aggiungere il ciclo infinito del carosello. Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.  OK

*/

// Dichiaro una Variabile che prende dall'HTML il contenitore del carosello
const cardContainer = document.querySelector('#card-container');

const thumbnail = document.querySelector('#thumbnail'); 

// Dichiaro le Variabili che prende dall'HTML i Bottoni
const buttonForward = document.querySelector('#button-forward');
const buttonBack = document.querySelector('#button-back');

// Creo una Variabile Contatore
let counter = 0;

// Creo l'array contenente gli oggetti del mio Carosello
const carousel = []

carousel.push(createCarouselObj('http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg', 'Svezia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg', 'Perù', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c', 'Chile', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg' , 'Argentina', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop' , 'Colombia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))

console.log('Il mio carosello: ', carousel, typeof carousel);

carouselCycle (carousel, cardContainer);

thumbnailPrint (carousel, thumbnail);

// let carouselForward = setInterval(intervalForward, 1000);

// let carouselBack = setInterval(intervalBack, 1000);

// Creo l'evento che Faccia iniziare o stoppare l'avanzamento automatico del carosello
document.querySelector('#button-interval').addEventListener('click', function(){

    if (carouselForward != null) {
        clearInterval(carouselForward);

        carouselForward = null;
    } else {
        carouselForward = setInterval(intervalForward, 1000);
    }

})

// Creo l'evento per cui al click dei bottoni compaiano le immagini successive e precedenti
buttonForward.addEventListener('click', function(){

    // Seleziono dal documento tutti gli elementi con classe 'active' e glie la rimuovo
    document.querySelector('.active').classList.remove('active');

    if (counter < carousel.length -1 ) {
        counter ++;
    } else {
        counter = 0;
    }

    /* AGGIUNBGO ACTIVE ALL'IMMAGINE DI INDICE counter E LO RIMUOVO DALLA CORRENTE*/
    
    // Dichiaro una Variabile con quale seleziono tutti gli elementi con classe 'card'
    const myCards = document.querySelectorAll('.card');
    console.log('array di card',myCards);

    // Interpreto tutti gli elementi di classe 'card' come un array, di cui faccio corrispondere l'indice con il counter
    myCards[counter].classList.add('active');
    
    console.log(counter); 

})

buttonBack.addEventListener('click', function(){

    // Seleziono dal documento tutti gli elementi con classe 'active' e glie la rimuovo
    document.querySelector('.active').classList.remove('active');

    if ((counter !== carousel.length) && (counter !== 0)) {
        counter --;
    } else { 
       counter = carousel.length -1;
    }

    /* AGGIUNBGO ACTIVE ALL'IMMAGINE DI INDICE counter E LO RIMUOVO DALLA CORRENTE*/
    
    // Dichiaro una Variabile con quale seleziono tutti gli elementi con classe 'card'
    const myCards = document.querySelectorAll('.card');
    console.log('array di card',myCards);

    // Interpreto tutti gli elementi di classe 'card' come un array, a cui faccio corrispondere l'indice con il counter
    myCards[counter].classList.add('active');
    
    console.log(counter); 

})


// Interpreto tutti gli elementi di classe 'thumbnail-img' come un array
const thumbnailImg = document.querySelectorAll('.thumbnail-img');
console.log(thumbnailImg);

// Creo un ciclo che scorra gli elementi di classe 'thumbnail-img'
for (let j = 0; j < thumbnailImg.length; j++) {

    // Creo un evento per cui all'indice J dell'elemento con classe 'thumbnail-img' nel Contenitore delle Card venga stampata la card Corrispondente
    thumbnailImg[j].addEventListener('click', function(){

        cardContainer.innerHTML = `
                                    <div class="card active" style="width: 50rem;">
                                        <img src=${carousel[j].url}>
                                        <div class="card-body">
                                            <h5 class="card-title">${carousel[j].title}</h5>
                                            <p class="card-text">${carousel[j].description}</p>
                                        </div>
                                    </div>
                                `

    })

}

/*

    LE MIE FUNZIONI

*/

// Creo la funzione che deve creare gli Oggetti che andranno nell'Array del Carosello
function createCarouselObj (url, title, description) {

   myObject = {
        url: url,
        title: title,
        description: description
   }
    return myObject;
}

// Creo la funzione che contenga il ciclo che stampi le immagini nel Browser
function carouselCycle (array, div) {

    // Creo un ciclo che vada a stampare nel Contenitore le Immagini e le loro Descrizioni
    // for (let i = 0; i < array.length; i++) {
        
    //     div.innerHTML += `
    //                     <div class="card card-none" style="width: 50rem;">
    //                         <img src=${array[i].url}>
    //                         <div class="card-body">
    //                             <h5 class="card-title">${array[i].title}</h5>
    //                             <p class="card-text">${array[i].description}</p>
    //                         </div>
    //                     </div>
    //                 `;
    // }

    // Definisco una Variabile che racchiuda la stampa in pagina
    let myContent;
    array.forEach((element, i) => {
        myContent = `
                        <div class="card`;
        if(i == 0){
            myContent += ' active';
        }

        myContent +=                
        `" style="width: 50rem;">
                            <img src=${array[i].url}>
                            <div class="card-body">
                                <h5 class="card-title">${array[i].title}</h5>
                                <p class="card-text">${array[i].description}</p>
                            </div>
                        </div>
                        `;

        div.innerHTML += myContent;
    });
}

/*

`    <div class="card active" style="width: 50rem;">
        <img src=${array[j].url}>
        <div class="card-body">
            <h5 class="card-title">${array[j].title}</h5>
            <p class="card-text">${array[j].description}</p>
        </div>
    </div>
`
*/

function thumbnailPrint (array ,div) {

    array.forEach((element, i) => {

        div.innerHTML +=`
                        <div class="thumbnail-img">
                            <img src=${array[i].url}>
                        </div>
                        `;
    });

}

// Creo le Funzioni che definiscano l'intervallo che regola l'avanzamento del carosello
function intervalForward () {

    // Seleziono dal documento tutti gli elementi con classe 'active' e glie la rimuovo
    document.querySelector('.active').classList.remove('active');

    if (counter < carousel.length -1 ) {
        counter ++;
    } else {
        counter = 0;
    }

    /* AGGIUNBGO ACTIVE ALL'IMMAGINE DI INDICE counter E LO RIMUOVO DALLA CORRENTE*/
    
    // Dichiaro una Variabile con quale seleziono tutti gli elementi con classe 'card'
    const myCards = document.querySelectorAll('.card');
    console.log('array di card',myCards);

    // Interpreto tutti gli elementi di classe 'card' come un array, di cui faccio corrispondere l'indice con il counter
    myCards[counter].classList.add('active');
    
    console.log(counter); 
    
}

function intervalBack () {

    // Seleziono dal documento tutti gli elementi con classe 'active' e glie la rimuovo
    document.querySelector('.active').classList.remove('active');

    if ((counter !== carousel.length) && (counter !== 0)) {
        counter --;
    } else { 
        counter = carousel.length -1;
    }

    /* AGGIUNBGO ACTIVE ALL'IMMAGINE DI INDICE counter E LO RIMUOVO DALLA CORRENTE*/
    
    // Dichiaro una Variabile con quale seleziono tutti gli elementi con classe 'card'
    const myCards = document.querySelectorAll('.card');
    console.log('array di card',myCards);

    // Interpreto tutti gli elementi di classe 'card' come un array, di cui faccio corrispondere l'indice con il counter
    myCards[counter].classList.add('active');
    
    console.log(counter); 
    
}