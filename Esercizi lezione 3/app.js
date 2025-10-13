const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: "Messaggio da cambiare",
            stato_luce: false,
            chilogrammi: 0
        }
    },
    
    methods: {
        cambiaMessaggio() {
            this.messaggio = "Hai cambiato il messaggio!";
        },

        accendiLuce() {
            this.stato_luce = !this.stato_luce;
            
    },
        grammi() {
            this.chilogrammi.value * 1000
            
    }
        
        
}}).mount('#app');
