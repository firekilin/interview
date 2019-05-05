
$(window).scroll(function() {
    /*console.log($(window).scrollTop());*/
    var scroll=$(window).scrollTop();
	
  
    if (scroll>=0&&scroll<=10) {
       /* $(".S_DL").css( {
            "margin-left": 0+ "%",
        }
        );
        $(".S_DR").css( {
            "margin-left": (50)+ "%"
        }
        );*/
    }
	
	
 
       /* $('html,body').animate( { scrollTop: $('#showtime').offset().top }, 800);*/
 
 
	
}

);
function menu2(){
		$('.left-side').animate( { scrollTop:($('.left-side').scrollTop()+$('#'+menu2.arguments[0]).offset().top-150) }, 800);
		
	
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