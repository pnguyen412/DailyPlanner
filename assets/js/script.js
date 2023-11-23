  //Timer and Date displayed using dayjs
  let timerInterval = setInterval(function () {

  let update = dayjs();
  $('#date').text(update.format('MMMM D, YYYY'));
  $('#time').text(update.format('hh:mm:ss a'))
}, 1000);

//Ensures that the script will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function () {
 
 


  //grabs hour from each time slot and compares it to actual time
  $.each(function () {
   //get current dayjs hour value
    let dayjsHour = dayjs().hour();
    
    let ids=['hour-9','hour-10','hour-11','hour-12','hour-13','hour-14','hour-15','hour-16','hour-17'];
    ids.forEach(function(id){
      let element = document.getElementById(id);
      let hourNumber= parseInt(id.split('-')[1]);
      console.log('Original ID:', id);
      console.log('Number:', hourNumber);
      
    // figure out a way to get just the number in the id so that it can be
    // compared to the dayjshour value
    if (dayjsHour == hourNumber) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < hour) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    console.log()
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
})
})