// For the hasPath problem, we will be given a graph, a source node, and a destination node. 
// The problem is to check whether a path exists between the source and destination node.

// We can do this with both DFS and BFS.

// DFS
const hasPath_dfs = (graph, src, dst) => {
    if (src === dst) {
        return true;
    }
    for (let neighbor of graph[src]) {
        if (hasPath_dfs(graph, neighbor, dst) === true) {
            return true;
        }
    }
    return false;
};

// BFS
const hasPath_bfs = (graph, src, dst) => {
    const queue = [src];

    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr === dst) {
            return true;
        }
        for (let neighbor of graph[curr]) {
            queue.push(neighbor);
        }
    }
    return false;
};
