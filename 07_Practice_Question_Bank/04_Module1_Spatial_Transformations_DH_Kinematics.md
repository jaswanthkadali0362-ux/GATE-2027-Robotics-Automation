# MODULE 1: SPATIAL TRANSFORMATIONS & FORWARD KINEMATICS
## 100 Practice Questions — GATE RA 2027

**Topics:** Rotation Matrices, HTM, DH Parameters, Forward Kinematics, Euler Angles, Quaternions

---

### SECTION A: ROTATION MATRICES & SO(3) — 25 Questions

**Q1.1 [NAT - 2M]** A rotation matrix $R_z(\theta)$ rotates vectors about the Z-axis. What is the value of $\det(R_z(45°))$?
> **Answer:** 1. All rotation matrices in SO(3) satisfy $\det(R) = +1$.

**Q1.2 [MCQ - 1M]** Which property is NOT satisfied by a valid rotation matrix $R \in SO(3)$?
- (A) $R^T R = I$
- (B) $\det(R) = +1$
- (C) $R^T = -R$
- (D) $R^{-1} = R^T$
> **Answer: (C).** The transpose of a rotation matrix equals its inverse, not its negative.

**Q1.3 [NAT - 2M]** The elementary rotation matrix $R_x(90°)$ has which value at position (2,3)?
> **Answer:** −1. $R_x(\theta)_{23} = -\sin(90°) = -1$.

**Q1.4 [MCQ - 2M]** A frame is rotated first 30° about the fixed X-axis, then 60° about the fixed Z-axis. The combined rotation (fixed-axis convention) is:
- (A) $R_z(60°) \cdot R_x(30°)$
- (B) $R_x(30°) \cdot R_z(60°)$
- (C) $R_z(30°) \cdot R_x(60°)$
- (D) $R_x(60°) \cdot R_z(30°)$
> **Answer: (A).** For fixed-axis rotations, pre-multiply: the last rotation goes on the left.

**Q1.5 [MCQ - 1M]** The minimum number of parameters needed to represent an arbitrary orientation in 3D space is:
- (A) 9
- (B) 4
- (C) 3
- (D) 6
> **Answer: (C).** Minimum is 3 (e.g., Euler angles).

**Q1.6 [NAT - 2M]** Given $R = R_y(30°)$, compute the element at row 1, column 3 (1-indexed).
> **Answer:** $\sin(30°) = 0.5$.

**Q1.7 [MCQ - 2M]** Two rotation matrices $R_1$ and $R_2$: is $R_1 \cdot R_2$ guaranteed to be a valid rotation matrix?
- (A) Yes, always
- (B) No, only if they commute
- (C) Only if $R_1 = R_2$
- (D) Only for planar rotations
> **Answer: (A).** SO(3) is closed under multiplication.

**Q1.8 [MCQ - 1M]** The unit quaternion scalar part for a rotation by angle $\theta$ about axis $\hat{e}$ is:
- (A) $\sin(\theta/2)$
- (B) $\cos(\theta/2)$
- (C) $\cos(\theta)$
- (D) $\sin(\theta)$
> **Answer: (B).** $q_0 = \cos(\theta/2)$.

**Q1.9 [NAT - 2M]** For the ZYZ Euler angle convention, how many gimbal lock configurations exist?
> **Answer:** 2 (when $\beta = 0°$ or $\beta = 180°$).

**Q1.10 [MCQ - 2M]** A rotation by $\theta = 60°$ about $\hat{k} = (1/\sqrt{3}, 1/\sqrt{3}, 1/\sqrt{3})$. The trace of the rotation matrix:
- (A) 1.0
- (B) 1.5
- (C) 2.0
- (D) 2.5
> **Answer: (C).** trace$(R) = 1 + 2\cos(60°) = 2.0$.

**Q1.11 [NAT - 2M]** What is the rotation angle $\theta$ encoded in a rotation matrix with trace = 0?
> **Answer:** $\theta = \arccos\left(\frac{0-1}{2}\right) = 120°$.

**Q1.12 [MCQ - 1M]** A valid unit quaternion $(q_0, q_x, q_y, q_z)$ satisfies:
- (A) $q_0^2 + q_x^2 + q_y^2 + q_z^2 = 0$
- (B) $q_0^2 + q_x^2 + q_y^2 + q_z^2 = 1$
- (C) $q_0 = 1$
- (D) $q_x^2 + q_y^2 + q_z^2 = 1$
> **Answer: (B).** Unit quaternion norm = 1.

**Q1.13 [MCQ - 1M]** Which representation avoids gimbal lock?
- (A) Euler angles
- (B) Rotation matrix
- (C) Quaternions
- (D) Axis-angle with fixed magnitude
> **Answer: (C).** Unit quaternions avoid gimbal lock.

**Q1.14 [NAT - 2M]** For $R = R_z(180°)$, what is the element at row 2, column 2?
> **Answer:** $\cos(180°) = -1$.

**Q1.15 [MCQ - 2M]** The roll-pitch-yaw angles are rotations about (fixed axes):
- (A) Z-Y-X
- (B) X-Y-Z
- (C) Z-Y-Z
- (D) X-Z-X
> **Answer: (A).** Roll=X, Pitch=Y, Yaw=Z in fixed frame gives ZYX combined matrix.

**Q1.16 [NAT - 2M]** $R_{11}$ of ZYX combined rotation ($\psi=60°, \theta=45°$): $R_{11} = \cos\psi\cos\theta = ?$
> **Answer:** $\cos(60°)\cos(45°) = 0.5 \times 0.7071 \approx 0.354$.

**Q1.17 [MCQ - 2M]** For a current-axis rotation: first about current Z by $\alpha$, then current Y by $\beta$. Combined $R$:
- (A) $R_z(\alpha) \cdot R_y(\beta)$
- (B) $R_y(\beta) \cdot R_z(\alpha)$
- (C) $R_y(\alpha) \cdot R_z(\beta)$
- (D) $R_z(\beta) \cdot R_y(\alpha)$
> **Answer: (A).** Intrinsic (current-axis): post-multiply, first rotation on left.

**Q1.18 [NAT - 2M]** What is $\|R\vec{v}\|$ when $R$ is a rotation matrix and $\|\vec{v}\| = 5$?
> **Answer:** 5. Rotation matrices preserve vector norms.

**Q1.19 [NAT - 2M]** Does $R_x(30°) \cdot R_z(45°) = R_z(45°) \cdot R_x(30°)$?
> **Answer:** No. Rotation matrices do not commute in general.

**Q1.20 [MCQ - 1M]** The columns of a rotation matrix $R$ represent:
- (A) The rows of the original frame
- (B) The axes of the rotated frame expressed in the original frame
- (C) Eigenvalues
- (D) The Jacobian columns
> **Answer: (B).** Each column of R is a unit vector of the child frame in the parent frame.

**Q1.21 [NAT - 2M]** For $R_x(\alpha)$, what is element (3,2)?
> **Answer:** $\sin\alpha$.

**Q1.22 [MCQ - 2M]** Successive pre-multiplication for fixed-axis rotations means:
- (A) Later rotations applied first (right-side)
- (B) Later rotations applied last but placed on left
- (C) All rotations are identical
- (D) Only Z-axis rotations can be composed
> **Answer: (B).** For fixed-axis: $R = R_n \cdot ... \cdot R_2 \cdot R_1$ — later rotation goes to the left (pre-multiplied).

**Q1.23 [NAT - 2M]** The inverse of a rotation matrix $R$ equals:
> **Answer:** $R^T$ (its transpose).

**Q1.24 [MCQ - 1M]** Which of these is a proper rotation (no reflection)?
- (A) $\det(R) = -1$
- (B) $\det(R) = 0$
- (C) $\det(R) = +1$
- (D) $R = -I$
> **Answer: (C).** Proper rotation: $\det(R) = +1$.

**Q1.25 [NAT - 2M]** For $R = I$ (identity), what rotation angle does this represent?
> **Answer:** $0°$ (or $360°$, $720°$, etc.) — no rotation.

---

### SECTION B: HOMOGENEOUS TRANSFORMATION MATRICES — 25 Questions

**Q1.26 [MCQ - 1M]** A 4×4 HTM encodes:
- (A) Only rotation
- (B) Only translation
- (C) Both rotation and translation
- (D) Scaling and rotation
> **Answer: (C).**

**Q1.27 [NAT - 2M]** For $T = \begin{bmatrix}R & p \\ 0 & 1\end{bmatrix}$, the top-right block of $T^{-1}$ is:
> **Answer:** $-R^T p$.

**Q1.28 [NAT - 2M]** The determinant of any valid 4×4 HTM equals:
> **Answer:** 1.

**Q1.29 [MCQ - 1M]** The bottom row of a valid HTM always equals:
- (A) $(1, 0, 0, 0)$
- (B) $(0, 0, 0, 1)$
- (C) $(0, 0, 1, 0)$
- (D) Arbitrary values
> **Answer: (B).**

**Q1.30 [MCQ - 2M]** A point $P$ in frame $\{B\}$: to express it in frame $\{A\}$ given $^A T_B$:
- (A) $^A p = (^A T_B)^{-1} \cdot ^B p$
- (B) $^A p = ^A T_B \cdot ^B p$
- (C) $^A p = ^B p \cdot ^A T_B$
- (D) $^A p = ^B T_A \cdot ^A p$
> **Answer: (B).**

**Q1.31 [NAT - 2M]** $^A T_C$ given $^A T_B$ and $^B T_C$:
> **Answer:** $^A T_C = ^A T_B \cdot ^B T_C$.

**Q1.32 [MCQ - 1M]** Homogeneous coordinate for a free vector $\vec{v}=(v_x,v_y,v_z)$ is:
- (A) $(v_x,v_y,v_z,1)$
- (B) $(v_x,v_y,v_z,0)$
- (C) $(v_x,v_y,v_z,\pi)$
- (D) $(0,0,0,v_z)$
> **Answer: (B).**

**Q1.33 [MCQ - 2M]** "Translate by $d$ along Y" transformation matrix has $d$ at position:
- (A) Row 1, Col 4
- (B) Row 2, Col 4
- (C) Row 3, Col 4
- (D) Row 4, Col 2
> **Answer: (B).**

**Q1.34 [NAT - 2M]** How many independent parameters does a general HTM have?
> **Answer:** 6 (3 rotation + 3 translation).

**Q1.35 [MCQ - 1M]** A free vector $(v_x,v_y,v_z,0)^T$ multiplied by HTM $T$:
- (A) Gets rotated and translated
- (B) Only rotated (not translated)
- (C) Only translated
- (D) Unchanged
> **Answer: (B).**

**Q1.36 [NAT - 2M]** A point $P=(1,2,3)$ in frame $\{B\}$. $^AT_B = \text{Trans}(1,0,0)\cdot R_z(90°)$. What is the X-coordinate in $\{A\}$?
> **Answer:** $^AT_B = \begin{bmatrix}0&-1&0&1\\1&0&0&0\\0&0&1&0\\0&0&0&1\end{bmatrix}$. $^Ap_x = 0(1)+(-1)(2)+0(3)+1 = -1$. **X = -1**.

**Q1.37 [MCQ - 1M]** Which transformation preserves handedness?
- (A) Reflection
- (B) Scaling by -1
- (C) Rotation
- (D) Inversion
> **Answer: (C).**

**Q1.38 [NAT - 2M]** $R_x(\theta)$ as a 4×4 HTM — what is element $(3,2)$?
> **Answer:** $\sin\theta$.

**Q1.39 [MCQ - 2M]** The expression $^0T_n = \prod_{i=1}^{n} {}^{i-1}T_i$ represents:
- (A) Inverse kinematics
- (B) Forward kinematics via HTM chain
- (C) Jacobian computation
- (D) Dynamic equations
> **Answer: (B).**

**Q1.40 [NAT - 2M]** After $T = \text{Trans}(0,5,0)\cdot R_x(90°)$, what is element $(2,4)$?
> **Answer:** 5.

**Q1.41 [MCQ - 1M]** $T_1 T_2 T_3$: this gives the pose of frame $\{3\}$ relative to:
- (A) Frame $\{3\}$ itself
- (B) Frame $\{0\}$ (world/base)
- (C) Frame $\{2\}$
- (D) Frame $\{1\}$
> **Answer: (B).**

**Q1.42 [MCQ - 2M]** Compare "translate then rotate (fixed)" vs "rotate then translate (fixed)":
- (A) Same result
- (B) Different HTMs
- (C) Same rotation, different translation
- (D) Same translation, different rotation
> **Answer: (B).**

**Q1.43 [NAT - 2M]** Number of constrained (redundant) parameters in a 4×4 HTM:
> **Answer:** 10 (16 total - 6 free = 10 constrained).

**Q1.44 [MCQ - 2M]** The "screw motion" combines:
- (A) Two translations
- (B) Translation along and rotation about the same axis
- (C) Two rotations about perpendicular axes
- (D) Translation perpendicular to rotation axis
> **Answer: (B).**

**Q1.45 [NAT - 2M]** $T = \begin{bmatrix}0&-1&0&2\\1&0&0&1\\0&0&1&0\\0&0&0&1\end{bmatrix}$. X-translation of this frame origin from world:
> **Answer:** 2.

**Q1.46 [MCQ - 1M]** The rotation matrix block of an HTM occupies rows/columns:
- (A) Rows 1-3, Cols 1-3
- (B) Rows 1-4, Cols 1-4
- (C) Row 4, Cols 1-3
- (D) Rows 1-3, Col 4
> **Answer: (A).**

**Q1.47 [NAT - 2M]** $^AT_B$ translation vector for: first translate $(1,0,0)$ then rotate about current Z by $90°$.
> **Answer:** $(1,0,0)^T$ (intrinsic: post-multiply, translation stays fixed).

**Q1.48 [MCQ - 2M]** The inverse HTM $T^{-1}$ has the translation block equal to:
- (A) $-p$
- (B) $R^Tp$
- (C) $-R^Tp$
- (D) $-Rp$
> **Answer: (C).**

**Q1.49 [NAT - 2M]** Element $(1,4)$ of $T_1 \cdot T_2$ where $T_1 = \text{Trans}(3,0,0)$ (identity rotation) and $T_2 = R_z(90°)$ (zero translation)?
> **Answer:** 3. Translation of $T_1T_2$ = $R_1 p_2 + p_1 = I\cdot[0,0,0]^T+[3,0,0]^T = [3,0,0]^T$. Element $(1,4) = 3$.

**Q1.50 [MCQ - 1M]** A transformation that both rotates and translates a rigid body is called:
- (A) A Lie group element
- (B) A rigid body transformation / SE(3) element
- (C) A shear transformation
- (D) An affine transformation with scaling
> **Answer: (B).** Elements of the Special Euclidean group SE(3).

---

### SECTION C: DH PARAMETERS & FORWARD KINEMATICS — 50 Questions

**Q1.51 [MCQ - 1M]** DH variable for a revolute joint is:
- (A) $a_i$
- (B) $d_i$
- (C) $\alpha_i$
- (D) $\theta_i$
> **Answer: (D).**

**Q1.52 [MCQ - 1M]** DH variable for a prismatic joint is:
- (A) $\theta_i$
- (B) $d_i$
- (C) $a_i$
- (D) $\alpha_i$
> **Answer: (B).**

**Q1.53 [NAT - 2M]** The DH $\alpha_i$ parameter is measured about which axis?
> **Answer:** $X_i$ axis (common normal).

**Q1.54 [NAT - 2M]** The DH $a_i$ (link length) is measured along which axis?
> **Answer:** $X_i$ axis (common normal between $Z_{i-1}$ and $Z_i$).

**Q1.55 [MCQ - 1M]** The DH transformation order is:
- (A) $T_x \to R_x \to T_z \to R_z$
- (B) $R_z \to T_z \to T_x \to R_x$
- (C) $R_x \to T_x \to R_z \to T_z$
- (D) $T_z \to R_z \to R_x \to T_x$
> **Answer: (B).** $R_z(\theta_i) \cdot T_z(d_i) \cdot T_x(a_i) \cdot R_x(\alpha_i)$.

**Q1.56 [NAT - 2M]** 2R robot: $L_1=L_2=0.5$ m, $\theta_1=0°$, $\theta_2=90°$. End-effector Y-coordinate:
> **Answer:** $y = 0.5\sin(0°)+0.5\sin(90°) = 0 + 0.5 = 0.5$ m.

**Q1.57 [NAT - 2M]** 2R robot: $L_1=1$ m, $L_2=0.5$ m, $\theta_1=90°$, $\theta_2=-90°$. End-effector X-coordinate:
> **Answer:** $x = 1\cos(90°)+0.5\cos(0°) = 0+0.5 = 0.5$ m.

**Q1.58 [MCQ - 1M]** A SCARA robot (RRPR) has how many DOF?
- (A) 3
- (B) 4
- (C) 5
- (D) 6
> **Answer: (B).** 4 DOF.

**Q1.59 [NAT - 2M]** Maximum reach of 2R robot with $L_1=0.4$ m, $L_2=0.3$ m:
> **Answer:** $r_{max} = 0.4+0.3 = 0.7$ m.

**Q1.60 [MCQ - 2M]** Minimum reachable radius of 2R robot when $L_1 > L_2$:
- (A) $L_1+L_2$
- (B) $|L_1-L_2|$
- (C) $L_1-L_2$
- (D) 0
> **Answer: (B).** $r_{min} = |L_1-L_2|$.

**Q1.61 [NAT - 2M]** 3-link planar: $L_1=L_2=L_3=1$ m, $\theta_1=\theta_2=\theta_3=60°$. X-coordinate of end-effector:
> **Answer:** $x = \cos60°+\cos120°+\cos180° = 0.5-0.5-1 = -1.0$ m.

**Q1.62 [MCQ - 1M]** DH $\theta_i$ is measured from $X_{i-1}$ to $X_i$ about which axis?
- (A) $X_{i-1}$
- (B) $Z_{i-1}$
- (C) $Z_i$
- (D) Y-axis
> **Answer: (B).**

**Q1.63 [MCQ - 2M]** For a PUMA-560 style 6R robot, how many DH matrices for full FK?
- (A) 3
- (B) 4
- (C) 6
- (D) 12
> **Answer: (C).** 6 matrices.

**Q1.64 [NAT - 2M]** 3R planar: $L_1=L_2=L_3=1$ m, all joints at $\theta=0°$. End-effector X:
> **Answer:** $x = 1+1+1 = 3.0$ m.

**Q1.65 [MCQ - 2M]** The number of unique IK solutions for a general 6R robot can be at most:
- (A) 2
- (B) 4
- (C) 8
- (D) 16
> **Answer: (D).** Up to 16 solutions.

**Q1.66 [NAT - 2M]** 2R robot: $L_1=L_2=1$ m. For end-effector at $(2,0)$: number of IK solutions?
> **Answer:** 1 (boundary of workspace, fully extended).

**Q1.67 [MCQ - 2M]** 2R robot IK: $\cos\theta_2 = C_2$ gives:
- (A) 1 solution for $\theta_2$
- (B) 2 solutions: $\theta_2 = \pm\arccos(C_2)$
- (C) No solution
- (D) Infinite solutions
> **Answer: (B).**

**Q1.68 [NAT - 2M]** 2R robot: $L_1=L_2=1$ m, target at $(1,0)$. Compute $\cos\theta_2$:
> **Answer:** $C_2 = \frac{1+0-1-1}{2(1)(1)} = -0.5$. $\theta_2 = \pm120°$.

**Q1.69 [MCQ - 1M]** $\text{atan2}(1, 0)$ in degrees equals:
- (A) 0°
- (B) 90°
- (C) 180°
- (D) 45°
> **Answer: (B).**

**Q1.70 [NAT - 2M]** For SCARA robot pick-and-place, which DOF handles vertical Z-motion?
> **Answer:** The prismatic joint $d_3$.

**Q1.71 [MCQ - 2M]** Workspace of a 3R spherical wrist robot is:
- (A) A disk
- (B) A sphere
- (C) A cylinder
- (D) A torus
> **Answer: (B).**

**Q1.72 [NAT - 2M]** For a 6-DOF robot with spherical wrist, IK decouples into:
> **Answer:** 2 sub-problems: (1) 3-DOF position IK for wrist center, (2) 3-DOF orientation IK.

**Q1.73 [MCQ - 2M]** Wrist center formula for 6R robot with spherical wrist (offset $d_6$):
- (A) $p_{wc} = p_{ee} + d_6\hat{a}$
- (B) $p_{wc} = p_{ee} - d_6\hat{a}$
- (C) $p_{wc} = d_6\hat{a}$
- (D) $p_{wc} = p_{ee}/d_6$
> **Answer: (B).** Subtract approach vector scaled by $d_6$.

**Q1.74 [MCQ - 1M]** Grübler DOF formula for planar mechanisms: $M = 3(n-1) - 2j_1 - j_2$. For a 4-bar linkage (4 links, 4 revolute joints), $M$:
- (A) 0
- (B) 1
- (C) 2
- (D) 3
> **Answer: (B).** $M = 3(3) - 2(4) = 9-8 = 1$.

**Q1.75 [NAT - 2M]** Slider-crank mechanism DOF (4 links, 3 revolute + 1 prismatic joints):
> **Answer:** $M = 3(3) - 2(4) = 9-8 = 1$ DOF.

**Q1.76 [MCQ - 1M]** A delta parallel robot for 3-DOF position has how many actuated joints?
- (A) 2
- (B) 3
- (C) 4
- (D) 6
> **Answer: (B).**

**Q1.77 [MCQ - 2M]** Repeatability vs. accuracy in robotics:
- (A) Repeatability is always worse than accuracy
- (B) Accuracy = consistency; repeatability = absolute precision
- (C) Repeatability is usually better (smaller error) than absolute accuracy
- (D) Both are identical
> **Answer: (C).**

**Q1.78 [NAT - 2M]** A 3R robot with $L_1=L_2=L_3=0.5$ m and $\theta_1=\theta_2=\theta_3=0°$: end-effector X-position?
> **Answer:** $x = 0.5+0.5+0.5 = 1.5$ m.

**Q1.79 [MCQ - 2M]** A 7-DOF robot arm used for a 6-DOF task has:
- (A) Fewer solutions than a 6-DOF arm
- (B) Exactly one solution
- (C) Kinematic redundancy (infinite solutions for same pose)
- (D) No solution
> **Answer: (C).**

**Q1.80 [NAT - 2M]** The Pieper criterion for closed-form IK requires:
> **Answer:** Three consecutive joint axes intersect at a point (spherical wrist) or are parallel.

**Q1.81 [MCQ - 1M]** FK gives unique output for given joint angles:
- (A) True (FK is one-to-one)
- (B) False, FK is many-to-one
- (C) FK gives infinite outputs
- (D) FK is undefined
> **Answer: (A).** FK (direct kinematics) is always unique.

**Q1.82 [MCQ - 2M]** The Denavit-Hartenberg convention reduces the number of HTM parameters per link from 6 to:
- (A) 6
- (B) 4
- (C) 3
- (D) 2
> **Answer: (B).** 4 parameters: $(\theta_i, d_i, a_i, \alpha_i)$.

**Q1.83 [NAT - 2M]** A 6-DOF robot arm FK gives the end-effector pose: how many equations describe it (position + full rotation matrix)?
> **Answer:** 12 (3 position + 9 rotation matrix elements, though only 6 are independent due to constraints).

**Q1.84 [MCQ - 1M]** Which coordinate system is used by the DH convention for Z-axis alignment?
- (A) Z-axis along the joint axis (revolute joint rotation axis or prismatic joint translation direction)
- (B) Z-axis always vertical
- (C) Z-axis perpendicular to link
- (D) Z-axis toward end-effector
> **Answer: (A).**

**Q1.85 [MCQ - 2M]** For a 2R planar robot, the forward kinematics (end-effector position) as a function of joint angles is:
- (A) Linear in $\theta_1, \theta_2$
- (B) Nonlinear (trigonometric) in $\theta_1, \theta_2$
- (C) Polynomial in $\theta_1, \theta_2$
- (D) Exponential in $\theta_1, \theta_2$
> **Answer: (B).**

**Q1.86 [NAT - 2M]** For a PUMA arm with spherical wrist, the first 3 joints (waist, shoulder, elbow) are responsible for:
> **Answer:** Positioning the wrist center (3D position control).

**Q1.87 [MCQ - 1M]** The end-effector orientation in a 6R PUMA robot is controlled by:
- (A) Joints 1-3
- (B) Joints 4-6 (spherical wrist)
- (C) Joint 6 only
- (D) All 6 joints equally
> **Answer: (B).**

**Q1.88 [NAT - 2M]** For a RRR spherical wrist, the Euler angle IK uses which 3 angles?
> **Answer:** The three wrist joint angles $(\theta_4, \theta_5, \theta_6)$ equivalent to ZYZ or ZYX Euler angles.

**Q1.89 [MCQ - 2M]** Joint angle limits in a robot restrict the:
- (A) Number of DOF
- (B) Reachable workspace and available IK solutions
- (C) Jacobian rank
- (D) End-effector mass
> **Answer: (B).**

**Q1.90 [NAT - 2M]** A 2R robot with $L_1=1, L_2=0.5$ m: what is the area of the annular workspace?
> **Answer:** $r_{min}=0.5$ m, $r_{max}=1.5$ m. Area $= \pi(r_{max}^2-r_{min}^2) = \pi(2.25-0.25) = 2\pi \approx 6.28$ m².

**Q1.91 [MCQ - 1M]** Which robot type has a toroidal (donut-shaped) workspace?
- (A) Cylindrical robot
- (B) 2R planar robot (when $L_1 > L_2$)
- (C) SCARA robot
- (D) Cartesian robot
> **Answer: (B).**

**Q1.92 [NAT - 2M]** The joint space of a 6-DOF robot is a subset of what mathematical space?
> **Answer:** $\mathbb{R}^6$ (6-dimensional real space), typically with joint angle bounds.

**Q1.93 [MCQ - 2M]** The SE(3) group has dimension (number of DOF):
- (A) 3
- (B) 4
- (C) 6
- (D) 12
> **Answer: (C).** SE(3) = 3D rotation + 3D translation = 6 DOF.

**Q1.94 [NAT - 2M]** How many kinematic parameters (total DH parameters) does a 6-DOF robot have?
> **Answer:** $6 \times 4 = 24$ DH parameters total ($\theta_i, d_i, a_i, \alpha_i$ per joint), though 6 are variables.

**Q1.95 [MCQ - 1M]** The forward kinematics mapping $f: q \to (x,y,z,\phi,\theta,\psi)$ is:
- (A) Linear
- (B) Nonlinear
- (C) Affine
- (D) Undefined for robots with > 3 DOF
> **Answer: (B).**

**Q1.96 [NAT - 2M]** For a 3-DOF cylindrical robot (RRP) with $r=0.6$, $\theta=45°$, $z=0.8$ m. Cartesian position?
> **Answer:** $x=r\cos\theta=0.6\cos45°\approx0.424$ m, $y=0.6\sin45°\approx0.424$ m, $z=0.8$ m.

**Q1.97 [MCQ - 2M]** A spherical (polar) robot (RRP configuration in spherical coordinates) defines its workspace as:
- (A) A cube
- (B) A hollow sphere
- (C) A cylinder
- (D) A torus
> **Answer: (B).** Spherical robots have a sphere-like (partial sphere annular) workspace.

**Q1.98 [NAT - 2M]** For a Cartesian (PPP) robot with travel ranges $X=[0,1]$ m, $Y=[0,0.8]$ m, $Z=[0,0.5]$ m: workspace volume?
> **Answer:** $V = 1 \times 0.8 \times 0.5 = 0.4$ m³.

**Q1.99 [MCQ - 1M]** Which robot configuration provides the simplest (no cross-coupling) forward kinematics?
- (A) 6R robot
- (B) PUMA arm
- (C) Cartesian (PPP) robot
- (D) SCARA robot
> **Answer: (C).** Cartesian: $x=d_1, y=d_2, z=d_3$.

**Q1.100 [NAT - 2M]** For a 2R robot in elbow-up configuration with $\theta_2=+120°$ and $L_1=L_2=1$ m at target $(x,y)$: what is $\cos\theta_2$?
> **Answer:** $\cos(120°) = -0.5$.

---
*Module 1 Complete — 100 Questions*
*Subjects: Rotation Matrices, HTM, DH Parameters, Forward Kinematics*
