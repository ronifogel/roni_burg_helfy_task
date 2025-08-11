import React, { useState } from "react";

function TaskForm({ onSubmit, initialValues = {} }) {
    const [title, setTitle] = useState(initialValues.title || "");
    const [description, setDescription] = useState(initialValues.description || "");
    const [priority, setPriority] = useState(initialValues.priority || "Low");
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, priority });
    };

    return (
       <form onSubmit={handleSubmit} style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <br />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <br />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <br />
            <button type="submit">Save</button>
        </form>
    );

}

export default TaskForm;   
