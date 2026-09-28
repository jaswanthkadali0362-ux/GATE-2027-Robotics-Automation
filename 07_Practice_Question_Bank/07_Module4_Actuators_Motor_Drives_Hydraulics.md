# MODULE 4: ACTUATORS, MOTOR DRIVES, STEPPERS & FLUID POWER
## 100 Practice Questions — GATE RA 2027

---

### SECTION A: DC MOTORS & DRIVES — 30 Questions

**Q4.1 [MCQ - 1M]** The back-EMF of a PMDC motor is given by:
- (A) Eb = Ka × Ia
- (B) Eb = Ke × ω
- (C) Eb = Kt × T
- (D) Eb = V - Ia × Ra
> **Answer: (B).** Eb = Ke × ω (back-EMF constant × angular speed).

**Q4.2 [NAT - 2M]** A PMDC motor: V=24V, Ra=1Ω, Ke=0.1 V·s/rad. At stall (ω=0): stall current Ia?
> **Answer:** At stall, Eb=0. Ia = (V-Eb)/Ra = 24/1 = 24 A.

**Q4.3 [MCQ - 2M]** The speed-torque characteristic of a PMDC motor is:
- (A) Constant speed (flat)
- (B) Linearly decreasing speed with increasing torque (drooping)
- (C) Nonlinearly increasing
- (D) Exponentially decreasing
> **Answer: (B).** ω = V/Ke - (Ra/(Ke×Kt))×T — linear drooping characteristic.

**Q4.4 [NAT - 2M]** PMDC motor: Ke=Kt=0.05 Nm/A, Ra=2Ω, V=12V. No-load speed ω_nl?
> **Answer:** At no load, T≈0, Ia≈0. ω_nl = V/Ke = 12/0.05 = 240 rad/s.

**Q4.5 [MCQ - 1M]** The torque of a PMDC motor is proportional to:
- (A) Speed ω
- (B) Armature current Ia
- (C) Supply voltage V
- (D) Back-EMF Eb
> **Answer: (B).** T = Kt × Ia.

**Q4.6 [NAT - 2M]** PMDC motor: V=12V, Ra=1Ω, Ke=Kt=0.1. At ω=80 rad/s, find Ia and torque T.
> **Answer:** Eb=0.1×80=8V. Ia=(12-8)/1=4A. T=0.1×4=0.4 Nm.

**Q4.7 [MCQ - 2M]** PWM (Pulse Width Modulation) speed control of DC motor controls effective:
- (A) Motor resistance
- (B) Average voltage applied to motor (duty cycle × Vdc)
- (C) Motor flux
- (D) Armature inductance
> **Answer: (B).**

**Q4.8 [NAT - 2M]** A PWM H-bridge with Vdc=24V and duty cycle D=0.6: average motor voltage?
> **Answer:** Vavg = D × Vdc = 0.6 × 24 = 14.4V.

**Q4.9 [MCQ - 1M]** H-bridge motor driver uses how many power transistors (switches)?
- (A) 2
- (B) 4
- (C) 6
- (D) 8
> **Answer: (B).** 4 switches (Q1-Q4) forming the H-bridge.

**Q4.10 [NAT - 2M]** A PMDC motor mechanical time constant τ_m = Ra×J/(Ke×Kt). For Ra=2Ω, J=0.01 kg·m², Ke=Kt=0.1 Nm/A: τ_m?
> **Answer:** τ_m = (2 × 0.01)/(0.1×0.1) = 0.02/0.01 = 2 s.

**Q4.11 [MCQ - 2M]** The electrical time constant of a DC motor τ_e = L/R is:
- (A) Usually much larger than mechanical time constant
- (B) Usually much smaller than mechanical time constant
- (C) Equal to mechanical time constant
- (D) Independent of armature resistance
> **Answer: (B).** τ_e << τ_m typically.

**Q4.12 [NAT - 2M]** Motor efficiency η = Pout/Pin × 100%. Pout=200W, Pin=250W. Efficiency?
> **Answer:** η = 200/250 × 100% = 80%.

**Q4.13 [MCQ - 1M]** Regenerative braking in motor drive systems:
- (A) Wastes energy as heat
- (B) Returns energy back to DC bus (motor acts as generator)
- (C) Uses friction brakes
- (D) Disconnects motor from load
> **Answer: (B).**

**Q4.14 [NAT - 2M]** A DC servo motor with Ke=0.05 V·s/rad runs at ω=200 rad/s. Back-EMF?
> **Answer:** Eb = Ke × ω = 0.05 × 200 = 10V.

**Q4.15 [MCQ - 2M]** Field weakening control of DC motor allows:
- (A) Higher torque at low speeds
- (B) Higher speed above base speed at constant power
- (C) Better braking
- (D) Reduced armature current
> **Answer: (B).**

**Q4.16 [NAT - 2M]** For a DC motor: T×ω = electrical power input minus losses. At T=5 Nm, ω=100 rad/s, Ra=0.5Ω, Ia=8A: mechanical output power?
> **Answer:** Pmech = T×ω = 5×100 = 500W. Electrical: Pin = Eb×Ia = (V-Ia×Ra)×Ia. Or simply Pmech = T×ω = **500W**.

**Q4.17 [MCQ - 1M]** Brushless DC (BLDC) motor uses what for commutation?
- (A) Carbon brushes
- (B) Electronic commutation via Hall effect sensors and inverter
- (C) Slip rings
- (D) Mechanical commutator
> **Answer: (B).**

**Q4.18 [NAT - 2M]** BLDC motor with 3 Hall sensors spaced 120° apart: how many switching states per revolution?
> **Answer:** 6 switching states (6-step commutation) per electrical cycle.

**Q4.19 [MCQ - 2M]** Compared to brushed DC motors, BLDC motors offer:
- (A) Lower efficiency
- (B) Longer life (no brush wear), lower maintenance, higher efficiency
- (C) Simpler driver electronics
- (D) Lower cost
> **Answer: (B).**

**Q4.20 [NAT - 2M]** A servo motor encoder has 2000 PPR. At 1500 RPM, how many pulses per second?
> **Answer:** Pulses/s = 2000 × (1500/60) = 2000 × 25 = 50,000 Hz = 50 kHz.

**Q4.21 [MCQ - 1M]** Torque ripple in motors is caused by:
- (A) Bearing friction
- (B) Cogging (magnetic slots interaction) and commutation
- (C) Motor overheating
- (D) Encoder noise
> **Answer: (B).**

**Q4.22 [NAT - 2M]** A DC motor rated 12V, 5A. Thermal resistance Rth=5°C/W, ambient temperature Ta=25°C. At rated load, junction temperature?
> **Answer:** Power dissipated in Ra: Ploss = Ia²×Ra. Without Ra given, assume all input as heat: P=V×I=60W (worst case). T_j = Ta + Rth×P = 25+5×60 = 325°C (unrealistic — this is why we only dissipate copper losses). For copper losses with Ra=1Ω: P=25W. T_j=25+5×25=150°C.

**Q4.23 [MCQ - 2M]** The armature reaction in DC motors:
- (A) Increases flux
- (B) Distorts and reduces main field flux
- (C) Has no effect
- (D) Increases back-EMF
> **Answer: (B).**

**Q4.24 [NAT - 2M]** Motor rated torque T=10 Nm at speed ω=100 rad/s. Mechanical output power?
> **Answer:** P = T×ω = 10×100 = 1000W = 1 kW.

**Q4.25 [MCQ - 1M]** The speed regulation of a DC motor is defined as:
- (A) (ω_nl - ω_fl)/ω_fl × 100%
- (B) ω_nl/ω_fl
- (C) ω_fl/ω_nl
- (D) (ω_nl + ω_fl)/2
> **Answer: (A).** Speed regulation = (no-load speed - full-load speed)/full-load speed × 100%.

**Q4.26 [NAT - 2M]** PMDC motor: ω_nl=200 rad/s, ω_fl=180 rad/s. Speed regulation?
> **Answer:** SR = (200-180)/180 × 100% = 11.1%.

**Q4.27 [MCQ - 2M]** Four-quadrant operation of DC drive allows:
- (A) Forward motoring only
- (B) Forward motoring + forward braking + reverse motoring + reverse braking
- (C) Only speed control
- (D) Only torque control
> **Answer: (B).**

**Q4.28 [NAT - 2M]** Gear ratio G (motor-to-load): reflected load inertia at motor shaft = ?
> **Answer:** J_reflected = J_load / G². (Gear ratio reduces inertia by G².)

**Q4.29 [MCQ - 1M]** Optimal gear ratio for maximum load acceleration is when:
- (A) G = 1 (direct drive)
- (B) G = √(J_load/J_motor) (inertia matching)
- (C) G is maximized
- (D) J_load = 0
> **Answer: (B).**

**Q4.30 [NAT - 2M]** Motor J_motor=0.001 kg·m², load J_load=0.1 kg·m². Optimal gear ratio G?
> **Answer:** G = √(J_load/J_motor) = √(0.1/0.001) = √100 = 10.

---

### SECTION B: STEPPER MOTORS — 25 Questions

**Q4.31 [MCQ - 1M]** The step angle formula for a stepper motor is:
- (A) β = m × Nr × 360°
- (B) β = 360° / (m × Nr)
- (C) β = Nr / (m × 360°)
- (D) β = m / (Nr × 360°)
> **Answer: (B).** β = 360° / (m × Nr) where m = number of phases, Nr = rotor teeth.

**Q4.32 [NAT - 2M]** 4-phase hybrid stepper motor with 50 rotor teeth: full step angle?
> **Answer:** β = 360° / (4 × 50) = 360° / 200 = 1.8°.

**Q4.33 [MCQ - 2M]** Half-stepping mode of a stepper motor:
- (A) Doubles the step angle
- (B) Halves the step angle (doubles resolution)
- (C) Changes direction
- (D) Reduces torque by 4×
> **Answer: (B).**

**Q4.34 [NAT - 2M]** Stepper motor: 4-phase, Nr=50 rotor teeth. Half-step angle?
> **Answer:** β_half = 1.8°/2 = 0.9°.

**Q4.35 [MCQ - 1M]** Variable Reluctance (VR) stepper motor operates by:
- (A) Permanent magnet attraction
- (B) Minimizing reluctance path (aligning salient rotor teeth with energized stator poles)
- (C) Electromagnetic induction
- (D) Piezoelectric actuation
> **Answer: (B).**

**Q4.36 [NAT - 2M]** Hybrid stepper motor step angle for m=4, Nr=50 in microstep mode with 16 microsteps/full step:
> **Answer:** Microstep angle = 1.8°/16 = 0.1125°.

**Q4.37 [MCQ - 2M]** The pull-in torque of a stepper motor is:
- (A) Maximum torque at locked rotor
- (B) Maximum torque at which motor can start, stop, or reverse without losing steps
- (C) Torque at rated speed
- (D) Minimum holding torque
> **Answer: (B).**

**Q4.38 [NAT - 2M]** Stepper motor CNC drive: β=1.8°, lead screw pitch=5mm/rev. Linear displacement per step?
> **Answer:** Linear/step = (β/360°) × pitch = (1.8/360) × 5 = 0.025 mm = 25 μm.

**Q4.39 [MCQ - 1M]** The slew rate of a stepper motor is:
- (A) Maximum torque
- (B) Maximum speed (steps/s) at which motor can run without losing synchronism in continuous motion
- (C) Starting speed
- (D) Detent torque
> **Answer: (B).**

**Q4.40 [NAT - 2M]** Stepper motor: β=1.8°, max slew rate=2000 steps/s. Maximum rotational speed in RPM?
> **Answer:** Steps/rev = 360/1.8 = 200. RPM = (2000 steps/s × 60s/min) / 200 steps/rev = 600 RPM.

**Q4.41 [MCQ - 2M]** Stepper motor loses synchronism when:
- (A) Temperature drops
- (B) Required acceleration/load torque exceeds available motor torque
- (C) Voltage is too high
- (D) Encoder feedback is lost
> **Answer: (B).**

**Q4.42 [NAT - 2M]** Number of steps for a stepper motor (β=1.8°, full step) to rotate 90°:
> **Answer:** Steps = 90°/1.8° = 50 steps.

**Q4.43 [MCQ - 1M]** Open-loop stepper motor control is possible because:
- (A) It has built-in position feedback
- (B) Steps are discrete and precisely defined; no slip if within torque limits
- (C) It uses encoders
- (D) It is always slower than servo motors
> **Answer: (B).**

**Q4.44 [NAT - 2M]** Stepper motor: β=0.9° (half-step), total travel = 45°. Number of pulses?
> **Answer:** Pulses = 45/0.9 = 50 pulses.

**Q4.45 [MCQ - 2M]** Microstepping improves stepper motor:
- (A) Maximum torque only
- (B) Resolution and reduces vibration/resonance
- (C) Speed only
- (D) Holding torque only
> **Answer: (B).**

**Q4.46 [NAT - 2M]** For a stepper motor with 200 full steps/revolution and 8× microstepping: resolution per microstep?
> **Answer:** Resolution = 360°/(200×8) = 360°/1600 = 0.225°.

**Q4.47 [MCQ - 1M]** Holding torque of a stepper motor is:
- (A) Torque when running at speed
- (B) Maximum torque motor can hold at rest with windings energized
- (C) Detent torque (no current)
- (D) Pull-out torque
> **Answer: (B).**

**Q4.48 [NAT - 2M]** PM stepper motor: if Nr=48 rotor teeth and 2-phase motor: step angle β?
> **Answer:** β = 360°/(2×48) = 360°/96 = 3.75°.

**Q4.49 [MCQ - 2M]** The detent torque of a permanent magnet stepper is:
- (A) Zero (no magnetic memory)
- (B) Non-zero torque that keeps rotor at stable positions even with no current
- (C) Equal to holding torque
- (D) Negative
> **Answer: (B).**

**Q4.50 [NAT - 2M]** Stepper motor driven with acceleration profile to avoid resonance: the recommended acceleration region ends before the resonant frequency zone. If resonant frequency = 100 Hz at 200 steps/s: is 150 steps/s safe to pass through?
> **Answer:** 150 steps/s is below 200 steps/s resonance — use fast ramp-up through this zone or use microstepping to avoid resonance.

---

### SECTION C: HYDRAULIC & PNEUMATIC SYSTEMS — 25 Questions

**Q4.51 [MCQ - 1M]** Force generated by a hydraulic cylinder is:
- (A) F = P + A
- (B) F = P × A
- (C) F = P / A
- (D) F = A / P
> **Answer: (B).** F = P × A (pressure × piston area).

**Q4.52 [NAT - 2M]** Hydraulic cylinder: bore diameter D=80mm, operating pressure P=10 MPa. Extension force?
> **Answer:** A = π(0.08)²/4 = π×0.0064/4 = 5.027×10⁻³ m². F = P×A = 10×10⁶ × 5.027×10⁻³ = 50,265 N ≈ 50.3 kN.

**Q4.53 [MCQ - 2M]** The speed of a hydraulic cylinder is determined by:
- (A) Pressure only
- (B) Flow rate Q and piston area A: v = Q/A
- (C) Cylinder length
- (D) Oil viscosity only
> **Answer: (B).**

**Q4.54 [NAT - 2M]** Hydraulic cylinder: piston area A=50 cm² = 50×10⁻⁴ m², flow Q=10 L/min = 1.667×10⁻⁴ m³/s. Piston speed?
> **Answer:** v = Q/A = 1.667×10⁻⁴ / 50×10⁻⁴ = 1.667×10⁻⁴/5×10⁻³ = 0.0333 m/s ≈ 33.3 mm/s.

**Q4.55 [MCQ - 1M]** Pascal's law states:
- (A) Force = pressure × area
- (B) Pressure applied to enclosed fluid is transmitted equally in all directions
- (C) Flow = pressure / resistance
- (D) Pressure is inversely proportional to velocity
> **Answer: (B).**

**Q4.56 [NAT - 2M]** Hydraulic pump: displacement per revolution Dv=50 cc/rev, speed N=1500 RPM. Flow rate Q?
> **Answer:** Q = Dv × N = 50×10⁻⁶ m³/rev × (1500/60) rev/s = 50×10⁻⁶ × 25 = 1.25×10⁻³ m³/s = 1.25 L/s = 75 L/min.

**Q4.57 [MCQ - 2M]** A 3/2 directional control valve has:
- (A) 3 positions, 2 ports
- (B) 3 ports, 2 positions
- (C) 3 ports, 3 positions
- (D) 2 ports, 3 positions
> **Answer: (B).** 3/2 = 3 ports (P, A, T), 2 switching positions.

**Q4.58 [NAT - 2M]** A 5/2 pneumatic DCV: how many ports and positions?
> **Answer:** 5 ports (P, A, B, T1, T2), 2 positions. Used for double-acting cylinder control.

**Q4.59 [MCQ - 1M]** FRL unit in pneumatic systems consists of:
- (A) Flow meter, Regulator, Lubricator
- (B) Filter, Regulator, Lubricator
- (C) Fan, Relay, Limiter
- (D) Fluid reservoir, Regulator, Liner
> **Answer: (B).**

**Q4.60 [NAT - 2M]** Pneumatic cylinder: bore D=63mm, air pressure P=0.6 MPa. Extension force?
> **Answer:** A = π(0.063)²/4 = 3.117×10⁻³ m². F = P×A = 0.6×10⁶ × 3.117×10⁻³ = 1870 N ≈ 1.87 kN.

**Q4.61 [MCQ - 2M]** Compared to hydraulics, pneumatics offers:
- (A) Higher force output for same cylinder size
- (B) Cleaner operation (air), simpler, but compressible (less stiff)
- (C) Better speed control precision
- (D) Higher operating pressure
> **Answer: (B).**

**Q4.62 [NAT - 2M]** Hydraulic system power P = pressure × flow rate. P=10 MPa, Q=0.001 m³/s: hydraulic power?
> **Answer:** P_hydraulic = P×Q = 10×10⁶ × 0.001 = 10,000 W = 10 kW.

**Q4.63 [MCQ - 1M]** A hydraulic accumulator stores:
- (A) Electrical energy
- (B) Hydraulic energy (pressurized fluid) for emergency or peak demand supply
- (C) Mechanical spring energy only
- (D) Heat energy
> **Answer: (B).**

**Q4.64 [NAT - 2M]** Hydraulic retraction force (rod side, annular piston area): F_retract = P × (A_bore - A_rod). D_bore=80mm, D_rod=40mm, P=10 MPa. F_retract?
> **Answer:** A_bore = π(0.08)²/4 = 5.027×10⁻³ m². A_rod = π(0.04)²/4 = 1.257×10⁻³ m². A_annular = 5.027-1.257=3.77×10⁻³ m². F = 10×10⁶ × 3.77×10⁻³ = 37,700 N ≈ 37.7 kN.

**Q4.65 [MCQ - 2M]** Servo valve in hydraulic system:
- (A) Simple ON/OFF switching
- (B) Proportional control: continuously variable flow control by electrical input signal
- (C) Pressure relief only
- (D) Flow measurement
> **Answer: (B).**

**Q4.66 [NAT - 2M]** Bernoulli's equation: P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂². For P₁=500 kPa, v₁=1 m/s, v₂=3 m/s, ρ=1000 kg/m³, h₁=h₂: P₂?
> **Answer:** P₂ = P₁ + ½ρ(v₁²-v₂²) = 500000 + 500(1-9) = 500000-4000 = 496,000 Pa = 496 kPa.

**Q4.67 [MCQ - 1M]** ISO symbol for a hydraulic pump (fixed displacement) shows:
- (A) Circle with triangle pointing inward
- (B) Diamond with arrow
- (C) Circle with triangle pointing outward
- (D) Rectangle with ports
> **Answer: (C).**

**Q4.68 [NAT - 2M]** Hydraulic cylinder effective force accounting for efficiency η=0.95, P=8 MPa, A=40 cm²:
> **Answer:** F = η×P×A = 0.95 × 8×10⁶ × 40×10⁻⁴ = 0.95 × 32000 = 30,400 N = 30.4 kN.

**Q4.69 [MCQ - 2M]** Pressure relief valve in hydraulic circuit:
- (A) Increases pressure
- (B) Limits maximum system pressure by bypassing flow to tank when set pressure is reached
- (C) Measures pressure
- (D) Controls direction
> **Answer: (B).**

**Q4.70 [NAT - 2M]** Flow control valve restricts flow to Q=5 L/min into a cylinder (A=25 cm²). Cylinder speed?
> **Answer:** Q = 5 L/min = 5/60 L/s = 83.3×10⁻⁶ m³/s. v = Q/A = 83.3×10⁻⁶/25×10⁻⁴ = 0.0333 m/s = 33.3 mm/s.

**Q4.71 [MCQ - 1M]** The type of hydraulic pump most commonly used for high-pressure industrial applications:
- (A) Gear pump
- (B) Vane pump
- (C) Piston pump
- (D) Centrifugal pump
> **Answer: (C).** Piston pumps handle highest pressures.

**Q4.72 [NAT - 2M]** A double-acting pneumatic cylinder: bore D=50mm, stroke=200mm. Compressed air volume per extension stroke (at line pressure)?
> **Answer:** Volume = A × stroke = π(0.05)²/4 × 0.2 = 1.963×10⁻³ × 0.2 = 3.93×10⁻⁴ m³ ≈ 0.393 L.

**Q4.73 [MCQ - 2M]** Fluidic logic circuits use pneumatic elements to:
- (A) Generate electrical signals
- (B) Perform logic operations (AND, OR, NOT) using air flow
- (C) Amplify electrical power
- (D) Control hydraulic pressure
> **Answer: (B).**

**Q4.74 [NAT - 2M]** System pressure ratio: intensifier doubles pressure. Input P=10 MPa, area ratio A₁/A₂=2: output P?
> **Answer:** By Pascal: P₁A₁ = P₂A₂ → P₂ = P₁(A₁/A₂) = 10×2 = 20 MPa.

**Q4.75 [MCQ - 1M]** Counterbalance valve in hydraulic circuit prevents:
- (A) Pressure buildup
- (B) Load from running away (gravity loads dropping uncontrolled)
- (C) Pump overload
- (D) Cavitation
> **Answer: (B).**

---

### SECTION D: SERVO SYSTEMS & POWER ELECTRONICS — 20 Questions

**Q4.76 [MCQ - 1M]** A servo motor system requires:
- (A) No feedback
- (B) Position/velocity feedback for closed-loop control
- (C) Only torque control
- (D) Open-loop stepping
> **Answer: (B).**

**Q4.77 [NAT - 2M]** A servo drive PID controller: Kp=10, Ki=5, Kd=0.1, error e=0.5 rad, ė=0.2 rad/s, ∫e=0.1 rad·s: output u?
> **Answer:** u = Kp×e + Ki×∫e + Kd×ė = 10(0.5)+5(0.1)+0.1(0.2) = 5+0.5+0.02 = 5.52 units.

**Q4.78 [MCQ - 2M]** Encoder feedback in servo system provides:
- (A) Torque feedback only
- (B) Position and/or velocity feedback for closed-loop control
- (C) Current feedback
- (D) Temperature monitoring
> **Answer: (B).**

**Q4.79 [NAT - 2M]** Cascade control in servo system layers:
> **Answer:** Inner current loop → middle velocity loop → outer position loop (fastest to slowest).

**Q4.80 [MCQ - 1M]** The bandwidth of the servo system should be:
- (A) Higher than disturbance frequency and lower than structural resonance
- (B) As low as possible
- (C) Equal to motor natural frequency
- (D) Independent of load
> **Answer: (A).**

**Q4.81 [NAT - 2M]** A linear encoder with 1 μm resolution: if position = 12,345 counts: actual position?
> **Answer:** Position = 12345 × 1×10⁻⁶ m = 12.345 mm.

**Q4.82 [MCQ - 2M]** A vector-controlled AC servo drive controls:
- (A) Only speed
- (B) Both torque and flux independently (FOC - Field Oriented Control)
- (C) Only position
- (D) Power factor
> **Answer: (B).**

**Q4.83 [NAT - 2M]** An inverter (Variable Frequency Drive/VFD) controls AC motor speed by varying:
> **Answer:** Output frequency f (and proportionally the voltage V/Hz ratio to maintain constant flux).

**Q4.84 [MCQ - 1M]** IGBT (Insulated Gate Bipolar Transistor) in motor drives is chosen because:
- (A) Lower cost than MOSFETs
- (B) Combines high voltage/current capability of BJT with voltage control of MOSFET
- (C) Requires no gate driver
- (D) Has zero switching losses
> **Answer: (B).**

**Q4.85 [NAT - 2M]** A 3-phase inverter for AC motor control uses how many IGBTs?
> **Answer:** 6 IGBTs (2 per phase leg × 3 phases).

**Q4.86 [MCQ - 2M]** Space Vector Modulation (SVM) for 3-phase inverter:
- (A) Simple sinusoidal PWM
- (B) Optimized switching sequence that better utilizes DC bus voltage (15% more than sinusoidal PWM)
- (C) Only for DC motors
- (D) Reduces switching frequency
> **Answer: (B).**

**Q4.87 [NAT - 2M]** For a 3-phase induction motor: slip s = (ωs - ωr)/ωs. At synchronous speed 3000 RPM (4-pole, 50Hz) and rotor 2850 RPM: slip s?
> **Answer:** s = (3000-2850)/3000 = 150/3000 = 0.05 = 5%.

**Q4.88 [MCQ - 1M]** Synchronous speed of a 4-pole, 50Hz induction motor:
- (A) 1500 RPM
- (B) 3000 RPM
- (C) 750 RPM
- (D) 6000 RPM
> **Answer: (B).** Ns = 120×f/P = 120×50/4 = 1500 RPM. Wait — 4-pole means P=4: Ns=120×50/4=1500 RPM. **Answer: (A) 1500 RPM.**

**Q4.89 [NAT - 2M]** Linear motor: a linear induction motor converts electrical energy directly to linear motion. Synchronous velocity: vs = 2×τ×f where τ=pole pitch. For τ=100mm, f=50Hz: vs?
> **Answer:** vs = 2×0.1×50 = 10 m/s.

**Q4.90 [MCQ - 2M]** The main advantage of a direct-drive motor (no gearbox) for robotics:
- (A) Higher torque at all speeds
- (B) Zero backlash, higher bandwidth, lower mechanical complexity
- (C) Lower cost
- (D) Better position resolution
> **Answer: (B).**

**Q4.91 [NAT - 2M]** A gearbox with ratio G=50:1 and efficiency η=0.9: motor torque T_m needed to produce T_load=900 Nm at output?
> **Answer:** T_m = T_load / (G×η) = 900/(50×0.9) = 900/45 = 20 Nm.

**Q4.92 [MCQ - 1M]** Harmonic drive (strain wave gear) offers:
- (A) Low gear ratio, high backlash
- (B) Very high gear ratio (50-300:1), near-zero backlash, high torque density
- (C) Only used in hydraulics
- (D) Low efficiency
> **Answer: (B).**

**Q4.93 [NAT - 2M]** A harmonic drive with circular spline teeth=202, flex spline teeth=200: gear ratio?
> **Answer:** Gear ratio = (202-200)/200 = 2/200 = 1/100. So speed reduction of 100:1.

**Q4.94 [MCQ - 2M]** Backdrivability of a robot joint means:
- (A) Joint can only move in one direction
- (B) External forces can push back through the transmission to the motor
- (C) Motor can drive load but not reverse
- (D) Gearbox prevents any back-driving
> **Answer: (B).** Important for safe human-robot interaction (compliant robots).

**Q4.95 [MCQ - 1M]** Piezoelectric actuators:
- (A) Provide large displacement with high bandwidth
- (B) Provide small displacement (μm range) with very high force and bandwidth
- (C) Only work at high temperatures
- (D) Require no voltage
> **Answer: (B).**

**Q4.96 [NAT - 2M]** A piezoelectric actuator with sensitivity d=300 pm/V and applied voltage V=100V: displacement?
> **Answer:** Δx = d × V = 300×10⁻¹² × 100 = 30×10⁻⁹ m = 30 nm.

**Q4.97 [MCQ - 2M]** Shape Memory Alloy (SMA) actuators (Nitinol) operate by:
- (A) Electromagnetic force
- (B) Phase transformation (austenite-martensite) when heated, contracting to provide force
- (C) Piezoelectric effect
- (D) Hydraulic pressure
> **Answer: (B).**

**Q4.98 [NAT - 2M]** Cable-driven robot actuator: cable tension T creates joint torque τ = T × r (pulley radius). For T=100N, r=20mm=0.02m: τ?
> **Answer:** τ = 100 × 0.02 = 2 Nm.

**Q4.99 [MCQ - 1M]** Pneumatic artificial muscles (McKibben actuators) contract when:
- (A) Cooled
- (B) Pressurized with air (volume expansion → contraction along axis)
- (C) Electrically energized
- (D) Deflated
> **Answer: (B).**

**Q4.100 [NAT - 2M]** A solenoid valve: spring return force = 5N, solenoid force at energized = 20N. Net force for valve opening?
> **Answer:** Net force = 20-5 = 15N (solenoid overcomes spring).

---
*Module 4 Complete — 100 Questions*
