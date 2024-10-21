// todoMVC/components/TodoList.js

import { createElement, getState } from '../../framework/framework.js';
import { TodoItem } from './TodoItem.js';

export function TodoList() {
    const { todos, filter } = getState();

    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
    });

    const todoItems = filteredTodos.map(todo => TodoItem({ todo }));

    return createElement('ul', { class: 'todo-list' }, ...todoItems);
}
