// todoMVC/app.js

import { render, subscribe, setState, configRouter, navigate } from '../framework/framework.js';
import { App } from './components/App.js';

// Инициализация состояния приложения
setState({
    todos: [],
    filter: 'all' // 'all', 'active', 'completed'
});

// Конфигурация маршрутизатора
// Конфигурация маршрутизатора
configRouter({
    routes: {
        '/': () => setState({ filter: 'all' }),
        '/active': () => setState({ filter: 'active' }),
        '/completed': () => setState({ filter: 'completed' })
    },
    root: '/todoMVC' // Установите root в '/todoMVC'
});


// Функция для рендеринга приложения
function renderApp() {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '';
    render(App(), appContainer);
}

// Подписка на изменения состояния
subscribe(renderApp);

// Первоначальный рендеринг приложения
navigate(window.location.pathname, false);
