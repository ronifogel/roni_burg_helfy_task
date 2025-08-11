import "../styels/TaskItem.css";

function TaskItem ({task, handleEditClick, handleDeleteClick,handleToggleComplete }) {

    
    return (
             <div className="task-item" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
                type="checkbox"
                checked={task.completed || false}
                onChange={() => handleToggleComplete(task)}
            />

            <div style={{ flex: 1 }}>
                <p style={{ 
                    textDecoration: task.completed ? "line-through" : "none",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                }}>
                    <span
                        style={{
                            display: "inline-block",
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor:
                                task.priority === "high"
                                    ? "#e74c3c"
                                    : task.priority === "medium" || task.priority === "medium"
                                    ? "#f39c12"
                                    : "#27ae60",
                        }}
                        title={task.priority}
                    ></span>
                    {task.title} <span style={{fontSize: "0.9em", color: "#888"}}>({task.priority})</span>
                </p>
                <p style={{ margin: 0 }}>{task.description}</p>
            </div>

            <button onClick={() => handleEditClick(task)}>Edit</button>
            <button
                onClick={() => handleDeleteClick(task)}
                style={{ marginLeft: "10px", color: "white", background: "#e74c3c" }}
            >
                Delete
            </button>
        </div>
    )
}

export default TaskItem;   