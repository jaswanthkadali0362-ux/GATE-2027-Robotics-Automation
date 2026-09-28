# MODULE 5: CIM, PLCs, LADDER LOGIC, CNC & AUTO-ID
## 100 Practice Questions — GATE RA 2027

---

### SECTION A: PLCS & LADDER LOGIC — 30 Questions

**Q5.1 [MCQ - 1M]** The PLC scan cycle order is:
- (A) Output → Program → Input
- (B) Input → Program → Output
- (C) Program → Input → Output
- (D) Input → Output → Program
> **Answer: (B).** Read Inputs → Execute Program → Write Outputs → repeat.

**Q5.2 [NAT - 2M]** A PLC scan time is 10ms. How many scans per second?
> **Answer:** Scans/s = 1000ms/s ÷ 10ms/scan = 100 scans/s.

**Q5.3 [MCQ - 1M]** Normally Open (NO) contact in ladder logic closes when:
- (A) Always closed
- (B) Coil/bit is energized (logic 1)
- (C) Power is removed
- (D) Never closes
> **Answer: (B).**

**Q5.4 [MCQ - 2M]** Normally Closed (NC) contact in ladder logic:
- (A) Closes when coil is energized
- (B) Opens when coil is energized (passes current when coil is OFF)
- (C) Always open
- (D) Identical to NO contact
> **Answer: (B).**

**Q5.5 [NAT - 2M]** TON (Timer On-Delay) timer: preset = 5s, accumulated = 3s. After 2 more seconds, output bit Q state?
> **Answer:** Q = ON (done bit). At accumulated = preset = 5s, Q turns ON.

**Q5.6 [MCQ - 2M]** TOF (Timer Off-Delay) timer differs from TON in that:
- (A) It starts timing when coil is energized
- (B) It starts timing when coil is de-energized (starts timing on falling edge)
- (C) It has no preset value
- (D) It cannot be reset
> **Answer: (B).**

**Q5.7 [NAT - 2M]** CTU (Count Up) counter: preset=10, current count=8. How many more inputs needed to trigger output?
> **Answer:** 10 - 8 = 2 more input pulses (when count = preset = 10, Q turns ON).

**Q5.8 [MCQ - 1M]** PLC CPU performs which function?
- (A) Input/Output isolation only
- (B) Executes the ladder logic program
- (C) Powers the field devices
- (D) Provides HMI display
> **Answer: (B).**

**Q5.9 [MCQ - 2M]** A latching (SET/RESET) circuit in ladder logic maintains a coil state even after the momentary input signal is removed. This is also called:
- (A) Seal-in circuit
- (B) Timer circuit
- (C) Counter circuit
- (D) Comparison circuit
> **Answer: (A).**

**Q5.10 [NAT - 2M]** An E-stop (Emergency Stop) is wired as which contact type for safety?
> **Answer:** NC (Normally Closed) — so a broken wire or unpressed state keeps the circuit energized; pressing E-stop opens the contact and stops the machine.

**Q5.11 [MCQ - 1M]** IEC 61131-3 programming languages for PLCs include (select all that apply, but choose closest):
- (A) Ladder Diagram (LD), Function Block Diagram (FBD), Structured Text (ST)
- (B) Java, Python, C++
- (C) G-code, M-code
- (D) HTML, XML
> **Answer: (A).**

**Q5.12 [NAT - 2M]** A PLC controls a conveyor with a start button (I0.0, NO) and stop button (I0.1, NC). Motor output is Q0.0. With seal-in: write the logic for Run state.
> **Answer:** Run_Rung: [(I0.0 OR Q0.0) AND I0.1] → Q0.0. (OR with self for seal-in; NC stop normally passes current.)

**Q5.13 [MCQ - 2M]** PLC digital I/O isolation is typically achieved by:
- (A) Relays
- (B) Optocouplers (optical isolation)
- (C) Capacitors
- (D) Inductors
> **Answer: (B).**

**Q5.14 [NAT - 2M]** A PLC analog input module with 12-bit ADC and 0-10V range: resolution in mV?
> **Answer:** Resolution = 10000mV / 2¹² = 10000/4096 ≈ 2.44 mV/count.

**Q5.15 [MCQ - 1M]** PROFIBUS is:
- (A) A PLC programming language
- (B) An industrial fieldbus communication protocol
- (C) A type of PLC I/O module
- (D) A sensor type
> **Answer: (B).**

**Q5.16 [MCQ - 2M]** The difference between PLC and relay logic:
- (A) PLCs cannot be reprogrammed
- (B) PLCs are software-based and easily reprogrammable; relay logic is hard-wired
- (C) Relay logic is faster
- (D) PLCs require more wiring
> **Answer: (B).**

**Q5.17 [NAT - 2M]** Scan time determinism: PLC guarantees I/O update within how many scan cycles?
> **Answer:** 1 scan cycle (PLCs update all I/O once per scan — deterministic).

**Q5.18 [MCQ - 1M]** OPC-UA (Open Platform Communications Unified Architecture) is used for:
- (A) PLC programming
- (B) Secure, platform-independent industrial data exchange (Industry 4.0)
- (C) Motor control
- (D) Sensor calibration
> **Answer: (B).**

**Q5.19 [MCQ - 2M]** Safety PLC (SIL-rated) differs from standard PLC by:
- (A) Having more I/O
- (B) Meeting IEC 61508 safety integrity levels with redundant processors and diagnostics
- (C) Being faster
- (D) Using different programming language only
> **Answer: (B).**

**Q5.20 [NAT - 2M]** A TON timer preset = 10s. If PLC scan time = 5ms and input is ON continuously for 5 scans, accumulated time ≈?
> **Answer:** Accumulated = 5 × 5ms = 25ms = 0.025s (far from preset, timer NOT done).

**Q5.21 [MCQ - 1M]** The "Rung" in a ladder diagram represents:
- (A) A subroutine
- (B) A series/parallel logic expression that controls one output (coil)
- (C) A timer
- (D) A memory address
> **Answer: (B).**

**Q5.22 [NAT - 2M]** Compare block (GRT Greater Than) in PLC: if accumulated timer value = 8s and preset comparison = 5s: does GRT trigger?
> **Answer:** Yes — 8 > 5, so GRT block passes (output energized).

**Q5.23 [MCQ - 2M]** MOV (Move) instruction in PLC:
- (A) Moves the PLC physically
- (B) Copies a value from source to destination register
- (C) Moves motor to position
- (D) Deletes a file
> **Answer: (B).**

**Q5.24 [NAT - 2M]** PLC CTD (Count Down) counter: preset=10, current=10. After 3 inputs: current count?
> **Answer:** 10 - 3 = 7. (CTD decrements from preset toward 0.)

**Q5.25 [MCQ - 1M]** The industrial automation hierarchy from bottom to top:
- (A) Enterprise → Plant → Cell → Machine → Sensor
- (B) Sensor/Actuator → Machine → Cell → Plant → Enterprise
- (C) Machine → Sensor → Cell → Plant → Enterprise
- (D) Enterprise → Cell → Machine → Plant → Sensor
> **Answer: (B).**

**Q5.26 [MCQ - 2M]** SCADA (Supervisory Control and Data Acquisition) operates at which level?
- (A) Field level (sensor level)
- (B) Supervisory/plant level (above PLCs)
- (C) Machine level only
- (D) Enterprise level only
> **Answer: (B).**

**Q5.27 [NAT - 2M]** A PLC program with 200 rungs, each taking 0.05ms: program scan time ≈?
> **Answer:** Scan time = 200 × 0.05ms = 10ms/scan.

**Q5.28 [MCQ - 1M]** Retentive timer (RTO) in PLC:
- (A) Resets when input goes low
- (B) Accumulates time even when input goes low; requires separate RES instruction to reset
- (C) Identical to TON
- (D) Counts pulses
> **Answer: (B).**

**Q5.29 [MCQ - 2M]** The "power flow" concept in ladder diagram means:
- (A) Current flow through wires
- (B) Logical continuity from left rail through contacts to right rail (coil energized if path exists)
- (C) Actual electrical power
- (D) Scan direction
> **Answer: (B).**

**Q5.30 [NAT - 2M]** In a ladder rung with contact A (NO), contact B (NC) in series, contact C (NO) in parallel with B: coil Q energizes when?
> **Answer:** Q = A AND (NOT_B_coil OR C). In physical terms: Q = A × (B_NC-state OR C) = Q energizes when A is ON AND (B-coil is OFF OR C is ON).

---

### SECTION B: CNC MACHINING & PROGRAMMING — 30 Questions

**Q5.31 [MCQ - 1M]** G00 in CNC programming is:
- (A) Linear interpolation at feed rate
- (B) Rapid positioning (maximum speed, straight line)
- (C) Circular interpolation clockwise
- (D) Dwell
> **Answer: (B).**

**Q5.32 [NAT - 2M]** CNC turning: cutting speed Vc=120 m/min, workpiece diameter D=40mm. Spindle speed N (RPM)?
> **Answer:** N = (1000 × Vc)/(π × D) = (1000 × 120)/(π × 40) = 120000/125.66 ≈ 954 RPM.

**Q5.33 [MCQ - 2M]** G01 in CNC is:
- (A) Rapid traverse
- (B) Linear interpolation at programmed feed rate
- (C) Circular CW
- (D) Tool change
> **Answer: (B).**

**Q5.34 [NAT - 2M]** CNC milling: feed rate F=200mm/min, spindle N=1000 RPM, number of teeth z=4: feed per tooth fz?
> **Answer:** fz = F/(N×z) = 200/(1000×4) = 0.05 mm/tooth.

**Q5.35 [MCQ - 1M]** G02 and G03 in CNC:
- (A) G02=CCW circular, G03=CW circular
- (B) G02=CW circular, G03=CCW circular
- (C) Both are linear interpolation
- (D) G02=Canned cycle, G03=Drill
> **Answer: (B).**

**Q5.36 [NAT - 2M]** CNC: G90 vs G91. G90=Absolute, G91=Incremental. In G91 mode, current position X=50mm, program says X30. New X position?
> **Answer:** In incremental (G91): new X = 50 + 30 = 80 mm.

**Q5.37 [MCQ - 2M]** Material Removal Rate (MRR) formula in milling:
- (A) MRR = width × depth × feed rate = w × d × fm
- (B) MRR = cutting speed × depth
- (C) MRR = RPM × diameter
- (D) MRR = torque × speed
> **Answer: (A).** MRR = w × d × fm (mm³/min).

**Q5.38 [NAT - 2M]** CNC milling: w=20mm, d=3mm, fm=150mm/min. MRR?
> **Answer:** MRR = 20×3×150 = 9000 mm³/min.

**Q5.39 [MCQ - 1M]** M06 in CNC is:
- (A) Spindle ON CW
- (B) Tool change
- (C) Coolant ON
- (D) Program end
> **Answer: (B).**

**Q5.40 [NAT - 2M]** The Cartesian coordinate system for CNC machines: Z-axis is defined as:
> **Answer:** Along the spindle axis (tool rotation axis), typically pointing away from workpiece.

**Q5.41 [MCQ - 2M]** CNC machine right-hand rule for axes: if Z is spindle axis pointing up, X is:
- (A) Into the machine
- (B) To the right (when facing the machine)
- (C) Vertical
- (D) Along coolant flow
> **Answer: (B).**

**Q5.42 [NAT - 2M]** G81 is a CNC canned cycle for:
> **Answer:** Drilling (standard drill cycle: rapid to position, feed down to depth, rapid retract).

**Q5.43 [MCQ - 1M]** DNC (Direct Numerical Control) means:
- (A) Using a dedicated computer per machine
- (B) Distributive Numerical Control: one computer distributes programs to multiple CNC machines
- (C) Digital NC programming language
- (D) Disconnected NC operation
> **Answer: (B).**

**Q5.44 [NAT - 2M]** CNC surface finish Ra: for turning with nose radius r=0.4mm and feed f=0.1mm/rev: theoretical Ra = f²/(8r)?
> **Answer:** Ra = f²/(8r) = (0.1)²/(8×0.4) = 0.01/3.2 = 0.003125 mm = 3.125 μm.

**Q5.45 [MCQ - 2M]** Tool offset in CNC compensates for:
- (A) Machine table weight
- (B) Difference between programmed and actual tool dimensions (length and radius)
- (C) Spindle speed variation
- (D) Thermal expansion of spindle
> **Answer: (B).**

**Q5.46 [NAT - 2M]** CNC: M03 means Spindle ON CW, M04 means CCW. M05?
> **Answer:** M05 = Spindle STOP.

**Q5.47 [MCQ - 1M]** APT (Automatically Programmed Tool) is:
- (A) A CNC machine type
- (B) A high-level CNC programming language (precursor to modern CAM)
- (C) A tool holder type
- (D) An inspection tool
> **Answer: (B).**

**Q5.48 [NAT - 2M]** CNC lathe: workpiece D=100mm, cutting speed Vc=200 m/min: N in RPM?
> **Answer:** N = 1000×200/(π×100) = 200000/314.16 ≈ 637 RPM.

**Q5.49 [MCQ - 2M]** Post-processor in CAM software converts:
- (A) Design files to simulation
- (B) Generic toolpath (CL data) into machine-specific G-code/M-code
- (C) Images to CAD files
- (D) CAD to finite element mesh
> **Answer: (B).**

**Q5.50 [NAT - 2M]** 5-axis CNC machine has how many linear and rotary axes?
> **Answer:** 3 linear (X,Y,Z) + 2 rotary (A,B or A,C or B,C) = 5 axes total.

**Q5.51 [MCQ - 1M]** G41/G42 in CNC are for:
- (A) Tool length compensation
- (B) Cutter radius compensation (left/right of path)
- (C) Coolant control
- (D) Feed override
> **Answer: (B).**

**Q5.52 [NAT - 2M]** CNC: current position is X=100, Y=100. G01 X150 Y100 F200. Tool moves how far in X?
> **Answer:** ΔX = 150-100 = 50mm (in G90 absolute mode).

**Q5.53 [MCQ - 2M]** The advantage of CNC over conventional machining:
- (A) Lower initial cost
- (B) Consistent part quality, complex geometry, quick changeover via programming
- (C) Simpler maintenance
- (D) Manual intervention needed for every part
> **Answer: (B).**

**Q5.54 [NAT - 2M]** G43 in CNC activates:
> **Answer:** Tool Length Compensation (adds offset H register value to Z axis).

**Q5.55 [MCQ - 1M]** Parametric programming in CNC allows:
- (A) Only simple linear paths
- (B) Use of variables and mathematical functions in NC code (e.g., Fanuc custom macros)
- (C) Manual CNC operation
- (D) Remote CNC control
> **Answer: (B).**

**Q5.56 [NAT - 2M]** CNC: G28 command sends tool to:
> **Answer:** Machine home/reference position (zero return).

**Q5.57 [MCQ - 2M]** A 3-axis CNC machining center has simultaneous motion in:
- (A) Only X axis
- (B) X, Y, and Z axes simultaneously (allows 3D contouring)
- (C) Only X and Y (2.5D)
- (D) All 5 axes
> **Answer: (B).**

**Q5.58 [NAT - 2M]** Chip load per tooth fz = F/(N×z). For N=2000 RPM, z=2 teeth, fz=0.05 mm/tooth: feed rate F?
> **Answer:** F = fz × N × z = 0.05 × 2000 × 2 = 200 mm/min.

**Q5.59 [MCQ - 1M]** High-Speed Machining (HSM) differs from conventional machining by:
- (A) Slower cutting speeds
- (B) Very high spindle speeds and feed rates, thin chips, reduced cutting forces
- (C) Heavier cuts
- (D) No coolant needed
> **Answer: (B).**

**Q5.60 [NAT - 2M]** Taylor's tool life equation: VcTⁿ = C. For n=0.25, C=400, Vc=100 m/min: tool life T?
> **Answer:** T^0.25 = C/Vc = 400/100 = 4. T = 4^(1/0.25) = 4^4 = 256 min.

---

### SECTION C: CIM, AS/RS & AUTO-ID — 25 Questions

**Q5.61 [MCQ - 1M]** CIM (Computer Integrated Manufacturing) integrates:
- (A) Only CNC machines
- (B) Design (CAD/CAM), planning, and production/control through computer networks
- (C) Manual assembly only
- (D) Only quality inspection
> **Answer: (B).**

**Q5.62 [NAT - 2M]** Fixed automation (hard automation) is best for:
> **Answer:** High-volume, low-variety production (e.g., automotive engine block machining) where changeover cost is prohibitive.

**Q5.63 [MCQ - 2M]** Flexible Manufacturing System (FMS) differs from dedicated automation by:
- (A) Lower initial cost
- (B) Ability to process different part families with quick changeover via programmable machines
- (C) Manual operation only
- (D) Single product focus
> **Answer: (B).**

**Q5.64 [NAT - 2M]** AGV (Automated Guided Vehicle) fleet size formula: N_AGV = (total travel time per delivery) / (delivery interval). For 3 stations each needing 1 delivery per 5 min, travel time per trip=3 min: N_AGV?
> **Answer:** N_AGV = (load time + travel + unload + return) / headway. Simplified: N_AGV ≈ 3×(3/5) ≈ 1.8 → 2 AGVs.

**Q5.65 [MCQ - 1M]** AS/RS (Automated Storage and Retrieval System) uses:
- (A) Human operators
- (B) Computer-controlled S/R (Storage/Retrieval) machines moving in rack aisles
- (C) Forklifts only
- (D) Conveyor belts
> **Answer: (B).**

**Q5.66 [NAT - 2M]** AS/RS single-command cycle time Tsc = (time to travel to storage location) + (store/retrieve). Tsc formula includes?
> **Answer:** Tsc = max(T_horizontal/2, T_vertical/2) + service time (Tchebychev metric for unit-load AS/RS).

**Q5.67 [MCQ - 2M]** Dual-command cycle (Tdc) AS/RS is more efficient than single-command because:
- (A) It uses faster S/R machine
- (B) Combines a store and retrieve operation in one trip (reduces empty travel)
- (C) Uses smaller rack
- (D) Only stores items
> **Answer: (B).**

**Q5.68 [NAT - 2M]** A 1D barcode EAN-13 encodes how many digits?
> **Answer:** 13 digits (including check digit).

**Q5.69 [MCQ - 1M]** RFID frequency for logistics (supply chain): which range is used for long-range reading?
- (A) LF 125 kHz (short range, <10cm)
- (B) HF 13.56 MHz (medium, <1m)
- (C) UHF 860-960 MHz (long range, up to ~10m)
- (D) Microwave 2.45 GHz
> **Answer: (C).**

**Q5.70 [MCQ - 2M]** Active RFID tags vs Passive RFID:
- (A) Active have no battery; passive have battery
- (B) Active have their own battery and transmitter; passive derive power from reader RF field
- (C) Both use same frequency
- (D) Passive have longer range
> **Answer: (B).**

**Q5.71 [NAT - 2M]** QR code (Quick Response) stores data in how many dimensions?
> **Answer:** 2 dimensions (2D matrix barcode) — can store more data than 1D barcodes.

**Q5.72 [MCQ - 1M]** Data Matrix code used in electronics manufacturing can encode approximately:
- (A) 10 characters max
- (B) Up to 2335 alphanumeric characters (ECC200)
- (C) Only numbers
- (D) 50 characters
> **Answer: (B).**

**Q5.73 [NAT - 2M]** HF RFID (NFC) frequency:
> **Answer:** 13.56 MHz. Used in contactless smart cards, NFC phones, library books.

**Q5.74 [MCQ - 2M]** Machine Vision inspection system in manufacturing:
- (A) Uses thermal imaging only
- (B) Uses cameras + image processing for non-contact inspection (defect detection, measurement, ID)
- (C) Requires human operator to interpret results
- (D) Only works for metallic parts
> **Answer: (B).**

**Q5.75 [NAT - 2M]** ERP (Enterprise Resource Planning) system in manufacturing manages:
> **Answer:** Business processes including: production planning, inventory, procurement, finance, HR, sales — integrating all departments.

**Q5.76 [MCQ - 1M]** MES (Manufacturing Execution System) operates between:
- (A) Field devices and PLCs
- (B) ERP (business layer) and PLC/SCADA (shop floor control)
- (C) Two PLCs
- (D) Sensors and actuators
> **Answer: (B).**

**Q5.77 [NAT - 2M]** OEE (Overall Equipment Effectiveness) = Availability × Performance × Quality. For: Availability=0.9, Performance=0.85, Quality=0.95: OEE?
> **Answer:** OEE = 0.9 × 0.85 × 0.95 = 0.7268 = 72.7%.

**Q5.78 [MCQ - 2M]** Industry 4.0 (Fourth Industrial Revolution) is characterized by:
- (A) Steam power and mechanization
- (B) Mass production with assembly lines
- (C) Cyber-Physical Systems, IoT, AI, Big Data, cloud connectivity in manufacturing
- (D) Electrification of factories
> **Answer: (C).**

**Q5.79 [NAT - 2M]** Digital Twin in manufacturing is:
> **Answer:** A virtual model of a physical asset, process, or system that mirrors real-world state in real-time for monitoring, simulation, and optimization.

**Q5.80 [MCQ - 1M]** Just-in-Time (JIT) manufacturing principle:
- (A) Produce as much as possible and store
- (B) Produce exactly what is needed, when needed, in the quantity needed (minimize inventory)
- (C) Automate all processes
- (D) Use only CNC machines
> **Answer: (B).**

**Q5.81 [MCQ - 2M]** Kanban system in lean manufacturing uses:
- (A) Computer-only signals
- (B) Visual cards/signals to trigger production/replenishment only when consumed (pull system)
- (C) Push scheduling from ERP
- (D) Automated delivery robots only
> **Answer: (B).**

**Q5.82 [NAT - 2M]** Cycle time vs Takt time: Takt time = (available production time) / (customer demand). For 480 min/day and 240 units/day demand: Takt time?
> **Answer:** Takt time = 480/240 = 2 min/unit.

**Q5.83 [MCQ - 1M]** GT (Group Technology) in manufacturing groups:
- (A) Machines by age
- (B) Similar parts into families based on design/manufacturing similarities (for efficient production cells)
- (C) Workers by skill
- (D) Products by price
> **Answer: (B).**

**Q5.84 [NAT - 2M]** A manufacturing cell with 3 machines in U-shape: what type of automation layout?
> **Answer:** Cellular manufacturing layout (manufacturing cell) — allows one-piece flow and multi-machine operation by one operator.

**Q5.85 [MCQ - 2M]** CAD (Computer-Aided Design) files are converted to CNC programs through:
- (A) Direct coding by operator
- (B) CAM (Computer-Aided Manufacturing) software that generates toolpaths and post-processes to G-code
- (C) PLC programming
- (D) SCADA interface
> **Answer: (B).**

---

### SECTION D: ADDITIONAL CIM & QUALITY — 15 Questions

**Q5.86 [MCQ - 1M]** Poka-Yoke (mistake proofing) in manufacturing:
- (A) Improves machine speed
- (B) Designs physical/process constraints that prevent or detect errors before they become defects
- (C) Reduces material cost
- (D) Automates quality inspection only
> **Answer: (B).**

**Q5.87 [NAT - 2M]** Six Sigma quality level allows how many defects per million opportunities (DPMO)?
> **Answer:** 3.4 DPMO.

**Q5.88 [MCQ - 2M]** SPC (Statistical Process Control) uses:
- (A) MES software
- (B) Control charts (X-bar, R, p charts) to monitor process variation and detect out-of-control states
- (C) CMM measurement
- (D) RFID tracking
> **Answer: (B).**

**Q5.89 [NAT - 2M]** CMM (Coordinate Measuring Machine) measures:
> **Answer:** Part dimensions (X,Y,Z coordinates of surface points) with a probe, comparing to CAD nominal dimensions. Accuracy ~μm level.

**Q5.90 [MCQ - 1M]** ISO 9001 is:
- (A) A CNC programming standard
- (B) Quality Management System standard
- (C) Safety standard for robots
- (D) Material specification
> **Answer: (B).**

**Q5.91 [NAT - 2M]** 3D printing (Additive Manufacturing) builds parts by:
> **Answer:** Adding material layer-by-layer from a digital CAD model (opposite of subtractive machining).

**Q5.92 [MCQ - 2M]** SLA (Stereolithography) curing depth formula: Cd = Dp × ln(E_max/Ec). For Dp=0.125mm, E_max=80 mJ/cm², Ec=20 mJ/cm²: Cd?
> **Answer:** Cd = 0.125 × ln(80/20) = 0.125 × ln(4) = 0.125 × 1.386 = 0.173 mm.

**Q5.93 [MCQ - 1M]** FDM (Fused Deposition Modeling) uses which material form?
- (A) Liquid resin
- (B) Polymer filament (extruded through heated nozzle)
- (C) Metal powder
- (D) Ceramic paste
> **Answer: (B).**

**Q5.94 [NAT - 2M]** SLS (Selective Laser Sintering) uses which energy source?
> **Answer:** Laser (CO₂ or fiber laser) to selectively sinter powdered material (polymer, metal, ceramic).

**Q5.95 [MCQ - 2M]** Wire EDM (Electrical Discharge Machining) can machine:
- (A) Only soft materials
- (B) Any electrically conductive material regardless of hardness (by spark erosion)
- (C) Only polymers
- (D) Non-conductive ceramics
> **Answer: (B).**

**Q5.96 [NAT - 2M]** Rapid Prototyping reduces:
> **Answer:** Product development time and cost by quickly creating physical prototypes from CAD models for design verification before tooling.

**Q5.97 [MCQ - 1M]** Cobots (collaborative robots) are designed to:
- (A) Replace humans entirely
- (B) Work safely alongside humans with force/speed limiting and collision detection
- (C) Operate only in caged cells
- (D) Never touch humans
> **Answer: (B).**

**Q5.98 [NAT - 2M]** ISO 10218 standard covers:
> **Answer:** Safety requirements for industrial robots (and collaborative robots, along with ISO/TS 15066).

**Q5.99 [MCQ - 2M]** Vision-guided robot (bin-picking):
- (A) Uses only encoders
- (B) Uses 3D vision (structured light, stereo, ToF) to locate randomly placed parts in a bin
- (C) Requires precise part placement
- (D) Uses RFID for localization
> **Answer: (B).**

**Q5.100 [NAT - 2M]** The number of AGVs required: demand rate D=20 trips/hr, trip time Tc=12 min/trip (loaded+empty): N_AGV?
> **Answer:** N_AGV = (D × Tc) / 60 = (20 × 12)/60 = 240/60 = 4 AGVs.

---
*Module 5 Complete — 100 Questions*
