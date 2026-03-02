function createElement(elementType, textContent, className)
{
    const elementDOM = document.createElement(elementType);
    if (textContent !== null) elementDOM.textContent = textContent;
    if (className !== null) elementDOM.classList.add(className)

    return elementDOM;
}

function createElement4(elementType, textContent, className, idName)
{
    const elementDOM = document.createElement(elementType);
    if (textContent !== null) elementDOM.textContent = textContent;
    if (className !== null) elementDOM.classList.add(className)
    if (idName !== null) elementDOM.setAttribute("id", idName);

    return elementDOM;
}

function addChildren(parent, ...childrenList)
{
    for (const child of childrenList)
    {
        parent.appendChild(child);
    }
}

export {createElement, createElement4, addChildren};