$(function(){




    function selectDelivery(type) {
        document.getElementById('homeDelivery').classList.remove('selected');
        document.getElementById('storePickup').classList.remove('selected');
    
        if (type === 'home') {
            document.getElementById('homeDelivery').classList.add('selected');
        } else {
            document.getElementById('storePickup').classList.add('selected');
        }
    }
    
    function selectShipping(type) {
        document.getElementById('dhlStandard').classList.remove('selected');
        document.getElementById('dhlEvening').classList.remove('selected');
    
        if (type === 'standard') {
            document.getElementById('dhlStandard').classList.add('selected');
        } else {
            document.getElementById('dhlEvening').classList.add('selected');
        }
    }



//   $(window).scroll(function(){
//     var scrolling = $(this).scrollTop();
//     var footerTop = $('footer').offset().top;
//     var windowHeight = $(window).height();
    
//     if (scrolling > 50 && (scrolling + windowHeight) < footerTop) {
//         if (!$(".menu-bg").hasClass("nav-bg")) {
//             $(".menu-bg").stop().css('display', 'block').animate({ transform: 'translateY(0)' }, 200).addClass("nav-bg");
//         }
//     } else {
//         if ($(".menu-bg").hasClass("nav-bg")) {
//             $(".menu-bg").stop().animate({ transform: 'translateY(100%)' }, 200, function() {
//                 $(this).removeClass("nav-bg").css('display', 'none');
//             });
//         }
//     }
  

//   })


 
 



})



  
  
