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


// What if our graph  has a cycle? We have to account for that situation too

const hasPath_withCycleCheck = (graph, src, dst) => {
    const visited = new Set();
    return hasPath_dfs_cycle(graph, src, dst, visited);
}

// DFS 
const hasPath_dfs_cycle = (graph, src, dst, visited) => {
    if (src === dst) {
        return true;
    }
    visited.add(src);

    for (let neighbor of graph[src]) {
        if (!(visited.has(neighbor))){
            if (hasPath_dfs_cycle(graph, neighbor, dst, visited) === true) {
                return true;
            }
        }
        
    }
    return false;
};

// We can also do this with BFS
const hasPath_bfs_cycle = (graph, src, dst) => {
    const queue = [src];
    const visited = new Set();

    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr === dst) {
            return true;
        }
        for (let neighbor of graph[curr]) {
            if (!(visited.has(neighbor))){
                visited.add(neighbor);
                queue.push(neighbor);
            }
                
        }
    }
    return false;
};
