# MODULE 10: CONTROL SYSTEMS & ROBOT CONTROL
## 100 Practice Questions — GATE RA 2027

---

### SECTION A: TRANSFER FUNCTIONS & BLOCK DIAGRAMS — 20 Questions

**Q10.1 [MCQ]** Transfer function of a system is defined as:
- (A) Output/Input in time domain
- (B) Laplace transform of output/Laplace transform of input (with zero initial conditions)
- (C) Differential equation of the system
- (D) Time constant
> **Answer: (B).**

**Q10.2 [NAT]** For G(s)=10/(s+5): DC gain (s=0)?
> **Answer:** G(0)=10/5=2.

**Q10.3 [MCQ]** Unity feedback closed-loop TF: T(s)=G/(1+G). For G(s)=5/s: T(s)=?
- (A) 5/(s+5)  (B) 5/s  (C) 1/(s+5)  (D) s/(s+5)
> **Answer: (A).** T=G/(1+G)=(5/s)/(1+5/s)=5/(s+5).

**Q10.4 [NAT]** Characteristic equation of closed-loop system (unity feedback): 1+G(s)H(s)=0. For G=10/(s+2), H=1: char. equation?
> **Answer:** 1+10/(s+2)=0 → (s+2)+10=0 → s+12=0 → s=-12.

**Q10.5 [MCQ]** Block diagram reduction: two blocks G1, G2 in parallel (different paths to output): equivalent G=?
- (A) G1×G2  (B) G1+G2  (C) G1/G2  (D) G1-G2
> **Answer: (B).**

**Q10.6 [NAT]** Feedback loop: forward path G(s)=100/(s(s+10)), H(s)=1. Closed-loop poles?
> **Answer:** Char. eq: s²+10s+100=0. Roots: s=(-10±√(100-400))/2=(-10±j√300)/2=-5±j8.66.

**Q10.7 [MCQ]** A system with transfer function G(s)=K/[(s+a)(s+b)]: order is?
- (A) 0  (B) 1  (C) 2  (D) 3
> **Answer: (C).**

**Q10.8 [NAT]** Signal flow graph: Mason's gain formula involves sum of forward path gains divided by?
> **Answer:** The graph determinant Δ=1-ΣLi+ΣLiLj-... (alternating sums of loop gains).

**Q10.9 [MCQ]** Steady-state error for step input to type-1 system (G has one integrator): ess=?
- (A) 1/(1+Kp) where Kp=position error constant
- (B) 0
- (C) 1/Kv
- (D) ∞
> **Answer: (B).** Type-1 system has zero steady-state error for step input.

**Q10.10 [NAT]** Position error constant Kp=lim(s→0) G(s)H(s). For G=5/(s+2), H=1: Kp=?
> **Answer:** Kp=G(0)H(0)=5/2×1=2.5.

**Q10.11 [MCQ]** Steady-state error for step input (unit step): ess=1/(1+Kp). For Kp=2.5: ess=?
- (A) 0.5  (B) 0.286  (C) 0.4  (D) 1
> **Answer: (B).** ess=1/3.5=0.286.

**Q10.12 [NAT]** Velocity error constant Kv=lim(s→0) s×G(s)H(s). For G=10/[s(s+5)], H=1: Kv=?
> **Answer:** Kv=lim(s→0) s×10/[s(s+5)]=10/5=2.

**Q10.13 [MCQ]** System type number determines error to which standard input?
- (A) Type 0: zero error for step; Type 1: zero error for ramp; Type 2: zero for parabola
- (B) Type 0: zero error for ramp
- (C) Type 1: finite error for step
- (D) All types have same error
> **Answer: (A).**

**Q10.14 [NAT]** For PID controller: C(s)=Kp+Ki/s+Kd×s. In terms of TF: C(s)=?
> **Answer:** C(s)=(Kd×s²+Kp×s+Ki)/s.

**Q10.15 [MCQ]** Integral action (I) in PID controller:
- (A) Speeds up response  (B) Reduces/eliminates steady-state error  (C) Improves stability  (D) Reduces overshoot
> **Answer: (B).**

**Q10.16 [NAT]** Derivative action (D) in PID: anticipates future error (damping). Effect on transient response?
> **Answer:** Reduces overshoot and improves stability (adds damping); may amplify noise.

**Q10.17 [MCQ]** Proportional control only (with unity feedback) for step input: steady-state error is:
- (A) Always zero  (B) Non-zero (proportional to 1/(1+Kp))  (C) Infinite  (D) Oscillatory
> **Answer: (B).**

**Q10.18 [NAT]** For 2nd order system G(s)=ωn²/[s(s+2ζωn)]: closed-loop TF?
> **Answer:** T(s)=ωn²/(s²+2ζωns+ωn²).

**Q10.19 [MCQ]** Standard 2nd order system: T(s)=ωn²/(s²+2ζωns+ωn²). Natural frequency ωn and damping ratio ζ determine?
- (A) Only rise time  (B) Transient response: overshoot, settling time, oscillation frequency
- (C) Steady-state error only  (D) System type
> **Answer: (B).**

**Q10.20 [NAT]** For ζ=0.6, ωn=10 rad/s: damped natural frequency ωd=?
> **Answer:** ωd=ωn√(1-ζ²)=10√(1-0.36)=10√0.64=10×0.8=8 rad/s.

---

### SECTION B: STABILITY — ROUTH, BODE, ROOT LOCUS — 25 Questions

**Q10.21 [MCQ]** Routh-Hurwitz criterion determines stability by:
- (A) Root locus plot  (B) Sign changes in first column of Routh array (= number of RHP roots)
- (C) Bode plot  (D) Nyquist diagram
> **Answer: (B).**

**Q10.22 [NAT]** Routh array for s³+2s²+4s+8=0: first column signs?
> **Answer:** Row 1: 1,4; Row 2: 2,8; Row 3: (2×4-1×8)/2=0/2=0 (special case). Zero in first column = marginal stability.

**Q10.23 [MCQ]** A system with char. eq s³+3s²+Ks+K=0 is stable for K in range:
- (A) K<0  (B) K>0 only  (C) 0<K<∞ (need to check: Routh row3=(3K-K)/3=2K/3>0 when K>0, and K>0)
- (D) K>3
> **Answer: (B).** Both K>0 and 2K/3>0 → K>0.

**Q10.24 [NAT]** Gain margin (GM) is defined as:
> **Answer:** GM=1/|G(jω_pc)H(jω_pc)| in absolute terms, or GM(dB)=-20log|GH| at phase crossover frequency ω_pc (where phase=-180°).

**Q10.25 [MCQ]** Phase margin (PM) is the additional phase lag needed to reach -180°:
- (A) PM = ∠GH(jω_gc) + 180° (where ωgc is gain crossover frequency)
- (B) PM = |GH|-1
- (C) PM = ωgc/ωpc
- (D) PM = Kp
> **Answer: (A).**

**Q10.26 [NAT]** For a stable system: GM>0 dB and PM>0°. For GM=10dB, PM=45°: system is?
> **Answer:** Stable (both positive margins).

**Q10.27 [MCQ]** In Bode plot, G(s)=K/[s(1+sT)]: slope at very high frequency?
- (A) -20 dB/decade  (B) -40 dB/decade  (C) 0 dB/decade  (D) +20 dB/decade
> **Answer: (B).** At high ω: G≈K/(s²T) → -40 dB/decade.

**Q10.28 [NAT]** G(jω)=1/(jω+1): corner frequency ωc=?
> **Answer:** ωc=1 rad/s (breakpoint frequency where magnitude drops 3 dB).

**Q10.29 [MCQ]** Magnitude of G(jω)=1/(1+jωT) at ω=1/T (corner frequency):
- (A) 1  (B) 1/√2≈0.707 (-3dB)  (C) 0  (D) √2
> **Answer: (B).**

**Q10.30 [NAT]** Root locus begins at _____ and ends at _____.
> **Answer:** Begins at open-loop poles (K=0) and ends at open-loop zeros (K→∞).

**Q10.31 [MCQ]** Number of root locus branches equals:
- (A) Number of zeros  (B) Number of poles  (C) n-m (n=poles, m=zeros)  (D) n+m
> **Answer: (B).** Number of branches = n (number of open-loop poles).

**Q10.32 [NAT]** For G(s)=K/[s(s+2)]: centroid of asymptotes σ=?
> **Answer:** σ=(Σpoles-Σzeros)/(n-m)=(0+(-2)-0)/(2-0)=-2/2=-1.

**Q10.33 [MCQ]** Nyquist criterion: number of closed-loop RHP poles N=?
- (A) N=Z-P (Z=CW encirclements of -1, P=open-loop RHP poles)
- (B) N=P-Z  (Nyquist: N=Z-P where N=clockwise encirclements)
- (C) N=Z+P  (D) N=Z/P
> **Answer: (A) or more precisely: N (clockwise encirclements of -1) = Z (CL RHP) - P (OL RHP).**

**Q10.34 [NAT]** For type-2 system (double integrator): G(s)=K/s². Phase at all frequencies?
> **Answer:** Phase=-180° (constant, since each integrator contributes -90°, two integrators → -180°).

**Q10.35 [MCQ]** Lead compensator C(s)=Kc(s+z)/(s+p), z<p: provides:
- (A) Phase lag at all frequencies  (B) Phase lead (improves PM)  (C) Integral action  (D) Gain reduction
> **Answer: (B).**

**Q10.36 [NAT]** Lag compensator effect on steady-state error?
> **Answer:** Reduces (improves) steady-state error by providing high gain at low frequencies.

**Q10.37 [MCQ]** Bandwidth of closed-loop system relates to:
- (A) Only steady-state error  (B) Speed of response (higher BW = faster response)
- (C) Only phase margin  (D) Number of poles
> **Answer: (B).**

**Q10.38 [NAT]** For unity gain crossover ωgc: |G(jωgc)H(jωgc)|=?
> **Answer:** 1 (0 dB).

**Q10.39 [MCQ]** A system with PM=60°: expected peak overshoot (approximate)?
- (A) ~5%  (B) ~10%  (C) ~30%  (D) ~50%
> **Answer: (B).** For 2nd-order: PM≈60° → ζ≈0.6 → overshoot≈9.5%.

**Q10.40 [NAT]** Gain margin in dB: GM_dB=-20log|GH(jω_pc)|. If |GH(jω_pc)|=0.25: GM_dB=?
> **Answer:** GM=-20log(0.25)=-20×(-0.602)=12 dB.

**Q10.41 [MCQ]** Ziegler-Nichols tuning: at ultimate gain Ku and period Tu, PID Kp=?
- (A) 0.6Ku  (B) 0.5Ku  (C) Ku/1.7  (D) Ku
> **Answer: (A).** Z-N PID: Kp=0.6Ku, Ti=Tu/2, Td=Tu/8.

**Q10.42 [NAT]** Z-N PID: Ti (integral time) = ?
> **Answer:** Ti=Tu/2.

**Q10.43 [MCQ]** Cascade (series) compensator C(s) placed in the forward path:
- (A) Cannot improve performance  (B) Can shape the open-loop frequency response for desired PM, BW
- (C) Only used for lag  (D) Only used for lead
> **Answer: (B).**

**Q10.44 [NAT]** Second-order underdamped system: % overshoot = exp(-πζ/√(1-ζ²))×100%. For ζ=0.5: %OS?
> **Answer:** %OS=exp(-π×0.5/√0.75)×100=exp(-1.814)×100≈16.3%.

**Q10.45 [MCQ]** Settling time (2% criterion) for 2nd order system: ts≈?
- (A) 4/(ζωn)  (B) π/ωd  (C) 2/(ζωn)  (D) ωn/ζ
> **Answer: (A).** ts≈4/(ζωn) for 2% band.

---

### SECTION C: STATE SPACE & ROBOT CONTROL — 30 Questions

**Q10.46 [MCQ]** State space representation: ẋ=Ax+Bu, y=Cx+Du. Matrix A is called:
- (A) Input matrix  (B) System/Plant matrix  (C) Output matrix  (D) Feedforward matrix
> **Answer: (B).**

**Q10.47 [NAT]** For ẋ=Ax+Bu: eigenvalues of A determine?
> **Answer:** System stability (all eigenvalues in left half-plane → stable).

**Q10.48 [MCQ]** Controllability of state space system: Kalman's condition?
- (A) Rank(Cc)=n where Cc=[B, AB, A²B, ..., A^{n-1}B]
- (B) All eigenvalues negative  (C) det(A)≠0  (D) Output matrix C full rank
> **Answer: (A).**

**Q10.49 [NAT]** Observability condition: rank(Co)=n where Co=?
> **Answer:** Co=[Cᵀ, AᵀCᵀ, (Aᵀ)²Cᵀ,...,(Aᵀ)^{n-1}Cᵀ].

**Q10.50 [MCQ]** State feedback control u=-Kx: closed-loop system becomes?
- (A) ẋ=(A+BK)x  (B) ẋ=(A-BK)x  (C) ẋ=Ax  (D) ẋ=(A+B)x
> **Answer: (B).** u=-Kx → ẋ=Ax+B(-Kx)=(A-BK)x.

**Q10.51 [NAT]** Pole placement by state feedback: design K so eigenvalues of (A-BK) are at desired poles. Requires?
> **Answer:** System must be fully state controllable (controllability matrix rank=n).

**Q10.52 [MCQ]** LQR (Linear Quadratic Regulator) minimizes cost:
- (A) J=∫(x^T Q x)dt  (B) J=∫(x^T Q x + u^T R u)dt  (C) J=||x||²  (D) J=tr(A)
> **Answer: (B).** LQR: J=∫₀^∞(xᵀQx+uᵀRu)dt.

**Q10.53 [NAT]** Luenberger observer gain L is designed so that eigenvalues of (A-LC) are:
> **Answer:** In the left half-plane (stable), typically 3-5× faster than closed-loop poles.

**Q10.54 [MCQ]** Separation principle in state feedback + observer design: states estimated by observer, used for state feedback. Design them:
- (A) Simultaneously  (B) Independently (separation theorem)  (C) Only for MIMO  (D) Only for SISO
> **Answer: (B).**

**Q10.55 [NAT]** Kalman filter is the optimal state estimator for systems with:
> **Answer:** Process noise (Q_noise) and measurement noise (R_noise) — minimizes mean-square estimation error.

**Q10.56 [MCQ]** PD control for robot joint: τ=Kp(qd-q)-Kd(q̇). Stability guaranteed if:
- (A) Kp, Kd<0  (B) Kp, Kd>0  (C) Kd=0  (D) Kp=0
> **Answer: (B).**

**Q10.57 [NAT]** Computed torque control for robot: τ=M(q)v+C(q,q̇)q̇+G(q) where v=?
> **Answer:** v=q̈d+Kv(q̇d-q̇)+Kp(qd-q) — PD control in task space after linearization.

**Q10.58 [MCQ]** The purpose of gravity compensation in robot control:
- (A) Adds virtual gravity  (B) Cancels gravity torques G(q) to improve tracking
- (C) Increases speed  (D) Reduces joint torques to zero always
> **Answer: (B).**

**Q10.59 [NAT]** Impedance control for robot sets relationship between:
> **Answer:** End-effector force/torque and position/velocity deviation — behaves as virtual spring-damper-mass system.

**Q10.60 [MCQ]** Force control vs position control: force control is used when:
- (A) Free-space motion only  (B) Contact tasks (assembly, grinding) where contact force must be regulated
- (C) High-speed motion  (D) Pick and place only
> **Answer: (B).**

**Q10.61 [NAT]** For a proportional joint position controller τ=Kp×(qd-q): gain Kp units?
> **Answer:** N·m/rad (torque per angular error).

**Q10.62 [MCQ]** Integral windup in PID control occurs when:
- (A) Derivative term saturates  (B) Integral accumulates large values during saturation (actuator limits)
- (C) Proportional gain is too high  (D) System is unstable
> **Answer: (B).**

**Q10.63 [NAT]** Anti-windup technique: clamp integrator output at ±Imax to prevent?
> **Answer:** Integral windup (excessive accumulated error during saturation leading to large overshoot).

**Q10.64 [MCQ]** Feedforward control adds to feedback:
- (A) Only used for stability  (B) Compensates for known disturbances/dynamics (reduces tracking error)
- (C) Replaces feedback  (D) Increases steady-state error
> **Answer: (B).**

**Q10.65 [NAT]** For a PID controller with anti-windup: what happens when actuator saturates?
> **Answer:** Integrator is stopped (clamped) or back-calculated to prevent integral accumulation beyond useful range.

**Q10.66 [MCQ]** Discrete-time PID (digital implementation): integral approximated by:
- (A) Differentiation  (B) Euler (rectangular) or Tustin (bilinear) integration
- (C) Fourier transform  (D) Z-transform inversion
> **Answer: (B).**

**Q10.67 [NAT]** Z-transform of unit step (discrete): z/(z-1). For unit delay z⁻¹: equivalent to?
> **Answer:** One sample period delay: x[n-1] → z⁻¹X(z).

**Q10.68 [MCQ]** Nyquist sampling theorem for digital control: sampling frequency must be:
- (A) Equal to signal BW  (B) At least 5-10× control bandwidth (rule of thumb; minimum 2× per Nyquist)
- (C) As slow as possible  (D) Exactly 1 kHz
> **Answer: (B).**

**Q10.69 [NAT]** For digital PID, sample time Ts=1ms. Discrete derivative approximation?
> **Answer:** Dd[n]=(e[n]-e[n-1])/Ts (backward difference).

**Q10.70 [MCQ]** Sliding mode control (SMC) for robot:
- (A) Requires exact model  (B) Robust to bounded uncertainties/disturbances by enforcing sliding surface
- (C) Only works for linear systems  (D) Eliminates all control effort
> **Answer: (B).**

**Q10.71 [NAT]** The sliding surface s=ė+λe=0 for λ>0 defines stable error dynamics. Choose λ to set:
> **Answer:** Error convergence rate (λ is desired pole of error dynamics — negative real part for stability).

**Q10.72 [MCQ]** Adaptive control adjusts:
- (A) System hardware  (B) Controller parameters online based on system identification or performance index
- (C) Only set points  (D) Motor current only
> **Answer: (B).**

**Q10.73 [NAT]** Model Reference Adaptive Control (MRAC): reference model specifies?
> **Answer:** Desired closed-loop behavior (desired output trajectory). Adaptation law adjusts controller parameters to make plant output match reference model output.

**Q10.74 [MCQ]** Robust control (H∞) minimizes:
- (A) Reference tracking error  (B) Worst-case disturbance amplification (||T||∞ < γ)
- (C) Only noise  (D) Control effort only
> **Answer: (B).**

**Q10.75 [NAT]** For a PID-controlled robot joint with position error e=0.05 rad, Kp=100 N·m/rad, Ki=10 N·m/(rad·s), Kd=5 N·m·s/rad, integral=0.1, ė=0.01 rad/s: control output τ?
> **Answer:** τ=100×0.05+10×0.1+5×0.01=5+1+0.05=6.05 N·m.

---

### SECTION D: PROCESS CONTROL & ADVANCED TOPICS — 25 Questions

**Q10.76 [MCQ]** SISO vs MIMO: a MIMO system has:
- (A) Multiple inputs OR outputs  (B) Multiple inputs AND multiple outputs  (C) Only one input  (D) Single variable
> **Answer: (B).**

**Q10.77 [NAT]** For a 3-DOF robot in joint space control: how many independent SISO controllers needed?
> **Answer:** 3 (one per joint, if decoupled — ignoring dynamic coupling).

**Q10.78 [MCQ]** Decoupling control for MIMO systems:
- (A) Ignores cross-coupling  (B) Designs controller to eliminate cross-coupling between input-output pairs
- (C) Reduces system order  (D) Only works with state feedback
> **Answer: (B).**

**Q10.79 [NAT]** Relative Gain Array (RGA) for pairing inputs-outputs in MIMO: λij=?
> **Answer:** λij=(∂yi/∂uj)_open × (∂yi/∂uj)_closed... RGA = G×(G⁻¹)ᵀ (element-wise product).

**Q10.80 [MCQ]** PLC-based sequence control vs continuous PID control:
- (A) PLCs cannot do PID  (B) PLCs handle discrete logic; PID handles continuous regulation (both can be in PLC)
- (C) PID is only analog  (D) PLCs are faster
> **Answer: (B).**

**Q10.81 [NAT]** For a robot grinding task: which control mode maintains constant contact force?
> **Answer:** Force control (or impedance/hybrid force-position control).

**Q10.82 [MCQ]** Compliant motion for peg-in-hole assembly uses:
- (A) Pure position control  (B) Passive compliance (RCC) or active impedance control to avoid jamming
- (C) High stiffness control only  (D) No feedback
> **Answer: (B).**

**Q10.83 [NAT]** RCC (Remote Center Compliance) device for assembly: what does it do?
> **Answer:** Provides passive mechanical compliance with center of compliance at the tip (tool center point) — accommodates positional and angular errors during insertion.

**Q10.84 [MCQ]** Joint torque control (inner loop) bandwidth should be compared to position loop:
- (A) Same  (B) Much faster (torque BW >> position BW, typically 5-10×)
- (C) Slower  (D) Independent
> **Answer: (B).**

**Q10.85 [NAT]** For a cascaded control (position→velocity→torque): the innermost loop is?
> **Answer:** Torque/current control (fastest loop).

**Q10.86 [MCQ]** Dead-zone nonlinearity in robot joints (from gears/backlash) causes:
- (A) Linear response always  (B) Limit cycles, steady-state error, poor tracking near zero velocity
- (C) Faster response  (D) Better stability
> **Answer: (B).**

**Q10.87 [NAT]** Friction compensation in robot control: model τf=μc×sign(q̇)+b×q̇. What are the two terms?
> **Answer:** Coulomb friction (μc×sign(q̇)) + viscous friction (b×q̇).

**Q10.88 [MCQ]** Passivity-based control guarantees stability via:
- (A) Lyapunov direct method  (B) Energy-based arguments (robot system is passive — dissipates energy)
- (C) Root locus  (D) Bode plots
> **Answer: (B).**

**Q10.89 [NAT]** Lyapunov stability analysis: a system is stable if there exists V(x)>0 with dV/dt?
> **Answer:** dV/dt≤0 (negative semi-definite for stable, <0 for asymptotically stable).

**Q10.90 [MCQ]** Neural network-based control for robots:
- (A) Requires no training  (B) Can learn inverse dynamics from data to improve tracking
- (C) Only for linear systems  (D) Replaces all sensors
> **Answer: (B).**

**Q10.91 [NAT]** Iterative Learning Control (ILC): for a robot doing repetitive tasks, ILC updates:
> **Answer:** The feedforward control signal based on the error from the previous iteration, to improve tracking over successive trials.

**Q10.92 [MCQ]** Repetitive Control (RC) uses:
- (A) Fixed gain PID  (B) Internal model principle with period-delay in feedback to reject periodic disturbances
- (C) Only for step inputs  (D) State feedback only
> **Answer: (B).**

**Q10.93 [NAT]** For a vision-servoing robot: what is the task-space error e?
> **Answer:** e=s_desired - s_measured (difference between desired and measured image features/coordinates).

**Q10.94 [MCQ]** IBVS (Image-Based Visual Servo) controls the robot based on:
- (A) 3D Cartesian error  (B) Image feature error directly (2D pixel/feature coordinates)
- (C) Joint angle error  (D) Force error
> **Answer: (B).**

**Q10.95 [NAT]** The image Jacobian (interaction matrix) L_e relates image feature velocity to camera velocity: ṡ=L_e×vc. Dimensions for 4 point features?
> **Answer:** L_e is 8×6 (4 features × 2 DOF per feature × 6 camera velocity DOF).

**Q10.96 [MCQ]** Model predictive control (MPC) solves an optimization problem over a:
- (A) Infinite horizon with no constraints  (B) Finite receding (moving) horizon with constraints
- (C) Single time step  (D) Infinite horizon analytically
> **Answer: (B).**

**Q10.97 [NAT]** MPC advantage over classical PID: can handle?
> **Answer:** Multi-variable (MIMO) systems, input/output constraints (actuator limits, safety bounds), and preview (future reference/disturbance).

**Q10.98 [MCQ]** In model-based robot control, parameter uncertainty is handled by:
- (A) Ignoring the uncertainty  (B) Adaptive control, robust control, or learning-based control
- (C) Increasing proportional gain only  (D) Reducing sampling rate
> **Answer: (B).**

**Q10.99 [NAT]** Sensor fusion (e.g., encoder + IMU for mobile robot): Kalman filter combines:
> **Answer:** Prediction from dynamic model (high bandwidth) with correction from sensors (measurement update) — optimal state estimate for Gaussian noise.

**Q10.100 [MCQ]** For a mobile robot (unicycle model): state x=[X,Y,θ]ᵀ, inputs [v,ω]: nonlinear control design?
- (A) Only linear control applies  (B) Input-output feedback linearization or sliding mode for nonlinear model
- (C) PID is insufficient  (D) Only open-loop control possible
> **Answer: (B).**

---
*Module 10 Complete — 100 Questions*
*Total Question Bank: 1000+ Questions across 10 Modules*
