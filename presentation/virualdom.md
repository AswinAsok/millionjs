# What is a Virtual DOM

-   **Memory representation**: The Virtual DOM is a lightweight copy of the actual DOM, kept in memory.

-   **Efficient updates**: It allows for faster manipulation of page content without directly touching the real DOM.

-   **Diffing mechanism**: Changes are first made to the Virtual DOM, then compared (diffed) with the real DOM.

-   **Batch updates**: Multiple changes can be batched together before updating the actual DOM.

-   **Performance boost**: By minimizing direct DOM manipulation, it significantly improves rendering performance, especially for complex or frequently updating interfaces.

## Reconcilation

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

Reconciliation is the algorithm behind what is popularly understood as the "Virtual DOM."

A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory.

This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated.

The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

[Next Topic: The Compiler Agumentation Process](./complile.md)
