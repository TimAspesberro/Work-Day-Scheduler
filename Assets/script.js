//grabs the save button
var saveBtn = $(".save");

//displays current day in the header element
var getCurrentDay = () => {
  var now = new Date();

  var hour = now.getHours();
  var day = now.getDay();
  var month = now.getMonth();

	var p = document.createElement('p');
  p.innerHTML = `Date: ${month}/${day}`;

  document.getElementById('currentDay').appendChild(p);
}

//Changes color of the time slots to represent past, present and future states
function slotColor() {
  var now = new Date();
  var current = now.getHours();
  var timeBlock = $(".time-block");

  timeBlock.each(function() {
      var hourString = parseInt($(this).attr("id"));

      if (hourString > current) {
          $(this).addClass("future");
      } else if (hourString === current) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

//Saves user inputs to local storage
saveBtn.on("click", function() {

  var timeKey = $(this).siblings(".hour").text();
  var textValue = $(this).siblings(".inputText").val();
  localStorage.setItem(timeKey, textValue);
});

//Repopulates text content
function useScheduler() {

  $(".hour").each(function() {

      var currText = $(this).text();
      var currInput = localStorage.getItem(currText);

      if(currInput) {
          $(this).siblings(".inputText").val(currInput);
      }
  });
}

//involes the functions
getCurrentDay();
slotColor();
useScheduler();

