// todoMVC/components/App.js

import { createElement, getState } from '../../framework/framework.js';
import { TodoForm } from './TodoForm.js';
import { TodoList } from './TodoList.js';
import { Footer } from './Footer.js';

export function App() {
    const { todos } = getState();
    return createElement('section', { class: 'todoapp' },
        createElement('header', { class: 'header' },
            createElement('h1', {}, 'todos'),
            TodoForm()
        ),
        todos.length > 0 ? createElement('section', { class: 'main' },
            createElement('input', { id: 'toggle-all', class: 'toggle-all', type: 'checkbox' }),
            createElement('label', { for: 'toggle-all' }, 'Mark all as complete'),
            TodoList()
        ) : null,
        todos.length > 0 ? Footer() : null
    );
}
