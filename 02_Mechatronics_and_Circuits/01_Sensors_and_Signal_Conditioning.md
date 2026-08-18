# Module 2: Sensors, Transducers & Signal Conditioning

**GATE Section:** Part A.2 (Basics of Mechatronics)  
**Target:** Sensor Working Principles, Equivalent Circuits, Sensitivity Formulas & Signal Conditioning

---

## 1. Classification of Transducers
* **Active vs. Passive Transducers:**
  * **Active (Self-generating):** Produce an electrical output without external power (e.g. Piezoelectric crystal, Thermocouple, Photovoltaic cell).
  * **Passive (Externally powered):** Require an external power source to modulate impedance/resistance/capacitance (e.g. Strain Gauge, LVDT, RTD, Thermistor).
* **Primary vs. Secondary Transducers:**
  * Example: In a Bourdon tube with LVDT, Bourdon tube converts pressure to displacement (Primary), and LVDT converts displacement to voltage (Secondary).

---

## 2. Detailed Breakdown of Core Sensor Types

### 1. Resistive Transducers

#### A. Strain Gauges (Piezoresistive effect)
* **Gauge Factor ($GF$):**
  $$GF = \frac{\Delta R / R}{\Delta L / L} = \frac{\Delta R / R}{\epsilon} = 1 + 2\nu + \frac{\Delta \rho / \rho}{\epsilon}$$
  Where $\nu$ = Poisson's ratio ($\approx 0.3$ for metals), $\epsilon = \Delta L / L$ is axial strain, $\rho$ is resistivity.
  * For Metallic wire strain gauges: $GF \approx 2$
  * For Semiconductor strain gauges (high piezoresistive effect): $GF \approx 100 \text{ to } 200$ (very sensitive, but highly temperature-dependent).

#### B. Temperature Sensors (RTD vs. Thermistor)
* **RTD (Resistance Temperature Detector - Platinum PT100):**
  * $R_T = R_0 [1 + \alpha(T - T_0)]$
  * Linear response, positive temperature coefficient ($\alpha > 0$), high accuracy and stability.
* **Thermistor (NTC - Negative Temperature Coefficient):**
  * $R_T = R_0 e^{\beta (1/T - 1/T_0)}$
  * Highly non-linear, very high sensitivity at small temperature ranges.

---

### 2. Inductive Transducers (LVDT - Linear Variable Differential Transformer)
* **Construction:** 1 primary coil excited by AC voltage $V_{in} = V_m \sin(\omega t)$, 2 identical secondary coils connected in **series opposition** ($V_o = V_{s1} - V_{s2}$), and a movable high-permeability ferromagnetic core.
* **Operation:**
  * **Null Position (Core at center):** $V_{s1} = V_{s2} \implies V_o = 0\text{ V}$.
  * **Core moved towards $S_1$:** $V_{s1} > V_{s2} \implies V_o$ is in-phase with $V_{in}$.
  * **Core moved towards $S_2$:** $V_{s2} > V_{s1} \implies V_o$ is $180^\circ$ out-of-phase with $V_{in}$.
* **Residual Voltage:** Small non-zero voltage at null position caused by stray capacitances and harmonic distortion.

---

### 3. Capacitive Transducers
* Parallel Plate Capacitance formula:
  $$C = \frac{\epsilon_0 \epsilon_r A}{d}$$
* Can measure:
  1. **Variable plate separation ($d$):** $C \propto 1/d$ (Non-linear, used for tiny micro-displacements).
  2. **Variable overlapping area ($A$):** $C \propto A$ (Linear, used for larger linear and rotary displacements).
  3. **Variable dielectric constant ($\epsilon_r$):** Used for liquid level sensing and moisture measurement.

---

### 4. Piezoelectric Sensors (Dynamic Measurement)
* **Principle:** Mechanical stress $\sigma$ produces electrical charge $Q$ on crystal surfaces (Quartz, PZT - Lead Zirconate Titanate, Rochelle salt).
  $$Q = d \cdot F = d \cdot \sigma \cdot A$$
  $$V_o = \frac{Q}{C} = g \cdot \sigma \cdot t$$
  Where $d$ = piezoelectric charge coefficient (C/N), $g$ = piezoelectric voltage coefficient ($\text{V}\cdot\text{m}/\text{N}$), $t$ = crystal thickness.
* **Equivalent Circuit:** Charge generator in parallel with crystal capacitance $C_p$ and leakage resistance $R_p$.
* **Critical GATE Property:** **Cannot measure static (DC) force/displacement** due to charge leakage through $R_p$. Acts as a **High-Pass Filter**; only suited for **dynamic forces, vibrations, and impact shocks**.

---

### 5. Hall Effect Sensors
* **Principle:** When a current $I$ passes through a semiconductor sheet in the presence of a perpendicular magnetic field $B$, a transverse potential difference $V_H$ is created:
  $$\boxed{V_H = \frac{R_H \cdot I \cdot B}{t}}$$
  Where $R_H = \frac{1}{n \cdot q}$ is the Hall coefficient, $t$ is the thickness, $n$ is charge carrier concentration.
* **Applications:** BLDC motor rotor position sensing, proximity switches, non-contact speed/current measurement.

---

### 6. Optical Encoders (Displacement & Speed)
* **Incremental Encoder:**
  * Has two optical tracks (Channels A and B) shifted by $90^\circ$ electrical phase (Quadrature encoding) to detect direction of rotation.
  * Index channel (Z) provides 1 pulse per revolution for zero reference.
  * Resolution with 4X decoding: $\text{Resolution} = \frac{360^\circ}{4 \times N\text{ pulses}}$.
* **Absolute Encoder:**
  * Uses **Gray Code** disc tracks instead of Binary to prevent multi-bit transition errors (only 1 bit changes at any boundary).

---

## 3. Signal Conditioning & Bridge Circuits

### Wheatstone Bridge Analysis
For a bridge with arms $R_1, R_2, R_3, R_4$ excited by source $V_s$:
$$V_o = V_s \left( \frac{R_1}{R_1 + R_2} - \frac{R_4}{R_3 + R_4} \right)$$
* **Null Balance Condition:** $\frac{R_1}{R_2} = \frac{R_4}{R_3} \implies R_1 R_3 = R_2 R_4$.

#### Quarter, Half, and Full Bridge Sensitivity (with strain gauge $\Delta R/R = GF \cdot \epsilon$):
* **Quarter Bridge (1 active gauge):** $V_o \approx \frac{V_s}{4} \cdot (GF \cdot \epsilon)$
* **Half Bridge (2 active gauges, push-pull):** $V_o \approx \frac{V_s}{2} \cdot (GF \cdot \epsilon)$ (Temperature compensated!)
* **Full Bridge (4 active gauges):** $V_o \approx V_s \cdot (GF \cdot \epsilon)$ ($4\times$ higher output signal!).

---

### Operational Amplifier (Op-Amp) Circuits for Sensors

1. **Instrumentation Amplifier (3-Op-Amp Topology):**
   $$V_{out} = \left( 1 + \frac{2 R_1}{R_{gain}} \right) \left( \frac{R_3}{R_2} \right) (V_2 - V_1)$$
   * **Why used for sensors?** High CMRR (Common Mode Rejection Ratio), extremely high input impedance, single resistor $R_{gain}$ adjusts differential gain without unbalancing the bridge.

2. **Charge Amplifier (for Piezoelectric Sensors):**
   $$V_{out} = -\frac{Q}{C_f}$$
   * Eliminates the effect of cable capacitance by placing feedback capacitor $C_f$ across the inverting terminal.

3. **Active Filters:**
   * Low-Pass Sallen-Key filter cut-off: $f_c = \frac{1}{2\pi \sqrt{R_1 R_2 C_1 C_2}}$.
   * Used to prevent **aliasing** before ADC sampling ($f_{\text{sampling}} \ge 2 f_{\text{max}}$ - Nyquist criterion).
