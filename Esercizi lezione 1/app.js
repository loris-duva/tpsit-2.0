const { createApp } = Vue;

createApp({
    data() {
        return {
            nome: 'Loris',
            cognome: 'Duvarrini',
            città: 'Nichelino',
        }
    }
}).mount('#app_profilo');

createApp({
    data() {
        return {
            prodotto: 'quaderno',
            prezzo: '5',
        }
    }
}).mount('#app_prodotto');

createApp({
    data() {
        return {
           immagineDisabilitata: true        
        }
    }
}).mount('#app_immagine');

createApp({
    data() {
    return {
      messaggioTooltip: 'Qui è scritto il nome della nostra scuola.'
    };
  }
}).mount('#app_tooltip');