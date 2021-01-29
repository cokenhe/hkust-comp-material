
import matplotlib.pyplot as plt
import numpy as np
import networkx as nx

data = np.loadtxt('facebook_combined.txt')  # load all the edges, which is saved in facebook_combined.txt file. 
                                            # For Windows, place the file under Documents\IPython Notebooks folder. 
data = data.astype(int)   # conver nodeid from float to int, like 1.0 to 1
print(data.shape)

edges_list = list(map(tuple, data))  # map(function, iterable): apply function to every item of iterable and return a list of results
print(edges_list[:10])

fbG = nx.Graph(edges_list)  # generate the facebook graph

# ========================================================================
# Please complete the codes which could answer the following questions
# ========================================================================

# Q1: print number of nodes and edges, and whether this network is connected or not

# Q2: print the id of node(or nodes) with maximum degree

# Q3: print the clustering coefficient of the previous maximum degree node and average clustering coefficient of the whole graph

# Q4: print number of triangles, check networkx.algorithms.cluster.triangles() function in networkx document

# Q5: print the shortest path from node 5 to 3000

# Q6: print the diameter and average shortest path length, it may take several minutes to complete, BE PATIENT!




