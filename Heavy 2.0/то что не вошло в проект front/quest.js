const anchors=document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors){
	anchor.addEventListener('click',function(event){
		event.preventDefault();
		const BlockID=anchor.getAttribute('href')
		document.querySelector(''+ BlockID).scrollIntoView({
			behavior:"smooth",
			block:"start"
		})
	})
}