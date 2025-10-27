const { createApp, computed } = Vue;

        const SalutoUtente = {
            template: `
                <div class="card" style="background-color: #f0f0f0; padding: 10px;">
                    <strong>Benvenuto nella nostra applicazione!</strong>
                </div>
            `
        };
        
        const InfoCard = {
            template: `
                <div class="card">
                    <h3>Titolo della Card</h3>
                    <p>Contenuto statico della card: Il contenuto di questa card è riutilizzambile.</p>
                </div>
            `
        };

        createApp({
            data() {
                return {
                    messageState: '',
                    
                    avatarConfig: {
                        width: 100,
                        height: 100,
                        backgroundColor: '#007bff'
                    }
                };
            },
            
            components: {
                'saluto-utente': SalutoUtente,
                'info-card': InfoCard
            },

            computed: {
                statusText() {
                    if (this.messageState === 'success') {
                        return 'Successo!';
                    } else if (this.messageState === 'error') {
                        return 'Errore.';
                    }
                    return 'Valore non impostato';
                },
                messageText() {
                    if (this.messageState === 'success') {
                        return 'Operazione completata con successo!';
                    } else if (this.messageState === 'error') {
                        return 'Si è verificato un errore durante l\'operazione.';
                    }
                    return '';
                },
                avatarStyle() {
                    return {
                        width: `${this.avatarConfig.width}px`,
                        height: `${this.avatarConfig.height}px`,
                        backgroundColor: this.avatarConfig.backgroundColor
                    };
                }
            },

            methods: {
                setMessage(state) {
                    this.messageState = state;
                }
            }
        }).mount('#app');