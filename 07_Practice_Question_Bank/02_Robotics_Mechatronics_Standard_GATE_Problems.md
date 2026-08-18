# GATE RA 2027: Standard Solved Numerical Practice Set 2

**Target:** 10 Core 2-Mark Numerical Problems Across All Sections (with Full Step-by-Step Solutions)

---

### Problem 1: Manipulator Jacobian & Singularities (Robotics A.3)
**Question:** A planar 2R robot arm has link lengths $L_1 = 0.5\text{ m}$ and $L_2 = 0.4\text{ m}$. The current joint angles are $\theta_1 = 30^\circ$ and $\theta_2 = 45^\circ$. If the joints are moving with angular velocities $\dot{\theta}_1 = 1\text{ rad/s}$ and $\dot{\theta}_2 = -2\text{ rad/s}$, determine the linear velocity component $\dot{x}_e$ of the end-effector in the horizontal $X$-direction.

**Solution:**
1. Forward kinematics for $x$-coordinate:
   $$x_e = L_1 \cos\theta_1 + L_2 \cos(\theta_1 + \theta_2)$$
2. Differentiating with respect to time:
   $$\dot{x}_e = -L_1 \sin\theta_1 \cdot \dot{\theta}_1 - L_2 \sin(\theta_1 + \theta_2) \cdot (\dot{\theta}_1 + \dot{\theta}_2)$$
3. Substitute the values:
   * $\theta_1 = 30^\circ \implies \sin 30^\circ = 0.5$
   * $\theta_1 + \theta_2 = 75^\circ \implies \sin 75^\circ = \sin(45^\circ + 30^\circ) = \frac{\sqrt{6} + \sqrt{2}}{4} \approx 0.9659$
   * $\dot{\theta}_1 = 1\text{ rad/s}$, $\dot{\theta}_1 + \dot{\theta}_2 = 1 + (-2) = -1\text{ rad/s}$
4. Calculation:
   $$\dot{x}_e = -(0.5)(0.5)(1) - (0.4)(0.9659)(-1) = -0.25 + 0.3864 = \mathbf{+0.1364\text{ m/s}}$$

---

### Problem 2: Stepper Motor Drive Pulse Calculation (Mechatronics A.2)
**Question:** A 4-phase hybrid stepper motor with 50 rotor teeth is used to drive the lead screw of a CNC linear slide with a pitch of $5\text{ mm/rev}$. The drive operates in half-stepping mode. If the linear slide needs to move a distance of $125\text{ mm}$ in $2.5\text{ seconds}$, calculate:
1. The step angle in half-stepping mode.
2. The total number of pulses required.
3. The input pulse frequency (pulses per second / Hz).

**Solution:**
1. **Full step angle:** $\beta = \frac{360^\circ}{m \cdot N_r} = \frac{360^\circ}{4 \times 50} = 1.8^\circ$.
   * **Half-stepping step angle:** $\beta_{\text{half}} = \frac{1.8^\circ}{2} = \mathbf{0.9^\circ}$.
2. **Steps per revolution:** $\text{Steps/rev} = \frac{360^\circ}{0.9^\circ} = 400\text{ pulses/rev}$.
3. **Number of revolutions required:**
   $$\text{Revolutions} = \frac{\text{Total Distance}}{\text{Pitch}} = \frac{125\text{ mm}}{5\text{ mm/rev}} = 25\text{ revolutions}$$
4. **Total Pulses Required:**
   $$\text{Total Pulses} = 25\text{ rev} \times 400\text{ pulses/rev} = \mathbf{10,000\text{ pulses}}$$
5. **Pulse Frequency ($f$):**
   $$f = \frac{\text{Total Pulses}}{\text{Time}} = \frac{10,000}{2.5\text{ s}} = \mathbf{4,000\text{ Hz (4 kHz)}}$$

---

### Problem 3: Wheatstone Bridge Strain Measurement (Sensors A.2)
**Question:** A metal foil strain gauge with nominal resistance $R = 120\ \Omega$ and Gauge Factor $GF = 2.05$ is mounted on a robotic gripper arm. It forms one active arm of a balanced Wheatstone bridge excited with a supply voltage $V_s = 10\text{ V}$. Under gripper load, the strain gauge experiences a tensile axial strain $\epsilon = 800\ \mu\epsilon$ ($800 \times 10^{-6}$). Calculate the open-circuit output voltage $V_o$ of the bridge in millivolts (mV).

**Solution:**
1. For a quarter-bridge configuration with one active strain gauge:
   $$V_o \approx \frac{V_s}{4} \cdot (GF \cdot \epsilon)$$
2. Substitute the given parameters:
   $$V_o = \frac{10\text{ V}}{4} \times (2.05) \times (800 \times 10^{-6})$$
   $$V_o = 2.5 \times 2.05 \times 8 \times 10^{-4} = 41 \times 10^{-4}\text{ V} = 0.0041\text{ V} = \mathbf{4.10\text{ mV}}$$

---

### Problem 4: Vibration Transmissibility & Damping Ratio (Part B2 Vibrations)
**Question:** A robot base of mass $m = 50\text{ kg}$ is mounted on an isolator having spring stiffness $k = 20,000\text{ N/m}$ and damping coefficient $c = 200\text{ N}\cdot\text{s/m}$. An internal unbalanced motor runs at an excitation frequency $\omega = 40\text{ rad/s}$.
1. Find the natural frequency $\omega_n$ and damping ratio $\zeta$.
2. Determine if the vibration isolator is effective ($TR < 1$).
3. Calculate the Force Transmissibility $TR$.

**Solution:**
1. **Natural Frequency:**
   $$\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{20000}{50}} = \sqrt{400} = \mathbf{20\text{ rad/s}}$$
2. **Critical Damping Coefficient ($c_c$):**
   $$c_c = 2 m \omega_n = 2 \times 50 \times 20 = 2000\text{ N}\cdot\text{s/m}$$
3. **Damping Ratio ($\zeta$):**
   $$\zeta = \frac{c}{c_c} = \frac{200}{2000} = \mathbf{0.10} \quad (\text{Underdamped})$$
4. **Frequency Ratio ($r$):**
   $$r = \frac{\omega}{\omega_n} = \frac{40}{20} = 2.0$$
   * Since $r = 2.0 > \sqrt{2} \approx 1.414$, the system is in the **vibration isolation region** ($TR < 1$).
5. **Transmissibility ($TR$):**
   $$TR = \sqrt{\frac{1 + (2\zeta r)^2}{(1 - r^2)^2 + (2\zeta r)^2}} = \sqrt{\frac{1 + (2 \times 0.10 \times 2.0)^2}{(1 - 2.0^2)^2 + (2 \times 0.10 \times 2.0)^2}}$$
   $$TR = \sqrt{\frac{1 + (0.4)^2}{(1 - 4)^2 + (0.4)^2}} = \sqrt{\frac{1 + 0.16}{9 + 0.16}} = \sqrt{\frac{1.16}{9.16}} = \sqrt{0.1266} \approx \mathbf{0.3558} \quad (64.4\%\text{ isolation})$$

---

### Problem 5: Mohr's Circle & In-Plane Shear (Part B2 SOM)
**Question:** The state of plane stress at a critical point in a robot link is $\sigma_x = 100\text{ MPa}$, $\sigma_y = -40\text{ MPa}$, and $\tau_{xy} = 48\text{ MPa}$. Determine:
1. The principal stresses $\sigma_1$ and $\sigma_2$.
2. The maximum in-plane shear stress $\tau_{\max}$.
3. The orientation of the principal plane $\theta_p$.

**Solution:**
1. **Centre of Mohr's circle ($C$):**
   $$C = \frac{\sigma_x + \sigma_y}{2} = \frac{100 + (-40)}{2} = \mathbf{30\text{ MPa}}$$
2. **Radius of Mohr's circle ($R = \tau_{\max}$):**
   $$R = \sqrt{\left(\frac{\sigma_x - \sigma_y}{2}\right)^2 + \tau_{xy}^2} = \sqrt{\left(\frac{100 - (-40)}{2}\right)^2 + 48^2} = \sqrt{70^2 + 48^2} = \sqrt{4900 + 2304} = \sqrt{7204} \approx \mathbf{84.88\text{ MPa}}$$
3. **Principal Stresses:**
   $$\sigma_1 = C + R = 30 + 84.88 = \mathbf{114.88\text{ MPa}}$$
   $$\sigma_2 = C - R = 30 - 84.88 = \mathbf{-54.88\text{ MPa}}$$
4. **Orientation of Principal Planes:**
   $$\tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x - \sigma_y} = \frac{2 \times 48}{100 - (-40)} = \frac{96}{140} \approx 0.6857$$
   $$2\theta_p = \arctan(0.6857) \approx 34.44^\circ \implies \mathbf{\theta_p = 17.22^\circ}$$
