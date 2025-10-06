const { createApp } = Vue;

createApp({
    data() {
        return {
            isLoggedIn: true, 
            coloreSemaforo: 'rosso',
            teamPreferiti: [
                'Red Bull Racing', 
                'Ferrari', 
                'Mercedes'
            ],
            catalogoProdotti: [
                { id: 101, nome: 'Smartphone X', prezzo: 499.99 },
                { id: 102, nome: 'Laptop Pro', prezzo: 1299.00 },
                { id: 103, nome: 'Auricolari Wireless', prezzo: 79.50 },
                { id: 104, nome: 'Smartwatch Basic', prezzo: 150.99 }
            ]
        }
    }
}).mount('#app'); 