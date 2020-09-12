//console.log("hello world");

//Elements that may be needed
var calCont = $(".container");

//Have today's date at the top of the page
var now = moment();
var todayDate = now.format("dddd, MMMM Do");
var todayTime = now._d;
console.log(todayTime);

$("#currentDay").text(todayDate + " " + todayTime);

// Times for Scheduler
var scheduleHoursArray = [
  moment("9AM", "hA"),
  moment("10AM", "hA"),
  moment("11AM", "hA"),
  moment("12PM", "hA"),
  moment("1PM", "hA"),
  moment("2PM", "hA"),
  moment("3PM", "hA"),
  moment("4PM", "hA"),
  moment("5PM", "hA"),
];

for (let i = 0; i < scheduleHoursArray.length; i++) {
  //Create rows with a column for time, scheduler, and save button
  var newRow = $("<row>").attr("class", "row time-block");
  //populate the rows with time
  var rowTime = $("<div>")
    .attr("class", "col-1 hour")
    .text(scheduleHoursArray[i]._i);
  newRow.append(rowTime);
  //Have rows turn different colors depending on the current time
  var compTime = scheduleHoursArray[i]._d;

  //when the time is present have the row turn red
  if (scheduleHoursArray[i]._i == now.format("hA")) {
    newRow.addClass("present");
  }
  //when the time is past the current time have the row greyed out
  else if (compTime < todayTime) {
    newRow.addClass("past");
  }
  // when the time is in the future have the row green
  else if (compTime > todayTime) {
    newRow.addClass("future");
  }

  //populate the rows with an input
  var schedulerInput = $("<textarea>").attr({
    class: "col-10 description",
    placeholder: "Enter schedule here.",
  });
  newRow.append(schedulerInput);

  //populate the rows with save button
  var saveButton = $("<button>")
    .attr("class", "col-1 saveBtn saveBtn i")
    .text("Save");
  newRow.append(saveButton);

  //Append all the new variables to the container
  calCont.append(newRow);
}

//Save the input so that it isn't earsed when the page is refreshed

//Save input to storage
//set item
$(document).on("click", ".saveButton", function () {
  localStorage.setItem($(this).parent().attr("id")),
    $(this).siblings(".description").val().trim();
});

//checking local storage
function getStorage() {
  var storageKeys = Object.keys(localStorage);
  for (var i = 0; i < storageKeys.length; i++) {
    var savedText = getItem(storageKeys[i]);
    $("#" + storageKeys[i].toString().children(".description").val(savedText));
  }
}
