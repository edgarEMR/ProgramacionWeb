$(document).ready(function(){

    /*$("#cambiarTexto").click(function(){
        //$("p").hide();
        //$(".colorRojo").hide();
        $("a[target='_blank']").hide();
    });

    $("h3").click(function(){
        $(this).hide();
    });

    $("h3").dblclick(function(){
        $(this).hide();
    });

    $("h3").mouseenter(function(){
        alert("entre");
    });

    $("h3").mouseleave(function(){
        alert("salí");
    });

    $("input").focus(function(){
        $(this).css("background-color", "yellow")
    });

    $("input").blur(function(){
        $(this).css("background-color", "blue")
    });

    $("h3").on(function(){
        alert("entre")
    });

    $("button").click(function(){
        $("h3").fadeIn();
    });

    $("#boton2").click(function(){
        $("h3").fadeOut();
    });

    $("#boton1").click(function(){
        alert("Text: " + $(".textoso").text());
    });

    $("#boton2").click(function(){
        alert("Html: " + $(".textoso").html());
    });

    $("#boton3").click(function(){
        alert("Value: " + $("#nombre").val());
    });

    $("#boton4").click(function(){
        alert("Text: " + $("a").attr("href"));
    });
    */

    $("#boton1").click(function(){
         $(".textoso").append("<p>Hello world</p>");
    });

});