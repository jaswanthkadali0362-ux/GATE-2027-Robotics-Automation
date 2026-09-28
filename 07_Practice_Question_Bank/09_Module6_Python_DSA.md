# MODULE 6: PYTHON PROGRAMMING & DATA STRUCTURES
## 100 Practice Questions — GATE RA 2027

---

### SECTION A: PYTHON SYNTAX & FUNDAMENTALS — 30 Questions

**Q6.1 [MCQ - 1M]** What does the following output?
```python
x = [1, 2, 3, 4, 5]
print(x[1:4])
```
- (A) [1, 2, 3, 4]
- (B) [2, 3, 4]
- (C) [1, 2, 3]
- (D) [2, 3, 4, 5]
> **Answer: (B).** Slice x[1:4] returns elements at indices 1,2,3 → [2,3,4].

**Q6.2 [NAT - 2M]** What is the output of `len([1, [2, 3], 4])`?
> **Answer:** 3 (the list has 3 top-level elements: 1, [2,3], 4).

**Q6.3 [MCQ - 2M]** Python dictionary `d = {'a':1, 'b':2, 'c':3}`. Output of `list(d.keys())`?
- (A) [1, 2, 3]
- (B) ['a', 'b', 'c']
- (C) [('a',1), ('b',2), ('c',3)]
- (D) ['a':1, 'b':2]
> **Answer: (B).**

**Q6.4 [NAT - 2M]** Output of:
```python
x = [i**2 for i in range(5)]
print(x)
```
> **Answer:** [0, 1, 4, 9, 16].

**Q6.5 [MCQ - 1M]** Python is:
- (A) Statically typed, compiled language
- (B) Dynamically typed, interpreted language
- (C) Statically typed, interpreted language
- (D) Dynamically typed, compiled language
> **Answer: (B).**

**Q6.6 [NAT - 2M]** Output of:
```python
a = (1, 2, 3)
a[1] = 5
print(a)
```
> **Answer:** TypeError — tuples are immutable; cannot assign to indices.

**Q6.7 [MCQ - 2M]** Which Python data structure is ordered, mutable, and allows duplicates?
- (A) Set
- (B) Tuple
- (C) List
- (D) Dictionary
> **Answer: (C).**

**Q6.8 [NAT - 2M]** `s = {1, 2, 2, 3, 3, 3}`. What is `len(s)`?
> **Answer:** 3 (sets store unique elements only: {1,2,3}).

**Q6.9 [MCQ - 1M]** Lambda function: `f = lambda x, y: x**2 + y`. What is `f(3, 4)`?
- (A) 9
- (B) 13
- (C) 16
- (D) 7
> **Answer: (B).** f(3,4) = 3²+4 = 9+4 = 13.

**Q6.10 [NAT - 2M]** Output of:
```python
def f(n, acc=0):
    if n == 0:
        return acc
    return f(n-1, acc+n)
print(f(5))
```
> **Answer:** 15 (1+2+3+4+5=15, computed recursively).

**Q6.11 [MCQ - 2M]** `sorted([3,1,4,1,5,9,2,6], reverse=True)[:3]` gives:
- (A) [1, 1, 2]
- (B) [3, 4, 5]
- (C) [9, 6, 5]
- (D) [9, 5, 4]
> **Answer: (C).** Sorted descending: [9,6,5,4,3,2,1,1]. First 3: [9,6,5].

**Q6.12 [NAT - 2M]** `d = {}; d['x'] = 10; d['y'] = 20; print(d.get('z', 0))`:
> **Answer:** 0 (key 'z' not in dict, default=0 returned by .get()).

**Q6.13 [MCQ - 1M]** The `zip` function in Python:
- (A) Compresses files
- (B) Creates tuples from corresponding elements of multiple iterables
- (C) Sorts lists
- (D) Flattens nested lists
> **Answer: (B).**

**Q6.14 [NAT - 2M]** `list(zip([1,2,3],[4,5,6]))`:
> **Answer:** [(1,4),(2,5),(3,6)].

**Q6.15 [MCQ - 2M]** `map(lambda x: x*2, [1,2,3,4])` returns:
- (A) [1,2,3,4]
- (B) Iterator of [2,4,6,8]
- (C) [2,4,6,8] (direct list)
- (D) Sum of doubled values
> **Answer: (B).** map() returns a map object (iterator), wrapping in list() gives [2,4,6,8].

**Q6.16 [NAT - 2M]** `filter(lambda x: x%2==0, range(10))` gives (as list):
> **Answer:** [0,2,4,6,8].

**Q6.17 [MCQ - 1M]** Python `//` operator performs:
- (A) Regular division
- (B) Integer (floor) division
- (C) Modulo
- (D) Exponentiation
> **Answer: (B).** 7//2 = 3.

**Q6.18 [NAT - 2M]** Output of `2**10`:
> **Answer:** 1024.

**Q6.19 [MCQ - 2M]** `try/except/finally` in Python: `finally` block runs:
- (A) Only if exception occurs
- (B) Only if no exception occurs
- (C) Always (whether or not exception occurs)
- (D) Never (it is optional and skipped)
> **Answer: (C).**

**Q6.20 [NAT - 2M]** `[x for x in range(20) if x % 3 == 0 and x % 5 == 0]`:
> **Answer:** [0, 15] (multiples of both 3 and 5 = multiples of 15, in range 0-19: 0,15).

**Q6.21 [MCQ - 1M]** `isinstance(3.14, (int, float))`:
- (A) False
- (B) True
- (C) TypeError
- (D) None
> **Answer: (B).** 3.14 is a float, which is in the tuple (int, float).

**Q6.22 [NAT - 2M]** Output of: `print('Robot' * 3)`:
> **Answer:** RobotRobotRobot.

**Q6.23 [MCQ - 2M]** Python `*args` in a function definition:
- (A) Accepts exactly 3 arguments
- (B) Accepts variable number of positional arguments (as a tuple)
- (C) Accepts keyword arguments only
- (D) Makes all arguments optional
> **Answer: (B).**

**Q6.24 [NAT - 2M]** Output:
```python
def outer():
    x = 10
    def inner():
        return x + 5
    return inner()
print(outer())
```
> **Answer:** 15 (closure: inner() accesses x=10 from outer scope).

**Q6.25 [MCQ - 1M]** Python `global` keyword:
- (A) Creates a new variable
- (B) Declares that a name inside a function refers to a global variable
- (C) Makes a function global
- (D) Imports a module globally
> **Answer: (B).**

**Q6.26 [NAT - 2M]** `list(range(1, 10, 2))`:
> **Answer:** [1,3,5,7,9].

**Q6.27 [MCQ - 2M]** Which is the fastest data structure for O(1) average lookup by key?
- (A) List
- (B) Tuple
- (C) Dictionary (hash map)
- (D) Set (for key existence only)
> **Answer: (C) and (D) both correct for O(1) lookup; but for key-value retrieval: (C) Dictionary.

**Q6.28 [NAT - 2M]** `d = {'a':1,'b':2,'c':3}; del d['b']; print(len(d))`:
> **Answer:** 2 (d = {'a':1,'c':3} after deletion).

**Q6.29 [MCQ - 1M]** Negative indexing in Python: `x = [10,20,30,40,50]`. `x[-2]`:
- (A) 20
- (B) 30
- (C) 40
- (D) 50
> **Answer: (C).** x[-2] = 40 (second from last).

**Q6.30 [NAT - 2M]** `'hello world'.split()`:
> **Answer:** ['hello', 'world'] (splits on whitespace by default).

---

### SECTION B: TIME COMPLEXITY & RECURSION — 25 Questions

**Q6.31 [MCQ - 1M]** Time complexity of linear search in unsorted list of n elements:
- (A) O(1)
- (B) O(log n)
- (C) O(n)
- (D) O(n²)
> **Answer: (C).**

**Q6.32 [NAT - 2M]** Time complexity of binary search on sorted array:
> **Answer:** O(log n).

**Q6.33 [MCQ - 2M]** Bubble sort worst-case time complexity:
- (A) O(n log n)
- (B) O(n)
- (C) O(n²)
- (D) O(1)
> **Answer: (C).**

**Q6.34 [NAT - 2M]** What is `fun(4)` for:
```python
def fun(n):
    if n <= 0: return 0
    return n + fun(n-1)
```
> **Answer:** 4+3+2+1+0 = 10.

**Q6.35 [MCQ - 1M]** Merge sort time complexity (all cases):
- (A) O(n²)
- (B) O(n log n)
- (C) O(n)
- (D) O(log n)
> **Answer: (B).**

**Q6.36 [NAT - 2M]** Fibonacci recursive function calls for fib(5) (naive recursion): how many total calls?
> **Answer:** fib(5)=fib(4)+fib(3)=...; total calls = 15 (for n=5, T(n)=T(n-1)+T(n-2)+1, exponential growth).

**Q6.37 [MCQ - 2M]** Quick sort average time complexity:
- (A) O(n²)
- (B) O(n log n)
- (C) O(n)
- (D) O(log n)
> **Answer: (B).** Average O(n log n), worst O(n²).

**Q6.38 [NAT - 2M]** Output:
```python
def f(n):
    if n <= 1: return 1
    if n % 2 == 0: return f(n//2) + n
    else: return f(n-1) * 2
print(f(6))
```
> **Answer:** f(6): n=6 even → f(3)+6. f(3): n=3 odd → f(2)*2. f(2): even → f(1)+2=1+2=3. f(3)=3*2=6. f(6)=6+6=12.

**Q6.39 [MCQ - 1M]** Space complexity of recursive factorial function for n:
- (A) O(1)
- (B) O(n) (due to call stack)
- (C) O(n²)
- (D) O(log n)
> **Answer: (B).**

**Q6.40 [NAT - 2M]** Tail recursion can be optimized to avoid stack overflow. What does Python NOT do by default?
> **Answer:** Python does NOT perform Tail Call Optimization (TCO) — each recursive call creates a new stack frame regardless.

**Q6.41 [MCQ - 2M]** Tower of Hanoi with n=3 disks: minimum moves required?
- (A) 6
- (B) 7
- (C) 8
- (D) 9
> **Answer: (B).** Moves = 2ⁿ - 1 = 2³-1 = 7.

**Q6.42 [NAT - 2M]** For n=10 disks in Tower of Hanoi: minimum moves?
> **Answer:** 2¹⁰-1 = 1023 moves.

**Q6.43 [MCQ - 1M]** Dynamic programming (memoization) improves recursive Fibonacci from O(2ⁿ) to:
- (A) O(n²)
- (B) O(n log n)
- (C) O(n)
- (D) O(1)
> **Answer: (C).**

**Q6.44 [NAT - 2M]** Insertion sort: best-case (nearly sorted) time complexity?
> **Answer:** O(n) — when list is already sorted, only n-1 comparisons needed.

**Q6.45 [MCQ - 2M]** Selection sort worst-case comparisons for n=5 elements:
- (A) 5
- (B) 10
- (C) 20
- (D) n(n-1)/2 = 10
> **Answer: (D).** n(n-1)/2 = 5×4/2 = 10 comparisons.

**Q6.46 [NAT - 2M]** Output:
```python
nums = [1,2,3,4,5]
result = list(filter(lambda x: x > 2, map(lambda x: x*2, nums)))
print(result)
```
> **Answer:** map doubles: [2,4,6,8,10]. filter>2: [4,6,8,10].

**Q6.47 [MCQ - 1M]** `functools.reduce(lambda a,b: a*b, [1,2,3,4,5])`:
- (A) 15
- (B) 120
- (C) [1,2,6,24,120]
- (D) 5!
> **Answer: (B).** 1×2×3×4×5 = 120.

**Q6.48 [NAT - 2M]** Time complexity to check if a number is prime:
> **Answer:** O(√n) (trial division up to square root of n).

**Q6.49 [MCQ - 2M]** The call stack for `factorial(5)` contains how many frames at deepest point?
- (A) 1
- (B) 5
- (C) 6 (including factorial(0) or base case)
- (D) 25
> **Answer: (C).** Frames: factorial(5)→factorial(4)→...→factorial(0) = 6 frames.

**Q6.50 [NAT - 2M]** Binary search: array [2,5,8,12,16,23,38,56,72,91], search for 23. How many comparisons (mid-point search)?
> **Answer:** 1st: mid=index4=16 (23>16)→right half. 2nd: mid=index7=56 (23<56)→left half. 3rd: mid=index5=23 FOUND. **3 comparisons**.

---

### SECTION C: STACKS, QUEUES & LINKED LISTS — 20 Questions

**Q6.51 [MCQ - 1M]** Stack data structure follows:
- (A) FIFO (First In First Out)
- (B) LIFO (Last In First Out)
- (C) Random access
- (D) Priority order
> **Answer: (B).**

**Q6.52 [NAT - 2M]** Stack operations: push(1), push(2), push(3), pop(), push(4), pop(). What's on top of stack?
> **Answer:** Stack after operations: push(1)→[1], push(2)→[1,2], push(3)→[1,2,3], pop→[1,2] (top=2), push(4)→[1,2,4], pop→[1,2]. Top = **2**.

**Q6.53 [MCQ - 2M]** Queue data structure is used in:
- (A) Function call stack
- (B) BFS (Breadth-First Search) traversal
- (C) DFS traversal
- (D) Expression evaluation
> **Answer: (B).**

**Q6.54 [NAT - 2M]** Queue: enqueue(A), enqueue(B), enqueue(C), dequeue(), enqueue(D), dequeue(). Front element?
> **Answer:** Queue: enqueue A→[A], B→[A,B], C→[A,B,C], dequeue→[B,C] (A removed), enqueue D→[B,C,D], dequeue→[C,D]. Front = **C**.

**Q6.55 [MCQ - 1M]** Python implementation of a stack using list:
- (A) push = list.insert(0, x); pop = list.pop()
- (B) push = list.append(x); pop = list.pop()
- (C) push = list.append(x); pop = list.pop(0)
- (D) push = list.insert(0, x); pop = list.pop(0)
> **Answer: (B).** append() adds to end (top), pop() removes from end (top) → LIFO.

**Q6.56 [MCQ - 2M]** A circular queue with capacity 5 is: [_, _, 10, 20, 30] with front=2, rear=4. After dequeue and enqueue(40): front, rear?
- (A) front=2, rear=0
- (B) front=3, rear=0
- (C) front=3, rear=5
- (D) front=2, rear=5
> **Answer: (B).** Dequeue: front moves 2→3. Enqueue(40): rear moves 4→0 (circular). front=3, rear=0.

**Q6.57 [NAT - 2M]** A deque (double-ended queue) supports push/pop from both ends in O(?) time?
> **Answer:** O(1) time for all operations (using Python's `collections.deque`).

**Q6.58 [MCQ - 1M]** Singly linked list: deletion at the beginning has time complexity:
- (A) O(n)
- (B) O(1)
- (C) O(log n)
- (D) O(n²)
> **Answer: (B).**

**Q6.59 [NAT - 2M]** Singly linked list: deletion at end (tail) without a tail pointer requires:
> **Answer:** O(n) — must traverse entire list to find second-to-last node.

**Q6.60 [MCQ - 2M]** Priority queue (min-heap) dequeue operation returns:
- (A) Last inserted element
- (B) First inserted element
- (C) Element with minimum priority value
- (D) Random element
> **Answer: (C).**

**Q6.61 [NAT - 2M]** Python `heapq` module: `heapq.heappush(heap, item)` and `heapq.heappop(heap)` implement?
> **Answer:** Min-heap operations — heappop() returns the smallest element.

**Q6.62 [MCQ - 1M]** A stack can be used to:
- (A) Implement BFS
- (B) Evaluate postfix expressions and implement DFS
- (C) Sort in O(n log n)
- (D) Implement FIFO scheduling
> **Answer: (B).**

**Q6.63 [NAT - 2M]** Postfix expression: `3 4 + 2 *`. Evaluate using a stack.
> **Answer:** Push 3→[3], push 4→[3,4], +→pop 4,3, push 7→[7], push 2→[7,2], *→pop 2,7, push 14→[14]. Result = **14**.

**Q6.64 [MCQ - 2M]** Infix to postfix conversion for `A + B * C`:
- (A) A B C + *
- (B) A B + C *
- (C) A B C * +
- (D) + A * B C
> **Answer: (C).** Precedence: * before +. Postfix: A B C * + (= A + (B*C)).

**Q6.65 [NAT - 2M]** A doubly linked list node has pointers to:
> **Answer:** Both previous node (prev) and next node (next), plus the data field.

**Q6.66 [MCQ - 1M]** Which data structure provides O(1) access to any element by index?
- (A) Linked list
- (B) Array/List (Python list)
- (C) Stack
- (D) Queue
> **Answer: (B).**

**Q6.67 [NAT - 2M]** A queue implemented using two stacks: enqueue uses stack1, dequeue uses stack2. When stack2 is empty, dequeue does what?
> **Answer:** Pops all elements from stack1 and pushes them onto stack2 (reverses order), then pops from stack2. Amortized O(1) per operation.

**Q6.68 [MCQ - 2M]** `collections.deque` in Python is implemented as:
- (A) Array
- (B) Doubly linked list (O(1) append/pop from both ends)
- (C) Hash table
- (D) Binary heap
> **Answer: (B).**

**Q6.69 [NAT - 2M]** Memory requirement for a linked list node with 1 integer data + 1 pointer (32-bit int, 64-bit pointer):
> **Answer:** 4 bytes (int) + 8 bytes (pointer) = 12 bytes per node (plus possible alignment padding = 16 bytes typically).

**Q6.70 [MCQ - 1M]** Circular linked list: last node's next pointer points to:
- (A) NULL
- (B) The head (first) node
- (C) The previous node
- (D) Itself
> **Answer: (B).**

---

### SECTION D: TREES, GRAPHS, BFS & DFS — 25 Questions

**Q6.71 [MCQ - 1M]** Binary Search Tree (BST) inorder traversal produces:
- (A) Random order
- (B) Sorted ascending order
- (C) Reversed order
- (D) Level-order
> **Answer: (B).** Inorder (left-root-right) of BST gives sorted ascending sequence.

**Q6.72 [NAT - 2M]** BST: insert elements [5, 3, 7, 1, 4]. Root is 5. What is the inorder traversal?
> **Answer:** Inorder: 1, 3, 4, 5, 7 (sorted ascending).

**Q6.73 [MCQ - 2M]** BST search for a key: time complexity for balanced tree with n nodes?
- (A) O(1)
- (B) O(log n)
- (C) O(n)
- (D) O(n log n)
> **Answer: (B).**

**Q6.74 [NAT - 2M]** A complete binary tree with 7 nodes has how many leaf nodes?
> **Answer:** 4 leaf nodes (last level of a complete binary tree with n=7: 4 leaves at level 3).

**Q6.75 [MCQ - 1M]** BFS (Breadth-First Search) uses which data structure?
- (A) Stack
- (B) Queue
- (C) Priority queue
- (D) Deque
> **Answer: (B).**

**Q6.76 [NAT - 2M]** DFS (Depth-First Search) uses which data structure (explicitly or implicitly)?
> **Answer:** Stack (explicitly, or the program call stack for recursive DFS).

**Q6.77 [MCQ - 2M]** BFS on an unweighted graph gives:
- (A) Minimum spanning tree
- (B) Shortest path (minimum number of edges) from source
- (C) Topological order
- (D) Longest path
> **Answer: (B).**

**Q6.78 [NAT - 2M]** Graph: nodes {A,B,C,D}, edges {A-B, A-C, B-D, C-D}. BFS from A (alphabetical order for ties): visit order?
> **Answer:** A → B,C (enqueue alphabetically) → D (via B, then C-D already visited). Order: A, B, C, D.

**Q6.79 [MCQ - 1M]** Time complexity of BFS/DFS for graph with V vertices and E edges:
- (A) O(V)
- (B) O(E)
- (C) O(V + E)
- (D) O(V × E)
> **Answer: (C).**

**Q6.80 [NAT - 2M]** Adjacency matrix representation of graph with n vertices: space complexity?
> **Answer:** O(n²) — n×n matrix.

**Q6.81 [MCQ - 2M]** Adjacency list representation is preferred over adjacency matrix when:
- (A) Graph is dense (many edges)
- (B) Graph is sparse (few edges, E << V²)
- (C) Fast edge existence queries are needed
- (D) Graph has weighted edges only
> **Answer: (B).**

**Q6.82 [NAT - 2M]** Dijkstra's algorithm finds:
> **Answer:** Shortest path from a single source to all other vertices in a weighted graph (non-negative weights).

**Q6.83 [MCQ - 1M]** Topological sort is defined for:
- (A) Undirected graphs
- (B) Directed Acyclic Graphs (DAGs)
- (C) Cyclic graphs
- (D) Trees only
> **Answer: (B).**

**Q6.84 [NAT - 2M]** A min-heap with elements [3,5,9,17,11]: extract minimum, then new root?
> **Answer:** Extract min (3). Last element (11) moved to root, then heapify down. New root: 5.

**Q6.85 [MCQ - 2M]** Heap data structure: heapify operation after insertion has time complexity:
- (A) O(1)
- (B) O(log n)
- (C) O(n)
- (D) O(n log n)
> **Answer: (B).**

**Q6.86 [NAT - 2M]** A height-balanced AVL tree: maximum height difference between left and right subtrees?
> **Answer:** 1 (balance factor |height(left) - height(right)| ≤ 1 for every node).

**Q6.87 [MCQ - 1M]** Python `collections.defaultdict` is used to:
- (A) Sort a dictionary
- (B) Provide a default value for missing keys automatically
- (C) Reverse a dictionary
- (D) Count elements
> **Answer: (B).**

**Q6.88 [NAT - 2M]** Python `collections.Counter({'a':3,'b':1,'c':2}).most_common(2)`:
> **Answer:** [('a',3), ('c',2)] — top 2 most common elements.

**Q6.89 [MCQ - 2M]** A robot path-planning problem in a grid: finding shortest obstacle-free path is best solved by:
- (A) DFS
- (B) BFS (guarantees shortest path in unweighted grid)
- (C) Insertion sort
- (D) Binary search
> **Answer: (B).**

**Q6.90 [NAT - 2M]** A* algorithm for path planning uses: f(n) = g(n) + h(n). What are g(n) and h(n)?
> **Answer:** g(n) = actual cost from start to node n; h(n) = heuristic estimate of cost from n to goal.

**Q6.91 [MCQ - 1M]** Kruskal's algorithm finds:
- (A) Shortest path
- (B) Minimum Spanning Tree (MST)
- (C) Topological order
- (D) Strongly connected components
> **Answer: (B).**

**Q6.92 [NAT - 2M]** For numpy array: `import numpy as np; a = np.array([[1,2],[3,4]]); print(a.T)`:
> **Answer:** [[1,3],[2,4]] (transpose of 2×2 matrix).

**Q6.93 [MCQ - 2M]** NumPy operation: `np.dot(A, B)` where A is (3×2) and B is (2×4):
- (A) Error (incompatible shapes)
- (B) Result shape (3×4)
- (C) Result shape (2×2)
- (D) Result shape (3×2)
> **Answer: (B).** Matrix multiply (3×2)×(2×4) = (3×4).

**Q6.94 [NAT - 2M]** `np.linalg.det(np.array([[1,2],[3,4]]))`:
> **Answer:** det = 1×4 - 2×3 = 4-6 = -2.

**Q6.95 [MCQ - 1M]** Python OOP: which method is called when an object is created?
- (A) __str__
- (B) __init__
- (C) __del__
- (D) __repr__
> **Answer: (B).** __init__ is the constructor.

**Q6.96 [NAT - 2M]** Output:
```python
class Robot:
    count = 0
    def __init__(self):
        Robot.count += 1
r1 = Robot()
r2 = Robot()
r3 = Robot()
print(Robot.count)
```
> **Answer:** 3 (class attribute count incremented with each instance creation).

**Q6.97 [MCQ - 2M]** Python inheritance: `class Cobot(Robot)`: Cobot is the:
- (A) Parent class
- (B) Child/Derived class
- (C) Interface
- (D) Abstract class
> **Answer: (B).**

**Q6.98 [NAT - 2M]** `[0]*5` in Python creates:
> **Answer:** [0, 0, 0, 0, 0] (list of 5 zeros).

**Q6.99 [MCQ - 1M]** Python `enumerate(['a','b','c'])` gives:
- (A) [0,1,2]
- (B) Iterator of (index, value) pairs: (0,'a'),(1,'b'),(2,'c')
- (C) Dictionary
- (D) Set of characters
> **Answer: (B).**

**Q6.100 [NAT - 2M]** Output:
```python
import functools
print(functools.reduce(lambda a,b: a+b, range(1,6)))
```
> **Answer:** 1+2+3+4+5 = 15.

---
*Module 6 Complete — 100 Questions*
