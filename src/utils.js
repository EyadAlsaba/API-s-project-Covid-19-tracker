// All credit's goes to HYF developers.

export function createElementWithClass(parent, element, className) {
    const newElement = document.createElement(element);
    parent.appendChild(newElement);
    newElement.classList.add(className);
    return newElement;
};

export const createDOMElementWithId = (parent, tag, options) => {
    const { id } = options || {};
  
    const element = document.createElement(tag);
    parent.appendChild(element);

    if (id != null) {
      element.id = id;
    }
  
    return element;
};

export const getDOMElement = (id) => {
    return document.getElementById(id);
};

export const clearDOMElement = (DOMElement) => {
  DOMElement.innerHTML = '';
};

export async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message)
    }
}