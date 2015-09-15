function sendCH() {
  var ajax = new XMLHttpRequest();
  ajax.open("put","api/v1/todos/"+arguments[0].name, true);
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send(JSON.stringify({isDone : arguments[0].checked}));
  ajax.addEventListener("load",success,false);
  function success() {
    var inputs = document.querySelectorAll('input'); 
    if(ajax.status < 300 && ajax.readyState === 4){
      [].forEach.call(inputs ,  function(v){
          v.parentNode.parentNode.className = v.checked ? "isDone" : "";
      });
    }
  }
}
