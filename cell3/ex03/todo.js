// script.js

// Función para cargar la lista de tareas desde una cookie
function loadTasks() {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)tasks\s*=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieValue) {
        const tasks = JSON.parse(decodeURIComponent(cookieValue));
        tasks.forEach(task => {
            addTask(task);
        });
    }
}

// Función para guardar la lista de tareas en una cookie
function saveTasks() {
    const tasks = [...document.querySelectorAll('#ft_list div')].map(task => task.textContent);
    document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}`;
}

// Función para agregar una nueva tarea
function addTask(text) {
    const ftList = document.getElementById('ft_list');
    const task = document.createElement('div');
    task.textContent = text;
    task.addEventListener('click', () => {
        if (confirm('¿Quieres eliminar esta tarea?')) {
            ftList.removeChild(task);
            saveTasks();
        }
    });
    ftList.insertBefore(task, ftList.firstChild);
    saveTasks();
}

// Función para manejar el botón "New"
document.getElementById('botonNuevasTareas').addEventListener('click', () => {
    const taskText = prompt('Nueva tarea:');
    if (taskText !== null && taskText.trim() !== '') {
        addTask(taskText);
    }
});

// Cargar las tareas al cargar la página
loadTasks();
