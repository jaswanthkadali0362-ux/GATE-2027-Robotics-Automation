# NPTEL Video Companion Notes: Basics of Mechatronics & Automation (Part A.2)

**Instructors:** Prof. Hardik J. Pandya (IISc), Prof. Nagendra Krishnapura (IITM), Prof. S. Mukhopadhyay (IIT KGP)  
**Target:** Quick formulas, circuit setups, transducer calculations & PLC ladder logic

---

## 🎬 Video 1: Kirchhoff's Laws, Thevenin’s & Norton’s Theorems

### 📌 Summary of Video Lecture (Prof. Nagendra Krishnapura, IIT Madras)
- **KCL (Kirchhoff's Current Law):** $\sum I_{\text{in}} = \sum I_{\text{out}}$ (Conservation of charge).
- **KVL (Kirchhoff's Voltage Law):** $\sum V = 0$ (Conservation of energy).
- **Thevenin’s Equivalent:** Replace network with voltage source $V_{th}$ in series with resistance $R_{th}$.
  - $V_{th} = V_{oc}$ (Open-Circuit voltage across terminals).
  - $R_{th} = \frac{V_{oc}}{I_{sc}}$ (or deactivate all independent sources: short voltage sources, open current sources).
- **Maximum Power Transfer Theorem:**
  - For DC load: $R_L = R_{th} \implies P_{\max} = \frac{V_{th}^2}{4 R_{th}}$.
  - Efficiency at max power transfer = **50%**.

---

## 🎬 Video 2: Sensors, Transducers & Signal Conditioning

### 📌 Summary of Video Lecture (Prof. Hardik J. Pandya, IISc Bangalore)
- **Strain Gauges & Piezoresistivity:**
  - $GF = \frac{\Delta R/R}{\epsilon} = 1 + 2\nu + \frac{\Delta\rho/\rho}{\epsilon}$ (Metals: $GF \approx 2$, Semiconductor: $GF \approx 100-200$).
  - Wheatstone bridge output (Quarter-Bridge): $V_o \approx \frac{V_s}{4} (GF \cdot \epsilon)$.
- **LVDT (Inductive Transducer):**
  - Converts linear displacement into differential AC voltage.
  - At center null position: $V_{s1} = V_{s2} \implies V_o = 0\text{ V}$.
- **Piezoelectric Sensors:**
  - Charge generated: $Q = d \cdot F = d \cdot \sigma \cdot A$.
  - Voltage output: $V_o = g \cdot \sigma \cdot t$.
  - *Exam Rule:* Cannot measure static DC forces (acts as High-Pass Filter due to charge bleed-off).
- **Hall Effect Sensor:**
  - Transverse voltage: $V_H = \frac{R_H \cdot I \cdot B}{t}$. Used for BLDC rotor position & current sensing.

---

## 🎬 Video 3: Actuators, Motor Drives & Fluid Power

### 📌 Summary of Video Lecture (Prof. S. Mukhopadhyay, IIT Kharagpur)
- **DC Motor Torque-Speed Characteristics:**
  - Back-EMF: $E_b = K_e \omega$, Torque: $T = K_t I_a$.
  - Speed-Torque curve: $\omega = \frac{V}{K_e} - \frac{R_a}{K_e K_t} T$.
- **Stepper Motors:**
  - Step Angle: $\beta = \frac{360^\circ}{m \cdot N_r}$.
  - In half-stepping mode: $\beta_{\text{half}} = \beta / 2$.
- **Fluid Power Cylinders:**
  - Extension Force: $F_{\text{ext}} = P \cdot A = P \left(\frac{\pi}{4} D^2\right)$.
  - Retraction Force: $F_{\text{ret}} = P (A - a) = P \left(\frac{\pi}{4}(D^2 - d^2)\right)$ (Lower force due to rod area!).

---

## 🎬 Video 4: PLCs, Ladder Logic & CNC Programming

### 📌 Summary of Video Lecture (Prof. S. Mukhopadhyay & Prof. S.N. Joshi)
- **PLC Scan Cycle:** Input Scan $\rightarrow$ Program Execution $\rightarrow$ Output Scan $\rightarrow$ Housekeeping.
- **Ladder Logic Contacts:**
  - `—[ ]—` (NO Contact): Closes on TRUE ($1$).
  - `—[/]—` (NC Contact): Opens on TRUE ($1$).
  - `TON` (Timer On-Delay): Delays turning output ON.
  - `TOF` (Timer Off-Delay): Delays turning output OFF.
- **CNC G-Codes:**
  - `G00`: Rapid non-cutting positioning.
  - `G01`: Linear cutting interpolation at feed rate `F`.
  - `G02` / `G03`: Circular interpolation CW / CCW.
  - `G90` / `G91`: Absolute vs. Incremental positioning.
