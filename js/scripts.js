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

});
    




































