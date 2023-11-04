$(document).ready(function() {
    // Cargar la lista de tareas desde la cookie al cargar la página
    loadTasksFromCookie();

    // Manejar el evento click en el botón "New"
    $('#newTask').click(function() {
        var task = prompt("Nueva tarea:");
        if (task) {
            addTask(task);
        }
    });

    // Manejar el evento click en las tareas para eliminar
    $('#ft_list').on('click', '.task', function() {
        if (confirm("¿Quieres eliminar esta tarea?")) {
            $(this).remove();
            saveTasksToCookie();
        }
    });

    // Función para agregar una nueva tarea
    function addTask(task) {
        var newTask = $('<div class="task">' + task + '</div>');
        $('#ft_list').prepend(newTask);
        saveTasksToCookie();
    }

    // Función para guardar la lista de tareas en una cookie
    function saveTasksToCookie() {
        var tasks = [];
        $('#ft_list .task').each(function() {
            tasks.push($(this).text());
        });
        document.cookie = "tasks=" + JSON.stringify(tasks);
    }

    // Función para cargar la lista de tareas desde la cookie
    function loadTasksFromCookie() {
        var cookie = document.cookie;
        var startIndex = cookie.indexOf("tasks=");
        if (startIndex !== -1) {
            var endIndex = cookie.indexOf(";", startIndex);
            if (endIndex === -1) {
                endIndex = cookie.length;
            }
            var cookieValue = cookie.substring(startIndex + 6, endIndex);
            var tasks = JSON.parse(cookieValue);
            for (var i = 0; i < tasks.length; i++) {
                addTask(tasks[i]);
            }
        }
    }
});
