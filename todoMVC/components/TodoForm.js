// todoMVC/components/TodoForm.js

import { createElement, getState, setState } from '../../framework/framework.js';

export function TodoForm() {
    let inputText = '';

    function handleInput(event) {
        inputText = event.target.value;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputText.trim() === '') return;

        const { todos } = getState();
        const newTodo = {
            id: Date.now(),
            text: inputText.trim(),
            completed: false
        };

        setState({
            todos: [...todos, newTodo]
        });

        inputText = '';
        event.target.reset();
    }

    return createElement('form', { class: 'todo-form', onSubmit: handleSubmit },
        createElement('input', {
            type: 'text',
            placeholder: 'Что нужно сделать?',
            onInput: handleInput
        }),
        createElement('button', { type: 'submit' }, 'Добавить')
    );
}
