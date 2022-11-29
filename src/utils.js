export function creatrTodos() {
    const todos = []
    for (let i = 0; i < 100; i++) {
        todos.push({
            id: i, text: `Todo ${i + 1}`, completed: Math.random() > 0.5
        })
    }

    return todos
}