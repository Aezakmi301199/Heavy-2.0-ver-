
/*Авторизация */
var loginlink=document.querySelector('.login-link');
var popup=document.querySelector('.modal-login');
var close=document.querySelector('.modal-close');
var login =popup.querySelector('[name=login]');
var password =popup.querySelector('[name=password]');
var form=popup.querySelector('form fieldset .btn-joib input[type=submit]');
var storagelogin='';
var isStorageSupport =true;
try {
 storagelogin=localStorage.getItem('login');
} catch(err){
	isStorageSupport=false;
}
loginlink.addEventListener('click',function(evt){
	evt.preventDefault();
	popup.classList.add('modal-show');
 	if (storagelogin){
		login.value=storagelogin;
		password.focus();
	}else{
		login.focus();
	}
	
})
close.addEventListener('click',function(evt){
	evt.preventDefault();
	popup.classList.remove('modal-show');
	popup.classList.remove('modal-error');
})
form.addEventListener('click',function(evt){
	if (!login.value || !password.value )
	{
		popup.classList.remove('modal-error');
		popup.offsetWidth=popup.offsetWidth;
		popup.classList.add('modal-error');

	} else{
		if (isStorageSupport){

			localStorage.setItem('login',login.value);
		}
	}
});
window.addEventListener('keydown',function(evt){
	if (evt.keyCode ===27){
		evt.preventDefault();
		if (popup.classList.contains('modal-show')){
			popup.classList.remove('modal-show');
			popup.classList.remove('modal-error');
		}
	}
})
/*Регистрация */ 
var linkreg=document.querySelector('.reg-link');
var popupreg=document.querySelector('.modal-reg');
var closereg=document.querySelector('.close-reg');
linkreg.addEventListener('click',function(evt){
	evt.preventDefault();
	popupreg.classList.add('modal-show');
})
closereg.addEventListener('click',function(evt){
	evt.preventDefault();
	popupreg.classList.remove('modal-show');
})
/*Счётчик*/ 
if(document.querySelector('.active_items')){
	let count=document.querySelector('.active_items').getElementsByClassName('_cont-card-item');
	let CountRez=0;
	for(let i=0;i<count.length;i++){
		CountRez++
	} 
	document.getElementById('CountRez').innerHTML='(' + CountRez + ')';
}
/*Кнопка активные и закрытые */
let button_open_deal=document.querySelector('.bunner-btn');
let button_close_deal=document.querySelector('.bunner-btn-off')
let ActiveOutItems=document.querySelector('.active_items');
let closedOutItems=document.querySelector('.close_items');
if(button_open_deal && button_close_deal){
	
button_open_deal.addEventListener('click',function(){
	closedOutItems.style.display='none';
	if(	ActiveOutItems.style.display=='none'){
		ActiveOutItems.style.display='block';
		// console.log('Превратили ОТКРЫТЫЕ В БЛОК')
	}
	else{
		ActiveOutItems.style.display='none';
		// console.log('Превратили ОТКРЫТЫЕ В НОУН')
	}
	button_close_deal.style.background='#F4F4F4';
	button_close_deal.style.color='#1F2735';
	button_open_deal.style.background='#3573E0';
	button_open_deal.style.color='#FFFFFF';
	let items_active=document.querySelector('.active_items');
	// console.log(items_active);
	// items_active=items_active.style.display='none';
	}
);
button_close_deal.addEventListener('click',function(){
	ActiveOutItems.style.display='none';
	button_open_deal.style.background='#F4F4F4';
	button_open_deal.style.color='#1F2735';
	button_close_deal.style.background='#3573E0';
	button_close_deal.style.color='#FFFFFF';
	let items_closed=document.querySelector('.close_items');
	if (items_closed.style.display=='block'){
		items_closed.style.display='none';
		// console.log('Првератили в ноун')

	}
	else{
		items_closed.style.display='block';
		// console.log('Првератили в блок')
	}

	}
);
}
/*Кнопка фильтра */
if (document.querySelector('.button_filter')){
	let button_filter=document.querySelector('.button_filter');
	button_filter.addEventListener('click',function(){
		let content_filter=document.querySelector('.content_filter');
		if (content_filter.style.display=='flex'){
			content_filter.style.display='none'
		}
		else{
			content_filter.style.display='flex'
		}
	});
	
$( document ).ready(function() {
    let filter =$('[data-filter]');
	filter.on('click',function(event){
		event.preventDefault();
		let category=$(this).data('filter');
		if (category=='all'){
			$('[data-cat]').removeClass('changeState')
		} else {
			$('[data-cat]').each(function(){
				let categoryitem =$(this).data('cat');
				 if (categoryitem!=category){
					$(this).addClass('changeState')
				 }	
				 else {
					$(this).removeClass('changeState')
				 }
			})
		}
	})
});
}
/*Сортировка по возрастанию/убыванию цены */

if (document.querySelector('#btn_sort_increasing')){
	let btn_sort_increasing=document.querySelector('#btn_sort_increasing');
	btn_sort_increasing.addEventListener('click',function(event){
		event.preventDefault();
		let cont_items=document.querySelector('.grid2column');
		for (let i=0;i<cont_items.children.length;i++){
			for (let j=i;j<cont_items.children.length;j++){
				if (+cont_items.children[i].getAttribute('data-price')>
				 +cont_items.children[j].getAttribute('data-price')){
	          replaceNode=cont_items.replaceChild(cont_items.children[j],cont_items.children[i]);
			insertAfter(replaceNode,cont_items.children[i]);
				}
			}
		}
	})
}
function insertAfter (el,refelement){
	return refelement.parentNode.insertBefore(el,refelement.nextSibling);
}

if (document.querySelector('#btn_sort_off_increasing')){
	let btn_sort_off_increasing=document.querySelector('#btn_sort_off_increasing');
	btn_sort_off_increasing.addEventListener('click',function(event){
		event.preventDefault();
		let cont_items=document.querySelector('.grid2column');
		for (let i=0;i<cont_items.children.length;i++){
			for (let j=i;j<cont_items.children.length;j++){
				if (+cont_items.children[i].getAttribute('data-price')<
				 +cont_items.children[j].getAttribute('data-price')){
	          replaceNode=cont_items.replaceChild(cont_items.children[j],cont_items.children[i]);
			insertAfter(replaceNode,cont_items.children[i]);
				}
			}
		}
	})
}

/* 3 или 2 кнопки адаптив*/
if (document.querySelector('.nav')){
	let logo=document.querySelector('.logo')
	let header_right=document.querySelector('.header-right');
	let flex490res=document.querySelector('.flex-490res')
	let nav=document.querySelector('.nav');
	let logoTitle=document.querySelector(('.logo'))
	if (nav.children.length % 2 === 0 ){
	}
	else {
		nav.classList.toggle('triple');
		logoTitle.classList.toggle('triple_out')
		header_right.classList.toggle('triple_right')
	    flex490res.classList.toggle('flex-490resdop')
	}
}


/*
								<li><a href='contact.html'>Контакты</a></li>
*/







/*  var loveitem1 = document.querySelectorAll
  ('._cont-card-item>.card-item-description>.card-item-description_right>.row>.love_item');
  var loveitem2 = document.querySelector
  ('._cont-card-item>.card-item-description>.card-item-description_right>.row>.love_item_new2');

  for (let buttonItem1 of loveitem1) {
	buttonItem1.addEventListener('click', () => {
		buttonItem1.style.display='none';
		loveitem2.style.display='block';
		
	  });
  }
 
*/