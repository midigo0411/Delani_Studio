$(document).ready(function(){
    //hides the selected elements $ selector & action
    $('.drop1').hide();
    $('.drop2').hide();
    $('.drop3').hide();

    $("#projectimage").click(function(){
        $(this).slideUp();
        $(".drop1").show(500);
});
    $(".drop1").click(function(){
        $("#projectimage").slideDown();
        $(".drop1").hide();
});
    $("#projectimage0").click(function(){
        $(this).slideUp();
        $(".drop2").show(500);
});
    $(".drop2").click(function(){
        $("#projectimage0").slideDown();
        $(".drop2").hide();
});

    $("#productimage1").click(function(){
        $('#productimage1').slideUp();
        $(".drop3").show(500);
});
    $(".drop3").click(function(){
        $("#productimage1").slideDown();
        $(".drop3").hide();
});
    $("#image1").mouseover(function(){
        $("#one").show();
    }).mouseout(function(){
        $("#one").hide();
  });
    $("#image2").mouseover(function(){
     $("#two").show();
  }).mouseout(function(){
        $("#two").hide();
  });
    $("#image3").mouseover(function(){
        $("#three").show();
  }).mouseout(function(){
        $("#three").hide();
  });
    $("#image4").mouseover(function(){
        $("#four").show();
  }).mouseout(function(){
        $("#four").hide();
  });
    $("#image5").mouseover(function(){
         $("#five").show();
  }).mouseout(function(){
        $("#five").hide();
  });
    $("#image6").mouseover(function(){
        $("#six").show();
  }).mouseout(function(){
         $("#six").hide();
  });
     $("#image7").mouseover(function(){
         $("#seven").show();
  }).mouseout(function(){
     $("#seven").hide();
  });
     $("#image8").mouseover(function(){
         $("#eight").show();
  }).mouseout(function(){
         $("#eight").hide();
  });
  $("form#form").submit(function(event){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
    if ($("input#name").val() && $("input#email").val() && $("input#message").val()!= "" ){
      alert (name + ", we have received your message. Thank you for contacting us.");
    }
    else {
      alert("Fill in all your details please!")
    }
    event.preventDefault();
  });


});
    




































