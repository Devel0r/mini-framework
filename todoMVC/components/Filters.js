// todoMVC/components/Filters.js

import { createElement, getState, navigate } from '../../framework/framework.js';

export function Filters() {
    const { filter } = getState();

    function createFilterLink(name, path) {
        return createElement('a', {
            href: path,
            class: filter === name ? 'active' : '',
            onClick: linkHandler
        }, name.charAt(0).toUpperCase() + name.slice(1));
    }

    function linkHandler(event) {
        event.preventDefault();
        navigate(event.target.getAttribute('href'));
    }

    return createElement('div', { class: 'filters' },
        createFilterLink('all', '/'),
        createFilterLink('active', '/active'),
        createFilterLink('completed', '/completed')
    );
}
