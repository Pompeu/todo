(function() {
  'use strict';

  const checkboxs = Array.from(document.querySelectorAll('input'));

  checkboxs.forEach(i => {
    i.onclick = () => {
      sendCH(i);
    };
  });

  function sendCH(input) {
    const ajax = new XMLHttpRequest();
    ajax.open('put','api/v1/todos/'+input.name, true);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(JSON.stringify({isDone : input.checked}));

    ajax.onreadystatechange = ev => {
      const action = ev.srcElement;
      if (action.readyState === 4 && action.status === 202) {
        let trClass = input.parentNode.parentNode.parentNode;
        input.checked ? trClass.className = 'isDone' : trClass.className = ''; 
      }
    };
  }
}());
