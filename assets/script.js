// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    
    // Add funtion that allows for current date to be displayed at the top of the page everytime the function is executed
    $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY')); 

    // 
    
    $(".time-block").each(function(){
        var currentTime = parseInt(dayjs().format('H'));
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockTime);

        if(blockTime < currentTime) {
            $(this).addClass("past");
        } else if(blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
  
    var ids = $("[textarea]");
    console.log(ids);

    localStorage.setItem("ids", JSON.stringify(ids));

});
    


