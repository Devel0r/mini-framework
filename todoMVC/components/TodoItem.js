// todoMVC/components/TodoItem.js

import { createElement, getState, setState } from '../../framework/framework.js';

export function TodoItem({ todo }) {
    let editing = false;
    let editText = todo.text;

    function toggleTodo() {
        const { todos } = getState();
        const updatedTodos = todos.map(t => {
            if (t.id === todo.id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });
        setState({ todos: updatedTodos });
    }

    function deleteTodo() {
        const { todos } = getState();
        const updatedTodos = todos.filter(t => t.id !== todo.id);
        setState({ todos: updatedTodos });
    }

    function startEditing() {
        editing = true;
        setState({});
    }

    function handleEditInput(event) {
        editText = event.target.value;
    }

    function handleEditSubmit(event) {
        if (event.key === 'Enter') {
            finishEditing();
        } else if (event.key === 'Escape') {
            cancelEditing();
        }
    }

    function finishEditing() {
        editing = false;
        const { todos } = getState();
        if (editText.trim() === '') {
            deleteTodo();
        } else {
            const updatedTodos = todos.map(t => {
                if (t.id === todo.id) {
                    return { ...t, text: editText };
                }
                return t;
            });
            setState({ todos: updatedTodos });
        }
    }

    function cancelEditing() {
        editing = false;
        editText = todo.text;
        setState({});
    }

    return createElement('li', {
        class: `${todo.completed ? 'completed' : ''} ${editing ? 'editing' : ''}`
    },
        createElement('div', { class: 'view' },
            createElement('input', {
                class: 'toggle',
                type: 'checkbox',
                checked: todo.completed,
                onChange: toggleTodo
            }),
            createElement('label', { onDblClick: startEditing }, todo.text),
            createElement('button', { class: 'destroy', onClick: deleteTodo })
        ),
        editing ? createElement('input', {
            class: 'edit',
            value: editText,
            onInput: handleEditInput,
            onKeyDown: handleEditSubmit,
            onBlur: finishEditing
        }) : null
    );
}
