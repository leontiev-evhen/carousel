/* ================= slider user 11 =============================*/
var carouselBlock = document.querySelector('#myCarousel');
var controlArrow = document.getElementsByClassName('carousel-control');
var item = document.getElementsByClassName('item');
var slideNum = 1;


carouselBlock.addEventListener("mouseover", showArrow);  
carouselBlock.addEventListener("mouseout", hideArrow); 

showSlideCarousel (slideNum);

function showSlide (num) {
	for (i = 0; i < item.length; i++) {
		item[i].classList.remove('active'); 	
  	}
  	item[num].classList.add('active');
}

function showArrow () {
	var num = 0;
	for (var i = 0; i < item.length; i++) {
		if (item[i].classList.contains('active')) {
			num = item[i].getAttribute('data-slide-number');
		}
	}

	if (num == 0) {
		controlArrow[1].classList.add('active');
	} else if (num == (item.length - 1)) {
		controlArrow[0].classList.add("active");
	} else {
		controlArrow[0].classList.add("active");
		controlArrow[1].classList.add("active");
	}	
}

function hideArrow () {
	for (var i = 0; i < controlArrow.length; i++) {
		controlArrow[i].classList.remove('active');
	}
}

function carouselControl (num) {
  	showSlideCarousel(slideNum += num);
}

function showSlideCarousel (num) {
 
  	if (num > item.length) {
  		slideNum = 1;
  	} 

  	if (num < 1) {
  		slideNum = item.length;
  	}

  	for (var i = 0; i < item.length; i++) {
      	item[i].classList.remove('active'); 
  	}

  	item[slideNum-1].classList.add("active");
}