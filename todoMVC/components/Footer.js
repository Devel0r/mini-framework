// todoMVC/components/Footer.js

import { createElement, getState, setState, navigate } from '../../framework/framework.js';

export function Footer() {
    const { todos, filter } = getState();
    const remaining = todos.filter(todo => !todo.completed).length;
    const completed = todos.length - remaining;

    function clearCompleted() {
        const newTodos = todos.filter(todo => !todo.completed);
        setState({ todos: newTodos });
    }

    function createFilterLink(name, path) {
        return createElement('a', {
            href: path,
            class: filter === name ? 'selected' : '',
            onClick: linkHandler
        }, name.charAt(0).toUpperCase() + name.slice(1));
    }

    function linkHandler(event) {
        event.preventDefault();
        const path = event.target.getAttribute('href');
        navigate(path);
    }

    return createElement('footer', { class: 'footer' },
        createElement('span', { class: 'todo-count' },
            createElement('strong', {}, remaining),
            ` item${remaining !== 1 ? 's' : ''} left`
        ),
        createElement('ul', { class: 'filters' },
            createElement('li', {}, createFilterLink('all', '/')),
            createElement('li', {}, createFilterLink('active', '/active')),
            createElement('li', {}, createFilterLink('completed', '/completed'))
        ),
        completed > 0 ? createElement('button', { class: 'clear-completed', onClick: clearCompleted }, 'Clear completed') : null
    );
}
