# Module 5: Electric Circuits, Network Theorems & Digital Logic (For Mechanical Engineers)

**GATE Section:** Part A.2 (Basics of Mechatronics)  
**Target:** Fast-Track Mastery of Circuit Laws, Theorems, AC Resonances & Logic Gates

---

## 1. Network Elements & Fundamental Laws

### 1. Circuit Elements
* **Ideal Sources:**
  * **Independent Voltage Source:** Maintains terminal voltage $V$ regardless of current drawn.
  * **Independent Current Source:** Delivers current $I$ regardless of terminal voltage.
  * **Dependent (Controlled) Sources:** VCVS, VCCS, CCVS, CCCS.
* **Passive Elements ($R, L, C, M$):**
  * **Resistor:** $v(t) = R \cdot i(t)$, Power $P = I^2 R = \frac{V^2}{R}$.
  * **Inductor:** $v(t) = L \frac{di(t)}{dt}$, Energy $E_L = \frac{1}{2} L i^2$. Current cannot change instantaneously ($i(0^+) = i(0^-)$).
  * **Capacitor:** $i(t) = C \frac{dv(t)}{dt}$, Energy $E_C = \frac{1}{2} C v^2$. Voltage cannot change instantaneously ($v(0^+) = v(0^-)$).
  * **Mutual Inductance ($M$):** $M = k \sqrt{L_1 L_2}$ (where $0 \le k \le 1$ is coupling coefficient).

### 2. Kirchhoff's Laws
* **Kirchhoff's Current Law (KCL):** Algebraic sum of currents entering a node is zero ($\sum I_{\text{in}} = \sum I_{\text{out}}$). Based on **Conservation of Charge**.
* **Kirchhoff's Voltage Law (KVL):** Algebraic sum of potential differences around any closed loop is zero ($\sum V_{\text{drops}} = \sum V_{\text{sources}}$). Based on **Conservation of Energy**.

---

## 2. Network Theorems (Must-Know for GATE Numericals)

### 1. Thevenin’s Theorem
Any linear two-terminal circuit can be replaced by an equivalent circuit consisting of an **independent voltage source $V_{th}$ in series with a resistor $R_{th}$**.
* $V_{th}$ = Open-Circuit voltage across terminals ($V_{oc}$).
* $R_{th}$ = Equivalent resistance seen from terminals with all independent voltage sources short-circuited and current sources open-circuited.

### 2. Norton’s Theorem
Any linear two-terminal circuit can be replaced by an equivalent circuit consisting of an **independent current source $I_N$ in parallel with a resistor $R_N$**.
* $I_N$ = Short-Circuit current through terminals ($I_{sc}$).
* $R_N = R_{th} = \frac{V_{th}}{I_N}$.

### 3. Maximum Power Transfer Theorem
* **For DC Circuits:** Maximum power is transferred to a load resistor $R_L$ when:
  $$\boxed{R_L = R_{th}}$$
  $$\text{Maximum Power Transferred: } P_{\max} = \frac{V_{th}^2}{4 R_{th}}$$
  *(Efficiency at maximum power transfer = $\mathbf{50\%}$)*.
* **For AC Circuits with load $Z_L = R_L + jX_L$:**
  $$Z_L = Z_{th}^* = R_{th} - jX_{th}$$

---

## 3. AC Circuits & Resonance

### 1. Series RLC Resonance
* Complex impedance: $Z = R + j\left(\omega L - \frac{1}{\omega C}\right)$
* **Resonance Condition:** $\omega_0 L = \frac{1}{\omega_0 C} \implies \boxed{\omega_0 = \frac{1}{\sqrt{LC}} \quad (\text{rad/s})}, \quad f_0 = \frac{1}{2\pi \sqrt{LC}}$
* At resonance:
  * Impedance is **minimum** ($Z_{\min} = R$) and purely resistive.
  * Current is **maximum** ($I_{\max} = V/R$) and in-phase with voltage (Power factor = $1.0$).
  * **Quality Factor ($Q$):** $Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 R C} = \frac{1}{R} \sqrt{\frac{L}{C}} = \frac{f_0}{\text{Bandwidth}}$.

### 2. Balanced 3-Phase AC Circuits
* **Star Connection ($Y$):**
  * $V_L = \sqrt{3} V_{ph}$ ($\text{Line Voltage} = \sqrt{3} \times \text{Phase Voltage}$, leads by $30^\circ$)
  * $I_L = I_{ph}$ ($\text{Line Current} = \text{Phase Current}$)
* **Delta Connection ($\Delta$):**
  * $V_L = V_{ph}$
  * $I_L = \sqrt{3} I_{ph}$
* **Total 3-Phase Power:**
  $$P = \sqrt{3} V_L I_L \cos\theta = 3 V_{ph} I_{ph} \cos\theta$$

---

## 4. Digital Circuits & Logic Design

### 1. Boolean Algebra & De Morgan’s Laws
* **De Morgan’s Theorem 1:** $\overline{A \cdot B} = \bar{A} + \bar{B}$ (NAND is equivalent to Inverted OR).
* **De Morgan’s Theorem 2:** $\overline{A + B} = \bar{A} \cdot \bar{B}$ (NOR is equivalent to Inverted AND).
* **Universal Logic Gates:** **NAND** and **NOR** (Any logic gate or circuit can be built using only NAND or only NOR gates).

### 2. Combinational Circuits
* **Multiplexer (MUX - Data Selector):** $2^n$ inputs, $n$ select lines, 1 output.
  * Formula for $4:1$ MUX: $Y = \bar{S}_1 \bar{S}_0 I_0 + \bar{S}_1 S_0 I_1 + S_1 \bar{S}_0 I_2 + S_1 S_0 I_3$.
* **Demultiplexer / Decoder:** 1 input, $n$ select lines, $2^n$ outputs.

### 3. Sequential Circuits & Flip-Flops
* **Difference from Combinational:** Contains memory elements (feedback loop), output depends on present inputs + previous state.

| Flip-Flop Type | Inputs | Characteristic Equation | Key Feature / State Transition |
| :--- | :---: | :--- | :--- |
| **SR Latch/FF** | $S, R$ | $Q_{next} = S + \bar{R}Q$ | $S=1, R=1$ is **Invalid / Forbidden** state |
| **JK Flip-Flop** | $J, K$ | $Q_{next} = J\bar{Q} + \bar{K}Q$ | $J=1, K=1$ causes **Toggle** ($Q_{next} = \bar{Q}$); solves SR invalidity |
| **D (Data/Delay) FF** | $D$ | $Q_{next} = D$ | Output follows input on clock edge (Used for registers) |
| **T (Toggle) FF** | $T$ | $Q_{next} = T \oplus Q = T\bar{Q} + \bar{T}Q$ | $T=1 \implies$ Toggles state; $T=0 \implies$ Holds state (Used for binary counters) |

* **Modulus of Counter (MOD-N):** Number of unique states the counter cycles through.
  * To design a MOD-$N$ counter, number of flip-flops $n$ required satisfies: $2^{n-1} < N \le 2^n$.
