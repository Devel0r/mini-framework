// framework/src/dom.js

export function createElement(tag, attrs = {}, ...children) {
    return {
        tag,
        attrs,
        children
    };
}

export function render(vNode, container) {
    const domElement = _createDomElement(vNode);
    if (domElement != null) {
        container.appendChild(domElement);
    }
}

function _createDomElement(vNode) {
    if (vNode == null || vNode === false) {
        return null;
    }

    if (typeof vNode === 'string' || typeof vNode === 'number') {
        return document.createTextNode(vNode);
    }

    const { tag, attrs, children } = vNode;
    const element = document.createElement(tag);

    // Установка атрибутов
    for (let [name, value] of Object.entries(attrs || {})) {
        if (name.startsWith('on') && typeof value === 'function') {
            // Обработка событий
            const event = name.substring(2).toLowerCase();
            element.addEventListener(event, value);
        } else if (name === 'style' && typeof value === 'string') {
            element.style.cssText = value;
        } else {
            element.setAttribute(name, value);
        }
    }

    // Рекурсивное создание и добавление дочерних элементов
    for (let child of children) {
        const domChild = _createDomElement(child);
        if (domChild != null) {
            element.appendChild(domChild);
        }
    }

    return element;
}
