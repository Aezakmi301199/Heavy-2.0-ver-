/*Попытка на vue3 */

const app=Vue.createApp({
    data(){
       return{
		   carttobasket:[],
		itemsProducts:[
			{author:'Евгений',city:'Тюмень',cart:[],
			product:{
            showproduct:true,
			filterTag:'Sewagecollectors',
			id:1,
			nameitem:'Ассенизатор ЗИЛ-130 ',
			description:'Выкачивает до 10 л.в минуту',
			tanksize:10,
			price:2000,
			image:'asseniz.png',
			countInventory:1
					}
			
		   },
		   {author:'Олег',city:'Тюмень',cart:[],
			product:{
            showproduct:true,
			filterTag:'Tractors',
			id:2,
			nameitem:'Трактор Fendt 1050 ',
			description:'Очень быстро обрабатывает,не перегревается',
			price:1500,
			image:'track.jpg',
			countInventory:1
					}
		   },
           {author:'Дима',city:'Тюмень',cart:[],
			product:{
            showproduct:true,
			filterTag:'Bulldozers',
			id:3,
			nameitem:'Бульдозер MENG SS-002 ',
			description:'Разнесёт стадик',
			price:2200,
			image:'buld.jpg',
			countInventory:1
					}
		   }
		            ]
               }
           },
           methods:{
               add_to_bask(product_data){
				this.carttobasket.push(product_data)
				console.log(this.carttobasket)
               },
               remove_to_bask(product_data){
                   let delel=this.carttobasket.filter(el=>el.id !=product_data.id)
				this.carttobasket=delel
				console.log(this.carttobasket)
               },           
               productshowchange(valueshowproduct){
                this.itemsProducts.product=valueshowproduct
				console.log(this.itemsProducts.product)
               }
           },
           
                       })
app.component('item',{
   props:{
       product_data:{
           typeof:Object,
       default(){
           return {}
                }
                    }
   }, //' v-bind:class='product.filterTag'
   methods:{
	add_to_cart(){
           this.product_data.cart.push(this.product_data.product.id)
           this.$emit('add_to_cart',this.product_data.product)
       },
    remove_to_cart(){
        this.$emit('remove_to_cart',this.product_data.product)
    }
    ,
       show_check_out(){
        this.$emit('show_check_out', this.product_data.product.showproduct=this.product_data.product.showproduct?false:true)
                       } 
   },
   computed:{
       cartItemCount(){
           return this.product_data.cart.length
       },
       canAddToCart(){
           return this.product_data.product.showproduct==true
       }
   },
   template:`
   <div  class='card-item' v-bind:class='product_data.product.filterTag'>
   <h4 class='d3'></h4> 
   <div class='card-image'><img v-bind:src="'/img/' + product_data.product.image "></div>
   <div class='info'>
       <h4 class='bluecolor'>{{product_data.author}}</h4>
       <h3 class='text-Medium16px' v-text='product_data.product.nameitem'></h3>
       <h4>{{product_data.product.cartItemCount}}</h4>
       <ul class="rating">
           <li class='star'><img src='img/star.png'></li>
           <li class='star'><img src='img/star.png'></li>
           <li class='star'><img src='img/star.png'></li>
           <li class='star'><img src='img/star.png'></li>
           <li class='star'><img src='img/star.png'></li>
       </ul> 
       <div class='price'>Цена : {{product_data.product.price}}</div>
       <button v-if='canAddToCart'  v-on:click='add_to_cart($event),show_check_out($event)'   class='bunner-btn basket-item'>Избранное</button>
       <button v-else class='bunner-btn basket-item' v-on:click='remove_to_cart($event),show_check_out($event)'>В избранном</button>
   </div>
</div>
   `
})
app.component('basketitem',{
	props:{
		productinbasket:{
			typeof:Object,
		default(){
			return {}
		}
		}
	},
   data(){
       return{
           count:0,
		   basket:[]
       }
   },
   methods:{
	send(productinbasket){
	this.basket.push(productinbasket)
	}
   },
   template:`
   <div class="basketbar">
   <div class='advantages-company-cont size20x20px'><img src='./img/favourite.png'>
   <h3> </h3>
   </div>
   </div>
   `
})

app.mount('#app')

/*03.12.2021 14^35 */

/*Попытка на vue3 */

const app=Vue.createApp({
    data(){
       return{
		   carttobasket:[],
           advertisements:[
			{author:'Евгений',city:'Тюмень',cart:[],
			product:{
            showproduct:true,
			filterTag:'Sewagecollectors',
			id:1,
			nameitem:'Ассенизатор ЗИЛ-130 ',
			description:'Выкачивает до 10 л.в минуту',
			tanksize:10,
			price:2000,
			image:'asseniz.png',
			countInventory:1
					}
			
		   },
		   {author:'Олег',city:'Тюмень',cart:[],
			product:{
            showproduct:true,
			filterTag:'Tractors',
			id:2,
			nameitem:'Трактор Fendt 1050 ',
			description:'Очень быстро обрабатывает,не перегревается',
			price:1500,
			image:'track.jpg',
			countInventory:1
					}
		   },
           {author:'Дима',city:'Тюмень',cart:[],
			product:{
            showproduct:true,
			filterTag:'Bulldozers',
			id:3,
			nameitem:'Бульдозер MENG SS-002 ',
			description:'Разнесёт стадик',
			price:2200,
			image:'buld.jpg',
			countInventory:1
					}
		   }
		            ]
               }
           }, 
           methods:{
            add_to_basket(advertisement){
				this.carttobasket.push(advertisement)
				console.log(this.carttobasket)
               },
               remove_to_basket(advertisement){
                   let changearr=this.carttobasket.filter(el=>el.product.id !=advertisement.product.id)
				this.carttobasket=changearr
				console.log(this.carttobasket)
               },           
               productshowchange(valueshowproduct){
                this.advertisements.product=valueshowproduct
				console.log(this.advertisements.product)
               }
           },
           
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
app.component('basketitem',{
	props:{
		productinbasket:{
			typeof:Object,
		default(){
			return {}
		}
		}
	},
   data(){
       return{
           count:0,
		   basket:[]
       }
   },
   methods:{
	send(productinbasket){
	this.basket.push(productinbasket)
	}
   },
   template:`
   <div class="basketbar">
   <div class='advantages-company-cont size20x20px'><img src='./img/favourite.png'>
   <h3> </h3>
   </div>
   </div>
   `
})

app.mount('#app')

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel='stylesheet' href='normalize.css'>
	<link rel='stylesheet' href='fonts.css'>
	<link rel='stylesheet' href='style.css'>
	<script src="https://unpkg.com/vue@next"></script>
	<title>Category</title>
</head>
<body>
	<div id='app'>
	<header>
		<div class='wrapper'>
			<div class='bg-black'>
				<div class='header'>
					<div class='logo'>
						<figure class='logo-img'></figure>
							<a class='logo-title' href='#'>NovoStack</a>
						</div>
						<div class='flex-490res'>
							<ul class='nav'>
								<li><a href='index.html'>Главная</a></li>
								<li><a href='category.html'>Категории</a></li>
								<li><a href='contact.html'>Контакты</a></li>
								<li><a href='question.html'>Вопрос-Ответ</a></li>
							</ul>
							<div class='header-right'>
							<a href='#'class='header-btn reg-link'>Регистрация</a>
							<a  href='#' class='header-btn login-link'>Авторизация</a>
							</div>
							<basket></basket>
						</div>
				</div>
			</div>
		</div>
	</header>
	<main  class='products'>
	<div class='wrapper'>
		<h1 class='text-title center'>Техника</h1>
		<div class='_cont-filtanditem'>
			<div class='menu'>
				<form action='#' method='get' class='form-prod' enctype="multipart/form-data">
					<fieldset>
						<legend class='text-Medium25px'>Категория</legend>
						<section class='searchZ'>
							<div class='search-info search-info-remove'>
								<input  class='input-search' type='text' name='category' placeholder='Поиск'></input>
								<button type="submit"  class='search-btn bg-white'> 
									<img src='./img/search30px.png' id='pic-search-btn'></img>
								</button>
							</div>
						</section>
				<ul class='category-list'>
					<li class='category-list-item'><input data-id='all' type='radio' name='category' value='all'>Все</input></li>
					<li class='category-list-item'><input data-id='Sewagecollectors' type='radio' name='category' value='Ассенизаторы'>Ассенизаторы</input></li>
					<li class='category-list-item'><input data-id='Dumptrucks'type='radio' name='category' value='Самосвалы'>Самосвалы</input></li>
					<li class='category-list-item'><input data-id='Excavators' type='radio' name='category' value='Экскаваторы'>Экскаваторы</input></li>
					<li class='category-list-item'><input data-id='Ilosos' type='radio' name='category' value='Илососы'>Илососы</input></li>
					<li class='category-list-item'><input data-id='Tractors' type='radio' name='category' value='Тракторы'>Тракторы</input></li>
					<li class='category-list-item'><input data-id='Towtrucks' type='radio' name='category' value='Эвакуаторы'>Эвакуаторы</input></li>
					<li class='category-list-item'><input data-id='Garbagetrucks' type='radio' name='category' value='Эвакуаторы'>Мусоровозы</input></li>
					<span id="dots"> </span>
					<div id='more'>
						<li class='category-list-item'><input data-id='buses' type='radio' name='category' value='Автобусы'>Автобусы</input></li>
						<li class='category-list-item'><input data-id='Minivans' type='radio' name='category' value='Минивены'>Минивены</input></li>
						<li class='category-list-item'><input data-id='Bulldozers' type='radio' name='category' value='Бульдозеры'>Бульдозеры</input></li>
						<li class='category-list-item'><input data-id='Graders' type='radio' name='category' value='Грейдеры'>Грейдеры</input></li>
						<li class='category-list-item'><input data-id='Manipulators' type='radio' name='category' value='Манипуляторы'>Манипуляторы</input></li>
						<li class='category-list-item'><input data-id='mini-Excavators' type='radio' name='category' value='Мини-экскаваторы'>Мини-экскаваторы</input></li>
					</div>
				</ul>
				<button  class='button-cat' id='btnmore'  >Больше Категорий</button>
					</fieldset>
				
				</form>
			</div>
			<div class='space-between'>
			<item 
				v-for='advertisement in advertisements'
				:key='advertisement.id'
			    :advertisement='advertisement'
				v-on:add_to_cart='add_to_basket'
				v-on:show_check_out='productshowchange'
				v-on:remove_to_cart='remove_to_basket'
				>
			</item>
			</div>
</div>
			</div>
	
	</main>
	<footer>
		<div class='wrapper'>
		<div class='footer'>
		<p class='small-text'> &copy; NovoStack Company 2021-&#8734;</p>
		<a href='#' class='small-text'>Политика конфиденциальности</a>
		</div>
		</div>
	</footer>
	<section class='login'>
		<div class='wrapper'>
			<form action='#' method="get" class='form-center modal-login'>
				<fieldset>
					<legend><h2 class='text-title-OpenSans'>Авторизация</h2></legend>
					<div class='input_form'>
						<label for='user-name'><h2>Логин</h2></label>
						<input required type='text' id='user-name'  name='login' placeholder='admimadminov' >
					</div>
					<div class='input_form'>
						<label for='user-password'><h2>Пароль</h2></label>
						<input required type='password' autocomplete =off id='user-password' name='password' placeholder='********' >
					</div>
					<div class='btn-joib'>
						<input type='submit' value='Войти'>
					</div>
					<div>
						<label class='login-checkbox'>
							<input type='checkbox' name='remember' class='visually-hidden'>
							<span class='checkbox-indicator'>Запомните меня</span>
						</label>
					</div>
					<div class='input_form'>
						<a  href='#' class='forget'>Забыли пароль?</a>
					</div>
				</fieldset>
				<button class='modal-close' type='button'></button>
			</form>
		</div>
	</section>
	<section class='reg'>
		<div class='wrapper'>
			<form action='#' method="get" class='form-center modal-reg'>
				<legend><h2 class='text-title-OpenSans'>Регистрация</h2></legend>
					<fieldset>
						<div class='input_form'>
							<label for='user-name-reg'><h2>Логин</h2></label>
							<input required type='text' id='user-name-reg' placeholder='admimadminov' >
						</div>
						<div class='input_form'>
							<label for='user-password-reg'><h2>Пароль</h2></label>
							<input required type='password' id='user-password-reg' autocomplete =off placeholder='********' >
						</div>
						<div class='input_form'>
							<label for='user-password2'><h2>Повторите пароль</h2></label>
							<input required type='password' id='user-password2' autocomplete =off placeholder='********' >
						</div>
						<div class='input_form'>
							<label for='user-tel'><h2>Номер телефона</h2></label>
							<input required type='tel' id='user-tel' placeholder='8800553535' >
						</div>
					</fieldset>
					<fieldset>
						<div class='input_form'>
							<label for='user-fio'><h2>Фио</h2></label>
							<input required type='text' id='user-fio' placeholder='Антон Павлович Чехов' >
						</div>
						<div class='input_form'>
							<label for='user-email'><h2>Почта</h2></label>
							<input required type='email' id='user-email' placeholder='NovoStack@gmail.com' >
						</div>
						<div class='input_form'>
							<label for='user-city'><h2>Город</h2></label>
							<input required type='text' id='user-city' placeholder='Тюмень' >
						</div>
						<div class='input_form'>
							<label for='user-Address'><h2>Адрес</h2></label>
							<input required type='text' id='user-Address' placeholder='Ул Левая 8' >
						</div>
					</fieldset>
					<div class='flex-center'>
						<div class='btn-joib'>
							<input type='submit' value='Регистрация'></input>
						</div>
					</div>
					<button class='modal-close close-reg' type='button'>
					</button>
			</form>
		</div>
	</section>
	</div>

	<script src="https://unpkg.com/vue@next"></script>
	<script src='./vue.js'></script>
	<script src='./category.js'></script>
	<script src='./script.js'></script>
</body>
</html>