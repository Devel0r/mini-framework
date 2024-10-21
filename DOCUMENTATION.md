## Documentation for the mini-framework

## Introduction

This mini-framework is designed to simplify the development of single page applications (SPAs) without the use of third-party libraries or frameworks. It provides developers with basic tools for working with DOM, application state management, routing and event handling.

As a practical example of using the framework, the TodoMVC application is implemented, which demonstrates the capabilities of the framework on a real project.

### API framework

### 1. DOM abstraction

#### `createElement(tag, attrs, children, events)`

- **tag**: A string denoting the element's tag (e.g., `'div'`, `'span'`, `'input'`).
- **attrs**: An object with the element's attributes (e.g., `{ class: 'button' }`).
- **children**: An array of child elements (strings or virtual nodes).
- **events**: An object with event handlers (e.g., `{ click: handleClick }`).

#### `render(vNode, container)`.

- **vNode**: A virtual node created with `createElement`.
- **container**: The DOM element into which the generated node will be inserted.

### 2. State management

#### `getState()`.

Returns the current state of the application.

#### `setState(newState)`

Updates the state and notifies subscribers of changes.

#### ``subscribe(listener)`

Adds a listener function to be called when the state is updated.

### 3. Routing

#### `configRouter(config)`

- **config.routes**: An object where the keys are paths and the values are functions called when the corresponding path is traversed.
- **config.root**: The root path of the application.

#### `navigate(path, pushState)`

- **path**: Path to navigate.
- **pushState**: A logical value that determines whether to add an entry to the browser history.

## Usage Examples

### Creating an element

```
const element = createElement('div', { class: 'container' },
  createElement('h1', {}, 'Title'),
  createElement('p', {}, 'It is example paragraph')
);
```

### Embedding of elements

``` 
const list = createElement('ul', {},
  createElement('li', {}, 'Elem 1'),
  createElement('li', {}, 'Elem 2'),
  createElement('li', {}, 'Elem 3')
);
```

### Adding attributes and events

``` 
function handleClick() {
  alert('Button press!');
}

const button = createElement('button', {
  class: 'btn',
  onClick: handleClick
}, 'Enter me');
```

### Working with the state

``` 
setState({ count: 0 });

function increment() {
  const { count } = getState();
  setState({ count: count + 1 });
}

subscribe((state) => {
  console.log('Текущее значение count:', state.count);
});
```

### Using routing 

```
configRouter({
  routes: {
    '/': showHomePage,
    '/about': showAboutPage
  },
  root: '/app'
});

function showHomePage() {
  // Logic view main page
}

function showAboutPage() {
  // Logic view about us
}

navigate('/about');
```

## Desription components TodoMVC 

### App.js 

The main component of the application that integrates all other components and forms the main structure.

Main functions:

    Displays the application header.
    Includes a form for adding new tasks (TodoForm).
    Displays a list of tasks (TodoList).
    Includes a footer with filters and task counter (Footer).

### TodoForm.js

A form component for adding new tasks.

Main functions:

    Processes user input.
    Adds a new task to the global state when the form is submitted.
    Resets the input field after adding a task.

### TodoList.js

A component that displays a list of tasks according to the selected filter.

Main functions:

    Gets the list of tasks from the global state.
    Filters tasks based on the current filter (all, active, completed).
    Displays each task using the TodoItem component.

### TodoItem.js

A component representing an individual task with all necessary actions.

Main functions:

    Displays the text of the task.
    Allows you to mark a task as completed or uncompleted.
    Provides the ability to edit the task when double-clicked.
    Allows you to delete a task.

### Footer.js 

A component that displays the application footer with information about the number of remaining tasks, filters and a button to clear completed tasks.

Main functions:

    Displays the number of remaining uncompleted tasks.
    Provides filters to display all, active or completed tasks.
    Allows you to delete all completed tasks with one click.


# Conclusion

This mini-framework provides the basic tools to develop single-page applications without the need for third-party libraries. It demonstrates how key concepts such as virtual DOM, state management, routing and event handling can be implemented from scratch.

The TodoMVC application serves as an example of how to use the framework in practice. It implements all the basic functions of a classic Todo application and can be extended or modified according to your needs.