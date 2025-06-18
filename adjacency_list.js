// An adjacency list for a directed graph looks like this:
const graph_directed = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D', 'E'],
    'D': ['E'],
    'E': []
};

// The edges are directed: A -> B, A -> C, B -> D, and so on.
// Each node is a key, and its array lists all the nodes it points to.

// An adjacency list for an undirected graph looks like this:
const graph_undirected = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D', 'E'],
    'D': ['B', 'C', 'E'],
    'E': ['C', 'D']
};

// In an undirected graph, edges are bidirectional.
// So a connection from A to B also implies B to A.
