# MODULE 3: SENSORS & SIGNAL CONDITIONING
## 100 Practice Questions — GATE RA 2027

**Topics:** Strain Gauges, RTD, LVDT, Capacitive, Piezoelectric, Hall Effect, Encoders, Op-Amps, Filters

---

### SECTION A: STRAIN GAUGES & BRIDGES — 25 Questions

**Q3.1 [NAT - 2M]** A strain gauge with GF=2.0 and nominal resistance R=120Ω is subjected to 800με (microstrain). Calculate ΔR.
> **Answer:** ΔR = GF × ε × R = 2.0 × 800×10⁻⁶ × 120 = 0.192 Ω.

**Q3.2 [MCQ - 1M]** Gauge Factor (GF) for a strain gauge is defined as:
- (A) GF = ΔR/R
- (B) GF = (ΔR/R) / ε
- (C) GF = ε × R
- (D) GF = ΔR × ε
> **Answer: (B).** GF = (ΔR/R) / ε.

**Q3.3 [NAT - 2M]** For a quarter-bridge circuit with Vs=10V, GF=2.0, ε=1000με: output voltage Vo?
> **Answer:** Vo = (Vs/4) × GF × ε = (10/4) × 2.0 × 1000×10⁻⁶ = 5.0 mV.

**Q3.4 [MCQ - 2M]** A half-bridge configuration with two active gauges (one in tension, one in compression) gives output:
- (A) Same as quarter-bridge
- (B) Double the quarter-bridge output
- (C) Half the quarter-bridge output
- (D) Zero output
> **Answer: (B).** Half-bridge with two active opposing gauges doubles sensitivity: Vo = (Vs/2) × GF × ε.

**Q3.5 [NAT - 2M]** For a full Wheatstone bridge with all 4 gauges active (2 tension, 2 compression), Vs=5V, GF=2, ε=500με: Vo?
> **Answer:** Vo = Vs × GF × ε = 5 × 2 × 500×10⁻⁶ = 5.0 mV.

**Q3.6 [MCQ - 1M]** The sensitivity of a full bridge vs quarter bridge (for same parameters):
- (A) Full = Quarter
- (B) Full = 2× Quarter
- (C) Full = 4× Quarter
- (D) Full = 1/4 × Quarter
> **Answer: (C).** Full bridge: 4× sensitivity compared to quarter bridge.

**Q3.7 [NAT - 2M]** Gauge Factor formula includes piezoresistive effect: GF = 1 + 2ν + Δρ/(ρε). For metal foil gauges, which term dominates?
> **Answer:** The geometric term (1 + 2ν), where ν≈0.3, giving GF ≈ 1.6. For semiconductor gauges, piezoresistive term Δρ/(ρε) dominates (GF=50-150).

**Q3.8 [MCQ - 2M]** Temperature compensation in a Wheatstone bridge is achieved by:
- (A) Using a dummy gauge in the adjacent arm
- (B) Using a single active gauge
- (C) Increasing excitation voltage
- (D) Using AC excitation only
> **Answer: (A).** A dummy gauge in same thermal environment but unstressed cancels temperature effects.

**Q3.9 [NAT - 2M]** A quarter-bridge circuit with R=120Ω, GF=2.05, Vs=10V, ε=800με: compute Vo in mV.
> **Answer:** Vo = (Vs/4) × GF × ε = (10/4) × 2.05 × 800×10⁻⁶ = 2.5 × 2.05 × 8×10⁻⁴ = 4.10 mV.

**Q3.10 [MCQ - 1M]** The Wheatstone bridge is balanced (Vo=0) when:
- (A) R1=R2=R3=R4
- (B) R1/R2 = R4/R3
- (C) R1+R2 = R3+R4
- (D) R1×R3 = R2×R4
> **Answer: (B).** Balance condition: R1/R2 = R4/R3 (or equivalently R1×R3 = R2×R4).

**Q3.11 [NAT - 2M]** Metal foil strain gauge GF is approximately:
> **Answer:** GF ≈ 2 (range 1.8–2.2 for typical metal foil gauges).

**Q3.12 [MCQ - 2M]** The lead wire resistance effect in long cable strain gauge installations is compensated by:
- (A) 3-wire connection scheme
- (B) 4-wire (Kelvin) connection
- (C) Increasing gauge resistance
- (D) Using lower excitation voltage
> **Answer: (A).** 3-wire connection eliminates lead resistance in quarter-bridge configurations.

**Q3.13 [NAT - 2M]** For a strain gauge rosette (3 gauges at 0°, 45°, 90°), how many strain components can be determined?
> **Answer:** 3 independent strain components: εx, εy, and γxy (shear strain).

**Q3.14 [MCQ - 1M]** Piezoresistive strain gauges (semiconductor) have GF approximately:
- (A) 2
- (B) 10–20
- (C) 50–150
- (D) 500
> **Answer: (C).**

**Q3.15 [NAT - 2M]** A strain gauge measures 2000με on a steel bar (E=200 GPa). What is the stress σ?
> **Answer:** σ = E × ε = 200×10⁹ × 2000×10⁻⁶ = 400 MPa.

**Q3.16 [MCQ - 2M]** An unbalanced Wheatstone bridge (one gauge changed by ΔR): the linear approximation for small ΔR is:
- (A) Vo = Vs × ΔR/R
- (B) Vo ≈ (Vs/4) × ΔR/R
- (C) Vo = Vs × ΔR
- (D) Vo = ΔR/R
> **Answer: (B).**

**Q3.17 [NAT - 2M]** The non-linearity error of a quarter-bridge for large strains occurs because:
> **Answer:** The linear approximation Vo ≈ (Vs/4)×GF×ε breaks down for large ΔR/R (non-linear bridge response).

**Q3.18 [MCQ - 1M]** Excitation voltage Vs in a Wheatstone bridge should be:
- (A) As high as possible for maximum sensitivity
- (B) Limited by allowable self-heating of the gauges
- (C) Always 5V DC
- (D) Always AC only
> **Answer: (B).**

**Q3.19 [NAT - 2M]** For a full bridge Wheatstone with Vs=12V, GF=2.1, ε=600με: Vo?
> **Answer:** Vo = Vs × GF × ε = 12 × 2.1 × 600×10⁻⁶ = 15.12 mV.

**Q3.20 [MCQ - 2M]** The resolution of a strain gauge bridge measurement system is primarily limited by:
- (A) Gauge factor
- (B) Excitation voltage
- (C) Amplifier noise floor and ADC resolution
- (D) Cable length
> **Answer: (C).**

**Q3.21 [NAT - 2M]** A bridge circuit has Vs=10V and Vo=5mV for ε=1000με (quarter bridge). What is the effective GF?
> **Answer:** GF = 4×Vo/(Vs×ε) = 4×5×10⁻³/(10×1000×10⁻⁶) = 0.02/0.01 = 2.0.

**Q3.22 [MCQ - 1M]** The transverse sensitivity of a strain gauge causes:
- (A) Increased output for axial strain
- (B) Small erroneous output due to strain perpendicular to gauge axis
- (C) Bridge imbalance
- (D) Temperature sensitivity
> **Answer: (B).**

**Q3.23 [NAT - 2M]** Poisson's ratio ν for steel ≈ 0.3. For a uniaxial tensile strain ε=1000με, the transverse strain εt = ?
> **Answer:** εt = -ν × ε = -0.3 × 1000 = -300 με (compressive).

**Q3.24 [MCQ - 2M]** An S-type load cell uses:
- (A) Piezoelectric elements
- (B) 4 strain gauges in full Wheatstone bridge (2 tension, 2 compression on S-beam)
- (C) LVDT
- (D) Capacitive plates
> **Answer: (B).**

**Q3.25 [NAT - 2M]** For a load cell with sensitivity 2mV/V and Vs=10V: output at full scale load (rated capacity)?
> **Answer:** Output = 2mV/V × 10V = 20 mV full scale.

---

### SECTION B: TEMPERATURE SENSORS (RTD & THERMISTOR) — 15 Questions

**Q3.26 [MCQ - 1M]** PT100 RTD has nominal resistance at 0°C of:
- (A) 100 Ω
- (B) 1000 Ω
- (C) 50 Ω
- (D) 200 Ω
> **Answer: (A).** PT100: 100 Ω at 0°C.

**Q3.27 [NAT - 2M]** PT100 RTD: resistance at 100°C using linear approximation R(T) = R₀(1 + αT) with α=0.00385/°C?
> **Answer:** R(100) = 100(1 + 0.00385×100) = 100(1.385) = 138.5 Ω.

**Q3.28 [MCQ - 2M]** NTC thermistors have:
- (A) Resistance increasing with temperature (positive coefficient)
- (B) Resistance decreasing with temperature (negative coefficient)
- (C) Constant resistance
- (D) Linear resistance vs temperature
> **Answer: (B).** NTC = Negative Temperature Coefficient.

**Q3.29 [NAT - 2M]** The Steinhart-Hart equation for thermistors: 1/T = A + B×ln(R) + C×(ln(R))³. How many calibration constants needed?
> **Answer:** 3 constants (A, B, C).

**Q3.30 [MCQ - 1M]** RTDs (Resistance Temperature Detectors) use which material?
- (A) Carbon
- (B) Platinum (and sometimes nickel, copper)
- (C) Silicon
- (D) Germanium
> **Answer: (B).**

**Q3.31 [NAT - 2M]** PT1000 RTD has resistance at 0°C = ?
> **Answer:** 1000 Ω (PT1000: "1000" denotes 1000 Ω at 0°C).

**Q3.32 [MCQ - 2M]** Advantage of RTD over thermocouple:
- (A) Lower cost
- (B) Higher linearity and accuracy
- (C) Wider temperature range
- (D) No external reference needed
> **Answer: (B).**

**Q3.33 [NAT - 2M]** A 4-wire RTD connection eliminates which error?
> **Answer:** Lead wire resistance error (eliminates both lead resistances from the measurement circuit).

**Q3.34 [MCQ - 1M]** PTC thermistors (Positive Temperature Coefficient) increase resistance with:
- (A) Decreasing temperature
- (B) Increasing temperature
- (C) Constant resistance
- (D) Pressure increase
> **Answer: (B).**

**Q3.35 [NAT - 2M]** A thermocouple generates voltage due to:
> **Answer:** The Seebeck effect (thermoelectric effect) — dissimilar metals at different temperatures generate a voltage proportional to the temperature difference.

**Q3.36 [MCQ - 2M]** Type K thermocouple uses:
- (A) Copper-Constantan
- (B) Chromel-Alumel
- (C) Platinum-Rhodium
- (D) Iron-Constantan
> **Answer: (B).**

**Q3.37 [NAT - 2M]** The sensitivity of a thermocouple (Type K) is approximately:
> **Answer:** ~41 μV/°C.

**Q3.38 [MCQ - 1M]** Self-heating error in temperature sensors occurs when:
- (A) Temperature is too high
- (B) Measurement current causes I²R heating in the sensor
- (C) Ambient humidity is high
- (D) Cable is too long
> **Answer: (B).**

**Q3.39 [NAT - 2M]** The cold junction compensation for thermocouples corrects for:
> **Answer:** The reference junction not being at 0°C — compensates for the ambient temperature of the measurement instrument.

**Q3.40 [MCQ - 2M]** Infrared (IR) thermometers measure temperature by detecting:
- (A) Resistance change
- (B) Emitted thermal radiation (Stefan-Boltzmann law: P=εσAT⁴)
- (C) Seebeck voltage
- (D) Piezoelectric charge
> **Answer: (B).**

---

### SECTION C: POSITION SENSORS (LVDT, CAPACITIVE, ENCODER) — 25 Questions

**Q3.41 [MCQ - 1M]** LVDT (Linear Variable Differential Transformer) measures:
- (A) Temperature
- (B) Linear displacement
- (C) Angular velocity
- (D) Pressure
> **Answer: (B).**

**Q3.42 [NAT - 2M]** The LVDT output voltage is zero when the core is at:
> **Answer:** The null position (center/midpoint between the two secondary coils).

**Q3.43 [MCQ - 2M]** LVDT uses which electromagnetic principle?
- (A) Hall effect
- (B) Mutual inductance between primary and two secondary coils
- (C) Piezoelectric effect
- (D) Capacitive coupling
> **Answer: (B).**

**Q3.44 [NAT - 2M]** The null residual voltage in LVDT at center position is ideally:
> **Answer:** 0 V (theoretically), but in practice there is a small residual voltage due to imperfect coupling.

**Q3.45 [MCQ - 1M]** LVDT is preferred for precision displacement measurement because:
- (A) Low cost
- (B) Frictionless measurement, infinite resolution, good linearity
- (C) It measures both temperature and displacement
- (D) It requires no excitation
> **Answer: (B).**

**Q3.46 [MCQ - 2M]** For a capacitive displacement sensor (parallel plate: C = ε₀εᵣA/d), which type varies gap d?
- (A) Variable-area type
- (B) Variable-gap type
- (C) Variable-dielectric type
- (D) All of the above
> **Answer: (B).**

**Q3.47 [NAT - 2M]** Capacitive sensor: C = ε₀A/d with ε₀=8.85×10⁻¹² F/m, A=10 cm² = 10×10⁻⁴ m², d=1mm=10⁻³m. Compute C.
> **Answer:** C = 8.85×10⁻¹² × 10×10⁻⁴ / 10⁻³ = 8.85×10⁻¹² × 1 = 8.85×10⁻¹² F = 8.85 pF.

**Q3.48 [MCQ - 1M]** The relationship between capacitance C and gap d in variable-gap capacitive sensor is:
- (A) C ∝ d (linear)
- (B) C ∝ 1/d (nonlinear/hyperbolic)
- (C) C = constant
- (D) C ∝ d²
> **Answer: (B).** C = ε₀A/d → nonlinear response.

**Q3.49 [NAT - 2M]** An incremental encoder has 500 pulses per revolution. Shaft rotates at 3000 RPM. Pulse frequency?
> **Answer:** f = (pulses/rev) × (rev/s) = 500 × (3000/60) = 500 × 50 = 25,000 Hz = 25 kHz.

**Q3.50 [MCQ - 2M]** Quadrature encoding uses two signals A and B with 90° phase difference to determine:
- (A) Position only
- (B) Both position AND direction of rotation
- (C) Speed only
- (D) Torque
> **Answer: (B).**

**Q3.51 [NAT - 2M]** An absolute encoder with 12-bit resolution can distinguish how many positions per revolution?
> **Answer:** 2¹² = 4096 positions per revolution.

**Q3.52 [MCQ - 1M]** Absolute encoders use which code to avoid large errors during transitions between adjacent positions?
- (A) Binary code
- (B) BCD code
- (C) Gray code
- (D) ASCII code
> **Answer: (C).** Gray code: adjacent positions differ by only 1 bit.

**Q3.53 [NAT - 2M]** Gray code for decimal 3 (binary 011) is:
> **Answer:** 010 (XOR adjacent bits of binary: 0⊕1=1→but Gray: MSB=0, next=0⊕1=1, next=1⊕1=0 → 010).

**Q3.54 [MCQ - 2M]** An incremental encoder at startup does not know absolute position. This is resolved by:
- (A) Using a higher PPR encoder
- (B) Using an index (Z) channel pulse once per revolution
- (C) Adding a temperature sensor
- (D) Running the motor slowly
> **Answer: (B).**

**Q3.55 [NAT - 2M]** Resolution of an optical encoder with X4 quadrature decoding and 1000 PPR:
> **Answer:** Resolution = 1000 × 4 = 4000 counts/revolution. Angular resolution = 360°/4000 = 0.09°.

**Q3.56 [MCQ - 1M]** RVDT (Rotary Variable Differential Transformer) measures:
- (A) Linear displacement
- (B) Angular displacement (rotary)
- (C) Temperature
- (D) Pressure
> **Answer: (B).**

**Q3.57 [NAT - 2M]** A resolver outputs two signals: V_sin = Vr×sin(θ) and V_cos = Vr×cos(θ). For θ=30°, Vr=10V: V_sin = ?
> **Answer:** V_sin = 10×sin(30°) = 10×0.5 = 5V.

**Q3.58 [MCQ - 2M]** Potentiometric position sensors have which disadvantage compared to LVDTs?
- (A) Lower resolution
- (B) Friction and wear (mechanical contact)
- (C) No output voltage
- (D) Require AC excitation
> **Answer: (B).**

**Q3.59 [NAT - 2M]** A linear potentiometer has total length 100 mm, total resistance 10 kΩ, Vs=5V. For wiper at 30 mm from start: Vo?
> **Answer:** Vo = (30/100) × 5V = 1.5V.

**Q3.60 [MCQ - 1M]** The drawback of variable-gap capacitive sensors is:
- (A) Low sensitivity
- (B) Nonlinear output (C ∝ 1/d)
- (C) Requires contact
- (D) Cannot measure small displacements
> **Answer: (B).**

**Q3.61 [MCQ - 2M]** Optical fiber displacement sensors operate on principle of:
- (A) Intensity modulation of reflected light as function of displacement
- (B) Hall effect
- (C) Piezoelectric charge
- (D) Inductive coupling
> **Answer: (A).**

**Q3.62 [NAT - 2M]** Laser interferometer can measure displacement with resolution down to:
> **Answer:** Sub-nanometer (typically λ/2 or better for optical interferometry, ~0.3 nm for standard HeNe laser).

**Q3.63 [MCQ - 1M]** A 16-bit absolute encoder can resolve rotary positions to within:
- (A) 360°/256 ≈ 1.4°
- (B) 360°/65536 ≈ 0.0055°
- (C) 360°/1024 ≈ 0.35°
- (D) 360°/4096 ≈ 0.088°
> **Answer: (B).** 2¹⁶ = 65536 positions.

**Q3.64 [NAT - 2M]** LVDT output changes sign when core moves to opposite side of null because:
> **Answer:** The phase of the differential output voltage reverses (180° phase shift) when core crosses null, indicating direction of displacement.

**Q3.65 [MCQ - 2M]** A magnetostrictive linear position sensor uses which principle?
- (A) Resistance change with strain
- (B) Torsional pulse traveling time along ferromagnetic waveguide
- (C) Inductive coupling
- (D) Optical interference
> **Answer: (B).**

---

### SECTION D: OTHER SENSORS & SIGNAL CONDITIONING — 35 Questions

**Q3.66 [MCQ - 1M]** Piezoelectric sensors cannot measure static (DC) loads because:
- (A) Their sensitivity is too low for static loads
- (B) Charge leaks through internal resistance (acts as high-pass filter)
- (C) They require moving targets
- (D) Temperature interferes with static measurements
> **Answer: (B).**

**Q3.67 [NAT - 2M]** The high-pass cutoff frequency of a piezoelectric sensor circuit with C=10nF and Ramp=10MΩ:
> **Answer:** fc = 1/(2πRC) = 1/(2π × 10×10⁶ × 10×10⁻⁹) = 1/(2π × 0.1) = 1.59 Hz.

**Q3.68 [MCQ - 2M]** Piezoelectric voltage sensitivity g (V/m per Pa) and charge sensitivity d (C/N) are related by:
- (A) g = d × ε_r × ε_0
- (B) g = d / (ε_r × ε_0)
- (C) g = d × ε_0
- (D) g = 1/d
> **Answer: (B).** g = d/ε where ε is the permittivity.

**Q3.69 [NAT - 2M]** Hall effect voltage formula: V_H = (R_H × I × B) / t. For I=1A, B=0.5T, t=1mm, R_H=6×10⁻⁴ m³/C: V_H?
> **Answer:** V_H = (6×10⁻⁴ × 1 × 0.5) / (1×10⁻³) = 3×10⁻⁴ / 10⁻³ = 0.3 V.

**Q3.70 [MCQ - 1M]** Hall effect sensors measure:
- (A) Temperature
- (B) Magnetic field (and indirectly: current, position, speed)
- (C) Pressure
- (D) Humidity
> **Answer: (B).**

**Q3.71 [NAT - 2M]** A MEMS accelerometer uses which principle?
> **Answer:** Capacitive displacement sensing of a proof mass (seismic mass) on a spring-mass system (or piezoelectric, piezoresistive).

**Q3.72 [MCQ - 2M]** A 3-op-amp instrumentation amplifier (INA) has gain:
- (A) G = 1 + R_f/R_in
- (B) G = 1 + 2R/R_G (set by single resistor R_G)
- (C) G = R2/R1
- (D) G = 2R_f/R_G
> **Answer: (B).** INA gain: G = 1 + 2R/R_G.

**Q3.73 [NAT - 2M]** INA with R=25kΩ each and R_G=1kΩ: gain G?
> **Answer:** G = 1 + 2(25000)/1000 = 1 + 50 = 51.

**Q3.74 [MCQ - 1M]** The key advantage of an instrumentation amplifier over a single op-amp differential amplifier is:
- (A) Lower gain
- (B) Very high input impedance and high CMRR
- (C) Simpler circuit
- (D) Lower cost
> **Answer: (B).**

**Q3.75 [NAT - 2M]** CMRR (Common Mode Rejection Ratio) in dB for a differential amplifier: If differential gain = 1000 and common-mode gain = 0.1: CMRR?
> **Answer:** CMRR = 20×log(1000/0.1) = 20×log(10000) = 20×4 = 80 dB.

**Q3.76 [MCQ - 2M]** An active low-pass filter (1st order) with R=10kΩ, C=1μF has cutoff frequency fc:
- (A) fc = RC = 0.01 Hz
- (B) fc = 1/(2πRC) = 15.9 Hz
- (C) fc = 1/(RC) = 100 Hz
- (D) fc = 2πRC = 62.8 Hz
> **Answer: (B).** fc = 1/(2π×10000×10⁻⁶) = 1/(0.0628) ≈ 15.9 Hz.

**Q3.77 [NAT - 2M]** For a Sallen-Key 2nd order low-pass filter, the roll-off rate is:
> **Answer:** -40 dB/decade (or -12 dB/octave) — characteristic of 2nd order filter.

**Q3.78 [MCQ - 1M]** Anti-aliasing filter should have cutoff frequency:
- (A) Equal to sampling frequency
- (B) Equal to or below half the sampling frequency (Nyquist)
- (C) Twice the sampling frequency
- (D) Independent of sampling frequency
> **Answer: (B).**

**Q3.79 [NAT - 2M]** Nyquist theorem: to reconstruct a 5 kHz signal, minimum sampling rate fs:
> **Answer:** fs ≥ 2 × 5 kHz = 10 kHz (Nyquist criterion).

**Q3.80 [MCQ - 2M]** A charge amplifier (op-amp with feedback capacitor Cf) connected to a piezoelectric sensor with charge sensitivity d gives output:
- (A) Vo = d × F × Cf
- (B) Vo = -d × F / Cf
- (C) Vo = F / (d × Cf)
- (D) Vo = d × Cf × F²
> **Answer: (B).** Vo = -Q/Cf = -(d×F)/Cf.

**Q3.81 [NAT - 2M]** An ultrasonic distance sensor emits pulse at t=0, receives echo at t=2ms. Speed of sound = 340 m/s. Distance to target?
> **Answer:** Distance = (v × t)/2 = (340 × 2×10⁻³)/2 = 0.34 m = 34 cm.

**Q3.82 [MCQ - 1M]** LiDAR uses which emission for ranging?
- (A) Ultrasound
- (B) Laser light (infrared or visible)
- (C) Radio waves (RADAR)
- (D) X-rays
> **Answer: (B).**

**Q3.83 [NAT - 2M]** For a pressure transducer with range 0-10 bar and output 4-20 mA: output current at 5 bar?
> **Answer:** Linear: I = 4 + (5/10)×(20-4) = 4 + 8 = 12 mA.

**Q3.84 [MCQ - 2M]** The advantage of 4-20 mA current loop signal transmission (vs 0-10V voltage):
- (A) Simpler circuitry
- (B) Immune to voltage drops in long cables; live-zero (4mA) detects broken wire
- (C) Lower cost
- (D) Higher bandwidth
> **Answer: (B).**

**Q3.85 [NAT - 2M]** An ADC with n=12 bits and reference Vref=5V has resolution (LSB value)?
> **Answer:** LSB = Vref / 2ⁿ = 5 / 4096 ≈ 1.22 mV.

**Q3.86 [MCQ - 1M]** A 16-bit ADC with ±10V range: resolution?
- (A) 10V/65536 ≈ 0.153 mV per LSB (for 0-10V)
- (B) 20V/65536 ≈ 0.305 mV per LSB (for ±10V = 20V full scale)
- (C) 10V/1024 ≈ 9.77 mV
- (D) 5V/65536 ≈ 76 μV
> **Answer: (B).**

**Q3.87 [MCQ - 2M]** Signal aliasing occurs when:
- (A) Sensor sensitivity is too high
- (B) Signal frequency exceeds fs/2 (Nyquist frequency)
- (C) Amplifier gain is too large
- (D) Cable resistance is too high
> **Answer: (B).**

**Q3.88 [NAT - 2M]** A DAC with 8 bits and reference 5V: output for input code 128 (decimal)?
> **Answer:** Vo = (128/256) × 5V = 0.5 × 5V = 2.5V.

**Q3.89 [MCQ - 1M]** The S/H (Sample and Hold) circuit in data acquisition systems:
- (A) Amplifies the signal
- (B) Captures and holds analog input value during ADC conversion
- (C) Filters high-frequency noise
- (D) Converts analog to digital
> **Answer: (B).**

**Q3.90 [MCQ - 2M]** DMA (Direct Memory Access) in data acquisition:
- (A) Performs analog-to-digital conversion
- (B) Transfers data from ADC to memory without CPU intervention
- (C) Amplifies sensor signals
- (D) Filters digital data
> **Answer: (B).**

**Q3.91 [NAT - 2M]** A signal conditioner converts a 4-20mA sensor output to 0-10V for an ADC. What resistance R should be used (current-to-voltage)?
> **Answer:** V = I × R. For 20mA → 10V: R = 10V/20mA = 500Ω. For 4mA → 0V offset also needs subtraction circuit, but simple: R = 500Ω with op-amp offset.

**Q3.92 [MCQ - 1M]** Isolation amplifiers are used when:
- (A) More gain is needed
- (B) High common-mode voltages or patient safety isolation is required
- (C) Low noise is needed
- (D) The signal is digital
> **Answer: (B).**

**Q3.93 [NAT - 2M]** For a gyroscope (MEMS), the Coriolis force is: F = 2m(ω × v_rel). For m=10⁻⁶ kg, ω=100 rad/s, v_rel=0.01 m/s: F?
> **Answer:** F = 2 × 10⁻⁶ × 100 × 0.01 = 2 × 10⁻⁶ N = 2 μN.

**Q3.94 [MCQ - 2M]** IMU (Inertial Measurement Unit) combines:
- (A) Encoder + temperature sensor
- (B) Accelerometer + gyroscope (+ optional magnetometer)
- (C) Strain gauge + LVDT
- (D) Hall sensor + encoder
> **Answer: (B).**

**Q3.95 [NAT - 2M]** Force-torque sensors at robot wrist use how many sensing axes?
> **Answer:** 6 axes (Fx, Fy, Fz, Mx, My, Mz) — full 3D force and moment measurement.

**Q3.96 [MCQ - 1M]** The Seebeck coefficient of a thermocouple determines its:
- (A) Accuracy
- (B) Output voltage sensitivity (μV/°C)
- (C) Time constant
- (D) Maximum temperature range
> **Answer: (B).**

**Q3.97 [NAT - 2M]** Active noise cancellation in signal processing uses:
> **Answer:** A reference microphone to capture noise, then generates anti-phase (inverted) signal to cancel noise from the main signal path.

**Q3.98 [MCQ - 2M]** The purpose of a Wheatstone bridge in sensor circuits:
- (A) To amplify the signal
- (B) To measure small resistance changes with high accuracy by comparing to reference resistors
- (C) To isolate the sensor
- (D) To filter noise
> **Answer: (B).**

**Q3.99 [NAT - 2M]** An incremental encoder on a motor shaft: if pulse count = 800 in 0.1 seconds and PPR = 200: shaft speed in RPM?
> **Answer:** Pulses/s = 800/0.1 = 8000. Revolutions/s = 8000/200 = 40 rev/s. Speed = 40×60 = 2400 RPM.

**Q3.100 [MCQ - 1M]** MEMS stands for:
- (A) Mechanical Electromagnetic Motion System
- (B) Micro-Electro-Mechanical Systems
- (C) Modular Electronic Manufacturing System
- (D) Multiple Electrical Measurement Sensors
> **Answer: (B).**

---
*Module 3 Complete — 100 Questions*
