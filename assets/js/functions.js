$( document ).ready(function() {

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
});

// Side Navigation
// =============================================

function openNav() {
    document.getElementById("mySidenav").classList.add("sidenav-active");
}
function closeNav() {
    document.getElementById("mySidenav").classList.remove("sidenav-active");
}


window.addEventListener("resize", function() {
  if (window.innerWidth > 650) {
    console.log("hi");
    closeNav()
  }
});




// Initialize Isotope
// =============================================
var filtr = "";

function startCode() {
	var $container = $('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		getSortData: {
			name: '[data-isotope-sort-name]'
		}
	});

	filterItemHandler();
};

// FILTER HANDLER
// =============================================
function filterItemHandler(){
  var $container = $('.grid').isotope();

	$('.filters').on( 'click', 'button', function() {
    filtr = $( this ).attr('data-filter');

		$container.isotope({ filter: filtr });
    console.info( 'FILTER: ', filtr );
  });
}

// Start Code
// =============================================

$(document).ready(function(){
  startCode();
});


// Button Handler
// =============================================
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// NAV Button Handler
// =============================================

$('.nav-group').each( function( i, navGroup ) {
  var $navGroup = $( navGroup );
  $navGroup.on( 'click', 'button', function() {
    $navGroup.find('.nav-button-checked').removeClass('.nav-button-checked');
    $( this ).addClass('.nav-button-checked');
  });
});


// NAV Add Shadow On Scroll
// =============================================

window.onscroll = function changeClass(){
  var scrollPosY = window.pageYOffset | document.body.scrollTop;
  var navBar = document.getElementById('navBar');

  if(scrollPosY > 5) {
          navBar.className = ('header-shadow');
    } else if(scrollPosY <= 100) {
         navBar.className =  ('');
    }
}
























// // dropdown Button Handler
// // =============================================


// $(function(){
//   var nav = $('.button-group'),
//       animateTime = 200,
//       navLink = $('.drop-button');
//   navLink.click(function(){
//     if(nav.height() === 0){
//       autoHeightAnimate(nav, animateTime);
//     } else {
//       nav.stop().animate({ height: '0' }, animateTime);
//     }
//   });
// })
//
// /* Function to animate height: auto */
// function autoHeightAnimate(element, time){
//   	var curHeight = element.height(), // Get Default Height
//         element.height(curHeight); // Reset to Default Height
//     	  element.stop().animate({ height: 60 }, time); // Animate to Auto Height
// }




// function toggleDropdown() {
//   $(document).ready(function(){
//     $(".dropgroup").toggle(function(){
//       $(this).animate({height:0},200);
//     },function(){
//       $(this).animate({height:400},200);
//     });
//   });
// }


//
// function toggleDropdown() {
//   var myMenu = document.getElementsByClassName('dropgroup');
//   var displaySetting = myMenu[0].style.display;
//
//   if (displaySetting === 'none'){
//       myMenu[0].style.display = 'block';
//   } else{
//
//       myMenu[0].style.display = 'none';
//
//   }
// }


// $(".drop-btn").click(function () {
//
//       if($(".dropgroup").attr("id") === "dropgroup-viz"){
//           $(".dropgroup").attr("id", "dropgroup-active");
//       } else{
//
//       $(".dropgroup").attr("id", "dropgroup-viz");
//
//       }
// });
