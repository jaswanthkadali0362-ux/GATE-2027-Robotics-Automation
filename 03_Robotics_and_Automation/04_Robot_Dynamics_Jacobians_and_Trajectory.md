# Robotics & Automation: Manipulator Jacobians, Dynamics & Trajectory Planning

**Target:** GATE 2027 Robotics & Automation (Section A.3)  
**High-Yield Weightage:** 8–10 Marks | **Focus:** Velocity Kinematics, Singularities, Statics Duality, Lagrangian Dynamics & Polynomial Trajectories

---

## 1. Velocity Kinematics & Manipulator Jacobian ($J$)

### 1.1 Definition & Structure
The Manipulator Jacobian maps joint velocities $\dot{q}$ to end-effector Cartesian velocities $v = [\dot{x}, \dot{y}, \dot{z}, \omega_x, \omega_y, \omega_z]^T$:
$$\begin{bmatrix} v_e \\ \omega_e \end{bmatrix} = J(q) \cdot \dot{q} = \begin{bmatrix} J_v(q) \\ J_\omega(q) \end{bmatrix} \dot{q}$$

For an $n$-link serial manipulator with joint coordinates $q = [q_1, q_2, \dots, q_n]^T$:
* For **Revolute Joint $i$** ($\dot{q}_i = \dot{\theta}_i$):
  $$J_{v_i} = z_{i-1} \times (p_e - p_{i-1}), \quad J_{\omega_i} = z_{i-1}$$
* For **Prismatic Joint $i$** ($\dot{q}_i = \dot{d}_i$):
  $$J_{v_i} = z_{i-1}, \quad J_{\omega_i} = \vec{0}$$

---

### 1.2 Two-Link Planar (2R) Manipulator Jacobian Example

```
(Base O) ----[L1]---- (Joint 2) ----[L2]---- (End-Effector P)
```
Forward Kinematics:
$$x_e = L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2)$$
$$y_e = L_1 \sin\theta_1 + L_2 \sin(\theta_1 + \theta_2)$$

Differentiating with respect to time:
$$\begin{bmatrix} \dot{x}_e \\ \dot{y}_e \end{bmatrix} = \begin{bmatrix} -L_1 \sin\theta_1 - L_2 \sin(\theta_1 + \theta_2) & -L_2 \sin(\theta_1 + \theta_2) \\ L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2) & L_2 \cos(\theta_1 + \theta_2) \end{bmatrix} \begin{bmatrix} \dot{\theta}_1 \\ \dot{\theta}_2 \end{bmatrix}$$

---

## 2. Singularities & Static Force Duality

### 2.1 Singularity Analysis ($\det(J) = 0$)
A kinematic singularity occurs when the Jacobian matrix loses full rank:
$$\det(J(q)) = 0$$

For the 2R planar arm:
$$\det(J) = (-L_1 s_1 - L_2 s_{12})(L_2 c_{12}) - (-L_2 s_{12})(L_1 c_1 + L_2 c_{12}) = L_1 L_2 \sin\theta_2$$
* **Singularity Condition:** $\sin\theta_2 = 0 \implies \mathbf{\theta_2 = 0^\circ \text{ or } 180^\circ}$.
  * $\theta_2 = 0^\circ$: Arm is fully stretched outwards (Boundary singularity).
  * $\theta_2 = 180^\circ$: Arm is folded back onto itself (Interior singularity).
* **Consequences at Singularity:**
  1. Loss of one or more degrees of freedom (cannot move along radial direction).
  2. Inverse Jacobian $J^{-1}$ does not exist $\implies$ Infinite joint velocities required for finite cartesian velocity.
  3. Infinite mechanical advantage in the singular direction.

---

### 2.2 Static Force-Torque Duality
By the principle of virtual work ($\tau^T \delta q = F^T \delta x$):
$$\boxed{\tau = J^T(q) \cdot F}$$
Where $F = [f_x, f_y, f_z, m_x, m_y, m_z]^T$ is the Cartesian wrench exerted by the end-effector on the environment, and $\tau = [\tau_1, \tau_2, \dots, \tau_n]^T$ is the required vector of actuator joint torques.

---

## 3. Robot Arm Dynamics: Euler-Lagrange Formulation

### 3.1 Lagrangian Definition:
$$\mathcal{L} = K - P \quad (\text{Kinetic Energy } K - \text{Potential Energy } P)$$

Euler-Lagrange equation for each joint $i$:
$$\frac{d}{dt}\left( \frac{\partial \mathcal{L}}{\partial \dot{q}_i} \right) - \frac{\partial \mathcal{L}}{\partial q_i} = \tau_i$$

### 3.2 Canonical Equations of Motion:
$$\boxed{M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) = \tau}$$
* $M(q)$: Symmetric, positive-definite **Inertia Matrix** ($M = M^T > 0$).
* $C(q, \dot{q})\dot{q}$: **Coriolis and Centrifugal force** vector ($\dot{q}_i^2$ terms are centrifugal; $\dot{q}_i \dot{q}_j$ terms are Coriolis).
* $G(q) = \frac{\partial P}{\partial q}$: **Gravity loading** vector.
* **Skew-Symmetry Property (Crucial for Control):** The matrix $\dot{M}(q) - 2C(q, \dot{q})$ is **skew-symmetric** ($x^T (\dot{M} - 2C) x = 0$).

---

## 4. Trajectory Generation & Motion Planning

### 4.1 Cubic Polynomial Trajectory ($q(t)$)
Given initial state $(t_0 = 0, q_0, v_0 = 0)$ and final state $(t_f, q_f, v_f = 0)$:
$$q(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$$
Boundary conditions:
1. $q(0) = q_0 \implies a_0 = q_0$
2. $\dot{q}(0) = 0 \implies a_1 = 0$
3. $q(t_f) = q_f \implies a_2 = \frac{3(q_f - q_0)}{t_f^2}$
4. $\dot{q}(t_f) = 0 \implies a_3 = -\frac{2(q_f - q_0)}{t_f^3}$

$$\boxed{q(t) = q_0 + \frac{3(q_f - q_0)}{t_f^2} t^2 - \frac{2(q_f - q_0)}{t_f^3} t^3}$$

### 4.2 Linear Segment with Parabolic Blends (LSPB / Trapezoidal Velocity)
Consists of 3 distinct phases:
1. **Acceleration Phase ($0 \le t \le t_b$):** Constant acceleration $\ddot{q} = \alpha \implies$ velocity increases linearly.
2. **Cruise Phase ($t_b \le t \le t_f - t_b$):** Constant velocity $V = \dot{q}_{\max} \implies \ddot{q} = 0$.
3. **Deceleration Phase ($t_f - t_b \le t \le t_f$):** Constant deceleration $\ddot{q} = -\alpha \implies$ velocity ramps down to 0.

* **Blend Time ($t_b$) Formula:**
  $$t_b = \frac{q_0 - q_f + V t_f}{V}$$
* **Constraint for Feasibility:** $t_b \le \frac{t_f}{2} \implies V > \frac{q_f - q_0}{t_f}$.
