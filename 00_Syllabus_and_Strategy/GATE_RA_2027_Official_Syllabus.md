# GATE 2027: Robotics & Automation (RA) — Official Detailed Syllabus

**Organizing Institute:** IIT Madras  
**Target Goal:** IISc RBCCPS (Robert Bosch Centre for Cyber-Physical Systems) / Top IITs Robotics Programs

---

## Exam Pattern & Structure

| Section | Topic Coverage | Total Marks | Question Type |
| :--- | :--- | :--- | :--- |
| **General Aptitude (GA)** | Verbal Ability & Numerical Ability | **15 Marks** | MCQs / MSQs / NAT |
| **Part A (Common Core)** | Math, Mechatronics, Circuits, Programming/DSA, Robotics, CIM | **60 Marks** | Compulsory for all |
| **Part B (Optional)** | **Part B1 (Electrical)** OR **Part B2 (Mechanical)** | **25 Marks** | Candidate chooses B1 or B2 during exam |
| **Total** | **Full Paper (180 mins / 3 hours)** | **100 Marks** | **65 Questions** |

---

# Part A: Common Section (60 Marks — Compulsory)

## Section A.1: Engineering Mathematics

### 1. Linear Algebra
- **Matrices**: Transpose, Determinants, Rank of a matrix.
- **Eigenvalues & Eigenvectors**: Trace, Properties of eigenvalues/eigenvectors, Cayley-Hamilton Theorem.
- **Matrix Operations**: Adjoint, Inverse of matrices.
- **Systems of Linear Equations**: Consistency, Gaussian elimination, solutions to $Ax = b$ (unique, infinite, no solution).

### 2. Calculus
- **Functions of a Single Variable**: Limits, Continuity, Differentiability.
- **Theorems**: Mean Value Theorems (Rolle's, Lagrange's, Cauchy's).
- **Indeterminate Forms**: L'Hôpital's rule.
- **Integral Calculus**: Evaluation of definite and improper integrals, Double and triple integrals, Change of variables.
- **Multivariable Calculus**: Partial derivatives, Total derivative, Taylor series (in one and two variables), Maxima and minima.
- **Vector Calculus**: Gradient, Divergence, Curl, Vector identities, Directional derivatives.

### 3. Differential Equations
- **First-Order ODEs**: Linear and non-linear first-order equations, Exact equations, Integrating factors.
- **Higher-Order Linear ODEs**: Equations with constant coefficients, Method of variation of parameters, Cauchy-Euler equation.
- **Initial & Boundary Value Problems**.
- **Laplace Transforms**: Properties, Inverse Laplace transform, Applications to ODEs.
- **Partial Differential Equations (PDEs)**: Solutions of one-dimensional Heat equation, Wave equation, and Laplace's equations.
- **Fourier Series**: Periodic functions, Dirichlet's conditions, Half-range expansions.

### 4. Probability and Statistics
- **Axioms of Probability**: Conditional probability, Multiplication rule, Bayes' Theorem.
- **Descriptive Statistics**: Mean, Median, Mode, Standard deviation, Variance.
- **Random Variables**: Discrete and continuous random variables, Expectation, Moments.
- **Probability Distributions**: Binomial distribution, Poisson distribution, Normal (Gaussian) distribution.
- **Probability Density Function (PDF)** & **Cumulative Distribution Function (CDF)**.
- **Hypothesis Testing**: Z-test, t-test, Chi-square test, Confidence intervals.

### 5. Numerical Methods
- **Algebraic & Transcendental Equations**: Solutions of linear systems, Solutions of non-linear equations (Bisection method, Newton-Raphson method, Secant method).
- **Numerical Integration**: Trapezoidal rule, Simpson's $1/3$ and $3/8$ rules.
- **Finite Differences**: Forward, backward, and central differences.
- **Differential Equations**: Explicit single-step methods (Euler's method, Runge-Kutta 2nd and 4th order) and multi-step methods.

---

## Section A.2: Basics of Mechatronics

### 1. Network Elements & Circuits
- **Elements**: Ideal voltage and current sources, Dependent sources, $R, L, C, M$ (mutual inductance) elements.
- **Network Solution Methods**: Kirchhoff's laws (KCL, KVL), Node and Mesh analysis.
- **Network Theorems**: Thevenin’s theorem, Norton’s theorem, Superposition theorem, Maximum Power Transfer theorem.
- **Transients**: Transient response of DC and AC networks ($RL, RC, RLC$ circuits).
- **Sinusoidal Steady-State**: Phasors, Impedance, Resonance (Series & Parallel).
- **Two-Port Networks**: $Z, Y, ABCD, h$ parameters.
- **AC Power**: Balanced three-phase circuits, Complex power, Apparent/Active/Reactive power, Power factor correction.

### 2. Digital Circuits
- **Boolean Algebra**: Logic gates, Minimization of Boolean expressions (K-Maps, De Morgan's laws).
- **Combinational Circuits**: Multiplexers (MUX), Demultiplexers (DEMUX), Decoders, Encoders, Adders, Subtractors.
- **Sequential Circuits**: Latches and Flip-Flops (SR, JK, D, T), Counters (Synchronous, Asynchronous), Shift Registers.

### 3. Sensors & Transducers
- **Sensor Technologies**:
  - Resistive sensors (Potentiometers, Strain Gauges, RTDs, Thermistors)
  - Capacitive sensors
  - Inductive sensors (LVDT, Eddy current sensors)
  - Piezoelectric sensors
  - Hall Effect sensors
- **Signal Conditioning**:
  - Bridge circuits (Wheatstone bridge, balance & deflection methods)
  - Amplification & filtering (Op-Amp instrumentation amplifiers, active/passive filters).
- **Industrial Instrumentation**:
  - Displacement measurement (linear and angular - Optical encoders, Resolvers).
  - Velocity and Acceleration measurement (MEMS accelerometers, tachometers).
  - Force and Torque measurement (Load cells, torque transducers).
  - Pressure measurement (Piezoelectric, capacitive diaphragms, strain-gauge based).

### 4. Actuators & Motor Drives
- **Electric Actuators**:
  - DC Motors (Brushed DC, Brushless DC / BLDC): Working principles, Equivalent circuits, Torque-Speed characteristics, Speed control methods (PWM, H-Bridge).
  - Stepper Motors: Unipolar and Bipolar, Variable reluctance, Permanent magnet, Hybrid stepper, Step angles, Microstepping.
  - Servo Motors: AC and DC servo motors, Position and velocity feedback loops.
- **Fluid Power Actuators**:
  - Hydraulic actuators: Principles of operation, Cylinders (Single/Double acting), Hydraulic pumps, Directional and proportional valves.
  - Pneumatic actuators: Cylinders, Air preparation (FRL unit), Solenoid valves.

### 5. Engineering Mechanics
- **Statics**: Free-body diagrams, Equilibrium equations of particles and rigid bodies, Trusses and frames.
- **Friction**: Laws of dry friction, Rolling friction, Belt-pulley friction and torque transmission.
- **Dynamics**: Kinematics and dynamics of rigid bodies in plane motion (Newton-Euler equations, Work-Energy principle, Impulse-Momentum theorem).

### 6. Programming & Data Structures (Python)
- **Programming Concepts**: Flowcharts, Pseudocode.
- **Python Core**:
  - Data types (`int`, `float`, `str`, `bool`, `list`, `tuple`, `dict`, `set`).
  - Operators and expressions.
  - Conditional statements (`if`, `elif`, `else`, `match/case`).
  - Looping statements (`while`, `for`), Loop control statements (`break`, `continue`, `pass`).
  - Functions, Scope of variables, Default arguments, Recursion.
  - String manipulation, Arrays/Lists, Dictionaries.
- **Data Structures**:
  - Stacks (LIFO) and Queues (FIFO, Circular Queue, Deque).
  - Linked Lists (Singly, Doubly, Circular).
  - Binary Trees & Binary Search Trees (BST - insertion, deletion, traversals).
  - Binary Heap (Min-heap, Max-heap, Priority Queues).
  - Graphs: Representation (Adjacency Matrix, Adjacency List), Traversals (BFS, DFS), Shortest paths.

---

## Section A.3: Principles of Robotics and Automation

### 1. Robotics
- **Manipulator Classification**: Serial manipulators vs. Parallel manipulators (Delta robot, Stewart platform).
- **Geometrical Configurations**: Cartesian (PPP), Cylindrical (RPP), Spherical (RRP), SCARA (RRP), Articulated/Anthropomorphic (RRR).
- **Kinematic Structure**: Links, joints (Revolute $R$, Prismatic $P$), Coordinate frames.
- **Degrees of Freedom (DOF)**: Kutzbach and Grübler’s mobility criterion.
- **Spatial Representations & Transformations**:
  - 2D & 3D Rotation matrices (Properties: $R^T = R^{-1}, \det(R) = +1$).
  - Elementary rotations ($R_x, R_y, R_z$), Composite rotations (Fixed axis vs. Moving/Euler angles).
  - Homogeneous Transformation Matrices ($4 \times 4$ HTMs).
- **Kinematics**:
  - Forward Kinematics (Denavit-Hartenberg / DH parameters and convention).
  - Inverse Kinematics principles and workspace analysis.
- **Robot Applications & Motion**:
  - Point-to-Point (PTP) motion vs. Continuous Path (CP) control.
  - Robot end-effectors (Mechanical grippers, Vacuum grippers, Magnetic grippers).
  - Performance Metrics: Accuracy, Repeatability, Resolution, Compliance.

### 2. Computer Integrated Manufacturing (CIM) & Automation
- **Automation in Manufacturing**: Automation architectures, Fixed vs. Programmable vs. Flexible automation.
- **Programmable Logic Controllers (PLCs)**: PLC architecture, Input/Output modules, Scan cycle, Ladder logic programming, Timers (TON, TOF), Counters (CTU, CTD).
- **Computer Numerical Control (CNC)**: Machine coordinate systems, CNC programming fundamentals (G-codes, M-codes), Linear and circular interpolation.
- **Automated Material Handling & Storage**:
  - Automated Guided Vehicles (AGVs): Guidance mechanisms, dispatching, routing.
  - Conveyor systems.
  - Automated Storage and Retrieval Systems (AS/RS): Types, components, cycle time analysis.
- **Auto-ID Systems (AIDC)**: Barcodes (1D/2D QR codes), Optical Character Recognition (OCR), Radio Frequency Identification (RFID).
- **Positioning Systems**: Single and multi-axis positioning systems (Lead screws, linear guides, direct drives, backlash compensation).
- **Concurrent Design & Planning**: Basics of concurrent engineering, Design for Manufacturing and Assembly (DFMA), Manufacturing planning for automated production.

---

# Part B: Optional Sections (25 Marks — Choose 1)

---

## Part B1: Electrical Engineering

### Section B1.1: Analog Circuits and Embedded Systems
- **Analog Filters**: Active and passive Low-pass, High-pass, Band-pass, and Band-reject filters.
- **Amplifiers**: BJT and MOSFET biasing, Small-signal equivalent circuits, Frequency response, Feedback amplifier topologies.
- **Operational Amplifiers (Op-Amps)**: Ideal & practical characteristics, Inverting/Non-inverting amps, Integrators, Differentiators, Summing/Difference amps, Instrumentation amps.
- **Non-Linear & Timing Circuits**: Oscillators (Wien bridge, RC phase shift, Colpitts), Voltage Controlled Oscillators (VCO), 555 Timers (Astable, Monostable), Schmitt triggers, Sample and Hold circuits.
- **Data Converters**: ADC (Flash, SAR, Dual-slope, Sigma-Delta) and DAC (R-2R ladder, Weighted resistor), Resolution, Sampling rate, Quantization error.
- **Power Supplies**: Switched Mode Power Supplies (SMPS topologies: Buck, Boost, Buck-Boost).
- **Microprocessors & Microcontrollers**:
  - Architecture: CPU, Memory (Flash, RAM, EEPROM), I/O ports, Timers/Counters, Interrupt handling mechanisms and vector tables.
  - Interfacing: Memory interfacing, Peripheral interfacing (GPIO, ADC, PWM).
  - Serial Communication: UART, SPI, $I^2C$, CAN bus.
  - Data Acquisition Systems (DAS): Multiplexing, Signal conditioning, Interfacing with sensors.

### Section B1.2: Signals and Systems
- **Signal Fundamentals**: Continuous-time and Discrete-time signals, Elementary signals (Impulse, Step, Ramp, Sinusoid, Exponential).
- **System Properties**: Linearity, Time-invariance (LTI), Causality, Stability (BIBO), Memory, Invertibility.
- **Fourier Analysis**: Continuous-Time and Discrete-Time Fourier Series (CTFS, DTFS), Continuous-Time Fourier Transform (CTFT), Discrete-Time Fourier Transform (DTFT).
- **Sampling**: Shannon’s Sampling Theorem, Nyquist rate, Aliasing, Reconstruction.
- **Laplace Transform**: Region of Convergence (ROC), Properties, Inverse Laplace transform, Solution of differential equations.
- **Z-Transform**: ROC, Properties, Inverse Z-transform, Stability and causality in Z-plane.
- **Signal Metrics**: R.M.S. value, Average value, Power, Energy.

### Section B1.3: Control Systems
- **Mathematical Modeling**: Differential equations of mechanical and electrical systems, Transfer functions, Feedback principle.
- **Block Diagram & Signal Flow**: Block diagram reduction algebra, Mason’s gain formula.
- **Time-Domain Analysis**: Transient and steady-state analysis of 1st and 2nd order LTI systems, Time-domain specifications (Rise time, Peak time, Settling time, Peak overshoot), Static error constants ($K_p, K_v, K_a$).
- **Stability Analysis**: Routh-Hurwitz stability criterion, Nyquist stability criterion, Gain margin and Phase margin.
- **Root Locus Technique**: Construction rules, Angles of departure/arrival, Stability analysis.
- **Frequency Response**: Bode plots, Polar plots, Resonance peak, Resonant frequency, Bandwidth.
- **Compensators & Controllers**: Lead, Lag, and Lead-Lag compensator design; P, PI, and PID controllers (Tuning, effect of P/I/D on response).

---

## Part B2: Mechanical Engineering

### Section B2.1: Mechanics of Materials
- **Stress and Strain**: Normal and shear stress/strain, Elastic constants ($E, G, K, \nu$), Poisson's ratio, Generalized Hooke's law.
- **Stress-Strain Relations**: Stress-strain curves for ductile and brittle materials, True stress/strain.
- **Principal Stresses**: Mohr’s circle for plane stress and plane strain, Principal stresses and maximum shear stress.
- **Thin Cylinders & Spheres**: Circumferential (Hoop) stress, Longitudinal stress.
- **Beams**: Shear force and bending moment diagrams (SFD & BMD), Bending stresses (Flexure formula), Shear stresses in beams, Concept of shear centre.
- **Deflection of Beams**: Double integration method, Macaulay’s method, Moment-area method, Castigliano’s theorems.
- **Torsion**: Torsion of circular solid and hollow shafts, Polar moment of inertia, Torsional stiffness.
- **Columns**: Euler’s theory of buckling for long columns, Effective length, Critical load.
- **Thermal Stresses**: Free expansion, Constrained thermal stress.
- **Experimental Stress Analysis**: Strain gauges, Strain rosettes (Rectangular, Delta).
- **Testing of Materials**: Universal Testing Machine (UTM) tensile/compression test, Hardness tests (Brinell, Rockwell, Vickers), Impact tests (Charpy, Izod).

### Section B2.2: Kinematics and Dynamics of Machinery
- **Planar Mechanisms**: Kinematic pairs, Kinematic chains, Inversions of 4-bar and slider-crank mechanisms.
- **Kinematic Analysis**: Displacement, Velocity, and Acceleration analysis of plane mechanisms; Instantaneous Center (I-Center) method, Relative velocity & acceleration methods (Coriolis acceleration component).
- **Dynamics of Linkages**: Dynamic force analysis, D'Alembert's principle, Turning moment diagrams, Flywheels.
- **Gears and Gear Trains**: Law of gearing, Involute profile, Interference and undercutting; Simple, Compound, Epicyclic (Planetary) gear trains.
- **Balancing**: Balancing of rotating masses (single and multiple planes), Balancing of reciprocating masses.
- **Gyroscopes**: Gyroscopic couple and its effect on vehicles and flying machines.
- **Vibrations**:
  - Free and forced vibrations of single-degree-of-freedom (SDOF) systems.
  - Effect of viscous damping (Underdamped, Critically damped, Overdamped), Logarithmic decrement.
  - Forced harmonic excitation, Vibration isolation and Transmissibility ($TR$).
  - Resonance, Critical speeds / Whirling of shafts.

### Section B2.3: Machine Design and Computer Integrated Manufacturing
- **Design Principles**: Design for static loading, Stress concentration factor.
- **Failure Theories**: Maximum Principal Stress theory (Rankine), Maximum Shear Stress theory (Tresca), Distortion Energy theory (von Mises).
- **Fatigue Strength & Dynamic Loading**: S-N diagram, Endurance limit, Modifying factors, Design for infinite and finite life, Soderberg, Goodman, and Gerber lines.
- **Design of Machine Elements**:
  - Bolted, Riveted, and Welded joints (Eccentric loading).
  - Shafts (Combined bending and torsion), Keys, Couplings.
  - Rolling contact bearings (Deep groove ball, cylindrical roller - Life rating equation $L_{10}$), Sliding contact (Journal) bearings (Petroff's equation, Sommerfeld number).
  - Brakes (Block, Band, Internal expanding) and Clutches (Single/Multi-plate, Cone clutch - Uniform pressure & Uniform wear theories).
  - Mechanical springs (Helical compression springs - Wahl factor, Spring stiffness, Series/Parallel).
- **CAD/CAM & Manufacturing Automation**:
  - CAD fundamentals: Geometric modeling (Wireframe, Surface, Solid modeling - CSG, B-Rep), Transformation in CAD.
  - Integration tools: CAD/CAM interface, STEP/IGES formats.
  - Additive Manufacturing (3D Printing): Stereolithography (SLA), Fused Deposition Modeling (FDM), Selective Laser Sintering (SLS), Process parameters, Slicing algorithms.
