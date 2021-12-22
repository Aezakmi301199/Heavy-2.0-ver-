/*Попытка на vue3 */

const app=Vue.createApp({
  data(){
     return{
     carttobasket:[],
         advertisements:[]
             }
         }, 
         methods:{
          add_to_basket(advertisement){
      this.carttobasket.push(advertisement)
      console.log(this.carttobasket,'Изменение корзины')
             },
             remove_to_basket(advertisement){
                 let changearr=this.carttobasket.filter(el=>el.product.id !=advertisement.product.id)
      this.carttobasket=changearr
      console.log(this.carttobasket,'Изменение корзины')
             },           
             productshowchange(valueshowproduct){
              this.advertisements.product=valueshowproduct
      console.log(this.advertisements.product)
             }
         },
         created:function(){
             axios.get('./advertisements.json')
             .then((response)=>{
                 this.advertisements=response.data.advertisements;
                 console.log(this.advertisements,'Взято из json')
                               }    
                  )
                           }
                     })
app.component('item',{
 props:{
  advertisement:{
         typeof:Object,
     default(){
         return {}
              }
                  }
 }, //' v-bind:class='product.filterTag'
 methods:{
add_to_cart(){
         this.advertisement.cart.push(this.advertisement.product.id)
         this.$emit('add_to_cart',this.advertisement)
     },
  remove_to_cart(){
      this.$emit('remove_to_cart',this.advertisement)
  }
  ,
     show_check_out(){
      this.$emit('show_check_out', this.advertisement.product.showproduct=this.advertisement.product.showproduct?false:true)
                     } 
 },
 computed:{
     cartItemCount(){
         return this.advertisement.cart.length
     },
     canAddToCart(){
         return this.advertisement.product.showproduct==true
     }
 },
 template:`
 <div  class='card-item' v-bind:class='advertisement.product.filterTag'>
 <h4 class='d3'></h4> 
 <div class='card-image'><img v-bind:src="'./img/' + advertisement.product.image "></div>
 <div class='info'>
     <h4 class='bluecolor'>{{advertisement.author}}</h4>
     <h3 class='text-Medium16px' v-text='advertisement.product.nameitem'></h3>
     <h4>{{advertisement.product.cartItemCount}}</h4>
     <ul class="rating">
         <li class='star'><img src='img/star.png'></li>
         <li class='star'><img src='img/star.png'></li>
         <li class='star'><img src='img/star.png'></li>
         <li class='star'><img src='img/star.png'></li>
         <li class='star'><img src='img/star.png'></li>
     </ul> 
     <div class='price'>Цена : {{advertisement.product.price}}</div>
     <button v-if='canAddToCart'  v-on:click='add_to_cart($event),show_check_out($event)'   class='bunner-btn basket-item'>Избранное</button>
     <button v-else class='bunner-btn basket-item' v-on:click='remove_to_cart($event),show_check_out($event)'>В избранном</button>
 </div>
</div>
 `
})
app.component('basket',{
 data(){
     return{
         showproduct:true
     }
 },
 methods:{
send(productinbasket){
this.basket.push(productinbasket)
},
  show_check_out(){
      this.showproduct=this.showproduct?false:true
                     } 
 },
 template:`
 <div class="basketbar">
 <button v-on:click='show_check_out'>Избранное</button>
 <div class='advantages-company-cont size20x20px'><img src='./img/favourite.png'>
 <h3> </h3>
 </div>
 </div>
 `
})

app.mount('#app')


/*
const menu = document.querySelector('.menu');
const open = document.querySelector('.menu__open');
const close = document.querySelector('.menu__close');

open.addEventListener('click', () => {
  menu.classList.add('menu_open');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu_open');
});

var button_favorite_lov=document.querySelectorAll
('._cont-card-item>.card-item-description>.card-item-description_right>.row')
console.log(button_favorite_lov)

var loveitem1 = document.querySelector('._cont-card-item>.card-item-description>.card-item-description_right>.row>.love_item');
console.log(loveitem1)
const loveitem2 = document.querySelector('.love_item_new2');
loveitem1.addEventListener('click', () => {
	loveitem1.classList.remove('love_item');
	loveitem1.classList.add('love_item_new2');
  });

console.log(button_love)
/*<div class="menu">
  <div class="menu__open">Открыть меню</div>
  <div class="menu__close">Закрыть меню</div>

  <div class="menu__container">
    <p>Hello, world</p>
  </div> .card-item-description>.love_item
</div>
*/