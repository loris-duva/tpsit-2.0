const prodottiDisponibili = [
            { nome: 'Telofono', prezzo: 300.00 },
            { nome: 'Penna', prezzo: 3.20 },
            { nome: 'Console', prezzo: 450.99 },
            { nome: 'Cavo 4 metri', prezzo: 12.00 },
        ];

const App = {
            data() {
                return {
                    eta: 15,
                    
                    carrello: [
                        { nome: 'Quaderno', prezzo: 5.00 },
                    ],
                    
                    username: '',
                    erroreUsername: false, 
                    
                    contenutoTesto: '',
                    statoSalvataggio: 'Inattivo',
                    timerSalvataggio: null,
                }
            },

            computed: {
                messaggioEta() {
                    return this.eta >= 18 ? 'Maggiorenne' : 'Minorenne';
                },
                
                totaleCarrello() {
                    return this.carrello.reduce((sum, item) => sum + item.prezzo, 0);
                }
            },

            methods: {
                aggiungiProdotto() {
                    const prodottoCasuale = prodottiDisponibili[Math.floor(Math.random() * prodottiDisponibili.length)];
                    this.carrello.push({ ...prodottoCasuale });
                }
            },

            watch: {
                username(newUsername) {
                    this.erroreUsername = newUsername.length > 0 && newUsername.length < 5;
                },

                contenutoTesto(nuovoContenuto) {
                    if (this.timerSalvataggio) {
                        clearTimeout(this.timerSalvataggio);
                        this.timerSalvataggio = null; 
                    }
                    
                    if (nuovoContenuto.trim() === '') {
                        this.statoSalvataggio = 'Inattivo';
                        return;
                    }
                    
                    this.statoSalvataggio = 'Sto salvando...';
                    
                    this.timerSalvataggio = setTimeout(() => {
                        this.statoSalvataggio = 'Salvato!';
                        this.timerSalvataggio = null;
                        
                        console.log("Contenuto salvato:", nuovoContenuto.substring(0, 50) + '...');

                    }, 1000);
                }
            }
        };
        Vue.createApp(App).mount('#app');