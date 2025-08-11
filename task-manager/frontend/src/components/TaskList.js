
import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import "../styels/TaskList.css";
function TaskList() {
    const [TaskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTask, setSelectedTask] = useState(null);
    const [formMode, setFormMode] = useState(null);
    const [filter, setFilter] = useState("all");

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/tasks");
            const tasks = await response.json();
            setTaskList(tasks);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleEditClick = (task) => {
        setSelectedTask(task);
        setFormMode("edit");
    };

    const handleAddClick = () => {
        setSelectedTask(null);
        setFormMode("add");
    };
    const handleDeleteClick = async (task) => {
        if (!task?.id) {
            return;
        }
        try {
            await fetch(`http://localhost:4000/api/tasks/${task.id}`, {
                method: "DELETE",
            });
            fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };
    const handleFormSubmit = async (data) => {
        if (formMode === "add") {
            await fetch("http://localhost:4000/api/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
        } else if (formMode === "edit" && selectedTask?.id) {
            await fetch(`http://localhost:4000/api/tasks/${selectedTask.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
        }
        setFormMode(null);
        fetchTasks();
    };

    const handleToggleComplete = async (task) => {
        try {
            await fetch(`http://localhost:4000/api/tasks/${task.id}/toggle`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" }
            });
            fetchTasks();
        } catch (error) {
            console.error("Error toggling task:", error);
        }
    };
    const filteredTasks = TaskList.filter(task => {
        if (filter === "completed") return task.completed === true;
        if (filter === "pending") return task.completed === false;
        return true;
    });
    return (
        <div className="task-list">
            <TaskFilter currentFilter={filter} onChange={setFilter} />

            {loading && <p>Loading tasks...</p>}
            {!loading && filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                    <TaskItem
                        key={task.id || index}
                        task={task}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                        handleToggleComplete={handleToggleComplete}
                    />
                ))
            ) : (
                <div>No tasks found.</div>
            )}

            <button onClick={handleAddClick} style={{ marginTop: "20px" }}>Add Task</button>

            {formMode && (
                <TaskForm
                    mode={formMode}
                    initialValues={selectedTask || {}}
                    onSubmit={handleFormSubmit}
                    onCancel={() => setFormMode(null)}
                />
            )}
        </div>

    );
}

export default TaskList;   