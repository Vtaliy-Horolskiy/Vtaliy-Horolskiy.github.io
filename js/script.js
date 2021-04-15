// Слайдеры
$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		variableWidth:true,
		speed:1000,
		waitForAnimate:false,
		easing:'ease',
		touchTreshhold:15,
		centerMode:true
	});
	
	$('.category').slick({
		arrows:true,
		slidesToShow:6,
		slidesToScroll:1,
		variableWidth:true,
		speed:1000,
		waitForAnimate:false,
		easing:'ease',
		touchTreshhold:10
	});

	$('.slider-restaurant-js').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		slidesToScroll:1,
	});

	$('.carousel-restaurant-js').slick({
		arrows: false,
		dots:false,
		slidesToShow: 4,
		variableWidth: true,
		speed: 300,
		waitForAnimate: true,
		easing: 'ease',
		touchTreshhold: 100,
		infinite: false,
		swipe: true,
		draggable: true,
		touchMove: true,
		swipeToSlide: true,
		responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            },
			{
				breakpoint: 500,
				settings: {
				  slidesToShow: 2,
				}
			  },
			  {
				breakpoint: 340,
				settings: {
				  slidesToShow: 1,
				}
			  }
          ]
	});

	$(document).on("click",".counter__minus",function (){    
        if ($(this).siblings(".counter__input").val() == 1) return;
        
        var id = $(this).attr("id");
        var val = parseInt($(this).siblings(".counter__input").val()) - 1;
        
        $(this).siblings(".counter__input").val(val);
    });
    
    $(document).on("click",".counter__plus",function (){
        
        var id = $(this).attr("id");
        var val = parseInt($(this).siblings(".counter__input").val()) + 1;
        $(this).siblings(".counter__input").val(val);

    });

	$('ul.tabs').on('click', 'li:not(.current)', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('.tab-section').find('.box-tabs').eq($(this).index()).fadeIn(150).siblings('.box-tabs').hide();
        })
	
});

// Анимация появления снизу
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
				
			}

		}

	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}


	setTimeout(() => {
		animOnScroll();
	}, 300);
}

// Анимация появления снизу---end

let moreLink = document.querySelectorAll('.restaurant-card__more-link');
if(moreLink.length > 0){
	for(let i = 0; i < moreLink.length; i++){
		moreLink[i].addEventListener('click', function(e){
			e.preventDefault();
			let parent = this.parentElement;
			let parentMain = parent.parentElement;
			if(!this.classList.contains('active')){
				this.classList.add('active');
				parentMain.classList.add('visible');
				this.innerText = 'Скрыть';
			}
			else{
				this.classList.remove('active');
				parentMain.classList.remove('visible');
				this.innerText = 'Читать далее...';
			}
		})
	}
}

// фиксация блока при скролле
$(function(){
	var topPos = $('.restaurant-order').offset().top;
	 $(window).scroll(function() {
	 var top = $(document).scrollTop(),
		 pip = $('.footer-container').offset().top - 46,
		 height = $('.restaurant-order').outerHeight();
	 if (top > topPos && top < pip - height) {$('.restaurant-order').addClass('fixed').removeClass('no-fixed');}
	 else if (top > pip - height) {$('.restaurant-order').removeClass('fixed').addClass('no-fixed');}
	 else {$('.restaurant-order').removeClass('fixed');}
	 });
   });

   $(function(){
	var topPosOrder = $('.order-detail').offset().top;
	 $(window).scroll(function() {
	 var topOrder = $(document).scrollTop(),
		 pipOrder = $('.order-btn-wrap').offset().top - 46,
		 heightOrder = $('.order-detail').outerHeight();
	 if (topOrder > topPosOrder && topOrder < pipOrder - heightOrder) {$('.order-detail').addClass('fixed').removeClass('no-fixed');}
	 else if (topOrder > pipOrder - heightOrder) {$('.order-detail').removeClass('fixed').addClass('no-fixed');}
	 else {$('.order-detail').removeClass('fixed');}
	 });
   });

// Споллеры
$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


// Меню-бургер
$(document).ready(function() {
	$('.menu-burger').click(function(event) {
		$('.menu-burger,.header__menu').toggleClass('active');
		$('.body').toggleClass('lock');
	});
});

// Изменение шапки при скролле
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 200 ) {
        $('.content,.header-scroll').addClass('scrolled');

    }   
    if( scrolled <= 200 ) {     
        $('.content,.header-scroll').removeClass('scrolled');
    }
});




$('li.dropdown').click(function() {
    $(this).nextUntil('li.dropdown').slideToggle('slow');
});






 // скрытие текста
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше"; 
    moreText.style.display = "inline";
  }
}     // скрытие текста - end




