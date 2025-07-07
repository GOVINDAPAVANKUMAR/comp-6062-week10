console.log('loaded');
const app = Vue.createApp({
    data(){
        return{
            title: 'week 10 Lab',
            firstName: '',
            lastName:'',
            pricePerItem: 10,
            quantity: 0,
        }
    },
    computed: {
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        },
        totalPrice(){
            return this.pricePerItem*this.quantity;
        }
    },
    methods:{
        clearFields (){
            this.firstName='';
            this.lastName='';
            this.quantity=0

        }
        }

});
app.mount('#app');
