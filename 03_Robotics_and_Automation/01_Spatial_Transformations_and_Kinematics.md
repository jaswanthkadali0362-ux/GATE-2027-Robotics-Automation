# Module 1: Spatial Transformations & Forward Kinematics in Robotics

**GATE Section:** Part A.3 (Principles of Robotics & Automation)  
**Target:** 100% Conceptual Clarity, Formulas, Standard Conventions & Solved Problems

---

## 1. Classification of Robots & Manipulator Configurations

### Serial vs. Parallel Manipulators
| Feature | Serial Manipulator (Open Chain) | Parallel Manipulator (Closed Chain) |
| :--- | :--- | :--- |
| **Structure** | Sequential series of links connected by 1-DOF joints | End-effector connected to base via multiple parallel kinematic chains |
| **Workspace** | Large workspace relative to robot footprint | Smaller, restricted workspace |
| **Payload & Stiffness** | Lower stiffness, cantilever effect causes deflection under heavy load | Extremely high stiffness, rigidity, and high payload-to-weight ratio |
| **Speed & Acceleration** | Moderate | Very high speeds & accelerations (e.g. Delta robot picking items) |
| **Kinematics** | Direct (Forward) Kinematics is easy; Inverse is harder | Forward Kinematics is complex; Inverse Kinematics is straightforward |
| **Examples** | PUMA 560, SCARA, KUKA industrial arms | Stewart-Gough Platform (Flight simulators), Delta Robot |

---

### Standard Geometrical Configurations of Serial Arms

| Configuration | Joint Structure | Coordinate System | Typical Workspace Volume | Common Industrial Use |
| :--- | :---: | :--- | :--- | :--- |
| **Cartesian / Gantry** | **PPP** | Cartesian $(X, Y, Z)$ | Box / Rectangular Prism | 3D printers, CNC routers, overhead crane pick-and-place |
| **Cylindrical** | **RPP** | Cylindrical $(r, \theta, z)$ | Cylinder / Hollow cylinder | Assembly, machine tool loading |
| **Spherical / Polar** | **RRP** | Spherical $(r, \theta, \phi)$ | Sphere / Segment of sphere | Welding, die-casting, material handling |
| **SCARA** | **RRP** (Selective Compliance Assembly Robot Arm) | Cylindrical $(x, y, z, \theta_z)$ | Kidney-shaped cylinder | High-speed PCB assembly, electronics insertion (rigid in Z, compliant in XY) |
| **Articulated / Anthropomorphic** | **RRR** | Spherical / Complex | Torus / Sphere-like | Automotive spot welding, spray painting, general 6-DOF manipulation |

> **Key Rule for Joint Symbols:**
> * $R$ = Revolute Joint (1 rotational DOF, variable is angle $\theta_i$)
> * $P$ = Prismatic Joint (1 linear sliding DOF, variable is displacement $d_i$)

---

## 2. Degrees of Freedom (DOF) & Mobility Criteria

The mobility ($M$ or $\text{DOF}$) of a planar or spatial mechanism is calculated using **Kutzbach / Grübler's Criterion**.

### Spatial Mechanisms (3D Space - 6 DOF per unconstrained body):
$$M = 6(N - 1 - j) + \sum_{i=1}^{j} f_i$$
Where:
- $N$ = Total number of links (including the fixed base link)
- $j$ = Total number of joints
- $f_i$ = Degrees of freedom permitted by joint $i$

For a spatial mechanism with only 1-DOF joints ($f_i = 1$):
$$M = 6(N - 1) - 5j_1 - 4j_2 - 3j_3 - 2j_4 - 1j_5$$
$$\boxed{M = 6(N - 1 - j) + j = 6(N - 1) - 5j}$$

### Planar Mechanisms (2D Space - 3 DOF per unconstrained body):
$$\boxed{M = 3(N - 1) - 2j_1 - j_2}$$
Where $j_1$ = number of 1-DOF joints (revolute or prismatic), $j_2$ = number of 2-DOF joints (higher pairs/cam-follower).

---

## 3. Spatial Representations & 2D / 3D Rotation Matrices

### 2D Rotation Matrix
Rotating a frame $\{B\}$ relative to frame $\{A\}$ by an angle $\theta$ counter-clockwise:
$$R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$$

### Fundamental Properties of Rotation Matrices ($SO(3)$ - Special Orthogonal Group)
1. **Orthogonality:** $R^T = R^{-1} \implies R \cdot R^T = R^T \cdot R = I_{3\times3}$
2. **Proper Rotation:** $\det(R) = +1$ (A determinant of $-1$ represents a reflection, not a pure rotation).
3. **Column/Row Norms:** The columns (and rows) of $R$ form an orthonormal basis ($\|r_i\| = 1$, $r_i \cdot r_j = 0$ for $i \neq j$).

### Basic 3D Rotation Matrices (Rotations about Principal Axes)

#### 1. Rotation about X-axis by angle $\alpha$:
$$R_x(\alpha) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{bmatrix}$$

#### 2. Rotation about Y-axis by angle $\beta$:
$$R_y(\beta) = \begin{bmatrix} \cos\beta & 0 & \sin\beta \\ 0 & 1 & 0 \\ -\sin\beta & 0 & \cos\beta \end{bmatrix}$$
*(Note the sign: the top-right is $+\sin\beta$ and bottom-left is $-\sin\beta$)*.

#### 3. Rotation about Z-axis by angle $\gamma$:
$$R_z(\gamma) = \begin{bmatrix} \cos\gamma & -\sin\gamma & 0 \\ \sin\gamma & \cos\gamma & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

---

### Composition of Rotations Rule
- **Post-Multiplication (Current / Moving Frame):** If rotation occurs about the axes of the *moving frame*, **post-multiply** the transformation matrices ($R_{new} = R_1 \cdot R_2$).
- **Pre-Multiplication (Fixed / Reference Frame):** If rotation occurs about the axes of the *fixed base frame*, **pre-multiply** the transformation matrices ($R_{new} = R_2 \cdot R_1$).

---

## 4. Homogeneous Transformation Matrices ($4 \times 4$ HTM)

To represent both **Orientation ($3 \times 3$)** and **Translation ($3 \times 1$)** in a single linear matrix operation:

$$T = \begin{bmatrix} R_{3\times3} & P_{3\times1} \\ 0_{1\times3} & 1 \end{bmatrix} = \begin{bmatrix} r_{11} & r_{12} & r_{13} & P_x \\ r_{21} & r_{22} & r_{23} & P_y \\ r_{31} & r_{32} & r_{33} & P_z \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

### Inverse of a Homogeneous Transformation Matrix
Because $R$ is orthogonal ($R^{-1} = R^T$):
$$T^{-1} = \begin{bmatrix} R^T & -R^T P \\ 0 & 1 \end{bmatrix}$$
> **GATE Exam Tip:** Never compute the $4 \times 4$ matrix inverse using minors/cofactors! Always use the formula $T^{-1} = \begin{bmatrix} R^T & -R^T P \\ 0 & 1 \end{bmatrix}$.

---

## 5. Denavit-Hartenberg (DH) Convention

The standard DH convention uses **4 parameters** ($a_i, \alpha_i, d_i, \theta_i$) to fully describe the relative position and orientation between two consecutive link coordinate frames $\{i-1\}$ and $\{i\}$.

### The 4 DH Parameters:
| Parameter | Name | Definition | Axis of Measurement | Variable for |
| :---: | :--- | :--- | :---: | :---: |
| $\theta_i$ | **Joint Angle** | Angle of rotation from $X_{i-1}$ to $X_i$ | About $Z_{i-1}$ axis | Revolute Joint ($R$) |
| $d_i$ | **Link Offset** | Distance along $Z_{i-1}$ from origin $O_{i-1}$ to the intersection of $X_i$ with $Z_{i-1}$ | Along $Z_{i-1}$ axis | Prismatic Joint ($P$) |
| $a_i$ | **Link Length** | Distance from $Z_{i-1}$ to $Z_i$ along common normal $X_i$ | Along $X_i$ axis | Constant (Link geometry) |
| $\alpha_i$ | **Link Twist** | Angle of rotation from $Z_{i-1}$ to $Z_i$ | About $X_i$ axis | Constant (Link geometry) |

### Frame Assignment Rules (Standard DH):
1. **$Z_{i-1}$ Axis:** Aligned along the axis of actuation of joint $i$ (axis of rotation for revolute, axis of translation for prismatic).
2. **$X_i$ Axis:** Directed along the **common normal** from $Z_{i-1}$ to $Z_i$. If $Z_{i-1}$ and $Z_i$ intersect, $X_i$ is perpendicular to the plane containing both axes ($X_i = \pm Z_{i-1} \times Z_i$).
3. **$Y_i$ Axis:** Complete right-handed Cartesian coordinate system: $Y_i = Z_i \times X_i$.

### Individual Link Transformation Matrix ($^{i-1}T_i$):
$$^{i-1}T_i = \text{Rot}(Z_{i-1}, \theta_i) \cdot \text{Trans}(Z_{i-1}, d_i) \cdot \text{Trans}(X_i, a_i) \cdot \text{Rot}(X_i, \alpha_i)$$

$$\boxed{^{i-1}T_i = \begin{bmatrix} \cos\theta_i & -\sin\theta_i \cos\alpha_i & \sin\theta_i \sin\alpha_i & a_i \cos\theta_i \\ \sin\theta_i & \cos\theta_i \cos\alpha_i & -\cos\theta_i \sin\alpha_i & a_i \sin\theta_i \\ 0 & \sin\alpha_i & \cos\alpha_i & d_i \\ 0 & 0 & 0 & 1 \end{bmatrix}}$$

---

## 6. Robot Performance Metrics: Accuracy, Repeatability, Resolution

* **Spatial Resolution:** The smallest increment of movement that the robot control system can command and produce.
  $$\text{Total Resolution} = \text{Control Resolution} + \text{Mechanical Inaccuracies}$$
* **Accuracy:** The ability of the robot end-effector to reach a commanded mathematical target coordinate in 3D space.
* **Repeatability:** The ability of the robot to return to the **exact same position and orientation** repeatedly under identical commands.
  * In industrial robotics: $\text{Repeatability} \ll \text{Accuracy}$ (i.e. robots are far more repeatable, typically $\pm 0.02\text{ mm}$, than accurate, $\pm 0.5\text{ mm}$).
* **Compliance:** The displacement of the end-effector per unit applied force/moment ($C = \Delta x / F$). High compliance = flexibility/softness; low compliance = high rigidity.

---

## 7. Solved High-Yield GATE Problem

### Problem:
A 2-DOF planar articulated robot arm has link lengths $L_1 = 40\text{ cm}$ and $L_2 = 30\text{ cm}$. Joint angles are measured relative to the previous link, with $\theta_1 = 30^\circ$ and $\theta_2 = 45^\circ$.
1. Find the coordinates $(X_E, Y_E)$ of the end-effector.
2. Find the overall orientation angle $\phi$ of the end-effector frame relative to base.

### Solution:
Using Forward Kinematics for a 2R planar manipulator:
$$X_E = L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2)$$
$$Y_E = L_1 \sin\theta_1 + L_2 \sin(\theta_1 + \theta_2)$$
$$\phi = \theta_1 + \theta_2 = 30^\circ + 45^\circ = 75^\circ$$

Substitute the numerical values:
- $\cos(30^\circ) = \frac{\sqrt{3}}{2} \approx 0.8660$, $\sin(30^\circ) = 0.5000$
- $\cos(75^\circ) = \cos(45^\circ + 30^\circ) = \frac{\sqrt{6} - \sqrt{2}}{4} \approx 0.2588$
- $\sin(75^\circ) = \sin(45^\circ + 30^\circ) = \frac{\sqrt{6} + \sqrt{2}}{4} \approx 0.9659$

$$X_E = 40(0.8660) + 30(0.2588) = 34.64 + 7.76 = \mathbf{42.40\text{ cm}}$$
$$Y_E = 40(0.5000) + 30(0.9659) = 20.00 + 28.98 = \mathbf{48.98\text{ cm}}$$
$$\phi = \mathbf{75^\circ}$$
