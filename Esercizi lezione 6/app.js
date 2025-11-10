const { createApp, ref } = Vue;

const ProductCard = {
    template: `
      <div class="box">
        <span>{{ nomeProdotto }} - {{ prezzo }} €
      </div>
    `,
    props: {
        nomeProdotto: { type: String, required: true },
        prezzo: { type: Number, required: true }
    }
};

const AlertBox = {
    template: '#alert-box-template',
    props: {
        messaggio: { type: String, required: true },
        tipo: {
            type: String,
            validator: (value) => ['success', 'error'].includes(value),
            required: true
        }
    }
};

const ModalDialog = {
    template: '#modal-dialog-template',
    emits: ['chiudi']
};

const StarRating = {
    template: '#star-rating-template',
    emits: ['imposta-valutazione']
};

const App = {
    setup() {
        const prodotti = [
            { id: 1, nome: 'Laptop Pro', prezzo: 1299.99 },
            { id: 2, nome: 'Mouse Wireless', prezzo: 25.50 },
            { id: 3, nome: 'Monitor 4K', prezzo: 450.00 }
        ];

        const modaleAperta = ref(false);

        const valutazioneCorrente = ref(0);

        const aggiornaValutazione = (nuovaValutazione) => {
            valutazioneCorrente.value = nuovaValutazione;
            console.log(`Valutazione ricevuta dal genitore: ${nuovaValutazione}`);
        };

        return {
            prodotti,
            modaleAperta,
            valutazioneCorrente,
            aggiornaValutazione
        };
    }
};

createApp(App)
    .component('product-card', ProductCard)
    .component('alert-box', AlertBox)
    .component('modal-dialog', ModalDialog)
    .component('star-rating', StarRating)
    .mount('#app');