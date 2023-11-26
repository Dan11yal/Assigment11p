// const app = Vue.createApp({
//     template:'<h1>Hello World</h1>'
// });

// app.mount('#app');


/* <script>
      const { createApp, ref } = Vue
    
      createApp({
        setup() {
          const message = ref('Hello vue!')
          return {
            message
          }
        }
      }).mount('#app')
    </script> */

const app = Vue.createApp({
   data(){
       return{
           message:'Hello World',
           assigment:'11',
           firstName:'Daniyal',
           lastName:'Orynbek',
           id:220107072,
           email:'220107072@stu.sdu.edu.kz',
           image:'./Assets/1.jpg'
       }
   }
})
app.mount('#app');