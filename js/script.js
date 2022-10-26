// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const {createApp}= Vue;

createApp({
    data(){
        return{
            title: "Pomeriggio di guardia al pollaio",
            paragraphe:"",
            bgDark: "grey mb-0 text-center",
            img_galline: "img/galline.jpg"
        }
    },
   methods: {
        greet: function () {
            alert("Ciao galline!");
                                               
            
        }
    
    }
}).mount("#app");