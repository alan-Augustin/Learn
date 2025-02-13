let task_input = document.getElementById('textInput');
let tasks = document.getElementById('tasks');



function add() {
    let taskText = task_input.value;
    if(taskText !== ""){
        const li = document.createElement('li');
        li.textContent = taskText;
        const delBtn = document.createElement('button');
        delBtn.textContent= 'DELETE';
        delBtn.addEventListener('click',del);
        li.appendChild(delBtn);
        tasks.appendChild(li);
        task_input.value = '';
      }

}

function del(event) {
    const task = event.target.parentElement;
    task.remove();
}