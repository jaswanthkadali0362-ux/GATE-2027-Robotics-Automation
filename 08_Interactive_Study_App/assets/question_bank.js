window.GATE_QUESTION_BANK = [
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.1",
    "type": "NAT - 2M",
    "question": "A rotation matrix $R_z(\\theta)$ rotates vectors about the Z-axis. What is the value of $\\det(R_z(45°))$?",
    "options": [],
    "answer": "1. All rotation matrices in SO(3) satisfy $\\det(R) = +1$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.2",
    "type": "MCQ - 1M",
    "question": "Which property is NOT satisfied by a valid rotation matrix $R \\in SO(3)$?",
    "options": [
      "- (A) $R^T R = I$",
      "- (B) $\\det(R) = +1$",
      "- (C) $R^T = -R$",
      "- (D) $R^{-1} = R^T$"
    ],
    "answer": "(C). The transpose of a rotation matrix equals its inverse, not its negative."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.3",
    "type": "NAT - 2M",
    "question": "The elementary rotation matrix $R_x(90°)$ has which value at position (2,3)?",
    "options": [],
    "answer": "−1. $R_x(\\theta)_{23} = -\\sin(90°) = -1$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.4",
    "type": "MCQ - 2M",
    "question": "A frame is rotated first 30° about the fixed X-axis, then 60° about the fixed Z-axis. The combined rotation (fixed-axis convention) is:",
    "options": [
      "- (A) $R_z(60°) \\cdot R_x(30°)$",
      "- (B) $R_x(30°) \\cdot R_z(60°)$",
      "- (C) $R_z(30°) \\cdot R_x(60°)$",
      "- (D) $R_x(60°) \\cdot R_z(30°)$"
    ],
    "answer": "(A). For fixed-axis rotations, pre-multiply: the last rotation goes on the left."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.5",
    "type": "MCQ - 1M",
    "question": "The minimum number of parameters needed to represent an arbitrary orientation in 3D space is:",
    "options": [
      "- (A) 9",
      "- (B) 4",
      "- (C) 3",
      "- (D) 6"
    ],
    "answer": "(C). Minimum is 3 (e.g., Euler angles)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.6",
    "type": "NAT - 2M",
    "question": "Given $R = R_y(30°)$, compute the element at row 1, column 3 (1-indexed).",
    "options": [],
    "answer": "$\\sin(30°) = 0.5$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.7",
    "type": "MCQ - 2M",
    "question": "Two rotation matrices $R_1$ and $R_2$: is $R_1 \\cdot R_2$ guaranteed to be a valid rotation matrix?",
    "options": [
      "- (A) Yes, always",
      "- (B) No, only if they commute",
      "- (C) Only if $R_1 = R_2$",
      "- (D) Only for planar rotations"
    ],
    "answer": "(A). SO(3) is closed under multiplication."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.8",
    "type": "MCQ - 1M",
    "question": "The unit quaternion scalar part for a rotation by angle $\\theta$ about axis $\\hat{e}$ is:",
    "options": [
      "- (A) $\\sin(\\theta/2)$",
      "- (B) $\\cos(\\theta/2)$",
      "- (C) $\\cos(\\theta)$",
      "- (D) $\\sin(\\theta)$"
    ],
    "answer": "(B). $q_0 = \\cos(\\theta/2)$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.9",
    "type": "NAT - 2M",
    "question": "For the ZYZ Euler angle convention, how many gimbal lock configurations exist?",
    "options": [],
    "answer": "2 (when $\\beta = 0°$ or $\\beta = 180°$)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.10",
    "type": "MCQ - 2M",
    "question": "A rotation by $\\theta = 60°$ about $\\hat{k} = (1/\\sqrt{3}, 1/\\sqrt{3}, 1/\\sqrt{3})$. The trace of the rotation matrix:",
    "options": [
      "- (A) 1.0",
      "- (B) 1.5",
      "- (C) 2.0",
      "- (D) 2.5"
    ],
    "answer": "(C). trace$(R) = 1 + 2\\cos(60°) = 2.0$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.11",
    "type": "NAT - 2M",
    "question": "What is the rotation angle $\\theta$ encoded in a rotation matrix with trace = 0?",
    "options": [],
    "answer": "$\\theta = \\arccos\\left(\\frac{0-1}{2}\\right) = 120°$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.12",
    "type": "MCQ - 1M",
    "question": "A valid unit quaternion $(q_0, q_x, q_y, q_z)$ satisfies:",
    "options": [
      "- (A) $q_0^2 + q_x^2 + q_y^2 + q_z^2 = 0$",
      "- (B) $q_0^2 + q_x^2 + q_y^2 + q_z^2 = 1$",
      "- (C) $q_0 = 1$",
      "- (D) $q_x^2 + q_y^2 + q_z^2 = 1$"
    ],
    "answer": "(B). Unit quaternion norm = 1."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.13",
    "type": "MCQ - 1M",
    "question": "Which representation avoids gimbal lock?",
    "options": [
      "- (A) Euler angles",
      "- (B) Rotation matrix",
      "- (C) Quaternions",
      "- (D) Axis-angle with fixed magnitude"
    ],
    "answer": "(C). Unit quaternions avoid gimbal lock."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.14",
    "type": "NAT - 2M",
    "question": "For $R = R_z(180°)$, what is the element at row 2, column 2?",
    "options": [],
    "answer": "$\\cos(180°) = -1$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.15",
    "type": "MCQ - 2M",
    "question": "The roll-pitch-yaw angles are rotations about (fixed axes):",
    "options": [
      "- (A) Z-Y-X",
      "- (B) X-Y-Z",
      "- (C) Z-Y-Z",
      "- (D) X-Z-X"
    ],
    "answer": "(A). Roll=X, Pitch=Y, Yaw=Z in fixed frame gives ZYX combined matrix."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.16",
    "type": "NAT - 2M",
    "question": "$R_{11}$ of ZYX combined rotation ($\\psi=60°, \\theta=45°$): $R_{11} = \\cos\\psi\\cos\\theta = ?$",
    "options": [],
    "answer": "$\\cos(60°)\\cos(45°) = 0.5 \\times 0.7071 \\approx 0.354$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.17",
    "type": "MCQ - 2M",
    "question": "For a current-axis rotation: first about current Z by $\\alpha$, then current Y by $\\beta$. Combined $R$:",
    "options": [
      "- (A) $R_z(\\alpha) \\cdot R_y(\\beta)$",
      "- (B) $R_y(\\beta) \\cdot R_z(\\alpha)$",
      "- (C) $R_y(\\alpha) \\cdot R_z(\\beta)$",
      "- (D) $R_z(\\beta) \\cdot R_y(\\alpha)$"
    ],
    "answer": "(A). Intrinsic (current-axis): post-multiply, first rotation on left."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.18",
    "type": "NAT - 2M",
    "question": "What is $\\|R\\vec{v}\\|$ when $R$ is a rotation matrix and $\\|\\vec{v}\\| = 5$?",
    "options": [],
    "answer": "5. Rotation matrices preserve vector norms."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.19",
    "type": "NAT - 2M",
    "question": "Does $R_x(30°) \\cdot R_z(45°) = R_z(45°) \\cdot R_x(30°)$?",
    "options": [],
    "answer": "No. Rotation matrices do not commute in general."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.20",
    "type": "MCQ - 1M",
    "question": "The columns of a rotation matrix $R$ represent:",
    "options": [
      "- (A) The rows of the original frame",
      "- (B) The axes of the rotated frame expressed in the original frame",
      "- (C) Eigenvalues",
      "- (D) The Jacobian columns"
    ],
    "answer": "(B). Each column of R is a unit vector of the child frame in the parent frame."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.21",
    "type": "NAT - 2M",
    "question": "For $R_x(\\alpha)$, what is element (3,2)?",
    "options": [],
    "answer": "$\\sin\\alpha$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.22",
    "type": "MCQ - 2M",
    "question": "Successive pre-multiplication for fixed-axis rotations means:",
    "options": [
      "- (A) Later rotations applied first (right-side)",
      "- (B) Later rotations applied last but placed on left",
      "- (C) All rotations are identical",
      "- (D) Only Z-axis rotations can be composed"
    ],
    "answer": "(B). For fixed-axis: $R = R_n \\cdot ... \\cdot R_2 \\cdot R_1$ — later rotation goes to the left (pre-multiplied)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.23",
    "type": "NAT - 2M",
    "question": "The inverse of a rotation matrix $R$ equals:",
    "options": [],
    "answer": "$R^T$ (its transpose)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.24",
    "type": "MCQ - 1M",
    "question": "Which of these is a proper rotation (no reflection)?",
    "options": [
      "- (A) $\\det(R) = -1$",
      "- (B) $\\det(R) = 0$",
      "- (C) $\\det(R) = +1$",
      "- (D) $R = -I$"
    ],
    "answer": "(C). Proper rotation: $\\det(R) = +1$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.25",
    "type": "NAT - 2M",
    "question": "For $R = I$ (identity), what rotation angle does this represent? --- ### SECTION B: HOMOGENEOUS TRANSFORMATION MATRICES — 25 Questions",
    "options": [],
    "answer": "$0°$ (or $360°$, $720°$, etc.) — no rotation."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.26",
    "type": "MCQ - 1M",
    "question": "A 4×4 HTM encodes:",
    "options": [
      "- (A) Only rotation",
      "- (B) Only translation",
      "- (C) Both rotation and translation",
      "- (D) Scaling and rotation"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.27",
    "type": "NAT - 2M",
    "question": "For $T = \\begin{bmatrix}R & p \\\\ 0 & 1\\end{bmatrix}$, the top-right block of $T^{-1}$ is:",
    "options": [],
    "answer": "$-R^T p$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.28",
    "type": "NAT - 2M",
    "question": "The determinant of any valid 4×4 HTM equals:",
    "options": [],
    "answer": "1."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.29",
    "type": "MCQ - 1M",
    "question": "The bottom row of a valid HTM always equals:",
    "options": [
      "- (A) $(1, 0, 0, 0)$",
      "- (B) $(0, 0, 0, 1)$",
      "- (C) $(0, 0, 1, 0)$",
      "- (D) Arbitrary values"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.30",
    "type": "MCQ - 2M",
    "question": "A point $P$ in frame $\\{B\\}$: to express it in frame $\\{A\\}$ given $^A T_B$:",
    "options": [
      "- (A) $^A p = (^A T_B)^{-1} \\cdot ^B p$",
      "- (B) $^A p = ^A T_B \\cdot ^B p$",
      "- (C) $^A p = ^B p \\cdot ^A T_B$",
      "- (D) $^A p = ^B T_A \\cdot ^A p$"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.31",
    "type": "NAT - 2M",
    "question": "$^A T_C$ given $^A T_B$ and $^B T_C$:",
    "options": [],
    "answer": "$^A T_C = ^A T_B \\cdot ^B T_C$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.32",
    "type": "MCQ - 1M",
    "question": "Homogeneous coordinate for a free vector $\\vec{v}=(v_x,v_y,v_z)$ is:",
    "options": [
      "- (A) $(v_x,v_y,v_z,1)$",
      "- (B) $(v_x,v_y,v_z,0)$",
      "- (C) $(v_x,v_y,v_z,\\pi)$",
      "- (D) $(0,0,0,v_z)$"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.33",
    "type": "MCQ - 2M",
    "question": "\"Translate by $d$ along Y\" transformation matrix has $d$ at position:",
    "options": [
      "- (A) Row 1, Col 4",
      "- (B) Row 2, Col 4",
      "- (C) Row 3, Col 4",
      "- (D) Row 4, Col 2"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.34",
    "type": "NAT - 2M",
    "question": "How many independent parameters does a general HTM have?",
    "options": [],
    "answer": "6 (3 rotation + 3 translation)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.35",
    "type": "MCQ - 1M",
    "question": "A free vector $(v_x,v_y,v_z,0)^T$ multiplied by HTM $T$:",
    "options": [
      "- (A) Gets rotated and translated",
      "- (B) Only rotated (not translated)",
      "- (C) Only translated",
      "- (D) Unchanged"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.36",
    "type": "NAT - 2M",
    "question": "A point $P=(1,2,3)$ in frame $\\{B\\}$. $^AT_B = \\text{Trans}(1,0,0)\\cdot R_z(90°)$. What is the X-coordinate in $\\{A\\}$?",
    "options": [],
    "answer": "$^AT_B = \\begin{bmatrix}0&-1&0&1\\\\1&0&0&0\\\\0&0&1&0\\\\0&0&0&1\\end{bmatrix}$. $^Ap_x = 0(1)+(-1)(2)+0(3)+1 = -1$. X = -1."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.37",
    "type": "MCQ - 1M",
    "question": "Which transformation preserves handedness?",
    "options": [
      "- (A) Reflection",
      "- (B) Scaling by -1",
      "- (C) Rotation",
      "- (D) Inversion"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.38",
    "type": "NAT - 2M",
    "question": "$R_x(\\theta)$ as a 4×4 HTM — what is element $(3,2)$?",
    "options": [],
    "answer": "$\\sin\\theta$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.39",
    "type": "MCQ - 2M",
    "question": "The expression $^0T_n = \\prod_{i=1}^{n} {}^{i-1}T_i$ represents:",
    "options": [
      "- (A) Inverse kinematics",
      "- (B) Forward kinematics via HTM chain",
      "- (C) Jacobian computation",
      "- (D) Dynamic equations"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.40",
    "type": "NAT - 2M",
    "question": "After $T = \\text{Trans}(0,5,0)\\cdot R_x(90°)$, what is element $(2,4)$?",
    "options": [],
    "answer": "5."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.41",
    "type": "MCQ - 1M",
    "question": "$T_1 T_2 T_3$: this gives the pose of frame $\\{3\\}$ relative to:",
    "options": [
      "- (A) Frame $\\{3\\}$ itself",
      "- (B) Frame $\\{0\\}$ (world/base)",
      "- (C) Frame $\\{2\\}$",
      "- (D) Frame $\\{1\\}$"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.42",
    "type": "MCQ - 2M",
    "question": "Compare \"translate then rotate (fixed)\" vs \"rotate then translate (fixed)\":",
    "options": [
      "- (A) Same result",
      "- (B) Different HTMs",
      "- (C) Same rotation, different translation",
      "- (D) Same translation, different rotation"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.43",
    "type": "NAT - 2M",
    "question": "Number of constrained (redundant) parameters in a 4×4 HTM:",
    "options": [],
    "answer": "10 (16 total - 6 free = 10 constrained)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.44",
    "type": "MCQ - 2M",
    "question": "The \"screw motion\" combines:",
    "options": [
      "- (A) Two translations",
      "- (B) Translation along and rotation about the same axis",
      "- (C) Two rotations about perpendicular axes",
      "- (D) Translation perpendicular to rotation axis"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.45",
    "type": "NAT - 2M",
    "question": "$T = \\begin{bmatrix}0&-1&0&2\\\\1&0&0&1\\\\0&0&1&0\\\\0&0&0&1\\end{bmatrix}$. X-translation of this frame origin from world:",
    "options": [],
    "answer": "2."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.46",
    "type": "MCQ - 1M",
    "question": "The rotation matrix block of an HTM occupies rows/columns:",
    "options": [
      "- (A) Rows 1-3, Cols 1-3",
      "- (B) Rows 1-4, Cols 1-4",
      "- (C) Row 4, Cols 1-3",
      "- (D) Rows 1-3, Col 4"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.47",
    "type": "NAT - 2M",
    "question": "$^AT_B$ translation vector for: first translate $(1,0,0)$ then rotate about current Z by $90°$.",
    "options": [],
    "answer": "$(1,0,0)^T$ (intrinsic: post-multiply, translation stays fixed)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.48",
    "type": "MCQ - 2M",
    "question": "The inverse HTM $T^{-1}$ has the translation block equal to:",
    "options": [
      "- (A) $-p$",
      "- (B) $R^Tp$",
      "- (C) $-R^Tp$",
      "- (D) $-Rp$"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.49",
    "type": "NAT - 2M",
    "question": "Element $(1,4)$ of $T_1 \\cdot T_2$ where $T_1 = \\text{Trans}(3,0,0)$ (identity rotation) and $T_2 = R_z(90°)$ (zero translation)?",
    "options": [],
    "answer": "3. Translation of $T_1T_2$ = $R_1 p_2 + p_1 = I\\cdot[0,0,0]^T+[3,0,0]^T = [3,0,0]^T$. Element $(1,4) = 3$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.50",
    "type": "MCQ - 1M",
    "question": "A transformation that both rotates and translates a rigid body is called: --- ### SECTION C: DH PARAMETERS & FORWARD KINEMATICS — 50 Questions",
    "options": [
      "- (A) A Lie group element",
      "- (B) A rigid body transformation / SE(3) element",
      "- (C) A shear transformation",
      "- (D) An affine transformation with scaling"
    ],
    "answer": "(B). Elements of the Special Euclidean group SE(3)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.51",
    "type": "MCQ - 1M",
    "question": "DH variable for a revolute joint is:",
    "options": [
      "- (A) $a_i$",
      "- (B) $d_i$",
      "- (C) $\\alpha_i$",
      "- (D) $\\theta_i$"
    ],
    "answer": "(D)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.52",
    "type": "MCQ - 1M",
    "question": "DH variable for a prismatic joint is:",
    "options": [
      "- (A) $\\theta_i$",
      "- (B) $d_i$",
      "- (C) $a_i$",
      "- (D) $\\alpha_i$"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.53",
    "type": "NAT - 2M",
    "question": "The DH $\\alpha_i$ parameter is measured about which axis?",
    "options": [],
    "answer": "$X_i$ axis (common normal)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.54",
    "type": "NAT - 2M",
    "question": "The DH $a_i$ (link length) is measured along which axis?",
    "options": [],
    "answer": "$X_i$ axis (common normal between $Z_{i-1}$ and $Z_i$)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.55",
    "type": "MCQ - 1M",
    "question": "The DH transformation order is:",
    "options": [
      "- (A) $T_x \\to R_x \\to T_z \\to R_z$",
      "- (B) $R_z \\to T_z \\to T_x \\to R_x$",
      "- (C) $R_x \\to T_x \\to R_z \\to T_z$",
      "- (D) $T_z \\to R_z \\to R_x \\to T_x$"
    ],
    "answer": "(B). $R_z(\\theta_i) \\cdot T_z(d_i) \\cdot T_x(a_i) \\cdot R_x(\\alpha_i)$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.56",
    "type": "NAT - 2M",
    "question": "2R robot: $L_1=L_2=0.5$ m, $\\theta_1=0°$, $\\theta_2=90°$. End-effector Y-coordinate:",
    "options": [],
    "answer": "$y = 0.5\\sin(0°)+0.5\\sin(90°) = 0 + 0.5 = 0.5$ m."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.57",
    "type": "NAT - 2M",
    "question": "2R robot: $L_1=1$ m, $L_2=0.5$ m, $\\theta_1=90°$, $\\theta_2=-90°$. End-effector X-coordinate:",
    "options": [],
    "answer": "$x = 1\\cos(90°)+0.5\\cos(0°) = 0+0.5 = 0.5$ m."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.58",
    "type": "MCQ - 1M",
    "question": "A SCARA robot (RRPR) has how many DOF?",
    "options": [
      "- (A) 3",
      "- (B) 4",
      "- (C) 5",
      "- (D) 6"
    ],
    "answer": "(B). 4 DOF."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.59",
    "type": "NAT - 2M",
    "question": "Maximum reach of 2R robot with $L_1=0.4$ m, $L_2=0.3$ m:",
    "options": [],
    "answer": "$r_{max} = 0.4+0.3 = 0.7$ m."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.60",
    "type": "MCQ - 2M",
    "question": "Minimum reachable radius of 2R robot when $L_1 > L_2$:",
    "options": [
      "- (A) $L_1+L_2$",
      "- (B) $|L_1-L_2|$",
      "- (C) $L_1-L_2$",
      "- (D) 0"
    ],
    "answer": "(B). $r_{min} = |L_1-L_2|$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.61",
    "type": "NAT - 2M",
    "question": "3-link planar: $L_1=L_2=L_3=1$ m, $\\theta_1=\\theta_2=\\theta_3=60°$. X-coordinate of end-effector:",
    "options": [],
    "answer": "$x = \\cos60°+\\cos120°+\\cos180° = 0.5-0.5-1 = -1.0$ m."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.62",
    "type": "MCQ - 1M",
    "question": "DH $\\theta_i$ is measured from $X_{i-1}$ to $X_i$ about which axis?",
    "options": [
      "- (A) $X_{i-1}$",
      "- (B) $Z_{i-1}$",
      "- (C) $Z_i$",
      "- (D) Y-axis"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.63",
    "type": "MCQ - 2M",
    "question": "For a PUMA-560 style 6R robot, how many DH matrices for full FK?",
    "options": [
      "- (A) 3",
      "- (B) 4",
      "- (C) 6",
      "- (D) 12"
    ],
    "answer": "(C). 6 matrices."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.64",
    "type": "NAT - 2M",
    "question": "3R planar: $L_1=L_2=L_3=1$ m, all joints at $\\theta=0°$. End-effector X:",
    "options": [],
    "answer": "$x = 1+1+1 = 3.0$ m."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.65",
    "type": "MCQ - 2M",
    "question": "The number of unique IK solutions for a general 6R robot can be at most:",
    "options": [
      "- (A) 2",
      "- (B) 4",
      "- (C) 8",
      "- (D) 16"
    ],
    "answer": "(D). Up to 16 solutions."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.66",
    "type": "NAT - 2M",
    "question": "2R robot: $L_1=L_2=1$ m. For end-effector at $(2,0)$: number of IK solutions?",
    "options": [],
    "answer": "1 (boundary of workspace, fully extended)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.67",
    "type": "MCQ - 2M",
    "question": "2R robot IK: $\\cos\\theta_2 = C_2$ gives:",
    "options": [
      "- (A) 1 solution for $\\theta_2$",
      "- (B) 2 solutions: $\\theta_2 = \\pm\\arccos(C_2)$",
      "- (C) No solution",
      "- (D) Infinite solutions"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.68",
    "type": "NAT - 2M",
    "question": "2R robot: $L_1=L_2=1$ m, target at $(1,0)$. Compute $\\cos\\theta_2$:",
    "options": [],
    "answer": "$C_2 = \\frac{1+0-1-1}{2(1)(1)} = -0.5$. $\\theta_2 = \\pm120°$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.69",
    "type": "MCQ - 1M",
    "question": "$\\text{atan2}(1, 0)$ in degrees equals:",
    "options": [
      "- (A) 0°",
      "- (B) 90°",
      "- (C) 180°",
      "- (D) 45°"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.70",
    "type": "NAT - 2M",
    "question": "For SCARA robot pick-and-place, which DOF handles vertical Z-motion?",
    "options": [],
    "answer": "The prismatic joint $d_3$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.71",
    "type": "MCQ - 2M",
    "question": "Workspace of a 3R spherical wrist robot is:",
    "options": [
      "- (A) A disk",
      "- (B) A sphere",
      "- (C) A cylinder",
      "- (D) A torus"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.72",
    "type": "NAT - 2M",
    "question": "For a 6-DOF robot with spherical wrist, IK decouples into:",
    "options": [],
    "answer": "2 sub-problems: (1) 3-DOF position IK for wrist center, (2) 3-DOF orientation IK."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.73",
    "type": "MCQ - 2M",
    "question": "Wrist center formula for 6R robot with spherical wrist (offset $d_6$):",
    "options": [
      "- (A) $p_{wc} = p_{ee} + d_6\\hat{a}$",
      "- (B) $p_{wc} = p_{ee} - d_6\\hat{a}$",
      "- (C) $p_{wc} = d_6\\hat{a}$",
      "- (D) $p_{wc} = p_{ee}/d_6$"
    ],
    "answer": "(B). Subtract approach vector scaled by $d_6$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.74",
    "type": "MCQ - 1M",
    "question": "Grübler DOF formula for planar mechanisms: $M = 3(n-1) - 2j_1 - j_2$. For a 4-bar linkage (4 links, 4 revolute joints), $M$:",
    "options": [
      "- (A) 0",
      "- (B) 1",
      "- (C) 2",
      "- (D) 3"
    ],
    "answer": "(B). $M = 3(3) - 2(4) = 9-8 = 1$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.75",
    "type": "NAT - 2M",
    "question": "Slider-crank mechanism DOF (4 links, 3 revolute + 1 prismatic joints):",
    "options": [],
    "answer": "$M = 3(3) - 2(4) = 9-8 = 1$ DOF."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.76",
    "type": "MCQ - 1M",
    "question": "A delta parallel robot for 3-DOF position has how many actuated joints?",
    "options": [
      "- (A) 2",
      "- (B) 3",
      "- (C) 4",
      "- (D) 6"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.77",
    "type": "MCQ - 2M",
    "question": "Repeatability vs. accuracy in robotics:",
    "options": [
      "- (A) Repeatability is always worse than accuracy",
      "- (B) Accuracy = consistency; repeatability = absolute precision",
      "- (C) Repeatability is usually better (smaller error) than absolute accuracy",
      "- (D) Both are identical"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.78",
    "type": "NAT - 2M",
    "question": "A 3R robot with $L_1=L_2=L_3=0.5$ m and $\\theta_1=\\theta_2=\\theta_3=0°$: end-effector X-position?",
    "options": [],
    "answer": "$x = 0.5+0.5+0.5 = 1.5$ m."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.79",
    "type": "MCQ - 2M",
    "question": "A 7-DOF robot arm used for a 6-DOF task has:",
    "options": [
      "- (A) Fewer solutions than a 6-DOF arm",
      "- (B) Exactly one solution",
      "- (C) Kinematic redundancy (infinite solutions for same pose)",
      "- (D) No solution"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.80",
    "type": "NAT - 2M",
    "question": "The Pieper criterion for closed-form IK requires:",
    "options": [],
    "answer": "Three consecutive joint axes intersect at a point (spherical wrist) or are parallel."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.81",
    "type": "MCQ - 1M",
    "question": "FK gives unique output for given joint angles:",
    "options": [
      "- (A) True (FK is one-to-one)",
      "- (B) False, FK is many-to-one",
      "- (C) FK gives infinite outputs",
      "- (D) FK is undefined"
    ],
    "answer": "(A). FK (direct kinematics) is always unique."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.82",
    "type": "MCQ - 2M",
    "question": "The Denavit-Hartenberg convention reduces the number of HTM parameters per link from 6 to:",
    "options": [
      "- (A) 6",
      "- (B) 4",
      "- (C) 3",
      "- (D) 2"
    ],
    "answer": "(B). 4 parameters: $(\\theta_i, d_i, a_i, \\alpha_i)$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.83",
    "type": "NAT - 2M",
    "question": "A 6-DOF robot arm FK gives the end-effector pose: how many equations describe it (position + full rotation matrix)?",
    "options": [],
    "answer": "12 (3 position + 9 rotation matrix elements, though only 6 are independent due to constraints)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.84",
    "type": "MCQ - 1M",
    "question": "Which coordinate system is used by the DH convention for Z-axis alignment?",
    "options": [
      "- (A) Z-axis along the joint axis (revolute joint rotation axis or prismatic joint translation direction)",
      "- (B) Z-axis always vertical",
      "- (C) Z-axis perpendicular to link",
      "- (D) Z-axis toward end-effector"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.85",
    "type": "MCQ - 2M",
    "question": "For a 2R planar robot, the forward kinematics (end-effector position) as a function of joint angles is:",
    "options": [
      "- (A) Linear in $\\theta_1, \\theta_2$",
      "- (B) Nonlinear (trigonometric) in $\\theta_1, \\theta_2$",
      "- (C) Polynomial in $\\theta_1, \\theta_2$",
      "- (D) Exponential in $\\theta_1, \\theta_2$"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.86",
    "type": "NAT - 2M",
    "question": "For a PUMA arm with spherical wrist, the first 3 joints (waist, shoulder, elbow) are responsible for:",
    "options": [],
    "answer": "Positioning the wrist center (3D position control)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.87",
    "type": "MCQ - 1M",
    "question": "The end-effector orientation in a 6R PUMA robot is controlled by:",
    "options": [
      "- (A) Joints 1-3",
      "- (B) Joints 4-6 (spherical wrist)",
      "- (C) Joint 6 only",
      "- (D) All 6 joints equally"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.88",
    "type": "NAT - 2M",
    "question": "For a RRR spherical wrist, the Euler angle IK uses which 3 angles?",
    "options": [],
    "answer": "The three wrist joint angles $(\\theta_4, \\theta_5, \\theta_6)$ equivalent to ZYZ or ZYX Euler angles."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.89",
    "type": "MCQ - 2M",
    "question": "Joint angle limits in a robot restrict the:",
    "options": [
      "- (A) Number of DOF",
      "- (B) Reachable workspace and available IK solutions",
      "- (C) Jacobian rank",
      "- (D) End-effector mass"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.90",
    "type": "NAT - 2M",
    "question": "A 2R robot with $L_1=1, L_2=0.5$ m: what is the area of the annular workspace?",
    "options": [],
    "answer": "$r_{min}=0.5$ m, $r_{max}=1.5$ m. Area $= \\pi(r_{max}^2-r_{min}^2) = \\pi(2.25-0.25) = 2\\pi \\approx 6.28$ m²."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.91",
    "type": "MCQ - 1M",
    "question": "Which robot type has a toroidal (donut-shaped) workspace?",
    "options": [
      "- (A) Cylindrical robot",
      "- (B) 2R planar robot (when $L_1 > L_2$)",
      "- (C) SCARA robot",
      "- (D) Cartesian robot"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.92",
    "type": "NAT - 2M",
    "question": "The joint space of a 6-DOF robot is a subset of what mathematical space?",
    "options": [],
    "answer": "$\\mathbb{R}^6$ (6-dimensional real space), typically with joint angle bounds."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.93",
    "type": "MCQ - 2M",
    "question": "The SE(3) group has dimension (number of DOF):",
    "options": [
      "- (A) 3",
      "- (B) 4",
      "- (C) 6",
      "- (D) 12"
    ],
    "answer": "(C). SE(3) = 3D rotation + 3D translation = 6 DOF."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.94",
    "type": "NAT - 2M",
    "question": "How many kinematic parameters (total DH parameters) does a 6-DOF robot have?",
    "options": [],
    "answer": "$6 \\times 4 = 24$ DH parameters total ($\\theta_i, d_i, a_i, \\alpha_i$ per joint), though 6 are variables."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.95",
    "type": "MCQ - 1M",
    "question": "The forward kinematics mapping $f: q \\to (x,y,z,\\phi,\\theta,\\psi)$ is:",
    "options": [
      "- (A) Linear",
      "- (B) Nonlinear",
      "- (C) Affine",
      "- (D) Undefined for robots with > 3 DOF"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.96",
    "type": "NAT - 2M",
    "question": "For a 3-DOF cylindrical robot (RRP) with $r=0.6$, $\\theta=45°$, $z=0.8$ m. Cartesian position?",
    "options": [],
    "answer": "$x=r\\cos\\theta=0.6\\cos45°\\approx0.424$ m, $y=0.6\\sin45°\\approx0.424$ m, $z=0.8$ m."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.97",
    "type": "MCQ - 2M",
    "question": "A spherical (polar) robot (RRP configuration in spherical coordinates) defines its workspace as:",
    "options": [
      "- (A) A cube",
      "- (B) A hollow sphere",
      "- (C) A cylinder",
      "- (D) A torus"
    ],
    "answer": "(B). Spherical robots have a sphere-like (partial sphere annular) workspace."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.98",
    "type": "NAT - 2M",
    "question": "For a Cartesian (PPP) robot with travel ranges $X=[0,1]$ m, $Y=[0,0.8]$ m, $Z=[0,0.5]$ m: workspace volume?",
    "options": [],
    "answer": "$V = 1 \\times 0.8 \\times 0.5 = 0.4$ m³."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.99",
    "type": "MCQ - 1M",
    "question": "Which robot configuration provides the simplest (no cross-coupling) forward kinematics?",
    "options": [
      "- (A) 6R robot",
      "- (B) PUMA arm",
      "- (C) Cartesian (PPP) robot",
      "- (D) SCARA robot"
    ],
    "answer": "(C). Cartesian: $x=d_1, y=d_2, z=d_3$."
  },
  {
    "module": "Mod 1: Spatial Transforms & DH",
    "id": "1.100",
    "type": "NAT - 2M",
    "question": "For a 2R robot in elbow-up configuration with $\\theta_2=+120°$ and $L_1=L_2=1$ m at target $(x,y)$: what is $\\cos\\theta_2$? --- *Module 1 Complete — 100 Questions* *Subjects: Rotation Matrices, HTM, DH Parameters, Forward Kinematics*",
    "options": [],
    "answer": "$\\cos(120°) = -0.5$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.1",
    "type": "MCQ - 1M",
    "question": "The Jacobian matrix $J(q)$ relates:",
    "options": [
      "- (A) Joint forces to Cartesian forces",
      "- (B) Joint velocities to end-effector Cartesian velocities",
      "- (C) Joint angles to end-effector positions",
      "- (D) Link lengths to workspace size"
    ],
    "answer": "(B). $\\dot{x} = J(q)\\dot{q}$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.2",
    "type": "NAT - 2M",
    "question": "For a 2R planar robot with $L_1=L_2=1$ m and $\\theta_1=90°$, $\\theta_2=0°$: what is $\\det(J)$?",
    "options": [],
    "answer": "$\\det(J) = L_1 L_2 \\sin\\theta_2 = 1\\cdot1\\cdot\\sin(0°) = 0$. This is a singularity!"
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.3",
    "type": "MCQ - 2M",
    "question": "Singularities of a robot manipulator occur when:",
    "options": [
      "- (A) $\\det(J) = 0$ (Jacobian loses rank)",
      "- (B) All joint angles are zero",
      "- (C) The robot reaches maximum speed",
      "- (D) Payload exceeds capacity"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.4",
    "type": "NAT - 2M",
    "question": "For 2R planar robot, $\\det(J) = L_1 L_2 \\sin\\theta_2$. Singularity occurs at $\\theta_2 = ?$",
    "options": [],
    "answer": "$\\theta_2 = 0°$ (fully extended, boundary singularity) or $\\theta_2 = 180°$ (fully folded, interior singularity)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.5",
    "type": "MCQ - 2M",
    "question": "The manipulability measure $\\mu = \\sqrt{\\det(JJ^T)}$ equals zero when:",
    "options": [
      "- (A) The robot moves slowly",
      "- (B) The robot is at a singularity ($J$ loses rank)",
      "- (C) $\\theta_2 = 90°$",
      "- (D) The payload is zero"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.6",
    "type": "NAT - 2M",
    "question": "For 2R robot: $J = \\begin{bmatrix}-L_1s_1-L_2s_{12} & -L_2s_{12}\\\\ L_1c_1+L_2c_{12} & L_2c_{12}\\end{bmatrix}$. At $\\theta_1=0°, \\theta_2=90°$ with $L_1=L_2=1$: compute $\\det(J)$. $J = \\begin{bmatrix}-1&-1\\\\1&0\\end{bmatrix}$. $\\det(J) = (-1)(0)-(−1)(1) = 0+1 = 1$. So $\\mu = 1$.",
    "options": [],
    "answer": "$s_1=0, c_1=1, s_{12}=\\sin(90°)=1, c_{12}=\\cos(90°)=0$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.7",
    "type": "MCQ - 1M",
    "question": "The geometric Jacobian columns corresponding to revolute joints are:",
    "options": [
      "- (A) $J_v^i = \\hat{z}_{i-1}$, $J_\\omega^i = \\hat{z}_{i-1} \\times (p_n - p_{i-1})$",
      "- (B) $J_v^i = \\hat{z}_{i-1} \\times (p_n - p_{i-1})$, $J_\\omega^i = \\hat{z}_{i-1}$",
      "- (C) $J_v^i = p_n - p_{i-1}$, $J_\\omega^i = 0$",
      "- (D) $J_v^i = 0$, $J_\\omega^i = p_n$"
    ],
    "answer": "(B). Linear velocity part: $z_{i-1}\\times(p_n-p_{i-1})$; angular velocity part: $z_{i-1}$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.8",
    "type": "MCQ - 2M",
    "question": "The Jacobian columns for a prismatic joint are:",
    "options": [
      "- (A) $J_v^i = \\hat{z}_{i-1}\\times(p_n-p_{i-1})$, $J_\\omega^i = \\hat{z}_{i-1}$",
      "- (B) $J_v^i = \\hat{z}_{i-1}$, $J_\\omega^i = 0$",
      "- (C) $J_v^i = 0$, $J_\\omega^i = \\hat{z}_{i-1}$",
      "- (D) $J_v^i = p_n$, $J_\\omega^i = 0$"
    ],
    "answer": "(B). Prismatic: translation along $\\hat{z}_{i-1}$, no rotation contribution."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.9",
    "type": "NAT - 2M",
    "question": "For a $6\\times n$ Jacobian, a singularity (rank deficiency) means the robot loses how many DOF?",
    "options": [],
    "answer": "It loses $n - \\text{rank}(J)$ DOF — the number of directions it cannot move in task space."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.10",
    "type": "MCQ - 1M",
    "question": "The condition number of the Jacobian measures:",
    "options": [
      "- (A) Robot speed",
      "- (B) How close the robot is to a singularity",
      "- (C) Joint torque",
      "- (D) Payload capacity"
    ],
    "answer": "(B). High condition number = near singularity."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.11",
    "type": "NAT - 2M",
    "question": "The manipulability ellipsoid axes are given by:",
    "options": [],
    "answer": "The singular values of $J$ (from SVD: $J = U\\Sigma V^T$). The ellipsoid axes lengths are the singular values $\\sigma_i$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.12",
    "type": "MCQ - 2M",
    "question": "For a 2R planar robot at the fully-extended ($\\theta_2=0°$) configuration, the robot:",
    "options": [
      "- (A) Has maximum dexterity",
      "- (B) Is at a wrist singularity",
      "- (C) Is at a boundary (arm) singularity and cannot move radially",
      "- (D) Can move in all directions equally"
    ],
    "answer": "(C). Fully extended = boundary singularity; radial direction is lost."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.13",
    "type": "NAT - 2M",
    "question": "For a 2R planar manipulator, the velocity kinematics $\\dot{x} = J\\dot{q}$. If $J$ is $2\\times2$ and invertible, what is $\\dot{q}$?",
    "options": [],
    "answer": "$\\dot{q} = J^{-1}\\dot{x}$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.14",
    "type": "MCQ - 1M",
    "question": "When the Jacobian is non-square ($m < n$, more joints than task DOF), the pseudoinverse is:",
    "options": [
      "- (A) $J^+ = J^T(JJ^T)^{-1}$",
      "- (B) $J^+ = (J^TJ)^{-1}J^T$",
      "- (C) $J^+ = J^{-1}$",
      "- (D) $J^+ = J$"
    ],
    "answer": "(A). Right pseudoinverse: $J^+ = J^T(JJ^T)^{-1}$ for redundant robots."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.15",
    "type": "NAT - 2M",
    "question": "For the 2R robot at $\\theta_1=30°$, $\\theta_2=45°$, $L_1=0.5$, $L_2=0.4$: Compute the linear velocity of end-effector X-component if $\\dot\\theta_1=1$ rad/s, $\\dot\\theta_2=-2$ rad/s. $= (-0.5\\sin30°-0.4\\sin75°)(1)+(-0.4\\sin75°)(-2)$ $= (-0.25-0.3864)(1)+(0.7728) = -0.6364+0.7728 = +0.1364$ m/s.",
    "options": [],
    "answer": "$\\dot{x} = (-L_1\\sin\\theta_1-L_2\\sin(\\theta_1+\\theta_2))\\dot\\theta_1 + (-L_2\\sin(\\theta_1+\\theta_2))\\dot\\theta_2$"
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.16",
    "type": "MCQ - 2M",
    "question": "Jacobian singularities where the last three joint axes of a 6R robot become coplanar are called:",
    "options": [
      "- (A) Shoulder singularities",
      "- (B) Elbow singularities",
      "- (C) Wrist singularities",
      "- (D) Base singularities"
    ],
    "answer": "(C). Wrist singularity: occurs when wrist joints 4, 5, 6 become coplanar."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.17",
    "type": "NAT - 2M",
    "question": "For a robot at singularity, what happens to the required joint velocities for a finite Cartesian task-space velocity?",
    "options": [],
    "answer": "Joint velocities become infinite (or unbounded) in the singular direction."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.18",
    "type": "MCQ - 1M",
    "question": "The analytical Jacobian $J_a$ relates:",
    "options": [
      "- (A) $\\dot{q}$ to $\\dot{X}$ where $X$ is minimal orientation representation (Euler angles)",
      "- (B) $\\dot{q}$ to angular velocity $\\omega$",
      "- (C) Joint torques to Cartesian forces",
      "- (D) Position to velocity"
    ],
    "answer": "(A). Analytical Jacobian uses Euler angle rates; geometric Jacobian uses $\\omega$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.19",
    "type": "NAT - 2M",
    "question": "For a 3R planar robot, the Jacobian is $2\\times3$ (position control only). What is the rank of $J$ at a non-singular configuration?",
    "options": [],
    "answer": "2 (full row rank for a 3-DOF planar robot controlling 2D position)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.20",
    "type": "MCQ - 2M",
    "question": "The manipulability index $\\mu = \\sqrt{\\det(JJ^T)}$ has units (for a robot with link length in meters):",
    "options": [
      "- (A) m²/s²",
      "- (B) m² (for planar robot)",
      "- (C) Dimensionless",
      "- (D) rad/s"
    ],
    "answer": "(B). For a 2R robot Jacobian in meters, $\\mu$ has units of m²."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.21",
    "type": "NAT - 2M",
    "question": "For a 2R robot with $L_1=L_2=1$ m at $\\theta_2=90°$ (best dexterity): compute $\\mu$.",
    "options": [],
    "answer": "$\\mu = L_1 L_2 |\\sin\\theta_2| = 1\\cdot1\\cdot\\sin(90°) = 1$ m²."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.22",
    "type": "MCQ - 1M",
    "question": "The task-space dimension for a SCARA robot doing planar pick-and-place (X, Y, yaw) is:",
    "options": [
      "- (A) 2",
      "- (B) 3",
      "- (C) 4",
      "- (D) 6"
    ],
    "answer": "(B). SCARA controls $(x, y, z)$ position and $z$-axis rotation = 4D, but for planar tasks = 3D."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.23",
    "type": "NAT - 2M",
    "question": "If a robot Jacobian $J$ is $6\\times6$ and has condition number $\\kappa = \\sigma_{max}/\\sigma_{min}$: what $\\kappa$ value indicates perfect isotropy?",
    "options": [],
    "answer": "$\\kappa = 1$ (all singular values equal — isotropic manipulability)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.24",
    "type": "MCQ - 2M",
    "question": "The differential motion relationship $\\delta x = J \\delta q$ means:",
    "options": [
      "- (A) Large joint motions produce proportional Cartesian motions",
      "- (B) Small (infinitesimal) joint changes produce proportional Cartesian changes",
      "- (C) Joint velocities equal Cartesian velocities",
      "- (D) Forward kinematics is linear"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.25",
    "type": "NAT - 2M",
    "question": "The angular velocity of the end-effector $\\omega$ contributed by revolute joint $i$ is:",
    "options": [],
    "answer": "$\\omega_i = \\dot\\theta_i \\hat{z}_{i-1}$ (rotation rate times unit Z-axis vector of frame $i-1$)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.26",
    "type": "MCQ - 1M",
    "question": "For a 6R robot, the full $6\\times6$ Jacobian maps $\\dot{q} \\in \\mathbb{R}^6$ to:",
    "options": [
      "- (A) $[\\dot{p}^T, \\omega^T]^T \\in \\mathbb{R}^6$",
      "- (B) $\\dot{p} \\in \\mathbb{R}^3$",
      "- (C) $\\omega \\in \\mathbb{R}^3$",
      "- (D) Joint torques"
    ],
    "answer": "(A). Maps to 6D spatial velocity: $[v_x,v_y,v_z,\\omega_x,\\omega_y,\\omega_z]^T$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.27",
    "type": "NAT - 2M",
    "question": "For redundant resolution using the pseudoinverse $\\dot{q} = J^+\\dot{x} + (I-J^+J)\\dot{q}_0$, what does $(I-J^+J)$ represent?",
    "options": [],
    "answer": "The null-space projection matrix — any $\\dot{q}_0$ in the null space of $J$ produces zero Cartesian velocity change."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.28",
    "type": "MCQ - 2M",
    "question": "Near a singularity, the damped least squares (DLS) inverse is used instead of the pseudoinverse because:",
    "options": [
      "- (A) It is computationally faster",
      "- (B) It bounds joint velocities to prevent infinite values near singularities",
      "- (C) It increases robot accuracy",
      "- (D) It eliminates singularities entirely"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.29",
    "type": "NAT - 2M",
    "question": "For the condition $\\dot{x} = J\\dot{q}$ with $m=n$ (square, invertible J), the joint velocity required for $\\dot{x} = [1, 0]^T$ m/s using $J = \\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$:",
    "options": [],
    "answer": "$\\dot{q} = J^{-1}\\dot{x}$. $J^{-1} = \\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}$ (since $J$ is a $90°$ rotation). $\\dot{q} = [0, -1]^T$ rad/s."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.30",
    "type": "MCQ - 1M",
    "question": "The number of Jacobian columns equals the robot's: --- ### SECTION B: STATICS — FORCE-TORQUE DUALITY — 20 Questions",
    "options": [
      "- (A) DOF (number of joints $n$)",
      "- (B) Number of task dimensions $m$",
      "- (C) Number of links",
      "- (D) End-effector DOF"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.31",
    "type": "MCQ - 1M",
    "question": "The static force-torque duality relationship is:",
    "options": [
      "- (A) $F = J\\tau$",
      "- (B) $\\tau = J^T F$",
      "- (C) $\\tau = J^{-1} F$",
      "- (D) $F = \\tau \\cdot J^T$"
    ],
    "answer": "(B). $\\tau = J^T(q) F$ where $F$ is the end-effector wrench."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.32",
    "type": "NAT - 2M",
    "question": "2R planar robot ($L_1=0.6$ m, $L_2=0.4$ m) at $\\theta_1=0°$, $\\theta_2=90°$. External force $F_x=50$ N at end-effector. Compute $\\tau_1$. $s_1=0,c_1=1,s_{12}=1,c_{12}=0$ $J = \\begin{bmatrix}-L_1s_1-L_2s_{12}&-L_2s_{12}\\\\L_1c_1+L_2c_{12}&L_2c_{12}\\end{bmatrix} = \\begin{bmatrix}-0.4&-0.4\\\\0.6&0\\end{bmatrix}$ $\\tau = J^T[50,0]^T = \\begin{bmatrix}-0.4&0.6\\\\-0.4&0\\end{bmatrix}[50,0]^T = [-20, -20]^T$ N·m. $\\tau_1 = -20$ N·m.",
    "options": [],
    "answer": "At $\\theta_1=0°, \\theta_2=90°$:"
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.33",
    "type": "MCQ - 2M",
    "question": "The principle of virtual work states $\\tau^T\\delta q = F^T\\delta x$, which directly leads to:",
    "options": [
      "- (A) $\\tau = J F$",
      "- (B) $F = J\\tau$",
      "- (C) $\\tau = J^T F$",
      "- (D) $\\delta q = J\\delta x$"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.34",
    "type": "NAT - 2M",
    "question": "For the 2R robot at $\\theta_1=0°, \\theta_2=90°$ with $L_1=L_2=0.5$ m: if an external torque $F_z=10$ N·m is applied at end-effector about Z-axis, compute $\\tau_1$.",
    "options": [],
    "answer": "The Jacobian angular part $J_\\omega = [1, 1]^T$ for planar robot (both joints contribute $\\hat{z}$). $\\tau_1 = J_\\omega^{(1)} \\cdot F_z = 1 \\times 10 = 10$ N·m."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.35",
    "type": "MCQ - 1M",
    "question": "For a robot holding a heavy object in static equilibrium, the Jacobian relates:",
    "options": [
      "- (A) End-effector velocity to joint velocity",
      "- (B) Gravity-induced end-effector force to required joint torques",
      "- (C) Joint limits to payload",
      "- (D) Link inertia to angular momentum"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.36",
    "type": "NAT - 2M",
    "question": "A 1-DOF robot arm (length $L$, revolute joint at origin) holds a weight $W$ N at the tip. Required joint torque:",
    "options": [],
    "answer": "$\\tau = J^T \\cdot F = L \\cdot W$ (moment arm × force = $LW$ N·m)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.37",
    "type": "MCQ - 2M",
    "question": "Near a singularity, the force amplification effect means:",
    "options": [
      "- (A) Large joint torques produce small end-effector forces",
      "- (B) Small joint torques can produce large end-effector forces",
      "- (C) The robot can lift heavier loads",
      "- (D) Joint torques become zero"
    ],
    "answer": "(B). At singularity, force transformation has infinite gain in singular directions."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.38",
    "type": "NAT - 2M",
    "question": "For static holding at $\\theta_1=0°, \\theta_2=0°$ (fully extended), $L_1=L_2=1$ m, weight $W=20$ N at tip: compute $\\tau_1$.",
    "options": [],
    "answer": "$\\tau_1 = W(L_1+L_2) = 20 \\times 2 = 40$ N·m."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.39",
    "type": "MCQ - 1M",
    "question": "The transpose of the Jacobian $J^T$ maps from:",
    "options": [
      "- (A) Joint space to task space",
      "- (B) Task-space forces to joint-space torques",
      "- (C) Joint velocities to Cartesian velocities",
      "- (D) Task-space velocities to joint velocities"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.40",
    "type": "NAT - 2M",
    "question": "For a 2R robot, if $J$ is singular, what happens to the joint torques needed to resist a given end-effector force?",
    "options": [],
    "answer": "In some directions, finite end-effector forces require infinite joint torques (force singularity = velocity singularity)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.41",
    "type": "MCQ - 2M",
    "question": "A hydraulic press robot is in a fully-extended singularity to exert large forces with small torques. This exploits:",
    "options": [
      "- (A) Pseudoinverse property",
      "- (B) Mechanical advantage at singularity (force amplification)",
      "- (C) Jacobian condition number",
      "- (D) Null-space motion"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.42",
    "type": "NAT - 2M",
    "question": "For 2R robot with $L_1=0.5, L_2=0.5$ m at $\\theta_1=0°, \\theta_2=0°$: Jacobian $J = ?$ (2×2 matrix).",
    "options": [],
    "answer": "$J = \\begin{bmatrix}-L_2\\sin\\theta_2 & -L_2\\sin\\theta_2\\\\L_1+L_2\\cos\\theta_2 & L_2\\cos\\theta_2\\end{bmatrix}$. At $\\theta_2=0°$: $J = \\begin{bmatrix}0&0\\\\1&0.5\\end{bmatrix}$. Wait — properly: $J = \\begin{bmatrix}-(L_1+L_2)s_1-L_2s_{12}&...\\end{bmatrix}$... at $\\theta_1=\\theta_2=0°$: $J = \\begin{bmatrix}0&0\\\\1.0&0.5\\end{bmatrix}$. $\\det(J)=0$ — singular config!"
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.43",
    "type": "MCQ - 1M",
    "question": "For a compliant robot in force control, the desired contact force is generated using:",
    "options": [
      "- (A) Position control only",
      "- (B) Impedance/force control using $\\tau = J^T F_d + ...$",
      "- (C) Joint speed control",
      "- (D) Gravity compensation only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.44",
    "type": "NAT - 2M",
    "question": "The wrench in 3D contains how many components?",
    "options": [],
    "answer": "6 (3 force components $F_x,F_y,F_z$ + 3 moment components $M_x,M_y,M_z$)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.45",
    "type": "MCQ - 2M",
    "question": "In hybrid force-motion control, the robot:",
    "options": [
      "- (A) Controls position and force simultaneously in the same direction",
      "- (B) Controls position in unconstrained directions and force in constrained directions",
      "- (C) Uses only torque control",
      "- (D) Requires no Jacobian"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.46",
    "type": "NAT - 2M",
    "question": "A robot arm balances a payload $m=5$ kg at distance $r=0.8$ m from shoulder. Required shoulder torque (gravity only, $g=10$ m/s²):",
    "options": [],
    "answer": "$\\tau = mgr = 5 \\times 10 \\times 0.8 = 40$ N·m."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.47",
    "type": "MCQ - 1M",
    "question": "Gravity torques in a robot are functions of:",
    "options": [
      "- (A) Joint velocities",
      "- (B) Joint accelerations",
      "- (C) Joint angles (configuration)",
      "- (D) Link mass only"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.48",
    "type": "NAT - 2M",
    "question": "For a 1-link robot (revolute joint, horizontal link, mass $m$ at center): gravity torque at $\\theta$ from vertical:",
    "options": [],
    "answer": "$\\tau_g = mg(L/2)\\sin\\theta$ (moment of weight about joint)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.49",
    "type": "MCQ - 2M",
    "question": "Force/torque sensors at the robot wrist measure:",
    "options": [
      "- (A) Joint torques",
      "- (B) End-effector contact forces and moments",
      "- (C) Motor current",
      "- (D) Link temperatures"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.50",
    "type": "NAT - 2M",
    "question": "For a 2R robot with both links horizontal at $\\theta_1=\\theta_2=0°$, each link mass $m=1$ kg at link center, $L_1=L_2=1$ m, $g=10$ m/s². What is $\\tau_1$ (gravity torque at joint 1)? $\\tau_1 = 1\\times10\\times0.5 + 1\\times10\\times1.5 = 5+15 = 20$ N·m. --- ### SECTION C: ROBOT DYNAMICS — 30 Questions",
    "options": [],
    "answer": "$\\tau_1 = m_1 g(L_1/2)\\cos\\theta_1 + m_2 g(L_1+L_2/2)\\cos(\\theta_1+\\theta_2)$... Actually at $\\theta=0°$ (horizontal):"
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.51",
    "type": "MCQ - 1M",
    "question": "The Euler-Lagrange equation of motion for a robot is:",
    "options": [
      "- (A) $M(q)\\ddot{q} + C(q,\\dot{q})\\dot{q} + G(q) = \\tau$",
      "- (B) $F = ma$",
      "- (C) $\\tau = J^T F$",
      "- (D) $M(q)\\dot{q} + G(q) = \\tau$"
    ],
    "answer": "(A). $M$=inertia matrix, $C$=Coriolis/centrifugal, $G$=gravity vector."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.52",
    "type": "NAT - 2M",
    "question": "The inertia matrix $M(q)$ in the robot equation of motion is:",
    "options": [],
    "answer": "Symmetric positive-definite; relates joint accelerations $\\ddot{q}$ to torques needed for inertial effects."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.53",
    "type": "MCQ - 2M",
    "question": "The Coriolis/centrifugal matrix $C(q,\\dot{q})$ satisfies which property?",
    "options": [
      "- (A) $\\dot{M} - 2C$ is skew-symmetric",
      "- (B) $C$ is symmetric",
      "- (C) $C$ is always diagonal",
      "- (D) $C$ is constant"
    ],
    "answer": "(A). $N = \\dot{M} - 2C$ is skew-symmetric — important for passivity-based control."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.54",
    "type": "NAT - 2M",
    "question": "For a 1-DOF pendulum with mass $m$, length $L$: the equation of motion is:",
    "options": [],
    "answer": "$mL^2\\ddot\\theta + mgL\\sin\\theta = \\tau$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.55",
    "type": "MCQ - 1M",
    "question": "The potential energy of a robot arm stored in joints due to gravity gives the:",
    "options": [
      "- (A) Kinetic energy",
      "- (B) Gravity vector $G(q)$",
      "- (C) Coriolis terms",
      "- (D) Motor inertia"
    ],
    "answer": "(B). $G(q) = \\frac{\\partial U}{\\partial q}$ where $U$ is potential energy."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.56",
    "type": "NAT - 2M",
    "question": "The kinetic energy of a robot is $K = \\frac{1}{2}\\dot{q}^T M(q)\\dot{q}$. If $M$ doubles in value, how does $K$ change for same $\\dot{q}$?",
    "options": [],
    "answer": "$K$ doubles (linear in $M$)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.57",
    "type": "MCQ - 2M",
    "question": "For a 2R planar robot with uniform link masses, the inertia matrix $M(q)$ is:",
    "options": [
      "- (A) Diagonal and constant",
      "- (B) Configuration-dependent and full (non-diagonal)",
      "- (C) Always singular",
      "- (D) A scalar"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.58",
    "type": "NAT - 2M",
    "question": "In the robot equation $M\\ddot{q} + C\\dot{q} + G = \\tau$, for static holding ($\\dot{q}=\\ddot{q}=0$):",
    "options": [],
    "answer": "$G(q) = \\tau$ (only gravity torques must be provided)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.59",
    "type": "MCQ - 1M",
    "question": "The Lagrangian $\\mathcal{L}$ is defined as:",
    "options": [
      "- (A) $\\mathcal{L} = K + U$",
      "- (B) $\\mathcal{L} = K - U$",
      "- (C) $\\mathcal{L} = K \\cdot U$",
      "- (D) $\\mathcal{L} = U - K$"
    ],
    "answer": "(B). $\\mathcal{L} = K - U$ (kinetic minus potential)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.60",
    "type": "NAT - 2M",
    "question": "The Euler-Lagrange equation is: $\\frac{d}{dt}\\frac{\\partial\\mathcal{L}}{\\partial\\dot{q}_i} - \\frac{\\partial\\mathcal{L}}{\\partial q_i} = ?$",
    "options": [],
    "answer": "$= \\tau_i$ (generalized joint force/torque)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.61",
    "type": "MCQ - 2M",
    "question": "Computed torque control (inverse dynamics) for a robot requires:",
    "options": [
      "- (A) Full dynamic model $M, C, G$",
      "- (B) Only the Jacobian",
      "- (C) Only gravity compensation",
      "- (D) Trajectory planning only"
    ],
    "answer": "(A). $\\tau = M(q)(\\ddot{q}_d + K_v e_v + K_p e) + C\\dot{q} + G$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.62",
    "type": "NAT - 2M",
    "question": "For a 1-DOF joint with inertia $I=0.5$ kg·m², required torque to accelerate from rest to $\\omega=10$ rad/s in $t=2$ s (constant acceleration):",
    "options": [],
    "answer": "$\\alpha = 10/2 = 5$ rad/s². $\\tau = I\\alpha = 0.5\\times5 = 2.5$ N·m."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.63",
    "type": "MCQ - 1M",
    "question": "The Newton-Euler formulation for robot dynamics uses:",
    "options": [
      "- (A) Energy-based Lagrangian approach",
      "- (B) Force/moment balance at each link (recursive)",
      "- (C) Jacobian differentiation",
      "- (D) Fourier analysis"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.64",
    "type": "NAT - 2M",
    "question": "The recursive Newton-Euler algorithm for $n$-link robot has computational complexity:",
    "options": [],
    "answer": "$O(n)$ — linear in number of links (efficient for real-time control)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.65",
    "type": "MCQ - 2M",
    "question": "Coriolis forces in robot dynamics arise from:",
    "options": [
      "- (A) Gravity",
      "- (B) Interaction between joint velocities of different joints",
      "- (C) Motor friction",
      "- (D) Link elasticity"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.66",
    "type": "NAT - 2M",
    "question": "For a 2-DOF robot with inertia matrix $M = \\begin{bmatrix}m_{11}&m_{12}\\\\m_{12}&m_{22}\\end{bmatrix}$ and $\\tau = [10, 5]^T$ N·m, $G=[3,2]^T$ N·m, $C\\dot{q}=[1,1]^T$ N·m: compute $M\\ddot{q}$.",
    "options": [],
    "answer": "$M\\ddot{q} = \\tau - C\\dot{q} - G = [10,5]^T - [1,1]^T - [3,2]^T = [6,2]^T$ N·m."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.67",
    "type": "MCQ - 1M",
    "question": "Which effect causes the \"centrifugal\" terms $\\dot{q}_i^2$ in robot dynamics?",
    "options": [
      "- (A) Angular velocity of a link interacting with its own angular velocity",
      "- (B) Gravity",
      "- (C) Friction",
      "- (D) Motor back-EMF"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.68",
    "type": "NAT - 2M",
    "question": "For a robot decoupled by feedback linearization ($u = M(q)\\ddot{q}_d + C\\dot{q}+G$), the resulting system behaves like:",
    "options": [],
    "answer": "A set of decoupled double integrators: $\\ddot{q} = \\ddot{q}_d$ (or with PD: $\\ddot{e} + K_v\\dot{e} + K_p e = 0$)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.69",
    "type": "MCQ - 2M",
    "question": "Joint friction in robot dynamics is typically modeled as:",
    "options": [
      "- (A) Coulomb friction $\\tau_f = \\mu_c \\text{sign}(\\dot{q})$ and viscous friction $\\tau_f = b\\dot{q}$",
      "- (B) Only proportional to position $q$",
      "- (C) Independent of velocity",
      "- (D) Coulomb friction only, always zero"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.70",
    "type": "NAT - 2M",
    "question": "Power consumed by a robot joint is $P = \\tau \\cdot \\dot{q}$. For $\\tau = 10$ N·m and $\\dot{q} = 2$ rad/s:",
    "options": [],
    "answer": "$P = 10 \\times 2 = 20$ W."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.71",
    "type": "MCQ - 1M",
    "question": "For a robot arm in free space (no contact) with $\\tau=0$, the equation of motion reduces to:",
    "options": [
      "- (A) $M\\ddot{q} = 0$ (robot doesn't accelerate)",
      "- (B) $M\\ddot{q} + C\\dot{q} + G = 0$",
      "- (C) $G = 0$",
      "- (D) Robot moves in straight line"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.72",
    "type": "NAT - 2M",
    "question": "The Christoffel symbols $c_{ijk}$ appear in the Coriolis matrix $C$. They are computed from:",
    "options": [],
    "answer": "$c_{ijk} = \\frac{1}{2}\\left(\\frac{\\partial m_{ij}}{\\partial q_k}+\\frac{\\partial m_{ik}}{\\partial q_j}-\\frac{\\partial m_{jk}}{\\partial q_i}\\right)$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.73",
    "type": "MCQ - 2M",
    "question": "For a robot with rigid links, the inertia matrix $M(q)$:",
    "options": [
      "- (A) Is constant",
      "- (B) Depends on joint angles $q$",
      "- (C) Is always diagonal",
      "- (D) Is zero at singularities"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.74",
    "type": "NAT - 2M",
    "question": "A robot joint acts as a first-order system: $\\dot{q} = k\\tau$ with $k=2$ rad/(N·m·s). For a step torque $\\tau=5$ N·m, what is the steady-state $\\dot{q}$?",
    "options": [],
    "answer": "$\\dot{q} = k\\tau = 2\\times5 = 10$ rad/s."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.75",
    "type": "MCQ - 1M",
    "question": "Forward dynamics computes:",
    "options": [
      "- (A) $\\tau$ given $q, \\dot{q}, \\ddot{q}$",
      "- (B) $\\ddot{q}$ given $q, \\dot{q}, \\tau$",
      "- (C) $q$ given $\\tau$",
      "- (D) Trajectory from Jacobian"
    ],
    "answer": "(B). Forward dynamics: $\\ddot{q} = M^{-1}(\\tau - C\\dot{q} - G)$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.76",
    "type": "NAT - 2M",
    "question": "Inverse dynamics computes:",
    "options": [],
    "answer": "$\\tau$ given the desired motion $q, \\dot{q}, \\ddot{q}$: $\\tau = M(q)\\ddot{q} + C(q,\\dot{q})\\dot{q} + G(q)$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.77",
    "type": "MCQ - 2M",
    "question": "The energy-shaping passivity-based control for robots guarantees:",
    "options": [
      "- (A) Exponential convergence always",
      "- (B) Asymptotic stability in joint space (PD + gravity compensation)",
      "- (C) Singularity-free operation",
      "- (D) No gravity compensation needed"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.78",
    "type": "NAT - 2M",
    "question": "PD gravity compensation control law: $\\tau = K_p(q_d-q) - K_d\\dot{q} + G(q)$. The equilibrium point is at:",
    "options": [],
    "answer": "$q = q_d$ (desired joint position), since at equilibrium $\\dot{q}=\\ddot{q}=0$ gives $K_p(q_d-q)=0 \\Rightarrow q=q_d$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.79",
    "type": "MCQ - 1M",
    "question": "The concept of \"natural\" frequency of a robot joint is related to:",
    "options": [
      "- (A) Joint mass only",
      "- (B) $\\sqrt{K/M}$ where $K$ is joint stiffness and $M$ is inertia",
      "- (C) Maximum joint speed",
      "- (D) Link length"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.80",
    "type": "NAT - 2M",
    "question": "For a robot joint with inertia $M=0.1$ kg·m² and stiffness $K=1000$ N·m/rad: natural frequency $\\omega_n$? --- ### SECTION D: TRAJECTORY PLANNING — 20 Questions",
    "options": [],
    "answer": "$\\omega_n = \\sqrt{K/M} = \\sqrt{1000/0.1} = \\sqrt{10000} = 100$ rad/s."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.81",
    "type": "MCQ - 1M",
    "question": "A cubic polynomial trajectory $q(t) = a_0+a_1t+a_2t^2+a_3t^3$ for joint motion satisfies how many boundary conditions?",
    "options": [
      "- (A) 2",
      "- (B) 4",
      "- (C) 6",
      "- (D) 8"
    ],
    "answer": "(B). 4 conditions: $q(0)=q_0$, $q(T)=q_f$, $\\dot{q}(0)=0$, $\\dot{q}(T)=0$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.82",
    "type": "NAT - 2M",
    "question": "For cubic trajectory from $q_0=0°$ to $q_f=90°$ in $T=3$ s with zero initial/final velocities: find $a_2$.",
    "options": [],
    "answer": "Using formulas: $a_0=0, a_1=0, a_2=3(q_f-q_0)/T^2=3(90)/9=30°/s^2$, $a_3=-2(q_f-q_0)/T^3=-2(90)/27\\approx-6.67°/s^3$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.83",
    "type": "MCQ - 2M",
    "question": "The LSPB (Linear Segment with Parabolic Blends) profile uses:",
    "options": [
      "- (A) Pure polynomial",
      "- (B) Linear (constant velocity) segment blended with parabolic acceleration/deceleration",
      "- (C) Sinusoidal profile",
      "- (D) Step function"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.84",
    "type": "NAT - 2M",
    "question": "In an LSPB profile, during the linear segment, joint acceleration = ?",
    "options": [],
    "answer": "0 (constant velocity segment — zero acceleration)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.85",
    "type": "MCQ - 1M",
    "question": "A quintic polynomial trajectory requires how many boundary conditions?",
    "options": [
      "- (A) 4",
      "- (B) 6",
      "- (C) 8",
      "- (D) 10"
    ],
    "answer": "(B). 6 conditions: position, velocity, and acceleration at start and end."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.86",
    "type": "NAT - 2M",
    "question": "For a cubic trajectory, the peak velocity occurs at:",
    "options": [],
    "answer": "$t = T/2$ (midpoint in time), by symmetry of the cubic polynomial with zero initial/final velocity."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.87",
    "type": "MCQ - 2M",
    "question": "Joint space trajectory planning vs. Cartesian space trajectory:",
    "options": [
      "- (A) Joint space always gives straight-line Cartesian paths",
      "- (B) Cartesian space planning guarantees straight-line end-effector paths but requires IK at each point",
      "- (C) Both give identical results",
      "- (D) Joint space planning is always less smooth"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.88",
    "type": "NAT - 2M",
    "question": "For a PTP (point-to-point) motion, the end-effector path in Cartesian space is:",
    "options": [],
    "answer": "Not specified — it can be any path (not necessarily straight line). Only start and end poses matter."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.89",
    "type": "MCQ - 1M",
    "question": "Continuous path (CP) control is needed for operations like:",
    "options": [
      "- (A) Pick and place",
      "- (B) Arc welding along a seam",
      "- (C) Spot welding",
      "- (D) Loading/unloading"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.90",
    "type": "NAT - 2M",
    "question": "For a via-point trajectory passing through 3 configurations in 2 segments: each segment requires a separate cubic polynomial. How many unknowns total for natural spline (with $C^1$ continuity)?",
    "options": [],
    "answer": "Each segment has 4 coefficients × 2 segments = 8 unknowns. Constraints: 2×(start+end position) + 1×velocity continuity at via point = 5 equations + initial/final velocity = 7 equations. Typically solved with additional constraint = natural spline."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.91",
    "type": "MCQ - 2M",
    "question": "Via points in trajectory planning are used to:",
    "options": [
      "- (A) Define only start and end positions",
      "- (B) Define intermediate configurations the robot must pass through",
      "- (C) Set motor speed limits",
      "- (D) Define obstacle boundaries"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.92",
    "type": "NAT - 2M",
    "question": "The peak acceleration of a cubic trajectory from $q_0$ to $q_f$ with $T$ duration and zero initial/final velocities is:",
    "options": [],
    "answer": "$\\ddot{q}_{max} = 6(q_f-q_0)/T^2$ (occurs at $t=0$ and $t=T$)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.93",
    "type": "MCQ - 1M",
    "question": "In joint space trajectory planning, each joint moves from start to goal:",
    "options": [
      "- (A) At the same speed as all other joints",
      "- (B) Independently following its own profile (possibly different speeds)",
      "- (C) Only in synchronized mode",
      "- (D) Only if other joints reach goal first"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.94",
    "type": "NAT - 2M",
    "question": "To guarantee all joints arrive at goal simultaneously (synchronized motion), they all must complete their motion in the same:",
    "options": [],
    "answer": "Time duration $T$ (synchronized joint-space motion)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.95",
    "type": "MCQ - 2M",
    "question": "The trapezoidal velocity profile (LSPB) maximum velocity $V$ compared to average velocity $(q_f-q_0)/T$:",
    "options": [
      "- (A) $V < \\frac{q_f-q_0}{T}$",
      "- (B) $V = \\frac{q_f-q_0}{T}$",
      "- (C) $V > \\frac{q_f-q_0}{T}$",
      "- (D) $V = 2\\frac{q_f-q_0}{T}$"
    ],
    "answer": "(C). The peak velocity exceeds average since time is spent accelerating/decelerating."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.96",
    "type": "NAT - 2M",
    "question": "For LSPB with blend time $t_b$, total time $T$, displacement $h$: the cruising velocity $V = h/(T-t_b)$. If $h=90°$, $T=4$ s, $t_b=1$ s: find $V$.",
    "options": [],
    "answer": "$V = 90°/(4-1) = 90°/3 = 30°/s$."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.97",
    "type": "MCQ - 1M",
    "question": "The advantage of quintic over cubic trajectory is:",
    "options": [
      "- (A) Fewer coefficients needed",
      "- (B) Allows specification of acceleration boundary conditions (smoother jerk)",
      "- (C) Simpler computation",
      "- (D) Higher peak velocity"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.98",
    "type": "NAT - 2M",
    "question": "For a 6-DOF robot Cartesian straight-line path with $N$ waypoints, how many IK solutions must be computed?",
    "options": [],
    "answer": "$N$ IK solutions (one per waypoint). Dense waypoints give smoother Cartesian paths."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.99",
    "type": "MCQ - 2M",
    "question": "Time-optimal trajectory planning minimizes:",
    "options": [
      "- (A) Joint torques",
      "- (B) Energy consumption",
      "- (C) Total motion time subject to torque/velocity limits",
      "- (D) Path length"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 2: Jacobians & Dynamics",
    "id": "2.100",
    "type": "NAT - 2M",
    "question": "For a joint moved by a cubic polynomial $q(t) = a_0+a_1t+a_2t^2+a_3t^3$ with $a_0=0, a_1=0, a_2=30, a_3=-10$ and $T=3$ s: what is $q(1.5)$? --- *Module 2 Complete — 100 Questions*",
    "options": [],
    "answer": "$q(1.5) = 0+0+30(1.5)^2+(-10)(1.5)^3 = 30(2.25)-10(3.375) = 67.5-33.75 = 33.75°$. (Midpoint of 0° to 90° = 45°... let me recheck: $a_2=3(90)/9=30, a_3=-2(90)/27\\approx-6.667$. $q(1.5)=30(2.25)-6.667(3.375)=67.5-22.5=45°$.) Answer: 45°."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.1",
    "type": "NAT - 2M",
    "question": "A strain gauge with GF=2.0 and nominal resistance R=120Ω is subjected to 800με (microstrain). Calculate ΔR.",
    "options": [],
    "answer": "ΔR = GF × ε × R = 2.0 × 800×10⁻⁶ × 120 = 0.192 Ω."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.2",
    "type": "MCQ - 1M",
    "question": "Gauge Factor (GF) for a strain gauge is defined as:",
    "options": [
      "- (A) GF = ΔR/R",
      "- (B) GF = (ΔR/R) / ε",
      "- (C) GF = ε × R",
      "- (D) GF = ΔR × ε"
    ],
    "answer": "(B). GF = (ΔR/R) / ε."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.3",
    "type": "NAT - 2M",
    "question": "For a quarter-bridge circuit with Vs=10V, GF=2.0, ε=1000με: output voltage Vo?",
    "options": [],
    "answer": "Vo = (Vs/4) × GF × ε = (10/4) × 2.0 × 1000×10⁻⁶ = 5.0 mV."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.4",
    "type": "MCQ - 2M",
    "question": "A half-bridge configuration with two active gauges (one in tension, one in compression) gives output:",
    "options": [
      "- (A) Same as quarter-bridge",
      "- (B) Double the quarter-bridge output",
      "- (C) Half the quarter-bridge output",
      "- (D) Zero output"
    ],
    "answer": "(B). Half-bridge with two active opposing gauges doubles sensitivity: Vo = (Vs/2) × GF × ε."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.5",
    "type": "NAT - 2M",
    "question": "For a full Wheatstone bridge with all 4 gauges active (2 tension, 2 compression), Vs=5V, GF=2, ε=500με: Vo?",
    "options": [],
    "answer": "Vo = Vs × GF × ε = 5 × 2 × 500×10⁻⁶ = 5.0 mV."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.6",
    "type": "MCQ - 1M",
    "question": "The sensitivity of a full bridge vs quarter bridge (for same parameters):",
    "options": [
      "- (A) Full = Quarter",
      "- (B) Full = 2× Quarter",
      "- (C) Full = 4× Quarter",
      "- (D) Full = 1/4 × Quarter"
    ],
    "answer": "(C). Full bridge: 4× sensitivity compared to quarter bridge."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.7",
    "type": "NAT - 2M",
    "question": "Gauge Factor formula includes piezoresistive effect: GF = 1 + 2ν + Δρ/(ρε). For metal foil gauges, which term dominates?",
    "options": [],
    "answer": "The geometric term (1 + 2ν), where ν≈0.3, giving GF ≈ 1.6. For semiconductor gauges, piezoresistive term Δρ/(ρε) dominates (GF=50-150)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.8",
    "type": "MCQ - 2M",
    "question": "Temperature compensation in a Wheatstone bridge is achieved by:",
    "options": [
      "- (A) Using a dummy gauge in the adjacent arm",
      "- (B) Using a single active gauge",
      "- (C) Increasing excitation voltage",
      "- (D) Using AC excitation only"
    ],
    "answer": "(A). A dummy gauge in same thermal environment but unstressed cancels temperature effects."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.9",
    "type": "NAT - 2M",
    "question": "A quarter-bridge circuit with R=120Ω, GF=2.05, Vs=10V, ε=800με: compute Vo in mV.",
    "options": [],
    "answer": "Vo = (Vs/4) × GF × ε = (10/4) × 2.05 × 800×10⁻⁶ = 2.5 × 2.05 × 8×10⁻⁴ = 4.10 mV."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.10",
    "type": "MCQ - 1M",
    "question": "The Wheatstone bridge is balanced (Vo=0) when:",
    "options": [
      "- (A) R1=R2=R3=R4",
      "- (B) R1/R2 = R4/R3",
      "- (C) R1+R2 = R3+R4",
      "- (D) R1×R3 = R2×R4"
    ],
    "answer": "(B). Balance condition: R1/R2 = R4/R3 (or equivalently R1×R3 = R2×R4)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.11",
    "type": "NAT - 2M",
    "question": "Metal foil strain gauge GF is approximately:",
    "options": [],
    "answer": "GF ≈ 2 (range 1.8–2.2 for typical metal foil gauges)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.12",
    "type": "MCQ - 2M",
    "question": "The lead wire resistance effect in long cable strain gauge installations is compensated by:",
    "options": [
      "- (A) 3-wire connection scheme",
      "- (B) 4-wire (Kelvin) connection",
      "- (C) Increasing gauge resistance",
      "- (D) Using lower excitation voltage"
    ],
    "answer": "(A). 3-wire connection eliminates lead resistance in quarter-bridge configurations."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.13",
    "type": "NAT - 2M",
    "question": "For a strain gauge rosette (3 gauges at 0°, 45°, 90°), how many strain components can be determined?",
    "options": [],
    "answer": "3 independent strain components: εx, εy, and γxy (shear strain)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.14",
    "type": "MCQ - 1M",
    "question": "Piezoresistive strain gauges (semiconductor) have GF approximately:",
    "options": [
      "- (A) 2",
      "- (B) 10–20",
      "- (C) 50–150",
      "- (D) 500"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.15",
    "type": "NAT - 2M",
    "question": "A strain gauge measures 2000με on a steel bar (E=200 GPa). What is the stress σ?",
    "options": [],
    "answer": "σ = E × ε = 200×10⁹ × 2000×10⁻⁶ = 400 MPa."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.16",
    "type": "MCQ - 2M",
    "question": "An unbalanced Wheatstone bridge (one gauge changed by ΔR): the linear approximation for small ΔR is:",
    "options": [
      "- (A) Vo = Vs × ΔR/R",
      "- (B) Vo ≈ (Vs/4) × ΔR/R",
      "- (C) Vo = Vs × ΔR",
      "- (D) Vo = ΔR/R"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.17",
    "type": "NAT - 2M",
    "question": "The non-linearity error of a quarter-bridge for large strains occurs because:",
    "options": [],
    "answer": "The linear approximation Vo ≈ (Vs/4)×GF×ε breaks down for large ΔR/R (non-linear bridge response)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.18",
    "type": "MCQ - 1M",
    "question": "Excitation voltage Vs in a Wheatstone bridge should be:",
    "options": [
      "- (A) As high as possible for maximum sensitivity",
      "- (B) Limited by allowable self-heating of the gauges",
      "- (C) Always 5V DC",
      "- (D) Always AC only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.19",
    "type": "NAT - 2M",
    "question": "For a full bridge Wheatstone with Vs=12V, GF=2.1, ε=600με: Vo?",
    "options": [],
    "answer": "Vo = Vs × GF × ε = 12 × 2.1 × 600×10⁻⁶ = 15.12 mV."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.20",
    "type": "MCQ - 2M",
    "question": "The resolution of a strain gauge bridge measurement system is primarily limited by:",
    "options": [
      "- (A) Gauge factor",
      "- (B) Excitation voltage",
      "- (C) Amplifier noise floor and ADC resolution",
      "- (D) Cable length"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.21",
    "type": "NAT - 2M",
    "question": "A bridge circuit has Vs=10V and Vo=5mV for ε=1000με (quarter bridge). What is the effective GF?",
    "options": [],
    "answer": "GF = 4×Vo/(Vs×ε) = 4×5×10⁻³/(10×1000×10⁻⁶) = 0.02/0.01 = 2.0."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.22",
    "type": "MCQ - 1M",
    "question": "The transverse sensitivity of a strain gauge causes:",
    "options": [
      "- (A) Increased output for axial strain",
      "- (B) Small erroneous output due to strain perpendicular to gauge axis",
      "- (C) Bridge imbalance",
      "- (D) Temperature sensitivity"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.23",
    "type": "NAT - 2M",
    "question": "Poisson's ratio ν for steel ≈ 0.3. For a uniaxial tensile strain ε=1000με, the transverse strain εt = ?",
    "options": [],
    "answer": "εt = -ν × ε = -0.3 × 1000 = -300 με (compressive)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.24",
    "type": "MCQ - 2M",
    "question": "An S-type load cell uses:",
    "options": [
      "- (A) Piezoelectric elements",
      "- (B) 4 strain gauges in full Wheatstone bridge (2 tension, 2 compression on S-beam)",
      "- (C) LVDT",
      "- (D) Capacitive plates"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.25",
    "type": "NAT - 2M",
    "question": "For a load cell with sensitivity 2mV/V and Vs=10V: output at full scale load (rated capacity)? --- ### SECTION B: TEMPERATURE SENSORS (RTD & THERMISTOR) — 15 Questions",
    "options": [],
    "answer": "Output = 2mV/V × 10V = 20 mV full scale."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.26",
    "type": "MCQ - 1M",
    "question": "PT100 RTD has nominal resistance at 0°C of:",
    "options": [
      "- (A) 100 Ω",
      "- (B) 1000 Ω",
      "- (C) 50 Ω",
      "- (D) 200 Ω"
    ],
    "answer": "(A). PT100: 100 Ω at 0°C."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.27",
    "type": "NAT - 2M",
    "question": "PT100 RTD: resistance at 100°C using linear approximation R(T) = R₀(1 + αT) with α=0.00385/°C?",
    "options": [],
    "answer": "R(100) = 100(1 + 0.00385×100) = 100(1.385) = 138.5 Ω."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.28",
    "type": "MCQ - 2M",
    "question": "NTC thermistors have:",
    "options": [
      "- (A) Resistance increasing with temperature (positive coefficient)",
      "- (B) Resistance decreasing with temperature (negative coefficient)",
      "- (C) Constant resistance",
      "- (D) Linear resistance vs temperature"
    ],
    "answer": "(B). NTC = Negative Temperature Coefficient."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.29",
    "type": "NAT - 2M",
    "question": "The Steinhart-Hart equation for thermistors: 1/T = A + B×ln(R) + C×(ln(R))³. How many calibration constants needed?",
    "options": [],
    "answer": "3 constants (A, B, C)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.30",
    "type": "MCQ - 1M",
    "question": "RTDs (Resistance Temperature Detectors) use which material?",
    "options": [
      "- (A) Carbon",
      "- (B) Platinum (and sometimes nickel, copper)",
      "- (C) Silicon",
      "- (D) Germanium"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.31",
    "type": "NAT - 2M",
    "question": "PT1000 RTD has resistance at 0°C = ?",
    "options": [],
    "answer": "1000 Ω (PT1000: \"1000\" denotes 1000 Ω at 0°C)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.32",
    "type": "MCQ - 2M",
    "question": "Advantage of RTD over thermocouple:",
    "options": [
      "- (A) Lower cost",
      "- (B) Higher linearity and accuracy",
      "- (C) Wider temperature range",
      "- (D) No external reference needed"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.33",
    "type": "NAT - 2M",
    "question": "A 4-wire RTD connection eliminates which error?",
    "options": [],
    "answer": "Lead wire resistance error (eliminates both lead resistances from the measurement circuit)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.34",
    "type": "MCQ - 1M",
    "question": "PTC thermistors (Positive Temperature Coefficient) increase resistance with:",
    "options": [
      "- (A) Decreasing temperature",
      "- (B) Increasing temperature",
      "- (C) Constant resistance",
      "- (D) Pressure increase"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.35",
    "type": "NAT - 2M",
    "question": "A thermocouple generates voltage due to:",
    "options": [],
    "answer": "The Seebeck effect (thermoelectric effect) — dissimilar metals at different temperatures generate a voltage proportional to the temperature difference."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.36",
    "type": "MCQ - 2M",
    "question": "Type K thermocouple uses:",
    "options": [
      "- (A) Copper-Constantan",
      "- (B) Chromel-Alumel",
      "- (C) Platinum-Rhodium",
      "- (D) Iron-Constantan"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.37",
    "type": "NAT - 2M",
    "question": "The sensitivity of a thermocouple (Type K) is approximately:",
    "options": [],
    "answer": "~41 μV/°C."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.38",
    "type": "MCQ - 1M",
    "question": "Self-heating error in temperature sensors occurs when:",
    "options": [
      "- (A) Temperature is too high",
      "- (B) Measurement current causes I²R heating in the sensor",
      "- (C) Ambient humidity is high",
      "- (D) Cable is too long"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.39",
    "type": "NAT - 2M",
    "question": "The cold junction compensation for thermocouples corrects for:",
    "options": [],
    "answer": "The reference junction not being at 0°C — compensates for the ambient temperature of the measurement instrument."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.40",
    "type": "MCQ - 2M",
    "question": "Infrared (IR) thermometers measure temperature by detecting: --- ### SECTION C: POSITION SENSORS (LVDT, CAPACITIVE, ENCODER) — 25 Questions",
    "options": [
      "- (A) Resistance change",
      "- (B) Emitted thermal radiation (Stefan-Boltzmann law: P=εσAT⁴)",
      "- (C) Seebeck voltage",
      "- (D) Piezoelectric charge"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.41",
    "type": "MCQ - 1M",
    "question": "LVDT (Linear Variable Differential Transformer) measures:",
    "options": [
      "- (A) Temperature",
      "- (B) Linear displacement",
      "- (C) Angular velocity",
      "- (D) Pressure"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.42",
    "type": "NAT - 2M",
    "question": "The LVDT output voltage is zero when the core is at:",
    "options": [],
    "answer": "The null position (center/midpoint between the two secondary coils)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.43",
    "type": "MCQ - 2M",
    "question": "LVDT uses which electromagnetic principle?",
    "options": [
      "- (A) Hall effect",
      "- (B) Mutual inductance between primary and two secondary coils",
      "- (C) Piezoelectric effect",
      "- (D) Capacitive coupling"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.44",
    "type": "NAT - 2M",
    "question": "The null residual voltage in LVDT at center position is ideally:",
    "options": [],
    "answer": "0 V (theoretically), but in practice there is a small residual voltage due to imperfect coupling."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.45",
    "type": "MCQ - 1M",
    "question": "LVDT is preferred for precision displacement measurement because:",
    "options": [
      "- (A) Low cost",
      "- (B) Frictionless measurement, infinite resolution, good linearity",
      "- (C) It measures both temperature and displacement",
      "- (D) It requires no excitation"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.46",
    "type": "MCQ - 2M",
    "question": "For a capacitive displacement sensor (parallel plate: C = ε₀εᵣA/d), which type varies gap d?",
    "options": [
      "- (A) Variable-area type",
      "- (B) Variable-gap type",
      "- (C) Variable-dielectric type",
      "- (D) All of the above"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.47",
    "type": "NAT - 2M",
    "question": "Capacitive sensor: C = ε₀A/d with ε₀=8.85×10⁻¹² F/m, A=10 cm² = 10×10⁻⁴ m², d=1mm=10⁻³m. Compute C.",
    "options": [],
    "answer": "C = 8.85×10⁻¹² × 10×10⁻⁴ / 10⁻³ = 8.85×10⁻¹² × 1 = 8.85×10⁻¹² F = 8.85 pF."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.48",
    "type": "MCQ - 1M",
    "question": "The relationship between capacitance C and gap d in variable-gap capacitive sensor is:",
    "options": [
      "- (A) C ∝ d (linear)",
      "- (B) C ∝ 1/d (nonlinear/hyperbolic)",
      "- (C) C = constant",
      "- (D) C ∝ d²"
    ],
    "answer": "(B). C = ε₀A/d → nonlinear response."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.49",
    "type": "NAT - 2M",
    "question": "An incremental encoder has 500 pulses per revolution. Shaft rotates at 3000 RPM. Pulse frequency?",
    "options": [],
    "answer": "f = (pulses/rev) × (rev/s) = 500 × (3000/60) = 500 × 50 = 25,000 Hz = 25 kHz."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.50",
    "type": "MCQ - 2M",
    "question": "Quadrature encoding uses two signals A and B with 90° phase difference to determine:",
    "options": [
      "- (A) Position only",
      "- (B) Both position AND direction of rotation",
      "- (C) Speed only",
      "- (D) Torque"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.51",
    "type": "NAT - 2M",
    "question": "An absolute encoder with 12-bit resolution can distinguish how many positions per revolution?",
    "options": [],
    "answer": "2¹² = 4096 positions per revolution."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.52",
    "type": "MCQ - 1M",
    "question": "Absolute encoders use which code to avoid large errors during transitions between adjacent positions?",
    "options": [
      "- (A) Binary code",
      "- (B) BCD code",
      "- (C) Gray code",
      "- (D) ASCII code"
    ],
    "answer": "(C). Gray code: adjacent positions differ by only 1 bit."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.53",
    "type": "NAT - 2M",
    "question": "Gray code for decimal 3 (binary 011) is:",
    "options": [],
    "answer": "010 (XOR adjacent bits of binary: 0⊕1=1→but Gray: MSB=0, next=0⊕1=1, next=1⊕1=0 → 010)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.54",
    "type": "MCQ - 2M",
    "question": "An incremental encoder at startup does not know absolute position. This is resolved by:",
    "options": [
      "- (A) Using a higher PPR encoder",
      "- (B) Using an index (Z) channel pulse once per revolution",
      "- (C) Adding a temperature sensor",
      "- (D) Running the motor slowly"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.55",
    "type": "NAT - 2M",
    "question": "Resolution of an optical encoder with X4 quadrature decoding and 1000 PPR:",
    "options": [],
    "answer": "Resolution = 1000 × 4 = 4000 counts/revolution. Angular resolution = 360°/4000 = 0.09°."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.56",
    "type": "MCQ - 1M",
    "question": "RVDT (Rotary Variable Differential Transformer) measures:",
    "options": [
      "- (A) Linear displacement",
      "- (B) Angular displacement (rotary)",
      "- (C) Temperature",
      "- (D) Pressure"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.57",
    "type": "NAT - 2M",
    "question": "A resolver outputs two signals: V_sin = Vr×sin(θ) and V_cos = Vr×cos(θ). For θ=30°, Vr=10V: V_sin = ?",
    "options": [],
    "answer": "V_sin = 10×sin(30°) = 10×0.5 = 5V."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.58",
    "type": "MCQ - 2M",
    "question": "Potentiometric position sensors have which disadvantage compared to LVDTs?",
    "options": [
      "- (A) Lower resolution",
      "- (B) Friction and wear (mechanical contact)",
      "- (C) No output voltage",
      "- (D) Require AC excitation"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.59",
    "type": "NAT - 2M",
    "question": "A linear potentiometer has total length 100 mm, total resistance 10 kΩ, Vs=5V. For wiper at 30 mm from start: Vo?",
    "options": [],
    "answer": "Vo = (30/100) × 5V = 1.5V."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.60",
    "type": "MCQ - 1M",
    "question": "The drawback of variable-gap capacitive sensors is:",
    "options": [
      "- (A) Low sensitivity",
      "- (B) Nonlinear output (C ∝ 1/d)",
      "- (C) Requires contact",
      "- (D) Cannot measure small displacements"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.61",
    "type": "MCQ - 2M",
    "question": "Optical fiber displacement sensors operate on principle of:",
    "options": [
      "- (A) Intensity modulation of reflected light as function of displacement",
      "- (B) Hall effect",
      "- (C) Piezoelectric charge",
      "- (D) Inductive coupling"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.62",
    "type": "NAT - 2M",
    "question": "Laser interferometer can measure displacement with resolution down to:",
    "options": [],
    "answer": "Sub-nanometer (typically λ/2 or better for optical interferometry, ~0.3 nm for standard HeNe laser)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.63",
    "type": "MCQ - 1M",
    "question": "A 16-bit absolute encoder can resolve rotary positions to within:",
    "options": [
      "- (A) 360°/256 ≈ 1.4°",
      "- (B) 360°/65536 ≈ 0.0055°",
      "- (C) 360°/1024 ≈ 0.35°",
      "- (D) 360°/4096 ≈ 0.088°"
    ],
    "answer": "(B). 2¹⁶ = 65536 positions."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.64",
    "type": "NAT - 2M",
    "question": "LVDT output changes sign when core moves to opposite side of null because:",
    "options": [],
    "answer": "The phase of the differential output voltage reverses (180° phase shift) when core crosses null, indicating direction of displacement."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.65",
    "type": "MCQ - 2M",
    "question": "A magnetostrictive linear position sensor uses which principle? --- ### SECTION D: OTHER SENSORS & SIGNAL CONDITIONING — 35 Questions",
    "options": [
      "- (A) Resistance change with strain",
      "- (B) Torsional pulse traveling time along ferromagnetic waveguide",
      "- (C) Inductive coupling",
      "- (D) Optical interference"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.66",
    "type": "MCQ - 1M",
    "question": "Piezoelectric sensors cannot measure static (DC) loads because:",
    "options": [
      "- (A) Their sensitivity is too low for static loads",
      "- (B) Charge leaks through internal resistance (acts as high-pass filter)",
      "- (C) They require moving targets",
      "- (D) Temperature interferes with static measurements"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.67",
    "type": "NAT - 2M",
    "question": "The high-pass cutoff frequency of a piezoelectric sensor circuit with C=10nF and Ramp=10MΩ:",
    "options": [],
    "answer": "fc = 1/(2πRC) = 1/(2π × 10×10⁶ × 10×10⁻⁹) = 1/(2π × 0.1) = 1.59 Hz."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.68",
    "type": "MCQ - 2M",
    "question": "Piezoelectric voltage sensitivity g (V/m per Pa) and charge sensitivity d (C/N) are related by:",
    "options": [
      "- (A) g = d × ε_r × ε_0",
      "- (B) g = d / (ε_r × ε_0)",
      "- (C) g = d × ε_0",
      "- (D) g = 1/d"
    ],
    "answer": "(B). g = d/ε where ε is the permittivity."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.69",
    "type": "NAT - 2M",
    "question": "Hall effect voltage formula: V_H = (R_H × I × B) / t. For I=1A, B=0.5T, t=1mm, R_H=6×10⁻⁴ m³/C: V_H?",
    "options": [],
    "answer": "V_H = (6×10⁻⁴ × 1 × 0.5) / (1×10⁻³) = 3×10⁻⁴ / 10⁻³ = 0.3 V."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.70",
    "type": "MCQ - 1M",
    "question": "Hall effect sensors measure:",
    "options": [
      "- (A) Temperature",
      "- (B) Magnetic field (and indirectly: current, position, speed)",
      "- (C) Pressure",
      "- (D) Humidity"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.71",
    "type": "NAT - 2M",
    "question": "A MEMS accelerometer uses which principle?",
    "options": [],
    "answer": "Capacitive displacement sensing of a proof mass (seismic mass) on a spring-mass system (or piezoelectric, piezoresistive)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.72",
    "type": "MCQ - 2M",
    "question": "A 3-op-amp instrumentation amplifier (INA) has gain:",
    "options": [
      "- (A) G = 1 + R_f/R_in",
      "- (B) G = 1 + 2R/R_G (set by single resistor R_G)",
      "- (C) G = R2/R1",
      "- (D) G = 2R_f/R_G"
    ],
    "answer": "(B). INA gain: G = 1 + 2R/R_G."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.73",
    "type": "NAT - 2M",
    "question": "INA with R=25kΩ each and R_G=1kΩ: gain G?",
    "options": [],
    "answer": "G = 1 + 2(25000)/1000 = 1 + 50 = 51."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.74",
    "type": "MCQ - 1M",
    "question": "The key advantage of an instrumentation amplifier over a single op-amp differential amplifier is:",
    "options": [
      "- (A) Lower gain",
      "- (B) Very high input impedance and high CMRR",
      "- (C) Simpler circuit",
      "- (D) Lower cost"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.75",
    "type": "NAT - 2M",
    "question": "CMRR (Common Mode Rejection Ratio) in dB for a differential amplifier: If differential gain = 1000 and common-mode gain = 0.1: CMRR?",
    "options": [],
    "answer": "CMRR = 20×log(1000/0.1) = 20×log(10000) = 20×4 = 80 dB."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.76",
    "type": "MCQ - 2M",
    "question": "An active low-pass filter (1st order) with R=10kΩ, C=1μF has cutoff frequency fc:",
    "options": [
      "- (A) fc = RC = 0.01 Hz",
      "- (B) fc = 1/(2πRC) = 15.9 Hz",
      "- (C) fc = 1/(RC) = 100 Hz",
      "- (D) fc = 2πRC = 62.8 Hz"
    ],
    "answer": "(B). fc = 1/(2π×10000×10⁻⁶) = 1/(0.0628) ≈ 15.9 Hz."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.77",
    "type": "NAT - 2M",
    "question": "For a Sallen-Key 2nd order low-pass filter, the roll-off rate is:",
    "options": [],
    "answer": "-40 dB/decade (or -12 dB/octave) — characteristic of 2nd order filter."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.78",
    "type": "MCQ - 1M",
    "question": "Anti-aliasing filter should have cutoff frequency:",
    "options": [
      "- (A) Equal to sampling frequency",
      "- (B) Equal to or below half the sampling frequency (Nyquist)",
      "- (C) Twice the sampling frequency",
      "- (D) Independent of sampling frequency"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.79",
    "type": "NAT - 2M",
    "question": "Nyquist theorem: to reconstruct a 5 kHz signal, minimum sampling rate fs:",
    "options": [],
    "answer": "fs ≥ 2 × 5 kHz = 10 kHz (Nyquist criterion)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.80",
    "type": "MCQ - 2M",
    "question": "A charge amplifier (op-amp with feedback capacitor Cf) connected to a piezoelectric sensor with charge sensitivity d gives output:",
    "options": [
      "- (A) Vo = d × F × Cf",
      "- (B) Vo = -d × F / Cf",
      "- (C) Vo = F / (d × Cf)",
      "- (D) Vo = d × Cf × F²"
    ],
    "answer": "(B). Vo = -Q/Cf = -(d×F)/Cf."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.81",
    "type": "NAT - 2M",
    "question": "An ultrasonic distance sensor emits pulse at t=0, receives echo at t=2ms. Speed of sound = 340 m/s. Distance to target?",
    "options": [],
    "answer": "Distance = (v × t)/2 = (340 × 2×10⁻³)/2 = 0.34 m = 34 cm."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.82",
    "type": "MCQ - 1M",
    "question": "LiDAR uses which emission for ranging?",
    "options": [
      "- (A) Ultrasound",
      "- (B) Laser light (infrared or visible)",
      "- (C) Radio waves (RADAR)",
      "- (D) X-rays"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.83",
    "type": "NAT - 2M",
    "question": "For a pressure transducer with range 0-10 bar and output 4-20 mA: output current at 5 bar?",
    "options": [],
    "answer": "Linear: I = 4 + (5/10)×(20-4) = 4 + 8 = 12 mA."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.84",
    "type": "MCQ - 2M",
    "question": "The advantage of 4-20 mA current loop signal transmission (vs 0-10V voltage):",
    "options": [
      "- (A) Simpler circuitry",
      "- (B) Immune to voltage drops in long cables; live-zero (4mA) detects broken wire",
      "- (C) Lower cost",
      "- (D) Higher bandwidth"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.85",
    "type": "NAT - 2M",
    "question": "An ADC with n=12 bits and reference Vref=5V has resolution (LSB value)?",
    "options": [],
    "answer": "LSB = Vref / 2ⁿ = 5 / 4096 ≈ 1.22 mV."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.86",
    "type": "MCQ - 1M",
    "question": "A 16-bit ADC with ±10V range: resolution?",
    "options": [
      "- (A) 10V/65536 ≈ 0.153 mV per LSB (for 0-10V)",
      "- (B) 20V/65536 ≈ 0.305 mV per LSB (for ±10V = 20V full scale)",
      "- (C) 10V/1024 ≈ 9.77 mV",
      "- (D) 5V/65536 ≈ 76 μV"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.87",
    "type": "MCQ - 2M",
    "question": "Signal aliasing occurs when:",
    "options": [
      "- (A) Sensor sensitivity is too high",
      "- (B) Signal frequency exceeds fs/2 (Nyquist frequency)",
      "- (C) Amplifier gain is too large",
      "- (D) Cable resistance is too high"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.88",
    "type": "NAT - 2M",
    "question": "A DAC with 8 bits and reference 5V: output for input code 128 (decimal)?",
    "options": [],
    "answer": "Vo = (128/256) × 5V = 0.5 × 5V = 2.5V."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.89",
    "type": "MCQ - 1M",
    "question": "The S/H (Sample and Hold) circuit in data acquisition systems:",
    "options": [
      "- (A) Amplifies the signal",
      "- (B) Captures and holds analog input value during ADC conversion",
      "- (C) Filters high-frequency noise",
      "- (D) Converts analog to digital"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.90",
    "type": "MCQ - 2M",
    "question": "DMA (Direct Memory Access) in data acquisition:",
    "options": [
      "- (A) Performs analog-to-digital conversion",
      "- (B) Transfers data from ADC to memory without CPU intervention",
      "- (C) Amplifies sensor signals",
      "- (D) Filters digital data"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.91",
    "type": "NAT - 2M",
    "question": "A signal conditioner converts a 4-20mA sensor output to 0-10V for an ADC. What resistance R should be used (current-to-voltage)?",
    "options": [],
    "answer": "V = I × R. For 20mA → 10V: R = 10V/20mA = 500Ω. For 4mA → 0V offset also needs subtraction circuit, but simple: R = 500Ω with op-amp offset."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.92",
    "type": "MCQ - 1M",
    "question": "Isolation amplifiers are used when:",
    "options": [
      "- (A) More gain is needed",
      "- (B) High common-mode voltages or patient safety isolation is required",
      "- (C) Low noise is needed",
      "- (D) The signal is digital"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.93",
    "type": "NAT - 2M",
    "question": "For a gyroscope (MEMS), the Coriolis force is: F = 2m(ω × v_rel). For m=10⁻⁶ kg, ω=100 rad/s, v_rel=0.01 m/s: F?",
    "options": [],
    "answer": "F = 2 × 10⁻⁶ × 100 × 0.01 = 2 × 10⁻⁶ N = 2 μN."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.94",
    "type": "MCQ - 2M",
    "question": "IMU (Inertial Measurement Unit) combines:",
    "options": [
      "- (A) Encoder + temperature sensor",
      "- (B) Accelerometer + gyroscope (+ optional magnetometer)",
      "- (C) Strain gauge + LVDT",
      "- (D) Hall sensor + encoder"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.95",
    "type": "NAT - 2M",
    "question": "Force-torque sensors at robot wrist use how many sensing axes?",
    "options": [],
    "answer": "6 axes (Fx, Fy, Fz, Mx, My, Mz) — full 3D force and moment measurement."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.96",
    "type": "MCQ - 1M",
    "question": "The Seebeck coefficient of a thermocouple determines its:",
    "options": [
      "- (A) Accuracy",
      "- (B) Output voltage sensitivity (μV/°C)",
      "- (C) Time constant",
      "- (D) Maximum temperature range"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.97",
    "type": "NAT - 2M",
    "question": "Active noise cancellation in signal processing uses:",
    "options": [],
    "answer": "A reference microphone to capture noise, then generates anti-phase (inverted) signal to cancel noise from the main signal path."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.98",
    "type": "MCQ - 2M",
    "question": "The purpose of a Wheatstone bridge in sensor circuits:",
    "options": [
      "- (A) To amplify the signal",
      "- (B) To measure small resistance changes with high accuracy by comparing to reference resistors",
      "- (C) To isolate the sensor",
      "- (D) To filter noise"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.99",
    "type": "NAT - 2M",
    "question": "An incremental encoder on a motor shaft: if pulse count = 800 in 0.1 seconds and PPR = 200: shaft speed in RPM?",
    "options": [],
    "answer": "Pulses/s = 800/0.1 = 8000. Revolutions/s = 8000/200 = 40 rev/s. Speed = 40×60 = 2400 RPM."
  },
  {
    "module": "Mod 3: Sensors & Conditioning",
    "id": "3.100",
    "type": "MCQ - 1M",
    "question": "MEMS stands for: --- *Module 3 Complete — 100 Questions*",
    "options": [
      "- (A) Mechanical Electromagnetic Motion System",
      "- (B) Micro-Electro-Mechanical Systems",
      "- (C) Modular Electronic Manufacturing System",
      "- (D) Multiple Electrical Measurement Sensors"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.1",
    "type": "MCQ - 1M",
    "question": "The back-EMF of a PMDC motor is given by:",
    "options": [
      "- (A) Eb = Ka × Ia",
      "- (B) Eb = Ke × ω",
      "- (C) Eb = Kt × T",
      "- (D) Eb = V - Ia × Ra"
    ],
    "answer": "(B). Eb = Ke × ω (back-EMF constant × angular speed)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.2",
    "type": "NAT - 2M",
    "question": "A PMDC motor: V=24V, Ra=1Ω, Ke=0.1 V·s/rad. At stall (ω=0): stall current Ia?",
    "options": [],
    "answer": "At stall, Eb=0. Ia = (V-Eb)/Ra = 24/1 = 24 A."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.3",
    "type": "MCQ - 2M",
    "question": "The speed-torque characteristic of a PMDC motor is:",
    "options": [
      "- (A) Constant speed (flat)",
      "- (B) Linearly decreasing speed with increasing torque (drooping)",
      "- (C) Nonlinearly increasing",
      "- (D) Exponentially decreasing"
    ],
    "answer": "(B). ω = V/Ke - (Ra/(Ke×Kt))×T — linear drooping characteristic."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.4",
    "type": "NAT - 2M",
    "question": "PMDC motor: Ke=Kt=0.05 Nm/A, Ra=2Ω, V=12V. No-load speed ω_nl?",
    "options": [],
    "answer": "At no load, T≈0, Ia≈0. ω_nl = V/Ke = 12/0.05 = 240 rad/s."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.5",
    "type": "MCQ - 1M",
    "question": "The torque of a PMDC motor is proportional to:",
    "options": [
      "- (A) Speed ω",
      "- (B) Armature current Ia",
      "- (C) Supply voltage V",
      "- (D) Back-EMF Eb"
    ],
    "answer": "(B). T = Kt × Ia."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.6",
    "type": "NAT - 2M",
    "question": "PMDC motor: V=12V, Ra=1Ω, Ke=Kt=0.1. At ω=80 rad/s, find Ia and torque T.",
    "options": [],
    "answer": "Eb=0.1×80=8V. Ia=(12-8)/1=4A. T=0.1×4=0.4 Nm."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.7",
    "type": "MCQ - 2M",
    "question": "PWM (Pulse Width Modulation) speed control of DC motor controls effective:",
    "options": [
      "- (A) Motor resistance",
      "- (B) Average voltage applied to motor (duty cycle × Vdc)",
      "- (C) Motor flux",
      "- (D) Armature inductance"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.8",
    "type": "NAT - 2M",
    "question": "A PWM H-bridge with Vdc=24V and duty cycle D=0.6: average motor voltage?",
    "options": [],
    "answer": "Vavg = D × Vdc = 0.6 × 24 = 14.4V."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.9",
    "type": "MCQ - 1M",
    "question": "H-bridge motor driver uses how many power transistors (switches)?",
    "options": [
      "- (A) 2",
      "- (B) 4",
      "- (C) 6",
      "- (D) 8"
    ],
    "answer": "(B). 4 switches (Q1-Q4) forming the H-bridge."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.10",
    "type": "NAT - 2M",
    "question": "A PMDC motor mechanical time constant τ_m = Ra×J/(Ke×Kt). For Ra=2Ω, J=0.01 kg·m², Ke=Kt=0.1 Nm/A: τ_m?",
    "options": [],
    "answer": "τ_m = (2 × 0.01)/(0.1×0.1) = 0.02/0.01 = 2 s."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.11",
    "type": "MCQ - 2M",
    "question": "The electrical time constant of a DC motor τ_e = L/R is:",
    "options": [
      "- (A) Usually much larger than mechanical time constant",
      "- (B) Usually much smaller than mechanical time constant",
      "- (C) Equal to mechanical time constant",
      "- (D) Independent of armature resistance"
    ],
    "answer": "(B). τ_e << τ_m typically."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.12",
    "type": "NAT - 2M",
    "question": "Motor efficiency η = Pout/Pin × 100%. Pout=200W, Pin=250W. Efficiency?",
    "options": [],
    "answer": "η = 200/250 × 100% = 80%."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.13",
    "type": "MCQ - 1M",
    "question": "Regenerative braking in motor drive systems:",
    "options": [
      "- (A) Wastes energy as heat",
      "- (B) Returns energy back to DC bus (motor acts as generator)",
      "- (C) Uses friction brakes",
      "- (D) Disconnects motor from load"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.14",
    "type": "NAT - 2M",
    "question": "A DC servo motor with Ke=0.05 V·s/rad runs at ω=200 rad/s. Back-EMF?",
    "options": [],
    "answer": "Eb = Ke × ω = 0.05 × 200 = 10V."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.15",
    "type": "MCQ - 2M",
    "question": "Field weakening control of DC motor allows:",
    "options": [
      "- (A) Higher torque at low speeds",
      "- (B) Higher speed above base speed at constant power",
      "- (C) Better braking",
      "- (D) Reduced armature current"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.16",
    "type": "NAT - 2M",
    "question": "For a DC motor: T×ω = electrical power input minus losses. At T=5 Nm, ω=100 rad/s, Ra=0.5Ω, Ia=8A: mechanical output power?",
    "options": [],
    "answer": "Pmech = T×ω = 5×100 = 500W. Electrical: Pin = Eb×Ia = (V-Ia×Ra)×Ia. Or simply Pmech = T×ω = 500W."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.17",
    "type": "MCQ - 1M",
    "question": "Brushless DC (BLDC) motor uses what for commutation?",
    "options": [
      "- (A) Carbon brushes",
      "- (B) Electronic commutation via Hall effect sensors and inverter",
      "- (C) Slip rings",
      "- (D) Mechanical commutator"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.18",
    "type": "NAT - 2M",
    "question": "BLDC motor with 3 Hall sensors spaced 120° apart: how many switching states per revolution?",
    "options": [],
    "answer": "6 switching states (6-step commutation) per electrical cycle."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.19",
    "type": "MCQ - 2M",
    "question": "Compared to brushed DC motors, BLDC motors offer:",
    "options": [
      "- (A) Lower efficiency",
      "- (B) Longer life (no brush wear), lower maintenance, higher efficiency",
      "- (C) Simpler driver electronics",
      "- (D) Lower cost"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.20",
    "type": "NAT - 2M",
    "question": "A servo motor encoder has 2000 PPR. At 1500 RPM, how many pulses per second?",
    "options": [],
    "answer": "Pulses/s = 2000 × (1500/60) = 2000 × 25 = 50,000 Hz = 50 kHz."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.21",
    "type": "MCQ - 1M",
    "question": "Torque ripple in motors is caused by:",
    "options": [
      "- (A) Bearing friction",
      "- (B) Cogging (magnetic slots interaction) and commutation",
      "- (C) Motor overheating",
      "- (D) Encoder noise"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.22",
    "type": "NAT - 2M",
    "question": "A DC motor rated 12V, 5A. Thermal resistance Rth=5°C/W, ambient temperature Ta=25°C. At rated load, junction temperature?",
    "options": [],
    "answer": "Power dissipated in Ra: Ploss = Ia²×Ra. Without Ra given, assume all input as heat: P=V×I=60W (worst case). T_j = Ta + Rth×P = 25+5×60 = 325°C (unrealistic — this is why we only dissipate copper losses). For copper losses with Ra=1Ω: P=25W. T_j=25+5×25=150°C."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.23",
    "type": "MCQ - 2M",
    "question": "The armature reaction in DC motors:",
    "options": [
      "- (A) Increases flux",
      "- (B) Distorts and reduces main field flux",
      "- (C) Has no effect",
      "- (D) Increases back-EMF"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.24",
    "type": "NAT - 2M",
    "question": "Motor rated torque T=10 Nm at speed ω=100 rad/s. Mechanical output power?",
    "options": [],
    "answer": "P = T×ω = 10×100 = 1000W = 1 kW."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.25",
    "type": "MCQ - 1M",
    "question": "The speed regulation of a DC motor is defined as:",
    "options": [
      "- (A) (ω_nl - ω_fl)/ω_fl × 100%",
      "- (B) ω_nl/ω_fl",
      "- (C) ω_fl/ω_nl",
      "- (D) (ω_nl + ω_fl)/2"
    ],
    "answer": "(A). Speed regulation = (no-load speed - full-load speed)/full-load speed × 100%."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.26",
    "type": "NAT - 2M",
    "question": "PMDC motor: ω_nl=200 rad/s, ω_fl=180 rad/s. Speed regulation?",
    "options": [],
    "answer": "SR = (200-180)/180 × 100% = 11.1%."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.27",
    "type": "MCQ - 2M",
    "question": "Four-quadrant operation of DC drive allows:",
    "options": [
      "- (A) Forward motoring only",
      "- (B) Forward motoring + forward braking + reverse motoring + reverse braking",
      "- (C) Only speed control",
      "- (D) Only torque control"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.28",
    "type": "NAT - 2M",
    "question": "Gear ratio G (motor-to-load): reflected load inertia at motor shaft = ?",
    "options": [],
    "answer": "J_reflected = J_load / G². (Gear ratio reduces inertia by G².)"
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.29",
    "type": "MCQ - 1M",
    "question": "Optimal gear ratio for maximum load acceleration is when:",
    "options": [
      "- (A) G = 1 (direct drive)",
      "- (B) G = √(J_load/J_motor) (inertia matching)",
      "- (C) G is maximized",
      "- (D) J_load = 0"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.30",
    "type": "NAT - 2M",
    "question": "Motor J_motor=0.001 kg·m², load J_load=0.1 kg·m². Optimal gear ratio G? --- ### SECTION B: STEPPER MOTORS — 25 Questions",
    "options": [],
    "answer": "G = √(J_load/J_motor) = √(0.1/0.001) = √100 = 10."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.31",
    "type": "MCQ - 1M",
    "question": "The step angle formula for a stepper motor is:",
    "options": [
      "- (A) β = m × Nr × 360°",
      "- (B) β = 360° / (m × Nr)",
      "- (C) β = Nr / (m × 360°)",
      "- (D) β = m / (Nr × 360°)"
    ],
    "answer": "(B). β = 360° / (m × Nr) where m = number of phases, Nr = rotor teeth."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.32",
    "type": "NAT - 2M",
    "question": "4-phase hybrid stepper motor with 50 rotor teeth: full step angle?",
    "options": [],
    "answer": "β = 360° / (4 × 50) = 360° / 200 = 1.8°."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.33",
    "type": "MCQ - 2M",
    "question": "Half-stepping mode of a stepper motor:",
    "options": [
      "- (A) Doubles the step angle",
      "- (B) Halves the step angle (doubles resolution)",
      "- (C) Changes direction",
      "- (D) Reduces torque by 4×"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.34",
    "type": "NAT - 2M",
    "question": "Stepper motor: 4-phase, Nr=50 rotor teeth. Half-step angle?",
    "options": [],
    "answer": "β_half = 1.8°/2 = 0.9°."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.35",
    "type": "MCQ - 1M",
    "question": "Variable Reluctance (VR) stepper motor operates by:",
    "options": [
      "- (A) Permanent magnet attraction",
      "- (B) Minimizing reluctance path (aligning salient rotor teeth with energized stator poles)",
      "- (C) Electromagnetic induction",
      "- (D) Piezoelectric actuation"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.36",
    "type": "NAT - 2M",
    "question": "Hybrid stepper motor step angle for m=4, Nr=50 in microstep mode with 16 microsteps/full step:",
    "options": [],
    "answer": "Microstep angle = 1.8°/16 = 0.1125°."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.37",
    "type": "MCQ - 2M",
    "question": "The pull-in torque of a stepper motor is:",
    "options": [
      "- (A) Maximum torque at locked rotor",
      "- (B) Maximum torque at which motor can start, stop, or reverse without losing steps",
      "- (C) Torque at rated speed",
      "- (D) Minimum holding torque"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.38",
    "type": "NAT - 2M",
    "question": "Stepper motor CNC drive: β=1.8°, lead screw pitch=5mm/rev. Linear displacement per step?",
    "options": [],
    "answer": "Linear/step = (β/360°) × pitch = (1.8/360) × 5 = 0.025 mm = 25 μm."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.39",
    "type": "MCQ - 1M",
    "question": "The slew rate of a stepper motor is:",
    "options": [
      "- (A) Maximum torque",
      "- (B) Maximum speed (steps/s) at which motor can run without losing synchronism in continuous motion",
      "- (C) Starting speed",
      "- (D) Detent torque"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.40",
    "type": "NAT - 2M",
    "question": "Stepper motor: β=1.8°, max slew rate=2000 steps/s. Maximum rotational speed in RPM?",
    "options": [],
    "answer": "Steps/rev = 360/1.8 = 200. RPM = (2000 steps/s × 60s/min) / 200 steps/rev = 600 RPM."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.41",
    "type": "MCQ - 2M",
    "question": "Stepper motor loses synchronism when:",
    "options": [
      "- (A) Temperature drops",
      "- (B) Required acceleration/load torque exceeds available motor torque",
      "- (C) Voltage is too high",
      "- (D) Encoder feedback is lost"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.42",
    "type": "NAT - 2M",
    "question": "Number of steps for a stepper motor (β=1.8°, full step) to rotate 90°:",
    "options": [],
    "answer": "Steps = 90°/1.8° = 50 steps."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.43",
    "type": "MCQ - 1M",
    "question": "Open-loop stepper motor control is possible because:",
    "options": [
      "- (A) It has built-in position feedback",
      "- (B) Steps are discrete and precisely defined; no slip if within torque limits",
      "- (C) It uses encoders",
      "- (D) It is always slower than servo motors"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.44",
    "type": "NAT - 2M",
    "question": "Stepper motor: β=0.9° (half-step), total travel = 45°. Number of pulses?",
    "options": [],
    "answer": "Pulses = 45/0.9 = 50 pulses."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.45",
    "type": "MCQ - 2M",
    "question": "Microstepping improves stepper motor:",
    "options": [
      "- (A) Maximum torque only",
      "- (B) Resolution and reduces vibration/resonance",
      "- (C) Speed only",
      "- (D) Holding torque only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.46",
    "type": "NAT - 2M",
    "question": "For a stepper motor with 200 full steps/revolution and 8× microstepping: resolution per microstep?",
    "options": [],
    "answer": "Resolution = 360°/(200×8) = 360°/1600 = 0.225°."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.47",
    "type": "MCQ - 1M",
    "question": "Holding torque of a stepper motor is:",
    "options": [
      "- (A) Torque when running at speed",
      "- (B) Maximum torque motor can hold at rest with windings energized",
      "- (C) Detent torque (no current)",
      "- (D) Pull-out torque"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.48",
    "type": "NAT - 2M",
    "question": "PM stepper motor: if Nr=48 rotor teeth and 2-phase motor: step angle β?",
    "options": [],
    "answer": "β = 360°/(2×48) = 360°/96 = 3.75°."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.49",
    "type": "MCQ - 2M",
    "question": "The detent torque of a permanent magnet stepper is:",
    "options": [
      "- (A) Zero (no magnetic memory)",
      "- (B) Non-zero torque that keeps rotor at stable positions even with no current",
      "- (C) Equal to holding torque",
      "- (D) Negative"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.50",
    "type": "NAT - 2M",
    "question": "Stepper motor driven with acceleration profile to avoid resonance: the recommended acceleration region ends before the resonant frequency zone. If resonant frequency = 100 Hz at 200 steps/s: is 150 steps/s safe to pass through? --- ### SECTION C: HYDRAULIC & PNEUMATIC SYSTEMS — 25 Questions",
    "options": [],
    "answer": "150 steps/s is below 200 steps/s resonance — use fast ramp-up through this zone or use microstepping to avoid resonance."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.51",
    "type": "MCQ - 1M",
    "question": "Force generated by a hydraulic cylinder is:",
    "options": [
      "- (A) F = P + A",
      "- (B) F = P × A",
      "- (C) F = P / A",
      "- (D) F = A / P"
    ],
    "answer": "(B). F = P × A (pressure × piston area)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.52",
    "type": "NAT - 2M",
    "question": "Hydraulic cylinder: bore diameter D=80mm, operating pressure P=10 MPa. Extension force?",
    "options": [],
    "answer": "A = π(0.08)²/4 = π×0.0064/4 = 5.027×10⁻³ m². F = P×A = 10×10⁶ × 5.027×10⁻³ = 50,265 N ≈ 50.3 kN."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.53",
    "type": "MCQ - 2M",
    "question": "The speed of a hydraulic cylinder is determined by:",
    "options": [
      "- (A) Pressure only",
      "- (B) Flow rate Q and piston area A: v = Q/A",
      "- (C) Cylinder length",
      "- (D) Oil viscosity only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.54",
    "type": "NAT - 2M",
    "question": "Hydraulic cylinder: piston area A=50 cm² = 50×10⁻⁴ m², flow Q=10 L/min = 1.667×10⁻⁴ m³/s. Piston speed?",
    "options": [],
    "answer": "v = Q/A = 1.667×10⁻⁴ / 50×10⁻⁴ = 1.667×10⁻⁴/5×10⁻³ = 0.0333 m/s ≈ 33.3 mm/s."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.55",
    "type": "MCQ - 1M",
    "question": "Pascal's law states:",
    "options": [
      "- (A) Force = pressure × area",
      "- (B) Pressure applied to enclosed fluid is transmitted equally in all directions",
      "- (C) Flow = pressure / resistance",
      "- (D) Pressure is inversely proportional to velocity"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.56",
    "type": "NAT - 2M",
    "question": "Hydraulic pump: displacement per revolution Dv=50 cc/rev, speed N=1500 RPM. Flow rate Q?",
    "options": [],
    "answer": "Q = Dv × N = 50×10⁻⁶ m³/rev × (1500/60) rev/s = 50×10⁻⁶ × 25 = 1.25×10⁻³ m³/s = 1.25 L/s = 75 L/min."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.57",
    "type": "MCQ - 2M",
    "question": "A 3/2 directional control valve has:",
    "options": [
      "- (A) 3 positions, 2 ports",
      "- (B) 3 ports, 2 positions",
      "- (C) 3 ports, 3 positions",
      "- (D) 2 ports, 3 positions"
    ],
    "answer": "(B). 3/2 = 3 ports (P, A, T), 2 switching positions."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.58",
    "type": "NAT - 2M",
    "question": "A 5/2 pneumatic DCV: how many ports and positions?",
    "options": [],
    "answer": "5 ports (P, A, B, T1, T2), 2 positions. Used for double-acting cylinder control."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.59",
    "type": "MCQ - 1M",
    "question": "FRL unit in pneumatic systems consists of:",
    "options": [
      "- (A) Flow meter, Regulator, Lubricator",
      "- (B) Filter, Regulator, Lubricator",
      "- (C) Fan, Relay, Limiter",
      "- (D) Fluid reservoir, Regulator, Liner"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.60",
    "type": "NAT - 2M",
    "question": "Pneumatic cylinder: bore D=63mm, air pressure P=0.6 MPa. Extension force?",
    "options": [],
    "answer": "A = π(0.063)²/4 = 3.117×10⁻³ m². F = P×A = 0.6×10⁶ × 3.117×10⁻³ = 1870 N ≈ 1.87 kN."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.61",
    "type": "MCQ - 2M",
    "question": "Compared to hydraulics, pneumatics offers:",
    "options": [
      "- (A) Higher force output for same cylinder size",
      "- (B) Cleaner operation (air), simpler, but compressible (less stiff)",
      "- (C) Better speed control precision",
      "- (D) Higher operating pressure"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.62",
    "type": "NAT - 2M",
    "question": "Hydraulic system power P = pressure × flow rate. P=10 MPa, Q=0.001 m³/s: hydraulic power?",
    "options": [],
    "answer": "P_hydraulic = P×Q = 10×10⁶ × 0.001 = 10,000 W = 10 kW."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.63",
    "type": "MCQ - 1M",
    "question": "A hydraulic accumulator stores:",
    "options": [
      "- (A) Electrical energy",
      "- (B) Hydraulic energy (pressurized fluid) for emergency or peak demand supply",
      "- (C) Mechanical spring energy only",
      "- (D) Heat energy"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.64",
    "type": "NAT - 2M",
    "question": "Hydraulic retraction force (rod side, annular piston area): F_retract = P × (A_bore - A_rod). D_bore=80mm, D_rod=40mm, P=10 MPa. F_retract?",
    "options": [],
    "answer": "A_bore = π(0.08)²/4 = 5.027×10⁻³ m². A_rod = π(0.04)²/4 = 1.257×10⁻³ m². A_annular = 5.027-1.257=3.77×10⁻³ m². F = 10×10⁶ × 3.77×10⁻³ = 37,700 N ≈ 37.7 kN."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.65",
    "type": "MCQ - 2M",
    "question": "Servo valve in hydraulic system:",
    "options": [
      "- (A) Simple ON/OFF switching",
      "- (B) Proportional control: continuously variable flow control by electrical input signal",
      "- (C) Pressure relief only",
      "- (D) Flow measurement"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.66",
    "type": "NAT - 2M",
    "question": "Bernoulli's equation: P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂². For P₁=500 kPa, v₁=1 m/s, v₂=3 m/s, ρ=1000 kg/m³, h₁=h₂: P₂?",
    "options": [],
    "answer": "P₂ = P₁ + ½ρ(v₁²-v₂²) = 500000 + 500(1-9) = 500000-4000 = 496,000 Pa = 496 kPa."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.67",
    "type": "MCQ - 1M",
    "question": "ISO symbol for a hydraulic pump (fixed displacement) shows:",
    "options": [
      "- (A) Circle with triangle pointing inward",
      "- (B) Diamond with arrow",
      "- (C) Circle with triangle pointing outward",
      "- (D) Rectangle with ports"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.68",
    "type": "NAT - 2M",
    "question": "Hydraulic cylinder effective force accounting for efficiency η=0.95, P=8 MPa, A=40 cm²:",
    "options": [],
    "answer": "F = η×P×A = 0.95 × 8×10⁶ × 40×10⁻⁴ = 0.95 × 32000 = 30,400 N = 30.4 kN."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.69",
    "type": "MCQ - 2M",
    "question": "Pressure relief valve in hydraulic circuit:",
    "options": [
      "- (A) Increases pressure",
      "- (B) Limits maximum system pressure by bypassing flow to tank when set pressure is reached",
      "- (C) Measures pressure",
      "- (D) Controls direction"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.70",
    "type": "NAT - 2M",
    "question": "Flow control valve restricts flow to Q=5 L/min into a cylinder (A=25 cm²). Cylinder speed?",
    "options": [],
    "answer": "Q = 5 L/min = 5/60 L/s = 83.3×10⁻⁶ m³/s. v = Q/A = 83.3×10⁻⁶/25×10⁻⁴ = 0.0333 m/s = 33.3 mm/s."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.71",
    "type": "MCQ - 1M",
    "question": "The type of hydraulic pump most commonly used for high-pressure industrial applications:",
    "options": [
      "- (A) Gear pump",
      "- (B) Vane pump",
      "- (C) Piston pump",
      "- (D) Centrifugal pump"
    ],
    "answer": "(C). Piston pumps handle highest pressures."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.72",
    "type": "NAT - 2M",
    "question": "A double-acting pneumatic cylinder: bore D=50mm, stroke=200mm. Compressed air volume per extension stroke (at line pressure)?",
    "options": [],
    "answer": "Volume = A × stroke = π(0.05)²/4 × 0.2 = 1.963×10⁻³ × 0.2 = 3.93×10⁻⁴ m³ ≈ 0.393 L."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.73",
    "type": "MCQ - 2M",
    "question": "Fluidic logic circuits use pneumatic elements to:",
    "options": [
      "- (A) Generate electrical signals",
      "- (B) Perform logic operations (AND, OR, NOT) using air flow",
      "- (C) Amplify electrical power",
      "- (D) Control hydraulic pressure"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.74",
    "type": "NAT - 2M",
    "question": "System pressure ratio: intensifier doubles pressure. Input P=10 MPa, area ratio A₁/A₂=2: output P?",
    "options": [],
    "answer": "By Pascal: P₁A₁ = P₂A₂ → P₂ = P₁(A₁/A₂) = 10×2 = 20 MPa."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.75",
    "type": "MCQ - 1M",
    "question": "Counterbalance valve in hydraulic circuit prevents: --- ### SECTION D: SERVO SYSTEMS & POWER ELECTRONICS — 20 Questions",
    "options": [
      "- (A) Pressure buildup",
      "- (B) Load from running away (gravity loads dropping uncontrolled)",
      "- (C) Pump overload",
      "- (D) Cavitation"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.76",
    "type": "MCQ - 1M",
    "question": "A servo motor system requires:",
    "options": [
      "- (A) No feedback",
      "- (B) Position/velocity feedback for closed-loop control",
      "- (C) Only torque control",
      "- (D) Open-loop stepping"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.77",
    "type": "NAT - 2M",
    "question": "A servo drive PID controller: Kp=10, Ki=5, Kd=0.1, error e=0.5 rad, ė=0.2 rad/s, ∫e=0.1 rad·s: output u?",
    "options": [],
    "answer": "u = Kp×e + Ki×∫e + Kd×ė = 10(0.5)+5(0.1)+0.1(0.2) = 5+0.5+0.02 = 5.52 units."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.78",
    "type": "MCQ - 2M",
    "question": "Encoder feedback in servo system provides:",
    "options": [
      "- (A) Torque feedback only",
      "- (B) Position and/or velocity feedback for closed-loop control",
      "- (C) Current feedback",
      "- (D) Temperature monitoring"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.79",
    "type": "NAT - 2M",
    "question": "Cascade control in servo system layers:",
    "options": [],
    "answer": "Inner current loop → middle velocity loop → outer position loop (fastest to slowest)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.80",
    "type": "MCQ - 1M",
    "question": "The bandwidth of the servo system should be:",
    "options": [
      "- (A) Higher than disturbance frequency and lower than structural resonance",
      "- (B) As low as possible",
      "- (C) Equal to motor natural frequency",
      "- (D) Independent of load"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.81",
    "type": "NAT - 2M",
    "question": "A linear encoder with 1 μm resolution: if position = 12,345 counts: actual position?",
    "options": [],
    "answer": "Position = 12345 × 1×10⁻⁶ m = 12.345 mm."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.82",
    "type": "MCQ - 2M",
    "question": "A vector-controlled AC servo drive controls:",
    "options": [
      "- (A) Only speed",
      "- (B) Both torque and flux independently (FOC - Field Oriented Control)",
      "- (C) Only position",
      "- (D) Power factor"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.83",
    "type": "NAT - 2M",
    "question": "An inverter (Variable Frequency Drive/VFD) controls AC motor speed by varying:",
    "options": [],
    "answer": "Output frequency f (and proportionally the voltage V/Hz ratio to maintain constant flux)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.84",
    "type": "MCQ - 1M",
    "question": "IGBT (Insulated Gate Bipolar Transistor) in motor drives is chosen because:",
    "options": [
      "- (A) Lower cost than MOSFETs",
      "- (B) Combines high voltage/current capability of BJT with voltage control of MOSFET",
      "- (C) Requires no gate driver",
      "- (D) Has zero switching losses"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.85",
    "type": "NAT - 2M",
    "question": "A 3-phase inverter for AC motor control uses how many IGBTs?",
    "options": [],
    "answer": "6 IGBTs (2 per phase leg × 3 phases)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.86",
    "type": "MCQ - 2M",
    "question": "Space Vector Modulation (SVM) for 3-phase inverter:",
    "options": [
      "- (A) Simple sinusoidal PWM",
      "- (B) Optimized switching sequence that better utilizes DC bus voltage (15% more than sinusoidal PWM)",
      "- (C) Only for DC motors",
      "- (D) Reduces switching frequency"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.87",
    "type": "NAT - 2M",
    "question": "For a 3-phase induction motor: slip s = (ωs - ωr)/ωs. At synchronous speed 3000 RPM (4-pole, 50Hz) and rotor 2850 RPM: slip s?",
    "options": [],
    "answer": "s = (3000-2850)/3000 = 150/3000 = 0.05 = 5%."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.88",
    "type": "MCQ - 1M",
    "question": "Synchronous speed of a 4-pole, 50Hz induction motor:",
    "options": [
      "- (A) 1500 RPM",
      "- (B) 3000 RPM",
      "- (C) 750 RPM",
      "- (D) 6000 RPM"
    ],
    "answer": "(B). Ns = 120×f/P = 120×50/4 = 1500 RPM. Wait — 4-pole means P=4: Ns=120×50/4=1500 RPM. Answer: (A) 1500 RPM."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.89",
    "type": "NAT - 2M",
    "question": "Linear motor: a linear induction motor converts electrical energy directly to linear motion. Synchronous velocity: vs = 2×τ×f where τ=pole pitch. For τ=100mm, f=50Hz: vs?",
    "options": [],
    "answer": "vs = 2×0.1×50 = 10 m/s."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.90",
    "type": "MCQ - 2M",
    "question": "The main advantage of a direct-drive motor (no gearbox) for robotics:",
    "options": [
      "- (A) Higher torque at all speeds",
      "- (B) Zero backlash, higher bandwidth, lower mechanical complexity",
      "- (C) Lower cost",
      "- (D) Better position resolution"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.91",
    "type": "NAT - 2M",
    "question": "A gearbox with ratio G=50:1 and efficiency η=0.9: motor torque T_m needed to produce T_load=900 Nm at output?",
    "options": [],
    "answer": "T_m = T_load / (G×η) = 900/(50×0.9) = 900/45 = 20 Nm."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.92",
    "type": "MCQ - 1M",
    "question": "Harmonic drive (strain wave gear) offers:",
    "options": [
      "- (A) Low gear ratio, high backlash",
      "- (B) Very high gear ratio (50-300:1), near-zero backlash, high torque density",
      "- (C) Only used in hydraulics",
      "- (D) Low efficiency"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.93",
    "type": "NAT - 2M",
    "question": "A harmonic drive with circular spline teeth=202, flex spline teeth=200: gear ratio?",
    "options": [],
    "answer": "Gear ratio = (202-200)/200 = 2/200 = 1/100. So speed reduction of 100:1."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.94",
    "type": "MCQ - 2M",
    "question": "Backdrivability of a robot joint means:",
    "options": [
      "- (A) Joint can only move in one direction",
      "- (B) External forces can push back through the transmission to the motor",
      "- (C) Motor can drive load but not reverse",
      "- (D) Gearbox prevents any back-driving"
    ],
    "answer": "(B). Important for safe human-robot interaction (compliant robots)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.95",
    "type": "MCQ - 1M",
    "question": "Piezoelectric actuators:",
    "options": [
      "- (A) Provide large displacement with high bandwidth",
      "- (B) Provide small displacement (μm range) with very high force and bandwidth",
      "- (C) Only work at high temperatures",
      "- (D) Require no voltage"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.96",
    "type": "NAT - 2M",
    "question": "A piezoelectric actuator with sensitivity d=300 pm/V and applied voltage V=100V: displacement?",
    "options": [],
    "answer": "Δx = d × V = 300×10⁻¹² × 100 = 30×10⁻⁹ m = 30 nm."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.97",
    "type": "MCQ - 2M",
    "question": "Shape Memory Alloy (SMA) actuators (Nitinol) operate by:",
    "options": [
      "- (A) Electromagnetic force",
      "- (B) Phase transformation (austenite-martensite) when heated, contracting to provide force",
      "- (C) Piezoelectric effect",
      "- (D) Hydraulic pressure"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.98",
    "type": "NAT - 2M",
    "question": "Cable-driven robot actuator: cable tension T creates joint torque τ = T × r (pulley radius). For T=100N, r=20mm=0.02m: τ?",
    "options": [],
    "answer": "τ = 100 × 0.02 = 2 Nm."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.99",
    "type": "MCQ - 1M",
    "question": "Pneumatic artificial muscles (McKibben actuators) contract when:",
    "options": [
      "- (A) Cooled",
      "- (B) Pressurized with air (volume expansion → contraction along axis)",
      "- (C) Electrically energized",
      "- (D) Deflated"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 4: Actuators & Motor Drives",
    "id": "4.100",
    "type": "NAT - 2M",
    "question": "A solenoid valve: spring return force = 5N, solenoid force at energized = 20N. Net force for valve opening? --- *Module 4 Complete — 100 Questions*",
    "options": [],
    "answer": "Net force = 20-5 = 15N (solenoid overcomes spring)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.1",
    "type": "MCQ - 1M",
    "question": "The PLC scan cycle order is:",
    "options": [
      "- (A) Output → Program → Input",
      "- (B) Input → Program → Output",
      "- (C) Program → Input → Output",
      "- (D) Input → Output → Program"
    ],
    "answer": "(B). Read Inputs → Execute Program → Write Outputs → repeat."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.2",
    "type": "NAT - 2M",
    "question": "A PLC scan time is 10ms. How many scans per second?",
    "options": [],
    "answer": "Scans/s = 1000ms/s ÷ 10ms/scan = 100 scans/s."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.3",
    "type": "MCQ - 1M",
    "question": "Normally Open (NO) contact in ladder logic closes when:",
    "options": [
      "- (A) Always closed",
      "- (B) Coil/bit is energized (logic 1)",
      "- (C) Power is removed",
      "- (D) Never closes"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.4",
    "type": "MCQ - 2M",
    "question": "Normally Closed (NC) contact in ladder logic:",
    "options": [
      "- (A) Closes when coil is energized",
      "- (B) Opens when coil is energized (passes current when coil is OFF)",
      "- (C) Always open",
      "- (D) Identical to NO contact"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.5",
    "type": "NAT - 2M",
    "question": "TON (Timer On-Delay) timer: preset = 5s, accumulated = 3s. After 2 more seconds, output bit Q state?",
    "options": [],
    "answer": "Q = ON (done bit). At accumulated = preset = 5s, Q turns ON."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.6",
    "type": "MCQ - 2M",
    "question": "TOF (Timer Off-Delay) timer differs from TON in that:",
    "options": [
      "- (A) It starts timing when coil is energized",
      "- (B) It starts timing when coil is de-energized (starts timing on falling edge)",
      "- (C) It has no preset value",
      "- (D) It cannot be reset"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.7",
    "type": "NAT - 2M",
    "question": "CTU (Count Up) counter: preset=10, current count=8. How many more inputs needed to trigger output?",
    "options": [],
    "answer": "10 - 8 = 2 more input pulses (when count = preset = 10, Q turns ON)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.8",
    "type": "MCQ - 1M",
    "question": "PLC CPU performs which function?",
    "options": [
      "- (A) Input/Output isolation only",
      "- (B) Executes the ladder logic program",
      "- (C) Powers the field devices",
      "- (D) Provides HMI display"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.9",
    "type": "MCQ - 2M",
    "question": "A latching (SET/RESET) circuit in ladder logic maintains a coil state even after the momentary input signal is removed. This is also called:",
    "options": [
      "- (A) Seal-in circuit",
      "- (B) Timer circuit",
      "- (C) Counter circuit",
      "- (D) Comparison circuit"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.10",
    "type": "NAT - 2M",
    "question": "An E-stop (Emergency Stop) is wired as which contact type for safety?",
    "options": [],
    "answer": "NC (Normally Closed) — so a broken wire or unpressed state keeps the circuit energized; pressing E-stop opens the contact and stops the machine."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.11",
    "type": "MCQ - 1M",
    "question": "IEC 61131-3 programming languages for PLCs include (select all that apply, but choose closest):",
    "options": [
      "- (A) Ladder Diagram (LD), Function Block Diagram (FBD), Structured Text (ST)",
      "- (B) Java, Python, C++",
      "- (C) G-code, M-code",
      "- (D) HTML, XML"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.12",
    "type": "NAT - 2M",
    "question": "A PLC controls a conveyor with a start button (I0.0, NO) and stop button (I0.1, NC). Motor output is Q0.0. With seal-in: write the logic for Run state.",
    "options": [],
    "answer": "Run_Rung: [(I0.0 OR Q0.0) AND I0.1] → Q0.0. (OR with self for seal-in; NC stop normally passes current.)"
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.13",
    "type": "MCQ - 2M",
    "question": "PLC digital I/O isolation is typically achieved by:",
    "options": [
      "- (A) Relays",
      "- (B) Optocouplers (optical isolation)",
      "- (C) Capacitors",
      "- (D) Inductors"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.14",
    "type": "NAT - 2M",
    "question": "A PLC analog input module with 12-bit ADC and 0-10V range: resolution in mV?",
    "options": [],
    "answer": "Resolution = 10000mV / 2¹² = 10000/4096 ≈ 2.44 mV/count."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.15",
    "type": "MCQ - 1M",
    "question": "PROFIBUS is:",
    "options": [
      "- (A) A PLC programming language",
      "- (B) An industrial fieldbus communication protocol",
      "- (C) A type of PLC I/O module",
      "- (D) A sensor type"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.16",
    "type": "MCQ - 2M",
    "question": "The difference between PLC and relay logic:",
    "options": [
      "- (A) PLCs cannot be reprogrammed",
      "- (B) PLCs are software-based and easily reprogrammable; relay logic is hard-wired",
      "- (C) Relay logic is faster",
      "- (D) PLCs require more wiring"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.17",
    "type": "NAT - 2M",
    "question": "Scan time determinism: PLC guarantees I/O update within how many scan cycles?",
    "options": [],
    "answer": "1 scan cycle (PLCs update all I/O once per scan — deterministic)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.18",
    "type": "MCQ - 1M",
    "question": "OPC-UA (Open Platform Communications Unified Architecture) is used for:",
    "options": [
      "- (A) PLC programming",
      "- (B) Secure, platform-independent industrial data exchange (Industry 4.0)",
      "- (C) Motor control",
      "- (D) Sensor calibration"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.19",
    "type": "MCQ - 2M",
    "question": "Safety PLC (SIL-rated) differs from standard PLC by:",
    "options": [
      "- (A) Having more I/O",
      "- (B) Meeting IEC 61508 safety integrity levels with redundant processors and diagnostics",
      "- (C) Being faster",
      "- (D) Using different programming language only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.20",
    "type": "NAT - 2M",
    "question": "A TON timer preset = 10s. If PLC scan time = 5ms and input is ON continuously for 5 scans, accumulated time ≈?",
    "options": [],
    "answer": "Accumulated = 5 × 5ms = 25ms = 0.025s (far from preset, timer NOT done)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.21",
    "type": "MCQ - 1M",
    "question": "The \"Rung\" in a ladder diagram represents:",
    "options": [
      "- (A) A subroutine",
      "- (B) A series/parallel logic expression that controls one output (coil)",
      "- (C) A timer",
      "- (D) A memory address"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.22",
    "type": "NAT - 2M",
    "question": "Compare block (GRT Greater Than) in PLC: if accumulated timer value = 8s and preset comparison = 5s: does GRT trigger?",
    "options": [],
    "answer": "Yes — 8 > 5, so GRT block passes (output energized)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.23",
    "type": "MCQ - 2M",
    "question": "MOV (Move) instruction in PLC:",
    "options": [
      "- (A) Moves the PLC physically",
      "- (B) Copies a value from source to destination register",
      "- (C) Moves motor to position",
      "- (D) Deletes a file"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.24",
    "type": "NAT - 2M",
    "question": "PLC CTD (Count Down) counter: preset=10, current=10. After 3 inputs: current count?",
    "options": [],
    "answer": "10 - 3 = 7. (CTD decrements from preset toward 0.)"
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.25",
    "type": "MCQ - 1M",
    "question": "The industrial automation hierarchy from bottom to top:",
    "options": [
      "- (A) Enterprise → Plant → Cell → Machine → Sensor",
      "- (B) Sensor/Actuator → Machine → Cell → Plant → Enterprise",
      "- (C) Machine → Sensor → Cell → Plant → Enterprise",
      "- (D) Enterprise → Cell → Machine → Plant → Sensor"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.26",
    "type": "MCQ - 2M",
    "question": "SCADA (Supervisory Control and Data Acquisition) operates at which level?",
    "options": [
      "- (A) Field level (sensor level)",
      "- (B) Supervisory/plant level (above PLCs)",
      "- (C) Machine level only",
      "- (D) Enterprise level only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.27",
    "type": "NAT - 2M",
    "question": "A PLC program with 200 rungs, each taking 0.05ms: program scan time ≈?",
    "options": [],
    "answer": "Scan time = 200 × 0.05ms = 10ms/scan."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.28",
    "type": "MCQ - 1M",
    "question": "Retentive timer (RTO) in PLC:",
    "options": [
      "- (A) Resets when input goes low",
      "- (B) Accumulates time even when input goes low; requires separate RES instruction to reset",
      "- (C) Identical to TON",
      "- (D) Counts pulses"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.29",
    "type": "MCQ - 2M",
    "question": "The \"power flow\" concept in ladder diagram means:",
    "options": [
      "- (A) Current flow through wires",
      "- (B) Logical continuity from left rail through contacts to right rail (coil energized if path exists)",
      "- (C) Actual electrical power",
      "- (D) Scan direction"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.30",
    "type": "NAT - 2M",
    "question": "In a ladder rung with contact A (NO), contact B (NC) in series, contact C (NO) in parallel with B: coil Q energizes when? --- ### SECTION B: CNC MACHINING & PROGRAMMING — 30 Questions",
    "options": [],
    "answer": "Q = A AND (NOT_B_coil OR C). In physical terms: Q = A × (B_NC-state OR C) = Q energizes when A is ON AND (B-coil is OFF OR C is ON)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.31",
    "type": "MCQ - 1M",
    "question": "G00 in CNC programming is:",
    "options": [
      "- (A) Linear interpolation at feed rate",
      "- (B) Rapid positioning (maximum speed, straight line)",
      "- (C) Circular interpolation clockwise",
      "- (D) Dwell"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.32",
    "type": "NAT - 2M",
    "question": "CNC turning: cutting speed Vc=120 m/min, workpiece diameter D=40mm. Spindle speed N (RPM)?",
    "options": [],
    "answer": "N = (1000 × Vc)/(π × D) = (1000 × 120)/(π × 40) = 120000/125.66 ≈ 954 RPM."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.33",
    "type": "MCQ - 2M",
    "question": "G01 in CNC is:",
    "options": [
      "- (A) Rapid traverse",
      "- (B) Linear interpolation at programmed feed rate",
      "- (C) Circular CW",
      "- (D) Tool change"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.34",
    "type": "NAT - 2M",
    "question": "CNC milling: feed rate F=200mm/min, spindle N=1000 RPM, number of teeth z=4: feed per tooth fz?",
    "options": [],
    "answer": "fz = F/(N×z) = 200/(1000×4) = 0.05 mm/tooth."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.35",
    "type": "MCQ - 1M",
    "question": "G02 and G03 in CNC:",
    "options": [
      "- (A) G02=CCW circular, G03=CW circular",
      "- (B) G02=CW circular, G03=CCW circular",
      "- (C) Both are linear interpolation",
      "- (D) G02=Canned cycle, G03=Drill"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.36",
    "type": "NAT - 2M",
    "question": "CNC: G90 vs G91. G90=Absolute, G91=Incremental. In G91 mode, current position X=50mm, program says X30. New X position?",
    "options": [],
    "answer": "In incremental (G91): new X = 50 + 30 = 80 mm."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.37",
    "type": "MCQ - 2M",
    "question": "Material Removal Rate (MRR) formula in milling:",
    "options": [
      "- (A) MRR = width × depth × feed rate = w × d × fm",
      "- (B) MRR = cutting speed × depth",
      "- (C) MRR = RPM × diameter",
      "- (D) MRR = torque × speed"
    ],
    "answer": "(A). MRR = w × d × fm (mm³/min)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.38",
    "type": "NAT - 2M",
    "question": "CNC milling: w=20mm, d=3mm, fm=150mm/min. MRR?",
    "options": [],
    "answer": "MRR = 20×3×150 = 9000 mm³/min."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.39",
    "type": "MCQ - 1M",
    "question": "M06 in CNC is:",
    "options": [
      "- (A) Spindle ON CW",
      "- (B) Tool change",
      "- (C) Coolant ON",
      "- (D) Program end"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.40",
    "type": "NAT - 2M",
    "question": "The Cartesian coordinate system for CNC machines: Z-axis is defined as:",
    "options": [],
    "answer": "Along the spindle axis (tool rotation axis), typically pointing away from workpiece."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.41",
    "type": "MCQ - 2M",
    "question": "CNC machine right-hand rule for axes: if Z is spindle axis pointing up, X is:",
    "options": [
      "- (A) Into the machine",
      "- (B) To the right (when facing the machine)",
      "- (C) Vertical",
      "- (D) Along coolant flow"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.42",
    "type": "NAT - 2M",
    "question": "G81 is a CNC canned cycle for:",
    "options": [],
    "answer": "Drilling (standard drill cycle: rapid to position, feed down to depth, rapid retract)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.43",
    "type": "MCQ - 1M",
    "question": "DNC (Direct Numerical Control) means:",
    "options": [
      "- (A) Using a dedicated computer per machine",
      "- (B) Distributive Numerical Control: one computer distributes programs to multiple CNC machines",
      "- (C) Digital NC programming language",
      "- (D) Disconnected NC operation"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.44",
    "type": "NAT - 2M",
    "question": "CNC surface finish Ra: for turning with nose radius r=0.4mm and feed f=0.1mm/rev: theoretical Ra = f²/(8r)?",
    "options": [],
    "answer": "Ra = f²/(8r) = (0.1)²/(8×0.4) = 0.01/3.2 = 0.003125 mm = 3.125 μm."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.45",
    "type": "MCQ - 2M",
    "question": "Tool offset in CNC compensates for:",
    "options": [
      "- (A) Machine table weight",
      "- (B) Difference between programmed and actual tool dimensions (length and radius)",
      "- (C) Spindle speed variation",
      "- (D) Thermal expansion of spindle"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.46",
    "type": "NAT - 2M",
    "question": "CNC: M03 means Spindle ON CW, M04 means CCW. M05?",
    "options": [],
    "answer": "M05 = Spindle STOP."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.47",
    "type": "MCQ - 1M",
    "question": "APT (Automatically Programmed Tool) is:",
    "options": [
      "- (A) A CNC machine type",
      "- (B) A high-level CNC programming language (precursor to modern CAM)",
      "- (C) A tool holder type",
      "- (D) An inspection tool"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.48",
    "type": "NAT - 2M",
    "question": "CNC lathe: workpiece D=100mm, cutting speed Vc=200 m/min: N in RPM?",
    "options": [],
    "answer": "N = 1000×200/(π×100) = 200000/314.16 ≈ 637 RPM."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.49",
    "type": "MCQ - 2M",
    "question": "Post-processor in CAM software converts:",
    "options": [
      "- (A) Design files to simulation",
      "- (B) Generic toolpath (CL data) into machine-specific G-code/M-code",
      "- (C) Images to CAD files",
      "- (D) CAD to finite element mesh"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.50",
    "type": "NAT - 2M",
    "question": "5-axis CNC machine has how many linear and rotary axes?",
    "options": [],
    "answer": "3 linear (X,Y,Z) + 2 rotary (A,B or A,C or B,C) = 5 axes total."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.51",
    "type": "MCQ - 1M",
    "question": "G41/G42 in CNC are for:",
    "options": [
      "- (A) Tool length compensation",
      "- (B) Cutter radius compensation (left/right of path)",
      "- (C) Coolant control",
      "- (D) Feed override"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.52",
    "type": "NAT - 2M",
    "question": "CNC: current position is X=100, Y=100. G01 X150 Y100 F200. Tool moves how far in X?",
    "options": [],
    "answer": "ΔX = 150-100 = 50mm (in G90 absolute mode)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.53",
    "type": "MCQ - 2M",
    "question": "The advantage of CNC over conventional machining:",
    "options": [
      "- (A) Lower initial cost",
      "- (B) Consistent part quality, complex geometry, quick changeover via programming",
      "- (C) Simpler maintenance",
      "- (D) Manual intervention needed for every part"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.54",
    "type": "NAT - 2M",
    "question": "G43 in CNC activates:",
    "options": [],
    "answer": "Tool Length Compensation (adds offset H register value to Z axis)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.55",
    "type": "MCQ - 1M",
    "question": "Parametric programming in CNC allows:",
    "options": [
      "- (A) Only simple linear paths",
      "- (B) Use of variables and mathematical functions in NC code (e.g., Fanuc custom macros)",
      "- (C) Manual CNC operation",
      "- (D) Remote CNC control"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.56",
    "type": "NAT - 2M",
    "question": "CNC: G28 command sends tool to:",
    "options": [],
    "answer": "Machine home/reference position (zero return)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.57",
    "type": "MCQ - 2M",
    "question": "A 3-axis CNC machining center has simultaneous motion in:",
    "options": [
      "- (A) Only X axis",
      "- (B) X, Y, and Z axes simultaneously (allows 3D contouring)",
      "- (C) Only X and Y (2.5D)",
      "- (D) All 5 axes"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.58",
    "type": "NAT - 2M",
    "question": "Chip load per tooth fz = F/(N×z). For N=2000 RPM, z=2 teeth, fz=0.05 mm/tooth: feed rate F?",
    "options": [],
    "answer": "F = fz × N × z = 0.05 × 2000 × 2 = 200 mm/min."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.59",
    "type": "MCQ - 1M",
    "question": "High-Speed Machining (HSM) differs from conventional machining by:",
    "options": [
      "- (A) Slower cutting speeds",
      "- (B) Very high spindle speeds and feed rates, thin chips, reduced cutting forces",
      "- (C) Heavier cuts",
      "- (D) No coolant needed"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.60",
    "type": "NAT - 2M",
    "question": "Taylor's tool life equation: VcTⁿ = C. For n=0.25, C=400, Vc=100 m/min: tool life T? --- ### SECTION C: CIM, AS/RS & AUTO-ID — 25 Questions",
    "options": [],
    "answer": "T^0.25 = C/Vc = 400/100 = 4. T = 4^(1/0.25) = 4^4 = 256 min."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.61",
    "type": "MCQ - 1M",
    "question": "CIM (Computer Integrated Manufacturing) integrates:",
    "options": [
      "- (A) Only CNC machines",
      "- (B) Design (CAD/CAM), planning, and production/control through computer networks",
      "- (C) Manual assembly only",
      "- (D) Only quality inspection"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.62",
    "type": "NAT - 2M",
    "question": "Fixed automation (hard automation) is best for:",
    "options": [],
    "answer": "High-volume, low-variety production (e.g., automotive engine block machining) where changeover cost is prohibitive."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.63",
    "type": "MCQ - 2M",
    "question": "Flexible Manufacturing System (FMS) differs from dedicated automation by:",
    "options": [
      "- (A) Lower initial cost",
      "- (B) Ability to process different part families with quick changeover via programmable machines",
      "- (C) Manual operation only",
      "- (D) Single product focus"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.64",
    "type": "NAT - 2M",
    "question": "AGV (Automated Guided Vehicle) fleet size formula: N_AGV = (total travel time per delivery) / (delivery interval). For 3 stations each needing 1 delivery per 5 min, travel time per trip=3 min: N_AGV?",
    "options": [],
    "answer": "N_AGV = (load time + travel + unload + return) / headway. Simplified: N_AGV ≈ 3×(3/5) ≈ 1.8 → 2 AGVs."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.65",
    "type": "MCQ - 1M",
    "question": "AS/RS (Automated Storage and Retrieval System) uses:",
    "options": [
      "- (A) Human operators",
      "- (B) Computer-controlled S/R (Storage/Retrieval) machines moving in rack aisles",
      "- (C) Forklifts only",
      "- (D) Conveyor belts"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.66",
    "type": "NAT - 2M",
    "question": "AS/RS single-command cycle time Tsc = (time to travel to storage location) + (store/retrieve). Tsc formula includes?",
    "options": [],
    "answer": "Tsc = max(T_horizontal/2, T_vertical/2) + service time (Tchebychev metric for unit-load AS/RS)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.67",
    "type": "MCQ - 2M",
    "question": "Dual-command cycle (Tdc) AS/RS is more efficient than single-command because:",
    "options": [
      "- (A) It uses faster S/R machine",
      "- (B) Combines a store and retrieve operation in one trip (reduces empty travel)",
      "- (C) Uses smaller rack",
      "- (D) Only stores items"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.68",
    "type": "NAT - 2M",
    "question": "A 1D barcode EAN-13 encodes how many digits?",
    "options": [],
    "answer": "13 digits (including check digit)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.69",
    "type": "MCQ - 1M",
    "question": "RFID frequency for logistics (supply chain): which range is used for long-range reading?",
    "options": [
      "- (A) LF 125 kHz (short range, <10cm)",
      "- (B) HF 13.56 MHz (medium, <1m)",
      "- (C) UHF 860-960 MHz (long range, up to ~10m)",
      "- (D) Microwave 2.45 GHz"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.70",
    "type": "MCQ - 2M",
    "question": "Active RFID tags vs Passive RFID:",
    "options": [
      "- (A) Active have no battery; passive have battery",
      "- (B) Active have their own battery and transmitter; passive derive power from reader RF field",
      "- (C) Both use same frequency",
      "- (D) Passive have longer range"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.71",
    "type": "NAT - 2M",
    "question": "QR code (Quick Response) stores data in how many dimensions?",
    "options": [],
    "answer": "2 dimensions (2D matrix barcode) — can store more data than 1D barcodes."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.72",
    "type": "MCQ - 1M",
    "question": "Data Matrix code used in electronics manufacturing can encode approximately:",
    "options": [
      "- (A) 10 characters max",
      "- (B) Up to 2335 alphanumeric characters (ECC200)",
      "- (C) Only numbers",
      "- (D) 50 characters"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.73",
    "type": "NAT - 2M",
    "question": "HF RFID (NFC) frequency:",
    "options": [],
    "answer": "13.56 MHz. Used in contactless smart cards, NFC phones, library books."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.74",
    "type": "MCQ - 2M",
    "question": "Machine Vision inspection system in manufacturing:",
    "options": [
      "- (A) Uses thermal imaging only",
      "- (B) Uses cameras + image processing for non-contact inspection (defect detection, measurement, ID)",
      "- (C) Requires human operator to interpret results",
      "- (D) Only works for metallic parts"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.75",
    "type": "NAT - 2M",
    "question": "ERP (Enterprise Resource Planning) system in manufacturing manages:",
    "options": [],
    "answer": "Business processes including: production planning, inventory, procurement, finance, HR, sales — integrating all departments."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.76",
    "type": "MCQ - 1M",
    "question": "MES (Manufacturing Execution System) operates between:",
    "options": [
      "- (A) Field devices and PLCs",
      "- (B) ERP (business layer) and PLC/SCADA (shop floor control)",
      "- (C) Two PLCs",
      "- (D) Sensors and actuators"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.77",
    "type": "NAT - 2M",
    "question": "OEE (Overall Equipment Effectiveness) = Availability × Performance × Quality. For: Availability=0.9, Performance=0.85, Quality=0.95: OEE?",
    "options": [],
    "answer": "OEE = 0.9 × 0.85 × 0.95 = 0.7268 = 72.7%."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.78",
    "type": "MCQ - 2M",
    "question": "Industry 4.0 (Fourth Industrial Revolution) is characterized by:",
    "options": [
      "- (A) Steam power and mechanization",
      "- (B) Mass production with assembly lines",
      "- (C) Cyber-Physical Systems, IoT, AI, Big Data, cloud connectivity in manufacturing",
      "- (D) Electrification of factories"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.79",
    "type": "NAT - 2M",
    "question": "Digital Twin in manufacturing is:",
    "options": [],
    "answer": "A virtual model of a physical asset, process, or system that mirrors real-world state in real-time for monitoring, simulation, and optimization."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.80",
    "type": "MCQ - 1M",
    "question": "Just-in-Time (JIT) manufacturing principle:",
    "options": [
      "- (A) Produce as much as possible and store",
      "- (B) Produce exactly what is needed, when needed, in the quantity needed (minimize inventory)",
      "- (C) Automate all processes",
      "- (D) Use only CNC machines"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.81",
    "type": "MCQ - 2M",
    "question": "Kanban system in lean manufacturing uses:",
    "options": [
      "- (A) Computer-only signals",
      "- (B) Visual cards/signals to trigger production/replenishment only when consumed (pull system)",
      "- (C) Push scheduling from ERP",
      "- (D) Automated delivery robots only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.82",
    "type": "NAT - 2M",
    "question": "Cycle time vs Takt time: Takt time = (available production time) / (customer demand). For 480 min/day and 240 units/day demand: Takt time?",
    "options": [],
    "answer": "Takt time = 480/240 = 2 min/unit."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.83",
    "type": "MCQ - 1M",
    "question": "GT (Group Technology) in manufacturing groups:",
    "options": [
      "- (A) Machines by age",
      "- (B) Similar parts into families based on design/manufacturing similarities (for efficient production cells)",
      "- (C) Workers by skill",
      "- (D) Products by price"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.84",
    "type": "NAT - 2M",
    "question": "A manufacturing cell with 3 machines in U-shape: what type of automation layout?",
    "options": [],
    "answer": "Cellular manufacturing layout (manufacturing cell) — allows one-piece flow and multi-machine operation by one operator."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.85",
    "type": "MCQ - 2M",
    "question": "CAD (Computer-Aided Design) files are converted to CNC programs through: --- ### SECTION D: ADDITIONAL CIM & QUALITY — 15 Questions",
    "options": [
      "- (A) Direct coding by operator",
      "- (B) CAM (Computer-Aided Manufacturing) software that generates toolpaths and post-processes to G-code",
      "- (C) PLC programming",
      "- (D) SCADA interface"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.86",
    "type": "MCQ - 1M",
    "question": "Poka-Yoke (mistake proofing) in manufacturing:",
    "options": [
      "- (A) Improves machine speed",
      "- (B) Designs physical/process constraints that prevent or detect errors before they become defects",
      "- (C) Reduces material cost",
      "- (D) Automates quality inspection only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.87",
    "type": "NAT - 2M",
    "question": "Six Sigma quality level allows how many defects per million opportunities (DPMO)?",
    "options": [],
    "answer": "3.4 DPMO."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.88",
    "type": "MCQ - 2M",
    "question": "SPC (Statistical Process Control) uses:",
    "options": [
      "- (A) MES software",
      "- (B) Control charts (X-bar, R, p charts) to monitor process variation and detect out-of-control states",
      "- (C) CMM measurement",
      "- (D) RFID tracking"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.89",
    "type": "NAT - 2M",
    "question": "CMM (Coordinate Measuring Machine) measures:",
    "options": [],
    "answer": "Part dimensions (X,Y,Z coordinates of surface points) with a probe, comparing to CAD nominal dimensions. Accuracy ~μm level."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.90",
    "type": "MCQ - 1M",
    "question": "ISO 9001 is:",
    "options": [
      "- (A) A CNC programming standard",
      "- (B) Quality Management System standard",
      "- (C) Safety standard for robots",
      "- (D) Material specification"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.91",
    "type": "NAT - 2M",
    "question": "3D printing (Additive Manufacturing) builds parts by:",
    "options": [],
    "answer": "Adding material layer-by-layer from a digital CAD model (opposite of subtractive machining)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.92",
    "type": "MCQ - 2M",
    "question": "SLA (Stereolithography) curing depth formula: Cd = Dp × ln(E_max/Ec). For Dp=0.125mm, E_max=80 mJ/cm², Ec=20 mJ/cm²: Cd?",
    "options": [],
    "answer": "Cd = 0.125 × ln(80/20) = 0.125 × ln(4) = 0.125 × 1.386 = 0.173 mm."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.93",
    "type": "MCQ - 1M",
    "question": "FDM (Fused Deposition Modeling) uses which material form?",
    "options": [
      "- (A) Liquid resin",
      "- (B) Polymer filament (extruded through heated nozzle)",
      "- (C) Metal powder",
      "- (D) Ceramic paste"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.94",
    "type": "NAT - 2M",
    "question": "SLS (Selective Laser Sintering) uses which energy source?",
    "options": [],
    "answer": "Laser (CO₂ or fiber laser) to selectively sinter powdered material (polymer, metal, ceramic)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.95",
    "type": "MCQ - 2M",
    "question": "Wire EDM (Electrical Discharge Machining) can machine:",
    "options": [
      "- (A) Only soft materials",
      "- (B) Any electrically conductive material regardless of hardness (by spark erosion)",
      "- (C) Only polymers",
      "- (D) Non-conductive ceramics"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.96",
    "type": "NAT - 2M",
    "question": "Rapid Prototyping reduces:",
    "options": [],
    "answer": "Product development time and cost by quickly creating physical prototypes from CAD models for design verification before tooling."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.97",
    "type": "MCQ - 1M",
    "question": "Cobots (collaborative robots) are designed to:",
    "options": [
      "- (A) Replace humans entirely",
      "- (B) Work safely alongside humans with force/speed limiting and collision detection",
      "- (C) Operate only in caged cells",
      "- (D) Never touch humans"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.98",
    "type": "NAT - 2M",
    "question": "ISO 10218 standard covers:",
    "options": [],
    "answer": "Safety requirements for industrial robots (and collaborative robots, along with ISO/TS 15066)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.99",
    "type": "MCQ - 2M",
    "question": "Vision-guided robot (bin-picking):",
    "options": [
      "- (A) Uses only encoders",
      "- (B) Uses 3D vision (structured light, stereo, ToF) to locate randomly placed parts in a bin",
      "- (C) Requires precise part placement",
      "- (D) Uses RFID for localization"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 5: CIM, PLCs & Auto-ID",
    "id": "5.100",
    "type": "NAT - 2M",
    "question": "The number of AGVs required: demand rate D=20 trips/hr, trip time Tc=12 min/trip (loaded+empty): N_AGV? --- *Module 5 Complete — 100 Questions*",
    "options": [],
    "answer": "N_AGV = (D × Tc) / 60 = (20 × 12)/60 = 240/60 = 4 AGVs."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.1",
    "type": "MCQ - 1M",
    "question": "What does the following output? ```python x = [1, 2, 3, 4, 5] print(x[1:4]) ```",
    "options": [
      "- (A) [1, 2, 3, 4]",
      "- (B) [2, 3, 4]",
      "- (C) [1, 2, 3]",
      "- (D) [2, 3, 4, 5]"
    ],
    "answer": "(B). Slice x[1:4] returns elements at indices 1,2,3 → [2,3,4]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.2",
    "type": "NAT - 2M",
    "question": "What is the output of `len([1, [2, 3], 4])`?",
    "options": [],
    "answer": "3 (the list has 3 top-level elements: 1, [2,3], 4)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.3",
    "type": "MCQ - 2M",
    "question": "Python dictionary `d = {'a':1, 'b':2, 'c':3}`. Output of `list(d.keys())`?",
    "options": [
      "- (A) [1, 2, 3]",
      "- (B) ['a', 'b', 'c']",
      "- (C) [('a',1), ('b',2), ('c',3)]",
      "- (D) ['a':1, 'b':2]"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.4",
    "type": "NAT - 2M",
    "question": "Output of: ```python x = [i**2 for i in range(5)] print(x) ```",
    "options": [],
    "answer": "[0, 1, 4, 9, 16]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.5",
    "type": "MCQ - 1M",
    "question": "Python is:",
    "options": [
      "- (A) Statically typed, compiled language",
      "- (B) Dynamically typed, interpreted language",
      "- (C) Statically typed, interpreted language",
      "- (D) Dynamically typed, compiled language"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.6",
    "type": "NAT - 2M",
    "question": "Output of: ```python a = (1, 2, 3) a[1] = 5 print(a) ```",
    "options": [],
    "answer": "TypeError — tuples are immutable; cannot assign to indices."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.7",
    "type": "MCQ - 2M",
    "question": "Which Python data structure is ordered, mutable, and allows duplicates?",
    "options": [
      "- (A) Set",
      "- (B) Tuple",
      "- (C) List",
      "- (D) Dictionary"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.8",
    "type": "NAT - 2M",
    "question": "`s = {1, 2, 2, 3, 3, 3}`. What is `len(s)`?",
    "options": [],
    "answer": "3 (sets store unique elements only: {1,2,3})."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.9",
    "type": "MCQ - 1M",
    "question": "Lambda function: `f = lambda x, y: x**2 + y`. What is `f(3, 4)`?",
    "options": [
      "- (A) 9",
      "- (B) 13",
      "- (C) 16",
      "- (D) 7"
    ],
    "answer": "(B). f(3,4) = 3²+4 = 9+4 = 13."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.10",
    "type": "NAT - 2M",
    "question": "Output of: ```python def f(n, acc=0): if n == 0: return acc return f(n-1, acc+n) print(f(5)) ```",
    "options": [],
    "answer": "15 (1+2+3+4+5=15, computed recursively)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.11",
    "type": "MCQ - 2M",
    "question": "`sorted([3,1,4,1,5,9,2,6], reverse=True)[:3]` gives:",
    "options": [
      "- (A) [1, 1, 2]",
      "- (B) [3, 4, 5]",
      "- (C) [9, 6, 5]",
      "- (D) [9, 5, 4]"
    ],
    "answer": "(C). Sorted descending: [9,6,5,4,3,2,1,1]. First 3: [9,6,5]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.12",
    "type": "NAT - 2M",
    "question": "`d = {}; d['x'] = 10; d['y'] = 20; print(d.get('z', 0))`:",
    "options": [],
    "answer": "0 (key 'z' not in dict, default=0 returned by .get())."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.13",
    "type": "MCQ - 1M",
    "question": "The `zip` function in Python:",
    "options": [
      "- (A) Compresses files",
      "- (B) Creates tuples from corresponding elements of multiple iterables",
      "- (C) Sorts lists",
      "- (D) Flattens nested lists"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.14",
    "type": "NAT - 2M",
    "question": "`list(zip([1,2,3],[4,5,6]))`:",
    "options": [],
    "answer": "[(1,4),(2,5),(3,6)]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.15",
    "type": "MCQ - 2M",
    "question": "`map(lambda x: x*2, [1,2,3,4])` returns:",
    "options": [
      "- (A) [1,2,3,4]",
      "- (B) Iterator of [2,4,6,8]",
      "- (C) [2,4,6,8] (direct list)",
      "- (D) Sum of doubled values"
    ],
    "answer": "(B). map() returns a map object (iterator), wrapping in list() gives [2,4,6,8]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.16",
    "type": "NAT - 2M",
    "question": "`filter(lambda x: x%2==0, range(10))` gives (as list):",
    "options": [],
    "answer": "[0,2,4,6,8]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.17",
    "type": "MCQ - 1M",
    "question": "Python `//` operator performs:",
    "options": [
      "- (A) Regular division",
      "- (B) Integer (floor) division",
      "- (C) Modulo",
      "- (D) Exponentiation"
    ],
    "answer": "(B). 7//2 = 3."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.18",
    "type": "NAT - 2M",
    "question": "Output of `2**10`:",
    "options": [],
    "answer": "1024."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.19",
    "type": "MCQ - 2M",
    "question": "`try/except/finally` in Python: `finally` block runs:",
    "options": [
      "- (A) Only if exception occurs",
      "- (B) Only if no exception occurs",
      "- (C) Always (whether or not exception occurs)",
      "- (D) Never (it is optional and skipped)"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.20",
    "type": "NAT - 2M",
    "question": "`[x for x in range(20) if x % 3 == 0 and x % 5 == 0]`:",
    "options": [],
    "answer": "[0, 15] (multiples of both 3 and 5 = multiples of 15, in range 0-19: 0,15)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.21",
    "type": "MCQ - 1M",
    "question": "`isinstance(3.14, (int, float))`:",
    "options": [
      "- (A) False",
      "- (B) True",
      "- (C) TypeError",
      "- (D) None"
    ],
    "answer": "(B). 3.14 is a float, which is in the tuple (int, float)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.22",
    "type": "NAT - 2M",
    "question": "Output of: `print('Robot' * 3)`:",
    "options": [],
    "answer": "RobotRobotRobot."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.23",
    "type": "MCQ - 2M",
    "question": "Python `*args` in a function definition:",
    "options": [
      "- (A) Accepts exactly 3 arguments",
      "- (B) Accepts variable number of positional arguments (as a tuple)",
      "- (C) Accepts keyword arguments only",
      "- (D) Makes all arguments optional"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.24",
    "type": "NAT - 2M",
    "question": "Output: ```python def outer(): x = 10 def inner(): return x + 5 return inner() print(outer()) ```",
    "options": [],
    "answer": "15 (closure: inner() accesses x=10 from outer scope)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.25",
    "type": "MCQ - 1M",
    "question": "Python `global` keyword:",
    "options": [
      "- (A) Creates a new variable",
      "- (B) Declares that a name inside a function refers to a global variable",
      "- (C) Makes a function global",
      "- (D) Imports a module globally"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.26",
    "type": "NAT - 2M",
    "question": "`list(range(1, 10, 2))`:",
    "options": [],
    "answer": "[1,3,5,7,9]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.27",
    "type": "MCQ - 2M",
    "question": "Which is the fastest data structure for O(1) average lookup by key?",
    "options": [
      "- (A) List",
      "- (B) Tuple",
      "- (C) Dictionary (hash map)",
      "- (D) Set (for key existence only)"
    ],
    "answer": "(C) and (D) both correct for O(1) lookup; but for key-value retrieval: (C) Dictionary."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.28",
    "type": "NAT - 2M",
    "question": "`d = {'a':1,'b':2,'c':3}; del d['b']; print(len(d))`:",
    "options": [],
    "answer": "2 (d = {'a':1,'c':3} after deletion)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.29",
    "type": "MCQ - 1M",
    "question": "Negative indexing in Python: `x = [10,20,30,40,50]`. `x[-2]`:",
    "options": [
      "- (A) 20",
      "- (B) 30",
      "- (C) 40",
      "- (D) 50"
    ],
    "answer": "(C). x[-2] = 40 (second from last)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.30",
    "type": "NAT - 2M",
    "question": "`'hello world'.split()`: --- ### SECTION B: TIME COMPLEXITY & RECURSION — 25 Questions",
    "options": [],
    "answer": "['hello', 'world'] (splits on whitespace by default)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.31",
    "type": "MCQ - 1M",
    "question": "Time complexity of linear search in unsorted list of n elements:",
    "options": [
      "- (A) O(1)",
      "- (B) O(log n)",
      "- (C) O(n)",
      "- (D) O(n²)"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.32",
    "type": "NAT - 2M",
    "question": "Time complexity of binary search on sorted array:",
    "options": [],
    "answer": "O(log n)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.33",
    "type": "MCQ - 2M",
    "question": "Bubble sort worst-case time complexity:",
    "options": [
      "- (A) O(n log n)",
      "- (B) O(n)",
      "- (C) O(n²)",
      "- (D) O(1)"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.34",
    "type": "NAT - 2M",
    "question": "What is `fun(4)` for: ```python def fun(n): if n <= 0: return 0 return n + fun(n-1) ```",
    "options": [],
    "answer": "4+3+2+1+0 = 10."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.35",
    "type": "MCQ - 1M",
    "question": "Merge sort time complexity (all cases):",
    "options": [
      "- (A) O(n²)",
      "- (B) O(n log n)",
      "- (C) O(n)",
      "- (D) O(log n)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.36",
    "type": "NAT - 2M",
    "question": "Fibonacci recursive function calls for fib(5) (naive recursion): how many total calls?",
    "options": [],
    "answer": "fib(5)=fib(4)+fib(3)=...; total calls = 15 (for n=5, T(n)=T(n-1)+T(n-2)+1, exponential growth)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.37",
    "type": "MCQ - 2M",
    "question": "Quick sort average time complexity:",
    "options": [
      "- (A) O(n²)",
      "- (B) O(n log n)",
      "- (C) O(n)",
      "- (D) O(log n)"
    ],
    "answer": "(B). Average O(n log n), worst O(n²)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.38",
    "type": "NAT - 2M",
    "question": "Output: ```python def f(n): if n <= 1: return 1 if n % 2 == 0: return f(n//2) + n else: return f(n-1) * 2 print(f(6)) ```",
    "options": [],
    "answer": "f(6): n=6 even → f(3)+6. f(3): n=3 odd → f(2)*2. f(2): even → f(1)+2=1+2=3. f(3)=3*2=6. f(6)=6+6=12."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.39",
    "type": "MCQ - 1M",
    "question": "Space complexity of recursive factorial function for n:",
    "options": [
      "- (A) O(1)",
      "- (B) O(n) (due to call stack)",
      "- (C) O(n²)",
      "- (D) O(log n)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.40",
    "type": "NAT - 2M",
    "question": "Tail recursion can be optimized to avoid stack overflow. What does Python NOT do by default?",
    "options": [],
    "answer": "Python does NOT perform Tail Call Optimization (TCO) — each recursive call creates a new stack frame regardless."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.41",
    "type": "MCQ - 2M",
    "question": "Tower of Hanoi with n=3 disks: minimum moves required?",
    "options": [
      "- (A) 6",
      "- (B) 7",
      "- (C) 8",
      "- (D) 9"
    ],
    "answer": "(B). Moves = 2ⁿ - 1 = 2³-1 = 7."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.42",
    "type": "NAT - 2M",
    "question": "For n=10 disks in Tower of Hanoi: minimum moves?",
    "options": [],
    "answer": "2¹⁰-1 = 1023 moves."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.43",
    "type": "MCQ - 1M",
    "question": "Dynamic programming (memoization) improves recursive Fibonacci from O(2ⁿ) to:",
    "options": [
      "- (A) O(n²)",
      "- (B) O(n log n)",
      "- (C) O(n)",
      "- (D) O(1)"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.44",
    "type": "NAT - 2M",
    "question": "Insertion sort: best-case (nearly sorted) time complexity?",
    "options": [],
    "answer": "O(n) — when list is already sorted, only n-1 comparisons needed."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.45",
    "type": "MCQ - 2M",
    "question": "Selection sort worst-case comparisons for n=5 elements:",
    "options": [
      "- (A) 5",
      "- (B) 10",
      "- (C) 20",
      "- (D) n(n-1)/2 = 10"
    ],
    "answer": "(D). n(n-1)/2 = 5×4/2 = 10 comparisons."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.46",
    "type": "NAT - 2M",
    "question": "Output: ```python nums = [1,2,3,4,5] result = list(filter(lambda x: x > 2, map(lambda x: x*2, nums))) print(result) ```",
    "options": [],
    "answer": "map doubles: [2,4,6,8,10]. filter>2: [4,6,8,10]."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.47",
    "type": "MCQ - 1M",
    "question": "`functools.reduce(lambda a,b: a*b, [1,2,3,4,5])`:",
    "options": [
      "- (A) 15",
      "- (B) 120",
      "- (C) [1,2,6,24,120]",
      "- (D) 5!"
    ],
    "answer": "(B). 1×2×3×4×5 = 120."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.48",
    "type": "NAT - 2M",
    "question": "Time complexity to check if a number is prime:",
    "options": [],
    "answer": "O(√n) (trial division up to square root of n)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.49",
    "type": "MCQ - 2M",
    "question": "The call stack for `factorial(5)` contains how many frames at deepest point?",
    "options": [
      "- (A) 1",
      "- (B) 5",
      "- (C) 6 (including factorial(0) or base case)",
      "- (D) 25"
    ],
    "answer": "(C). Frames: factorial(5)→factorial(4)→...→factorial(0) = 6 frames."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.50",
    "type": "NAT - 2M",
    "question": "Binary search: array [2,5,8,12,16,23,38,56,72,91], search for 23. How many comparisons (mid-point search)? --- ### SECTION C: STACKS, QUEUES & LINKED LISTS — 20 Questions",
    "options": [],
    "answer": "1st: mid=index4=16 (23>16)→right half. 2nd: mid=index7=56 (23<56)→left half. 3rd: mid=index5=23 FOUND. 3 comparisons."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.51",
    "type": "MCQ - 1M",
    "question": "Stack data structure follows:",
    "options": [
      "- (A) FIFO (First In First Out)",
      "- (B) LIFO (Last In First Out)",
      "- (C) Random access",
      "- (D) Priority order"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.52",
    "type": "NAT - 2M",
    "question": "Stack operations: push(1), push(2), push(3), pop(), push(4), pop(). What's on top of stack?",
    "options": [],
    "answer": "Stack after operations: push(1)→[1], push(2)→[1,2], push(3)→[1,2,3], pop→[1,2] (top=2), push(4)→[1,2,4], pop→[1,2]. Top = 2."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.53",
    "type": "MCQ - 2M",
    "question": "Queue data structure is used in:",
    "options": [
      "- (A) Function call stack",
      "- (B) BFS (Breadth-First Search) traversal",
      "- (C) DFS traversal",
      "- (D) Expression evaluation"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.54",
    "type": "NAT - 2M",
    "question": "Queue: enqueue(A), enqueue(B), enqueue(C), dequeue(), enqueue(D), dequeue(). Front element?",
    "options": [],
    "answer": "Queue: enqueue A→[A], B→[A,B], C→[A,B,C], dequeue→[B,C] (A removed), enqueue D→[B,C,D], dequeue→[C,D]. Front = C."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.55",
    "type": "MCQ - 1M",
    "question": "Python implementation of a stack using list:",
    "options": [
      "- (A) push = list.insert(0, x); pop = list.pop()",
      "- (B) push = list.append(x); pop = list.pop()",
      "- (C) push = list.append(x); pop = list.pop(0)",
      "- (D) push = list.insert(0, x); pop = list.pop(0)"
    ],
    "answer": "(B). append() adds to end (top), pop() removes from end (top) → LIFO."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.56",
    "type": "MCQ - 2M",
    "question": "A circular queue with capacity 5 is: [_, _, 10, 20, 30] with front=2, rear=4. After dequeue and enqueue(40): front, rear?",
    "options": [
      "- (A) front=2, rear=0",
      "- (B) front=3, rear=0",
      "- (C) front=3, rear=5",
      "- (D) front=2, rear=5"
    ],
    "answer": "(B). Dequeue: front moves 2→3. Enqueue(40): rear moves 4→0 (circular). front=3, rear=0."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.57",
    "type": "NAT - 2M",
    "question": "A deque (double-ended queue) supports push/pop from both ends in O(?) time?",
    "options": [],
    "answer": "O(1) time for all operations (using Python's `collections.deque`)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.58",
    "type": "MCQ - 1M",
    "question": "Singly linked list: deletion at the beginning has time complexity:",
    "options": [
      "- (A) O(n)",
      "- (B) O(1)",
      "- (C) O(log n)",
      "- (D) O(n²)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.59",
    "type": "NAT - 2M",
    "question": "Singly linked list: deletion at end (tail) without a tail pointer requires:",
    "options": [],
    "answer": "O(n) — must traverse entire list to find second-to-last node."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.60",
    "type": "MCQ - 2M",
    "question": "Priority queue (min-heap) dequeue operation returns:",
    "options": [
      "- (A) Last inserted element",
      "- (B) First inserted element",
      "- (C) Element with minimum priority value",
      "- (D) Random element"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.61",
    "type": "NAT - 2M",
    "question": "Python `heapq` module: `heapq.heappush(heap, item)` and `heapq.heappop(heap)` implement?",
    "options": [],
    "answer": "Min-heap operations — heappop() returns the smallest element."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.62",
    "type": "MCQ - 1M",
    "question": "A stack can be used to:",
    "options": [
      "- (A) Implement BFS",
      "- (B) Evaluate postfix expressions and implement DFS",
      "- (C) Sort in O(n log n)",
      "- (D) Implement FIFO scheduling"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.63",
    "type": "NAT - 2M",
    "question": "Postfix expression: `3 4 + 2 *`. Evaluate using a stack.",
    "options": [],
    "answer": "Push 3→[3], push 4→[3,4], +→pop 4,3, push 7→[7], push 2→[7,2], *→pop 2,7, push 14→[14]. Result = 14."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.64",
    "type": "MCQ - 2M",
    "question": "Infix to postfix conversion for `A + B * C`:",
    "options": [
      "- (A) A B C + *",
      "- (B) A B + C *",
      "- (C) A B C * +",
      "- (D) + A * B C"
    ],
    "answer": "(C). Precedence: * before +. Postfix: A B C * + (= A + (B*C))."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.65",
    "type": "NAT - 2M",
    "question": "A doubly linked list node has pointers to:",
    "options": [],
    "answer": "Both previous node (prev) and next node (next), plus the data field."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.66",
    "type": "MCQ - 1M",
    "question": "Which data structure provides O(1) access to any element by index?",
    "options": [
      "- (A) Linked list",
      "- (B) Array/List (Python list)",
      "- (C) Stack",
      "- (D) Queue"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.67",
    "type": "NAT - 2M",
    "question": "A queue implemented using two stacks: enqueue uses stack1, dequeue uses stack2. When stack2 is empty, dequeue does what?",
    "options": [],
    "answer": "Pops all elements from stack1 and pushes them onto stack2 (reverses order), then pops from stack2. Amortized O(1) per operation."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.68",
    "type": "MCQ - 2M",
    "question": "`collections.deque` in Python is implemented as:",
    "options": [
      "- (A) Array",
      "- (B) Doubly linked list (O(1) append/pop from both ends)",
      "- (C) Hash table",
      "- (D) Binary heap"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.69",
    "type": "NAT - 2M",
    "question": "Memory requirement for a linked list node with 1 integer data + 1 pointer (32-bit int, 64-bit pointer):",
    "options": [],
    "answer": "4 bytes (int) + 8 bytes (pointer) = 12 bytes per node (plus possible alignment padding = 16 bytes typically)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.70",
    "type": "MCQ - 1M",
    "question": "Circular linked list: last node's next pointer points to: --- ### SECTION D: TREES, GRAPHS, BFS & DFS — 25 Questions",
    "options": [
      "- (A) NULL",
      "- (B) The head (first) node",
      "- (C) The previous node",
      "- (D) Itself"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.71",
    "type": "MCQ - 1M",
    "question": "Binary Search Tree (BST) inorder traversal produces:",
    "options": [
      "- (A) Random order",
      "- (B) Sorted ascending order",
      "- (C) Reversed order",
      "- (D) Level-order"
    ],
    "answer": "(B). Inorder (left-root-right) of BST gives sorted ascending sequence."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.72",
    "type": "NAT - 2M",
    "question": "BST: insert elements [5, 3, 7, 1, 4]. Root is 5. What is the inorder traversal?",
    "options": [],
    "answer": "Inorder: 1, 3, 4, 5, 7 (sorted ascending)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.73",
    "type": "MCQ - 2M",
    "question": "BST search for a key: time complexity for balanced tree with n nodes?",
    "options": [
      "- (A) O(1)",
      "- (B) O(log n)",
      "- (C) O(n)",
      "- (D) O(n log n)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.74",
    "type": "NAT - 2M",
    "question": "A complete binary tree with 7 nodes has how many leaf nodes?",
    "options": [],
    "answer": "4 leaf nodes (last level of a complete binary tree with n=7: 4 leaves at level 3)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.75",
    "type": "MCQ - 1M",
    "question": "BFS (Breadth-First Search) uses which data structure?",
    "options": [
      "- (A) Stack",
      "- (B) Queue",
      "- (C) Priority queue",
      "- (D) Deque"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.76",
    "type": "NAT - 2M",
    "question": "DFS (Depth-First Search) uses which data structure (explicitly or implicitly)?",
    "options": [],
    "answer": "Stack (explicitly, or the program call stack for recursive DFS)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.77",
    "type": "MCQ - 2M",
    "question": "BFS on an unweighted graph gives:",
    "options": [
      "- (A) Minimum spanning tree",
      "- (B) Shortest path (minimum number of edges) from source",
      "- (C) Topological order",
      "- (D) Longest path"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.78",
    "type": "NAT - 2M",
    "question": "Graph: nodes {A,B,C,D}, edges {A-B, A-C, B-D, C-D}. BFS from A (alphabetical order for ties): visit order?",
    "options": [],
    "answer": "A → B,C (enqueue alphabetically) → D (via B, then C-D already visited). Order: A, B, C, D."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.79",
    "type": "MCQ - 1M",
    "question": "Time complexity of BFS/DFS for graph with V vertices and E edges:",
    "options": [
      "- (A) O(V)",
      "- (B) O(E)",
      "- (C) O(V + E)",
      "- (D) O(V × E)"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.80",
    "type": "NAT - 2M",
    "question": "Adjacency matrix representation of graph with n vertices: space complexity?",
    "options": [],
    "answer": "O(n²) — n×n matrix."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.81",
    "type": "MCQ - 2M",
    "question": "Adjacency list representation is preferred over adjacency matrix when:",
    "options": [
      "- (A) Graph is dense (many edges)",
      "- (B) Graph is sparse (few edges, E << V²)",
      "- (C) Fast edge existence queries are needed",
      "- (D) Graph has weighted edges only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.82",
    "type": "NAT - 2M",
    "question": "Dijkstra's algorithm finds:",
    "options": [],
    "answer": "Shortest path from a single source to all other vertices in a weighted graph (non-negative weights)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.83",
    "type": "MCQ - 1M",
    "question": "Topological sort is defined for:",
    "options": [
      "- (A) Undirected graphs",
      "- (B) Directed Acyclic Graphs (DAGs)",
      "- (C) Cyclic graphs",
      "- (D) Trees only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.84",
    "type": "NAT - 2M",
    "question": "A min-heap with elements [3,5,9,17,11]: extract minimum, then new root?",
    "options": [],
    "answer": "Extract min (3). Last element (11) moved to root, then heapify down. New root: 5."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.85",
    "type": "MCQ - 2M",
    "question": "Heap data structure: heapify operation after insertion has time complexity:",
    "options": [
      "- (A) O(1)",
      "- (B) O(log n)",
      "- (C) O(n)",
      "- (D) O(n log n)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.86",
    "type": "NAT - 2M",
    "question": "A height-balanced AVL tree: maximum height difference between left and right subtrees?",
    "options": [],
    "answer": "1 (balance factor |height(left) - height(right)| ≤ 1 for every node)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.87",
    "type": "MCQ - 1M",
    "question": "Python `collections.defaultdict` is used to:",
    "options": [
      "- (A) Sort a dictionary",
      "- (B) Provide a default value for missing keys automatically",
      "- (C) Reverse a dictionary",
      "- (D) Count elements"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.88",
    "type": "NAT - 2M",
    "question": "Python `collections.Counter({'a':3,'b':1,'c':2}).most_common(2)`:",
    "options": [],
    "answer": "[('a',3), ('c',2)] — top 2 most common elements."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.89",
    "type": "MCQ - 2M",
    "question": "A robot path-planning problem in a grid: finding shortest obstacle-free path is best solved by:",
    "options": [
      "- (A) DFS",
      "- (B) BFS (guarantees shortest path in unweighted grid)",
      "- (C) Insertion sort",
      "- (D) Binary search"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.90",
    "type": "NAT - 2M",
    "question": "A* algorithm for path planning uses: f(n) = g(n) + h(n). What are g(n) and h(n)?",
    "options": [],
    "answer": "g(n) = actual cost from start to node n; h(n) = heuristic estimate of cost from n to goal."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.91",
    "type": "MCQ - 1M",
    "question": "Kruskal's algorithm finds:",
    "options": [
      "- (A) Shortest path",
      "- (B) Minimum Spanning Tree (MST)",
      "- (C) Topological order",
      "- (D) Strongly connected components"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.92",
    "type": "NAT - 2M",
    "question": "For numpy array: `import numpy as np; a = np.array([[1,2],[3,4]]); print(a.T)`:",
    "options": [],
    "answer": "[[1,3],[2,4]] (transpose of 2×2 matrix)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.93",
    "type": "MCQ - 2M",
    "question": "NumPy operation: `np.dot(A, B)` where A is (3×2) and B is (2×4):",
    "options": [
      "- (A) Error (incompatible shapes)",
      "- (B) Result shape (3×4)",
      "- (C) Result shape (2×2)",
      "- (D) Result shape (3×2)"
    ],
    "answer": "(B). Matrix multiply (3×2)×(2×4) = (3×4)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.94",
    "type": "NAT - 2M",
    "question": "`np.linalg.det(np.array([[1,2],[3,4]]))`:",
    "options": [],
    "answer": "det = 1×4 - 2×3 = 4-6 = -2."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.95",
    "type": "MCQ - 1M",
    "question": "Python OOP: which method is called when an object is created?",
    "options": [
      "- (A) __str__",
      "- (B) __init__",
      "- (C) __del__",
      "- (D) __repr__"
    ],
    "answer": "(B). __init__ is the constructor."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.96",
    "type": "NAT - 2M",
    "question": "Output: ```python class Robot: count = 0 def __init__(self): Robot.count += 1 r1 = Robot() r2 = Robot() r3 = Robot() print(Robot.count) ```",
    "options": [],
    "answer": "3 (class attribute count incremented with each instance creation)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.97",
    "type": "MCQ - 2M",
    "question": "Python inheritance: `class Cobot(Robot)`: Cobot is the:",
    "options": [
      "- (A) Parent class",
      "- (B) Child/Derived class",
      "- (C) Interface",
      "- (D) Abstract class"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.98",
    "type": "NAT - 2M",
    "question": "`[0]*5` in Python creates:",
    "options": [],
    "answer": "[0, 0, 0, 0, 0] (list of 5 zeros)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.99",
    "type": "MCQ - 1M",
    "question": "Python `enumerate(['a','b','c'])` gives:",
    "options": [
      "- (A) [0,1,2]",
      "- (B) Iterator of (index, value) pairs: (0,'a'),(1,'b'),(2,'c')",
      "- (C) Dictionary",
      "- (D) Set of characters"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 6: Python & Data Structures",
    "id": "6.100",
    "type": "NAT - 2M",
    "question": "Output: ```python import functools print(functools.reduce(lambda a,b: a+b, range(1,6))) ``` --- *Module 6 Complete — 100 Questions*",
    "options": [],
    "answer": "1+2+3+4+5 = 15."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.1",
    "type": "NAT",
    "question": "Rank of $\\begin{bmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{bmatrix}$?",
    "options": [],
    "answer": "2."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.2",
    "type": "MCQ",
    "question": "Square matrix A is invertible iff det(A)=?",
    "options": [
      "- (A) 0  (B) ≠0  (C) 1  (D) ∞"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.3",
    "type": "NAT",
    "question": "det$\\begin{bmatrix}2&1\\\\4&3\\end{bmatrix}$=?",
    "options": [],
    "answer": "6-4=2."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.4",
    "type": "MCQ",
    "question": "Eigenvalues of $\\begin{bmatrix}3&1\\\\0&5\\end{bmatrix}$?",
    "options": [
      "- (A) 2,4  (B) 3,5  (C) 0,8  (D) 1,3"
    ],
    "answer": "(B). Upper triangular: diagonal = eigenvalues."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.5",
    "type": "NAT",
    "question": "For 3x3 matrix with eigenvalues {2,3,-1}: det(A)=?",
    "options": [],
    "answer": "2x3x(-1)=-6."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.6",
    "type": "NAT",
    "question": "Trace of $\\begin{bmatrix}4&1&0\\\\2&3&1\\\\0&2&5\\end{bmatrix}$?",
    "options": [],
    "answer": "4+3+5=12."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.7",
    "type": "MCQ",
    "question": "A matrix with trace=7 and eigenvalues λ1,λ2 (2x2): λ1+λ2=?",
    "options": [
      "- (A) 7  (B) 14  (C) 49  (D) 3.5"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.8",
    "type": "NAT",
    "question": "Eigenvalues of symmetric matrix A=Aᵀ are always:",
    "options": [],
    "answer": "Real."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.9",
    "type": "MCQ",
    "question": "Positive definite matrix has all eigenvalues:",
    "options": [
      "- (A) ≤0  (B) >0  (C) =0  (D) mixed"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.10",
    "type": "NAT",
    "question": "Solve 2x+3y=7, x-y=1: x=?",
    "options": [],
    "answer": "x=2, y=1. (From x=1+y: 2(1+y)+3y=7→y=1, x=2.)"
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.11",
    "type": "MCQ",
    "question": "Rank of $\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{bmatrix}$?",
    "options": [
      "- (A) 0  (B) 1  (C) 2  (D) 3"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.12",
    "type": "NAT",
    "question": "4x4 matrix with rank 3: nullity=?",
    "options": [],
    "answer": "4-3=1."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.13",
    "type": "NAT",
    "question": "Eigenvalues of $\\begin{bmatrix}0&1\\\\-2&-3\\end{bmatrix}$?",
    "options": [],
    "answer": "r²+3r+2=0 → r=-1,-2."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.14",
    "type": "MCQ",
    "question": "LU decomposition solves Ax=b via:",
    "options": [
      "- (A) A⁻¹b  (B) Forward+back sub  (C) Gauss-Jordan  (D) Cramer"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.15",
    "type": "NAT",
    "question": "SVD: A=UΣVᵀ. A⁺=?",
    "options": [],
    "answer": "VΣ⁺Uᵀ."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.16",
    "type": "NAT",
    "question": "det(2A) for 3x3 with det(A)=5?",
    "options": [],
    "answer": "2³×5=40."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.17",
    "type": "MCQ",
    "question": "det(rotation matrix R)=?",
    "options": [
      "- (A) -1  (B) 0  (C) +1  (D) varies"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.18",
    "type": "NAT",
    "question": "Eigenvalues of $R_z(\\theta)$ (2x2 rotation matrix)?",
    "options": [],
    "answer": "e^{±iθ}=cosθ±i sinθ."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.19",
    "type": "MCQ",
    "question": "Gram-Schmidt converts linearly independent vectors to:",
    "options": [
      "- (A) Sorted vectors  (B) Orthonormal basis  (C) Eigenvectors  (D) Singular vectors"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.20",
    "type": "NAT",
    "question": "For overdetermined Ax≈b: normal equations?",
    "options": [],
    "answer": "AᵀAx=Aᵀb."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.21",
    "type": "MCQ",
    "question": "Skew-symmetric matrix S satisfies:",
    "options": [
      "- (A) S=Sᵀ  (B) S=-Sᵀ  (C) S²=I  (D) det(S)=1"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.22",
    "type": "NAT",
    "question": "For 2x2 matrix: trace=5, det=6 → eigenvalues?",
    "options": [],
    "answer": "λ1+λ2=5, λ1λ2=6 → λ=2,3."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.23",
    "type": "MCQ",
    "question": "Characteristic polynomial of $\\begin{bmatrix}5&-2\\\\1&2\\end{bmatrix}$?",
    "options": [
      "- (A) λ²-7λ+12  (B) λ²+7λ+12  (C) λ²-5λ+10  (D) λ²+3λ-4"
    ],
    "answer": "(A). (λ-5)(λ-2)+2=λ²-7λ+12."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.24",
    "type": "NAT",
    "question": "Eigenvectors of distinct eigenvalues of symmetric matrix are:",
    "options": [],
    "answer": "Orthogonal."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.25",
    "type": "NAT",
    "question": "$\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}^5$?",
    "options": [],
    "answer": "$\\begin{bmatrix}32&0\\\\0&243\\end{bmatrix}$."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.26",
    "type": "MCQ",
    "question": "For Ax=b unique solution: rank(A)=?",
    "options": [
      "- (A) rank([A|b]) and =n  (B) m  (C) 0  (D) m+n"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.27",
    "type": "NAT",
    "question": "$\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}^{-1}$?",
    "options": [],
    "answer": "(1/det)×adj = (1/(-2))×$\\begin{bmatrix}4&-2\\\\-3&1\\end{bmatrix}$ = $\\begin{bmatrix}-2&1\\\\1.5&-0.5\\end{bmatrix}$."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.28",
    "type": "MCQ",
    "question": "For diagonalizable A=PDP⁻¹: A³=?",
    "options": [
      "- (A) 3PDP⁻¹  (B) PD³P⁻¹  (C) P³D  (D) D³"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.29",
    "type": "NAT",
    "question": "Frobenius norm of $\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$?",
    "options": [],
    "answer": "√(1+4+9+16)=√30≈5.477."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.30",
    "type": "MCQ",
    "question": "For redundant robot (n>6): minimum-norm solution q̇=? ### PART 2: CALCULUS (50 Questions)",
    "options": [
      "- (A) J⁻¹ẋ  (B) J⁺ẋ=Jᵀ(JJᵀ)⁻¹ẋ  (C) (JᵀJ)⁻¹Jᵀẋ  (D) 0"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.31",
    "type": "NAT",
    "question": "lim(x→0) sinx/x=?",
    "options": [],
    "answer": "1."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.32",
    "type": "MCQ",
    "question": "d/dx[ln(cosx)]=?",
    "options": [
      "- (A) tanx  (B) -tanx  (C) cotx  (D) secx"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.33",
    "type": "NAT",
    "question": "∫(0 to π/2) sinx dx=?",
    "options": [],
    "answer": "1."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.34",
    "type": "MCQ",
    "question": "Critical point of f(x,y)=x²+y²-2x-4y+5?",
    "options": [
      "- (A) (2,2)  (B) (1,2)  (C) (0,0)  (D) (-1,-2)"
    ],
    "answer": "(B). ∂f/∂x=2x-2=0→x=1; ∂f/∂y=2y-4=0→y=2."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.35",
    "type": "NAT",
    "question": "Taylor series of eˣ to 4th term: 1+x+x²/2!+?",
    "options": [],
    "answer": "x³/3! = x³/6."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.36",
    "type": "MCQ",
    "question": "d/dx[arctan(x)]=?",
    "options": [
      "- (A) tanx  (B) 1/(1+x²)  (C) 1/√(1-x²)  (D) -1/(1+x²)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.37",
    "type": "NAT",
    "question": "∫xe^x dx=?",
    "options": [],
    "answer": "e^x(x-1)+C."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.38",
    "type": "MCQ",
    "question": "lim(x→∞) x²/eˣ=?",
    "options": [
      "- (A) ∞  (B) 1  (C) 0  (D) e"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.39",
    "type": "NAT",
    "question": "∫∫(0 to 1)(0 to 1) (x+y)dxdy=?",
    "options": [],
    "answer": "1."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.40",
    "type": "MCQ",
    "question": "L'Hôpital applies for form:",
    "options": [
      "- (A) 0/0 or ∞/∞  (B) 1/0  (C) ∞-∞ only  (D) 0×∞ only"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.41",
    "type": "NAT",
    "question": "lim(x→0) (1-cosx)/x²=?",
    "options": [],
    "answer": "1/2."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.42",
    "type": "MCQ",
    "question": "Chain rule: d/dt[f(g(t))]=?",
    "options": [
      "- (A) f'(t)+g'(t)  (B) f'(g(t))·g'(t)  (C) f(g'(t))  (D) f'(t)·g(t)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.43",
    "type": "NAT",
    "question": "Max of f(x)=-x²+4x-3?",
    "options": [],
    "answer": "At x=2: f(2)=1."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.44",
    "type": "MCQ",
    "question": "Taylor series of sinx to x⁵:",
    "options": [
      "- (A) x-x³/6+x⁵/120  (B) 1-x²/2+x⁴/24  (C) x+x³/6  (D) 1+x+x²/2"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.45",
    "type": "NAT",
    "question": "∂/∂x[x²y+e^{xy}]=?",
    "options": [],
    "answer": "2xy+ye^{xy}."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.46",
    "type": "MCQ",
    "question": "Rolle's theorem: if f(a)=f(b), then ∃c with:",
    "options": [
      "- (A) f(c)=0  (B) f'(c)=0  (C) f''(c)=0  (D) f(c)=f(a)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.47",
    "type": "NAT",
    "question": "∫(0 to π) sin²x dx=?",
    "options": [],
    "answer": "π/2."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.48",
    "type": "MCQ",
    "question": "Directional derivative of f=x²+y² at (1,1) in direction (1,1)/√2:",
    "options": [
      "- (A) 2  (B) 2√2  (C) 4  (D) √2"
    ],
    "answer": "(B). ∇f=(2,2)·(1/√2,1/√2)=4/√2=2√2."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.49",
    "type": "NAT",
    "question": "∫(0 to 3)x² dx=?",
    "options": [],
    "answer": "9."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.50",
    "type": "MCQ",
    "question": "Second derivative test: D>0 and fxx<0 →",
    "options": [
      "- (A) Min  (B) Saddle  (C) Max  (D) Inflection"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.51",
    "type": "NAT",
    "question": "lim(n→∞)(1+1/n)ⁿ=?",
    "options": [],
    "answer": "e≈2.718."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.52",
    "type": "MCQ",
    "question": "∇²f for f=x²+y²+z²?",
    "options": [
      "- (A) 0  (B) 2x+2y+2z  (C) 6  (D) 2(x²+y²+z²)"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.53",
    "type": "NAT",
    "question": "∫1/(x²+1)dx=?",
    "options": [],
    "answer": "arctan(x)+C."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.54",
    "type": "MCQ",
    "question": "Mean Value Theorem guarantees c∈(a,b) with:",
    "options": [
      "- (A) f(c)=0  (B) f'(c)=(f(b)-f(a))/(b-a)  (C) f'(c)=0  (D) f(c)=(f(a)+f(b))/2"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.55",
    "type": "NAT",
    "question": "∫xe^{x²}dx=?",
    "options": [],
    "answer": "(1/2)e^{x²}+C."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.56",
    "type": "MCQ",
    "question": "dy/dx for x²+y²=25?",
    "options": [
      "- (A) x/y  (B) -x/y  (C) y/x  (D) -y/x"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.57",
    "type": "NAT",
    "question": "Volume of sphere radius r?",
    "options": [],
    "answer": "4πr³/3."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.58",
    "type": "MCQ",
    "question": "∫sec²x dx=?",
    "options": [
      "- (A) tanx+C  (B) secx tanx+C  (C) -cotx+C  (D) 2secx+C"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.59",
    "type": "NAT",
    "question": "For robot path p(t)=(t²,2t,t³): velocity at t=1?",
    "options": [],
    "answer": "ṗ=(2t,2,3t²)=(2,2,3) m/s."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.60",
    "type": "MCQ",
    "question": "Lagrange multiplier condition for constrained optimization max f subject to g=c: --- ### PART 3: VECTOR CALCULUS (20 Questions)",
    "options": [
      "- (A) ∇f=0  (B) ∇f=λ∇g  (C) ∇g=0  (D) f=λg"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.61",
    "type": "MCQ",
    "question": "∇f points in direction of:",
    "options": [
      "- (A) Max decrease  (B) Max increase (steepest ascent)  (C) Zero change  (D) Saddle"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.62",
    "type": "NAT",
    "question": "∇·F for F=(x²,y²,z²)?",
    "options": [],
    "answer": "2x+2y+2z."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.63",
    "type": "MCQ",
    "question": "Curl of conservative field F=∇φ:",
    "options": [
      "- (A) ∇φ  (B) Zero  (C) ∇²φ  (D) Non-zero"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.64",
    "type": "NAT",
    "question": "Gauss Divergence Theorem: ∯F·dS=?",
    "options": [],
    "answer": "∭(∇·F)dV."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.65",
    "type": "MCQ",
    "question": "Stokes' Theorem: ∮F·dr=?",
    "options": [
      "- (A) ∬F·dS  (B) ∬(∇×F)·dS  (C) ∭∇·FdV  (D) ∮∇F·dr"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.66",
    "type": "NAT",
    "question": "Div of F=(x,y,z)?",
    "options": [],
    "answer": "3."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.67",
    "type": "MCQ",
    "question": "Irrotational vector field has:",
    "options": [
      "- (A) ∇·F=0  (B) ∇×F=0  (C) |F|=const  (D) F·r=0"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.68",
    "type": "NAT",
    "question": "Solenoidal (incompressible) field satisfies?",
    "options": [],
    "answer": "∇·F=0."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.69",
    "type": "MCQ",
    "question": "Harmonic function satisfies:",
    "options": [
      "- (A) ∇f=0  (B) ∇²f=0  (C) ∇×f=0  (D) ∇f=1"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.70",
    "type": "NAT",
    "question": "For conservative field: work done in closed loop=?",
    "options": [],
    "answer": "Zero."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.71",
    "type": "MCQ",
    "question": "Cross product a×b is:",
    "options": [
      "- (A) Parallel to a,b  (B) Perpendicular to both  (C) Scalar  (D) Zero"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.72",
    "type": "NAT",
    "question": "Jacobian for polar to Cartesian (r,θ)→(x,y)?",
    "options": [],
    "answer": "J=r. So dA=r dr dθ."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.73",
    "type": "MCQ",
    "question": "Spherical coordinates Jacobian?",
    "options": [
      "- (A) r²  (B) r²sinθ  (C) r sinθ  (D) r²cosθ"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.74",
    "type": "NAT",
    "question": "Conservative field condition: F=(∂φ/∂x, ∂φ/∂y) → ∂Fy/∂x=?",
    "options": [],
    "answer": "∂Fx/∂y (equality of mixed partials = conservative condition)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.75",
    "type": "MCQ",
    "question": "Flux of F=(x,y,z) through unit sphere (outward):",
    "options": [
      "- (A) 4π/3  (B) 4π  (C) 12π  (D) 0"
    ],
    "answer": "(B). Div=3; ∭3dV=3×(4π/3)=4π."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.76",
    "type": "NAT",
    "question": "Directional derivative of f=x²+y²+z² at (1,1,1) in (1,1,1)/√3?",
    "options": [],
    "answer": "∇f=(2,2,2)·(1,1,1)/√3=6/√3=2√3≈3.46."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.77",
    "type": "MCQ",
    "question": "Green's theorem (2D): ∮C(Pdx+Qdy)=?",
    "options": [
      "- (A) ∬D(P+Q)dA  (B) ∬D(∂Q/∂x-∂P/∂y)dA  (C) ∬D∇·FdA  (D) ∮D F·dr"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.78",
    "type": "NAT",
    "question": "Curl of F=(y,-x,0)?",
    "options": [],
    "answer": "(0,0,-2)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.79",
    "type": "MCQ",
    "question": "Work done by force along closed path in conservative field:",
    "options": [
      "- (A) Maximum  (B) Minimum  (C) Zero  (D) Depends on path"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.80",
    "type": "NAT",
    "question": "∫∫D dA for unit disk (0≤r≤1)? --- ### PART 4: DIFFERENTIAL EQUATIONS (20 Questions)",
    "options": [],
    "answer": "π (area of unit disk)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.81",
    "type": "MCQ",
    "question": "Integrating factor for y'+P(x)y=Q(x)?",
    "options": [
      "- (A) e^∫Pdx  (B) ∫Pdx  (C) P(x)  (D) Q(x)/P(x)"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.82",
    "type": "NAT",
    "question": "Solve y'+2y=4, y(0)=1: y(x)=?",
    "options": [],
    "answer": "y=2-e^{-2x}."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.83",
    "type": "MCQ",
    "question": "Characteristic equation of y''+3y'+2y=0?",
    "options": [
      "- (A) r²+2r+3=0  (B) r²+3r+2=0  (C) r²-3r+2=0  (D) r²+r+1=0"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.84",
    "type": "NAT",
    "question": "General solution of y''-5y'+6y=0?",
    "options": [],
    "answer": "y=C₁e^{2x}+C₂e^{3x}."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.85",
    "type": "MCQ",
    "question": "Repeated roots r=r₁ (double): general solution?",
    "options": [
      "- (A) C₁e^{r₁x}+C₂e^{r₂x}  (B) (C₁+C₂x)e^{r₁x}  (C) C₁sin+C₂cos  (D) C₁e^{r₁x}"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.86",
    "type": "NAT",
    "question": "ODE y''+4y=0: roots and solution?",
    "options": [],
    "answer": "r=±2i. y=C₁cos2x+C₂sin2x."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.87",
    "type": "MCQ",
    "question": "L{e^{at}}=?",
    "options": [
      "- (A) 1/(s-a)  (B) 1/(s+a)  (C) s/(s-a)  (D) a/s"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.88",
    "type": "MCQ",
    "question": "L{sin(ωt)}=?",
    "options": [
      "- (A) ω/(s²+ω²)  (B) s/(s²+ω²)  (C) 1/(s+ω)  (D) ω/(s²-ω²)"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.89",
    "type": "NAT",
    "question": "L{tⁿ}=?",
    "options": [],
    "answer": "n!/s^{n+1}."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.90",
    "type": "MCQ",
    "question": "First shifting theorem: L{e^{at}f(t)}=?",
    "options": [
      "- (A) F(s+a)  (B) F(s-a)  (C) e^{as}F(s)  (D) aF(s)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.91",
    "type": "NAT",
    "question": "Transfer function H(s) for y''+3y'+2y=u?",
    "options": [],
    "answer": "H(s)=1/(s²+3s+2)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.92",
    "type": "MCQ",
    "question": "Poles of H(s)=1/[(s+1)(s+2)]: stable?",
    "options": [
      "- (A) Yes (poles at -1,-2 in left half-plane)  (B) No  (C) Marginally stable  (D) Unstable"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.93",
    "type": "MCQ",
    "question": "L⁻¹{2/[(s+1)(s+3)]}=?",
    "options": [
      "- (A) e^{-t}+e^{-3t}  (B) e^{-t}-e^{-3t}  (C) e^{-2t}  (D) 2e^{-t}"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.94",
    "type": "NAT",
    "question": "Exact ODE condition: Mdx+Ndy=0 exact when?",
    "options": [],
    "answer": "∂M/∂y=∂N/∂x."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.95",
    "type": "MCQ",
    "question": "Bayes' theorem: P(A|B)=?",
    "options": [
      "- (A) P(B|A)  (B) P(B|A)P(A)/P(B)  (C) P(A)P(B)  (D) P(A)/P(B)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.96",
    "type": "NAT",
    "question": "Poisson mean and variance with rate λ?",
    "options": [],
    "answer": "Both equal λ."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.97",
    "type": "MCQ",
    "question": "Newton-Raphson: x_{n+1}=?",
    "options": [
      "- (A) x_n-f/f'  (B) x_n+f  (C) x_n/f'  (D) (x_n+x_{n-1})/2"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.98",
    "type": "NAT",
    "question": "Simpson's 1/3 rule: I=(h/3)[f₀+4f₁+f₂], h=0.5. Approximate ∫(0 to 1)x²dx?",
    "options": [],
    "answer": "(0.5/3)[0+4(0.25)+1]=(0.5/3)(2)=1/3≈0.333. Exact!"
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.99",
    "type": "MCQ",
    "question": "Normal distribution: μ±2σ contains approximately:",
    "options": [
      "- (A) 68%  (B) 95%  (C) 99.7%  (D) 90%"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 7: Engineering Mathematics",
    "id": "7.100",
    "type": "NAT",
    "question": "Variance of B(n=10,p=0.4)? --- *Module 7 Complete — 100 Questions*",
    "options": [],
    "answer": "np(1-p)=10×0.4×0.6=2.4."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.1",
    "type": "MCQ - 1M",
    "question": "Kirchhoff's Current Law (KCL) at a circuit node is a direct mathematical consequence of which conservation law?",
    "options": [
      "- (A) Conservation of Energy",
      "- (B) Conservation of Electric Charge",
      "- (C) Conservation of Linear Momentum",
      "- (D) Conservation of Magnetic Flux"
    ],
    "answer": "(B). KCL ($\\sum I = 0$) states that electric charge cannot accumulate indefinitely at a junction; rate of charge entering equals rate of charge leaving."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.2",
    "type": "MCQ - 1M",
    "question": "Kirchhoff's Voltage Law (KVL) around any closed loop in a lumped parameter circuit is based on:",
    "options": [
      "- (A) Conservation of Momentum",
      "- (B) Conservation of Electric Charge",
      "- (C) Conservation of Energy",
      "- (D) Newton's Third Law"
    ],
    "answer": "(C). Total work done per unit charge moving around a closed path in a conservative electric field is zero ($\\oint \\vec{E} \\cdot d\\vec{l} = 0 \\implies \\sum V = 0$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.3",
    "type": "NAT - 2M",
    "question": "Three resistors of values $4\\,\\Omega, 6\\,\\Omega,$ and $12\\,\\Omega$ are connected in parallel across an ideal $24\\text{ V}$ DC voltage source. What is the total current (in A) supplied by the source?",
    "options": [],
    "answer": "12. Equivalent resistance: $1/R_{eq} = 1/4 + 1/6 + 1/12 = (3+2+1)/12 = 6/12 \\implies R_{eq} = 2\\,\\Omega$. Total current $I = V / R_{eq} = 24 / 2 = 12\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.4",
    "type": "NAT - 2M",
    "question": "A node has four branches. Currents entering the node are $I_1 = 3\\text{ A}$ and $I_2 = 5\\text{ A}$. Currents leaving are $I_3 = 2\\text{ A}$ and $I_4$. What is the magnitude of $I_4$ (in A)?",
    "options": [],
    "answer": "6. By KCL: $\\sum I_{\\text{in}} = \\sum I_{\\text{out}} \\implies 3 + 5 = 2 + I_4 \\implies I_4 = 6\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.5",
    "type": "MCQ - 2M",
    "question": "A dependent voltage source is specified as $V_s = 5 \\cdot I_x$, where $I_x$ is a current elsewhere in the circuit. This source is classified as a:",
    "options": [
      "- (A) Voltage-Controlled Voltage Source (VCVS)",
      "- (B) Current-Controlled Voltage Source (CCVS)",
      "- (C) Current-Controlled Current Source (CCCS)",
      "- (D) Voltage-Controlled Current Source (VCCS)"
    ],
    "answer": "(B). The output is a voltage whose magnitude is controlled by a current ($I_x$); therefore it is a CCVS with transresistance gain of $5\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.6",
    "type": "NAT - 2M",
    "question": "In a single-loop circuit, an ideal $20\\text{ V}$ DC source is in series with a $2\\,\\Omega$ resistor and a dependent source $2 V_x$ opposing the source. If $V_x$ is the voltage drop across the $2\\,\\Omega$ resistor with current flowing in loop direction, what is the loop current (in A)?",
    "options": [],
    "answer": "3.33. KVL: $20 - 2I - 2V_x = 0$. Since $V_x = 2I$, we have $20 - 2I - 2(2I) = 0 \\implies 20 - 6I = 0 \\implies I = 20/6 = 3.33\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.7",
    "type": "MCQ - 1M",
    "question": "An ideal independent current source has an internal resistance of:",
    "options": [
      "- (A) Zero",
      "- (B) Infinite ($\\infty$)",
      "- (C) $1\\,\\Omega$",
      "- (D) Negative"
    ],
    "answer": "(B). An ideal current source maintains a constant current regardless of terminal voltage, which requires infinite internal parallel resistance."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.8",
    "type": "NAT - 2M",
    "question": "A planar circuit has $B = 8$ branches and $N = 5$ nodes. How many independent KVL mesh equations are required to solve the circuit?",
    "options": [],
    "answer": "4. Number of independent loops / mesh equations $L = B - N + 1 = 8 - 5 + 1 = 4$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.9",
    "type": "NAT - 2M",
    "question": "A planar circuit has 6 nodes. How many independent node-voltage KCL equations are required to solve the circuit completely?",
    "options": [],
    "answer": "5. With 6 nodes, choosing 1 reference ground node leaves $N - 1 = 6 - 1 = 5$ non-reference node voltage equations."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.10",
    "type": "MCQ - 2M",
    "question": "When a circuit contains an ideal voltage source connected directly between two non-reference nodes with no series resistor, the standard nodal analysis technique to handle this is:",
    "options": [
      "- (A) Convert the voltage source to a current source",
      "- (B) Form a Supernode enclosing the two nodes and the voltage source",
      "- (C) Ignore the voltage source",
      "- (D) Use mesh analysis only"
    ],
    "answer": "(B). A Supernode is formed by enclosing the ideal voltage source and the two adjacent nodes inside a generalized boundary, applying KCL across the boundary and using the source relation $V_1 - V_2 = V_s$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.11",
    "type": "NAT - 2M",
    "question": "In a circuit, node A is at $12\\text{ V}$ and node B is at $4\\text{ V}$. They are connected by an $8\\,\\Omega$ resistor. What is the current (in A) flowing from node A to node B?",
    "options": [],
    "answer": "1. Current $I_{AB} = (V_A - V_B) / R = (12 - 4) / 8 = 8/8 = 1\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.12",
    "type": "MCQ - 1M",
    "question": "An inductor of inductance $L = 2\\text{ H}$ has a current passing through it given by $i(t) = 3t^2\\text{ A}$. The induced EMF across the inductor at $t = 2\\text{ s}$ is:",
    "options": [
      "- (A) $12\\text{ V}$",
      "- (B) $24\\text{ V}$",
      "- (C) $48\\text{ V}$",
      "- (D) $6\\text{ V}$"
    ],
    "answer": "(B). $v_L(t) = L \frac{di}{dt} = 2 \\times \frac{d}{dt}(3t^2) = 2 \\times (6t) = 12t$. At $t = 2\\text{ s}$, $v_L = 12 \\times 2 = 24\\text{ V}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.13",
    "type": "NAT - 2M",
    "question": "A $10\\,\\mu\\text{F}$ capacitor is charged with a constant current of $2\\text{ mA}$ for $5\\text{ ms}$. If the initial capacitor voltage was $0\\text{ V}$, what is the final voltage (in V)?",
    "options": [],
    "answer": "1. $V = \frac{1}{C} \\int I dt = \frac{I \\cdot \\Delta t}{C} = \frac{2 \\times 10^{-3} \\times 5 \\times 10^{-3}}{10 \\times 10^{-6}} = \frac{10 \\times 10^{-6}}{10 \\times 10^{-6}} = 1\\text{ V}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.14",
    "type": "MCQ - 1M",
    "question": "In an ideal inductor, which of the following physical quantities cannot change discontinuously (instantaneously)?",
    "options": [
      "- (A) Terminal voltage",
      "- (B) Magnetic flux linkage / Current",
      "- (C) Electric charge",
      "- (D) Reluctance"
    ],
    "answer": "(B). An instantaneous change in inductor current would require $\frac{di}{dt} = \\infty \\implies v_L = \\infty$, which represents infinite power. Thus $i_L(0^+) = i_L(0^-)$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.15",
    "type": "MCQ - 1M",
    "question": "Across an ideal capacitor, which quantity cannot change instantaneously?",
    "options": [
      "- (A) Current",
      "- (B) Voltage",
      "- (C) Displacement current",
      "- (D) Electric flux density"
    ],
    "answer": "(B). Instantaneous voltage change requires $\frac{dv_C}{dt} = \\infty \\implies i_C = \\infty$, so $v_C(0^+) = v_C(0^-)$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.16",
    "type": "NAT - 2M",
    "question": "Two coupled coils have self-inductances $L_1 = 4\\text{ mH}$ and $L_2 = 9\\text{ mH}$. If the coefficient of coupling is $k = 0.8$, calculate the mutual inductance $M$ (in mH).",
    "options": [],
    "answer": "4.8. $M = k \\sqrt{L_1 L_2} = 0.8 \\times \\sqrt{4 \\times 9} = 0.8 \\times 6 = 4.8\\text{ mH}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.17",
    "type": "MCQ - 2M",
    "question": "When a current source is present on the perimeter of a mesh, mesh current is:",
    "options": [
      "- (A) Independent of the current source",
      "- (B) Equal to the value of the current source (taking direction into account)",
      "- (C) Undefined",
      "- (D) Always zero"
    ],
    "answer": "(B). If an independent or dependent current source lies strictly on the boundary of one mesh, that mesh current is directly fixed by the source."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.18",
    "type": "NAT - 2M",
    "question": "A supermesh is formed between two meshes sharing a $3\\text{ A}$ current source. If mesh current $I_1$ flows upward through the source and $I_2$ flows downward, the constraint equation is:",
    "options": [
      "- (A) $I_1 + I_2 = 3$",
      "- (B) $I_1 - I_2 = 3$",
      "- (C) $I_2 - I_1 = 3$",
      "- (D) $I_1 \\cdot I_2 = 3$"
    ],
    "answer": "(B). Net current in the branch is $I_1 - I_2 = 3\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.19",
    "type": "NAT - 2M",
    "question": "A delta connection of three equal resistors $R_\\Delta = 18\\,\\Omega$ is transformed into an equivalent star (Wye) connection. What is the value of each star resistor $R_Y$ (in $\\Omega$)?",
    "options": [],
    "answer": "6. For balanced resistors, $R_Y = R_\\Delta / 3 = 18 / 3 = 6\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.20",
    "type": "NAT - 2M",
    "question": "Three equal star-connected resistors $R_Y = 10\\,\\Omega$ are converted to an equivalent delta connection. What is the value of each delta resistor $R_\\Delta$ (in $\\Omega$)?",
    "options": [],
    "answer": "30. $R_\\Delta = 3 \\cdot R_Y = 3 \\times 10 = 30\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.21",
    "type": "NAT - 2M",
    "question": "In a bridge circuit, the four arms have resistances $R_1 = 10\\,\\Omega, R_2 = 20\\,\\Omega, R_3 = 30\\,\\Omega,$ and $R_4 = x\\,\\Omega$. For the bridge to be balanced (zero detector current), what must be the value of $x$ (in $\\Omega$) if $R_1 / R_2 = R_3 / R_4$?",
    "options": [],
    "answer": "60. Wheatstone balance condition: $R_1 \\cdot R_4 = R_2 \\cdot R_3 \\implies 10 \\cdot x = 20 \\cdot 30 = 600 \\implies x = 60\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.22",
    "type": "MCQ - 1M",
    "question": "Tellegen's Theorem applies to any lumped network provided:",
    "options": [
      "- (A) The network is strictly linear and time-invariant",
      "- (B) The network elements are bilateral",
      "- (C) Kirchhoff's laws (KCL and KVL) are satisfied, regardless of linearity or passivity",
      "- (D) The circuit operates only under DC steady state"
    ],
    "answer": "(C). Tellegen's Theorem ($\\sum v_k i_k = 0$) depends purely on network topology and KCL/KVL; it holds for linear, non-linear, active, passive, time-variant, or time-invariant circuits."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.23",
    "type": "NAT - 2M",
    "question": "A closed circuit contains 5 elements. The power absorbed by 4 of the elements is measured as $+15\\text{ W}, -30\\text{ W}, +10\\text{ W},$ and $+8\\text{ W}$. By Tellegen's Theorem, what is the power absorbed (in W) by the fifth element?",
    "options": [],
    "answer": "-3. By Tellegen's theorem: $\\sum P_{\\text{absorbed}} = 0 \\implies 15 - 30 + 10 + 8 + P_5 = 0 \\implies 3 + P_5 = 0 \\implies P_5 = -3\\text{ W}$ (the element delivers $3\\text{ W}$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.24",
    "type": "MCQ - 2M",
    "question": "Which network analysis method is preferred when a circuit has fewer nodes than independent loops?",
    "options": [
      "- (A) Mesh Current Method",
      "- (B) Node Voltage Method",
      "- (C) Source Transformation",
      "- (D) Star-Delta Method"
    ],
    "answer": "(B). If $(N - 1) < (B - N + 1)$, nodal analysis requires fewer simultaneous linear equations than mesh analysis."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.25",
    "type": "NAT - 2M",
    "question": "A circuit has two nodes. Node 1 is grounded. Node 2 has two resistors connected to ground: $R_1 = 4\\,\\Omega$ and $R_2 = 12\\,\\Omega$. A constant current of $8\\text{ A}$ is injected into Node 2. What is the node voltage $V_2$ (in V)? --- ### SECTION B: NETWORK THEOREMS (THEVENIN, NORTON, SUPERPOSITION, MPT) (Q8.26 – Q8.50)",
    "options": [],
    "answer": "24. $R_{eq} = (4 \\times 12) / (4 + 12) = 48 / 16 = 3\\,\\Omega$. Node voltage $V_2 = I \\cdot R_{eq} = 8 \\times 3 = 24\\text{ V}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.26",
    "type": "MCQ - 1M",
    "question": "Thevenin's theorem states that any linear two-terminal active circuit can be replaced by:",
    "options": [
      "- (A) An independent voltage source $V_{th}$ in series with equivalent resistance $R_{th}$",
      "- (B) An independent current source $I_N$ in series with equivalent resistance $R_N$",
      "- (C) An ideal transformer with turns ratio 1:1",
      "- (D) A capacitor in parallel with an inductor"
    ],
    "answer": "(A). Thevenin's theorem replaces the network with an open-circuit voltage source $V_{th}$ in series with $R_{th}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.27",
    "type": "MCQ - 1M",
    "question": "Thevenin's equivalent resistance $R_{th}$ seen across load terminals is calculated by:",
    "options": [
      "- (A) Opening all voltage sources and shorting all current sources",
      "- (B) Short-circuiting all independent voltage sources and open-circuiting all independent current sources",
      "- (C) Removing all dependent sources only",
      "- (D) Connecting a capacitor across the terminals"
    ],
    "answer": "(B). To determine $R_{th}$, all independent voltage sources are replaced by short circuits ($V = 0$) and all independent current sources by open circuits ($I = 0$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.28",
    "type": "NAT - 2M",
    "question": "A linear DC network has open-circuit voltage $V_{oc} = 36\\text{ V}$ and short-circuit current $I_{sc} = 6\\text{ A}$ across terminals A-B. What is the Thevenin equivalent resistance $R_{th}$ (in $\\Omega$)?",
    "options": [],
    "answer": "6. $R_{th} = V_{oc} / I_{sc} = 36 / 6 = 6\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.29",
    "type": "NAT - 2M",
    "question": "In the circuit from Q8.28, what is the maximum power (in W) that can be transferred to a variable load resistor $R_L$ connected across terminals A-B?",
    "options": [],
    "answer": "54. Maximum power occurs when $R_L = R_{th} = 6\\,\\Omega$. $P_{\\max} = V_{th}^2 / (4 R_{th}) = 36^2 / (4 \\times 6) = 1296 / 24 = 54\\text{ W}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.30",
    "type": "MCQ - 1M",
    "question": "The electrical efficiency of a DC circuit delivering maximum power to a load is:",
    "options": [
      "- (A) $100\\%$",
      "- (B) $75\\%$",
      "- (C) $50\\%$",
      "- (D) Depends on source resistance"
    ],
    "answer": "(C). When $R_L = R_{th}$, equal power is dissipated in the source resistance $R_{th}$ and the load $R_L$, giving $\\eta = P_L / P_{\\text{total}} = 50\\%$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.31",
    "type": "MCQ - 2M",
    "question": "For an AC circuit with source Thevenin impedance $Z_{th} = R_{th} + j X_{th}$, maximum real power is delivered to an adjustable load impedance $Z_L = R_L + j X_L$ when:",
    "options": [
      "- (A) $Z_L = Z_{th}$",
      "- (B) $Z_L = Z_{th}^* = R_{th} - j X_{th}$",
      "- (C) $R_L = R_{th}$ and $X_L = X_{th}$",
      "- (D) $Z_L = -Z_{th}$"
    ],
    "answer": "(B). Under AC conditions, maximum power transfer requires conjugate matching: $R_L = R_{th}$ and $X_L = -X_{th}$ so that the net reactance cancels to zero."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.32",
    "type": "NAT - 2M",
    "question": "A source has Thevenin impedance $Z_{th} = 4 + j3\\,\\Omega$ and $V_{th} = 20\u0007ngle 0^\\circ\\text{ V (rms)}$. What is the maximum active power (in W) transferred to the conjugate-matched load $Z_L$?",
    "options": [],
    "answer": "25. With $Z_L = 4 - j3\\,\\Omega$, net impedance is $Z_{\\text{total}} = 4 + 4 = 8\\,\\Omega$. Load current $I = 20 / 8 = 2.5\\text{ A}$. Power $P = I^2 R_L = (2.5)^2 \\times 4 = 6.25 \\times 4 = 25\\text{ W}$. (Or $P_{\\max} = |V_{th}|^2 / (4 R_{th}) = 20^2 / (4 \\times 4) = 400 / 16 = 25\\text{ W}$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.33",
    "type": "MCQ - 2M",
    "question": "When applying the Superposition Theorem to a circuit containing dependent sources, which rule MUST be observed?",
    "options": [
      "- (A) Dependent sources must be turned off one by one",
      "- (B) Dependent sources must never be deactivated; only independent sources are turned off one at a time",
      "- (C) Dependent sources are replaced by their internal resistances",
      "- (D) Superposition cannot be used if dependent sources are present"
    ],
    "answer": "(B). Dependent sources represent internal coupling and cannot act as independent exciters; they must remain active in all superposition sub-circuits."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.34",
    "type": "NAT - 2M",
    "question": "A resistor $R = 5\\,\\Omega$ is connected to two independent voltage sources: $V_1 = 15\\text{ V}$ produces $3\\text{ A}$ through $R$ acting alone, and $V_2 = 10\\text{ V}$ produces $1.5\\text{ A}$ through $R$ in the same direction acting alone. By superposition, what is the total current (in A) through $R$?",
    "options": [],
    "answer": "4.5. $I_{\\text{total}} = I_1 + I_2 = 3.0 + 1.5 = 4.5\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.35",
    "type": "MCQ - 1M",
    "question": "Superposition Theorem is valid for calculating which of the following circuit quantities? e P_1 + P_2$).",
    "options": [
      "- (A) Voltage and Current",
      "- (B) Instantaneous and Average Power",
      "- (C) Both Voltage and Power",
      "- (D) Magnetic energy only"
    ],
    "answer": "(A). Superposition is strictly a linear theorem applicable to linear variables (voltage and current). Power is a quadratic function ($P = I^2 R$) and cannot be calculated by directly summing individual powers ($P_{\\text{total}}"
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.36",
    "type": "NAT - 2M",
    "question": "Norton current $I_N$ of a circuit with $V_{th} = 48\\text{ V}$ and $R_{th} = 12\\,\\Omega$ is (in A):",
    "options": [],
    "answer": "4. $I_N = V_{th} / R_{th} = 48 / 12 = 4\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.37",
    "type": "NAT - 2M",
    "question": "To find Thevenin resistance $R_{th}$ of a network containing only dependent sources and resistors, one connects an external $1\\text{ V}$ test source to the terminals. If the measured current leaving the test source is $50\\text{ mA}$, what is $R_{th}$ (in $\\Omega$)?",
    "options": [],
    "answer": "20. $R_{th} = V_{\\text{test}} / I_{\\text{test}} = 1\\text{ V} / (50 \\times 10^{-3}\\text{ A}) = 20\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.38",
    "type": "MCQ - 2M",
    "question": "Reciprocity Theorem is applicable to networks that are:",
    "options": [
      "- (A) Non-linear and active",
      "- (B) Linear, passive, and bilateral",
      "- (C) Containing independent current sources only",
      "- (D) Time-variant"
    ],
    "answer": "(B). Reciprocity applies only to linear, passive networks containing bilateral elements ($R, L, C, M$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.39",
    "type": "MCQ - 1M",
    "question": "Millman's Theorem is primarily used for simplifying:",
    "options": [
      "- (A) Series loops with multiple inductors",
      "- (B) Multiple parallel branches each containing an ideal voltage source in series with a resistor",
      "- (C) Bridge rectifiers",
      "- (D) Sallen-Key active filters"
    ],
    "answer": "(B). Millman's theorem reduces multiple parallel battery-resistor branches to a single equivalent voltage source $V_m = \frac{\\sum V_k G_k}{\\sum G_k}$ and equivalent conductance $G_m = \\sum G_k$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.40",
    "type": "NAT - 2M",
    "question": "Two branches in parallel: Branch 1 has $10\\text{ V}$ in series with $2\\,\\Omega$ ($G_1 = 0.5\\,\\text{S}$); Branch 2 has $20\\text{ V}$ in series with $2\\,\\Omega$ ($G_2 = 0.5\\,\\text{S}$). By Millman's theorem, what is the open-circuit voltage $V_m$ (in V)?",
    "options": [],
    "answer": "15. $V_m = \frac{10(0.5) + 20(0.5)}{0.5 + 0.5} = \frac{5 + 10}{1.0} = 15\\text{ V}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.41",
    "type": "MCQ - 2M",
    "question": "Substitution Theorem states that any branch in a network can be substituted by:",
    "options": [
      "- (A) An open circuit",
      "- (B) A voltage or current source equal to the instantaneous branch voltage or current",
      "- (C) A pure capacitor",
      "- (D) A short circuit only"
    ],
    "answer": "(B). If the voltage $v_k(t)$ and current $i_k(t)$ across a branch are known, that branch can be replaced by an independent voltage source $v_k(t)$ or current source $i_k(t)$ without altering any other currents/voltages in the network."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.42",
    "type": "NAT - 2M",
    "question": "A load resistor $R_L$ is connected across a Thevenin network with $V_{th} = 100\\text{ V}$ and $R_{th} = 25\\,\\Omega$. If the power consumed by $R_L$ is $64\\text{ W}$, and $R_L > R_{th}$, what is the value of $R_L$ (in $\\Omega$)? ight)^2 R_L = 64 \\implies \frac{10000 R_L}{(25 + R_L)^2} = 64 \\implies \frac{R_L}{(25 + R_L)^2} = \frac{64}{10000} = \frac{4}{625}$. Solving: $625 R_L = 4(625 + 50 R_L + R_L^2) \\implies 4 R_L^2 - 425 R_L + 2500 = 0$. Roots: $R_L = \frac{425 \\pm \\sqrt{180625 - 40000}}{8} = \frac{425 \\pm 375}{8} \\implies R_L = 100\\,\\Omega$ or $6.25\\,\\Omega$. Since $R_L > 25\\,\\Omega$, $R_L = 100\\,\\Omega$.",
    "options": [],
    "answer": "100. $P_L = I^2 R_L = \\left(\frac{100}{25 + R_L}"
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.43",
    "type": "MCQ - 1M",
    "question": "Compensation Theorem is especially useful in computing:",
    "options": [
      "- (A) Maximum power transfer",
      "- (B) The change in circuit currents and voltages when a branch resistance changes by $\\Delta R$",
      "- (C) Transient decay times",
      "- (D) Resonance frequency of parallel tanks"
    ],
    "answer": "(B). When resistance of a branch changes by $\\Delta R$, the change in current in any branch is equal to the current produced by a compensating voltage source $V_c = I \\cdot \\Delta R$ placed in that branch."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.44",
    "type": "NAT - 2M",
    "question": "In a linear resistive network, when load resistance $R_L = 10\\,\\Omega$, load voltage is $20\\text{ V}$. When $R_L = 30\\,\\Omega$, load voltage is $30\\text{ V}$. What is the open-circuit Thevenin voltage $V_{th}$ (in V)?",
    "options": [],
    "answer": "40. From $V_L = V_{th} \frac{R_L}{R_{th} + R_L}$: (1) $20 = V_{th} \frac{10}{R_{th} + 10} \\implies V_{th} = 2(R_{th} + 10)$; (2) $30 = V_{th} \frac{30}{R_{th} + 30} \\implies V_{th} = R_{th} + 30$. Equating: $2 R_{th} + 20 = R_{th} + 30 \\implies R_{th} = 10\\,\\Omega$. Hence $V_{th} = 10 + 30 = 40\\text{ V}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.45",
    "type": "NAT - 2M",
    "question": "In the circuit from Q8.44, what is the Thevenin resistance $R_{th}$ (in $\\Omega$)?",
    "options": [],
    "answer": "10. As derived in Q8.44: $R_{th} = 10\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.46",
    "type": "MCQ - 2M",
    "question": "If a source has a fixed internal resistance $R_s$ and can only accept a purely resistive load $R_L$, but the internal reactance is $X_s e 0$, maximum power is transferred when:",
    "options": [
      "- (A) $R_L = R_s$",
      "- (B) $R_L = \\sqrt{R_s^2 + X_s^2} = |Z_s|$",
      "- (C) $R_L = X_s$",
      "- (D) $R_L = 0$"
    ],
    "answer": "(B). When load reactance cannot be adjusted ($X_L = 0$), the optimum load resistance that maximizes power transfer is the magnitude of source impedance $R_L = |Z_s| = \\sqrt{R_s^2 + X_s^2}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.47",
    "type": "NAT - 2M",
    "question": "An AC generator has internal impedance $Z_s = 6 + j8\\,\\Omega$. A purely resistive heater $R_L$ is connected. To extract maximum power, what should be the resistance $R_L$ (in $\\Omega$)?",
    "options": [],
    "answer": "10. $R_L = |Z_s| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.48",
    "type": "MCQ - 1M",
    "question": "A linear bilateral network has two ports. If a voltage $V$ applied at port 1 produces a short-circuit current $I$ at port 2, then applying the same voltage $V$ at port 2 will produce at port 1:",
    "options": [
      "- (A) $2I$",
      "- (B) $I$",
      "- (C) $I/2$",
      "- (D) Zero"
    ],
    "answer": "(B). Direct consequence of the Reciprocity Theorem for bilateral passive networks ($y_{12} = y_{21}$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.49",
    "type": "NAT - 2M",
    "question": "A DC circuit delivers $18\\text{ W}$ to a $2\\,\\Omega$ load and also delivers $18\\text{ W}$ to an $8\\,\\Omega$ load. What is the Thevenin resistance $R_{th}$ (in $\\Omega$)?",
    "options": [],
    "answer": "4. When a circuit delivers the same power to two different load resistances $R_1$ and $R_2$, the Thevenin resistance is their geometric mean: $R_{th} = \\sqrt{R_1 \\cdot R_2} = \\sqrt{2 \\times 8} = \\sqrt{16} = 4\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.50",
    "type": "NAT - 2M",
    "question": "In Q8.49, what is the open-circuit voltage $V_{th}$ (in V)? --- ### SECTION C: TRANSIENTS, AC RESONANCE, TWO-PORT & 3-PHASE CIRCUITS (Q8.51 – Q8.75)",
    "options": [],
    "answer": "18. Power $P = \frac{V_{th}^2 R_L}{(R_{th} + R_L)^2} \\implies 18 = \frac{V_{th}^2 \\times 2}{(4 + 2)^2} = \frac{2 V_{th}^2}{36} = \frac{V_{th}^2}{18} \\implies V_{th}^2 = 18^2 \\implies V_{th} = 18\\text{ V}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.51",
    "type": "NAT - 2M",
    "question": "A series $RL$ circuit with $R = 5\\,\\Omega$ and $L = 20\\text{ mH}$ is energized by a $50\\text{ V}$ DC step. What is the time constant $\tau$ (in ms)?",
    "options": [],
    "answer": "4. $\tau = L / R = (20 \\times 10^{-3}) / 5 = 4 \\times 10^{-3}\\text{ s} = 4\\text{ ms}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.52",
    "type": "NAT - 2M",
    "question": "In the circuit of Q8.51, what is the final steady-state current $i(\\infty)$ (in A)?",
    "options": [],
    "answer": "10. Under DC steady state, the inductor acts as a short circuit: $i(\\infty) = V / R = 50 / 5 = 10\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.53",
    "type": "NAT - 2M",
    "question": "In the circuit of Q8.51, what is the initial rate of rise of current $\\left.\frac{di}{dt} ight|_{t=0^+}$ (in A/s) if $i(0^-) = 0$? ight|_{t=0^+} = V \\implies \\left.\frac{di}{dt} ight|_{t=0^+} = 50 / (20 \\times 10^{-3}) = 2500\\text{ A/s}$.",
    "options": [],
    "answer": "2500. At $t = 0^+$, $i(0^+) = 0$, so voltage drop across resistor is $0\\text{ V}$. Entire voltage falls across inductor: $L \\left.\frac{di}{dt}"
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.54",
    "type": "NAT - 2M",
    "question": "A series $RC$ circuit has $R = 2\\text{ k}\\Omega$ and $C = 5\\,\\mu\\text{F}$. What is the time constant $\tau$ (in ms)?",
    "options": [],
    "answer": "10. $\tau = R C = (2 \\times 10^3) \\times (5 \\times 10^{-6}) = 10 \\times 10^{-3}\\text{ s} = 10\\text{ ms}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.55",
    "type": "NAT - 2M",
    "question": "An uncharged $10\\,\\mu\\text{F}$ capacitor in series with a $100\\,\\Omega$ resistor is connected to a $20\\text{ V}$ DC source at $t = 0$. What is the initial current $i(0^+)$ (in A)?",
    "options": [],
    "answer": "0.2. At $t = 0^+$, uncharged capacitor voltage $v_C(0^+) = 0\\text{ V}$ (acts as short circuit). Current $i(0^+) = V / R = 20 / 100 = 0.2\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.56",
    "type": "MCQ - 2M",
    "question": "A series $RLC$ circuit with parameters $R, L, C$ is critically damped when:",
    "options": [
      "- (A) $R = 2 \\sqrt{L/C}$",
      "- (B) $R < 2 \\sqrt{L/C}$",
      "- (C) $R > 2 \\sqrt{L/C}$",
      "- (D) $R = 0$"
    ],
    "answer": "(A). Characteristic equation is $s^2 + \frac{R}{L} s + \frac{1}{LC} = 0$. Roots are repeated when $(R/L)^2 - 4/(LC) = 0 \\implies R^2 = 4 L / C \\implies R = 2\\sqrt{L/C}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.57",
    "type": "NAT - 2M",
    "question": "A series $RLC$ circuit has $L = 10\\text{ mH}$ and $C = 10\\,\\mu\\text{F}$. What value of resistance $R$ (in $\\Omega$) will make the circuit critically damped?",
    "options": [],
    "answer": "63.25. $R = 2 \\sqrt{L/C} = 2 \\sqrt{(10 \\times 10^{-3}) / (10 \\times 10^{-6})} = 2 \\sqrt{1000} = 2 \\times 31.623 = 63.25\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.58",
    "type": "NAT - 2M",
    "question": "A series resonant circuit has $L = 50\\,\\mu\\text{H}$ and $C = 200\\text{ pF}$. What is the resonant angular frequency $\\omega_0$ (in Mrad/s)?",
    "options": [],
    "answer": "10. $\\omega_0 = 1/\\sqrt{LC} = 1/\\sqrt{50 \\times 10^{-6} \\times 200 \\times 10^{-12}} = 1/\\sqrt{10^{-14}} = 10^7\\text{ rad/s} = 10\\text{ Mrad/s}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.59",
    "type": "MCQ - 1M",
    "question": "At series resonance, the impedance of a series $RLC$ circuit is:",
    "options": [
      "- (A) Purely inductive and maximum",
      "- (B) Purely capacitive and minimum",
      "- (C) Purely resistive and minimum ($Z = R$)",
      "- (D) Infinite"
    ],
    "answer": "(C). At $\\omega = \\omega_0$, $X_L = X_C$, so net reactance is zero. The impedance reaches its absolute minimum $Z = R$, resulting in maximum current."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.60",
    "type": "MCQ - 1M",
    "question": "At parallel resonance (anti-resonance) in an ideal $LC$ tank, the terminal impedance is:",
    "options": [
      "- (A) Zero",
      "- (B) Purely resistive and theoretically infinite",
      "- (C) Purely inductive",
      "- (D) Purely capacitive"
    ],
    "answer": "(B). In an ideal parallel $LC$ tank, parallel currents cancel out completely, yielding zero net line current and infinite input impedance."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.61",
    "type": "NAT - 2M",
    "question": "A series $RLC$ circuit has $R = 10\\,\\Omega, L = 100\\text{ mH},$ and $C = 1\\,\\mu\\text{F}$. What is the Quality Factor $Q$ of the circuit?",
    "options": [],
    "answer": "31.62. $Q = \frac{1}{R} \\sqrt{\frac{L}{C}} = \frac{1}{10} \\sqrt{\frac{0.1}{10^{-6}}} = \frac{1}{10} \\sqrt{10^5} = \frac{316.23}{10} = 31.62$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.62",
    "type": "NAT - 2M",
    "question": "A series resonant circuit has resonant frequency $f_0 = 100\\text{ kHz}$ and bandwidth $BW = 5\\text{ kHz}$. What is the Quality factor $Q$?",
    "options": [],
    "answer": "20. $Q = f_0 / BW = 100\\text{ kHz} / 5\\text{ kHz} = 20$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.63",
    "type": "NAT - 2M",
    "question": "A sinusoidal voltage $v(t) = 100 \\sqrt{2} \\sin(100\\pi t + 30^\\circ)\\text{ V}$ is applied across an impedance $Z = 10\u0007ngle 30^\\circ\\,\\Omega$. What is the RMS current (in A)?",
    "options": [],
    "answer": "10. RMS voltage $V_{\\text{rms}} = 100\\text{ V}$. RMS current $I_{\\text{rms}} = V_{\\text{rms}} / |Z| = 100 / 10 = 10\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.64",
    "type": "NAT - 2M",
    "question": "In the circuit of Q8.63, what is the average active power $P$ (in W) dissipated?",
    "options": [],
    "answer": "1000. Phase of voltage is $30^\\circ$ and phase of impedance is $30^\\circ$, so current phase is $30^\\circ - 30^\\circ = 0^\\circ$. Phase angle $\\phi = 30^\\circ - 0^\\circ = 30^\\circ$ is the impedance angle! Wait: $P = V_{\\text{rms}} I_{\\text{rms}} \\cos \theta_Z = 100 \\times 10 \\times \\cos(30^\\circ) = 1000 \\times 0.866 = 866\\text{ W}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.65",
    "type": "NAT - 2M",
    "question": "An AC load absorbs real power $P = 12\\text{ kW}$ and reactive power $Q = 9\\text{ kVAR}$ (inductive). What is the total apparent power $S$ (in kVA)?",
    "options": [],
    "answer": "15. $S = \\sqrt{P^2 + Q^2} = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = \\sqrt{225} = 15\\text{ kVA}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.66",
    "type": "NAT - 2M",
    "question": "In Q8.65, what is the power factor of the load?",
    "options": [],
    "answer": "0.8. Power factor $\\cos \\phi = P / S = 12 / 15 = 0.8\\text{ lagging}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.67",
    "type": "MCQ - 1M",
    "question": "In a balanced three-phase star (Wye) connected system, the relationship between line voltage $V_L$ and phase voltage $V_{ph}$ is:",
    "options": [
      "- (A) $V_L = V_{ph}$",
      "- (B) $V_L = \\sqrt{3} V_{ph}$ leading by $30^\\circ$",
      "- (C) $V_L = V_{ph} / \\sqrt{3}$",
      "- (D) $V_L = 3 V_{ph}$"
    ],
    "answer": "(B). In a star connection, $V_L = \\sqrt{3} V_{ph}$ and line current equals phase current ($I_L = I_{ph}$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.68",
    "type": "MCQ - 1M",
    "question": "In a balanced three-phase delta connected system:",
    "options": [
      "- (A) $V_L = \\sqrt{3} V_{ph}, I_L = I_{ph}$",
      "- (B) $V_L = V_{ph}, I_L = \\sqrt{3} I_{ph}$",
      "- (C) $V_L = V_{ph}, I_L = I_{ph}$",
      "- (D) $V_L = 3 V_{ph}, I_L = 3 I_{ph}$"
    ],
    "answer": "(B). In delta, line voltage equals phase voltage ($V_L = V_{ph}$), and line current is $\\sqrt{3}$ times phase current ($I_L = \\sqrt{3} I_{ph}$)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.69",
    "type": "NAT - 2M",
    "question": "A balanced 3-phase $400\\text{ V}$ (line-to-line RMS) star-connected supply feeds a balanced star load of $Z_{ph} = 20\\,\\Omega$ per phase. What is the line current $I_L$ (in A)?",
    "options": [],
    "answer": "11.55. Phase voltage $V_{ph} = 400 / \\sqrt{3} = 230.94\\text{ V}$. Line current $I_L = I_{ph} = V_{ph} / Z_{ph} = 230.94 / 20 = 11.55\\text{ A}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.70",
    "type": "NAT - 2M",
    "question": "In a two-wattmeter measurement of a balanced 3-phase load, the readings are $W_1 = 6\\text{ kW}$ and $W_2 = 2\\text{ kW}$. What is the total real power (in kW) consumed?",
    "options": [],
    "answer": "8. Total real power $P = W_1 + W_2 = 6 + 2 = 8\\text{ kW}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.71",
    "type": "MCQ - 2M",
    "question": "In the two-wattmeter method, one of the wattmeters reads zero while the other reads positive ($W_2 = 0, W_1 > 0$). What is the power factor of the load?",
    "options": [
      "- (A) 1.0 (Unity)",
      "- (B) 0.866",
      "- (C) 0.5",
      "- (D) 0.0 (Zero)"
    ],
    "answer": "(C). $\tan \\phi = \\sqrt{3} \frac{W_1 - W_2}{W_1 + W_2} = \\sqrt{3} \frac{W_1 - 0}{W_1 + 0} = \\sqrt{3} \\implies \\phi = 60^\\circ \\implies \\cos(60^\\circ) = 0.5$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.72",
    "type": "MCQ - 1M",
    "question": "In two-wattmeter measurement, when the load power factor is strictly less than 0.5 ($\\phi > 60^\\circ$):",
    "options": [
      "- (A) Both wattmeters read positive",
      "- (B) One wattmeter gives a negative reading",
      "- (C) Both wattmeters give identical readings",
      "- (D) Both wattmeters read zero"
    ],
    "answer": "(B). When $\\phi > 60^\\circ$, $\\cos(30^\\circ + \\phi)$ becomes negative, so one of the wattmeters deflects backwards (reads negative)."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.73",
    "type": "MCQ - 2M",
    "question": "For a two-port network to be reciprocal, the condition in terms of transmission ($ABCD$) parameters is:",
    "options": [
      "- (A) $A = D$",
      "- (B) $AD - BC = 1$",
      "- (C) $B = C$",
      "- (D) $A = B$"
    ],
    "answer": "(B). Reciprocity condition in ABCD parameters is $AD - BC = 1$. The symmetry condition is $A = D$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.74",
    "type": "NAT - 2M",
    "question": "A symmetrical two-port network has $Z_{11} = 10\\,\\Omega$ and $Z_{12} = 6\\,\\Omega$. What is the value of open-circuit driving point impedance $Z_{22}$ (in $\\Omega$)?",
    "options": [],
    "answer": "10. For a symmetrical two-port network, $Z_{11} = Z_{22} = 10\\,\\Omega$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.75",
    "type": "NAT - 2M",
    "question": "The Z-parameters of a two-port network are $Z_{11} = 8\\,\\Omega, Z_{12} = Z_{21} = 4\\,\\Omega, Z_{22} = 8\\,\\Omega$. If port 2 is terminated in an open circuit ($I_2 = 0$), what is the voltage transfer ratio $V_2 / V_1$? --- ### SECTION D: ENGINEERING MECHANICS FOR ROBOTICS (Q8.76 – Q8.100)",
    "options": [],
    "answer": "0.5. $V_1 = Z_{11} I_1 + Z_{12} I_2 = 8 I_1$. $V_2 = Z_{21} I_1 + Z_{22} I_2 = 4 I_1$. Voltage ratio $V_2 / V_1 = (4 I_1) / (8 I_1) = 0.5$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.76",
    "type": "MCQ - 1M",
    "question": "Lami's theorem states that if three coplanar concurrent forces are in static equilibrium, each force is proportional to:",
    "options": [
      "- (A) The cosine of the angle between the other two forces",
      "- (B) The sine of the angle between the other two forces",
      "- (C) The tangent of the angle between the other two forces",
      "- (D) The sum of the other two forces"
    ],
    "answer": "(B). $\frac{F_1}{\\sin \u0007lpha} = \frac{F_2}{\\sin \beta} = \frac{F_3}{\\sin \\gamma}$, where each angle is the opposite angle between the other two forces."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.77",
    "type": "NAT - 2M",
    "question": "A $100\\text{ N}$ weight is suspended by two identical symmetrical cords attached to a horizontal ceiling, each making an angle of $30^\\circ$ with the horizontal. What is the tension $T$ (in N) in each cord?",
    "options": [],
    "answer": "100. Vertical equilibrium: $2 T \\sin(30^\\circ) = 100 \\implies 2 T (0.5) = 100 \\implies T = 100\\text{ N}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.78",
    "type": "MCQ - 1M",
    "question": "A block of mass $m = 10\\text{ kg}$ rests on a horizontal floor with static friction coefficient $\\mu_s = 0.4$. Taking $g = 9.81\\text{ m/s}^2$, what is the minimum horizontal force required to initiate motion?",
    "options": [
      "- (A) $98.1\\text{ N}$",
      "- (B) $39.24\\text{ N}$",
      "- (C) $4.0\\text{ N}$",
      "- (D) $392.4\\text{ N}$"
    ],
    "answer": "(B). Normal force $N = m g = 10 \\times 9.81 = 98.1\\text{ N}$. Limiting static friction $F_{\\lim} = \\mu_s N = 0.4 \\times 98.1 = 39.24\\text{ N}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.79",
    "type": "NAT - 2M",
    "question": "A block rests on an inclined plane. The angle of inclination is slowly increased until the block just starts to slide down at $\theta = 30^\\circ$. What is the coefficient of static friction $\\mu_s$?",
    "options": [],
    "answer": "0.577. Angle of repose equals angle of friction: $\\mu_s = \tan \theta = \tan(30^\\circ) = 1/\\sqrt{3} \u0007pprox 0.577$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.80",
    "type": "MCQ - 2M",
    "question": "In a flat belt-pulley system, the limiting ratio of tight side tension $T_1$ to slack side tension $T_2$ without slipping is given by:",
    "options": [
      "- (A) $T_1 / T_2 = \\mu \theta$",
      "- (B) $T_1 / T_2 = e^{\\mu \theta}$",
      "- (C) $T_1 / T_2 = \\ln(\\mu \theta)$",
      "- (D) $T_1 / T_2 = \\sin(\\mu \theta)$"
    ],
    "answer": "(B). The belt friction formula is $T_1 / T_2 = e^{\\mu \theta}$, where $\\mu$ is coefficient of friction and $\theta$ is contact angle of wrap in radians."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.81",
    "type": "NAT - 2M",
    "question": "A flat belt wraps around a pulley with angle of wrap $\theta = \\pi\\text{ rad}$ ($180^\\circ$). If $\\mu = 0.3$, what is the ratio $T_1 / T_2$?",
    "options": [],
    "answer": "2.566. $T_1 / T_2 = e^{0.3 \\times \\pi} = e^{0.9425} \u0007pprox 2.566$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.82",
    "type": "NAT - 2M",
    "question": "A belt drives a pulley at linear speed $v = 20\\text{ m/s}$. The belt has mass per unit length $m = 0.5\\text{ kg/m}$. What is the centrifugal tension $T_c$ (in N) developed in the belt?",
    "options": [],
    "answer": "200. Centrifugal tension $T_c = m v^2 = 0.5 \\times (20)^2 = 0.5 \\times 400 = 200\\text{ N}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.83",
    "type": "MCQ - 2M",
    "question": "For maximum power transmission by a belt drive, the optimum linear belt speed occurs when centrifugal tension $T_c$ equals:",
    "options": [
      "- (A) Maximum allowable tension $T$",
      "- (B) $T / 2$",
      "- (C) $T / 3$",
      "- (D) $T / 4$"
    ],
    "answer": "(C). Power $P = (T_1 - T_2) v = (T - T_c)(1 - e^{-\\mu\theta}) v = (T - m v^2) C v$. Differentiating with respect to $v$: $\frac{dP}{dv} = 0 \\implies T - 3 m v^2 = 0 \\implies T_c = m v^2 = T / 3$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.84",
    "type": "NAT - 2M",
    "question": "A belt has maximum allowable tension $T_{\\max} = 900\\text{ N}$. What is the centrifugal tension $T_c$ (in N) for maximum power transmission condition?",
    "options": [],
    "answer": "300. $T_c = T_{\\max} / 3 = 900 / 3 = 300\\text{ N}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.85",
    "type": "MCQ - 1M",
    "question": "In a planar pin-jointed truss, what is the minimum number of members $m$ required for rigidity with $j$ joints?",
    "options": [
      "- (A) $m = 2j - 3$",
      "- (B) $m = 3j - 2$",
      "- (C) $m = 2j$",
      "- (D) $m = j + 3$"
    ],
    "answer": "(A). For a statically determinate stable 2D truss, the Maxwell relation is $m = 2j - 3$. If $m < 2j - 3$, it is a mechanism; if $m > 2j - 3$, it is statically indeterminate."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.86",
    "type": "MCQ - 2M",
    "question": "At a truss joint, exactly two non-collinear members meet with no external load or support reaction applied. The force in each member is:",
    "options": [
      "- (A) Tensile and equal to member length",
      "- (B) Zero in both members",
      "- (C) Compressive in both members",
      "- (D) Indeterminate"
    ],
    "answer": "(B). Projecting equilibrium equations along the normal to either member shows that both members carry zero force."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.87",
    "type": "MCQ - 1M",
    "question": "At a truss joint, three members meet. Two are collinear. If no external load is applied at the joint, the force in the third non-collinear member is:",
    "options": [
      "- (A) Zero",
      "- (B) Equal to the collinear force",
      "- (C) Infinite",
      "- (D) Tensile"
    ],
    "answer": "(A). Resolving forces perpendicular to the collinear line reveals that the third member must carry zero force."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.88",
    "type": "NAT - 2M",
    "question": "A simple triangular truss consists of 3 members connected at 3 joints with 2 pin/roller supports. How many members are present?",
    "options": [],
    "answer": "3. $m = 2j - 3 = 2(3) - 3 = 6 - 3 = 3$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.89",
    "type": "NAT - 2M",
    "question": "A rigid link of length $L = 2\\text{ m}$ is rotating about a fixed pivot with constant angular velocity $\\omega = 4\\text{ rad/s}$. What is the linear velocity (in m/s) of its tip?",
    "options": [],
    "answer": "8. $v = \\omega \\cdot L = 4 \\times 2 = 8\\text{ m/s}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.90",
    "type": "NAT - 2M",
    "question": "In Q8.89, what is the centripetal (normal) acceleration (in m/s$^2$) of the tip?",
    "options": [],
    "answer": "32. $a_n = \\omega^2 L = 4^2 \\times 2 = 16 \\times 2 = 32\\text{ m/s}^2$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.91",
    "type": "MCQ - 2M",
    "question": "A ladder of length $L$ leans against a smooth vertical wall and rests on a smooth floor. Point A is at the wall and Point B is at the floor. The Instantaneous Centre of Zero Velocity of the ladder lies at:",
    "options": [
      "- (A) The midpoint of the ladder",
      "- (B) The intersection of the horizontal line through A and vertical line through B",
      "- (C) The origin where wall and floor meet",
      "- (D) Point A"
    ],
    "answer": "(B). Velocity of A is vertical (along wall) $\\implies$ normal is horizontal through A. Velocity of B is horizontal (along floor) $\\implies$ normal is vertical through B. The I-centre is the intersection of these two perpendicular normals."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.92",
    "type": "NAT - 2M",
    "question": "In Q8.91, if the ladder makes an angle of $60^\\circ$ with the horizontal and point B slides away from the wall with velocity $v_B = 3\\text{ m/s}$, what is the downward velocity of point A (in m/s)?",
    "options": [],
    "answer": "5.196. Along the ladder, velocity components must match: $v_B \\cos(60^\\circ) = v_A \\sin(60^\\circ) \\implies v_A = v_B \\cot(60^\\circ) = 3 / \tan(30^\\circ)$ wait: $v_B \\cos(60^\\circ) = v_A \\cos(30^\\circ) = v_A \\sin(60^\\circ) \\implies v_A = v_B / \tan(60^\\circ) = 3 / \\sqrt{3} = 1.732\\text{ m/s}$. Using I-centre: distance to B is $L \\sin(60^\\circ)$, distance to A is $L \\cos(60^\\circ)$, $\\omega = v_B / (L \\sin 60^\\circ) \\implies v_A = \\omega (L \\cos 60^\\circ) = v_B \\cot(60^\\circ) = 3 \\times (1/\\sqrt{3}) = 1.732\\text{ m/s}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.93",
    "type": "NAT - 2M",
    "question": "A solid uniform disc of mass $m = 4\\text{ kg}$ and radius $R = 0.5\\text{ m}$ rolls without slipping on a horizontal plane with center velocity $v = 6\\text{ m/s}$. What is the total kinetic energy (in J)?",
    "options": [],
    "answer": "108. For a rolling disc: $KE_{\\text{total}} = \frac{1}{2} m v^2 + \frac{1}{2} I \\omega^2 = \frac{1}{2} m v^2 + \frac{1}{2} (\frac{1}{2} m R^2) (v/R)^2 = \frac{3}{4} m v^2 = \frac{3}{4} \\times 4 \\times 6^2 = 3 \\times 36 = 108\\text{ J}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.94",
    "type": "MCQ - 2M",
    "question": "When a solid sphere ($I = \frac{2}{5} m R^2$) rolls down an inclined plane of angle $\theta$ without slipping, its linear acceleration is:",
    "options": [
      "- (A) $g \\sin \theta$",
      "- (B) $\frac{5}{7} g \\sin \theta$",
      "- (C) $\frac{2}{3} g \\sin \theta$",
      "- (D) $\frac{1}{2} g \\sin \theta$"
    ],
    "answer": "(B). $a = \frac{g \\sin \theta}{1 + I/(m R^2)} = \frac{g \\sin \theta}{1 + 2/5} = \frac{5}{7} g \\sin \theta$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.95",
    "type": "NAT - 2M",
    "question": "A uniform rod of mass $m = 6\\text{ kg}$ and length $L = 2\\text{ m}$ is pivoted at one end. What is its mass moment of inertia $I$ (in kg$\\cdot$m$^2$) about the pivot?",
    "options": [],
    "answer": "8. For a rod about one end: $I = \frac{1}{3} m L^2 = \frac{1}{3} \\times 6 \\times 2^2 = 2 \\times 4 = 8\\text{ kg}\\cdot\\text{m}^2$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.96",
    "type": "NAT - 2M",
    "question": "In Q8.95, if released from a horizontal position with zero initial velocity, what is the initial angular acceleration $\u0007lpha$ (in rad/s$^2$) about the pivot? (Take $g = 9.81\\text{ m/s}^2$).",
    "options": [],
    "answer": "7.36. Torque about pivot due to gravity acting at center of mass ($L/2 = 1\\text{ m}$): $\tau = m g (L/2) = 6 \\times 9.81 \\times 1 = 58.86\\text{ N}\\cdot\\text{m}$. Equation of motion: $\tau = I \u0007lpha \\implies 58.86 = 8 \u0007lpha \\implies \u0007lpha = 58.86 / 8 = 7.3575\\text{ rad/s}^2$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.97",
    "type": "MCQ - 1M",
    "question": "D'Alembert's principle enables dynamic problems to be treated as equivalent static equilibrium problems by introducing:",
    "options": [
      "- (A) Virtual work",
      "- (B) Inertia forces and inertia torques ($-m \\vec{a}$ and $-I \\vec{\u0007lpha}$)",
      "- (C) Coriolis acceleration",
      "- (D) Gravitational potential"
    ],
    "answer": "(B). By adding fictitious reversed effective forces (inertia force $\\vec{F}_I = -m \\vec{a}$ and inertia couple $\\vec{\tau}_I = -I \\vec{\u0007lpha}$), the equations of motion $\\sum \\vec{F} = m \\vec{a}$ transform to static equilibrium form $\\sum \\vec{F} + \\vec{F}_I = 0$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.98",
    "type": "NAT - 2M",
    "question": "A wheel of radius $R = 0.4\\text{ m}$ accelerates uniformly from rest to an angular speed of $30\\text{ rad/s}$ in $6\\text{ seconds}$. What is the angular acceleration $\u0007lpha$ (in rad/s$^2$)?",
    "options": [],
    "answer": "5. $\u0007lpha = (\\omega_f - \\omega_i) / t = (30 - 0) / 6 = 5\\text{ rad/s}^2$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.99",
    "type": "NAT - 2M",
    "question": "In Q8.98, how many revolutions does the wheel make in those 6 seconds?",
    "options": [],
    "answer": "14.32. Total angle $\theta = \frac{1}{2} \u0007lpha t^2 = 0.5 \\times 5 \\times 6^2 = 0.5 \\times 5 \\times 36 = 90\\text{ rad}$. Number of revolutions $N = \theta / (2\\pi) = 90 / (2 \\times 3.1416) = 90 / 6.2832 \u0007pprox 14.32\\text{ revs}$."
  },
  {
    "module": "Mod 8: Circuits (KCL/KVL) & Mechanics",
    "id": "8.100",
    "type": "MCQ - 2M",
    "question": "The work done by friction on a rigid cylinder rolling WITHOUT slipping on a stationary horizontal surface is:",
    "options": [
      "- (A) Positive",
      "- (B) Negative",
      "- (C) Strictly Zero",
      "- (D) Dependent on cylinder radius"
    ],
    "answer": "(C). In pure rolling without slipping, the instantaneous contact point has zero velocity relative to the surface ($v_{\\text{contact}} = 0$). Therefore, the displacement of the point of application of friction is zero, meaning static friction does zero work."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.1",
    "type": "NAT",
    "question": "A bar of cross-section A=500mm², length L=1m, E=200GPa carries axial load P=100kN. Stress σ=?",
    "options": [],
    "answer": "σ=P/A=100000/500×10⁻⁶=200 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.2",
    "type": "MCQ",
    "question": "Hooke's law: σ=Eε. For E=200GPa, ε=0.001: σ=?",
    "options": [
      "- (A) 0.2 MPa  (B) 200 MPa  (C) 2 GPa  (D) 0.2 GPa"
    ],
    "answer": "(B). σ=200×10⁹×0.001=200×10⁶=200 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.3",
    "type": "NAT",
    "question": "Elastic constants relationship: E=2G(1+ν). For E=200GPa, ν=0.25: G=?",
    "options": [],
    "answer": "G=E/[2(1+ν)]=200/[2(1.25)]=200/2.5=80 GPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.4",
    "type": "MCQ",
    "question": "Volumetric strain ev=σavg/K where K=bulk modulus=E/[3(1-2ν)]. For E=200GPa, ν=0.3: K=?",
    "options": [
      "- (A) 100GPa  (B) 133.3GPa  (C) 200GPa  (D) 166.7GPa"
    ],
    "answer": "(D). K=200/[3(1-0.6)]=200/[3×0.4]=200/1.2=166.7 GPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.5",
    "type": "NAT",
    "question": "Relationship: E=3K(1-2ν). For K=167GPa, ν=0.3: E=?",
    "options": [],
    "answer": "E=3×167×(1-0.6)=3×167×0.4=200.4≈200 GPa. ✓"
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.6",
    "type": "MCQ",
    "question": "Poisson's ratio ν for steel is approximately:",
    "options": [
      "- (A) 0  (B) 0.5  (C) 0.3  (D) 1.0"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.7",
    "type": "NAT",
    "question": "A steel rod (E=200GPa, ν=0.3) under σx=200MPa, σy=σz=0. Longitudinal strain εx=?",
    "options": [],
    "answer": "εx=σx/E=200×10⁶/(200×10⁹)=0.001=1000 με."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.8",
    "type": "MCQ",
    "question": "For uniaxial stress σx: transverse strain εy=?",
    "options": [
      "- (A) -ν×εx  (B) ν×εx  (C) εx/E  (D) εx/ν"
    ],
    "answer": "(A). εy=-ν(σx/E)=-ν×εx."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.9",
    "type": "NAT",
    "question": "Volumetric strain for hydrostatic stress σ: ΔV/V=?",
    "options": [],
    "answer": "ΔV/V=3σ(1-2ν)/E=σ/K."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.10",
    "type": "MCQ",
    "question": "Safety factor (FOS) in design:",
    "options": [
      "- (A) FOS=applied stress/yield stress",
      "- (B) FOS=yield stress/applied stress",
      "- (C) FOS=fracture stress/elastic stress",
      "- (D) FOS=UTS/yield stress"
    ],
    "answer": "(B). FOS=strength/working stress."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.11",
    "type": "NAT",
    "question": "Bar of steel: L=500mm, A=200mm², P=40kN, E=200GPa. Deformation δ=?",
    "options": [],
    "answer": "δ=PL/(AE)=40000×0.5/(200×10⁻⁶×200×10⁹)=20000/(40000000)=5×10⁻⁴m=0.5mm."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.12",
    "type": "MCQ",
    "question": "True stress differs from engineering stress after:",
    "options": [
      "- (A) Elastic deformation  (B) Necking (large plastic deformation)  (C) Fracture  (D) Yield point"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.13",
    "type": "NAT",
    "question": "Strain energy density u=σ²/(2E). For σ=100MPa, E=200GPa: u=?",
    "options": [],
    "answer": "u=(100×10⁶)²/(2×200×10⁹)=10¹⁰/(4×10¹¹)=0.025 MJ/m³=25 kJ/m³."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.14",
    "type": "MCQ",
    "question": "Thermal stress in a constrained bar: σ=?",
    "options": [
      "- (A) EαΔT  (B) αΔT/E  (C) EΔT  (D) Eα"
    ],
    "answer": "(A). Thermal stress σ=EαΔT (no free expansion allowed)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.15",
    "type": "NAT",
    "question": "Steel bar constrained at both ends, ΔT=50°C, α=12×10⁻⁶/°C, E=200GPa: thermal stress?",
    "options": [],
    "answer": "σ=EαΔT=200×10⁹×12×10⁻⁶×50=120 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.16",
    "type": "MCQ",
    "question": "Factor that increases yield strength by cold working:",
    "options": [
      "- (A) Annealing  (B) Strain hardening  (C) Quenching  (D) Normalizing"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.17",
    "type": "NAT",
    "question": "For biaxial stress (σx=100MPa, σy=50MPa, τxy=0): principal stresses?",
    "options": [],
    "answer": "σ1=100 MPa, σ2=50 MPa (already principal since τxy=0)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.18",
    "type": "MCQ",
    "question": "Octahedral shear stress theory (von Mises) failure criterion: τoct=?",
    "options": [
      "- (A) (σ1-σ2)/2  (B) (1/3)√[(σ1-σ2)²+(σ2-σ3)²+(σ3-σ1)²]",
      "- (C) Max(σi)/2  (D) (σ1+σ2+σ3)/3"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.19",
    "type": "NAT",
    "question": "von Mises criterion for yielding (uniaxial): σ_e=σ1 at yield point when σ_e≥Syt. Von Mises equivalent stress for σx=100MPa, σy=0, τxy=60MPa?",
    "options": [],
    "answer": "σ_e=√(σx²-σxσy+σy²+3τxy²)=√(10000+0+0+3×3600)=√(10000+10800)=√20800≈144.2 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.20",
    "type": "MCQ",
    "question": "Tresca (maximum shear stress) criterion: yielding when τmax≥?",
    "options": [
      "- (A) Syt  (B) Syt/2  (C) 0.577Syt  (D) 2Syt"
    ],
    "answer": "(B). Tresca: τmax=Syt/2 at yield."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.21",
    "type": "NAT",
    "question": "Rankine (maximum normal stress) theory: failure when max principal stress=?",
    "options": [],
    "answer": "Sut (ultimate tensile strength) — used for brittle materials."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.22",
    "type": "MCQ",
    "question": "Material with E=200GPa, Syt=250MPa. Allowable stress with FOS=2:",
    "options": [
      "- (A) 500MPa  (B) 250MPa  (C) 125MPa  (D) 100MPa"
    ],
    "answer": "(C). Allowable=250/2=125 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.23",
    "type": "NAT",
    "question": "A shaft transmits power P=50kW at N=1000RPM. Torque T=?",
    "options": [],
    "answer": "T=P/(2πN/60)=50000/(2π×1000/60)=50000/104.72=477.5 N·m."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.24",
    "type": "MCQ",
    "question": "Composite bar (two materials in series): compatible quantity is:",
    "options": [
      "- (A) Stress (equal stresses)  (B) Force (equal forces)  (C) Strain (equal strains)  (D) Modulus"
    ],
    "answer": "(B). Series: same force P, different stresses and strains."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.25",
    "type": "NAT",
    "question": "Composite bar (two materials in parallel): compatible quantity? --- ### SECTION B: MOHR'S CIRCLE & PRINCIPAL STRESSES — 20 Questions",
    "options": [],
    "answer": "Deformation/strain (equal deformations); forces add up: P=P₁+P₂."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.26",
    "type": "NAT",
    "question": "Mohr's circle center C for state (σx=100, σy=-40, τxy=48 MPa)?",
    "options": [],
    "answer": "C=(σx+σy)/2=(100+(-40))/2=30 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.27",
    "type": "MCQ",
    "question": "Radius of Mohr's circle R=?",
    "options": [
      "- (A) (σx-σy)/2  (B) √[(σx-σy)²/4+τxy²]  (C) τxy  (D) (σx+σy)/2"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.28",
    "type": "NAT",
    "question": "For σx=100, σy=-40, τxy=48 MPa: R=?",
    "options": [],
    "answer": "R=√[(100-(-40))²/4+48²]=√[70²+48²]=√[4900+2304]=√7204≈84.9 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.29",
    "type": "MCQ",
    "question": "Principal stresses: σ1,2=C±R. For C=30, R=84.9 MPa: σ1=?",
    "options": [
      "- (A) 54.9 MPa  (B) 114.9 MPa  (C) 84.9 MPa  (D) 100 MPa"
    ],
    "answer": "(B). σ1=30+84.9=114.9 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.30",
    "type": "NAT",
    "question": "Maximum in-plane shear stress τmax=?",
    "options": [],
    "answer": "τmax=R=(σ1-σ2)/2=84.9 MPa (radius of Mohr's circle)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.31",
    "type": "MCQ",
    "question": "Angle to principal plane: tan(2θp)=?",
    "options": [
      "- (A) 2τxy/(σx-σy)  (B) τxy/(σx-σy)  (C) (σx-σy)/2τxy  (D) 2τxy/(σx+σy)"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.32",
    "type": "NAT",
    "question": "For σx=80, σy=40, τxy=30 MPa: principal stresses σ1, σ2?",
    "options": [],
    "answer": "C=60, R=√[20²+30²]=√(400+900)=√1300≈36.06. σ1=96.06, σ2=23.94 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.33",
    "type": "MCQ",
    "question": "At the principal planes: shear stress=?",
    "options": [
      "- (A) Maximum  (B) Zero  (C) τxy  (D) R"
    ],
    "answer": "(B). Principal planes have zero shear stress."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.34",
    "type": "NAT",
    "question": "For σx=σy=50MPa, τxy=0: Mohr's circle is?",
    "options": [],
    "answer": "A single point (degenerate circle with R=0). State of hydrostatic stress — all normal stresses equal."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.35",
    "type": "MCQ",
    "question": "Pure shear state (σx=σy=0, τxy=τ): principal stresses are:",
    "options": [
      "- (A) 0 and 2τ  (B) τ and -τ  (C) τ and 0  (D) 2τ and 0"
    ],
    "answer": "(B). C=0, R=τ. σ1=τ, σ2=-τ."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.36",
    "type": "NAT",
    "question": "Absolute maximum shear stress (3D) for σ1=100MPa, σ2=60MPa, σ3=0?",
    "options": [],
    "answer": "τabs_max=(σmax-σmin)/2=(100-0)/2=50 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.37",
    "type": "MCQ",
    "question": "The angle between principal plane and maximum shear plane is:",
    "options": [
      "- (A) 0°  (B) 30°  (C) 45°  (D) 90°"
    ],
    "answer": "(C). Maximum shear planes are 45° from principal planes."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.38",
    "type": "NAT",
    "question": "For thin-walled pressure vessel: circumferential (hoop) stress σh=pd/(2t). For p=2MPa, d=500mm, t=5mm: σh=?",
    "options": [],
    "answer": "σh=2×0.5/(2×0.005)=1.0/0.01=100 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.39",
    "type": "MCQ",
    "question": "Longitudinal stress in thin cylinder: σl=pd/(4t). Ratio σh/σl=?",
    "options": [
      "- (A) 1  (B) 2  (C) 4  (D) 0.5"
    ],
    "answer": "(B). σh/σl=[pd/2t]/[pd/4t]=2."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.40",
    "type": "NAT",
    "question": "For thin sphere: σh=σl=pd/(4t). For p=1MPa, d=400mm, t=4mm: hoop stress?",
    "options": [],
    "answer": "σh=1×0.4/(4×0.004)=0.4/0.016=25 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.41",
    "type": "MCQ",
    "question": "Thick cylinder (Lamé equations): maximum hoop stress occurs at:",
    "options": [
      "- (A) Outer surface  (B) Inner surface  (C) Midwall  (D) Uniform throughout"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.42",
    "type": "NAT",
    "question": "Thin cylinder: volumetric strain εv=(pd/2tE)(5/2-2ν). For p=2MPa, d=200mm, t=4mm, E=200GPa, ν=0.3?",
    "options": [],
    "answer": "εv=(2×0.2)/(2×0.004×200×10⁹)×(2.5-0.6)=(0.4/1.6×10⁹)×1.9=2.5×10⁻¹⁰×1.9×10⁰=... Simplified: εv=pd(5-4ν)/(4tE)=2×200×(5-1.2)/(4×4×200000)=400×3.8/3200000≈4.75×10⁻⁴."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.43",
    "type": "MCQ",
    "question": "In Mohr's circle, the point representing the state on a horizontal plane (σx,τxy) has coordinates:",
    "options": [
      "- (A) (σx, τxy)  (B) (σy, -τxy)  (C) (σx, -τxy)  (D) (τxy, σx)"
    ],
    "answer": "(A). Convention: x-face point = (σx, τxy), y-face point = (σy, -τxy)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.44",
    "type": "NAT",
    "question": "For state σx=0, σy=0, τxy=50MPa: maximum normal stress?",
    "options": [],
    "answer": "σmax=τxy=50 MPa (at 45° principal plane)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.45",
    "type": "MCQ",
    "question": "Failure of a ductile material under combined loading is best predicted by: --- ### SECTION C: BEAMS — SFD, BMD & BENDING — 20 Questions",
    "options": [
      "- (A) Rankine criterion  (B) Tresca or von Mises criterion  (C) Mohr's criterion  (D) Coulomb-Mohr"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.46",
    "type": "MCQ",
    "question": "For simply supported beam (span L) with UDL w: maximum BM at center?",
    "options": [
      "- (A) wL²/2  (B) wL²/8  (C) wL²/4  (D) wL/2"
    ],
    "answer": "(B). M_max=wL²/8."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.47",
    "type": "NAT",
    "question": "Cantilever beam (length L) with point load P at free end: max BM at fixed end=?",
    "options": [],
    "answer": "M=PL."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.48",
    "type": "MCQ",
    "question": "Flexure formula: M/I=σ/y=E/R. Bending stress σ=?",
    "options": [
      "- (A) My/I  (B) MI/y  (C) I/(My)  (D) ME/y"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.49",
    "type": "NAT",
    "question": "Rectangular beam b=50mm, d=100mm. Section modulus Z=I/y_max=bd²/6?",
    "options": [],
    "answer": "Z=50×100²/6=50×10000/6=83333 mm³≈83.33×10³ mm³."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.50",
    "type": "MCQ",
    "question": "For rectangular cross-section: I=?",
    "options": [
      "- (A) bd³/12  (B) bd³/6  (C) b³d/12  (D) bd²/6"
    ],
    "answer": "(A). I=bd³/12 (moment of inertia about neutral axis)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.51",
    "type": "NAT",
    "question": "Moment of inertia of hollow circular section: outer D=100mm, inner d=60mm?",
    "options": [],
    "answer": "I=π(D⁴-d⁴)/64=π(100⁴-60⁴)/64=π(10⁸-1.296×10⁷)/64=π×8.704×10⁷/64≈4.27×10⁶mm⁴."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.52",
    "type": "MCQ",
    "question": "The neutral axis of a beam in bending:",
    "options": [
      "- (A) Has maximum stress  (B) Passes through centroid with zero bending stress  (C) Has maximum strain  (D) Is at top fiber"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.53",
    "type": "NAT",
    "question": "Simply supported beam L=4m, center point load P=20kN: max bending stress for b=100mm, d=200mm beam?",
    "options": [],
    "answer": "M_max=PL/4=20×4/4=20 kN·m. I=bd³/12=100×200³/12=66.67×10⁶mm⁴. σ=My/I=20×10⁶×100/(66.67×10⁶)=30 N/mm²=30 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.54",
    "type": "MCQ",
    "question": "Relationship between shear force V and BM M: V=?",
    "options": [
      "- (A) V=M  (B) V=dM/dx  (C) V=∫Mdx  (D) V=M/L"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.55",
    "type": "NAT",
    "question": "For UDL w: dV/dx=?",
    "options": [],
    "answer": "dV/dx=-w (downward load reduces SF)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.56",
    "type": "MCQ",
    "question": "Point of contraflexure (inflection point) in a beam is where:",
    "options": [
      "- (A) Shear force=0  (B) Bending moment=0  (C) Max deflection  (D) Max slope"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.57",
    "type": "NAT",
    "question": "Shear stress in rectangular beam: τ=VQ/(Ib). At neutral axis for b=50mm, d=100mm, V=10kN?",
    "options": [],
    "answer": "Q=b×(d/2)×(d/4)=50×50×25=62500mm³. I=50×100³/12=4.167×10⁶mm⁴. τ=10000×62500/(4.167×10⁶×50)=6.25×10⁸/(2.083×10⁸)=3.0 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.58",
    "type": "MCQ",
    "question": "Maximum shear stress in rectangular section vs average: τmax/τavg=?",
    "options": [
      "- (A) 1  (B) 1.5  (C) 2  (D) 4/3"
    ],
    "answer": "(B). τmax=1.5×V/A=1.5×τavg."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.59",
    "type": "NAT",
    "question": "Deflection at midspan of simply supported beam with UDL w, span L, EI: δmax=?",
    "options": [],
    "answer": "δmax=5wL⁴/(384EI)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.60",
    "type": "MCQ",
    "question": "Cantilever beam end deflection with tip load P, length L: δtip=?",
    "options": [
      "- (A) PL³/(3EI)  (B) PL³/(48EI)  (C) PL²/(2EI)  (D) 5PL⁴/(384EI)"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.61",
    "type": "NAT",
    "question": "Macaulay's method advantage over integration?",
    "options": [],
    "answer": "Handles discontinuous loading (point loads, partial UDLs) in one expression using Macaulay brackets ⟨x-a⟩."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.62",
    "type": "MCQ",
    "question": "Slope at the end of a cantilever with tip load P:",
    "options": [
      "- (A) PL/(EI)  (B) PL²/(2EI)  (C) PL³/(3EI)  (D) PL/(2EI)"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.63",
    "type": "NAT",
    "question": "For a propped cantilever: statically indeterminate (one redundant). Degree of indeterminacy?",
    "options": [],
    "answer": "1 (one redundant reaction)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.64",
    "type": "MCQ",
    "question": "Area moment method (moment-area theorem): slope between two points = ?",
    "options": [
      "- (A) ∫M dx  (B) Area of M/EI diagram between the two points  (C) Max M/EI  (D) 0"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.65",
    "type": "NAT",
    "question": "Simply supported beam, span L=6m, EI=2×10¹² N·mm²: maximum deflection for P=10kN at center? --- ### SECTION D: TORSION, COLUMNS & FATIGUE — 35 Questions",
    "options": [],
    "answer": "δmax=PL³/(48EI)=10000×6000³/(48×2×10¹²)=10000×2.16×10¹¹/(9.6×10¹³)=2.16×10¹⁵/9.6×10¹³≈22.5 mm."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.66",
    "type": "MCQ",
    "question": "Torsion formula: T/J=τ/r=Gθ/L. Shear stress τ=?",
    "options": [
      "- (A) TJ/r  (B) Tr/J  (C) JT/r  (D) TL/GJ"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.67",
    "type": "NAT",
    "question": "Solid shaft: D=50mm, T=500N·m. Max shear stress τmax?",
    "options": [],
    "answer": "J=πD⁴/32=π×50⁴/32=π×6.25×10⁶/32=6.136×10⁵mm⁴=6.136×10⁻⁷m⁴. τ=Tr/J=500×0.025/(6.136×10⁻⁷)=12.5/(6.136×10⁻⁷)=20.37 MPa≈20.4 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.68",
    "type": "MCQ",
    "question": "Polar moment of inertia for solid circular shaft D:",
    "options": [
      "- (A) πD⁴/64  (B) πD⁴/32  (C) πD³/16  (D) πD⁴/16"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.69",
    "type": "NAT",
    "question": "Hollow shaft: Do=80mm, Di=40mm. J=?",
    "options": [],
    "answer": "J=π(Do⁴-Di⁴)/32=π(80⁴-40⁴)/32=π(40960000-2560000)/32=π×38400000/32≈3.77×10⁶mm⁴."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.70",
    "type": "MCQ",
    "question": "Angle of twist: φ=TL/(GJ). For T=200N·m, L=500mm, G=80GPa, J=10⁵mm⁴: φ=?",
    "options": [
      "- (A) 0.0125 rad  (B) 0.125 rad  (C) 1.25 rad  (D) 12.5 rad"
    ],
    "answer": "(A). φ=200×500/(80×10³×10⁵)=100000/8×10⁹=0.0000125... Wait: G=80GPa=80000 MPa=80000 N/mm². φ=TL/(GJ)=200×10³×500/(80000×10⁵)=10⁸/(8×10⁹)=0.0125 rad. Answer: (A)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.71",
    "type": "NAT",
    "question": "Power transmitted by shaft: P=2πNT/60. For N=1000RPM, T=100N·m: P=?",
    "options": [],
    "answer": "P=2π×1000×100/60=2π×100000/60=10472 W≈10.47 kW."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.72",
    "type": "MCQ",
    "question": "For combined bending (M) and torsion (T): equivalent torque Te (using distortion energy) = ?",
    "options": [
      "- (A) M+T  (B) √(M²+T²)  (C) (M+√(M²+T²))/2  (D) T"
    ],
    "answer": "(B). Te=√(M²+T²) by Rankine (max normal stress); for Tresca: Te=√(M²+T²)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.73",
    "type": "NAT",
    "question": "Euler column critical buckling load: Pcr=π²EI/Le². For E=200GPa, I=10⁶mm⁴, Le=3000mm: Pcr?",
    "options": [],
    "answer": "Pcr=π²×200000×10⁶/(3000²)=π²×2×10¹¹/9×10⁶=1.974×10¹²/9×10⁶=2.19×10⁵N=219 kN."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.74",
    "type": "MCQ",
    "question": "Effective length Le for pin-pin column (both ends pinned)?",
    "options": [
      "- (A) 0.5L  (B) L  (C) 2L  (D) 0.7L"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.75",
    "type": "MCQ",
    "question": "Effective length for fixed-fixed column?",
    "options": [
      "- (A) L  (B) 0.5L  (C) 2L  (D) 0.7L"
    ],
    "answer": "(B). Fixed-fixed: Le=L/2 (strongest against buckling)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.76",
    "type": "NAT",
    "question": "Fixed-free (cantilever) column: Le=?",
    "options": [],
    "answer": "Le=2L (most vulnerable — longest effective length)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.77",
    "type": "MCQ",
    "question": "Slenderness ratio SR=Le/k (k=radius of gyration). Column is \"long\" when SR exceeds:",
    "options": [
      "- (A) 12  (B) 80 (approx. for steel)  (C) 200  (D) 50"
    ],
    "answer": "(B). Approx SR>80 for steel → Euler buckling applies."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.78",
    "type": "NAT",
    "question": "Radius of gyration k=√(I/A). For I=10⁶mm⁴, A=1000mm²: k=?",
    "options": [],
    "answer": "k=√(10⁶/1000)=√1000=31.62 mm."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.79",
    "type": "MCQ",
    "question": "Goodman fatigue criterion: σa/Se + σm/Sut=1/FOS. For σa=50MPa, σm=100MPa, Se=200MPa, Sut=400MPa: FOS=?",
    "options": [
      "- (A) 1.0  (B) 1.5  (C) 2.0  (D) 0.5"
    ],
    "answer": "(C). 50/200+100/400=0.25+0.25=0.5=1/FOS → FOS=2."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.80",
    "type": "NAT",
    "question": "Soderberg criterion: σa/Se + σm/Syt=1/FOS. More conservative than Goodman because uses Syt instead of Sut (Syt<Sut).",
    "options": [],
    "answer": "Yes — Soderberg replaces Sut with Syt, giving smaller allowable mean stress → more conservative."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.81",
    "type": "MCQ",
    "question": "Endurance limit Se (for steel) is approximately:",
    "options": [
      "- (A) 0.3×Sut  (B) 0.5×Sut  (C) Sut  (D) 0.1×Sut"
    ],
    "answer": "(B). Se≈0.5×Sut (Marin equation before modifying factors)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.82",
    "type": "NAT",
    "question": "Stress concentration factor Kt: for notched bar with σ_nom=100MPa, Kt=2.5: max σ=?",
    "options": [],
    "answer": "σmax=Kt×σnom=2.5×100=250 MPa."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.83",
    "type": "MCQ",
    "question": "Fatigue failure initiates at:",
    "options": [
      "- (A) Interior defects only  (B) Surface (typically) due to high stress + surface roughness + environment",
      "- (C) Grain boundaries always  (D) Areas of lowest stress"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.84",
    "type": "NAT",
    "question": "S-N curve (Wöhler curve): for steel, fatigue limit (endurance limit) is reached after approximately how many cycles?",
    "options": [],
    "answer": "~10⁶ to 10⁷ cycles (typically 10⁶ for steel)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.85",
    "type": "MCQ",
    "question": "Variable loading: Miner's rule for cumulative fatigue damage: failure when?",
    "options": [
      "- (A) Σ(ni/Ni)=0  (B) Σ(ni/Ni)≥1  (C) Any single cycle exceeds Se  (D) ni>Ni"
    ],
    "answer": "(B). Miner's rule: Σ(ni/Ni)=1 at failure."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.86",
    "type": "NAT",
    "question": "Rolling contact bearing rated life L10=[(C/P)^p]×10⁶ rev. For ball bearing p=3, C=20kN, P=10kN: L10?",
    "options": [],
    "answer": "L10=(20/10)³×10⁶=8×10⁶ revolutions."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.87",
    "type": "MCQ",
    "question": "The basic load rating C of a rolling element bearing is the load at which:",
    "options": [
      "- (A) Bearing seizes  (B) 90% of bearings survive 10⁶ revolutions",
      "- (C) Bearing makes noise  (D) Lubrication fails"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.88",
    "type": "NAT",
    "question": "Bearing life hours: Lh=L10/(N×60). For L10=8×10⁶ rev, N=1500RPM: Lh?",
    "options": [],
    "answer": "Lh=8×10⁶/(1500×60)=8×10⁶/90000≈88.9 hours."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.89",
    "type": "MCQ",
    "question": "Fracture mechanics: stress intensity factor K1=σ√(πa)×Y. Material fractures when K1≥?",
    "options": [
      "- (A) Syt  (B) K1c (fracture toughness)  (C) E  (D) Sut"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.90",
    "type": "NAT",
    "question": "For a through crack of length 2a=10mm in an infinite plate: a=?",
    "options": [],
    "answer": "a=5mm=0.005m."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.91",
    "type": "MCQ",
    "question": "Spring (coil spring) stiffness k=Gd⁴/(8D³N). Stiffness is proportional to:",
    "options": [
      "- (A) D³ (increases with coil diameter)  (B) 1/D³ (decreases with D)  (C) N (turns)  (D) 1/d⁴"
    ],
    "answer": "(B). k∝1/D³ — larger coil diameter means softer spring."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.92",
    "type": "NAT",
    "question": "Spring stiffness k=Gd⁴/(8D³N). For G=80GPa, d=5mm, D=40mm, N=10 coils: k?",
    "options": [],
    "answer": "k=80000×5⁴/(8×40³×10)=80000×625/(8×64000×10)=5×10⁷/(5.12×10⁶)=9.77 N/mm≈10 N/mm."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.93",
    "type": "MCQ",
    "question": "Wahl's correction factor for springs accounts for:",
    "options": [
      "- (A) Temperature effects  (B) Curvature and direct shear in spring wire",
      "- (C) Material fatigue  (D) Coil pitch"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.94",
    "type": "NAT",
    "question": "Energy stored in spring: U=kδ²/2=P²/(2k). For k=10N/mm, δ=20mm: U?",
    "options": [],
    "answer": "U=10×20²/2=10×400/2=2000 N·mm=2 J."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.95",
    "type": "MCQ",
    "question": "Thin-walled open section (e.g., C-channel) under torsion: behavior vs closed section?",
    "options": [
      "- (A) Much stiffer in torsion  (B) Much weaker in torsion (open sections have much lower torsional rigidity)",
      "- (C) Identical  (D) Cannot carry torque"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.96",
    "type": "NAT",
    "question": "Castigliano's theorem: deflection at point of applied force P = ∂U/∂P where U=?",
    "options": [],
    "answer": "U = total strain energy of the structure."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.97",
    "type": "MCQ",
    "question": "Virtual work method for deflection:",
    "options": [
      "- (A) Applies virtual temperature change  (B) Applies unit virtual force at desired deflection point and computes work done by real moments",
      "- (C) Requires energy calculation  (D) Only for statically indeterminate structures"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.98",
    "type": "NAT",
    "question": "Maxwell's reciprocal theorem: deflection at A due to force at B = deflection at B due to same force at A. True for which structures?",
    "options": [],
    "answer": "Linear elastic structures (Betti's/Maxwell's reciprocal theorem)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.99",
    "type": "MCQ",
    "question": "For a truss: zero-force members can be identified by:",
    "options": [
      "- (A) Arbitrary selection  (B) Equilibrium at joint (if two non-collinear members meet at unloaded joint, both zero-force)",
      "- (C) Sections method  (D) FEM only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 9: SOM (Part B2)",
    "id": "9.100",
    "type": "NAT",
    "question": "For a determinate truss: m=2j-3 (m=members, j=joints). For j=10: m=? --- *Module 9 Complete — 100 Questions*",
    "options": [],
    "answer": "m=2×10-3=17 members."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.1",
    "type": "MCQ",
    "question": "Transfer function of a system is defined as:",
    "options": [
      "- (A) Output/Input in time domain",
      "- (B) Laplace transform of output/Laplace transform of input (with zero initial conditions)",
      "- (C) Differential equation of the system",
      "- (D) Time constant"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.2",
    "type": "NAT",
    "question": "For G(s)=10/(s+5): DC gain (s=0)?",
    "options": [],
    "answer": "G(0)=10/5=2."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.3",
    "type": "MCQ",
    "question": "Unity feedback closed-loop TF: T(s)=G/(1+G). For G(s)=5/s: T(s)=?",
    "options": [
      "- (A) 5/(s+5)  (B) 5/s  (C) 1/(s+5)  (D) s/(s+5)"
    ],
    "answer": "(A). T=G/(1+G)=(5/s)/(1+5/s)=5/(s+5)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.4",
    "type": "NAT",
    "question": "Characteristic equation of closed-loop system (unity feedback): 1+G(s)H(s)=0. For G=10/(s+2), H=1: char. equation?",
    "options": [],
    "answer": "1+10/(s+2)=0 → (s+2)+10=0 → s+12=0 → s=-12."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.5",
    "type": "MCQ",
    "question": "Block diagram reduction: two blocks G1, G2 in parallel (different paths to output): equivalent G=?",
    "options": [
      "- (A) G1×G2  (B) G1+G2  (C) G1/G2  (D) G1-G2"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.6",
    "type": "NAT",
    "question": "Feedback loop: forward path G(s)=100/(s(s+10)), H(s)=1. Closed-loop poles?",
    "options": [],
    "answer": "Char. eq: s²+10s+100=0. Roots: s=(-10±√(100-400))/2=(-10±j√300)/2=-5±j8.66."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.7",
    "type": "MCQ",
    "question": "A system with transfer function G(s)=K/[(s+a)(s+b)]: order is?",
    "options": [
      "- (A) 0  (B) 1  (C) 2  (D) 3"
    ],
    "answer": "(C)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.8",
    "type": "NAT",
    "question": "Signal flow graph: Mason's gain formula involves sum of forward path gains divided by?",
    "options": [],
    "answer": "The graph determinant Δ=1-ΣLi+ΣLiLj-... (alternating sums of loop gains)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.9",
    "type": "MCQ",
    "question": "Steady-state error for step input to type-1 system (G has one integrator): ess=?",
    "options": [
      "- (A) 1/(1+Kp) where Kp=position error constant",
      "- (B) 0",
      "- (C) 1/Kv",
      "- (D) ∞"
    ],
    "answer": "(B). Type-1 system has zero steady-state error for step input."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.10",
    "type": "NAT",
    "question": "Position error constant Kp=lim(s→0) G(s)H(s). For G=5/(s+2), H=1: Kp=?",
    "options": [],
    "answer": "Kp=G(0)H(0)=5/2×1=2.5."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.11",
    "type": "MCQ",
    "question": "Steady-state error for step input (unit step): ess=1/(1+Kp). For Kp=2.5: ess=?",
    "options": [
      "- (A) 0.5  (B) 0.286  (C) 0.4  (D) 1"
    ],
    "answer": "(B). ess=1/3.5=0.286."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.12",
    "type": "NAT",
    "question": "Velocity error constant Kv=lim(s→0) s×G(s)H(s). For G=10/[s(s+5)], H=1: Kv=?",
    "options": [],
    "answer": "Kv=lim(s→0) s×10/[s(s+5)]=10/5=2."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.13",
    "type": "MCQ",
    "question": "System type number determines error to which standard input?",
    "options": [
      "- (A) Type 0: zero error for step; Type 1: zero error for ramp; Type 2: zero for parabola",
      "- (B) Type 0: zero error for ramp",
      "- (C) Type 1: finite error for step",
      "- (D) All types have same error"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.14",
    "type": "NAT",
    "question": "For PID controller: C(s)=Kp+Ki/s+Kd×s. In terms of TF: C(s)=?",
    "options": [],
    "answer": "C(s)=(Kd×s²+Kp×s+Ki)/s."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.15",
    "type": "MCQ",
    "question": "Integral action (I) in PID controller:",
    "options": [
      "- (A) Speeds up response  (B) Reduces/eliminates steady-state error  (C) Improves stability  (D) Reduces overshoot"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.16",
    "type": "NAT",
    "question": "Derivative action (D) in PID: anticipates future error (damping). Effect on transient response?",
    "options": [],
    "answer": "Reduces overshoot and improves stability (adds damping); may amplify noise."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.17",
    "type": "MCQ",
    "question": "Proportional control only (with unity feedback) for step input: steady-state error is:",
    "options": [
      "- (A) Always zero  (B) Non-zero (proportional to 1/(1+Kp))  (C) Infinite  (D) Oscillatory"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.18",
    "type": "NAT",
    "question": "For 2nd order system G(s)=ωn²/[s(s+2ζωn)]: closed-loop TF?",
    "options": [],
    "answer": "T(s)=ωn²/(s²+2ζωns+ωn²)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.19",
    "type": "MCQ",
    "question": "Standard 2nd order system: T(s)=ωn²/(s²+2ζωns+ωn²). Natural frequency ωn and damping ratio ζ determine?",
    "options": [
      "- (A) Only rise time  (B) Transient response: overshoot, settling time, oscillation frequency",
      "- (C) Steady-state error only  (D) System type"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.20",
    "type": "NAT",
    "question": "For ζ=0.6, ωn=10 rad/s: damped natural frequency ωd=? --- ### SECTION B: STABILITY — ROUTH, BODE, ROOT LOCUS — 25 Questions",
    "options": [],
    "answer": "ωd=ωn√(1-ζ²)=10√(1-0.36)=10√0.64=10×0.8=8 rad/s."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.21",
    "type": "MCQ",
    "question": "Routh-Hurwitz criterion determines stability by:",
    "options": [
      "- (A) Root locus plot  (B) Sign changes in first column of Routh array (= number of RHP roots)",
      "- (C) Bode plot  (D) Nyquist diagram"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.22",
    "type": "NAT",
    "question": "Routh array for s³+2s²+4s+8=0: first column signs?",
    "options": [],
    "answer": "Row 1: 1,4; Row 2: 2,8; Row 3: (2×4-1×8)/2=0/2=0 (special case). Zero in first column = marginal stability."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.23",
    "type": "MCQ",
    "question": "A system with char. eq s³+3s²+Ks+K=0 is stable for K in range:",
    "options": [
      "- (A) K<0  (B) K>0 only  (C) 0<K<∞ (need to check: Routh row3=(3K-K)/3=2K/3>0 when K>0, and K>0)",
      "- (D) K>3"
    ],
    "answer": "(B). Both K>0 and 2K/3>0 → K>0."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.24",
    "type": "NAT",
    "question": "Gain margin (GM) is defined as:",
    "options": [],
    "answer": "GM=1/|G(jω_pc)H(jω_pc)| in absolute terms, or GM(dB)=-20log|GH| at phase crossover frequency ω_pc (where phase=-180°)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.25",
    "type": "MCQ",
    "question": "Phase margin (PM) is the additional phase lag needed to reach -180°:",
    "options": [
      "- (A) PM = ∠GH(jω_gc) + 180° (where ωgc is gain crossover frequency)",
      "- (B) PM = |GH|-1",
      "- (C) PM = ωgc/ωpc",
      "- (D) PM = Kp"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.26",
    "type": "NAT",
    "question": "For a stable system: GM>0 dB and PM>0°. For GM=10dB, PM=45°: system is?",
    "options": [],
    "answer": "Stable (both positive margins)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.27",
    "type": "MCQ",
    "question": "In Bode plot, G(s)=K/[s(1+sT)]: slope at very high frequency?",
    "options": [
      "- (A) -20 dB/decade  (B) -40 dB/decade  (C) 0 dB/decade  (D) +20 dB/decade"
    ],
    "answer": "(B). At high ω: G≈K/(s²T) → -40 dB/decade."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.28",
    "type": "NAT",
    "question": "G(jω)=1/(jω+1): corner frequency ωc=?",
    "options": [],
    "answer": "ωc=1 rad/s (breakpoint frequency where magnitude drops 3 dB)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.29",
    "type": "MCQ",
    "question": "Magnitude of G(jω)=1/(1+jωT) at ω=1/T (corner frequency):",
    "options": [
      "- (A) 1  (B) 1/√2≈0.707 (-3dB)  (C) 0  (D) √2"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.30",
    "type": "NAT",
    "question": "Root locus begins at _____ and ends at _____.",
    "options": [],
    "answer": "Begins at open-loop poles (K=0) and ends at open-loop zeros (K→∞)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.31",
    "type": "MCQ",
    "question": "Number of root locus branches equals:",
    "options": [
      "- (A) Number of zeros  (B) Number of poles  (C) n-m (n=poles, m=zeros)  (D) n+m"
    ],
    "answer": "(B). Number of branches = n (number of open-loop poles)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.32",
    "type": "NAT",
    "question": "For G(s)=K/[s(s+2)]: centroid of asymptotes σ=?",
    "options": [],
    "answer": "σ=(Σpoles-Σzeros)/(n-m)=(0+(-2)-0)/(2-0)=-2/2=-1."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.33",
    "type": "MCQ",
    "question": "Nyquist criterion: number of closed-loop RHP poles N=?",
    "options": [
      "- (A) N=Z-P (Z=CW encirclements of -1, P=open-loop RHP poles)",
      "- (B) N=P-Z  (Nyquist: N=Z-P where N=clockwise encirclements)",
      "- (C) N=Z+P  (D) N=Z/P"
    ],
    "answer": "(A) or more precisely: N (clockwise encirclements of -1) = Z (CL RHP) - P (OL RHP)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.34",
    "type": "NAT",
    "question": "For type-2 system (double integrator): G(s)=K/s². Phase at all frequencies?",
    "options": [],
    "answer": "Phase=-180° (constant, since each integrator contributes -90°, two integrators → -180°)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.35",
    "type": "MCQ",
    "question": "Lead compensator C(s)=Kc(s+z)/(s+p), z<p: provides:",
    "options": [
      "- (A) Phase lag at all frequencies  (B) Phase lead (improves PM)  (C) Integral action  (D) Gain reduction"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.36",
    "type": "NAT",
    "question": "Lag compensator effect on steady-state error?",
    "options": [],
    "answer": "Reduces (improves) steady-state error by providing high gain at low frequencies."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.37",
    "type": "MCQ",
    "question": "Bandwidth of closed-loop system relates to:",
    "options": [
      "- (A) Only steady-state error  (B) Speed of response (higher BW = faster response)",
      "- (C) Only phase margin  (D) Number of poles"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.38",
    "type": "NAT",
    "question": "For unity gain crossover ωgc: |G(jωgc)H(jωgc)|=?",
    "options": [],
    "answer": "1 (0 dB)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.39",
    "type": "MCQ",
    "question": "A system with PM=60°: expected peak overshoot (approximate)?",
    "options": [
      "- (A) ~5%  (B) ~10%  (C) ~30%  (D) ~50%"
    ],
    "answer": "(B). For 2nd-order: PM≈60° → ζ≈0.6 → overshoot≈9.5%."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.40",
    "type": "NAT",
    "question": "Gain margin in dB: GM_dB=-20log|GH(jω_pc)|. If |GH(jω_pc)|=0.25: GM_dB=?",
    "options": [],
    "answer": "GM=-20log(0.25)=-20×(-0.602)=12 dB."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.41",
    "type": "MCQ",
    "question": "Ziegler-Nichols tuning: at ultimate gain Ku and period Tu, PID Kp=?",
    "options": [
      "- (A) 0.6Ku  (B) 0.5Ku  (C) Ku/1.7  (D) Ku"
    ],
    "answer": "(A). Z-N PID: Kp=0.6Ku, Ti=Tu/2, Td=Tu/8."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.42",
    "type": "NAT",
    "question": "Z-N PID: Ti (integral time) = ?",
    "options": [],
    "answer": "Ti=Tu/2."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.43",
    "type": "MCQ",
    "question": "Cascade (series) compensator C(s) placed in the forward path:",
    "options": [
      "- (A) Cannot improve performance  (B) Can shape the open-loop frequency response for desired PM, BW",
      "- (C) Only used for lag  (D) Only used for lead"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.44",
    "type": "NAT",
    "question": "Second-order underdamped system: % overshoot = exp(-πζ/√(1-ζ²))×100%. For ζ=0.5: %OS?",
    "options": [],
    "answer": "%OS=exp(-π×0.5/√0.75)×100=exp(-1.814)×100≈16.3%."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.45",
    "type": "MCQ",
    "question": "Settling time (2% criterion) for 2nd order system: ts≈? --- ### SECTION C: STATE SPACE & ROBOT CONTROL — 30 Questions",
    "options": [
      "- (A) 4/(ζωn)  (B) π/ωd  (C) 2/(ζωn)  (D) ωn/ζ"
    ],
    "answer": "(A). ts≈4/(ζωn) for 2% band."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.46",
    "type": "MCQ",
    "question": "State space representation: ẋ=Ax+Bu, y=Cx+Du. Matrix A is called:",
    "options": [
      "- (A) Input matrix  (B) System/Plant matrix  (C) Output matrix  (D) Feedforward matrix"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.47",
    "type": "NAT",
    "question": "For ẋ=Ax+Bu: eigenvalues of A determine?",
    "options": [],
    "answer": "System stability (all eigenvalues in left half-plane → stable)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.48",
    "type": "MCQ",
    "question": "Controllability of state space system: Kalman's condition?",
    "options": [
      "- (A) Rank(Cc)=n where Cc=[B, AB, A²B, ..., A^{n-1}B]",
      "- (B) All eigenvalues negative  (C) det(A)≠0  (D) Output matrix C full rank"
    ],
    "answer": "(A)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.49",
    "type": "NAT",
    "question": "Observability condition: rank(Co)=n where Co=?",
    "options": [],
    "answer": "Co=[Cᵀ, AᵀCᵀ, (Aᵀ)²Cᵀ,...,(Aᵀ)^{n-1}Cᵀ]."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.50",
    "type": "MCQ",
    "question": "State feedback control u=-Kx: closed-loop system becomes?",
    "options": [
      "- (A) ẋ=(A+BK)x  (B) ẋ=(A-BK)x  (C) ẋ=Ax  (D) ẋ=(A+B)x"
    ],
    "answer": "(B). u=-Kx → ẋ=Ax+B(-Kx)=(A-BK)x."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.51",
    "type": "NAT",
    "question": "Pole placement by state feedback: design K so eigenvalues of (A-BK) are at desired poles. Requires?",
    "options": [],
    "answer": "System must be fully state controllable (controllability matrix rank=n)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.52",
    "type": "MCQ",
    "question": "LQR (Linear Quadratic Regulator) minimizes cost:",
    "options": [
      "- (A) J=∫(x^T Q x)dt  (B) J=∫(x^T Q x + u^T R u)dt  (C) J=||x||²  (D) J=tr(A)"
    ],
    "answer": "(B). LQR: J=∫₀^∞(xᵀQx+uᵀRu)dt."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.53",
    "type": "NAT",
    "question": "Luenberger observer gain L is designed so that eigenvalues of (A-LC) are:",
    "options": [],
    "answer": "In the left half-plane (stable), typically 3-5× faster than closed-loop poles."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.54",
    "type": "MCQ",
    "question": "Separation principle in state feedback + observer design: states estimated by observer, used for state feedback. Design them:",
    "options": [
      "- (A) Simultaneously  (B) Independently (separation theorem)  (C) Only for MIMO  (D) Only for SISO"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.55",
    "type": "NAT",
    "question": "Kalman filter is the optimal state estimator for systems with:",
    "options": [],
    "answer": "Process noise (Q_noise) and measurement noise (R_noise) — minimizes mean-square estimation error."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.56",
    "type": "MCQ",
    "question": "PD control for robot joint: τ=Kp(qd-q)-Kd(q̇). Stability guaranteed if:",
    "options": [
      "- (A) Kp, Kd<0  (B) Kp, Kd>0  (C) Kd=0  (D) Kp=0"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.57",
    "type": "NAT",
    "question": "Computed torque control for robot: τ=M(q)v+C(q,q̇)q̇+G(q) where v=?",
    "options": [],
    "answer": "v=q̈d+Kv(q̇d-q̇)+Kp(qd-q) — PD control in task space after linearization."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.58",
    "type": "MCQ",
    "question": "The purpose of gravity compensation in robot control:",
    "options": [
      "- (A) Adds virtual gravity  (B) Cancels gravity torques G(q) to improve tracking",
      "- (C) Increases speed  (D) Reduces joint torques to zero always"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.59",
    "type": "NAT",
    "question": "Impedance control for robot sets relationship between:",
    "options": [],
    "answer": "End-effector force/torque and position/velocity deviation — behaves as virtual spring-damper-mass system."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.60",
    "type": "MCQ",
    "question": "Force control vs position control: force control is used when:",
    "options": [
      "- (A) Free-space motion only  (B) Contact tasks (assembly, grinding) where contact force must be regulated",
      "- (C) High-speed motion  (D) Pick and place only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.61",
    "type": "NAT",
    "question": "For a proportional joint position controller τ=Kp×(qd-q): gain Kp units?",
    "options": [],
    "answer": "N·m/rad (torque per angular error)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.62",
    "type": "MCQ",
    "question": "Integral windup in PID control occurs when:",
    "options": [
      "- (A) Derivative term saturates  (B) Integral accumulates large values during saturation (actuator limits)",
      "- (C) Proportional gain is too high  (D) System is unstable"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.63",
    "type": "NAT",
    "question": "Anti-windup technique: clamp integrator output at ±Imax to prevent?",
    "options": [],
    "answer": "Integral windup (excessive accumulated error during saturation leading to large overshoot)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.64",
    "type": "MCQ",
    "question": "Feedforward control adds to feedback:",
    "options": [
      "- (A) Only used for stability  (B) Compensates for known disturbances/dynamics (reduces tracking error)",
      "- (C) Replaces feedback  (D) Increases steady-state error"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.65",
    "type": "NAT",
    "question": "For a PID controller with anti-windup: what happens when actuator saturates?",
    "options": [],
    "answer": "Integrator is stopped (clamped) or back-calculated to prevent integral accumulation beyond useful range."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.66",
    "type": "MCQ",
    "question": "Discrete-time PID (digital implementation): integral approximated by:",
    "options": [
      "- (A) Differentiation  (B) Euler (rectangular) or Tustin (bilinear) integration",
      "- (C) Fourier transform  (D) Z-transform inversion"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.67",
    "type": "NAT",
    "question": "Z-transform of unit step (discrete): z/(z-1). For unit delay z⁻¹: equivalent to?",
    "options": [],
    "answer": "One sample period delay: x[n-1] → z⁻¹X(z)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.68",
    "type": "MCQ",
    "question": "Nyquist sampling theorem for digital control: sampling frequency must be:",
    "options": [
      "- (A) Equal to signal BW  (B) At least 5-10× control bandwidth (rule of thumb; minimum 2× per Nyquist)",
      "- (C) As slow as possible  (D) Exactly 1 kHz"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.69",
    "type": "NAT",
    "question": "For digital PID, sample time Ts=1ms. Discrete derivative approximation?",
    "options": [],
    "answer": "Dd[n]=(e[n]-e[n-1])/Ts (backward difference)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.70",
    "type": "MCQ",
    "question": "Sliding mode control (SMC) for robot:",
    "options": [
      "- (A) Requires exact model  (B) Robust to bounded uncertainties/disturbances by enforcing sliding surface",
      "- (C) Only works for linear systems  (D) Eliminates all control effort"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.71",
    "type": "NAT",
    "question": "The sliding surface s=ė+λe=0 for λ>0 defines stable error dynamics. Choose λ to set:",
    "options": [],
    "answer": "Error convergence rate (λ is desired pole of error dynamics — negative real part for stability)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.72",
    "type": "MCQ",
    "question": "Adaptive control adjusts:",
    "options": [
      "- (A) System hardware  (B) Controller parameters online based on system identification or performance index",
      "- (C) Only set points  (D) Motor current only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.73",
    "type": "NAT",
    "question": "Model Reference Adaptive Control (MRAC): reference model specifies?",
    "options": [],
    "answer": "Desired closed-loop behavior (desired output trajectory). Adaptation law adjusts controller parameters to make plant output match reference model output."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.74",
    "type": "MCQ",
    "question": "Robust control (H∞) minimizes:",
    "options": [
      "- (A) Reference tracking error  (B) Worst-case disturbance amplification (||T||∞ < γ)",
      "- (C) Only noise  (D) Control effort only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.75",
    "type": "NAT",
    "question": "For a PID-controlled robot joint with position error e=0.05 rad, Kp=100 N·m/rad, Ki=10 N·m/(rad·s), Kd=5 N·m·s/rad, integral=0.1, ė=0.01 rad/s: control output τ? --- ### SECTION D: PROCESS CONTROL & ADVANCED TOPICS — 25 Questions",
    "options": [],
    "answer": "τ=100×0.05+10×0.1+5×0.01=5+1+0.05=6.05 N·m."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.76",
    "type": "MCQ",
    "question": "SISO vs MIMO: a MIMO system has:",
    "options": [
      "- (A) Multiple inputs OR outputs  (B) Multiple inputs AND multiple outputs  (C) Only one input  (D) Single variable"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.77",
    "type": "NAT",
    "question": "For a 3-DOF robot in joint space control: how many independent SISO controllers needed?",
    "options": [],
    "answer": "3 (one per joint, if decoupled — ignoring dynamic coupling)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.78",
    "type": "MCQ",
    "question": "Decoupling control for MIMO systems:",
    "options": [
      "- (A) Ignores cross-coupling  (B) Designs controller to eliminate cross-coupling between input-output pairs",
      "- (C) Reduces system order  (D) Only works with state feedback"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.79",
    "type": "NAT",
    "question": "Relative Gain Array (RGA) for pairing inputs-outputs in MIMO: λij=?",
    "options": [],
    "answer": "λij=(∂yi/∂uj)_open × (∂yi/∂uj)_closed... RGA = G×(G⁻¹)ᵀ (element-wise product)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.80",
    "type": "MCQ",
    "question": "PLC-based sequence control vs continuous PID control:",
    "options": [
      "- (A) PLCs cannot do PID  (B) PLCs handle discrete logic; PID handles continuous regulation (both can be in PLC)",
      "- (C) PID is only analog  (D) PLCs are faster"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.81",
    "type": "NAT",
    "question": "For a robot grinding task: which control mode maintains constant contact force?",
    "options": [],
    "answer": "Force control (or impedance/hybrid force-position control)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.82",
    "type": "MCQ",
    "question": "Compliant motion for peg-in-hole assembly uses:",
    "options": [
      "- (A) Pure position control  (B) Passive compliance (RCC) or active impedance control to avoid jamming",
      "- (C) High stiffness control only  (D) No feedback"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.83",
    "type": "NAT",
    "question": "RCC (Remote Center Compliance) device for assembly: what does it do?",
    "options": [],
    "answer": "Provides passive mechanical compliance with center of compliance at the tip (tool center point) — accommodates positional and angular errors during insertion."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.84",
    "type": "MCQ",
    "question": "Joint torque control (inner loop) bandwidth should be compared to position loop:",
    "options": [
      "- (A) Same  (B) Much faster (torque BW >> position BW, typically 5-10×)",
      "- (C) Slower  (D) Independent"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.85",
    "type": "NAT",
    "question": "For a cascaded control (position→velocity→torque): the innermost loop is?",
    "options": [],
    "answer": "Torque/current control (fastest loop)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.86",
    "type": "MCQ",
    "question": "Dead-zone nonlinearity in robot joints (from gears/backlash) causes:",
    "options": [
      "- (A) Linear response always  (B) Limit cycles, steady-state error, poor tracking near zero velocity",
      "- (C) Faster response  (D) Better stability"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.87",
    "type": "NAT",
    "question": "Friction compensation in robot control: model τf=μc×sign(q̇)+b×q̇. What are the two terms?",
    "options": [],
    "answer": "Coulomb friction (μc×sign(q̇)) + viscous friction (b×q̇)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.88",
    "type": "MCQ",
    "question": "Passivity-based control guarantees stability via:",
    "options": [
      "- (A) Lyapunov direct method  (B) Energy-based arguments (robot system is passive — dissipates energy)",
      "- (C) Root locus  (D) Bode plots"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.89",
    "type": "NAT",
    "question": "Lyapunov stability analysis: a system is stable if there exists V(x)>0 with dV/dt?",
    "options": [],
    "answer": "dV/dt≤0 (negative semi-definite for stable, <0 for asymptotically stable)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.90",
    "type": "MCQ",
    "question": "Neural network-based control for robots:",
    "options": [
      "- (A) Requires no training  (B) Can learn inverse dynamics from data to improve tracking",
      "- (C) Only for linear systems  (D) Replaces all sensors"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.91",
    "type": "NAT",
    "question": "Iterative Learning Control (ILC): for a robot doing repetitive tasks, ILC updates:",
    "options": [],
    "answer": "The feedforward control signal based on the error from the previous iteration, to improve tracking over successive trials."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.92",
    "type": "MCQ",
    "question": "Repetitive Control (RC) uses:",
    "options": [
      "- (A) Fixed gain PID  (B) Internal model principle with period-delay in feedback to reject periodic disturbances",
      "- (C) Only for step inputs  (D) State feedback only"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.93",
    "type": "NAT",
    "question": "For a vision-servoing robot: what is the task-space error e?",
    "options": [],
    "answer": "e=s_desired - s_measured (difference between desired and measured image features/coordinates)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.94",
    "type": "MCQ",
    "question": "IBVS (Image-Based Visual Servo) controls the robot based on:",
    "options": [
      "- (A) 3D Cartesian error  (B) Image feature error directly (2D pixel/feature coordinates)",
      "- (C) Joint angle error  (D) Force error"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.95",
    "type": "NAT",
    "question": "The image Jacobian (interaction matrix) L_e relates image feature velocity to camera velocity: ṡ=L_e×vc. Dimensions for 4 point features?",
    "options": [],
    "answer": "L_e is 8×6 (4 features × 2 DOF per feature × 6 camera velocity DOF)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.96",
    "type": "MCQ",
    "question": "Model predictive control (MPC) solves an optimization problem over a:",
    "options": [
      "- (A) Infinite horizon with no constraints  (B) Finite receding (moving) horizon with constraints",
      "- (C) Single time step  (D) Infinite horizon analytically"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.97",
    "type": "NAT",
    "question": "MPC advantage over classical PID: can handle?",
    "options": [],
    "answer": "Multi-variable (MIMO) systems, input/output constraints (actuator limits, safety bounds), and preview (future reference/disturbance)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.98",
    "type": "MCQ",
    "question": "In model-based robot control, parameter uncertainty is handled by:",
    "options": [
      "- (A) Ignoring the uncertainty  (B) Adaptive control, robust control, or learning-based control",
      "- (C) Increasing proportional gain only  (D) Reducing sampling rate"
    ],
    "answer": "(B)."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.99",
    "type": "NAT",
    "question": "Sensor fusion (e.g., encoder + IMU for mobile robot): Kalman filter combines:",
    "options": [],
    "answer": "Prediction from dynamic model (high bandwidth) with correction from sensors (measurement update) — optimal state estimate for Gaussian noise."
  },
  {
    "module": "Mod 10: Control Systems",
    "id": "10.100",
    "type": "MCQ",
    "question": "For a mobile robot (unicycle model): state x=[X,Y,θ]ᵀ, inputs [v,ω]: nonlinear control design? --- *Module 10 Complete — 100 Questions* *Total Question Bank: 1000+ Questions across 10 Modules*",
    "options": [
      "- (A) Only linear control applies  (B) Input-output feedback linearization or sliding mode for nonlinear model",
      "- (C) PID is insufficient  (D) Only open-loop control possible"
    ],
    "answer": "(B)."
  }
];
