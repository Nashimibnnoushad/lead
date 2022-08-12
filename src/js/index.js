import $ from 'jquery';

$(document).ready(function(){
    $(".slide-ent").click(function(){
      $(this).addClass("slideractive");
      $('.slide-skil').removeClass("slideractive");
      $('.skils').hide()
      $('.enterpre').show()


    });
    $(".slide-skil").click(function(){
        $(this).addClass("slideractive");
        $('.slide-ent').removeClass("slideractive");
        $('.skils').show()
        $('.enterpre').hide()
  
      });

      $(".plus").click(function(){
        $(this).parent().parent().parent().next().fadeIn();
        $(this).hide()
        $(this).next().show()
      });
      $(".minus").click(function(){
        $(this).parent().parent().parent().next().fadeOut()
        $(this).hide()
        $('.plus').show()
      });

      $(".drophead").click(function(){
        $('.dropitems').toggle();
  
      });

      $(".languagedrophead").click(function(){
        $('.languagedropitems').toggle();
  
      });

      $(".sidebar").click(function(){
        $('.sidenavbar').fadeIn();
  
      });

      $(".closebtn").click(function(){
        $('.sidenavbar').fadeOut();
  
      });
      
         
      $(".openpopup").click(function(){
        $('.popup').css('display','flex').fadeIn();
          
      });
      $(".Invitecancel").click(function(){
        $('.popup').fadeOut();
  
      });

      
  });

