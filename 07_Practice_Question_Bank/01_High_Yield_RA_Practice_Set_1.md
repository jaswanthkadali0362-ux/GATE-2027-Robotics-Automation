# High-Yield Practice Problem Set 1 (Part A + Part B2)

**Subjects Covered:** Robotics Kinematics, Sensors/Actuators, Circuits, Python, Mechanics of Materials & Vibrations  
**Format:** Official GATE Standard (MCQ, MSQ, NAT) with Detailed Step-by-Step Solutions

---

## Question 1 (Robotics Kinematics — NAT)
A 3-DOF planar arm with link lengths $L_1 = 30\text{ cm}$, $L_2 = 20\text{ cm}$, and $L_3 = 10\text{ cm}$ has joint angles $\theta_1 = 0^\circ$, $\theta_2 = 90^\circ$, and $\theta_3 = -90^\circ$ relative to the preceding link. What is the $X$-coordinate of the end-effector with respect to the base frame (in cm)?

### Solution:
For a 3-link planar manipulator:
$$X = L_1 \cos(\theta_1) + L_2 \cos(\theta_1 + \theta_2) + L_3 \cos(\theta_1 + \theta_2 + \theta_3)$$
Calculate the cumulative angles:
- $\phi_1 = \theta_1 = 0^\circ \implies \cos(0^\circ) = 1$
- $\phi_2 = \theta_1 + \theta_2 = 0^\circ + 90^\circ = 90^\circ \implies \cos(90^\circ) = 0$
- $\phi_3 = \theta_1 + \theta_2 + \theta_3 = 0^\circ + 90^\circ - 90^\circ = 0^\circ \implies \cos(0^\circ) = 1$

$$X = 30(1) + 20(0) + 10(1) = 30 + 0 + 10 = \mathbf{40\text{ cm}}$$

**Answer:** `40` (or `40.0`)

---

## Question 2 (Stepper Motor & Actuators — MCQ)
A 4-phase hybrid stepper motor has 50 teeth on the rotor. The step angle of the motor operating in half-stepping mode is:
- (A) $1.8^\circ$
- (B) $0.9^\circ$
- (C) $3.6^\circ$
- (D) $0.45^\circ$

### Solution:
1. Full step angle formula:
   $$\beta_{\text{full}} = \frac{360^\circ}{m \cdot N_r} = \frac{360^\circ}{4 \times 50} = \frac{360^\circ}{200} = 1.8^\circ$$
2. In **half-stepping mode**, the step angle is halved:
   $$\beta_{\text{half}} = \frac{\beta_{\text{full}}}{2} = \frac{1.8^\circ}{2} = \mathbf{0.9^\circ}$$

**Correct Option:** **(B)**

---

## Question 3 (Sensors & Signal Conditioning — NAT)
A strain gauge with an unstrained resistance of $R = 120\ \Omega$ and a gauge factor $GF = 2.0$ is connected in a quarter-bridge Wheatstone circuit excited by a DC voltage $V_s = 10\text{ V}$. When subjected to an axial strain $\epsilon = 1000\ \mu\epsilon$ ($1000 \times 10^{-6}$), the bridge output voltage $V_o$ (in mV) is:

### Solution:
For a quarter-bridge with 1 active strain gauge:
$$V_o \approx \frac{V_s}{4} \cdot (GF \cdot \epsilon)$$
Substitute the given values:
$$V_o = \frac{10}{4} \times (2.0 \times 1000 \times 10^{-6}) = 2.5 \times (2 \times 10^{-3}) = 5.0 \times 10^{-3}\text{ V} = \mathbf{5.0\text{ mV}}$$

**Answer:** `5.0`

---

## Question 4 (Python Programming — MCQ)
Consider the following recursive Python function:
```python
def fun(n):
    if n <= 1:
        return 1
    if n % 2 == 0:
        return fun(n // 2) + n
    else:
        return fun(n - 1) * 2

print(fun(6))
```
What is the printed output?
- (A) 16
- (B) 22
- (C) 18
- (D) 20

### Solution:
Trace the recursion stack:
1. `fun(6)`: $n=6$ (even) $\implies$ returns `fun(3) + 6`
2. `fun(3)`: $n=3$ (odd) $\implies$ returns `fun(2) * 2`
3. `fun(2)`: $n=2$ (even) $\implies$ returns `fun(1) + 2`
4. `fun(1)`: Base case $\implies$ returns `1`
- Unwinding:
  - `fun(2) = 1 + 2 = 3`
  - `fun(3) = 3 * 2 = 6`
  - `fun(6) = 6 + 6 = 12` (if trace: `fun(6) = fun(3) + 6 = 6 + 6 = 12`).

---

## Question 5 (Mechanical Vibrations & Part B2 — NAT)
A single-degree-of-freedom spring-mass-damper system has a mass $m = 10\text{ kg}$, spring stiffness $k = 4000\text{ N/m}$, and a viscous damping coefficient $c = 40\text{ N}\cdot\text{s/m}$. The damping ratio $\zeta$ of the system is (rounded to 2 decimal places):

### Solution:
1. Natural frequency $\omega_n$:
   $$\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{4000}{10}} = \sqrt{400} = 20\text{ rad/s}$$
2. Critical damping coefficient $c_c$:
   $$c_c = 2 m \omega_n = 2 \times 10 \times 20 = 400\text{ N}\cdot\text{s/m}$$
3. Damping ratio $\zeta$:
   $$\zeta = \frac{c}{c_c} = \frac{40}{400} = \mathbf{0.10}$$

**Answer:** `0.1` (or `0.10`)
