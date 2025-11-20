const { createApp, ref, computed, defineComponent } = Vue  
// Importa dal framework Vue le funzioni principali per creare l'app e gestire la reattività

// ⭐ Componente valutazione a stelle
const StarRating = defineComponent({
  emits: ['imposta-valutazione'], 
  // Il componente emette un evento chiamato "imposta-valutazione"

  setup(props, { emit }) { 
    // Funzione setup del componente, riceve props e sistema di emissione degli eventi

    const rating = ref(0)  
    // Stato interno del componente: valore della valutazione (inizialmente 0)

    const impostaValutazione = (val) => {
      rating.value = val  
      // Aggiorna il valore interno della valutazione
      emit('imposta-valutazione', val)  
      // Comunica al componente padre il valore scelto
    }

    return { rating, impostaValutazione }  
    // Espone variabili e funzioni al template del componente
  },

  template: `
    <div class="stars">
      <!-- Cicla da 1 a 5 per mostrare le stelle -->
      <span 
        v-for="n in 5" 
        :key="n" 
        class="star" 
        :class="{ active: n <= rating }" 
        @click="impostaValutazione(n)"
      >
        ★
      </span>
    </div>
  `
  // Template HTML del componente: mostra 5 stelle cliccabili
})

// 📚 App principale
createApp({
  components: { StarRating },  
  // Registra il componente StarRating dentro l'app Vue

  setup() {  
    // Funzione setup dell'app principale

    const titolo = ref('')  
    // Campo per il titolo del libro/film

    const voto = ref(null)  
    // Valutazione selezionata attraverso StarRating

    const genere = ref('')  
    // Genere selezionato dall’utente

    const elementi = ref([])  
    // Lista degli elementi aggiunti (array reattivo)

    const showModal = ref(false)  
    // Controlla la visibilità della finestra modale

    const ultimoTitolo = ref('')  
    // Tiene traccia dell’ultimo titolo aggiunto (per mostrarlo nella modale)

    // Funzione per aggiungere un elemento
    const aggiungiElemento = () => {
      if (!titolo.value || !voto.value || !genere.value) return  
      // Evita l’inserimento se manca qualche dato

      // Aggiungi l'elemento alla lista
      elementi.value.push({
        titolo: titolo.value,
        voto: voto.value,
        genere: genere.value
      })
      // Crea un nuovo oggetto con i dati e lo inserisce nell’array

      // Imposta il titolo dell'ultimo libro o film aggiunto
      ultimoTitolo.value = titolo.value  
      // Serve per mostrarlo nella modale

      // Pulisci i campi di input
      titolo.value = ''
      voto.value = null
      genere.value = ''
      // Reset dei campi dopo l’aggiunta

      // Mostra la modale di conferma
      showModal.value = true  
    }

    // Funzione per chiudere la modale
    const chiudiModale = () => {
      showModal.value = false  
      // Nasconde la modale impostando false
    }

    // Calcolo della media dei voti
    const mediaVoti = computed(() => {
      if (!elementi.value.length) return 0  
      // Se non ci sono elementi, la media è 0

      return elementi.value.reduce((acc, e) => acc + e.voto, 0) / elementi.value.length
      // Somma tutti i voti e divide per il numero di elementi
    })

    return { 
      titolo, 
      voto, 
      genere, 
      elementi, 
      showModal, 
      ultimoTitolo, 
      aggiungiElemento, 
      chiudiModale, 
      mediaVoti 
    }
    // Esporta variabili e metodi per usarli nel template HTML
  }
}).mount('#app')  
// Monta l'app Vue dentro l'elemento HTML con id="app"
