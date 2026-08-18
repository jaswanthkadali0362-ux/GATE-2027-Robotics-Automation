# 📖 GATE 2027 Robotics & Automation (RA): Ultimate Master Formula Bible

**Complete Syllabus Coverage:** Engineering Mathematics (A.1), Mechatronics & Circuits (A.2), Robotics & Automation (A.3), and Mechanical Engineering (Part B2).  
**Student:** Jaswanth | **Target:** 85+ Marks & Top 10 Rank for IISc Bangalore RBCCPS

---

# SECTION A.1: ENGINEERING MATHEMATICS

## 1. Linear Algebra
1. **Rank-Nullity Theorem:** $\text{Rank}(A) + \text{Nullity}(A) = n$ (number of columns).
2. **Eigenvalue Properties:**
   * $\sum_{i=1}^n \lambda_i = \text{Trace}(A) = \sum_{i=1}^n a_{ii}$
   * $\prod_{i=1}^n \lambda_i = \det(A)$
   * Eigenvalues of $A^k$ are $\lambda_i^k$; eigenvalues of $A^{-1}$ are $1/\lambda_i$.
   * Eigenvalues of symmetric matrix ($A = A^T$) are always **strictly real**.
   * Eigenvalues of skew-symmetric matrix ($A = -A^T$) are **purely imaginary or zero**.
   * Eigenvalues of orthogonal matrix ($A^T = A^{-1}$) have unit modulus ($|\lambda_i| = 1$).
3. **Cayley-Hamilton Theorem:** Every square matrix satisfies its own characteristic equation: $P(A) = 0 \implies A^n + c_{n-1}A^{n-1} + \dots + c_0 I = 0$.
4. **System of Equations ($Ax = b$):**
   * **Unique Solution:** $\text{Rank}(A) = \text{Rank}([A|b]) = n$
   * **Infinite Solutions:** $\text{Rank}(A) = \text{Rank}([A|b]) = r < n$ (Degrees of freedom $= n - r$)
   * **No Solution (Inconsistent):** $\text{Rank}(A) < \text{Rank}([A|b])$
5. **Singular Value Decomposition (SVD):**
   * $A = U \Sigma V^T$, where singular values $\sigma_i = \sqrt{\lambda_i(A^T A)}$.
   * Condition number: $\kappa(A) = \frac{\sigma_{\max}}{\sigma_{\min}}$.

---

## 2. Calculus & Multivariable Optimization
1. **L'Hôpital's Rule:** $\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$ (for $0/0$ or $\infty/\infty$).
2. **Multivariable Maxima/Minima (Hessian Test):**
   * Stationary points: $f_x = 0, f_y = 0$.
   * $r = f_{xx}, s = f_{xy}, t = f_{yy}$, Discriminant $D = rt - s^2$.
   * $D > 0, r > 0 \implies$ **Local Minimum**
   * $D > 0, r < 0 \implies$ **Local Maximum**
   * $D < 0 \implies$ **Saddle Point**
3. **Leibnitz Rule for Differentiation under Integral:**
   $$\frac{d}{dx} \int_{u(x)}^{v(x)} f(x, t) \, dt = \int_{u(x)}^{v(x)} \frac{\partial f}{\partial x} \, dt + f(x, v(x)) \cdot v'(x) - f(x, u(x)) \cdot u'(x)$$

---

## 3. Vector Calculus
1. **Gradient ($\nabla \phi$):** $\nabla \phi = \frac{\partial \phi}{\partial x}\hat{i} + \frac{\partial \phi}{\partial y}\hat{j} + \frac{\partial \phi}{\partial z}\hat{k}$ (Normal to surface $\phi = c$).
2. **Directional Derivative:** $D_{\hat{u}}\phi = \nabla \phi \cdot \hat{u}$ (Maximum rate of change $= \|\nabla \phi\|$).
3. **Divergence:** $\nabla \cdot \vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}$ ($\nabla \cdot \vec{F} = 0 \implies$ Solenoidal).
4. **Curl:** $\nabla \times \vec{F} = \det \begin{bmatrix} \hat{i} & \hat{j} & \hat{k} \\ \partial/\partial x & \partial/\partial y & \partial/\partial z \\ F_x & F_y & F_z \end{bmatrix}$ ($\nabla \times \vec{F} = \vec{0} \implies$ Irrotational/Conservative).
5. **Gauss Divergence Theorem:** $\iint_S \vec{F} \cdot \hat{n} \, dS = \iiint_V (\nabla \cdot \vec{F}) \, dV$.
6. **Stokes' Theorem:** $\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n} \, dS$.
7. **Green's Theorem:** $\oint_C (M \, dx + N \, dy) = \iint_R \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) dx \, dy$.

---

## 4. Differential Equations & Laplace Transforms
1. **Integrating Factor (1st Order ODE):** $\frac{dy}{dx} + P(x)y = Q(x) \implies \text{IF} = e^{\int P(x) dx} \implies y \cdot \text{IF} = \int Q \cdot \text{IF} \, dx + C$.
2. **Exact Equation:** $M dx + N dy = 0$ is exact if $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$.
3. **Laplace Pairs:**
   * $\mathcal{L}\{1\} = \frac{1}{s}, \quad \mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}, \quad \mathcal{L}\{e^{at}\} = \frac{1}{s-a}$
   * $\mathcal{L}\{\sin\omega t\} = \frac{\omega}{s^2+\omega^2}, \quad \mathcal{L}\{\cos\omega t\} = \frac{s}{s^2+\omega^2}$
   * First Shifting: $\mathcal{L}\{e^{at} f(t)\} = F(s - a)$
   * Derivative: $\mathcal{L}\{f'(t)\} = s F(s) - f(0^-)$
4. **Initial & Final Value Theorems:**
   * $f(0^+) = \lim_{s \to \infty} s F(s)$
   * $f(\infty) = \lim_{s \to 0} s F(s)$ (Valid only if all poles of $sF(s)$ lie in Left-Half Plane).

---

## 5. Probability, Statistics & Numerical Methods
1. **Bayes' Theorem:** $P(B_k|A) = \frac{P(A|B_k) P(B_k)}{\sum_{i=1}^n P(A|B_i) P(B_i)}$.
2. **Poisson Distribution:** $P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \implies \text{Mean} = \text{Variance} = \lambda$.
3. **Normal Distribution:** $Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$.
4. **Newton-Raphson Method:** $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ (Order of convergence $= 2$).
5. **Simpson's 1/3 Rule:** $\int_a^b f(x) dx \approx \frac{h}{3} [(y_0 + y_n) + 4(\sum y_{\text{odd}}) + 2(\sum y_{\text{even}})]$ (Requires **even** number of subintervals; error $\propto h^4$).
6. **Simpson's 3/8 Rule:** $\int_a^b f(x) dx \approx \frac{3h}{8} [(y_0 + y_n) + 3(y_1 + y_2 + y_4 + \dots) + 2(y_3 + y_6 + \dots)]$ (Requires multiple of 3 intervals).

---

# SECTION A.2: BASICS OF MECHATRONICS & CIRCUITS

## 1. Electric Circuits & Network Theorems
1. **Kirchhoff's Laws:** $\sum I_{\text{node}} = 0$ (KCL, charge conservation), $\sum V_{\text{loop}} = 0$ (KVL, energy conservation).
2. **Thevenin & Norton Equivalence:** $V_{th} = V_{oc}, \quad I_N = I_{sc}, \quad R_{th} = \frac{V_{oc}}{I_{sc}}$.
3. **Maximum Power Transfer (DC):** $R_L = R_{th} \implies P_{\max} = \frac{V_{th}^2}{4 R_{th}}$ (Efficiency $= 50\%$).
4. **AC Resonance (Series RLC):**
   * $\omega_0 = \frac{1}{\sqrt{LC}} \text{ rad/s}, \quad f_0 = \frac{1}{2\pi\sqrt{LC}} \text{ Hz}$
   * Quality Factor: $Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 C R} = \frac{1}{R}\sqrt{\frac{L}{C}}$
   * Bandwidth: $BW = \frac{\omega_0}{Q} = \frac{R}{L} \text{ rad/s} = \frac{R}{2\pi L} \text{ Hz}$.
5. **3-Phase Power Equations:**
   * Star ($Y$): $V_L = \sqrt{3} V_{ph}, \quad I_L = I_{ph}$
   * Delta ($\Delta$): $V_L = V_{ph}, \quad I_L = \sqrt{3} I_{ph}$
   * Total Active Power: $P = \sqrt{3} V_L I_L \cos\phi = 3 V_{ph} I_{ph} \cos\phi$.

---

## 2. Digital Circuits & Logic Design
1. **De Morgan's Laws:** $\overline{A \cdot B} = \overline{A} + \overline{B}, \quad \overline{A + B} = \overline{A} \cdot \overline{B}$.
2. **Boolean Multiplexers:** Number of select lines $m = \log_2(n)$ for an $n:1$ MUX.
3. **Flip-Flop Characteristic Equations:**
   * **SR Flip-Flop:** $Q_{next} = S + \overline{R}Q$ (Invalid state: $S=1, R=1$).
   * **JK Flip-Flop:** $Q_{next} = J\overline{Q} + \overline{K}Q$ (Toggles when $J=1, K=1$).
   * **D Flip-Flop:** $Q_{next} = D$.
   * **T Flip-Flop:** $Q_{next} = T \oplus Q = T\overline{Q} + \overline{T}Q$.
4. **Binary Counters:** Number of flip-flops $n$ for MOD-$N$ counter: $2^{n-1} < N \le 2^n$.

---

## 3. Sensors, Transducers & Signal Conditioning
1. **Strain Gauge:**
   * Gauge Factor: $GF = \frac{\Delta R/R}{\epsilon} = 1 + 2\nu + \frac{\Delta\rho/\rho}{\epsilon}$.
   * Quarter-Bridge Output: $V_o = \frac{V_s}{4} (GF \cdot \epsilon)$.
   * Full-Bridge Output: $V_o = V_s (GF \cdot \epsilon)$ ($4\times$ sensitivity).
2. **RTD (Resistance Temperature Detector):** $R_T = R_0 (1 + \alpha \Delta T)$ (PT100: $R_0 = 100\ \Omega$ at $0^\circ\text{C}, \alpha = 0.00385/\text{}^\circ\text{C}$).
3. **LVDT:** Differential output voltage $V_o = K \cdot x \cdot \sin(\omega t)$ (Null voltage at $x = 0$).
4. **Piezoelectric Transducer:**
   * Charge: $Q = d \cdot F = d \cdot (\sigma \cdot A)$.
   * Voltage Sensitivity: $g = \frac{d}{\epsilon_0 \epsilon_r} \implies V_o = g \cdot \sigma \cdot t$.
   * Low cutoff frequency: $f_c = \frac{1}{2\pi R C}$ (High-Pass Filter, cannot measure static DC loads).
5. **Hall Effect Sensor:** Transverse Hall voltage $V_H = \frac{R_H \cdot I \cdot B}{t}$.
6. **3-Op-Amp Instrumentation Amplifier:**
   $$V_o = \left( 1 + \frac{2 R_1}{R_{\text{gain}}} \right) \left( \frac{R_3}{R_2} \right) (V_2 - V_1)$$

---

## 4. Actuators & Motor Drives
1. **DC Motor Characteristics:**
   * Back-EMF: $E_b = K_e \cdot \omega = V - I_a R_a$.
   * Torque: $T = K_t \cdot I_a$.
   * Speed-Torque Equation: $\omega = \frac{V}{K_e} - \frac{R_a}{K_e K_t} T$.
   * No-Load Speed ($T=0$): $\omega_0 = \frac{V}{K_e}$.
   * Stall Torque ($\omega=0$): $T_{\text{stall}} = \frac{K_t V}{R_a}$.
   * Maximum Mechanical Power: $P_{\max} = \frac{1}{4} \omega_0 T_{\text{stall}} = \frac{V^2 K_t}{4 R_a K_e}$.
2. **Stepper Motor Formulas:**
   * Step Angle: $\beta = \frac{360^\circ}{m \cdot N_r} = \frac{360^\circ}{\text{Steps per rev}}$ ($m$ = phases, $N_r$ = rotor teeth).
   * Rotor Speed: $N = \frac{\beta \cdot f}{360^\circ} \times 60 \text{ rpm} = \frac{f \times 60}{\text{Steps/rev}}$.
3. **Hydraulic & Pneumatic Actuators:**
   * Cylinder Extension Force: $F_{\text{ext}} = P \cdot A_p = P \left( \frac{\pi}{4} D^2 \right)$.
   * Cylinder Retraction Force: $F_{\text{ret}} = P (A_p - A_r) = P \left( \frac{\pi}{4} (D^2 - d^2) \right)$.
   * Fluid Velocity: $v = \frac{Q}{A}$.

---

# SECTION A.3: PRINCIPLES OF ROBOTICS AND AUTOMATION

## 1. Spatial Transformations & Kinematics
1. **$SO(3)$ Rotation Matrices:**
   $$R_x(\theta) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{bmatrix}, \quad R_y(\theta) = \begin{bmatrix} \cos\theta & 0 & \sin\theta \\ 0 & 1 & 0 \\ -\sin\theta & 0 & \cos\theta \end{bmatrix}, \quad R_z(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{bmatrix}$$
   * Orthogonality: $R^T = R^{-1}, \quad \det(R) = +1$.
   * Angle from Trace: $\text{Trace}(R) = 1 + 2\cos\theta \implies \cos\theta = \frac{\text{Trace}(R) - 1}{2}$.
2. **Homogeneous Transformation Matrix ($4 \times 4$ HTM):**
   $$T = \begin{bmatrix} R & P \\ 0 & 1 \end{bmatrix} \implies \boxed{T^{-1} = \begin{bmatrix} R^T & -R^T P \\ 0 & 1 \end{bmatrix}}$$
3. **Denavit-Hartenberg (D-H) Link Matrix ($^{i-1}T_i$):**
   $$^{i-1}T_i = \begin{bmatrix} \cos\theta_i & -\sin\theta_i \cos\alpha_i & \sin\theta_i \sin\alpha_i & a_i \cos\theta_i \\ \sin\theta_i & \cos\theta_i \cos\alpha_i & -\cos\theta_i \sin\alpha_i & a_i \sin\theta_i \\ 0 & \sin\alpha_i & \cos\alpha_i & d_i \\ 0 & 0 & 0 & 1 \end{bmatrix}$$
4. **Mobility (Grübler's / Kutzbach Criteria):**
   * **Planar (2D):** $M = 3(N - 1) - 2j_1 - j_2$ ($N$ = links including ground, $j_1$ = 1-DOF joints, $j_2$ = 2-DOF joints).
   * **Spatial (3D):** $M = 6(N - 1) - \sum (6 - f_i) = 6(N - 1) - 5j$ (for 1-DOF joints).

---

## 2. Velocity Kinematics, Statics & Dynamics
1. **Manipulator Jacobian:** $v_e = J(q) \cdot \dot{q}$.
   * Revolute joint $i$: $J_{v_i} = z_{i-1} \times (p_e - p_{i-1}), \quad J_{\omega_i} = z_{i-1}$.
   * Prismatic joint $i$: $J_{v_i} = z_{i-1}, \quad J_{\omega_i} = 0$.
2. **Singularity Condition:** $\det(J(q)) = 0$.
3. **Yoshikawa Manipulability Measure:** $\mu = \sqrt{\det(J J^T)}$ ($\mu = 0$ at singularity).
4. **Static Force-Torque Duality:** $\tau = J^T(q) \cdot F$.
5. **Euler-Lagrange Dynamic Equations:**
   $$\mathcal{L} = K - P \implies \frac{d}{dt}\left(\frac{\partial \mathcal{L}}{\partial \dot{q}}\right) - \frac{\partial \mathcal{L}}{\partial q} = \tau$$
   $$\boxed{M(q)\ddot{q} + C(q, \dot{q})\dot{q} + G(q) = \tau}$$
   * Inertia matrix $M(q) = M(q)^T > 0$ (symmetric positive-definite).
   * Skew-symmetry: $\dot{M}(q) - 2C(q, \dot{q})$ is skew-symmetric.
6. **Trajectory Planning (Cubic Polynomial):**
   $$q(t) = q_0 + \frac{3(q_f - q_0)}{t_f^2} t^2 - \frac{2(q_f - q_0)}{t_f^3} t^3$$

---

## 3. Automation, CIM, PLCs & CNC
1. **AS/RS Storage Cycle Times:**
   * Single-Command Travel Time: $T_{sc} = 2 \cdot \max\left(\frac{L}{v_x}, \frac{H}{v_y}\right) + 2 T_{pd}$.
   * Dual-Command Travel Time: $T_{dc} \approx 1.5 \cdot \max\left(\frac{L}{v_x}, \frac{H}{v_y}\right) + 4 T_{pd}$.
2. **AGV Fleet Size Estimation:**
   * Total cycle time per delivery: $T_c = \frac{L_d}{v} + T_{\text{load}} + \frac{L_e}{v} + T_{\text{unload}}$.
   * Deliveries per vehicle per hour: $D_v = \frac{60}{T_c} \times \text{Availability}$.
   * Number of AGVs: $N_{\text{agv}} = \lceil \frac{\text{Total Required Deliveries/hr}}{D_v} \rceil$.
3. **CNC Machining Parameters:**
   * Cutting Speed: $V_c = \frac{\pi D N}{1000} \text{ m/min}$.
   * Feed Rate: $f_m = f_z \times z \times N \text{ mm/min}$ ($f_z$ = feed/tooth, $z$ = number of teeth, $N$ = rpm).
   * Material Removal Rate (MRR): $MRR = w \cdot d \cdot f_m \text{ mm}^3/\text{min}$.

---

# SECTION B2: MECHANICAL ENGINEERING STREAM (25 MARKS)

## 1. Mechanics of Materials (SOM)
1. **Elastic Constants Relations:**
   $$E = 2G(1 + \nu) = 3K(1 - 2\nu) = \frac{9KG}{3K + G}$$
   * Theoretical limits for Poisson's ratio: $-1 \le \nu \le 0.5$ (For most metals, $0.25 \le \nu \le 0.35$; Incompressible rubber $\nu = 0.5$).
2. **Mohr's Circle for Plane Stress:**
   * Centre: $C = \left( \frac{\sigma_x + \sigma_y}{2}, 0 \right)$
   * Radius: $R = \tau_{\max} = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2}$
   * Principal Stresses: $\sigma_{1, 2} = \frac{\sigma_x + \sigma_y}{2} \pm \tau_{\max}$.
   * Principal Plane Angle: $\tan(2\theta_p) = \frac{2\tau_{xy}}{\sigma_x - \sigma_y}$.
3. **Bending & Torsion Formulas:**
   * Flexure: $\frac{M}{I} = \frac{\sigma}{y} = \frac{E}{R} \implies \sigma_{\max} = \frac{M}{Z} \quad \left(Z = \frac{I}{y_{\max}}\right)$.
   * Torsion: $\frac{T}{J} = \frac{\tau}{r} = \frac{G\theta}{L} \implies \tau_{\max} = \frac{T}{Z_p} \quad \left(Z_p = \frac{\pi d^3}{16} \text{ for solid shaft}\right)$.
4. **Euler's Column Buckling Load ($P_{cr}$):**
   $$P_{cr} = \frac{\pi^2 E I_{\min}}{L_e^2}$$
   * Both ends pinned: $L_e = L$.
   * Both ends fixed: $L_e = 0.5 L \implies P_{cr} = 4 \pi^2 EI / L^2$.
   * One fixed, one free (Cantilever): $L_e = 2 L \implies P_{cr} = \frac{\pi^2 EI}{4 L^2}$.
   * One fixed, one pinned: $L_e = \frac{L}{\sqrt{2}} \approx 0.707 L \implies P_{cr} = 2 \pi^2 EI / L^2$.
5. **Thin-Walled Cylindrical Pressure Vessels ($t < d/20$):**
   * Hoop (Circumferential) Stress: $\sigma_h = \frac{p \cdot d}{2t}$.
   * Longitudinal (Axial) Stress: $\sigma_l = \frac{p \cdot d}{4t} = \frac{\sigma_h}{2}$.
   * Maximum in-plane shear stress: $\tau_{\max,\text{in-plane}} = \frac{\sigma_h - \sigma_l}{2} = \frac{pd}{8t}$.
   * Absolute maximum shear stress: $\tau_{\max,\text{abs}} = \frac{\sigma_h - 0}{2} = \frac{pd}{4t}$.

---

## 2. Theory of Machines & Mechanical Vibrations
1. **Coriolis Acceleration:** $a^c = 2 \cdot \omega \cdot v_{\text{rel}}$ (Direction: Rotate $v_{\text{rel}}$ by $90^\circ$ in the direction of link $\omega$).
2. **Epicyclic Gear Train Speed Ratio:**
   $$\frac{N_{\text{Sun}} - N_{\text{Arm}}}{N_{\text{Ring}} - N_{\text{Arm}}} = -\frac{T_{\text{Ring}}}{T_{\text{Sun}}}$$
3. **Gyroscopic Couple:** $C = I \cdot \omega \cdot \omega_p$ ($I$ = polar moment of inertia, $\omega$ = spin velocity, $\omega_p$ = precession velocity).
4. **SDOF Vibrations (Single Degree of Freedom):**
   * Undamped Natural Frequency: $\omega_n = \sqrt{\frac{k}{m}} \text{ rad/s}, \quad f_n = \frac{1}{2\pi}\sqrt{\frac{k}{m}} \text{ Hz}$.
   * Critical Damping Coefficient: $c_c = 2 m \omega_n = 2\sqrt{k m}$.
   * Damping Ratio: $\zeta = \frac{c}{c_c} = \frac{c}{2m\omega_n}$.
   * Damped Natural Frequency: $\omega_d = \omega_n \sqrt{1 - \zeta^2}$ (for $\zeta < 1$).
   * Logarithmic Decrement: $\delta = \ln\left(\frac{x_1}{x_2}\right) = \frac{2\pi\zeta}{\sqrt{1 - \zeta^2}} \approx 2\pi\zeta$ (for small $\zeta$).
5. **Harmonic Forced Vibration & Transmissibility:**
   * Frequency Ratio: $r = \frac{\omega}{\omega_n}$.
   * Magnification Factor: $MF = \frac{X}{F_0/k} = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$.
   * Peak amplitude occurs at: $r_{\text{peak}} = \sqrt{1 - 2\zeta^2}$ (for $\zeta < 1/\sqrt{2}$).
   * Force Transmissibility:
     $$TR = \frac{F_T}{F_0} = \sqrt{\frac{1 + (2\zeta r)^2}{(1 - r^2)^2 + (2\zeta r)^2}}$$
   * **Vibration Isolation Criterion:** $\boxed{TR < 1 \iff r = \frac{\omega}{\omega_n} > \sqrt{2}}$.

---

## 3. Machine Design & Additive Manufacturing
1. **Static Failure Theories:**
   * **Maximum Principal Stress Theory (Rankine):** $\sigma_1 \le S_{yt}$ (Best for brittle materials).
   * **Maximum Shear Stress Theory (Tresca / Guest):** $\tau_{\max} = \frac{\sigma_1 - \sigma_3}{2} \le \frac{S_{yt}}{2}$ (Conservative for ductile materials).
   * **Distortion Energy / Maximum Octahedral Shear (Von Mises / Hencky):**
     $$\sigma_v = \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2} = \sqrt{\sigma_x^2 - \sigma_x\sigma_y + \sigma_y^2 + 3\tau_{xy}^2} \le S_{yt}$$
     (Yield shear strength: $S_{sy} = \frac{S_{yt}}{\sqrt{3}} \approx 0.577 S_{yt}$).
2. **Fatigue Design (Fluctuating Stresses):**
   * Mean Stress $\sigma_m = \frac{\sigma_{\max} + \sigma_{\min}}{2}$, Stress Amplitude $\sigma_a = \frac{\sigma_{\max} - \sigma_{\min}}{2}$.
   * **Soderberg Line (Yield based):** $\frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{yt}} = \frac{1}{FS}$.
   * **Goodman Line (Ultimate based):** $\frac{\sigma_a}{S_e} + \frac{\sigma_m}{S_{ut}} = \frac{1}{FS}$.
   * **Gerber Parabola:** $\frac{\sigma_a}{S_e} + \left(\frac{\sigma_m}{S_{ut}}\right)^2 = \frac{1}{FS}$.
3. **Rolling Contact Bearings Rating Life ($L_{10}$):**
   $$L_{10} = \left(\frac{C}{P}\right)^p \quad (\text{Life in Millions of Revolutions})$$
   * $p = 3$ for Ball Bearings.
   * $p = 10/3 \approx 3.33$ for Roller Bearings.
   * Life in Hours: $L_{10h} = \frac{10^6 \times L_{10}}{60 \times N} \text{ hours}$.
   * Reliability-Life Relation (Weibull): $\frac{L_R}{L_{10}} = \left(\frac{\ln(1/R)}{\ln(1/0.90)}\right)^{1/b}$ ($b \approx 1.5$).
4. **Additive Manufacturing (3D Printing) Formulas:**
   * **SLA Cure Depth (Beer-Lambert Law):** $C_d = D_p \ln\left(\frac{E_{\max}}{E_c}\right)$ ($D_p$ = penetration depth, $E_c$ = critical exposure threshold).
   * **SLS / SLM Energy Density:** $ED = \frac{P}{v \cdot h \cdot t} \text{ J/mm}^3$ ($P$ = laser power, $v$ = scan speed, $h$ = hatch spacing, $t$ = layer thickness).
   * **FDM Build Time Estimation:** $T_{\text{build}} \approx \frac{\text{Total Part Volume}}{\text{Nozzle Area} \times \text{Print Speed}} + N_{\text{layers}} \times T_{\text{layer delay}}$.
