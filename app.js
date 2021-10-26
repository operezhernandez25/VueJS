const evento = {
    data(){
        return{
            message:"PRUEBA EN VUE",
            newID:0,
            newName:"",
            newAge:0,
            list:[
                {
                    id:1,
                    name:"Oscar",
                    age:24,
                    editing:false
                },
                {
                    id:2,
                    name:"Gabriela",
                    age:23,
                    editing:false
                },
                {
                    id:3,
                    name:"Silvia",
                    age:20,
                    editing:false
                }
            ]
        }
    },
    methods:{
        mensajereversa(){
            this.message = this.message.split('').reverse().join('')
        },
        addtoList(){
            if(this.newName  == "")
                return;
                this.$el.querySelector("#name");
            this.list.push({id:this.list.length+1,name:this.newName, age: this.newAge});
        },
        edit(person){

            
            
            console.log(JSON.stringify(this.list))
            console.log("Se esta editando"+JSON.stringify(person));
        }
    },
    computed:{
        listComputed(){
            console.log("Se modifico la lista");
            return this.list.sort((a,b) => a.age-b.age);
        },
        idComputed(){
            return this.list.length+1
        }
    }
}


Vue.createApp(evento).mount('#app');

