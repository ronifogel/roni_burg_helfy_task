function createTask({ id, title, description, completed = false, createdAt = new Date(), priority }) {
    return {
        id,
        title,
        description,
        completed,
        createdAt,
        priority

    };
}

module.exports = { createTask };