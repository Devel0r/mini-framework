// framework/src/router.js

let routes = {};
let root = '/';

export function configRouter(config) {
    routes = config.routes || {};
    root = config.root || '/';

    window.addEventListener('popstate', () => {
        navigate(window.location.pathname, false);
    });
}


export function navigate(path, pushState = true) {
    if (pushState) {
        history.pushState(null, null, root + path);
    }

    // Удаляем root из path, если он присутствует
    let routePath = path;
    if (root !== '/' && path.startsWith(root)) {
        routePath = path.slice(root.length);
    }

    const routeHandler = routes[routePath];
    if (routeHandler) {
        routeHandler();
    } else {
        console.error('Route not found:', routePath);
    }
}

export function linkHandler(event) {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    navigate(path);
}
