document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value

    const task = {
        title,
        description,
        date       
    };

    if(localStorage.getItem('tasks') === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    getTasks()
    document.getElementById('formTask').reset();
    e.preventDefault()
}

function deleteTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(i = 0; i < tasks.length; i++){
        if (tasks[i].title === title){
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    // limpiando en caso de que ya existan datos
    tasksView.innerHTML = '';
    // empezar a recorrer los datos de getTasks localstorage
    for(let i = 0; i < tasks.length; i++){
        let title = tasks[i].title
        let description = tasks[i].description
        let date = tasks[i].date
        tasksView.innerHTML += `<div class="card mb-4">
        <div class="card-body">
        <p>Tarea: ${title}</p>
        <p>Descripcion: ${description}</p>
        <p>Fecha: ${date}</p>
        <a class="btn btn-danger" onclick="deleteTask('${title}')">ELIMINAR TAREA</a>
        </div>
        </div>`
    }

}




getTasks();