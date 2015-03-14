$(document).ready(function(){

    $("#hu-button").on('click', function () {
        var observe = $('#hu-button').attr('aria-expanded');
        console.log(observe);
        if(observe == 'true'){
            $(this).parent().parent().parent().css("margin-bottom", "325px");
            console.log(observe);
            console.log("TRUE");
        }else{
            $(this).parent().parent().parent().css("margin-bottom", "20px");
            console.log(observe);
            console.log("FALSE");
        }
    });

    /*
    button.click(function(){
     .val($(this).attr("aria-expanded"))
        button.attr('aria-expanded', function(index, currentvalue){
                  observe = true;
                  currentvalue = observe;
                  if(currentvalue){
                      $(".hu-nav").css("margin-bottom", "10px");
                  }else{
                      observe=false;
                      currentvalue = observe;
                      $(".hu-nav").css("margin-bottom", "325px");
                  }
                  console.log(index);
                  console.log(currentvalue);
              });
    });*/
    /*
    $('#navbar').attr('aria-expanded', function(index, currentvalue){
        console.log(index);
        console.log(currentvalue);
    });

    $(".hu-nav").find(buttonOpen).parent().parent().parent().css("margin-bottom", "325px");
*/
});