# Engineering Mathematics: Probability, Statistics & Numerical Methods

**Target:** GATE 2027 Robotics & Automation (Section A.1)  
**High-Yield Weightage:** 5–7 Marks | **Focus:** Bayes Theorem, Poisson/Normal, Newton-Raphson, Simpson's Rules, RK4

---

## 1. Probability & Statistics

### 1.1 Axioms, Conditional Probability & Bayes' Theorem
* **Conditional Probability:**
  $$P(A|B) = \frac{P(A \cap B)}{P(B)} \quad (P(B) > 0)$$
* **Independence:** $A$ and $B$ are independent if and only if $P(A \cap B) = P(A) \cdot P(B)$.
* **Total Probability Theorem:**
  $$P(A) = \sum_{i=1}^n P(A|B_i) P(B_i)$$
* **Bayes' Theorem (High-Yield Numerical Target):**
  $$P(B_k|A) = \frac{P(A|B_k) P(B_k)}{\sum_{i=1}^n P(A|B_i) P(B_i)}$$

---

### 1.2 Random Variables & Probability Distributions

#### 1. Discrete Distributions:
* **Binomial Distribution $B(n, p)$:**
  $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
  * $\text{Mean } \mu = np$, $\quad \text{Variance } \sigma^2 = np(1-p)$.
* **Poisson Distribution $\text{Poisson}(\lambda)$ (Rare events, large $n$, small $p$, $\lambda = np$):**
  $$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \quad (k = 0, 1, 2, \dots)$$
  * **Critical Property:** $\text{Mean} = \text{Variance} = \lambda$.

#### 2. Continuous Distributions:
* **Uniform Distribution on $[a, b]$:**
  $$f(x) = \frac{1}{b - a} \implies \text{Mean } \mu = \frac{a + b}{2}, \quad \text{Variance } \sigma^2 = \frac{(b - a)^2}{12}$$
* **Normal (Gaussian) Distribution $N(\mu, \sigma^2)$:**
  $$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
  * Standard Normal Variable ($Z$-score): $Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$.
  * Empirical 68–95–99.7 Rule: $P(\mu - \sigma < X < \mu + \sigma) \approx 68.27\%$, $P(\mu - 2\sigma < X < \mu + 2\sigma) \approx 95.45\%$, $P(\mu - 3\sigma < X < \mu + 3\sigma) \approx 99.73\%$.

---

## 2. Numerical Methods

### 2.1 Numerical Root Finding Methods

| Method | Iteration Formula | Order of Convergence | Convergence Rate / Properties |
| :--- | :--- | :---: | :--- |
| **Bisection** | $x_{n+1} = \frac{a + b}{2}$ | $1$ (Linear) | Always converges; very slow. |
| **Regula-Falsi** | $x = \frac{a f(b) - b f(a)}{f(b) - f(a)}$ | $1$ (Linear) | Bracketing method; guaranteed convergence. |
| **Secant** | $x_{n+1} = x_n - f(x_n)\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$ | $1.618$ (Super-linear) | Open method; does not require derivative. |
| **Newton-Raphson** | $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ | **$2$ (Quadratic)** | Extremely fast near root. Fails if $f'(x_n) = 0$ or at inflection points. |

#### Newton-Raphson Shortcut Formulas:
* **Square Root $\sqrt{N}$:** $f(x) = x^2 - N = 0 \implies x_{n+1} = \frac{1}{2}\left(x_n + \frac{N}{x_n}\right)$
* **Reciprocal $1/N$:** $f(x) = \frac{1}{x} - N = 0 \implies x_{n+1} = x_n(2 - N x_n)$ *(No division required!)*

---

### 2.2 Numerical Integration (Quadrature Rules)

For integral $I = \int_a^b f(x) \, dx$ with step size $h = \frac{b - a}{n}$:

#### 1. Trapezoidal Rule (Approximates by straight lines):
$$I \approx \frac{h}{2} \left[ (y_0 + y_n) + 2(y_1 + y_2 + \dots + y_{n-1}) \right]$$
* **Error:** $E \propto h^2$ (Exact for polynomials up to degree 1).

#### 2. Simpson's 1/3 Rule (Approximates by parabolas):
$$\boxed{I \approx \frac{h}{3} \left[ (y_0 + y_n) + 4(\text{odd terms: } y_1 + y_3 + \dots) + 2(\text{even terms: } y_2 + y_4 + \dots) \right]}$$
* **Requirement:** Must have an **EVEN number of subintervals** ($n = 2, 4, 6, \dots$).
* **Error:** $E \propto h^4$ (Exact for polynomials up to degree **3**, despite fitting parabolas of degree 2!).

#### 3. Simpson's 3/8 Rule (Approximates by cubics):
$$I \approx \frac{3h}{8} \left[ (y_0 + y_n) + 3(y_1 + y_2 + y_4 + y_5 + \dots) + 2(y_3 + y_6 + \dots) \right]$$
* **Requirement:** $n$ must be a **multiple of 3** ($n = 3, 6, 9, \dots$).

---

### 2.3 Numerical Solutions of ODEs ($\frac{dy}{dx} = f(x, y)$)

* **Euler's Method:** $y_{n+1} = y_n + h f(x_n, y_n)$ (First order, error $O(h)$).
* **Runge-Kutta 4th Order (RK4):**
  $$y_{n+1} = y_n + \frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$
  $$\text{where } \begin{cases} k_1 = h f(x_n, y_n) \\ k_2 = h f\left(x_n + \frac{h}{2}, y_n + \frac{k_1}{2}\right) \\ k_3 = h f\left(x_n + \frac{h}{2}, y_n + \frac{k_2}{2}\right) \\ k_4 = h f(x_n + h, y_n + k_3) \end{cases}$$
* **Local Truncation Error for RK4:** $O(h^5)$ | **Global Error:** $O(h^4)$.
