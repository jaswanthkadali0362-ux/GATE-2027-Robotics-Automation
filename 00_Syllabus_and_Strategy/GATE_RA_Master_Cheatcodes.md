# ⚡ GATE RA 2027: Master Cheatcodes & Shortcut Formula Sheet

**Target:** Fast 10-Second Problem Solving, Standard Traps & Memory Tricks  
**Student:** Jaswanth | **Goal:** 85+ Marks in GATE RA 2027 & Top Rank for IISc RBCCPS

---

## 🤖 1. Robotics & Spatial Transformations Cheatcodes

### Cheatcode 1: Instant 2D/3D Inverse Transformation
* **Trap:** Never invert a $4 \times 4$ Homogeneous Transformation Matrix using Gaussian elimination or adjoints (takes 10 mins).
* **Shortcut ($10\text{ seconds}$):**
  $$\text{If } T = \begin{bmatrix} R & P \\ 0 & 1 \end{bmatrix} \implies \boxed{T^{-1} = \begin{bmatrix} R^T & -R^T P \\ 0 & 1 \end{bmatrix}}$$
  *(Just transpose the $3 \times 3$ rotation part, and compute $-R^T P$ for the position column!)*

### Cheatcode 2: Fast Check for Valid 3D Rotation Matrix ($SO(3)$)
To verify if a given $3 \times 3$ matrix is a pure rotation:
1. $\det(R) = +1$ (If $\det(R) = -1$, it has a reflection—invalid!).
2. Length of every column vector $= 1$ ($r_1^2 + r_2^2 + r_3^2 = 1$).
3. Dot product of any two distinct columns $= 0$ (orthogonal basis).
4. For any rotation matrix, the trace gives the rotation angle $\theta$:
   $$\boxed{\text{Trace}(R) = r_{11} + r_{22} + r_{33} = 1 + 2\cos\theta} \implies \cos\theta = \frac{\text{Trace}(R) - 1}{2}$$

### Cheatcode 3: Denavit-Hartenberg (D-H) 4-Parameter Identification
Remember the exact axes of measurement with the **$Z-X-Z-X$ alternation trick**:
1. **$\theta_i$ (Joint Angle):** Rotation about **$Z_{i-1}$** (from $X_{i-1}$ to $X_i$).
2. **$d_i$ (Link Offset):** Translation along **$Z_{i-1}$** (from origin $O_{i-1}$ to intersection with $X_i$).
3. **$a_i$ (Link Length):** Translation along **$X_i$** (common normal between $Z_{i-1}$ and $Z_i$).
4. **$\alpha_i$ (Link Twist):** Rotation about **$X_i$** (from $Z_{i-1}$ to $Z_i$).

### Cheatcode 4: Planar & Spatial Mobility (Degrees of Freedom)
* **Planar Mechanism (2D):**
  $$\boxed{M = 3(N - 1) - 2j_1 - j_2}$$
* **Spatial Robot (3D with 1-DOF joints):**
  $$\boxed{M = 6(N - 1) - 5j}$$
  * *Trap:* Always count the fixed ground frame as Link 1 ($N = \text{moving links} + 1$).

---

## ⚡ 2. Mechatronics, Sensors & Actuators Cheatcodes

### Cheatcode 5: Stepper Motor Step Angle ($\beta$)
$$\boxed{\beta = \frac{360^\circ}{m \cdot N_r}}$$
* $m$ = number of stator phases, $N_r$ = number of rotor teeth.
* **Full-step:** $\text{Steps/rev} = 360^\circ / \beta$.
* **Half-step:** $\beta_{\text{half}} = \beta / 2 \implies \text{Steps/rev} = 2 \times (\text{Full-step})$.
* **Pulses required for $N$ revolutions:** $\text{Total Pulses} = N \times (\text{Steps/rev})$.

### Cheatcode 6: DC Motor Stall Torque & No-Load Speed
$$\boxed{\omega_0 = \frac{V}{K_e}} \quad (\text{No-Load Speed at } T=0)$$
$$\boxed{T_{\text{stall}} = \frac{K_t \cdot V}{R_a}} \quad (\text{Stall Torque at } \omega=0)$$
* Maximum mechanical power output occurs at exactly **half no-load speed** and **half stall torque**:
  $$\boxed{P_{\max} = \frac{1}{4} \omega_0 T_{\text{stall}} = \frac{V^2 \cdot K_t}{4 R_a K_e}}$$

### Cheatcode 7: Wheatstone Strain Gauge Bridge Voltage
* **Quarter Bridge (1 active gauge):** $V_o \approx \frac{V_s}{4} \cdot (GF \cdot \epsilon)$
* **Half Bridge (2 active gauges, push-pull):** $V_o \approx \frac{V_s}{2} \cdot (GF \cdot \epsilon)$
* **Full Bridge (4 active gauges):** $V_o \approx V_s \cdot (GF \cdot \epsilon)$
* *Tip:* Full bridge gives **$4\times$ higher sensitivity** than quarter bridge with automatic temperature compensation!

### Cheatcode 8: Maximum Power Transfer & Thevenin
* Condition for DC load $R_L$: $\boxed{R_L = R_{th}}$
* Maximum power delivered: $\boxed{P_{\max} = \frac{V_{th}^2}{4 R_{th}}}$
* *Trap:* Efficiency at maximum power transfer is **always 50%**, NOT 100%!

### Cheatcode 9: Digital Flip-Flops & Binary Counters
* Number of flip-flops ($n$) required for a MOD-$N$ counter:
  $$\boxed{2^{n-1} < N \le 2^n}$$
  * Example: To count up to 10 states (MOD-10 Decade Counter): $2^3 < 10 \le 2^4 \implies \mathbf{n = 4\text{ flip-flops}}$ with $2^4 - 10 = 6$ unused states.

---

## ⚙️ 3. Mechanical Stream (Part B2) Cheatcodes

### Cheatcode 10: Mohr’s Circle for Fast Principal Stresses
$$\text{Centre: } C = \left(\frac{\sigma_x + \sigma_y}{2}, 0\right), \quad \text{Radius: } R = \tau_{\max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$$
$$\boxed{\sigma_1 = C + R}, \quad \boxed{\sigma_2 = C - R}$$
* **Pure Shear State ($\sigma_x = -\sigma_y = 0, \tau_{xy} = \tau$):** Centre $= (0, 0)$, Principal stresses $\sigma_1 = +\tau, \sigma_2 = -\tau$ inclined at $45^\circ$.

### Cheatcode 11: Coriolis Acceleration Direction Trick
$$\boxed{a^c = 2 \cdot \omega \cdot v_{\text{rel}}}$$
* **Instant Direction Rule:** Look at the linear velocity vector $v_{\text{rel}}$ and rotate it by $90^\circ$ in the direction of link rotation $\omega$.

### Cheatcode 12: Mechanical Vibration Isolation Golden Rule
$$\boxed{\text{Transmissibility } TR < 1 \iff \frac{\omega}{\omega_n} > \sqrt{2} \approx 1.414}$$
* At resonance ($\omega = \omega_n \implies r = 1$), damping reduces vibration amplitude ($TR = \frac{\sqrt{1+4\zeta^2}}{2\zeta}$).
* In the isolation region ($r > \sqrt{2}$), adding more damping slightly *increases* force transmissibility!

### Cheatcode 13: Ball vs. Roller Bearing Rating Life ($L_{10}$)
$$\boxed{L_{10} = \left(\frac{C}{P}\right)^p}$$
* $p = 3$ for **Ball Bearings** (Point contact)
* $p = 10/3 \approx 3.33$ for **Roller Bearings** (Line contact)
* If load $P$ is doubled ($2P$), life of a ball bearing drops to $\frac{1}{2^3} = \frac{1}{8}\text{ of original life}$ (87.5% reduction!).
