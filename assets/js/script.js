  //Timer and Date displayed using dayjs
  let timerInterval = setInterval(function () {

  let update = dayjs();
  $('#date').text(update.format('MMMM D, YYYY'));
  $('#time').text(update.format('hh:mm:ss a'))
}, 1000);

//Ensures that the script will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function () {
  // List of IDs
  let ids = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];

  // Get the current dayJS hour
  let dayjsHour = dayjs().hour();

  // Iterate over each ID
  ids.forEach(function (id) {
    // Extract the numeric part from the ID
    let hourId = parseInt(id.split('-')[1]);

    // Compare the numeric part with the dayJS hour
    if (hourId < dayjsHour) {
      $("#" + id).addClass("past");
    } else if (hourId === dayjsHour) {
      $("#" + id).addClass("present");
    } else {
      $("#" + id).addClass("future");
    }
  });
});

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  
  //Display save message in Jumbotron
  $("#saveMessage").text("Task has been saved!");

    // Logging the value to console
    console.log(value); 
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
