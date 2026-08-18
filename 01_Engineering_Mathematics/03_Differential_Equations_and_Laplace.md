# Engineering Mathematics: Differential Equations & Laplace Transforms

**Target:** GATE 2027 Robotics & Automation (Section A.1)  
**High-Yield Weightage:** 4–6 Marks | **Focus:** Exact ODEs, Cauchy-Euler, Laplace Transforms & Transfer Functions

---

## 1. First-Order Ordinary Differential Equations (ODEs)

### 1.1 First-Order Linear Differential Equation (Leibnitz Form)
Standard form:
$$\frac{dy}{dx} + P(x)y = Q(x)$$
* **Integrating Factor (IF):**
  $$\text{IF} = e^{\int P(x) \, dx}$$
* **General Solution:**
  $$y \cdot (\text{IF}) = \int Q(x) \cdot (\text{IF}) \, dx + C$$

---

### 1.2 Exact Differential Equations
An equation of the form:
$$M(x, y) \, dx + N(x, y) \, dy = 0$$
is **Exact** if and only if:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$
* **Solution for Exact Equation:**
  $$\int_{y = \text{const}} M \, dx + \int (\text{terms in } N \text{ free from } x) \, dy = C$$

* **Integrating Factor Rules if Not Exact:**
  1. If $\frac{1}{N}\left(\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}\right) = f(x) \implies \text{IF} = e^{\int f(x) \, dx}$
  2. If $\frac{1}{M}\left(\frac{\partial N}{\partial x} - \frac{\partial M}{\partial y}\right) = g(y) \implies \text{IF} = e^{\int g(y) \, dy}$

---

## 2. Higher-Order Linear Differential Equations with Constant Coefficients

Standard form:
$$\frac{d^n y}{dx^n} + a_1 \frac{d^{n-1}y}{dx^{n-1}} + \dots + a_n y = X(x)$$
$$\text{Total Solution: } y(x) = y_c(x) + y_p(x) \quad (\text{Complementary Function} + \text{Particular Integral})$$

### 2.1 Complementary Function ($y_c$) from Characteristic Roots:
Solve auxiliary polynomial $f(m) = 0$:
1. **Real and Distinct roots ($m_1, m_2$):**
   $$y_c = C_1 e^{m_1 x} + C_2 e^{m_2 x}$$
2. **Real and Repeated roots ($m_1 = m_2 = m$):**
   $$y_c = (C_1 + C_2 x) e^{m x}$$
3. **Complex Conjugate roots ($m = \alpha \pm i\beta$):**
   $$y_c = e^{\alpha x} (C_1 \cos\beta x + C_2 \sin\beta x)$$

---

### 2.2 Particular Integral ($y_p$) Shortcuts:
$$y_p = \frac{1}{f(D)} X(x)$$
1. **Case $X(x) = e^{ax}$:**
   $$y_p = \frac{1}{f(a)} e^{ax} \quad (\text{if } f(a) \neq 0)$$
   If $f(a) = 0$ (resonance), $y_p = x \cdot \frac{1}{f'(a)} e^{ax}$.
2. **Case $X(x) = \sin(ax)$ or $\cos(ax)$:**
   Replace $D^2 \to -a^2$ in $f(D^2)$:
   $$y_p = \frac{1}{f(-a^2)} \sin(ax) \quad (\text{if } f(-a^2) \neq 0)$$

---

### 2.3 Cauchy-Euler Homogeneous Equation
Form:
$$x^2 \frac{d^2 y}{dx^2} + a x \frac{dy}{dx} + b y = f(x)$$
* **Substitution Trick:** Let $x = e^z \implies z = \ln x$.
* Then $x \frac{dy}{dx} = D_z y$ and $x^2 \frac{d^2 y}{dx^2} = D_z(D_z - 1)y$.
* Converts equation into constant-coefficient ODE in variable $z$!

---

## 3. Laplace Transforms & Inverse Laplace

### 3.1 Standard Laplace Transform Pairs:

$$\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-st} f(t) \, dt$$

| Time Domain $f(t)$ | Frequency Domain $F(s)$ | Region of Convergence |
| :---: | :---: | :---: |
| $1$ (Unit Step $u(t)$) | $\frac{1}{s}$ | $s > 0$ |
| $t^n$ ($n = 1, 2, 3 \dots$) | $\frac{n!}{s^{n+1}}$ | $s > 0$ |
| $e^{at}$ | $\frac{1}{s - a}$ | $s > a$ |
| $\sin(\omega t)$ | $\frac{\omega}{s^2 + \omega^2}$ | $s > 0$ |
| $\cos(\omega t)$ | $\frac{s}{s^2 + \omega^2}$ | $s > 0$ |
| $\sinh(at)$ | $\frac{a}{s^2 - a^2}$ | $s > |a|$ |
| $\cosh(at)$ | $\frac{s}{s^2 - a^2}$ | $s > |a|$ |
| $\delta(t)$ (Dirac Delta) | $1$ | All $s$ |

---

### 3.2 Key Operational Properties:
1. **First Shifting Theorem:** $\mathcal{L}\{e^{at} f(t)\} = F(s - a)$
2. **Derivative Property:** $\mathcal{L}\{f'(t)\} = s F(s) - f(0^-)$
   $$\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0^-) - f'(0^-)$$
3. **Integral Property:** $\mathcal{L}\left\{\int_0^t f(\tau) \, d\tau\right\} = \frac{F(s)}{s}$
4. **Multiplication by $t^n$:** $\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)$
5. **Division by $t$:** $\mathcal{L}\left\{\frac{f(t)}{t}\right\} = \int_s^\infty F(u) \, du$
6. **Initial & Final Value Theorems:**
   * **Initial Value:** $f(0^+) = \lim_{s \to \infty} s F(s)$
   * **Final Value:** $f(\infty) = \lim_{s \to 0} s F(s)$ *(Valid only if all poles of $sF(s)$ lie strictly in the open Left-Half Plane)*.
7. **Convolution Theorem:**
   $$\mathcal{L}\{f(t) * g(t)\} = \mathcal{L}\left\{ \int_0^t f(\tau) g(t-\tau) \, d\tau \right\} = F(s) \cdot G(s)$$
