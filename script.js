"use strict";
function setUpButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const time = button.dataset["time"];
      const textArea = document.getElementById(time);
      const message = textArea.value;
      localStorage.setItem(time, message);
    });
  });
}
setUpButtons();
function getMessage() {
  const textAreas = document.querySelectorAll("textarea");
  for (let i = 0; i < textAreas.length; i++) {
    const textArea = textAreas[i];
    const id = textArea.id;
    const message = localStorage.getItem(id);
    textArea.value = message;
  }
}
getMessage();

const time = function () {
  document.getElementById("currentDay").textContent = moment().format(
    "MMMM Do YYYY, h:mm a"
  );
};
setInterval(time, 1000);

//Display current color
function hourformat() {
  var currentHour = moment().hours();
  $(".time-block").each(function () {
    var rowHour = parseInt($(this).attr("id"));
    if (currentHour > rowHour) {
      $(this).addClass("past");
    } else if (currentHour === rowHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourformat();
