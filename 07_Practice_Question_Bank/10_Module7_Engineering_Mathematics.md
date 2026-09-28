# MODULE 7: ENGINEERING MATHEMATICS — LINEAR ALGEBRA & CALCULUS
## 100 Practice Questions — GATE RA 2027

---

### PART 1: LINEAR ALGEBRA (50 Questions)

**Q7.1 [NAT]** Rank of $\begin{bmatrix}1&2&3\\4&5&6\\7&8&9\end{bmatrix}$?
> **Answer:** 2.

**Q7.2 [MCQ]** Square matrix A is invertible iff det(A)=?
- (A) 0  (B) ≠0  (C) 1  (D) ∞
> **Answer: (B).**

**Q7.3 [NAT]** det$\begin{bmatrix}2&1\\4&3\end{bmatrix}$=?
> **Answer:** 6-4=2.

**Q7.4 [MCQ]** Eigenvalues of $\begin{bmatrix}3&1\\0&5\end{bmatrix}$?
- (A) 2,4  (B) 3,5  (C) 0,8  (D) 1,3
> **Answer: (B).** Upper triangular: diagonal = eigenvalues.

**Q7.5 [NAT]** For 3x3 matrix with eigenvalues {2,3,-1}: det(A)=?
> **Answer:** 2x3x(-1)=-6.

**Q7.6 [NAT]** Trace of $\begin{bmatrix}4&1&0\\2&3&1\\0&2&5\end{bmatrix}$?
> **Answer:** 4+3+5=12.

**Q7.7 [MCQ]** A matrix with trace=7 and eigenvalues λ1,λ2 (2x2): λ1+λ2=?
- (A) 7  (B) 14  (C) 49  (D) 3.5
> **Answer: (A).**

**Q7.8 [NAT]** Eigenvalues of symmetric matrix A=Aᵀ are always:
> **Answer:** Real.

**Q7.9 [MCQ]** Positive definite matrix has all eigenvalues:
- (A) ≤0  (B) >0  (C) =0  (D) mixed
> **Answer: (B).**

**Q7.10 [NAT]** Solve 2x+3y=7, x-y=1: x=?
> **Answer:** x=2, y=1. (From x=1+y: 2(1+y)+3y=7→y=1, x=2.)

**Q7.11 [MCQ]** Rank of $\begin{bmatrix}1&0&0\\0&1&0\\0&0&0\end{bmatrix}$?
- (A) 0  (B) 1  (C) 2  (D) 3
> **Answer: (C).**

**Q7.12 [NAT]** 4x4 matrix with rank 3: nullity=?
> **Answer:** 4-3=1.

**Q7.13 [NAT]** Eigenvalues of $\begin{bmatrix}0&1\\-2&-3\end{bmatrix}$?
> **Answer:** r²+3r+2=0 → r=-1,-2.

**Q7.14 [MCQ]** LU decomposition solves Ax=b via:
- (A) A⁻¹b  (B) Forward+back sub  (C) Gauss-Jordan  (D) Cramer
> **Answer: (B).**

**Q7.15 [NAT]** SVD: A=UΣVᵀ. A⁺=?
> **Answer:** VΣ⁺Uᵀ.

**Q7.16 [NAT]** det(2A) for 3x3 with det(A)=5?
> **Answer:** 2³×5=40.

**Q7.17 [MCQ]** det(rotation matrix R)=?
- (A) -1  (B) 0  (C) +1  (D) varies
> **Answer: (C).**

**Q7.18 [NAT]** Eigenvalues of $R_z(\theta)$ (2x2 rotation matrix)?
> **Answer:** e^{±iθ}=cosθ±i sinθ.

**Q7.19 [MCQ]** Gram-Schmidt converts linearly independent vectors to:
- (A) Sorted vectors  (B) Orthonormal basis  (C) Eigenvectors  (D) Singular vectors
> **Answer: (B).**

**Q7.20 [NAT]** For overdetermined Ax≈b: normal equations?
> **Answer:** AᵀAx=Aᵀb.

**Q7.21 [MCQ]** Skew-symmetric matrix S satisfies:
- (A) S=Sᵀ  (B) S=-Sᵀ  (C) S²=I  (D) det(S)=1
> **Answer: (B).**

**Q7.22 [NAT]** For 2x2 matrix: trace=5, det=6 → eigenvalues?
> **Answer:** λ1+λ2=5, λ1λ2=6 → λ=2,3.

**Q7.23 [MCQ]** Characteristic polynomial of $\begin{bmatrix}5&-2\\1&2\end{bmatrix}$?
- (A) λ²-7λ+12  (B) λ²+7λ+12  (C) λ²-5λ+10  (D) λ²+3λ-4
> **Answer: (A).** (λ-5)(λ-2)+2=λ²-7λ+12.

**Q7.24 [NAT]** Eigenvectors of distinct eigenvalues of symmetric matrix are:
> **Answer:** Orthogonal.

**Q7.25 [NAT]** $\begin{bmatrix}2&0\\0&3\end{bmatrix}^5$?
> **Answer:** $\begin{bmatrix}32&0\\0&243\end{bmatrix}$.

**Q7.26 [MCQ]** For Ax=b unique solution: rank(A)=?
- (A) rank([A|b]) and =n  (B) m  (C) 0  (D) m+n
> **Answer: (A).**

**Q7.27 [NAT]** $\begin{bmatrix}1&2\\3&4\end{bmatrix}^{-1}$?
> **Answer:** (1/det)×adj = (1/(-2))×$\begin{bmatrix}4&-2\\-3&1\end{bmatrix}$ = $\begin{bmatrix}-2&1\\1.5&-0.5\end{bmatrix}$.

**Q7.28 [MCQ]** For diagonalizable A=PDP⁻¹: A³=?
- (A) 3PDP⁻¹  (B) PD³P⁻¹  (C) P³D  (D) D³
> **Answer: (B).**

**Q7.29 [NAT]** Frobenius norm of $\begin{bmatrix}1&2\\3&4\end{bmatrix}$?
> **Answer:** √(1+4+9+16)=√30≈5.477.

**Q7.30 [MCQ]** For redundant robot (n>6): minimum-norm solution q̇=?
- (A) J⁻¹ẋ  (B) J⁺ẋ=Jᵀ(JJᵀ)⁻¹ẋ  (C) (JᵀJ)⁻¹Jᵀẋ  (D) 0
> **Answer: (B).**

### PART 2: CALCULUS (50 Questions)

**Q7.31 [NAT]** lim(x→0) sinx/x=?
> **Answer:** 1.

**Q7.32 [MCQ]** d/dx[ln(cosx)]=?
- (A) tanx  (B) -tanx  (C) cotx  (D) secx
> **Answer: (B).**

**Q7.33 [NAT]** ∫(0 to π/2) sinx dx=?
> **Answer:** 1.

**Q7.34 [MCQ]** Critical point of f(x,y)=x²+y²-2x-4y+5?
- (A) (2,2)  (B) (1,2)  (C) (0,0)  (D) (-1,-2)
> **Answer: (B).** ∂f/∂x=2x-2=0→x=1; ∂f/∂y=2y-4=0→y=2.

**Q7.35 [NAT]** Taylor series of eˣ to 4th term: 1+x+x²/2!+?
> **Answer:** x³/3! = x³/6.

**Q7.36 [MCQ]** d/dx[arctan(x)]=?
- (A) tanx  (B) 1/(1+x²)  (C) 1/√(1-x²)  (D) -1/(1+x²)
> **Answer: (B).**

**Q7.37 [NAT]** ∫xe^x dx=?
> **Answer:** e^x(x-1)+C.

**Q7.38 [MCQ]** lim(x→∞) x²/eˣ=?
- (A) ∞  (B) 1  (C) 0  (D) e
> **Answer: (C).**

**Q7.39 [NAT]** ∫∫(0 to 1)(0 to 1) (x+y)dxdy=?
> **Answer:** 1.

**Q7.40 [MCQ]** L'Hôpital applies for form:
- (A) 0/0 or ∞/∞  (B) 1/0  (C) ∞-∞ only  (D) 0×∞ only
> **Answer: (A).**

**Q7.41 [NAT]** lim(x→0) (1-cosx)/x²=?
> **Answer:** 1/2.

**Q7.42 [MCQ]** Chain rule: d/dt[f(g(t))]=?
- (A) f'(t)+g'(t)  (B) f'(g(t))·g'(t)  (C) f(g'(t))  (D) f'(t)·g(t)
> **Answer: (B).**

**Q7.43 [NAT]** Max of f(x)=-x²+4x-3?
> **Answer:** At x=2: f(2)=1.

**Q7.44 [MCQ]** Taylor series of sinx to x⁵:
- (A) x-x³/6+x⁵/120  (B) 1-x²/2+x⁴/24  (C) x+x³/6  (D) 1+x+x²/2
> **Answer: (A).**

**Q7.45 [NAT]** ∂/∂x[x²y+e^{xy}]=?
> **Answer:** 2xy+ye^{xy}.

**Q7.46 [MCQ]** Rolle's theorem: if f(a)=f(b), then ∃c with:
- (A) f(c)=0  (B) f'(c)=0  (C) f''(c)=0  (D) f(c)=f(a)
> **Answer: (B).**

**Q7.47 [NAT]** ∫(0 to π) sin²x dx=?
> **Answer:** π/2.

**Q7.48 [MCQ]** Directional derivative of f=x²+y² at (1,1) in direction (1,1)/√2:
- (A) 2  (B) 2√2  (C) 4  (D) √2
> **Answer: (B).** ∇f=(2,2)·(1/√2,1/√2)=4/√2=2√2.

**Q7.49 [NAT]** ∫(0 to 3)x² dx=?
> **Answer:** 9.

**Q7.50 [MCQ]** Second derivative test: D>0 and fxx<0 →
- (A) Min  (B) Saddle  (C) Max  (D) Inflection
> **Answer: (C).**

**Q7.51 [NAT]** lim(n→∞)(1+1/n)ⁿ=?
> **Answer:** e≈2.718.

**Q7.52 [MCQ]** ∇²f for f=x²+y²+z²?
- (A) 0  (B) 2x+2y+2z  (C) 6  (D) 2(x²+y²+z²)
> **Answer: (C).**

**Q7.53 [NAT]** ∫1/(x²+1)dx=?
> **Answer:** arctan(x)+C.

**Q7.54 [MCQ]** Mean Value Theorem guarantees c∈(a,b) with:
- (A) f(c)=0  (B) f'(c)=(f(b)-f(a))/(b-a)  (C) f'(c)=0  (D) f(c)=(f(a)+f(b))/2
> **Answer: (B).**

**Q7.55 [NAT]** ∫xe^{x²}dx=?
> **Answer:** (1/2)e^{x²}+C.

**Q7.56 [MCQ]** dy/dx for x²+y²=25?
- (A) x/y  (B) -x/y  (C) y/x  (D) -y/x
> **Answer: (B).**

**Q7.57 [NAT]** Volume of sphere radius r?
> **Answer:** 4πr³/3.

**Q7.58 [MCQ]** ∫sec²x dx=?
- (A) tanx+C  (B) secx tanx+C  (C) -cotx+C  (D) 2secx+C
> **Answer: (A).**

**Q7.59 [NAT]** For robot path p(t)=(t²,2t,t³): velocity at t=1?
> **Answer:** ṗ=(2t,2,3t²)=(2,2,3) m/s.

**Q7.60 [MCQ]** Lagrange multiplier condition for constrained optimization max f subject to g=c:
- (A) ∇f=0  (B) ∇f=λ∇g  (C) ∇g=0  (D) f=λg
> **Answer: (B).**

---

### PART 3: VECTOR CALCULUS (20 Questions)

**Q7.61 [MCQ]** ∇f points in direction of:
- (A) Max decrease  (B) Max increase (steepest ascent)  (C) Zero change  (D) Saddle
> **Answer: (B).**

**Q7.62 [NAT]** ∇·F for F=(x²,y²,z²)?
> **Answer:** 2x+2y+2z.

**Q7.63 [MCQ]** Curl of conservative field F=∇φ:
- (A) ∇φ  (B) Zero  (C) ∇²φ  (D) Non-zero
> **Answer: (B).**

**Q7.64 [NAT]** Gauss Divergence Theorem: ∯F·dS=?
> **Answer:** ∭(∇·F)dV.

**Q7.65 [MCQ]** Stokes' Theorem: ∮F·dr=?
- (A) ∬F·dS  (B) ∬(∇×F)·dS  (C) ∭∇·FdV  (D) ∮∇F·dr
> **Answer: (B).**

**Q7.66 [NAT]** Div of F=(x,y,z)?
> **Answer:** 3.

**Q7.67 [MCQ]** Irrotational vector field has:
- (A) ∇·F=0  (B) ∇×F=0  (C) |F|=const  (D) F·r=0
> **Answer: (B).**

**Q7.68 [NAT]** Solenoidal (incompressible) field satisfies?
> **Answer:** ∇·F=0.

**Q7.69 [MCQ]** Harmonic function satisfies:
- (A) ∇f=0  (B) ∇²f=0  (C) ∇×f=0  (D) ∇f=1
> **Answer: (B).**

**Q7.70 [NAT]** For conservative field: work done in closed loop=?
> **Answer:** Zero.

**Q7.71 [MCQ]** Cross product a×b is:
- (A) Parallel to a,b  (B) Perpendicular to both  (C) Scalar  (D) Zero
> **Answer: (B).**

**Q7.72 [NAT]** Jacobian for polar to Cartesian (r,θ)→(x,y)?
> **Answer:** J=r. So dA=r dr dθ.

**Q7.73 [MCQ]** Spherical coordinates Jacobian?
- (A) r²  (B) r²sinθ  (C) r sinθ  (D) r²cosθ
> **Answer: (B).**

**Q7.74 [NAT]** Conservative field condition: F=(∂φ/∂x, ∂φ/∂y) → ∂Fy/∂x=?
> **Answer:** ∂Fx/∂y (equality of mixed partials = conservative condition).

**Q7.75 [MCQ]** Flux of F=(x,y,z) through unit sphere (outward):
- (A) 4π/3  (B) 4π  (C) 12π  (D) 0
> **Answer: (B).** Div=3; ∭3dV=3×(4π/3)=4π.

**Q7.76 [NAT]** Directional derivative of f=x²+y²+z² at (1,1,1) in (1,1,1)/√3?
> **Answer:** ∇f=(2,2,2)·(1,1,1)/√3=6/√3=2√3≈3.46.

**Q7.77 [MCQ]** Green's theorem (2D): ∮C(Pdx+Qdy)=?
- (A) ∬D(P+Q)dA  (B) ∬D(∂Q/∂x-∂P/∂y)dA  (C) ∬D∇·FdA  (D) ∮D F·dr
> **Answer: (B).**

**Q7.78 [NAT]** Curl of F=(y,-x,0)?
> **Answer:** (0,0,-2).

**Q7.79 [MCQ]** Work done by force along closed path in conservative field:
- (A) Maximum  (B) Minimum  (C) Zero  (D) Depends on path
> **Answer: (C).**

**Q7.80 [NAT]** ∫∫D dA for unit disk (0≤r≤1)?
> **Answer:** π (area of unit disk).

---

### PART 4: DIFFERENTIAL EQUATIONS (20 Questions)

**Q7.81 [MCQ]** Integrating factor for y'+P(x)y=Q(x)?
- (A) e^∫Pdx  (B) ∫Pdx  (C) P(x)  (D) Q(x)/P(x)
> **Answer: (A).**

**Q7.82 [NAT]** Solve y'+2y=4, y(0)=1: y(x)=?
> **Answer:** y=2-e^{-2x}.

**Q7.83 [MCQ]** Characteristic equation of y''+3y'+2y=0?
- (A) r²+2r+3=0  (B) r²+3r+2=0  (C) r²-3r+2=0  (D) r²+r+1=0
> **Answer: (B).**

**Q7.84 [NAT]** General solution of y''-5y'+6y=0?
> **Answer:** y=C₁e^{2x}+C₂e^{3x}.

**Q7.85 [MCQ]** Repeated roots r=r₁ (double): general solution?
- (A) C₁e^{r₁x}+C₂e^{r₂x}  (B) (C₁+C₂x)e^{r₁x}  (C) C₁sin+C₂cos  (D) C₁e^{r₁x}
> **Answer: (B).**

**Q7.86 [NAT]** ODE y''+4y=0: roots and solution?
> **Answer:** r=±2i. y=C₁cos2x+C₂sin2x.

**Q7.87 [MCQ]** L{e^{at}}=?
- (A) 1/(s-a)  (B) 1/(s+a)  (C) s/(s-a)  (D) a/s
> **Answer: (A).**

**Q7.88 [MCQ]** L{sin(ωt)}=?
- (A) ω/(s²+ω²)  (B) s/(s²+ω²)  (C) 1/(s+ω)  (D) ω/(s²-ω²)
> **Answer: (A).**

**Q7.89 [NAT]** L{tⁿ}=?
> **Answer:** n!/s^{n+1}.

**Q7.90 [MCQ]** First shifting theorem: L{e^{at}f(t)}=?
- (A) F(s+a)  (B) F(s-a)  (C) e^{as}F(s)  (D) aF(s)
> **Answer: (B).**

**Q7.91 [NAT]** Transfer function H(s) for y''+3y'+2y=u?
> **Answer:** H(s)=1/(s²+3s+2).

**Q7.92 [MCQ]** Poles of H(s)=1/[(s+1)(s+2)]: stable?
- (A) Yes (poles at -1,-2 in left half-plane)  (B) No  (C) Marginally stable  (D) Unstable
> **Answer: (A).**

**Q7.93 [MCQ]** L⁻¹{2/[(s+1)(s+3)]}=?
- (A) e^{-t}+e^{-3t}  (B) e^{-t}-e^{-3t}  (C) e^{-2t}  (D) 2e^{-t}
> **Answer: (B).**

**Q7.94 [NAT]** Exact ODE condition: Mdx+Ndy=0 exact when?
> **Answer:** ∂M/∂y=∂N/∂x.

**Q7.95 [MCQ]** Bayes' theorem: P(A|B)=?
- (A) P(B|A)  (B) P(B|A)P(A)/P(B)  (C) P(A)P(B)  (D) P(A)/P(B)
> **Answer: (B).**

**Q7.96 [NAT]** Poisson mean and variance with rate λ?
> **Answer:** Both equal λ.

**Q7.97 [MCQ]** Newton-Raphson: x_{n+1}=?
- (A) x_n-f/f'  (B) x_n+f  (C) x_n/f'  (D) (x_n+x_{n-1})/2
> **Answer: (A).**

**Q7.98 [NAT]** Simpson's 1/3 rule: I=(h/3)[f₀+4f₁+f₂], h=0.5. Approximate ∫(0 to 1)x²dx?
> **Answer:** (0.5/3)[0+4(0.25)+1]=(0.5/3)(2)=1/3≈0.333. Exact!

**Q7.99 [MCQ]** Normal distribution: μ±2σ contains approximately:
- (A) 68%  (B) 95%  (C) 99.7%  (D) 90%
> **Answer: (B).**

**Q7.100 [NAT]** Variance of B(n=10,p=0.4)?
> **Answer:** np(1-p)=10×0.4×0.6=2.4.

---
*Module 7 Complete — 100 Questions*
