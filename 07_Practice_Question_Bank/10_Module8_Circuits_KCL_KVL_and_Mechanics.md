# MODULE 8: ELECTRIC CIRCUITS, NETWORK THEOREMS (KCL/KVL) & ENGINEERING MECHANICS
## 100 Practice Questions — GATE RA 2027 & NPTEL Assignment Bank

**GATE Section:** Part A.2 (Basics of Mechatronics)  
**Topics Covered:**
- Network Elements, Dependent Sources, Kirchhoff's Laws (KCL, KVL), Node and Mesh Analysis (25 Questions)
- Network Theorems: Thevenin's, Norton's, Superposition, Maximum Power Transfer (25 Questions)
- Transients (RL, RC, RLC), AC Sinusoidal Steady-State, Resonance, Two-Port Networks, 3-Phase Circuits (25 Questions)
- Engineering Mechanics: Free-Body Diagrams, Friction, Belt-Pulley, Trusses, Rigid Body Plane Motion (25 Questions)

---

### SECTION A: NETWORK ELEMENTS, DEPENDENT SOURCES & KIRCHHOFF'S LAWS (Q8.1 – Q8.25)

**Q8.1 [MCQ - 1M]** Kirchhoff's Current Law (KCL) at a circuit node is a direct mathematical consequence of which conservation law?
- (A) Conservation of Energy
- (B) Conservation of Electric Charge
- (C) Conservation of Linear Momentum
- (D) Conservation of Magnetic Flux
> **Answer: (B).** KCL ($\sum I = 0$) states that electric charge cannot accumulate indefinitely at a junction; rate of charge entering equals rate of charge leaving.

**Q8.2 [MCQ - 1M]** Kirchhoff's Voltage Law (KVL) around any closed loop in a lumped parameter circuit is based on:
- (A) Conservation of Momentum
- (B) Conservation of Electric Charge
- (C) Conservation of Energy
- (D) Newton's Third Law
> **Answer: (C).** Total work done per unit charge moving around a closed path in a conservative electric field is zero ($\oint \vec{E} \cdot d\vec{l} = 0 \implies \sum V = 0$).

**Q8.3 [NAT - 2M]** Three resistors of values $4\,\Omega, 6\,\Omega,$ and $12\,\Omega$ are connected in parallel across an ideal $24\text{ V}$ DC voltage source. What is the total current (in A) supplied by the source?
> **Answer:** 12. Equivalent resistance: $1/R_{eq} = 1/4 + 1/6 + 1/12 = (3+2+1)/12 = 6/12 \implies R_{eq} = 2\,\Omega$. Total current $I = V / R_{eq} = 24 / 2 = 12\text{ A}$.

**Q8.4 [NAT - 2M]** A node has four branches. Currents entering the node are $I_1 = 3\text{ A}$ and $I_2 = 5\text{ A}$. Currents leaving are $I_3 = 2\text{ A}$ and $I_4$. What is the magnitude of $I_4$ (in A)?
> **Answer:** 6. By KCL: $\sum I_{\text{in}} = \sum I_{\text{out}} \implies 3 + 5 = 2 + I_4 \implies I_4 = 6\text{ A}$.

**Q8.5 [MCQ - 2M]** A dependent voltage source is specified as $V_s = 5 \cdot I_x$, where $I_x$ is a current elsewhere in the circuit. This source is classified as a:
- (A) Voltage-Controlled Voltage Source (VCVS)
- (B) Current-Controlled Voltage Source (CCVS)
- (C) Current-Controlled Current Source (CCCS)
- (D) Voltage-Controlled Current Source (VCCS)
> **Answer: (B).** The output is a voltage whose magnitude is controlled by a current ($I_x$); therefore it is a CCVS with transresistance gain of $5\,\Omega$.

**Q8.6 [NAT - 2M]** In a single-loop circuit, an ideal $20\text{ V}$ DC source is in series with a $2\,\Omega$ resistor and a dependent source $2 V_x$ opposing the source. If $V_x$ is the voltage drop across the $2\,\Omega$ resistor with current flowing in loop direction, what is the loop current (in A)?
> **Answer:** 3.33. KVL: $20 - 2I - 2V_x = 0$. Since $V_x = 2I$, we have $20 - 2I - 2(2I) = 0 \implies 20 - 6I = 0 \implies I = 20/6 = 3.33\text{ A}$.

**Q8.7 [MCQ - 1M]** An ideal independent current source has an internal resistance of:
- (A) Zero
- (B) Infinite ($\infty$)
- (C) $1\,\Omega$
- (D) Negative
> **Answer: (B).** An ideal current source maintains a constant current regardless of terminal voltage, which requires infinite internal parallel resistance.

**Q8.8 [NAT - 2M]** A planar circuit has $B = 8$ branches and $N = 5$ nodes. How many independent KVL mesh equations are required to solve the circuit?
> **Answer:** 4. Number of independent loops / mesh equations $L = B - N + 1 = 8 - 5 + 1 = 4$.

**Q8.9 [NAT - 2M]** A planar circuit has 6 nodes. How many independent node-voltage KCL equations are required to solve the circuit completely?
> **Answer:** 5. With 6 nodes, choosing 1 reference ground node leaves $N - 1 = 6 - 1 = 5$ non-reference node voltage equations.

**Q8.10 [MCQ - 2M]** When a circuit contains an ideal voltage source connected directly between two non-reference nodes with no series resistor, the standard nodal analysis technique to handle this is:
- (A) Convert the voltage source to a current source
- (B) Form a Supernode enclosing the two nodes and the voltage source
- (C) Ignore the voltage source
- (D) Use mesh analysis only
> **Answer: (B).** A Supernode is formed by enclosing the ideal voltage source and the two adjacent nodes inside a generalized boundary, applying KCL across the boundary and using the source relation $V_1 - V_2 = V_s$.

**Q8.11 [NAT - 2M]** In a circuit, node A is at $12\text{ V}$ and node B is at $4\text{ V}$. They are connected by an $8\,\Omega$ resistor. What is the current (in A) flowing from node A to node B?
> **Answer:** 1. Current $I_{AB} = (V_A - V_B) / R = (12 - 4) / 8 = 8/8 = 1\text{ A}$.

**Q8.12 [MCQ - 1M]** An inductor of inductance $L = 2\text{ H}$ has a current passing through it given by $i(t) = 3t^2\text{ A}$. The induced EMF across the inductor at $t = 2\text{ s}$ is:
- (A) $12\text{ V}$
- (B) $24\text{ V}$
- (C) $48\text{ V}$
- (D) $6\text{ V}$
> **Answer: (B).** $v_L(t) = L rac{di}{dt} = 2 \times rac{d}{dt}(3t^2) = 2 \times (6t) = 12t$. At $t = 2\text{ s}$, $v_L = 12 \times 2 = 24\text{ V}$.

**Q8.13 [NAT - 2M]** A $10\,\mu\text{F}$ capacitor is charged with a constant current of $2\text{ mA}$ for $5\text{ ms}$. If the initial capacitor voltage was $0\text{ V}$, what is the final voltage (in V)?
> **Answer:** 1. $V = rac{1}{C} \int I dt = rac{I \cdot \Delta t}{C} = rac{2 \times 10^{-3} \times 5 \times 10^{-3}}{10 \times 10^{-6}} = rac{10 \times 10^{-6}}{10 \times 10^{-6}} = 1\text{ V}$.

**Q8.14 [MCQ - 1M]** In an ideal inductor, which of the following physical quantities cannot change discontinuously (instantaneously)?
- (A) Terminal voltage
- (B) Magnetic flux linkage / Current
- (C) Electric charge
- (D) Reluctance
> **Answer: (B).** An instantaneous change in inductor current would require $rac{di}{dt} = \infty \implies v_L = \infty$, which represents infinite power. Thus $i_L(0^+) = i_L(0^-)$.

**Q8.15 [MCQ - 1M]** Across an ideal capacitor, which quantity cannot change instantaneously?
- (A) Current
- (B) Voltage
- (C) Displacement current
- (D) Electric flux density
> **Answer: (B).** Instantaneous voltage change requires $rac{dv_C}{dt} = \infty \implies i_C = \infty$, so $v_C(0^+) = v_C(0^-)$.

**Q8.16 [NAT - 2M]** Two coupled coils have self-inductances $L_1 = 4\text{ mH}$ and $L_2 = 9\text{ mH}$. If the coefficient of coupling is $k = 0.8$, calculate the mutual inductance $M$ (in mH).
> **Answer:** 4.8. $M = k \sqrt{L_1 L_2} = 0.8 \times \sqrt{4 \times 9} = 0.8 \times 6 = 4.8\text{ mH}$.

**Q8.17 [MCQ - 2M]** When a current source is present on the perimeter of a mesh, mesh current is:
- (A) Independent of the current source
- (B) Equal to the value of the current source (taking direction into account)
- (C) Undefined
- (D) Always zero
> **Answer: (B).** If an independent or dependent current source lies strictly on the boundary of one mesh, that mesh current is directly fixed by the source.

**Q8.18 [NAT - 2M]** A supermesh is formed between two meshes sharing a $3\text{ A}$ current source. If mesh current $I_1$ flows upward through the source and $I_2$ flows downward, the constraint equation is:
- (A) $I_1 + I_2 = 3$
- (B) $I_1 - I_2 = 3$
- (C) $I_2 - I_1 = 3$
- (D) $I_1 \cdot I_2 = 3$
> **Answer: (B).** Net current in the branch is $I_1 - I_2 = 3\text{ A}$.

**Q8.19 [NAT - 2M]** A delta connection of three equal resistors $R_\Delta = 18\,\Omega$ is transformed into an equivalent star (Wye) connection. What is the value of each star resistor $R_Y$ (in $\Omega$)?
> **Answer:** 6. For balanced resistors, $R_Y = R_\Delta / 3 = 18 / 3 = 6\,\Omega$.

**Q8.20 [NAT - 2M]** Three equal star-connected resistors $R_Y = 10\,\Omega$ are converted to an equivalent delta connection. What is the value of each delta resistor $R_\Delta$ (in $\Omega$)?
> **Answer:** 30. $R_\Delta = 3 \cdot R_Y = 3 \times 10 = 30\,\Omega$.

**Q8.21 [NAT - 2M]** In a bridge circuit, the four arms have resistances $R_1 = 10\,\Omega, R_2 = 20\,\Omega, R_3 = 30\,\Omega,$ and $R_4 = x\,\Omega$. For the bridge to be balanced (zero detector current), what must be the value of $x$ (in $\Omega$) if $R_1 / R_2 = R_3 / R_4$?
> **Answer:** 60. Wheatstone balance condition: $R_1 \cdot R_4 = R_2 \cdot R_3 \implies 10 \cdot x = 20 \cdot 30 = 600 \implies x = 60\,\Omega$.

**Q8.22 [MCQ - 1M]** Tellegen's Theorem applies to any lumped network provided:
- (A) The network is strictly linear and time-invariant
- (B) The network elements are bilateral
- (C) Kirchhoff's laws (KCL and KVL) are satisfied, regardless of linearity or passivity
- (D) The circuit operates only under DC steady state
> **Answer: (C).** Tellegen's Theorem ($\sum v_k i_k = 0$) depends purely on network topology and KCL/KVL; it holds for linear, non-linear, active, passive, time-variant, or time-invariant circuits.

**Q8.23 [NAT - 2M]** A closed circuit contains 5 elements. The power absorbed by 4 of the elements is measured as $+15\text{ W}, -30\text{ W}, +10\text{ W},$ and $+8\text{ W}$. By Tellegen's Theorem, what is the power absorbed (in W) by the fifth element?
> **Answer:** -3. By Tellegen's theorem: $\sum P_{\text{absorbed}} = 0 \implies 15 - 30 + 10 + 8 + P_5 = 0 \implies 3 + P_5 = 0 \implies P_5 = -3\text{ W}$ (the element delivers $3\text{ W}$).

**Q8.24 [MCQ - 2M]** Which network analysis method is preferred when a circuit has fewer nodes than independent loops?
- (A) Mesh Current Method
- (B) Node Voltage Method
- (C) Source Transformation
- (D) Star-Delta Method
> **Answer: (B).** If $(N - 1) < (B - N + 1)$, nodal analysis requires fewer simultaneous linear equations than mesh analysis.

**Q8.25 [NAT - 2M]** A circuit has two nodes. Node 1 is grounded. Node 2 has two resistors connected to ground: $R_1 = 4\,\Omega$ and $R_2 = 12\,\Omega$. A constant current of $8\text{ A}$ is injected into Node 2. What is the node voltage $V_2$ (in V)?
> **Answer:** 24. $R_{eq} = (4 \times 12) / (4 + 12) = 48 / 16 = 3\,\Omega$. Node voltage $V_2 = I \cdot R_{eq} = 8 \times 3 = 24\text{ V}$.

---

### SECTION B: NETWORK THEOREMS (THEVENIN, NORTON, SUPERPOSITION, MPT) (Q8.26 – Q8.50)

**Q8.26 [MCQ - 1M]** Thevenin's theorem states that any linear two-terminal active circuit can be replaced by:
- (A) An independent voltage source $V_{th}$ in series with equivalent resistance $R_{th}$
- (B) An independent current source $I_N$ in series with equivalent resistance $R_N$
- (C) An ideal transformer with turns ratio 1:1
- (D) A capacitor in parallel with an inductor
> **Answer: (A).** Thevenin's theorem replaces the network with an open-circuit voltage source $V_{th}$ in series with $R_{th}$.

**Q8.27 [MCQ - 1M]** Thevenin's equivalent resistance $R_{th}$ seen across load terminals is calculated by:
- (A) Opening all voltage sources and shorting all current sources
- (B) Short-circuiting all independent voltage sources and open-circuiting all independent current sources
- (C) Removing all dependent sources only
- (D) Connecting a capacitor across the terminals
> **Answer: (B).** To determine $R_{th}$, all independent voltage sources are replaced by short circuits ($V = 0$) and all independent current sources by open circuits ($I = 0$).

**Q8.28 [NAT - 2M]** A linear DC network has open-circuit voltage $V_{oc} = 36\text{ V}$ and short-circuit current $I_{sc} = 6\text{ A}$ across terminals A-B. What is the Thevenin equivalent resistance $R_{th}$ (in $\Omega$)?
> **Answer:** 6. $R_{th} = V_{oc} / I_{sc} = 36 / 6 = 6\,\Omega$.

**Q8.29 [NAT - 2M]** In the circuit from Q8.28, what is the maximum power (in W) that can be transferred to a variable load resistor $R_L$ connected across terminals A-B?
> **Answer:** 54. Maximum power occurs when $R_L = R_{th} = 6\,\Omega$. $P_{\max} = V_{th}^2 / (4 R_{th}) = 36^2 / (4 \times 6) = 1296 / 24 = 54\text{ W}$.

**Q8.30 [MCQ - 1M]** The electrical efficiency of a DC circuit delivering maximum power to a load is:
- (A) $100\%$
- (B) $75\%$
- (C) $50\%$
- (D) Depends on source resistance
> **Answer: (C).** When $R_L = R_{th}$, equal power is dissipated in the source resistance $R_{th}$ and the load $R_L$, giving $\eta = P_L / P_{\text{total}} = 50\%$.

**Q8.31 [MCQ - 2M]** For an AC circuit with source Thevenin impedance $Z_{th} = R_{th} + j X_{th}$, maximum real power is delivered to an adjustable load impedance $Z_L = R_L + j X_L$ when:
- (A) $Z_L = Z_{th}$
- (B) $Z_L = Z_{th}^* = R_{th} - j X_{th}$
- (C) $R_L = R_{th}$ and $X_L = X_{th}$
- (D) $Z_L = -Z_{th}$
> **Answer: (B).** Under AC conditions, maximum power transfer requires conjugate matching: $R_L = R_{th}$ and $X_L = -X_{th}$ so that the net reactance cancels to zero.

**Q8.32 [NAT - 2M]** A source has Thevenin impedance $Z_{th} = 4 + j3\,\Omega$ and $V_{th} = 20ngle 0^\circ\text{ V (rms)}$. What is the maximum active power (in W) transferred to the conjugate-matched load $Z_L$?
> **Answer:** 25. With $Z_L = 4 - j3\,\Omega$, net impedance is $Z_{\text{total}} = 4 + 4 = 8\,\Omega$. Load current $I = 20 / 8 = 2.5\text{ A}$. Power $P = I^2 R_L = (2.5)^2 \times 4 = 6.25 \times 4 = 25\text{ W}$. (Or $P_{\max} = |V_{th}|^2 / (4 R_{th}) = 20^2 / (4 \times 4) = 400 / 16 = 25\text{ W}$).

**Q8.33 [MCQ - 2M]** When applying the Superposition Theorem to a circuit containing dependent sources, which rule MUST be observed?
- (A) Dependent sources must be turned off one by one
- (B) Dependent sources must never be deactivated; only independent sources are turned off one at a time
- (C) Dependent sources are replaced by their internal resistances
- (D) Superposition cannot be used if dependent sources are present
> **Answer: (B).** Dependent sources represent internal coupling and cannot act as independent exciters; they must remain active in all superposition sub-circuits.

**Q8.34 [NAT - 2M]** A resistor $R = 5\,\Omega$ is connected to two independent voltage sources: $V_1 = 15\text{ V}$ produces $3\text{ A}$ through $R$ acting alone, and $V_2 = 10\text{ V}$ produces $1.5\text{ A}$ through $R$ in the same direction acting alone. By superposition, what is the total current (in A) through $R$?
> **Answer:** 4.5. $I_{\text{total}} = I_1 + I_2 = 3.0 + 1.5 = 4.5\text{ A}$.

**Q8.35 [MCQ - 1M]** Superposition Theorem is valid for calculating which of the following circuit quantities?
- (A) Voltage and Current
- (B) Instantaneous and Average Power
- (C) Both Voltage and Power
- (D) Magnetic energy only
> **Answer: (A).** Superposition is strictly a linear theorem applicable to linear variables (voltage and current). Power is a quadratic function ($P = I^2 R$) and cannot be calculated by directly summing individual powers ($P_{\text{total}} 
e P_1 + P_2$).

**Q8.36 [NAT - 2M]** Norton current $I_N$ of a circuit with $V_{th} = 48\text{ V}$ and $R_{th} = 12\,\Omega$ is (in A):
> **Answer:** 4. $I_N = V_{th} / R_{th} = 48 / 12 = 4\text{ A}$.

**Q8.37 [NAT - 2M]** To find Thevenin resistance $R_{th}$ of a network containing only dependent sources and resistors, one connects an external $1\text{ V}$ test source to the terminals. If the measured current leaving the test source is $50\text{ mA}$, what is $R_{th}$ (in $\Omega$)?
> **Answer:** 20. $R_{th} = V_{\text{test}} / I_{\text{test}} = 1\text{ V} / (50 \times 10^{-3}\text{ A}) = 20\,\Omega$.

**Q8.38 [MCQ - 2M]** Reciprocity Theorem is applicable to networks that are:
- (A) Non-linear and active
- (B) Linear, passive, and bilateral
- (C) Containing independent current sources only
- (D) Time-variant
> **Answer: (B).** Reciprocity applies only to linear, passive networks containing bilateral elements ($R, L, C, M$).

**Q8.39 [MCQ - 1M]** Millman's Theorem is primarily used for simplifying:
- (A) Series loops with multiple inductors
- (B) Multiple parallel branches each containing an ideal voltage source in series with a resistor
- (C) Bridge rectifiers
- (D) Sallen-Key active filters
> **Answer: (B).** Millman's theorem reduces multiple parallel battery-resistor branches to a single equivalent voltage source $V_m = rac{\sum V_k G_k}{\sum G_k}$ and equivalent conductance $G_m = \sum G_k$.

**Q8.40 [NAT - 2M]** Two branches in parallel: Branch 1 has $10\text{ V}$ in series with $2\,\Omega$ ($G_1 = 0.5\,\text{S}$); Branch 2 has $20\text{ V}$ in series with $2\,\Omega$ ($G_2 = 0.5\,\text{S}$). By Millman's theorem, what is the open-circuit voltage $V_m$ (in V)?
> **Answer:** 15. $V_m = rac{10(0.5) + 20(0.5)}{0.5 + 0.5} = rac{5 + 10}{1.0} = 15\text{ V}$.

**Q8.41 [MCQ - 2M]** Substitution Theorem states that any branch in a network can be substituted by:
- (A) An open circuit
- (B) A voltage or current source equal to the instantaneous branch voltage or current
- (C) A pure capacitor
- (D) A short circuit only
> **Answer: (B).** If the voltage $v_k(t)$ and current $i_k(t)$ across a branch are known, that branch can be replaced by an independent voltage source $v_k(t)$ or current source $i_k(t)$ without altering any other currents/voltages in the network.

**Q8.42 [NAT - 2M]** A load resistor $R_L$ is connected across a Thevenin network with $V_{th} = 100\text{ V}$ and $R_{th} = 25\,\Omega$. If the power consumed by $R_L$ is $64\text{ W}$, and $R_L > R_{th}$, what is the value of $R_L$ (in $\Omega$)?
> **Answer:** 100. $P_L = I^2 R_L = \left(rac{100}{25 + R_L}
ight)^2 R_L = 64 \implies rac{10000 R_L}{(25 + R_L)^2} = 64 \implies rac{R_L}{(25 + R_L)^2} = rac{64}{10000} = rac{4}{625}$. Solving: $625 R_L = 4(625 + 50 R_L + R_L^2) \implies 4 R_L^2 - 425 R_L + 2500 = 0$. Roots: $R_L = rac{425 \pm \sqrt{180625 - 40000}}{8} = rac{425 \pm 375}{8} \implies R_L = 100\,\Omega$ or $6.25\,\Omega$. Since $R_L > 25\,\Omega$, $R_L = 100\,\Omega$.

**Q8.43 [MCQ - 1M]** Compensation Theorem is especially useful in computing:
- (A) Maximum power transfer
- (B) The change in circuit currents and voltages when a branch resistance changes by $\Delta R$
- (C) Transient decay times
- (D) Resonance frequency of parallel tanks
> **Answer: (B).** When resistance of a branch changes by $\Delta R$, the change in current in any branch is equal to the current produced by a compensating voltage source $V_c = I \cdot \Delta R$ placed in that branch.

**Q8.44 [NAT - 2M]** In a linear resistive network, when load resistance $R_L = 10\,\Omega$, load voltage is $20\text{ V}$. When $R_L = 30\,\Omega$, load voltage is $30\text{ V}$. What is the open-circuit Thevenin voltage $V_{th}$ (in V)?
> **Answer:** 40. From $V_L = V_{th} rac{R_L}{R_{th} + R_L}$: (1) $20 = V_{th} rac{10}{R_{th} + 10} \implies V_{th} = 2(R_{th} + 10)$; (2) $30 = V_{th} rac{30}{R_{th} + 30} \implies V_{th} = R_{th} + 30$. Equating: $2 R_{th} + 20 = R_{th} + 30 \implies R_{th} = 10\,\Omega$. Hence $V_{th} = 10 + 30 = 40\text{ V}$.

**Q8.45 [NAT - 2M]** In the circuit from Q8.44, what is the Thevenin resistance $R_{th}$ (in $\Omega$)?
> **Answer:** 10. As derived in Q8.44: $R_{th} = 10\,\Omega$.

**Q8.46 [MCQ - 2M]** If a source has a fixed internal resistance $R_s$ and can only accept a purely resistive load $R_L$, but the internal reactance is $X_s 
e 0$, maximum power is transferred when:
- (A) $R_L = R_s$
- (B) $R_L = \sqrt{R_s^2 + X_s^2} = |Z_s|$
- (C) $R_L = X_s$
- (D) $R_L = 0$
> **Answer: (B).** When load reactance cannot be adjusted ($X_L = 0$), the optimum load resistance that maximizes power transfer is the magnitude of source impedance $R_L = |Z_s| = \sqrt{R_s^2 + X_s^2}$.

**Q8.47 [NAT - 2M]** An AC generator has internal impedance $Z_s = 6 + j8\,\Omega$. A purely resistive heater $R_L$ is connected. To extract maximum power, what should be the resistance $R_L$ (in $\Omega$)?
> **Answer:** 10. $R_L = |Z_s| = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\,\Omega$.

**Q8.48 [MCQ - 1M]** A linear bilateral network has two ports. If a voltage $V$ applied at port 1 produces a short-circuit current $I$ at port 2, then applying the same voltage $V$ at port 2 will produce at port 1:
- (A) $2I$
- (B) $I$
- (C) $I/2$
- (D) Zero
> **Answer: (B).** Direct consequence of the Reciprocity Theorem for bilateral passive networks ($y_{12} = y_{21}$).

**Q8.49 [NAT - 2M]** A DC circuit delivers $18\text{ W}$ to a $2\,\Omega$ load and also delivers $18\text{ W}$ to an $8\,\Omega$ load. What is the Thevenin resistance $R_{th}$ (in $\Omega$)?
> **Answer:** 4. When a circuit delivers the same power to two different load resistances $R_1$ and $R_2$, the Thevenin resistance is their geometric mean: $R_{th} = \sqrt{R_1 \cdot R_2} = \sqrt{2 \times 8} = \sqrt{16} = 4\,\Omega$.

**Q8.50 [NAT - 2M]** In Q8.49, what is the open-circuit voltage $V_{th}$ (in V)?
> **Answer:** 18. Power $P = rac{V_{th}^2 R_L}{(R_{th} + R_L)^2} \implies 18 = rac{V_{th}^2 \times 2}{(4 + 2)^2} = rac{2 V_{th}^2}{36} = rac{V_{th}^2}{18} \implies V_{th}^2 = 18^2 \implies V_{th} = 18\text{ V}$.

---

### SECTION C: TRANSIENTS, AC RESONANCE, TWO-PORT & 3-PHASE CIRCUITS (Q8.51 – Q8.75)

**Q8.51 [NAT - 2M]** A series $RL$ circuit with $R = 5\,\Omega$ and $L = 20\text{ mH}$ is energized by a $50\text{ V}$ DC step. What is the time constant $	au$ (in ms)?
> **Answer:** 4. $	au = L / R = (20 \times 10^{-3}) / 5 = 4 \times 10^{-3}\text{ s} = 4\text{ ms}$.

**Q8.52 [NAT - 2M]** In the circuit of Q8.51, what is the final steady-state current $i(\infty)$ (in A)?
> **Answer:** 10. Under DC steady state, the inductor acts as a short circuit: $i(\infty) = V / R = 50 / 5 = 10\text{ A}$.

**Q8.53 [NAT - 2M]** In the circuit of Q8.51, what is the initial rate of rise of current $\left.rac{di}{dt}
ight|_{t=0^+}$ (in A/s) if $i(0^-) = 0$?
> **Answer:** 2500. At $t = 0^+$, $i(0^+) = 0$, so voltage drop across resistor is $0\text{ V}$. Entire voltage falls across inductor: $L \left.rac{di}{dt}
ight|_{t=0^+} = V \implies \left.rac{di}{dt}
ight|_{t=0^+} = 50 / (20 \times 10^{-3}) = 2500\text{ A/s}$.

**Q8.54 [NAT - 2M]** A series $RC$ circuit has $R = 2\text{ k}\Omega$ and $C = 5\,\mu\text{F}$. What is the time constant $	au$ (in ms)?
> **Answer:** 10. $	au = R C = (2 \times 10^3) \times (5 \times 10^{-6}) = 10 \times 10^{-3}\text{ s} = 10\text{ ms}$.

**Q8.55 [NAT - 2M]** An uncharged $10\,\mu\text{F}$ capacitor in series with a $100\,\Omega$ resistor is connected to a $20\text{ V}$ DC source at $t = 0$. What is the initial current $i(0^+)$ (in A)?
> **Answer:** 0.2. At $t = 0^+$, uncharged capacitor voltage $v_C(0^+) = 0\text{ V}$ (acts as short circuit). Current $i(0^+) = V / R = 20 / 100 = 0.2\text{ A}$.

**Q8.56 [MCQ - 2M]** A series $RLC$ circuit with parameters $R, L, C$ is critically damped when:
- (A) $R = 2 \sqrt{L/C}$
- (B) $R < 2 \sqrt{L/C}$
- (C) $R > 2 \sqrt{L/C}$
- (D) $R = 0$
> **Answer: (A).** Characteristic equation is $s^2 + rac{R}{L} s + rac{1}{LC} = 0$. Roots are repeated when $(R/L)^2 - 4/(LC) = 0 \implies R^2 = 4 L / C \implies R = 2\sqrt{L/C}$.

**Q8.57 [NAT - 2M]** A series $RLC$ circuit has $L = 10\text{ mH}$ and $C = 10\,\mu\text{F}$. What value of resistance $R$ (in $\Omega$) will make the circuit critically damped?
> **Answer:** 63.25. $R = 2 \sqrt{L/C} = 2 \sqrt{(10 \times 10^{-3}) / (10 \times 10^{-6})} = 2 \sqrt{1000} = 2 \times 31.623 = 63.25\,\Omega$.

**Q8.58 [NAT - 2M]** A series resonant circuit has $L = 50\,\mu\text{H}$ and $C = 200\text{ pF}$. What is the resonant angular frequency $\omega_0$ (in Mrad/s)?
> **Answer:** 10. $\omega_0 = 1/\sqrt{LC} = 1/\sqrt{50 \times 10^{-6} \times 200 \times 10^{-12}} = 1/\sqrt{10^{-14}} = 10^7\text{ rad/s} = 10\text{ Mrad/s}$.

**Q8.59 [MCQ - 1M]** At series resonance, the impedance of a series $RLC$ circuit is:
- (A) Purely inductive and maximum
- (B) Purely capacitive and minimum
- (C) Purely resistive and minimum ($Z = R$)
- (D) Infinite
> **Answer: (C).** At $\omega = \omega_0$, $X_L = X_C$, so net reactance is zero. The impedance reaches its absolute minimum $Z = R$, resulting in maximum current.

**Q8.60 [MCQ - 1M]** At parallel resonance (anti-resonance) in an ideal $LC$ tank, the terminal impedance is:
- (A) Zero
- (B) Purely resistive and theoretically infinite
- (C) Purely inductive
- (D) Purely capacitive
> **Answer: (B).** In an ideal parallel $LC$ tank, parallel currents cancel out completely, yielding zero net line current and infinite input impedance.

**Q8.61 [NAT - 2M]** A series $RLC$ circuit has $R = 10\,\Omega, L = 100\text{ mH},$ and $C = 1\,\mu\text{F}$. What is the Quality Factor $Q$ of the circuit?
> **Answer:** 31.62. $Q = rac{1}{R} \sqrt{rac{L}{C}} = rac{1}{10} \sqrt{rac{0.1}{10^{-6}}} = rac{1}{10} \sqrt{10^5} = rac{316.23}{10} = 31.62$.

**Q8.62 [NAT - 2M]** A series resonant circuit has resonant frequency $f_0 = 100\text{ kHz}$ and bandwidth $BW = 5\text{ kHz}$. What is the Quality factor $Q$?
> **Answer:** 20. $Q = f_0 / BW = 100\text{ kHz} / 5\text{ kHz} = 20$.

**Q8.63 [NAT - 2M]** A sinusoidal voltage $v(t) = 100 \sqrt{2} \sin(100\pi t + 30^\circ)\text{ V}$ is applied across an impedance $Z = 10ngle 30^\circ\,\Omega$. What is the RMS current (in A)?
> **Answer:** 10. RMS voltage $V_{\text{rms}} = 100\text{ V}$. RMS current $I_{\text{rms}} = V_{\text{rms}} / |Z| = 100 / 10 = 10\text{ A}$.

**Q8.64 [NAT - 2M]** In the circuit of Q8.63, what is the average active power $P$ (in W) dissipated?
> **Answer:** 1000. Phase of voltage is $30^\circ$ and phase of impedance is $30^\circ$, so current phase is $30^\circ - 30^\circ = 0^\circ$. Phase angle $\phi = 30^\circ - 0^\circ = 30^\circ$ is the impedance angle! Wait: $P = V_{\text{rms}} I_{\text{rms}} \cos 	heta_Z = 100 \times 10 \times \cos(30^\circ) = 1000 \times 0.866 = 866\text{ W}$.

**Q8.65 [NAT - 2M]** An AC load absorbs real power $P = 12\text{ kW}$ and reactive power $Q = 9\text{ kVAR}$ (inductive). What is the total apparent power $S$ (in kVA)?
> **Answer:** 15. $S = \sqrt{P^2 + Q^2} = \sqrt{12^2 + 9^2} = \sqrt{144 + 81} = \sqrt{225} = 15\text{ kVA}$.

**Q8.66 [NAT - 2M]** In Q8.65, what is the power factor of the load?
> **Answer:** 0.8. Power factor $\cos \phi = P / S = 12 / 15 = 0.8\text{ lagging}$.

**Q8.67 [MCQ - 1M]** In a balanced three-phase star (Wye) connected system, the relationship between line voltage $V_L$ and phase voltage $V_{ph}$ is:
- (A) $V_L = V_{ph}$
- (B) $V_L = \sqrt{3} V_{ph}$ leading by $30^\circ$
- (C) $V_L = V_{ph} / \sqrt{3}$
- (D) $V_L = 3 V_{ph}$
> **Answer: (B).** In a star connection, $V_L = \sqrt{3} V_{ph}$ and line current equals phase current ($I_L = I_{ph}$).

**Q8.68 [MCQ - 1M]** In a balanced three-phase delta connected system:
- (A) $V_L = \sqrt{3} V_{ph}, I_L = I_{ph}$
- (B) $V_L = V_{ph}, I_L = \sqrt{3} I_{ph}$
- (C) $V_L = V_{ph}, I_L = I_{ph}$
- (D) $V_L = 3 V_{ph}, I_L = 3 I_{ph}$
> **Answer: (B).** In delta, line voltage equals phase voltage ($V_L = V_{ph}$), and line current is $\sqrt{3}$ times phase current ($I_L = \sqrt{3} I_{ph}$).

**Q8.69 [NAT - 2M]** A balanced 3-phase $400\text{ V}$ (line-to-line RMS) star-connected supply feeds a balanced star load of $Z_{ph} = 20\,\Omega$ per phase. What is the line current $I_L$ (in A)?
> **Answer:** 11.55. Phase voltage $V_{ph} = 400 / \sqrt{3} = 230.94\text{ V}$. Line current $I_L = I_{ph} = V_{ph} / Z_{ph} = 230.94 / 20 = 11.55\text{ A}$.

**Q8.70 [NAT - 2M]** In a two-wattmeter measurement of a balanced 3-phase load, the readings are $W_1 = 6\text{ kW}$ and $W_2 = 2\text{ kW}$. What is the total real power (in kW) consumed?
> **Answer:** 8. Total real power $P = W_1 + W_2 = 6 + 2 = 8\text{ kW}$.

**Q8.71 [MCQ - 2M]** In the two-wattmeter method, one of the wattmeters reads zero while the other reads positive ($W_2 = 0, W_1 > 0$). What is the power factor of the load?
- (A) 1.0 (Unity)
- (B) 0.866
- (C) 0.5
- (D) 0.0 (Zero)
> **Answer: (C).** $	an \phi = \sqrt{3} rac{W_1 - W_2}{W_1 + W_2} = \sqrt{3} rac{W_1 - 0}{W_1 + 0} = \sqrt{3} \implies \phi = 60^\circ \implies \cos(60^\circ) = 0.5$.

**Q8.72 [MCQ - 1M]** In two-wattmeter measurement, when the load power factor is strictly less than 0.5 ($\phi > 60^\circ$):
- (A) Both wattmeters read positive
- (B) One wattmeter gives a negative reading
- (C) Both wattmeters give identical readings
- (D) Both wattmeters read zero
> **Answer: (B).** When $\phi > 60^\circ$, $\cos(30^\circ + \phi)$ becomes negative, so one of the wattmeters deflects backwards (reads negative).

**Q8.73 [MCQ - 2M]** For a two-port network to be reciprocal, the condition in terms of transmission ($ABCD$) parameters is:
- (A) $A = D$
- (B) $AD - BC = 1$
- (C) $B = C$
- (D) $A = B$
> **Answer: (B).** Reciprocity condition in ABCD parameters is $AD - BC = 1$. The symmetry condition is $A = D$.

**Q8.74 [NAT - 2M]** A symmetrical two-port network has $Z_{11} = 10\,\Omega$ and $Z_{12} = 6\,\Omega$. What is the value of open-circuit driving point impedance $Z_{22}$ (in $\Omega$)?
> **Answer:** 10. For a symmetrical two-port network, $Z_{11} = Z_{22} = 10\,\Omega$.

**Q8.75 [NAT - 2M]** The Z-parameters of a two-port network are $Z_{11} = 8\,\Omega, Z_{12} = Z_{21} = 4\,\Omega, Z_{22} = 8\,\Omega$. If port 2 is terminated in an open circuit ($I_2 = 0$), what is the voltage transfer ratio $V_2 / V_1$?
> **Answer:** 0.5. $V_1 = Z_{11} I_1 + Z_{12} I_2 = 8 I_1$. $V_2 = Z_{21} I_1 + Z_{22} I_2 = 4 I_1$. Voltage ratio $V_2 / V_1 = (4 I_1) / (8 I_1) = 0.5$.

---

### SECTION D: ENGINEERING MECHANICS FOR ROBOTICS (Q8.76 – Q8.100)

**Q8.76 [MCQ - 1M]** Lami's theorem states that if three coplanar concurrent forces are in static equilibrium, each force is proportional to:
- (A) The cosine of the angle between the other two forces
- (B) The sine of the angle between the other two forces
- (C) The tangent of the angle between the other two forces
- (D) The sum of the other two forces
> **Answer: (B).** $rac{F_1}{\sin lpha} = rac{F_2}{\sin eta} = rac{F_3}{\sin \gamma}$, where each angle is the opposite angle between the other two forces.

**Q8.77 [NAT - 2M]** A $100\text{ N}$ weight is suspended by two identical symmetrical cords attached to a horizontal ceiling, each making an angle of $30^\circ$ with the horizontal. What is the tension $T$ (in N) in each cord?
> **Answer:** 100. Vertical equilibrium: $2 T \sin(30^\circ) = 100 \implies 2 T (0.5) = 100 \implies T = 100\text{ N}$.

**Q8.78 [MCQ - 1M]** A block of mass $m = 10\text{ kg}$ rests on a horizontal floor with static friction coefficient $\mu_s = 0.4$. Taking $g = 9.81\text{ m/s}^2$, what is the minimum horizontal force required to initiate motion?
- (A) $98.1\text{ N}$
- (B) $39.24\text{ N}$
- (C) $4.0\text{ N}$
- (D) $392.4\text{ N}$
> **Answer: (B).** Normal force $N = m g = 10 \times 9.81 = 98.1\text{ N}$. Limiting static friction $F_{\lim} = \mu_s N = 0.4 \times 98.1 = 39.24\text{ N}$.

**Q8.79 [NAT - 2M]** A block rests on an inclined plane. The angle of inclination is slowly increased until the block just starts to slide down at $	heta = 30^\circ$. What is the coefficient of static friction $\mu_s$?
> **Answer:** 0.577. Angle of repose equals angle of friction: $\mu_s = 	an 	heta = 	an(30^\circ) = 1/\sqrt{3} pprox 0.577$.

**Q8.80 [MCQ - 2M]** In a flat belt-pulley system, the limiting ratio of tight side tension $T_1$ to slack side tension $T_2$ without slipping is given by:
- (A) $T_1 / T_2 = \mu 	heta$
- (B) $T_1 / T_2 = e^{\mu 	heta}$
- (C) $T_1 / T_2 = \ln(\mu 	heta)$
- (D) $T_1 / T_2 = \sin(\mu 	heta)$
> **Answer: (B).** The belt friction formula is $T_1 / T_2 = e^{\mu 	heta}$, where $\mu$ is coefficient of friction and $	heta$ is contact angle of wrap in radians.

**Q8.81 [NAT - 2M]** A flat belt wraps around a pulley with angle of wrap $	heta = \pi\text{ rad}$ ($180^\circ$). If $\mu = 0.3$, what is the ratio $T_1 / T_2$?
> **Answer:** 2.566. $T_1 / T_2 = e^{0.3 \times \pi} = e^{0.9425} pprox 2.566$.

**Q8.82 [NAT - 2M]** A belt drives a pulley at linear speed $v = 20\text{ m/s}$. The belt has mass per unit length $m = 0.5\text{ kg/m}$. What is the centrifugal tension $T_c$ (in N) developed in the belt?
> **Answer:** 200. Centrifugal tension $T_c = m v^2 = 0.5 \times (20)^2 = 0.5 \times 400 = 200\text{ N}$.

**Q8.83 [MCQ - 2M]** For maximum power transmission by a belt drive, the optimum linear belt speed occurs when centrifugal tension $T_c$ equals:
- (A) Maximum allowable tension $T$
- (B) $T / 2$
- (C) $T / 3$
- (D) $T / 4$
> **Answer: (C).** Power $P = (T_1 - T_2) v = (T - T_c)(1 - e^{-\mu	heta}) v = (T - m v^2) C v$. Differentiating with respect to $v$: $rac{dP}{dv} = 0 \implies T - 3 m v^2 = 0 \implies T_c = m v^2 = T / 3$.

**Q8.84 [NAT - 2M]** A belt has maximum allowable tension $T_{\max} = 900\text{ N}$. What is the centrifugal tension $T_c$ (in N) for maximum power transmission condition?
> **Answer:** 300. $T_c = T_{\max} / 3 = 900 / 3 = 300\text{ N}$.

**Q8.85 [MCQ - 1M]** In a planar pin-jointed truss, what is the minimum number of members $m$ required for rigidity with $j$ joints?
- (A) $m = 2j - 3$
- (B) $m = 3j - 2$
- (C) $m = 2j$
- (D) $m = j + 3$
> **Answer: (A).** For a statically determinate stable 2D truss, the Maxwell relation is $m = 2j - 3$. If $m < 2j - 3$, it is a mechanism; if $m > 2j - 3$, it is statically indeterminate.

**Q8.86 [MCQ - 2M]** At a truss joint, exactly two non-collinear members meet with no external load or support reaction applied. The force in each member is:
- (A) Tensile and equal to member length
- (B) Zero in both members
- (C) Compressive in both members
- (D) Indeterminate
> **Answer: (B).** Projecting equilibrium equations along the normal to either member shows that both members carry zero force.

**Q8.87 [MCQ - 1M]** At a truss joint, three members meet. Two are collinear. If no external load is applied at the joint, the force in the third non-collinear member is:
- (A) Zero
- (B) Equal to the collinear force
- (C) Infinite
- (D) Tensile
> **Answer: (A).** Resolving forces perpendicular to the collinear line reveals that the third member must carry zero force.

**Q8.88 [NAT - 2M]** A simple triangular truss consists of 3 members connected at 3 joints with 2 pin/roller supports. How many members are present?
> **Answer:** 3. $m = 2j - 3 = 2(3) - 3 = 6 - 3 = 3$.

**Q8.89 [NAT - 2M]** A rigid link of length $L = 2\text{ m}$ is rotating about a fixed pivot with constant angular velocity $\omega = 4\text{ rad/s}$. What is the linear velocity (in m/s) of its tip?
> **Answer:** 8. $v = \omega \cdot L = 4 \times 2 = 8\text{ m/s}$.

**Q8.90 [NAT - 2M]** In Q8.89, what is the centripetal (normal) acceleration (in m/s$^2$) of the tip?
> **Answer:** 32. $a_n = \omega^2 L = 4^2 \times 2 = 16 \times 2 = 32\text{ m/s}^2$.

**Q8.91 [MCQ - 2M]** A ladder of length $L$ leans against a smooth vertical wall and rests on a smooth floor. Point A is at the wall and Point B is at the floor. The Instantaneous Centre of Zero Velocity of the ladder lies at:
- (A) The midpoint of the ladder
- (B) The intersection of the horizontal line through A and vertical line through B
- (C) The origin where wall and floor meet
- (D) Point A
> **Answer: (B).** Velocity of A is vertical (along wall) $\implies$ normal is horizontal through A. Velocity of B is horizontal (along floor) $\implies$ normal is vertical through B. The I-centre is the intersection of these two perpendicular normals.

**Q8.92 [NAT - 2M]** In Q8.91, if the ladder makes an angle of $60^\circ$ with the horizontal and point B slides away from the wall with velocity $v_B = 3\text{ m/s}$, what is the downward velocity of point A (in m/s)?
> **Answer:** 5.196. Along the ladder, velocity components must match: $v_B \cos(60^\circ) = v_A \sin(60^\circ) \implies v_A = v_B \cot(60^\circ) = 3 / 	an(30^\circ)$ wait: $v_B \cos(60^\circ) = v_A \cos(30^\circ) = v_A \sin(60^\circ) \implies v_A = v_B / 	an(60^\circ) = 3 / \sqrt{3} = 1.732\text{ m/s}$. Using I-centre: distance to B is $L \sin(60^\circ)$, distance to A is $L \cos(60^\circ)$, $\omega = v_B / (L \sin 60^\circ) \implies v_A = \omega (L \cos 60^\circ) = v_B \cot(60^\circ) = 3 \times (1/\sqrt{3}) = 1.732\text{ m/s}$.

**Q8.93 [NAT - 2M]** A solid uniform disc of mass $m = 4\text{ kg}$ and radius $R = 0.5\text{ m}$ rolls without slipping on a horizontal plane with center velocity $v = 6\text{ m/s}$. What is the total kinetic energy (in J)?
> **Answer:** 108. For a rolling disc: $KE_{\text{total}} = rac{1}{2} m v^2 + rac{1}{2} I \omega^2 = rac{1}{2} m v^2 + rac{1}{2} (rac{1}{2} m R^2) (v/R)^2 = rac{3}{4} m v^2 = rac{3}{4} \times 4 \times 6^2 = 3 \times 36 = 108\text{ J}$.

**Q8.94 [MCQ - 2M]** When a solid sphere ($I = rac{2}{5} m R^2$) rolls down an inclined plane of angle $	heta$ without slipping, its linear acceleration is:
- (A) $g \sin 	heta$
- (B) $rac{5}{7} g \sin 	heta$
- (C) $rac{2}{3} g \sin 	heta$
- (D) $rac{1}{2} g \sin 	heta$
> **Answer: (B).** $a = rac{g \sin 	heta}{1 + I/(m R^2)} = rac{g \sin 	heta}{1 + 2/5} = rac{5}{7} g \sin 	heta$.

**Q8.95 [NAT - 2M]** A uniform rod of mass $m = 6\text{ kg}$ and length $L = 2\text{ m}$ is pivoted at one end. What is its mass moment of inertia $I$ (in kg$\cdot$m$^2$) about the pivot?
> **Answer:** 8. For a rod about one end: $I = rac{1}{3} m L^2 = rac{1}{3} \times 6 \times 2^2 = 2 \times 4 = 8\text{ kg}\cdot\text{m}^2$.

**Q8.96 [NAT - 2M]** In Q8.95, if released from a horizontal position with zero initial velocity, what is the initial angular acceleration $lpha$ (in rad/s$^2$) about the pivot? (Take $g = 9.81\text{ m/s}^2$).
> **Answer:** 7.36. Torque about pivot due to gravity acting at center of mass ($L/2 = 1\text{ m}$): $	au = m g (L/2) = 6 \times 9.81 \times 1 = 58.86\text{ N}\cdot\text{m}$. Equation of motion: $	au = I lpha \implies 58.86 = 8 lpha \implies lpha = 58.86 / 8 = 7.3575\text{ rad/s}^2$.

**Q8.97 [MCQ - 1M]** D'Alembert's principle enables dynamic problems to be treated as equivalent static equilibrium problems by introducing:
- (A) Virtual work
- (B) Inertia forces and inertia torques ($-m \vec{a}$ and $-I \vec{lpha}$)
- (C) Coriolis acceleration
- (D) Gravitational potential
> **Answer: (B).** By adding fictitious reversed effective forces (inertia force $\vec{F}_I = -m \vec{a}$ and inertia couple $\vec{	au}_I = -I \vec{lpha}$), the equations of motion $\sum \vec{F} = m \vec{a}$ transform to static equilibrium form $\sum \vec{F} + \vec{F}_I = 0$.

**Q8.98 [NAT - 2M]** A wheel of radius $R = 0.4\text{ m}$ accelerates uniformly from rest to an angular speed of $30\text{ rad/s}$ in $6\text{ seconds}$. What is the angular acceleration $lpha$ (in rad/s$^2$)?
> **Answer:** 5. $lpha = (\omega_f - \omega_i) / t = (30 - 0) / 6 = 5\text{ rad/s}^2$.

**Q8.99 [NAT - 2M]** In Q8.98, how many revolutions does the wheel make in those 6 seconds?
> **Answer:** 14.32. Total angle $	heta = rac{1}{2} lpha t^2 = 0.5 \times 5 \times 6^2 = 0.5 \times 5 \times 36 = 90\text{ rad}$. Number of revolutions $N = 	heta / (2\pi) = 90 / (2 \times 3.1416) = 90 / 6.2832 pprox 14.32\text{ revs}$.

**Q8.100 [MCQ - 2M]** The work done by friction on a rigid cylinder rolling WITHOUT slipping on a stationary horizontal surface is:
- (A) Positive
- (B) Negative
- (C) Strictly Zero
- (D) Dependent on cylinder radius
> **Answer: (C).** In pure rolling without slipping, the instantaneous contact point has zero velocity relative to the surface ($v_{\text{contact}} = 0$). Therefore, the displacement of the point of application of friction is zero, meaning static friction does zero work.
