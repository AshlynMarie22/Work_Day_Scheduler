console.log("hello world");
var now = moment();
var todayDate= now.format("dddd, MMMM Do");
var todayTime= now.format("h:mm a");

$("#currentDay").text(todayDate + " " + todayTime);

var scheduleHours = ["9", "10", "11", "12","1", "2", "3", "4", "5"];

for (let i=0; i< scheduleHours.length; i++){

}

//Save input to storage
//set item 
$(document).on("click", ".saveButton", function() {
    localStorage.setItem($(this).parent().attr('id')), $(this).siblings(".description").val().trim(); });

//checking local storage
function getStorage(){
    var storageKeys = Object.keys(localStorage)
    for (var i=0; i< storageKeys.length; i++){
        var savedText = getItem(storageKeys[i]);
        $("#"+ storageKeys[i].toString().children(".description").val(savedText));
    };
}

//Have today's date at the top of the page

//Create rows with a column for time, scheduler, and save button

//populate the rows with time

//populate the rows with an input

//populate the rows with save button

//when the time is past the current time have the row greyed out

//when something has been saved have the row turn red

//Save the input so that it isn't earsed when the page is refreshed 