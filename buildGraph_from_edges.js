// Suppose you're given a list of edges for an undirected graph like this:
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

// The way to build a graph out of this would be:

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges){
        const [a,b] = edge; // destructuring
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}