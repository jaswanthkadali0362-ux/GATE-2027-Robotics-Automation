# Module B2.2: Kinematics, Dynamics & Mechanical Vibrations

**GATE Section:** Part B2.2 (Mechanical Engineering Optional Stream)  
**Target:** Mechanism Inversions, Coriolis Acceleration, Epicyclic Gears, Gyroscopic Couple & SDOF Vibrations

---

## 1. Mechanisms & Inversions

### 1. Four-Bar Kinematic Chain (Grashof’s Criterion)
Let $s$ = shortest link, $l$ = longest link, $p, q$ = other two links.
* **Class I Mechanisms ($s + l \le p + q$):** Continuous relative rotation is possible.
  * **Shortest link fixed (Ground = $s$):** **Double-Crank mechanism** (both input and output rotate $360^\circ$).
  * **Link adjacent to shortest fixed:** **Crank-Rocker mechanism** (shortest link rotates full $360^\circ$, adjacent link rocks/oscillates).
  * **Link opposite to shortest fixed:** **Double-Rocker mechanism** (both couplers rock, shortest link acts as floating coupler).
* **Class II Mechanisms ($s + l > p + q$ - Non-Grashof):** No link can make a complete revolution $\implies$ **Triple-Rocker mechanism**.

### 2. Single Slider-Crank Chain Inversions
1. **Cylinder fixed:** Reciprocating engine / Compressor.
2. **Crank fixed:** Whitworth quick-return motion mechanism, Rotary internal combustion engine (Gnome engine).
3. **Connecting rod fixed:** Crank and Slotted lever quick-return mechanism, Oscillating cylinder engine.
4. **Slider fixed:** Hand pump (Bull engine).

---

## 2. Velocity & Acceleration Analysis

### 1. Instantaneous Center of Rotation (I-Center)
* Number of I-centers in an $N$-link mechanism:
  $$N_{\text{IC}} = \frac{N(N - 1)}{2}$$
* **Aronhold-Kennedy Theorem of Three Centers:** If three bodies move relative to each other, their three instantaneous centers ($I_{12}, I_{23}, I_{13}$) must lie on the **same straight line**.
* Velocity of point $P$ on link $i$ rotating about $I_{1i}$:
  $$v_P = \omega_i \cdot (r_{P / I_{1i}})$$

### 2. Coriolis Acceleration ($a^c$)
* **When does it exist?** Whenever a slider/particle moves with relative linear velocity $v$ along a link/slot that is simultaneously rotating with angular velocity $\omega$.
* **Magnitude:**
  $$\boxed{a^c = 2 \cdot \omega \cdot v}$$
* **Direction:** Rotate the relative velocity vector $v$ by $90^\circ$ in the direction of the angular rotation $\omega$.

---

## 3. Gears & Gear Trains

### 1. Fundamental Law of Gearing
To maintain a constant angular velocity ratio ($i = \frac{\omega_1}{\omega_2} = \frac{T_2}{T_1}$), the common normal at the point of contact between teeth must always pass through a fixed point on the line of centers called the **Pitch Point ($P$)**.

### 2. Involute Gear Geometry & Formulas
* **Module ($m$):** $m = \frac{d}{T} = \frac{\text{Pitch Circle Diameter (mm)}}{\text{Number of Teeth}}$
* **Circular Pitch ($p_c$):** $p_c = \pi m = \frac{\pi d}{T}$
* **Diametral Pitch ($p_d$):** $p_d = \frac{T}{d} = \frac{1}{m}$
* **Base Circle Diameter ($d_b$):** $d_b = d \cos\phi$ (where $\phi$ is pressure angle, typically $20^\circ$).
* **Minimum Number of Teeth on Pinion to Avoid Interference:**
  $$T_{\min} = \frac{2 A_w}{\sin^2\phi}$$
  *(For standard addendum $A_w = 1$ and $\phi = 20^\circ$, $T_{\min} = \frac{2}{\sin^2(20^\circ)} \approx 17.1 \implies \mathbf{18\text{ teeth}}$).*

### 3. Epicyclic / Planetary Gear Trains (Tabular Method)
For a sun gear ($S$), planet gear ($P$), arm ($A$), and ring/annulus gear ($R$):
1. Fix arm $A$, give sun gear $+1$ rev $\implies$ calculate relative gear rotations via tooth ratios: $\frac{N_A - N_P}{N_S - N_P} = \pm \frac{T_S}{T_P}$.
2. Multiply by $x$, then add rotation $y$ to all elements.
3. Solve linear equations from boundary conditions (e.g. fixed ring $N_R = 0$).

---

## 4. Balancing & Gyroscopes

### 1. Gyroscopic Couple ($C$)
When a rotor with moment of inertia $I$ spins with angular speed $\omega$ about the spin axis, and the spin axis precesses with angular velocity $\omega_p$ about a perpendicular precession axis:
$$\boxed{C = I \cdot \omega \cdot \omega_p}$$

---

## 5. Mechanical Vibrations (Single Degree of Freedom - SDOF)

### 1. Free Undamped Vibration
* Equation of motion: $m \ddot{x} + k x = 0$
* **Natural Angular Frequency ($\omega_n$):**
  $$\boxed{\omega_n = \sqrt{\frac{k}{m}} \quad (\text{rad/s})}, \quad f_n = \frac{\omega_n}{2\pi} \quad (\text{Hz})$$

### 2. Free Damped Vibration
* Equation of motion: $m \ddot{x} + c \dot{x} + k x = 0$
* **Critical Damping Coefficient ($c_c$):** $c_c = 2\sqrt{km} = 2m\omega_n$
* **Damping Ratio ($\zeta$):** $\zeta = \frac{c}{c_c} = \frac{c}{2\sqrt{km}}$
* **Classification:**
  * $\zeta < 1$: **Underdamped** (Oscillatory decay with damped frequency $\omega_d = \omega_n \sqrt{1 - \zeta^2}$)
  * $\zeta = 1$: **Critically Damped** (Fastest return to equilibrium without oscillation)
  * $\zeta > 1$: **Overdamped** (Sluggish, non-oscillatory return)
* **Logarithmic Decrement ($\delta$):**
  $$\delta = \ln\left(\frac{x_1}{x_2}\right) = \frac{2\pi \zeta}{\sqrt{1 - \zeta^2}}$$

### 3. Forced Harmonic Vibration ($F(t) = F_0 \sin(\omega t)$)
* **Magnification Factor ($MF$):**
  $$MF = \frac{X_{\text{amplitude}}}{F_0 / k} = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$$
  Where $r = \frac{\omega}{\omega_n}$ is the frequency ratio.
* **Resonance Frequency:** $\omega_{\text{res}} = \omega_n \sqrt{1 - 2\zeta^2}$ (for $\zeta < 1/\sqrt{2} \approx 0.707$).
* **Vibration Isolation & Transmissibility ($TR$):**
  $$\boxed{TR = \frac{F_{\text{transmitted}}}{F_0} = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}}$$
  * **Critical GATE Rule:** Vibration isolation is effective ($TR < 1$) **ONLY when $r > \sqrt{2}$** (i.e. operating frequency $\omega > \sqrt{2} \omega_n$).
