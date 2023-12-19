/*

    Milestone 0:
        --  Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.     OK

    Milestone 1:
        --  Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.  
        --  Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. 

    Milestone 2:
        --  Aggiungere il ciclo infinito del carosello. Ovvero se la slide attiva è la prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.

*/


const carousel = []

carousel.push(createCarouselObj('http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg', 'Svezia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg', 'Perù', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c', 'Chile', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg' , 'Argentina', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))
carousel.push(createCarouselObj('https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop' , 'Colombia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'))

console.log('Il mio carosello: ', carousel, typeof carousel);
/*

    LE MIE FUNZIONI

*/

function createCarouselObj (url, title, description) {
   myObject = {
        url: url,
        title: title,
        description: description
   }
    return myObject;
}