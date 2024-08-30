# Diffing Process

Diffing is a `two-pass`, `immutable virtual dom` runtime with sepration at the `node, props and children level`

Points to Keep In Mind

-   This Step Happens in the User Device
-   This Step Calculates the UI Change, given current and new UI

## Two Pass Implementation

-   First Pass: Checks Changes at the Node Level

    -   If the nodes are keyed the diffing algorithm can quickly match and reorder elements.

-   Second Pass: It examines changes in the properties (props) and children of the nodes that were flagged in First Pass

    -   The algorithm checks for changes in the properties of each node (e.g., attributes like className, id, etc.).

## Optimization Techniques

-   **Fast Path for Keyed Nodes**: When nodes have keys, Million.js can directly map old nodes to new nodes based on these keys, bypassing unnecessary comparisons.

-   **Compiler Flags**: These flags help the diffing process by signaling specific optimizations that can be applied, like avoiding certain comparisons when they are unnecessary.

-   **Delta Calculations**: This technique allows Million.js to calculate the minimal set of changes needed, reducing the number of operations required to update the DOM.

[Next Slide: The Patch Step](./patch.md)
