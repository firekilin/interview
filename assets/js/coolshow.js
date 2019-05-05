
$(window).scroll(function() {
    /*console.log($(window).scrollTop());*/
    var scroll=$(window).scrollTop();
	
  
    if (scroll>=$('.coolshow').offset().top ) {
		if(((scroll-$('.coolshow').offset().top)/5)<520){
		$('.coolshow .background').css({
			
				'position':'fixed','top':(-(scroll-$('.coolshow').offset().top)/5)+'px',
			
			
		})
		}
	}else{
		$('.coolshow .background').css({
			'position':'absolute',
		})
	}
	
	for(var i=0;i<$('.item').length;i++){
		if(($('.'+$('.item')[i].className.slice(5)).offset().top-(scroll-$('.coolshow').offset().top))<1200){
			if(i%2==0){
				$('.'+$('.item')[i].className.slice(5)).css({'right':5+'%',});
			}else{
				$('.'+$('.item')[i].className.slice(5)).css({'left':5+'%',});
			}
		}
		
		
	}
	if((350+(scroll-$('.coolshow').offset().top))<2660){
		$('.normalgif').css({'top':(350+(scroll-$('.coolshow').offset().top))+"px"});
	}
	if((350+(scroll-$('.coolshow').offset().top))<6000&&350+((scroll-$('.coolshow').offset().top))>2930){
		$('.mincraftgif').css({'top':(350+(scroll-$('.coolshow').offset().top))+"px"});
		$('.message').css({'top':(240+(scroll-$('.coolshow').offset().top))+"px"});
	}
	if((350+(scroll-$('.coolshow').offset().top))>3256&&(350+(scroll-$('.coolshow').offset().top))<3656){
		$('.message').css({'opacity':1});
		$('.mesone').css({'opacity':1});
	}else if((350+(scroll-$('.coolshow').offset().top))>3756&&(350+(scroll-$('.coolshow').offset().top))<4156){
		$('.message').css({'opacity':1});
		$('.mestwo').css({'opacity':1});
	
	}else if((350+(scroll-$('.coolshow').offset().top))>4256&&(350+(scroll-$('.coolshow').offset().top))<4556){
		$('.message').css({'opacity':1});
		$('.mesthree').css({'opacity':1});
	
	}else if((350+(scroll-$('.coolshow').offset().top))>4656&&(350+(scroll-$('.coolshow').offset().top))<4856){
		$('.message').css({'opacity':1});
		$('.mesfour').css({'opacity':1});
	
	}else if((350+(scroll-$('.coolshow').offset().top))>4956&&(350+(scroll-$('.coolshow').offset().top))<5156){
		$('.message').css({'opacity':1});
		$('.mesfive').css({'opacity':1});
	
	}else if((350+(scroll-$('.coolshow').offset().top))>5256&&(350+(scroll-$('.coolshow').offset().top))<5456){
		$('.message').css({'opacity':1});
		$('.messix').css({'opacity':1});
	
	}else{
		$('.mesone').css({'opacity':0});
		$('.mestwo').css({'opacity':0});
		$('.mesthree').css({'opacity':0});
		$('.mesfour').css({'opacity':0});
		$('.mesfive').css({'opacity':0});
		$('.messix').css({'opacity':0});
		$('.message').css({'opacity':0});
	}
}
);
function upup()
{
	
	  $('.coolshow').css({'height':0+'px'});
}
function gogogo()
{
	 $('.coolshow').css({'height':7000+'px'});
	 alert('你好像啟動了甚麼，往下滑滑看~');
}






function menu2(){
		$('.left-side').animate( { scrollTop:($('.left-side').scrollTop()+$('#'+menu2.arguments[0]).offset().top-150) }, 800);
		
	
}
function menu3(){
	switch(menu3.arguments[0]) {	
        case 'side-one':menu('inmain-myself');
        break;
        case 'side-two':menu('special_exp');
        break;
        case 'side-three':menu('secondary-2');
        break;
    }
	
}
function menu() {
    $('.right-main').animate( {
        scrollTop: ($('.right-main').scrollTop()+$('#'+menu.arguments[0]).offset().top-155)
    }
    , 800);
    switch(menu.arguments[0]) {
        case 'inmain-myself': case 'interest': case 'qualities': menu2('side-one');
        break;
        case 'special_exp': case 'nomal_exp': case 'secondary': case 'Vocational_college': case 'University': case 'club': case 'ability': menu2('side-two');
        break;
        case 'secondary-2': case 'Vocational_college-2': case 'University-2': menu2('side-three');
        break;
    }
}