//Variables that may be needed
var calCont = $(".container");
var now = moment();
var todayDate = now.format("dddd, MMMM Do");
var todayTime = now._d;
//console.log(todayTime);

//Have today's date at the top of the page
$("#currentDay").text(todayDate);

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

var storageId = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < scheduleHoursArray.length; i++) {
  //Create rows with a column for time, scheduler, and save button
  var newRow = $("<row>").attr({
    class: "row time-block",
    id: storageId[i],
  });
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

  getStorage();
}

//Save the input so that it isn't earsed when the page is refreshed
//set item
$(document).on("click", ".saveBtn", function (event) {
  event.preventDefault();
  localStorage.setItem(
    //key
    $(this).parent().attr("id"),
    //value
    $(this).siblings(".description").val().trim()
  );
});
//checking local storage//
function getStorage() {
  var storageItems = Object.keys(localStorage);
  for (var i = 0; i < storageItems.length; i++) {
    var savedInput = localStorage.getItem(storageItems[i]);
    $("#" + storageItems[i].toString())
      .children(".description")
      .val(savedInput);
  }
}
