$(function(){
	$('.top-slider').slick({
		slidesToShow: 1,
		slideToScroll: 1,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}
		]
	});

});
const list = document.querySelectorAll('.calculator-form__forms input')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active')
		  							el.style.border = '1px solid #EAEAEA' });
        item.classList.add('active');
		  item.style.border = '1px solid rgba(251, 177, 67, 0.5)';
    })
})