# Engineering Mathematics: Calculus and Vector Calculus

**Target:** GATE 2027 Robotics & Automation (Section A.1)  
**High-Yield Weightage:** 5–7 Marks | **Focus:** Gradient, Hessian, Jacobians, Line Integrals & Theorems

---

## 1. Differential Calculus

### 1.1 Limits, Continuity & L'Hôpital's Rule
* **Indeterminate Forms:** $\frac{0}{0}, \frac{\infty}{\infty}, 0 \cdot \infty, \infty - \infty, 0^0, 1^\infty, \infty^0$.
* **L'Hôpital's Rule:**
  $$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} \quad \left(\text{Applicable only for } \frac{0}{0} \text{ or } \frac{\infty}{\infty}\right)$$
* **Standard Limits (High Yield):**
  $$\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0} \frac{e^x - 1}{x} = 1, \quad \lim_{x \to 0} \frac{\ln(1+x)}{x} = 1, \quad \lim_{x \to 0} (1+x)^{1/x} = e$$

---

### 1.2 Maxima and Minima

#### Single Variable Functions:
1. Critical points: Solve $f'(x) = 0$.
2. Second Derivative Test:
   * $f''(x) > 0 \implies$ **Local Minimum**
   * $f''(x) < 0 \implies$ **Local Maximum**
   * $f''(x) = 0 \implies$ Inconclusive (test higher-order derivatives).

#### Multivariable Functions $f(x, y)$ (Hessian Matrix Test):
1. Find stationary points: $\frac{\partial f}{\partial x} = 0$ and $\frac{\partial f}{\partial y} = 0$.
2. Compute second partial derivatives:
   $$r = \frac{\partial^2 f}{\partial x^2}, \quad s = \frac{\partial^2 f}{\partial x \partial y}, \quad t = \frac{\partial^2 f}{\partial y^2}$$
3. Define the discriminant (Hessian determinant): $D = r t - s^2$.
   * **If $D > 0$ and $r > 0$** $\implies$ **Local Minimum**
   * **If $D > 0$ and $r < 0$** $\implies$ **Local Maximum**
   * **If $D < 0$** $\implies$ **Saddle Point** (Neither max nor min)
   * **If $D = 0$** $\implies$ Test is inconclusive.

---

### 1.3 Taylor and Maclaurin Series

#### Single Variable Taylor Series about $x = a$:
$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n$$
* **Maclaurin Series ($a = 0$):**
  $$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$
  $$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$$
  $$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots$$
  $$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots \quad (|x| < 1)$$

---

## 2. Integral Calculus & Coordinate Transformations

### 2.1 Double & Triple Integrals with Jacobians
When transforming coordinates $(x, y) \to (u, v)$:
$$\iint_R f(x, y) \, dx \, dy = \iint_S f(x(u,v), y(u,v)) \, |J| \, du \, dv$$
Where the **Jacobian of Transformation** is:
$$J = \frac{\partial(x, y)}{\partial(u, v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}$$

#### Standard Coordinate Systems:
* **Polar Coordinates ($x = r\cos\theta, y = r\sin\theta$):**
  $$dx \, dy = r \, dr \, d\theta \quad (\text{Jacobian } J = r)$$
* **Cylindrical Coordinates ($x = r\cos\theta, y = r\sin\theta, z = z$):**
  $$dx \, dy \, dz = r \, dr \, d\theta \, dz \quad (\text{Jacobian } J = r)$$
* **Spherical Coordinates ($x = \rho\sin\phi\cos\theta, y = \rho\sin\phi\sin\theta, z = \rho\cos\phi$):**
  $$dx \, dy \, dz = \rho^2 \sin\phi \, d\rho \, d\phi \, d\theta \quad (\text{Jacobian } J = \rho^2 \sin\phi)$$

---

## 3. Vector Calculus

### 3.1 Gradient, Directional Derivative, Divergence & Curl

| Operation | Notation | Formula | Result Type | Physical Meaning |
| :--- | :---: | :--- | :---: | :--- |
| **Gradient** | $\nabla \phi$ | $\frac{\partial \phi}{\partial x}\hat{i} + \frac{\partial \phi}{\partial y}\hat{j} + \frac{\partial \phi}{\partial z}\hat{k}$ | **Vector** | Direction of maximum rate of increase of scalar $\phi$; normal to level surface $\phi(x,y,z) = c$. |
| **Directional Derivative** | $D_{\hat{u}}\phi$ | $\nabla \phi \cdot \hat{u}$ | **Scalar** | Rate of change of $\phi$ in direction of unit vector $\hat{u}$. Maximum value $= \|\nabla \phi\|$. |
| **Divergence** | $\nabla \cdot \vec{F}$ | $\frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}$ | **Scalar** | Net volumetric flux outflow per unit volume. If $\nabla \cdot \vec{F} = 0 \implies$ **Solenoidal field** (Incompressible). |
| **Curl** | $\nabla \times \vec{F}$ | $\begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ F_x & F_y & F_z \end{vmatrix}$ | **Vector** | Vorticity / circulation density. If $\nabla \times \vec{F} = \vec{0} \implies$ **Irrotational / Conservative field** ($\vec{F} = \nabla \phi$). |

---

### 3.2 Vector Integral Theorems (Essential for Scoring)

#### 1. Green's Theorem in a Plane:
Relates a line integral around a closed curve $C$ to a double integral over region $R$:
$$\oint_C (M \, dx + N \, dy) = \iint_R \left( \frac{\partial N}{\partial x} - \frac{\partial M}{\partial y} \right) dx \, dy$$

#### 2. Gauss Divergence Theorem:
Relates total outward flux across closed surface $S$ to volume integral over enclosed volume $V$:
$$\iint_S \vec{F} \cdot \hat{n} \, dS = \iiint_V (\nabla \cdot \vec{F}) \, dV$$
* *GATE Shortcut:* If calculating flux through a closed sphere, cylinder, or cube, always take the divergence first—it often becomes a simple constant times the volume!

#### 3. Stokes' Theorem:
Relates line integral of $\vec{F}$ around closed boundary curve $C$ to surface integral of curl over open surface $S$:
$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n} \, dS$$
