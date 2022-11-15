// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // document.getElementById("myBtn").addEventListener("click", displayDate);
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

    // var currentHour = "enter info"
    // var (transform all the ids into an array? name array row ID)

    // Add funtion that allows for current date to be displayed at the top of the page everytime the function is executed
    $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY')); 
    // Add time blocks for standard working hours (see HTML)
    // Color code each block based on current time (gray for past time bloack, red for current time blocks and green for future time blocks *use for loop*)
    var timeStyle = function() {
        var currentTime = moment().format('H');
        var timeColorStyle = $(".textarea");
        for (var i = 0; i < timeColorStyle.length; i++){
            var timeIds = timeColorStyle[i].id;
            var getTimeIds = document.getElementById(timeColorStyle[i].id);

            if (timeIds < currentTime) {
                $(getTimeIds).addClass("past");
            } else if (timeIds > currentTime) {
                $(getTimeIds).addClass("future");
            } else {
                $(getTimeIds).addClass("present");
            }
        }
    }
    // Add local storage functionality so that events that are entered/saved in the timeblock remain in the time blocks once the page is refreshed.   
        
     
});
    


