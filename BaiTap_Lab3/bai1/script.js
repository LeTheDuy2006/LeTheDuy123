$(document).ready(function() {
    $('#addButton').click(function() {
        const taskText = $('#newTask').val().trim();
        if (taskText) {
            addTask(taskText);
            $('#newTask').val('');
        }
    });

    function addTask(taskText) {
        const taskItem = $('<li>').text(taskText);
        const deleteButton = $('<button>').text('Xóa');

        deleteButton.click(function() {
            taskItem.remove();
        });

        taskItem.append(deleteButton);

        taskItem.click(function() {
            $(this).toggleClass('completed');
        });

        $('#taskList').append(taskItem);
    }
});