# MODULE 2: MANIPULATOR JACOBIANS, STATICS & DYNAMICS
## 100 Practice Questions — GATE RA 2027

**Topics:** Geometric Jacobian, Singularities, Manipulability, Static Force-Torque Duality, Lagrangian Dynamics, Trajectory Planning

---

### SECTION A: JACOBIAN MATRIX — 30 Questions

**Q2.1 [MCQ - 1M]** The Jacobian matrix $J(q)$ relates:
- (A) Joint forces to Cartesian forces
- (B) Joint velocities to end-effector Cartesian velocities
- (C) Joint angles to end-effector positions
- (D) Link lengths to workspace size
> **Answer: (B).** $\dot{x} = J(q)\dot{q}$.

**Q2.2 [NAT - 2M]** For a 2R planar robot with $L_1=L_2=1$ m and $\theta_1=90°$, $\theta_2=0°$: what is $\det(J)$?
> **Answer:** $\det(J) = L_1 L_2 \sin\theta_2 = 1\cdot1\cdot\sin(0°) = 0$. This is a singularity!

**Q2.3 [MCQ - 2M]** Singularities of a robot manipulator occur when:
- (A) $\det(J) = 0$ (Jacobian loses rank)
- (B) All joint angles are zero
- (C) The robot reaches maximum speed
- (D) Payload exceeds capacity
> **Answer: (A).**

**Q2.4 [NAT - 2M]** For 2R planar robot, $\det(J) = L_1 L_2 \sin\theta_2$. Singularity occurs at $\theta_2 = ?$
> **Answer:** $\theta_2 = 0°$ (fully extended, boundary singularity) or $\theta_2 = 180°$ (fully folded, interior singularity).

**Q2.5 [MCQ - 2M]** The manipulability measure $\mu = \sqrt{\det(JJ^T)}$ equals zero when:
- (A) The robot moves slowly
- (B) The robot is at a singularity ($J$ loses rank)
- (C) $\theta_2 = 90°$
- (D) The payload is zero
> **Answer: (B).**

**Q2.6 [NAT - 2M]** For 2R robot: $J = \begin{bmatrix}-L_1s_1-L_2s_{12} & -L_2s_{12}\\ L_1c_1+L_2c_{12} & L_2c_{12}\end{bmatrix}$. At $\theta_1=0°, \theta_2=90°$ with $L_1=L_2=1$: compute $\det(J)$.
> **Answer:** $s_1=0, c_1=1, s_{12}=\sin(90°)=1, c_{12}=\cos(90°)=0$.
$J = \begin{bmatrix}-1&-1\\1&0\end{bmatrix}$. $\det(J) = (-1)(0)-(−1)(1) = 0+1 = 1$. So $\mu = 1$.

**Q2.7 [MCQ - 1M]** The geometric Jacobian columns corresponding to revolute joints are:
- (A) $J_v^i = \hat{z}_{i-1}$, $J_\omega^i = \hat{z}_{i-1} \times (p_n - p_{i-1})$
- (B) $J_v^i = \hat{z}_{i-1} \times (p_n - p_{i-1})$, $J_\omega^i = \hat{z}_{i-1}$
- (C) $J_v^i = p_n - p_{i-1}$, $J_\omega^i = 0$
- (D) $J_v^i = 0$, $J_\omega^i = p_n$
> **Answer: (B).** Linear velocity part: $z_{i-1}\times(p_n-p_{i-1})$; angular velocity part: $z_{i-1}$.

**Q2.8 [MCQ - 2M]** The Jacobian columns for a prismatic joint are:
- (A) $J_v^i = \hat{z}_{i-1}\times(p_n-p_{i-1})$, $J_\omega^i = \hat{z}_{i-1}$
- (B) $J_v^i = \hat{z}_{i-1}$, $J_\omega^i = 0$
- (C) $J_v^i = 0$, $J_\omega^i = \hat{z}_{i-1}$
- (D) $J_v^i = p_n$, $J_\omega^i = 0$
> **Answer: (B).** Prismatic: translation along $\hat{z}_{i-1}$, no rotation contribution.

**Q2.9 [NAT - 2M]** For a $6\times n$ Jacobian, a singularity (rank deficiency) means the robot loses how many DOF?
> **Answer:** It loses $n - \text{rank}(J)$ DOF — the number of directions it cannot move in task space.

**Q2.10 [MCQ - 1M]** The condition number of the Jacobian measures:
- (A) Robot speed
- (B) How close the robot is to a singularity
- (C) Joint torque
- (D) Payload capacity
> **Answer: (B).** High condition number = near singularity.

**Q2.11 [NAT - 2M]** The manipulability ellipsoid axes are given by:
> **Answer:** The singular values of $J$ (from SVD: $J = U\Sigma V^T$). The ellipsoid axes lengths are the singular values $\sigma_i$.

**Q2.12 [MCQ - 2M]** For a 2R planar robot at the fully-extended ($\theta_2=0°$) configuration, the robot:
- (A) Has maximum dexterity
- (B) Is at a wrist singularity
- (C) Is at a boundary (arm) singularity and cannot move radially
- (D) Can move in all directions equally
> **Answer: (C).** Fully extended = boundary singularity; radial direction is lost.

**Q2.13 [NAT - 2M]** For a 2R planar manipulator, the velocity kinematics $\dot{x} = J\dot{q}$. If $J$ is $2\times2$ and invertible, what is $\dot{q}$?
> **Answer:** $\dot{q} = J^{-1}\dot{x}$.

**Q2.14 [MCQ - 1M]** When the Jacobian is non-square ($m < n$, more joints than task DOF), the pseudoinverse is:
- (A) $J^+ = J^T(JJ^T)^{-1}$
- (B) $J^+ = (J^TJ)^{-1}J^T$
- (C) $J^+ = J^{-1}$
- (D) $J^+ = J$
> **Answer: (A).** Right pseudoinverse: $J^+ = J^T(JJ^T)^{-1}$ for redundant robots.

**Q2.15 [NAT - 2M]** For the 2R robot at $\theta_1=30°$, $\theta_2=45°$, $L_1=0.5$, $L_2=0.4$:
Compute the linear velocity of end-effector X-component if $\dot\theta_1=1$ rad/s, $\dot\theta_2=-2$ rad/s.
> **Answer:** $\dot{x} = (-L_1\sin\theta_1-L_2\sin(\theta_1+\theta_2))\dot\theta_1 + (-L_2\sin(\theta_1+\theta_2))\dot\theta_2$
$= (-0.5\sin30°-0.4\sin75°)(1)+(-0.4\sin75°)(-2)$
$= (-0.25-0.3864)(1)+(0.7728) = -0.6364+0.7728 = +0.1364$ m/s.

**Q2.16 [MCQ - 2M]** Jacobian singularities where the last three joint axes of a 6R robot become coplanar are called:
- (A) Shoulder singularities
- (B) Elbow singularities
- (C) Wrist singularities
- (D) Base singularities
> **Answer: (C).** Wrist singularity: occurs when wrist joints 4, 5, 6 become coplanar.

**Q2.17 [NAT - 2M]** For a robot at singularity, what happens to the required joint velocities for a finite Cartesian task-space velocity?
> **Answer:** Joint velocities become infinite (or unbounded) in the singular direction.

**Q2.18 [MCQ - 1M]** The analytical Jacobian $J_a$ relates:
- (A) $\dot{q}$ to $\dot{X}$ where $X$ is minimal orientation representation (Euler angles)
- (B) $\dot{q}$ to angular velocity $\omega$
- (C) Joint torques to Cartesian forces
- (D) Position to velocity
> **Answer: (A).** Analytical Jacobian uses Euler angle rates; geometric Jacobian uses $\omega$.

**Q2.19 [NAT - 2M]** For a 3R planar robot, the Jacobian is $2\times3$ (position control only). What is the rank of $J$ at a non-singular configuration?
> **Answer:** 2 (full row rank for a 3-DOF planar robot controlling 2D position).

**Q2.20 [MCQ - 2M]** The manipulability index $\mu = \sqrt{\det(JJ^T)}$ has units (for a robot with link length in meters):
- (A) m²/s²
- (B) m² (for planar robot)
- (C) Dimensionless
- (D) rad/s
> **Answer: (B).** For a 2R robot Jacobian in meters, $\mu$ has units of m².

**Q2.21 [NAT - 2M]** For a 2R robot with $L_1=L_2=1$ m at $\theta_2=90°$ (best dexterity): compute $\mu$.
> **Answer:** $\mu = L_1 L_2 |\sin\theta_2| = 1\cdot1\cdot\sin(90°) = 1$ m².

**Q2.22 [MCQ - 1M]** The task-space dimension for a SCARA robot doing planar pick-and-place (X, Y, yaw) is:
- (A) 2
- (B) 3
- (C) 4
- (D) 6
> **Answer: (B).** SCARA controls $(x, y, z)$ position and $z$-axis rotation = 4D, but for planar tasks = 3D.

**Q2.23 [NAT - 2M]** If a robot Jacobian $J$ is $6\times6$ and has condition number $\kappa = \sigma_{max}/\sigma_{min}$: what $\kappa$ value indicates perfect isotropy?
> **Answer:** $\kappa = 1$ (all singular values equal — isotropic manipulability).

**Q2.24 [MCQ - 2M]** The differential motion relationship $\delta x = J \delta q$ means:
- (A) Large joint motions produce proportional Cartesian motions
- (B) Small (infinitesimal) joint changes produce proportional Cartesian changes
- (C) Joint velocities equal Cartesian velocities
- (D) Forward kinematics is linear
> **Answer: (B).**

**Q2.25 [NAT - 2M]** The angular velocity of the end-effector $\omega$ contributed by revolute joint $i$ is:
> **Answer:** $\omega_i = \dot\theta_i \hat{z}_{i-1}$ (rotation rate times unit Z-axis vector of frame $i-1$).

**Q2.26 [MCQ - 1M]** For a 6R robot, the full $6\times6$ Jacobian maps $\dot{q} \in \mathbb{R}^6$ to:
- (A) $[\dot{p}^T, \omega^T]^T \in \mathbb{R}^6$
- (B) $\dot{p} \in \mathbb{R}^3$
- (C) $\omega \in \mathbb{R}^3$
- (D) Joint torques
> **Answer: (A).** Maps to 6D spatial velocity: $[v_x,v_y,v_z,\omega_x,\omega_y,\omega_z]^T$.

**Q2.27 [NAT - 2M]** For redundant resolution using the pseudoinverse $\dot{q} = J^+\dot{x} + (I-J^+J)\dot{q}_0$, what does $(I-J^+J)$ represent?
> **Answer:** The null-space projection matrix — any $\dot{q}_0$ in the null space of $J$ produces zero Cartesian velocity change.

**Q2.28 [MCQ - 2M]** Near a singularity, the damped least squares (DLS) inverse is used instead of the pseudoinverse because:
- (A) It is computationally faster
- (B) It bounds joint velocities to prevent infinite values near singularities
- (C) It increases robot accuracy
- (D) It eliminates singularities entirely
> **Answer: (B).**

**Q2.29 [NAT - 2M]** For the condition $\dot{x} = J\dot{q}$ with $m=n$ (square, invertible J), the joint velocity required for $\dot{x} = [1, 0]^T$ m/s using $J = \begin{bmatrix}0&-1\\1&0\end{bmatrix}$:
> **Answer:** $\dot{q} = J^{-1}\dot{x}$. $J^{-1} = \begin{bmatrix}0&1\\-1&0\end{bmatrix}$ (since $J$ is a $90°$ rotation). $\dot{q} = [0, -1]^T$ rad/s.

**Q2.30 [MCQ - 1M]** The number of Jacobian columns equals the robot's:
- (A) DOF (number of joints $n$)
- (B) Number of task dimensions $m$
- (C) Number of links
- (D) End-effector DOF
> **Answer: (A).**

---

### SECTION B: STATICS — FORCE-TORQUE DUALITY — 20 Questions

**Q2.31 [MCQ - 1M]** The static force-torque duality relationship is:
- (A) $F = J\tau$
- (B) $\tau = J^T F$
- (C) $\tau = J^{-1} F$
- (D) $F = \tau \cdot J^T$
> **Answer: (B).** $\tau = J^T(q) F$ where $F$ is the end-effector wrench.

**Q2.32 [NAT - 2M]** 2R planar robot ($L_1=0.6$ m, $L_2=0.4$ m) at $\theta_1=0°$, $\theta_2=90°$. External force $F_x=50$ N at end-effector. Compute $\tau_1$.
> **Answer:** At $\theta_1=0°, \theta_2=90°$:
$s_1=0,c_1=1,s_{12}=1,c_{12}=0$
$J = \begin{bmatrix}-L_1s_1-L_2s_{12}&-L_2s_{12}\\L_1c_1+L_2c_{12}&L_2c_{12}\end{bmatrix} = \begin{bmatrix}-0.4&-0.4\\0.6&0\end{bmatrix}$
$\tau = J^T[50,0]^T = \begin{bmatrix}-0.4&0.6\\-0.4&0\end{bmatrix}[50,0]^T = [-20, -20]^T$ N·m.
$\tau_1 = -20$ N·m.

**Q2.33 [MCQ - 2M]** The principle of virtual work states $\tau^T\delta q = F^T\delta x$, which directly leads to:
- (A) $\tau = J F$
- (B) $F = J\tau$
- (C) $\tau = J^T F$
- (D) $\delta q = J\delta x$
> **Answer: (C).**

**Q2.34 [NAT - 2M]** For the 2R robot at $\theta_1=0°, \theta_2=90°$ with $L_1=L_2=0.5$ m: if an external torque $F_z=10$ N·m is applied at end-effector about Z-axis, compute $\tau_1$.
> **Answer:** The Jacobian angular part $J_\omega = [1, 1]^T$ for planar robot (both joints contribute $\hat{z}$). $\tau_1 = J_\omega^{(1)} \cdot F_z = 1 \times 10 = 10$ N·m.

**Q2.35 [MCQ - 1M]** For a robot holding a heavy object in static equilibrium, the Jacobian relates:
- (A) End-effector velocity to joint velocity
- (B) Gravity-induced end-effector force to required joint torques
- (C) Joint limits to payload
- (D) Link inertia to angular momentum
> **Answer: (B).**

**Q2.36 [NAT - 2M]** A 1-DOF robot arm (length $L$, revolute joint at origin) holds a weight $W$ N at the tip. Required joint torque:
> **Answer:** $\tau = J^T \cdot F = L \cdot W$ (moment arm × force = $LW$ N·m).

**Q2.37 [MCQ - 2M]** Near a singularity, the force amplification effect means:
- (A) Large joint torques produce small end-effector forces
- (B) Small joint torques can produce large end-effector forces
- (C) The robot can lift heavier loads
- (D) Joint torques become zero
> **Answer: (B).** At singularity, force transformation has infinite gain in singular directions.

**Q2.38 [NAT - 2M]** For static holding at $\theta_1=0°, \theta_2=0°$ (fully extended), $L_1=L_2=1$ m, weight $W=20$ N at tip: compute $\tau_1$.
> **Answer:** $\tau_1 = W(L_1+L_2) = 20 \times 2 = 40$ N·m.

**Q2.39 [MCQ - 1M]** The transpose of the Jacobian $J^T$ maps from:
- (A) Joint space to task space
- (B) Task-space forces to joint-space torques
- (C) Joint velocities to Cartesian velocities
- (D) Task-space velocities to joint velocities
> **Answer: (B).**

**Q2.40 [NAT - 2M]** For a 2R robot, if $J$ is singular, what happens to the joint torques needed to resist a given end-effector force?
> **Answer:** In some directions, finite end-effector forces require infinite joint torques (force singularity = velocity singularity).

**Q2.41 [MCQ - 2M]** A hydraulic press robot is in a fully-extended singularity to exert large forces with small torques. This exploits:
- (A) Pseudoinverse property
- (B) Mechanical advantage at singularity (force amplification)
- (C) Jacobian condition number
- (D) Null-space motion
> **Answer: (B).**

**Q2.42 [NAT - 2M]** For 2R robot with $L_1=0.5, L_2=0.5$ m at $\theta_1=0°, \theta_2=0°$: Jacobian $J = ?$ (2×2 matrix).
> **Answer:** $J = \begin{bmatrix}-L_2\sin\theta_2 & -L_2\sin\theta_2\\L_1+L_2\cos\theta_2 & L_2\cos\theta_2\end{bmatrix}$. At $\theta_2=0°$: $J = \begin{bmatrix}0&0\\1&0.5\end{bmatrix}$. Wait — properly: $J = \begin{bmatrix}-(L_1+L_2)s_1-L_2s_{12}&...\end{bmatrix}$... at $\theta_1=\theta_2=0°$: $J = \begin{bmatrix}0&0\\1.0&0.5\end{bmatrix}$. $\det(J)=0$ — singular config!

**Q2.43 [MCQ - 1M]** For a compliant robot in force control, the desired contact force is generated using:
- (A) Position control only
- (B) Impedance/force control using $\tau = J^T F_d + ...$
- (C) Joint speed control
- (D) Gravity compensation only
> **Answer: (B).**

**Q2.44 [NAT - 2M]** The wrench in 3D contains how many components?
> **Answer:** 6 (3 force components $F_x,F_y,F_z$ + 3 moment components $M_x,M_y,M_z$).

**Q2.45 [MCQ - 2M]** In hybrid force-motion control, the robot:
- (A) Controls position and force simultaneously in the same direction
- (B) Controls position in unconstrained directions and force in constrained directions
- (C) Uses only torque control
- (D) Requires no Jacobian
> **Answer: (B).**

**Q2.46 [NAT - 2M]** A robot arm balances a payload $m=5$ kg at distance $r=0.8$ m from shoulder. Required shoulder torque (gravity only, $g=10$ m/s²):
> **Answer:** $\tau = mgr = 5 \times 10 \times 0.8 = 40$ N·m.

**Q2.47 [MCQ - 1M]** Gravity torques in a robot are functions of:
- (A) Joint velocities
- (B) Joint accelerations
- (C) Joint angles (configuration)
- (D) Link mass only
> **Answer: (C).**

**Q2.48 [NAT - 2M]** For a 1-link robot (revolute joint, horizontal link, mass $m$ at center): gravity torque at $\theta$ from vertical:
> **Answer:** $\tau_g = mg(L/2)\sin\theta$ (moment of weight about joint).

**Q2.49 [MCQ - 2M]** Force/torque sensors at the robot wrist measure:
- (A) Joint torques
- (B) End-effector contact forces and moments
- (C) Motor current
- (D) Link temperatures
> **Answer: (B).**

**Q2.50 [NAT - 2M]** For a 2R robot with both links horizontal at $\theta_1=\theta_2=0°$, each link mass $m=1$ kg at link center, $L_1=L_2=1$ m, $g=10$ m/s². What is $\tau_1$ (gravity torque at joint 1)?
> **Answer:** $\tau_1 = m_1 g(L_1/2)\cos\theta_1 + m_2 g(L_1+L_2/2)\cos(\theta_1+\theta_2)$... Actually at $\theta=0°$ (horizontal):
$\tau_1 = 1\times10\times0.5 + 1\times10\times1.5 = 5+15 = 20$ N·m.

---

### SECTION C: ROBOT DYNAMICS — 30 Questions

**Q2.51 [MCQ - 1M]** The Euler-Lagrange equation of motion for a robot is:
- (A) $M(q)\ddot{q} + C(q,\dot{q})\dot{q} + G(q) = \tau$
- (B) $F = ma$
- (C) $\tau = J^T F$
- (D) $M(q)\dot{q} + G(q) = \tau$
> **Answer: (A).** $M$=inertia matrix, $C$=Coriolis/centrifugal, $G$=gravity vector.

**Q2.52 [NAT - 2M]** The inertia matrix $M(q)$ in the robot equation of motion is:
> **Answer:** Symmetric positive-definite; relates joint accelerations $\ddot{q}$ to torques needed for inertial effects.

**Q2.53 [MCQ - 2M]** The Coriolis/centrifugal matrix $C(q,\dot{q})$ satisfies which property?
- (A) $\dot{M} - 2C$ is skew-symmetric
- (B) $C$ is symmetric
- (C) $C$ is always diagonal
- (D) $C$ is constant
> **Answer: (A).** $N = \dot{M} - 2C$ is skew-symmetric — important for passivity-based control.

**Q2.54 [NAT - 2M]** For a 1-DOF pendulum with mass $m$, length $L$: the equation of motion is:
> **Answer:** $mL^2\ddot\theta + mgL\sin\theta = \tau$.

**Q2.55 [MCQ - 1M]** The potential energy of a robot arm stored in joints due to gravity gives the:
- (A) Kinetic energy
- (B) Gravity vector $G(q)$
- (C) Coriolis terms
- (D) Motor inertia
> **Answer: (B).** $G(q) = \frac{\partial U}{\partial q}$ where $U$ is potential energy.

**Q2.56 [NAT - 2M]** The kinetic energy of a robot is $K = \frac{1}{2}\dot{q}^T M(q)\dot{q}$. If $M$ doubles in value, how does $K$ change for same $\dot{q}$?
> **Answer:** $K$ doubles (linear in $M$).

**Q2.57 [MCQ - 2M]** For a 2R planar robot with uniform link masses, the inertia matrix $M(q)$ is:
- (A) Diagonal and constant
- (B) Configuration-dependent and full (non-diagonal)
- (C) Always singular
- (D) A scalar
> **Answer: (B).**

**Q2.58 [NAT - 2M]** In the robot equation $M\ddot{q} + C\dot{q} + G = \tau$, for static holding ($\dot{q}=\ddot{q}=0$):
> **Answer:** $G(q) = \tau$ (only gravity torques must be provided).

**Q2.59 [MCQ - 1M]** The Lagrangian $\mathcal{L}$ is defined as:
- (A) $\mathcal{L} = K + U$
- (B) $\mathcal{L} = K - U$
- (C) $\mathcal{L} = K \cdot U$
- (D) $\mathcal{L} = U - K$
> **Answer: (B).** $\mathcal{L} = K - U$ (kinetic minus potential).

**Q2.60 [NAT - 2M]** The Euler-Lagrange equation is: $\frac{d}{dt}\frac{\partial\mathcal{L}}{\partial\dot{q}_i} - \frac{\partial\mathcal{L}}{\partial q_i} = ?$
> **Answer:** $= \tau_i$ (generalized joint force/torque).

**Q2.61 [MCQ - 2M]** Computed torque control (inverse dynamics) for a robot requires:
- (A) Full dynamic model $M, C, G$
- (B) Only the Jacobian
- (C) Only gravity compensation
- (D) Trajectory planning only
> **Answer: (A).** $\tau = M(q)(\ddot{q}_d + K_v e_v + K_p e) + C\dot{q} + G$.

**Q2.62 [NAT - 2M]** For a 1-DOF joint with inertia $I=0.5$ kg·m², required torque to accelerate from rest to $\omega=10$ rad/s in $t=2$ s (constant acceleration):
> **Answer:** $\alpha = 10/2 = 5$ rad/s². $\tau = I\alpha = 0.5\times5 = 2.5$ N·m.

**Q2.63 [MCQ - 1M]** The Newton-Euler formulation for robot dynamics uses:
- (A) Energy-based Lagrangian approach
- (B) Force/moment balance at each link (recursive)
- (C) Jacobian differentiation
- (D) Fourier analysis
> **Answer: (B).**

**Q2.64 [NAT - 2M]** The recursive Newton-Euler algorithm for $n$-link robot has computational complexity:
> **Answer:** $O(n)$ — linear in number of links (efficient for real-time control).

**Q2.65 [MCQ - 2M]** Coriolis forces in robot dynamics arise from:
- (A) Gravity
- (B) Interaction between joint velocities of different joints
- (C) Motor friction
- (D) Link elasticity
> **Answer: (B).**

**Q2.66 [NAT - 2M]** For a 2-DOF robot with inertia matrix $M = \begin{bmatrix}m_{11}&m_{12}\\m_{12}&m_{22}\end{bmatrix}$ and $\tau = [10, 5]^T$ N·m, $G=[3,2]^T$ N·m, $C\dot{q}=[1,1]^T$ N·m: compute $M\ddot{q}$.
> **Answer:** $M\ddot{q} = \tau - C\dot{q} - G = [10,5]^T - [1,1]^T - [3,2]^T = [6,2]^T$ N·m.

**Q2.67 [MCQ - 1M]** Which effect causes the "centrifugal" terms $\dot{q}_i^2$ in robot dynamics?
- (A) Angular velocity of a link interacting with its own angular velocity
- (B) Gravity
- (C) Friction
- (D) Motor back-EMF
> **Answer: (A).**

**Q2.68 [NAT - 2M]** For a robot decoupled by feedback linearization ($u = M(q)\ddot{q}_d + C\dot{q}+G$), the resulting system behaves like:
> **Answer:** A set of decoupled double integrators: $\ddot{q} = \ddot{q}_d$ (or with PD: $\ddot{e} + K_v\dot{e} + K_p e = 0$).

**Q2.69 [MCQ - 2M]** Joint friction in robot dynamics is typically modeled as:
- (A) Coulomb friction $\tau_f = \mu_c \text{sign}(\dot{q})$ and viscous friction $\tau_f = b\dot{q}$
- (B) Only proportional to position $q$
- (C) Independent of velocity
- (D) Coulomb friction only, always zero
> **Answer: (A).**

**Q2.70 [NAT - 2M]** Power consumed by a robot joint is $P = \tau \cdot \dot{q}$. For $\tau = 10$ N·m and $\dot{q} = 2$ rad/s:
> **Answer:** $P = 10 \times 2 = 20$ W.

**Q2.71 [MCQ - 1M]** For a robot arm in free space (no contact) with $\tau=0$, the equation of motion reduces to:
- (A) $M\ddot{q} = 0$ (robot doesn't accelerate)
- (B) $M\ddot{q} + C\dot{q} + G = 0$
- (C) $G = 0$
- (D) Robot moves in straight line
> **Answer: (B).**

**Q2.72 [NAT - 2M]** The Christoffel symbols $c_{ijk}$ appear in the Coriolis matrix $C$. They are computed from:
> **Answer:** $c_{ijk} = \frac{1}{2}\left(\frac{\partial m_{ij}}{\partial q_k}+\frac{\partial m_{ik}}{\partial q_j}-\frac{\partial m_{jk}}{\partial q_i}\right)$.

**Q2.73 [MCQ - 2M]** For a robot with rigid links, the inertia matrix $M(q)$:
- (A) Is constant
- (B) Depends on joint angles $q$
- (C) Is always diagonal
- (D) Is zero at singularities
> **Answer: (B).**

**Q2.74 [NAT - 2M]** A robot joint acts as a first-order system: $\dot{q} = k\tau$ with $k=2$ rad/(N·m·s). For a step torque $\tau=5$ N·m, what is the steady-state $\dot{q}$?
> **Answer:** $\dot{q} = k\tau = 2\times5 = 10$ rad/s.

**Q2.75 [MCQ - 1M]** Forward dynamics computes:
- (A) $\tau$ given $q, \dot{q}, \ddot{q}$
- (B) $\ddot{q}$ given $q, \dot{q}, \tau$
- (C) $q$ given $\tau$
- (D) Trajectory from Jacobian
> **Answer: (B).** Forward dynamics: $\ddot{q} = M^{-1}(\tau - C\dot{q} - G)$.

**Q2.76 [NAT - 2M]** Inverse dynamics computes:
> **Answer:** $\tau$ given the desired motion $q, \dot{q}, \ddot{q}$: $\tau = M(q)\ddot{q} + C(q,\dot{q})\dot{q} + G(q)$.

**Q2.77 [MCQ - 2M]** The energy-shaping passivity-based control for robots guarantees:
- (A) Exponential convergence always
- (B) Asymptotic stability in joint space (PD + gravity compensation)
- (C) Singularity-free operation
- (D) No gravity compensation needed
> **Answer: (B).**

**Q2.78 [NAT - 2M]** PD gravity compensation control law: $\tau = K_p(q_d-q) - K_d\dot{q} + G(q)$. The equilibrium point is at:
> **Answer:** $q = q_d$ (desired joint position), since at equilibrium $\dot{q}=\ddot{q}=0$ gives $K_p(q_d-q)=0 \Rightarrow q=q_d$.

**Q2.79 [MCQ - 1M]** The concept of "natural" frequency of a robot joint is related to:
- (A) Joint mass only
- (B) $\sqrt{K/M}$ where $K$ is joint stiffness and $M$ is inertia
- (C) Maximum joint speed
- (D) Link length
> **Answer: (B).**

**Q2.80 [NAT - 2M]** For a robot joint with inertia $M=0.1$ kg·m² and stiffness $K=1000$ N·m/rad: natural frequency $\omega_n$?
> **Answer:** $\omega_n = \sqrt{K/M} = \sqrt{1000/0.1} = \sqrt{10000} = 100$ rad/s.

---

### SECTION D: TRAJECTORY PLANNING — 20 Questions

**Q2.81 [MCQ - 1M]** A cubic polynomial trajectory $q(t) = a_0+a_1t+a_2t^2+a_3t^3$ for joint motion satisfies how many boundary conditions?
- (A) 2
- (B) 4
- (C) 6
- (D) 8
> **Answer: (B).** 4 conditions: $q(0)=q_0$, $q(T)=q_f$, $\dot{q}(0)=0$, $\dot{q}(T)=0$.

**Q2.82 [NAT - 2M]** For cubic trajectory from $q_0=0°$ to $q_f=90°$ in $T=3$ s with zero initial/final velocities: find $a_2$.
> **Answer:** Using formulas: $a_0=0, a_1=0, a_2=3(q_f-q_0)/T^2=3(90)/9=30°/s^2$, $a_3=-2(q_f-q_0)/T^3=-2(90)/27\approx-6.67°/s^3$.

**Q2.83 [MCQ - 2M]** The LSPB (Linear Segment with Parabolic Blends) profile uses:
- (A) Pure polynomial
- (B) Linear (constant velocity) segment blended with parabolic acceleration/deceleration
- (C) Sinusoidal profile
- (D) Step function
> **Answer: (B).**

**Q2.84 [NAT - 2M]** In an LSPB profile, during the linear segment, joint acceleration = ?
> **Answer:** 0 (constant velocity segment — zero acceleration).

**Q2.85 [MCQ - 1M]** A quintic polynomial trajectory requires how many boundary conditions?
- (A) 4
- (B) 6
- (C) 8
- (D) 10
> **Answer: (B).** 6 conditions: position, velocity, and acceleration at start and end.

**Q2.86 [NAT - 2M]** For a cubic trajectory, the peak velocity occurs at:
> **Answer:** $t = T/2$ (midpoint in time), by symmetry of the cubic polynomial with zero initial/final velocity.

**Q2.87 [MCQ - 2M]** Joint space trajectory planning vs. Cartesian space trajectory:
- (A) Joint space always gives straight-line Cartesian paths
- (B) Cartesian space planning guarantees straight-line end-effector paths but requires IK at each point
- (C) Both give identical results
- (D) Joint space planning is always less smooth
> **Answer: (B).**

**Q2.88 [NAT - 2M]** For a PTP (point-to-point) motion, the end-effector path in Cartesian space is:
> **Answer:** Not specified — it can be any path (not necessarily straight line). Only start and end poses matter.

**Q2.89 [MCQ - 1M]** Continuous path (CP) control is needed for operations like:
- (A) Pick and place
- (B) Arc welding along a seam
- (C) Spot welding
- (D) Loading/unloading
> **Answer: (B).**

**Q2.90 [NAT - 2M]** For a via-point trajectory passing through 3 configurations in 2 segments: each segment requires a separate cubic polynomial. How many unknowns total for natural spline (with $C^1$ continuity)?
> **Answer:** Each segment has 4 coefficients × 2 segments = 8 unknowns. Constraints: 2×(start+end position) + 1×velocity continuity at via point = 5 equations + initial/final velocity = 7 equations. Typically solved with additional constraint = natural spline.

**Q2.91 [MCQ - 2M]** Via points in trajectory planning are used to:
- (A) Define only start and end positions
- (B) Define intermediate configurations the robot must pass through
- (C) Set motor speed limits
- (D) Define obstacle boundaries
> **Answer: (B).**

**Q2.92 [NAT - 2M]** The peak acceleration of a cubic trajectory from $q_0$ to $q_f$ with $T$ duration and zero initial/final velocities is:
> **Answer:** $\ddot{q}_{max} = 6(q_f-q_0)/T^2$ (occurs at $t=0$ and $t=T$).

**Q2.93 [MCQ - 1M]** In joint space trajectory planning, each joint moves from start to goal:
- (A) At the same speed as all other joints
- (B) Independently following its own profile (possibly different speeds)
- (C) Only in synchronized mode
- (D) Only if other joints reach goal first
> **Answer: (B).**

**Q2.94 [NAT - 2M]** To guarantee all joints arrive at goal simultaneously (synchronized motion), they all must complete their motion in the same:
> **Answer:** Time duration $T$ (synchronized joint-space motion).

**Q2.95 [MCQ - 2M]** The trapezoidal velocity profile (LSPB) maximum velocity $V$ compared to average velocity $(q_f-q_0)/T$:
- (A) $V < \frac{q_f-q_0}{T}$
- (B) $V = \frac{q_f-q_0}{T}$
- (C) $V > \frac{q_f-q_0}{T}$
- (D) $V = 2\frac{q_f-q_0}{T}$
> **Answer: (C).** The peak velocity exceeds average since time is spent accelerating/decelerating.

**Q2.96 [NAT - 2M]** For LSPB with blend time $t_b$, total time $T$, displacement $h$: the cruising velocity $V = h/(T-t_b)$. If $h=90°$, $T=4$ s, $t_b=1$ s: find $V$.
> **Answer:** $V = 90°/(4-1) = 90°/3 = 30°/s$.

**Q2.97 [MCQ - 1M]** The advantage of quintic over cubic trajectory is:
- (A) Fewer coefficients needed
- (B) Allows specification of acceleration boundary conditions (smoother jerk)
- (C) Simpler computation
- (D) Higher peak velocity
> **Answer: (B).**

**Q2.98 [NAT - 2M]** For a 6-DOF robot Cartesian straight-line path with $N$ waypoints, how many IK solutions must be computed?
> **Answer:** $N$ IK solutions (one per waypoint). Dense waypoints give smoother Cartesian paths.

**Q2.99 [MCQ - 2M]** Time-optimal trajectory planning minimizes:
- (A) Joint torques
- (B) Energy consumption
- (C) Total motion time subject to torque/velocity limits
- (D) Path length
> **Answer: (C).**

**Q2.100 [NAT - 2M]** For a joint moved by a cubic polynomial $q(t) = a_0+a_1t+a_2t^2+a_3t^3$ with $a_0=0, a_1=0, a_2=30, a_3=-10$ and $T=3$ s: what is $q(1.5)$?
> **Answer:** $q(1.5) = 0+0+30(1.5)^2+(-10)(1.5)^3 = 30(2.25)-10(3.375) = 67.5-33.75 = 33.75°$. (Midpoint of 0° to 90° = 45°... let me recheck: $a_2=3(90)/9=30, a_3=-2(90)/27\approx-6.667$. $q(1.5)=30(2.25)-6.667(3.375)=67.5-22.5=45°$.) **Answer: 45°**.

---
*Module 2 Complete — 100 Questions*
