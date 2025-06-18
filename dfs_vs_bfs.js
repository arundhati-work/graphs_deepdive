// DFS uses a stack.
// We can perform DFS either iteratively (with an explicit stack) or recursively (using the call stack).

// Iterative DFS
// We use push() and pop() on an array to simulate a stack.
// A stack is a LIFO (Last-In, First-Out) structure: we push and pop from the same end.

const dfs_iterative = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        const curr = stack.pop();
        console.log(curr);

        // Push neighbors to the stack
        for (let neighbor of graph[curr]) {
            stack.push(neighbor);
        }
    }
};

// For consistency, I process the node when popping (not when pushing).

// Recursive DFS
// We use the call stack implicitly as our stack here.

const dfs_recursive = (graph, source) => {
    if (!graph[source]) return;
    console.log(source);
    for (let neighbor of graph[source]) {
        dfs_recursive(graph, neighbor);
    }
};

// BFS uses a queue.
// We always need a queue to perform BFS, hence it can only be done iteratively.
// A queue is a FIFO (First-In, First-Out) structure: we enqueue from the back and dequeue from the front.
// To remove the first element of an array, we use shift(); to add to the back, we use push().

const bfs = (graph, source) => {
    const queue = [source];
    while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr);

        // Push neighbors to the queue
        for (let neighbor of graph[curr]) {
            queue.push(neighbor);
        }
    }
};

// For consistency, I process the node when dequeuing (not when enqueuing).
