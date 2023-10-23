var today = dayjs();
$('#currentDay').text("Today's Date: " + (today.format('MM/DD/YYYY')));


var buttonNine = document.getElementById("9am-todo");
var buttonTen = document.getElementById("10am-todo");
var buttonEleven = document.getElementById("11am-todo");
var buttonNoon = document.getElementById("12pm-todo");
var buttonThirteen = document.getElementById("1pm-todo");
var buttonFourteen = document.getElementById("2pm-todo");
var buttonFifteen = document.getElementById("3pm-todo");
var buttonSixteen = document.getElementById("4pm-todo");
var buttonSeventeen = document.getElementById("5pm-todo");



buttonNine.addEventListener("click", function(event) {
  event.preventDefault();

  var todoNine = document.getElementById("todoNine").value;

  localStorage.setItem("9am-todo", todoNine);
  renderTodoNineText();


});

function renderTodoNineText() {
  var todoNine = localStorage.getItem("9am-todo");
  buttonNine.value = todoNine
}

buttonTen.addEventListener("click", function(event) {
  event.preventDefault();

  var todoTen = document.getElementById("todoTen").value;

  localStorage.setItem("10am-todo", todoTen);
  renderTodoTenText();


});

function renderTodoTenText() {
  var todoTen = localStorage.getItem("10am-todo");
  buttonTen.value = todoTen
}

buttonEleven.addEventListener("click", function(event) {
  event.preventDefault();

  var todoEleven = document.getElementById("todoEleven").value;

  localStorage.setItem("11am-todo", todoEleven);
  renderTodoElevenText();


});

function renderTodoElevenText() {
  var todoEleven = localStorage.getItem("11am-todo");
  buttonEleven.value = todoEleven
}

buttonNoon.addEventListener("click", function(event) {
  event.preventDefault();

  var todoNoon = document.getElementById("todoNoon").value;

  localStorage.setItem("12pm-todo", todoNoon);
  renderTodoNoonText();


});

function renderTodoNoonText() {
  var todoNoon = localStorage.getItem("12pm-todo");
  buttonNoon.value = todoNoon
}

buttonThirteen.addEventListener("click", function(event) {
  event.preventDefault();

  var todoThirteen = document.getElementById("todoThirteen").value;

  localStorage.setItem("1pm-todo", todoThirteen);
  renderTodoThirteenText();


});

function renderTodoThirteenText() {
  var todoThirteen = localStorage.getItem("1pm-todo");
  buttonThirteen.value = todoThirteen
}

buttonFourteen.addEventListener("click", function(event) {
  event.preventDefault();

  var todoFourteen = document.getElementById("todoFourteen").value;

  localStorage.setItem("2pm-todo", todoFourteen);
  renderTodoFourteenText();


});

function renderTodoFourteenText() {
  var todoFourteen = localStorage.getItem("2pm-todo");
  buttonFourteen.value = todoFourteen
}

buttonFifteen.addEventListener("click", function(event) {
  event.preventDefault();

  var todoFifteen = document.getElementById("todoFifteen").value;

  localStorage.setItem("3pm-todo", todoFifteen);
  renderTodoFifteenText();


});

function renderTodoFifteenText() {
  var todoFifteen = localStorage.getItem("3pm-todo");
  buttonFifteen.value = todoFifteen
}

buttonSixteen.addEventListener("click", function(event) {
  event.preventDefault();

  var todoSixteen = document.getElementById("todoSixteen").value;

  localStorage.setItem("4pm-todo", todoSixteen);
  renderTodoSixteenText();


});

function renderTodoSixteenText() {
  var todoSixteen = localStorage.getItem("4pm-todo");
  buttonSixteen.value = todoSixteen
}

buttonSeventeen.addEventListener("click", function(event) {
  event.preventDefault();

  var todoSeventeen = document.getElementById("todoSeventeen").value;

  localStorage.setItem("5pm-todo", todoSeventeen);
  renderTodoSeventeenText();


});

function renderTodoSeventeenText() {
  var todoSeventeen = localStorage.getItem("5pm-todo");
  buttonSeventeen.value = todoSeventeen
}












// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  renderTodoNineText();
  renderTodoTenText();
  renderTodoElevenText();
  renderTodoNoonText();
  renderTodoThirteenText();
  renderTodoFourteenText();
  renderTodoFifteenText();
  renderTodoSixteenText();
  renderTodoSeventeenText();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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
});
