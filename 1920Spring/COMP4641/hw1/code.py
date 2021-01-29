# COMP4641 hw1 problem 3

import numpy as np
import pdb

def BFS(matrix, s, e): 
    if s == e:
        return ''

    edges = {}
    for i, row in enumerate(matrix):
        edges[i] = []
        for j, col in enumerate(row):
            if col == 0:
                continue
            edges[i].append(j)

    visited = [False] * (len(edges)) 
    queue = [] 
    queue.append(('', s)) 
    visited[s] = True

    while queue: 
        path, s = queue.pop(0) 
        for i in edges[s]: 
            if i == e:
                return path + str(s) + str(e)
            if visited[i] == False: 
                queue.append((path + str(s), i)) 
                visited[i] = True


def get_shortest_path(adj_matrix):
    row, col = adj_matrix.shape
    shortest_path = np.empty_like(adj_matrix, dtype=object)
    for r in range(row):
        for c in range(col):
            shortest_path[r][c] = BFS(adj_matrix, r, c)
    return shortest_path


# def girvan_newman():
filename = 'input.txt'
f = open(filename, 'r')
node_num = int(next(f))
matrix = np.array([[int(x) for x in line.split()] for line in f])
f.close

shortest_path = get_shortest_path(matrix)

def filter_edges(object):
    path = list(object)
    return len(path) == 2 and path[0] < path[1]
 
edges = filter(filter_edges, shortest_path.flatten())
edges = map(lambda edge: (int(list(edge)[0]), int(list(edge)[1])), edges)
betweenness = {edge: 0 for edge in edges}

print(shortest_path)
print(betweenness)