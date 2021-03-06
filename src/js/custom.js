// Initialization of material Components

var el = document.getElementById('visionTab');
var workTab = document.getElementById('ourWorkTab');
var conatctTab = document.getElementById('contact-us-tabs');

var instance = M.Tabs.init(el);
var instance_work = M.Tabs.init(workTab);
var instance_contact = M.Tabs.init(conatctTab);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances_sidenav = M.Sidenav.init(elems);
});

//Svgs movements
$(document).on("click mousemove",".our-work",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 60;
    var newposY = y - 600; 
    var newposX =  newposX/20;
    var newposY = newposY/20; 
    $(".icon-ani").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});

$("#next-btn").click(function() {
    instance.select('OurMission');
});
$("#prev-btn").click(function() {
    instance.select('OurVision');
});

$('.circle-border').each(function(){
    $(this).html('<span class="icon">'+ $(this).html() +'</span><span class="circle"><span><em></em></span><span><em></em></span></span>');
});

$(window).scroll(function(){
    var sTop = $(window).scrollTop();
    var ww = $(window).width();
    if (ww < 767) {
        if(sTop > 100) {
            $('header.mobile .logo').hide();
            $('header.mobile .menu-icon').show();
        } else {
            $('header.mobile .logo').show();
            $('header.mobile .menu-icon').hide();
        }
    }
});


// $(document).on('click', 'a[href^="#"].scroll', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });
document.querySelectorAll('a[href^="#"].scroll-smooth').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('#contact').click(function (e) {
	e.preventDefault();
	
	var name = $('#full_name').val();
	var email = $('#email').val();
	var mobile = $('#number').val();
	
	var regNum = /(7|8|9)\d{9}/;
	var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(name == "") {
		$('#full_name').addClass('invalid');
	}
	if(email == "") {
		$('#email').addClass('invalid');
		$('#email').next().next().text('*Required');
	}
	if(mobile == "") {
		$('#number').addClass('invalid');
		$('#number').next().next().text('*Required');
	} else if ( regNum.test(mobile) == false) {
		$('#number').addClass('invalid');
		$('#number').next().next().text('*Invalid phone number');
	}
	
});

$('#join-us').click(function (e) {
	e.preventDefault();
	
	var name = $('#j_full_name').val();
	var email = $('#j_email').val();
	var mobile = $('#j_number').val();
	var desg = $('#j_Designation').val();
	
	var regNum = /(7|8|9)\d{9}/;
	var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(name == "") {
		$('#j_full_name').addClass('invalid');
	}
	if(email == "") {
		$('#j_email').addClass('invalid');
		$('#j_email').next().next().text('*Required');
	}
	if(mobile == "") {
		$('#j_number').addClass('invalid');
		$('#j_number').next().next().text('*Required');
	} else if ( regNum.test(mobile) == false) {
		$('#j_number').addClass('invalid');
		$('#j_number').next().next().text('*Invalid phone number');
	}
	if(desg == "") {
		$('#j_Designation').addClass('invalid');
	}
	
});

$(window).scroll(function(){
	var scrollPos = $(window).scrollTop();
	var sections = $('.section');
	
	for (let i = 0; i<sections.length; i++){
		
		var secPos = $(sections[i]).position().top;
		var secnextPos = $(sections[i]).position().top;
		
		if ( scrollPos >= secPos ) {
			var secId =  $(sections[i + 1]).attr('id');
			$('#scrollbtn').attr('href', '#' + secId );
		} 
		
		
	}
})