import networkx as nx
import numpy as np
from copy import deepcopy

# read data from input.txt

filename = 'input.txt'
f = open(filename, 'r')
node_num = int(next(f))
matrix = np.array([[int(x) for x in line.split()] for line in f])
f.close

# Problem 3a

G = nx.from_numpy_matrix(matrix)
ans = []

while len(ans[-1] if len(ans) > 0 else ans) != node_num-1:
    edge_btwns = nx.edge_betweenness_centrality(G)
    sorted_edge_btwns = {edge: btwns for edge, btwns in sorted(edge_btwns.items(), key=lambda edge: edge[1], reverse=True)}
    sorted_edge_btwns = list(sorted_edge_btwns.items())

    highest = sorted_edge_btwns[0][1]
    while len(sorted_edge_btwns) > 0 and sorted_edge_btwns[0][1] == highest:
        edge, _ = sorted_edge_btwns.pop(0)
        G.remove_edge(*edge)
    ans.append(list(nx.connected_components(G)))
    if len(sorted_edge_btwns) == 0:
        break
    
for i, result in enumerate(ans):
    ans[i] = list(map(lambda comm: sorted(comm), [list(comm) for comm in result]))
    
ans = list(map(lambda result: sorted(result, key=len, reverse=True), ans))
for result in ans:
    print(tuple([list(component) for component in result]))
    

# Problem 3b

modval_opt = -100000
G_opt = None

G = nx.from_numpy_matrix(matrix)
adj_matrix = nx.adj_matrix(G)

G_degree = np.sum(adj_matrix, axis=1)
k_ij = np.outer(G_degree, G_degree)

mod = adj_matrix - k_ij / (2.*len(G.edges()))
    
for comms in ans:    
    Z = np.zeros((len(comms), node_num), dtype=np.float32)
    for i, comm in enumerate(comms):
        np.put(Z[i], np.array(list(comm)), 1)
    
    modval_partition = np.trace(Z * mod * Z.T) / (2*len(G.edges()))
    
    print('%d clusters: modularity %.4f' % (len(comms), modval_partition))
    if modval_opt < modval_partition:
        modval_opt = modval_partition
        G_opt = [list(component) for component in comms]

print("optimal structure: ", tuple(G_opt))


