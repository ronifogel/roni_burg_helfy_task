import React from "react";

function TaskFilter({ currentFilter, onChange }) {
    return (
        <div style={{ marginBottom: "15px" }}>
            <label>Filter: </label>
            <select
                value={currentFilter}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    );
}

export default TaskFilter;
