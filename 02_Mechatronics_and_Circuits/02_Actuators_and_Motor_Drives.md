# Module 3: Actuators, Motor Drives & Fluid Power

**GATE Section:** Part A.2 (Basics of Mechatronics)  
**Target:** Electric Actuator Characteristics, Stepper Angles, BLDC Commutation, Hydraulics & Pneumatics

---

## 1. Electric Actuators

### A. DC Motors (Brushed DC)

#### 1. Fundamental Equations
* **Back-EMF Equation:**
  $$E_b = K_b \cdot \Phi \cdot \omega_m$$
  Where $K_b$ is the back-EMF constant, $\Phi$ is magnetic flux per pole, $\omega_m$ is rotor angular velocity in rad/s.
* **Torque Equation:**
  $$T_e = K_t \cdot \Phi \cdot I_a$$
  Where $K_t$ is torque constant ($K_t = K_b$ in SI units: $\text{N}\cdot\text{m}/\text{A} = \text{V}\cdot\text{s}/\text{rad}$).
* **Armature Circuit Voltage Equation:**
  $$V = E_b + I_a R_a = K_e \omega_m + I_a R_a$$

#### 2. Torque-Speed Relationship (Separately Excited / Permanent Magnet DC Motor)
Substitute $I_a = \frac{T_e}{K_t}$ into the voltage equation:
$$V = K_e \omega_m + \frac{T_e R_a}{K_t}$$
$$\boxed{\omega_m = \frac{V}{K_e} - \frac{R_a}{K_e K_t} T_e}$$

* **No-Load Speed ($\omega_0$ at $T_e = 0$):** $\omega_0 = \frac{V}{K_e}$
* **Stall Torque ($T_{\text{stall}}$ at $\omega_m = 0$):** $T_{\text{stall}} = \frac{K_t V}{R_a}$
* **Torque-Speed Characteristic Curve:** A straight line with negative slope $-\frac{R_a}{K_e K_t}$. Higher supply voltage $V$ shifts the line up in parallel; adding series resistance increases downward droop.

---

### B. Stepper Motors

Stepper motors convert digital electrical pulses into precise, discrete mechanical angular increments (steps) without feedback sensors (open-loop positioning).

#### 1. Key Types:
1. **Variable Reluctance (VR):** Soft iron multi-toothed rotor, moves to minimize magnetic reluctance. No residual detent torque when powered off.
2. **Permanent Magnet (PM):** Cylindrical permanent magnet rotor with alternating N-S poles. Moderate step angles ($7.5^\circ \text{ to } 15^\circ$), has detent torque.
3. **Hybrid Stepper Motor:** Combines PM and VR features. Has axial permanent magnet with radially toothed iron end caps. Very fine step angles ($0.9^\circ \text{ or } 1.8^\circ$), widely used in 3D printers and CNC machines.

#### 2. Step Angle Calculation ($\beta$):
$$\boxed{\beta = \frac{360^\circ}{m \cdot N_r} = \frac{|N_s - N_r|}{N_s \cdot N_r} \times 360^\circ}$$
Where:
- $N_s$ = Total number of stator teeth / poles
- $N_r$ = Total number of rotor teeth
- $m$ = Number of stator phases

#### 3. Resolution & Stepping Modes:
* **Full-Stepping (1-phase-on / 2-phase-on):** $\text{Steps/rev} = \frac{360^\circ}{\beta}$ (e.g. For $\beta = 1.8^\circ \implies 200\text{ steps/rev}$).
* **Half-Stepping:** Alternates 1-phase and 2-phase excitation ($\beta_{\text{half}} = \beta/2 \implies 400\text{ steps/rev}$).
* **Microstepping:** Sine-cosine current control in phase windings to achieve sub-step resolution (e.g. $1/16$, $1/32$, $1/256$ microstepping), smooth motion, eliminating low-speed resonance.

---

### C. Brushless DC Motors (BLDC) & Servo Motors

#### 1. BLDC Motor Working Principle:
* **Construction:** Permanent magnets on the **rotor** (moving part) and polyphase coils (typically 3-phase) on the **stator** (stationary part).
* **Electronic Commutation:** No mechanical brushes/commutator. 3 Hall Effect sensors placed at $120^\circ$ (or $60^\circ$) electrical intervals detect rotor pole positions and trigger inverter MOSFETs in a 6-step trapezoidal commutation sequence.
* **Advantages over Brushed DC:** Higher efficiency, no spark/arcing (explosion proof), higher RPM (no brush friction), zero maintenance, superior heat dissipation (heat generated on outer stator shell).

#### 2. AC/DC Servo Motors:
* Closed-loop system with high-resolution encoder/resolver feedback.
* Features low rotor inertia for rapid acceleration/deceleration.
* Controlled via Field-Oriented Control (FOC) or PID position/velocity controllers.

---

## 2. Fluid Power Actuators (Hydraulics & Pneumatics)

### Comparison: Hydraulics vs. Pneumatics
| Parameter | Hydraulic Systems | Pneumatic Systems |
| :--- | :--- | :--- |
| **Working Fluid** | Incompressible mineral oil / hydraulic fluid | Compressible atmospheric air |
| **Operating Pressure** | High ($50 \text{ to } 350\text{ bar}$) | Low ($4 \text{ to } 10\text{ bar}$) |
| **Force & Power Density** | Extremely high force/torque in compact size | Moderate forces; limited by pressure |
| **Speed & Responsiveness** | Moderate speed, highly stiff and precise position control | Very high speed, but spongy/springy due to air compressibility |
| **Fluid Preparation / Return** | Closed-loop circuit with oil reservoir and return lines | Open system; exhaust air dumped into atmosphere after silencer |
| **Components** | Pump, Pressure relief valve, Directional Control Valve (DCV), Actuator | Compressor, FRL Unit (Filter, Regulator, Lubricator), Solenoid DCVs |

---

### Key Formulas in Fluid Actuators

#### 1. Cylinder Output Force ($F$):
* **Extension Stroke (Push):**
  $$F_{\text{ext}} = P \cdot A_{\text{piston}} = P \cdot \left( \frac{\pi}{4} D^2 \right)$$
* **Retraction Stroke (Pull):**
  $$F_{\text{ret}} = P \cdot (A_{\text{piston}} - A_{\text{rod}}) = P \cdot \left( \frac{\pi}{4} (D^2 - d^2) \right)$$
  *(Notice $F_{\text{ext}} > F_{\text{ret}}$ because the rod reduces effective area!)*

#### 2. Piston Velocity ($v$):
$$v = \frac{Q}{A}$$
Where $Q$ is fluid flow rate ($\text{m}^3/\text{s}$), $A$ is effective area ($\text{m}^2$).
*(Notice $v_{\text{ret}} > v_{\text{ext}}$ for the same flow rate $Q$)*.
