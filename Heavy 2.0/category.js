
let checkIt = true;
//если chekIt оставить внутри 
//функции, то будет if всегда 
//выполняться

let btn = document.getElementById("btnmore");
btn.addEventListener("click", readMore);

function readMore() {
let dots = document.getElementById("dots");
let more = document.getElementById("more");

if (checkIt) {
more.style.display = "inline";
dots.style.display = "none";
btn.innerHTML = "Скрыть";
checkIt = false;
} else {
dots.style.display = "inline";
more.style.display = "none";
btn.innerHTML = "Показать ещё";
checkIt = true;
}
}
var list=document.querySelector('.category-list');
var items=document.querySelectorAll('.card-item');
console.log(items)
function filter(){
	list.addEventListener('click',function(evt){
	const targetid=evt.target.dataset.id;
	console.log(targetid);
	switch(targetid){
		case 'all':
		getitems('card-item');
		break;
		case 'Sewagecollectors':
			getitems(targetid);
			break;
		case 'Dumptrucks':
			getitems(targetid);
			break;
		case 'Excavators':
			getitems(targetid);
			break;
		case 'Ilosos':
			getitems(targetid);
			break;
		case 'Tractors':
			getitems(targetid);
			break;
	  case 'Towtrucks':
		getitems(targetid);
			break;
	  case 'buses':
		getitems(targetid);
			break;
		case 'Minivans':
			getitems(targetid);
			break;
		case 'Bulldozers':
			getitems(targetid);
			break;
		case 'Graders':
			getitems(targetid);
			break;
		case 'Manipulators':
			getitems(targetid);
			break;
		case 'mini-Excavators':
			getitems(targetid);
			break;
			case 'Garbagetrucks':
				getitems(targetid);
				break;
	}
	})
}
filter();
function getitems(className){
	items.forEach(item => {
		if (item.classList.contains(className))
		{item.style.display='block'}else{
			item.style.display='none'
		}
	});
}