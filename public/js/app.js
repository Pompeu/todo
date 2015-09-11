function sendCH() {
  var ajax = new XMLHttpRequest();
  ajax.open("put","api/v1/todos/"+arguments[0].name, true);
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send(JSON.stringify({isDone : arguments[0].checked}));
}
