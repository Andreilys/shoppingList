$(document).ready(function() 

{

	 $('input').focus(function(){
    	 $('input').css('outline-color', '#FF0000');
  });
/*have a focus input when typing*/


    $("#button").click(function(){
       var toAdd= $('input[name=shoppinglist]').val();
       $("#list").append("<div class='item'>" + toAdd + "</div>");
       $('input[name=shoppinglist]').val('');
    });
    
    $(document).on('click', '.item', function(){
       $(this).toggleClass('strike')
    });



    $('#item').on('keydown', function(e){    
    if (e.keyCode == 13){
       var toAdd= $('input[name=shoppinglist]').val();
       $("#list").append("<div class='item'>" + toAdd + "</div>");
       $('input[name=shoppinglist]').val('');
    };    
  });



    $(document).on('dblclick','.item', function(){
    	$(this).remove();

    });

    $("#button2").click(function(){
        $('.item').remove();

    });




})