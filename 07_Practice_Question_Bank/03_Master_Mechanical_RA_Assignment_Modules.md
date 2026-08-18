# 🎯 GATE RA 2027: 1000+ Question Master Assignment Bank (Mechanical Stream Part B2)

**Focus Areas:** Part A (Compulsory 60M) + Part B2 Mechanical (25M)  
**Strict Exclusion:** Part B1 (Electrical Engineering) excluded entirely.  
**Student:** Jaswanth | **Target:** 85+ Marks in GATE RA 2027

---

## 📑 Module Directory of Assignments

```
├── Assignment Set 1: Spatial Transformations & D-H Forward Kinematics (100 Qs)
├── Assignment Set 2: Manipulator Jacobians, Statics & Robot Dynamics (100 Qs)
├── Assignment Set 3: Sensors, Signal Conditioning & Transducers (100 Qs)
├── Assignment Set 4: Actuators, Motor Drives, Steppers & Fluid Power (100 Qs)
├── Assignment Set 5: CIM, PLCs, Ladder Logic, CNC & Auto-ID AIDC (100 Qs)
├── Assignment Set 6: Python Programming & Data Structures for Robotics (100 Qs)
├── Assignment Set 7: Engineering Mathematics (Linear Algebra & Calculus) (100 Qs)
├── Assignment Set 8: Engineering Mathematics (DE, Laplace, Probability & Numerical) (100 Qs)
├── Assignment Set 9: Mechanics of Materials SOM (Part B2 Mechanical) (100 Qs)
└── Assignment Set 10: TOM, Dynamics, Vibrations & 3D Printing (Part B2 Mechanical) (100 Qs)
```

---

# MODULE 1: SPATIAL TRANSFORMATIONS & FORWARD KINEMATICS (100 QUESTIONS)

### Core Competencies Tested:
1. Direction cosine matrices, $SO(3)$ properties, and orthogonality ($R^T = R^{-1}, \det(R) = +1$).
2. Elementary rotation matrices $R_x(\alpha), R_y(\beta), R_z(\gamma)$ and composition rules.
3. Angle-Axis representation, Euler angles ($Z-Y-X$, $Z-Y-Z$), and Quaternions.
4. $4 \times 4$ Homogeneous Transformation Matrices (HTM) and fast inversion ($T^{-1} = [R^T, -R^T P; 0, 1]$).
5. Denavit-Hartenberg (D-H) 4 parameters ($\theta_i, d_i, a_i, \alpha_i$) and frame assignment rules.
6. Forward Kinematics of 2R, 3R, SCARA (RRPR), PUMA (6R), and Stanford manipulators.

#### Sample Assignment Problems (Module 1):

* **Q1.1 [Transformations - 2M]:** A coordinate frame $\{B\}$ is initially aligned with fixed frame $\{A\}$. Frame $\{B\}$ is first rotated about its current $Z$-axis by $90^\circ$, then translated along fixed $X$-axis by $4\text{ units}$, and finally rotated about fixed $Y$-axis by $90^\circ$. Find the resulting $4 \times 4$ homogeneous transformation matrix $^A T_B$.
  * **Answer:** $^A T_B = \begin{bmatrix} 0 & 1 & 0 & 4 \\ -1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$.
  * **Explanation:** Use pre-multiplication for fixed-axis operations and post-multiplication for current-axis operations: $^A T_B = R_y(90^\circ) \cdot \text{Trans}_x(4) \cdot R_z(90^\circ)$.

* **Q1.2 [D-H Parameters - 2M]:** For a 3-DOF RRP cylindrical robot arm, write the complete D-H parameter table where the base joint rotates about $Z_0$, the shoulder joint rotates about $Z_1$ (parallel to $Z_0$), and the elbow joint is a prismatic joint extending along $Z_2$ (perpendicular to $Z_1$).
  * **Table:**
    * Link 1: $\theta_1 = \theta_1^*, d_1 = L_1, a_1 = 0, \alpha_1 = 0^\circ$
    * Link 2: $\theta_2 = \theta_2^*, d_2 = 0, a_2 = L_2, \alpha_2 = -90^\circ$
    * Link 3: $\theta_3 = 0^\circ, d_3 = d_3^*, a_3 = 0, \alpha_3 = 0^\circ$

---

# MODULE 2: MANIPULATOR JACOBIANS, DYNAMICS & TRAJECTORIES (100 QUESTIONS)

### Core Competencies Tested:
1. Linear and angular velocity propagation from base to end-effector.
2. Constructing geometric and analytical Manipulator Jacobians ($J_v, J_\omega$).
3. Kinematic singularities ($\det(J) = 0$), loss of DOF, and manipulability ellipsoid $\mu = \sqrt{\det(J J^T)}$.
4. Static force-torque duality $\tau = J^T F$.
5. Kinetic and Potential energy formulations for rigid links.
6. Euler-Lagrange equations of motion: $M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) = \tau$.
7. Cubic, Quintic, and Trapezoidal (LSPB) trajectory profiles.

#### Sample Assignment Problems (Module 2):

* **Q2.1 [Jacobian Singularity - 2M]:** For a 2R planar manipulator with link lengths $L_1 = 1\text{ m}$ and $L_2 = 1\text{ m}$, find all joint configurations $(\theta_1, \theta_2)$ where the robot loses mobility along the radial Cartesian direction.
  * **Answer:** $\theta_2 = 0^\circ$ (boundary singularity, fully extended $r = 2\text{ m}$) and $\theta_2 = 180^\circ$ (interior singularity, folded back $r = 0\text{ m}$).

* **Q2.2 [Statics Duality - 2M]:** A planar 2R robot ($L_1 = 0.6\text{ m}, L_2 = 0.4\text{ m}$) is held in static equilibrium at $\theta_1 = 0^\circ, \theta_2 = 90^\circ$. If an external horizontal payload force $F_x = 50\text{ N}$ is applied at the end-effector tip, calculate the holding torques $(\tau_1, \tau_2)$ required at Joint 1 and Joint 2.
  * **Answer:** $\tau_1 = -20\text{ N}\cdot\text{m}, \quad \tau_2 = -20\text{ N}\cdot\text{m}$.
  * **Explanation:** $\tau = J^T F$. At $\theta_1=0, \theta_2=90^\circ$, $J = \begin{bmatrix} -0.4 & -0.4 \\ 0.6 & 0 \end{bmatrix} \implies J^T \begin{bmatrix} 50 \\ 0 \end{bmatrix} = \begin{bmatrix} -20 \\ -20 \end{bmatrix}$.

---

# MODULE 3: SENSORS & SIGNAL CONDITIONING (100 QUESTIONS)

### Core Competencies Tested:
1. Strain gauge Gauge Factor ($GF = 1 + 2\nu + \frac{\Delta\rho/\rho}{\epsilon}$), Quarter/Half/Full Wheatstone bridges.
2. RTD (PT100) and Thermistors (NTC/PTC, Steinhart-Hart equation).
3. LVDT linearity, sensitivity, phase angle, and null residual voltage.
4. Capacitive displacement sensors (variable area vs variable dielectric).
5. Piezoelectric sensors, charge sensitivity $d$, voltage sensitivity $g$, and high-pass cutoff $f_c = 1/(2\pi RC)$.
6. Hall effect transverse voltage $V_H = \frac{R_H I B}{t}$.
7. Optical encoders: incremental quadrature (direction decoding) vs absolute (Gray code).
8. 3-Op-Amp Instrumentation Amplifiers and Active Filters.

---

# MODULE 4: ACTUATORS, STEPPER DRIVES & FLUID POWER (100 QUESTIONS)

### Core Competencies Tested:
1. PMDC motors: Back-EMF $E_b = K_e \omega$, Torque $T = K_t I_a$, Drooping characteristic $\omega = \frac{V}{K_e} - \frac{R_a}{K_e K_t}T$.
2. Stepper motors: VR, PM, Hybrid; Step angle $\beta = \frac{360^\circ}{m N_r}$; Full/Half/Micro-stepping; Slew rate & pull-in torque.
3. BLDC motors: Electronic commutation with 3 Hall sensors ($120^\circ$ spacing).
4. Hydraulic systems: Hydrostatic pumps (gear, vane, piston), Cylinder extension/retraction force & speed ($F = PA, v = Q/A$).
5. Pneumatic systems: FRL unit (Filter, Regulator, Lubricator), 3/2 and 5/2 Direction Control Valves.

---

# MODULE 5: CIM, PLCS, CNC & AUTO-ID (100 QUESTIONS)

### Core Competencies Tested:
1. Automation hierarchy: Sensor/Actuator $\to$ Machine $\to$ Cell $\to$ Plant $\to$ Enterprise.
2. PLC scan cycles (Input $\to$ Program $\to$ Output), NO/NC contacts, TON/TOF timers, CTU/CTD counters.
3. CNC programming: Cartesian axes (Z-spindle rule), G-Codes (`G00, G01, G02, G03, G90, G91`), M-Codes.
4. Material removal rate $MRR = w \cdot d \cdot f_m$, Cutting speed $V_c = \pi D N / 1000$.
5. AS/RS storage cycle times ($T_{sc}, T_{dc}$) and AGV fleet size estimation.
6. Auto-ID: 1D barcodes, 2D QR codes, Active vs Passive RFID frequencies (LF 125kHz, HF 13.56MHz, UHF 860-960MHz).

---

# MODULE 6: PYTHON PROGRAMMING & DSA (100 QUESTIONS)

### Core Competencies Tested:
1. Python syntax, list slicing, dictionaries, sets, list comprehensions, lambda functions.
2. Recursion call stack trace and time complexity analysis ($O(1), O(n), O(n \log n), O(n^2)$).
3. Stacks (LIFO), Queues (FIFO), Circular Queues, and Priority Queues (Min/Max Heaps).
4. Binary Search Trees: Inorder traversal sorting property, BST search/insertion $O(h)$.
5. Graph representations (Adjacency Matrix vs List), Breadth-First Search (BFS) for shortest path, Depth-First Search (DFS).

---

# MODULE 7 & 8: ENGINEERING MATHEMATICS (200 QUESTIONS)

### Core Competencies Tested:
1. Linear Algebra: Rank, Inverse, Determinants, Eigenvalues, Cayley-Hamilton, SVD.
2. Calculus: Limits, Multivariable Maxima/Minima (Hessian $D = rt - s^2$), Taylor series, Jacobians.
3. Vector Calculus: Gradient, Directional Derivative, Divergence, Curl, Gauss Divergence, Stokes' Theorem.
4. Differential Equations: Exact ODEs, Cauchy-Euler, Higher-order linear ODEs.
5. Laplace Transforms: Shifting theorems, Initial/Final value theorems, Inverse Laplace, Convolution.
6. Probability & Statistics: Bayes' Theorem, Poisson ($\text{Mean}=\text{Var}=\lambda$), Gaussian Normal distribution.
7. Numerical Methods: Newton-Raphson quadratic convergence, Simpson's 1/3 and 3/8 rules, Runge-Kutta 4th order.

---

# MODULE 9: MECHANICS OF MATERIALS - SOM (PART B2) (100 QUESTIONS)

### Core Competencies Tested:
1. Stress-Strain, Hooke's law, Elastic constants $E = 2G(1+\nu) = 3K(1-2\nu)$.
2. Mohr's Circle for plane stress, Principal stresses $\sigma_{1,2} = \frac{\sigma_x+\sigma_y}{2} \pm \tau_{\max}$.
3. Shear Force & Bending Moment Diagrams (SFD/BMD), Flexure formula $\frac{M}{I} = \frac{\sigma}{y} = \frac{E}{R}$.
4. Torsion of circular shafts $\frac{T}{J} = \frac{\tau}{r} = \frac{G\theta}{L}$.
5. Euler column critical buckling load $P_{cr} = \frac{\pi^2 EI}{L_e^2}$ under 4 standard boundary conditions.
6. Thin cylinders: Hoop stress $\sigma_h = \frac{pd}{2t}$, Longitudinal stress $\sigma_l = \frac{pd}{4t}$.

---

# MODULE 10: TOM, VIBRATIONS, DESIGN & 3D PRINTING (PART B2) (100 QUESTIONS)

### Core Competencies Tested:
1. Planar mechanisms, 4-bar Grashof's law, Slider-crank inversions, Degrees of freedom.
2. Coriolis acceleration magnitude $a^c = 2\omega v_{\text{rel}}$ and direction rule.
3. Epicyclic gear trains: Tabular speed method $\frac{N_s - N_a}{N_r - N_a} = -\frac{T_r}{T_s}$.
4. SDOF Vibrations: Natural frequency $\omega_n = \sqrt{k/m}$, Critical damping $c_c = 2\sqrt{km}$, Logarithmic decrement $\delta = \frac{2\pi\zeta}{\sqrt{1-\zeta^2}}$.
5. Transmissibility & Vibration Isolation Rule: $TR < 1 \iff r = \frac{\omega}{\omega_n} > \sqrt{2}$.
6. Static Failure Theories: Rankine, Tresca ($S_{sy} = 0.5 S_{yt}$), Von Mises ($S_{sy} = 0.577 S_{yt}$).
7. Goodman & Soderberg fatigue lines: $\frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{ut}} = \frac{1}{FS}$.
8. Rolling contact bearings rating life $L_{10} = (C/P)^p$.
9. Additive Manufacturing: Stereolithography cure depth $C_d = D_p \ln(E_{\max}/E_c)$, SLS energy density, and FDM build parameters.
