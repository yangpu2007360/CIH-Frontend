export const ventilation_questions = [
    {
        number: 1,
        description: "A laboratory room is 20 feet long, 15 feet wide, and 10 feet high. The air exchange rate required is 6 air changes per hour. What is the supply air flow rate required for the room in CFM?",
        choices: [
            "A. 18000 CFM",
            "B. 300 CFM",
            "C. 600 CFM",
            "D. 1000 CFM"
        ],
        answer: "B",
        explain: "Step 1: Calculate the volume of the room. Volume of the room = 20 feet x 15 feet x 10 feet = 3,000 cubic feet.\n\nStep 2: Calculate the total air flow rate required. Total air flow rate required = Volume of the room x Air exchange rate. Total air flow rate required = 3,000 cubic feet x 6 air changes per hour= 18,000 cubic feet per hour (CFH). \n\nStep 3: Convert the total air flow rate required to CFM. Total air flow rate required in CFM = Total air flow rate required / 60 = 18,000 CFH / 60= 300 CFM."
    },
    {
        number: 2,
        description: "What is the term used to describe the number of times the air within a defined space is replaced with fresh air in one hour?",
        choices: [
            "A. Air velocity",
            "B. Air diffusion rate",
            "C. Air exchange rate",
            "D. Air pressure differential"]
        ,
        answer: "C",
        explain: "Air exchange rate, also known as air changes per hour (ACH), represents the rate at which the air in a specific area is completely replaced by fresh air. It indicates how effectively a ventilation system or natural air flow is diluting and removing contaminants from the indoor environment.\n\nA higher air exchange rate means that more fresh air is entering the space, diluting any potential contaminants and improving indoor air quality. This is particularly important in settings where there may be airborne pollutants, odors, or other hazards present.\n\nBy monitoring and controlling the air exchange rate, industrial hygienists can ensure adequate ventilation to maintain a healthy and safe environment for occupants. The appropriate air exchange rate may vary depending on factors such as the nature of contaminants, occupancy levels, and specific industry standards or guidelines."
    },
    {
        number: 3,
        description: "Calculate the volumetric flow rate of an 6-inch diameter duct with a 10 feet per minute (ft/min) duct velocity?",
        choices: [
            "A. 1.96 cubic feet/min",
            "B. 60 cubic feet/min",
            "C. 16 cubic feet/min",
            "D. 282 cubic feet/min"
        ],
        answer: "A",
        explain: "Use Equation 1 in Ventilation (in the formula sheet). Q = VA, A is sectional area of the duct, which equals Area = π * (diameter/2)\u00B2. V is duct velocity. Remember to convert 6 inches to 0.5 ft.\n\n Q = (0.5/2)\u00B2π * 10= 1.96 cfm.",
    },
    {
        number: 4,
        description: "Determine the hood entry loss for a plain hood within a duct with a velocity pressure of 0.5 in. wc.",
        choices: [
            "A. 0.47 in. wc.",
            "B. 1 in. wc.",
            "C. 0.5 in. wc.",
            "D. 0.25 in. wc."],
        answer: 'A',
        explain: 'Refer to the Hood Entry Loss Factor table in the equation sheet. Plain duct hood has the least  hood entry loss factor Fh = 0.93. Use the 10th equation in the formula sheet. Hood entry loss = Fh x VPd = 0.93*0.5=0.47 in.wc. '
    },
    {
        number: 5,
        description: "Which of the following statements accurately describes HEPA filters?",
        choices: [
            "A. HEPA filters are designed to remove particles as small as 0.3 microns with an efficiency of at least 99.97%.",
            "B. HEPA filters are primarily used to remove gaseous contaminants from the air.",
            "C. HEPA filters are only effective in filtering out larger particles and are not suitable for fine particulate matter.",
            "D. HEPA filters are disposable filters and need to be replaced frequently to maintain their effectiveness."
        ],
        answer: "A",
        explain: "A HEPA (High-Efficiency Particulate Air) filter is a type of air filter that is highly efficient in capturing and removing airborne particles from the air. HEPA filters are composed of a dense arrangement of fibers that create a mesh-like structure, which can trap particles as air passes through.\n\nTo qualify as a true HEPA filter, it must meet specific standards set by regulatory agencies. The most common requirement is that a HEPA filter must be able to remove at least 99.97% of particles that are 0.3 micrometers in diameter or larger.This particle size of 0.3 µm is referred to as the Most Penetrating Particle Size (MPPS).\n\nThe MPPS is considered the most challenging particle size for a HEPA filter to capture because particles both larger and smaller than 0.3 µm are typically easier to trap. Larger particles tend to be caught by the filter's mechanical sieving action, while smaller particles are more effectively captured through diffusion and interception. HEPA filters can also capture particles of different sizes, including larger and smaller ones.\n\nHEPA filters are widely used in various applications where air quality is important, such as residential and commercial HVAC systems, cleanrooms, hospitals, laboratories, and industrial settings. They are effective in capturing a wide range of airborne contaminants, including dust, pollen, pet dander, mold spores, bacteria, and even some viruses.\n\nIt's important to note that HEPA filters are typically designed for air purification and particle removal. They are not specifically designed to remove gaseous pollutants or odors from the air. For that purpose, activated carbon filters or other specialized filters may be used in conjunction with HEPA filters."
    },
    {
        number: 6,
        description: "Which of the following hood shapes is generally considered to be the most efficient for minimizing hood entry loss?",
        choices: [
            "A. Rectangular",
            "B. Square",
            "C. Bell-shaped",
            "D. Conical"
        ],
        answer: 'C',
        explain: 'Refer to the Hood Entry Loss Factor table in the equation sheet. Bell-shaped hood has the least  hood entry loss factor Fh = 0.04.'
    },
    {
        number: 7,
        description: "Assuming a density factor of 1 (at 70 °F and 14.7 psi), what is the velocity (V) in a duct if the velocity pressure (VP) is 900 pa?",
        choices: [
            "A. 38.7 fpm",
            "B. 38.7 m/sec",
            "C. 60 fpm",
            "D. 80 m/sec"
        ],
        answer: 'B',
        explain: 'Use Equation 7 in Ventilation. VP = 900 pa, df = 1, therefore V =1.29*sqrt(900) = 38.7 m/sec. Pay attention that The velocity of the airflow in this formula is measured in m/sec and the velocity pressure in Pa.'
    },
    {
        number: 8,
        description: 'Assuming a density factor of 1 (at 70 °F and 14.7 psi), what is the velocity (V) in a duct if the velocity pressure (VP) is 4 inches water column (wc)?',
        choices: [
            "A. 8010 fpm",
            "B. 16020 fpm",
            "C. 4005 fpm",
            "D. 3000 fpm"
        ],
        answer: 'A',
        explain: "Use Equation 6 in Ventilation. VP = 4 inches, df = 1, therefore V = 4005*sqrt(4) = 8010 fpm. Pay attention that The velocity of the airflow in this formula is measured in fpm and the velocity pressure in inches water."
    },
    {
        number: 9,
        description: "If the velocity pressure (VPd) in a duct is 2 inches water column (wc) and the hood entry loss factor (Fh) is 0.6 what is the static pressure of the hood?",
        choices: [
            "A. -3.2 in.wc",
            "B. 3.2 in.wc",
            "C. 2.6 in.wc",
            "D. -1.4 in.wc"
        ],
        answer: 'A',
        explain: 'Use Eqation 5 in Ventilation. 𝐒𝐏𝐡 = -(𝐅𝐡 + 𝟏)𝐕𝐏𝐝 = -(0.6+1)*2 = -3.2 in.wc.'
    },
    {
        number: 10,
        description: 'A fluid flows through a 1000-meter-long pipeline with a diameter of 50 cm. The total pressure at the inlet of the pipeline is 8 in.wc, and the total pressure at the outlet is 5 in.wc. What is the head loss (energy loss) across the pipeline?',
        choices: [
            "A. 13 in.wc",
            "B. 3 in.wc",
            "C. 40 in.wc",
            "D. 2 in.wc"
        ],
        answer: "B",
        explain: 'Use Equation 4 in Ventilation. SP + VP = Total Pressure(TP). Therefore, TP\u2081 = TP\u2082 +∑ 𝒍𝒐𝒔𝒔𝒆𝒔 . ∑ 𝒍𝒐𝒔𝒔𝒆𝒔 = TP\u2081 - TP\u2082 = 8 - 5 = 3 in.wc.'
    },
    {
        number: 11,
        description: "If a 6-inch diameter duct has a velocity of 200 feet per minute, what would be the velocity in a 12-inch diameter duct with the same airflow rate?",
        choices: [
            "A. 25 feet per minute",
            "B. 50 feet per minute",
            "C. 75 feet per minute",
            "D. 100 feet per minute"
        ],
        answer: "B",
        explain: 'Use the equation of continuity(A\u2081V\u2081 = A\u2082V\u2082, Equation 2 in Ventilation), which states that the product of the area and velocity of a fluid at one point in a pipe must be equal to the product of the area and velocity at another point in the pipe. If the diameter is doubled, the area will be four times more, therefore the velocity should be four times less.'
    },

    {
        number: 12,
        description: "A laboratory has a ventilation system that is designed to maintain a total pressure (TP) of 0.5 inches of water column (in. wc). The velocity pressure (VP) in the ductwork is measured to be 0.1 in. wc. What is the static pressure (SP) in the ductwork?",
        choices: [
            "A. 0.6 in. wc",
            "B. 0.5 in. wc",
            "C. 0.4 in. wc",
            "D. 0.3 in. wc"
        ],
        answer: "C",
        explain: "Use the formula TP = VP + SP (Equation 3 in Ventilation), we can rearrange it to solve for SP = TP - VP. Substituting the given values, we get: SP = 0.5 - 0.1 = 0.4 in. wc."
    },
    {
        number: 13,
        description: "If the density factor is 1, what is the velocity pressure when the velocity inside a duct is 4005 fpm?",
        choices: [
            "A. 1 in. wc.",
            "B. 2 in. wc.",
            "C. 1 pa",
            "D. 2 pa"
        ],
        answer: "1",
        explain: "Use Equation 8 in Ventilation. V = velocity of air flow in fpm =4005. df = 1. 4005 = 4005 sqrt(VP/1). Therefore, VP = 1 .wc. Pay attention to the unit."
    },
    {
        number: 14,
        description: "At standard temperature, what is the velocity pressure when the velocity inside a duct is 12.9 m/sec?",
        choices: [
            "A. 100 in. wc.",
            "B. 10 in. wc.",
            "C. 10 pa",
            "D. 100 pa"
        ],
        answer: "D",
        explain: "Use Equation 9 in Ventilation. V=12.9 m/sec, df = 1 at standard temperature. Pay attention to the unit. V = velocity of air flow in m/sec, VP = velocity pressure in Pascals. VP=(12.9/1.29)\u00B2 *1 = 100 pa."
    },
    {
        number: 15,
        description: "What is the coefficient of entry for a hood located within a duct that has a hood static pressure of 0.8 in. wc. and a velocity pressure of 0.4 in. wc.?",
        choices: [
            "A. 0.5",
            "B. 0.7",
            "C. 1",
            "D. 1.9"
        ],
        answer: "B",
        explain: "Use Equation 11 in Ventilation. VP= velocity pressure, in. w.c. SPh = value of hood static pressure, in.w.c. Ce=hood entry coefficient, unitless = sqrt(0.4/0.8) = 0.7."
    },
    {
        number: 16,
        description: "If two flow ducts, one with a volumetric flow rate of 200 ft\u00B3/min and a velocity pressure of 1.5 in. w.c., and the other with a volumetric flow rate of 300 ft\u00B3/min and a velocity pressure of 2.0 in. w.c., are merged, what will be the resulting velocity pressure in the combined duct?",
        choices: [
            "A. 1.8 in. wc",
            "B. 1.5 in. wc",
            "C. 2.0 in. wc",
            "D. 2.8 in. wc"
        ],
        answer: "A",
        explain: "Use Equation 12 in Ventilation. Q\u2083 = volumetric flow rate of the merged branches = 200 + 300 = 500 cfm. Q\u2081 = 200 cfm; Q\u2082 = 300 cfm, VP\u2081= 1.5 in. w.c VP\u2082= 2 in. w.c. VPr = resulting velocity pressure of the merged flows = (200/500)*1.5 + (300/500)*2 = 1.8 in. wc."
    },
    {
        number: 17,
        description: "Assuming a hood entry coefficient of 0.98 (bell-shaped), a hood static pressure of 4 in. wc, and a density factor of 1, what is the volumetric flow rate of a duct with a cross-sectional area of 0.196 ft\u00B2, connected to the hood?",
        choices: [
            "A. 539 cfm",
            "B. 1539 cfm",
            "C. 1009 cfm",
            "D. 4005 cfm"
        ],
        answer: "B",
        explain: "Use Equation 13 in Ventilation. Ce= hood entry coefficient=0.98, SPh= value of hood static pressure = 4 in. wc. df=air correction density factor = 1. Q=volumetric flow rate = 4005*0.98*2*0.196 = 1539 cfm."
    },
    {
        number: 18,
        description: "Assuming a hood entry coefficient of 0.98 (bell-shaped), a hood static pressure of 3600 pa, and a density factor of 1, what is the volumetric flow rate of a duct with a cross-sectional area of 0.196 ft\u00B2, connected to the hood?",
        choices: [
            "A. 1.49 m\u00B3/sec",
            "B. 1.49 cfm",
            "C. 14.9 cfm",
            "D. 14.9 m\u00B3/sec"
        ],
        answer: "D",
        explain: "Use Equation 14 in Ventilation. Pay attention to the unit. Ce= hood entry coefficient=0.98, SPh= value of hood static pressure = 3600 pa. df=air correction density factor = 1. Q=volumetric flow rate = 1.29*0.98*60*0.196 = 14.9 m3/sec."
    },
    {
        number: 19,
        description: "Assuming a main duct with a static pressure of 4 in. wc, what is the corrected flow rate for a ventilation branch that converges with the main duct, given that the ventilation branch has a volumetric flow rate of 1500 cfm and a static pressure of 1 in. wc?",
        choices: [
            "A. 3000 cfm",
            "B. 4000 cfm",
            "C. 5000 cfm",
            "D. 1500 cfm"
        ],
        answer: "A",
        explain: "Use Equation 16 in Ventilation. Qcorr = corrected flow rate in cfm. Qlower=existing flow rate. SPgov = governing static pressure in. wc. SPlower = new duct static pressure in.wc. Qcorr = 1500 sqrt(4/1) = 3000 cfm"
    },
    {
        number: 20,
        description: "Assuming a mixing factor of 5, what is the effective ventilation rate in a room with a ventilation rate of 100 cfm?",
        choices: [
            "A. 0.5",
            "B. 100",
            "C. 5",
            "D. 20"
        ],
        answer: "D",
        explain: "Use Equation 17 in Ventilation. Q’ = effective rate of ventilation. Q=actual airflow mi = mixing factor. Q’ = 100/5=20. Effective ventilation rate refers to the actual amount of outdoor air that is entering a room or space and diluting indoor air pollutants. It takes into account the ventilation rate and the degree of mixing of the outdoor air with the indoor air. The effective ventilation rate is typically lower than the actual ventilation rate due to factors such as air distribution, recirculation, and the degree of mixing of the air."
    },
    {
        number: 21,
        description: "A spill of toluene in a room with a volume of 30,000 cubic feet results in an initial concentration of 50 ppm. After the use of toluene is stopped, the effective rate of ventilation is measured at 6,000 cubic feet of dilution air per minute. How long will it take for the concentration of toluene to decrease to the permissible exposure limit (PEL) of 10 ppm?",
        choices: [
            "A. 8 min",
            "B. 16 min",
            "C. 50 min",
            "D. 2 min"
        ],
        answer: "A",
        explain: "Use Equation 18 in Ventilation. t\u2082=final time in min; t\u2081=initial time in min; Vr= volume of enclosure in cubic feet; Cg1 = initial concentral Cg2= final concentration Q’=effective rate of ventilation in cfm. t\u2082-t\u2081=-30000/6000*ln(10/50)= 8min. "
    },
    {
        number: 22,
        description: "In a room with a volume of 20,000 cubic feet, toluene is evaporating at a rate of 10 cubic feet per minute. The initial concentration of toluene in the room is measured at 10 ppm. If 5,000 cubic feet per minute of dilution air is introduced into the room, what will the concentration of toluene be after 60 minutes?",
        choices: [
            "A. 1000 ppm",
            "B. 2000 ppm",
            "C. 300 ppm",
            "D. 0 ppm"
        ],
        answer: "B",
        explain: "Use Equation 19 in Ventilation. G = rate of generation of contaminant in cfm. t\u2082=final time, min; t\u2081=initial time, min; Vr= volume of enclosure in cubic feet; Cg1 = initial concentral; Cg2= final concentration Q’=effective rate of ventilation in cfm.\n\nln(10-5000C2)/(10-5000*0.00001) = - 5000/20000*60. C2 = 2000 ppm."
    },
    {
        number: 23,
        description: "An open bottle on a laboratory table is evaporating benzene at a rate of 0.5 pints per minute. To keep the concentration of benzene in the room below 1 ppm, what is the required flow rate of dilution air in cubic feet per minute (cfm)? Assume the ventilation safety factor is 2 and the molecular weight of benzene is 78 g/mol and the specific gravity is 0.876.",
        choices: [
            "A. 9,019,625 cfm",
            "B. 4,526,000 cfm",
            "C. 19,625 cfm",
            "D. 2,519,625 cfm"
        ],
        answer: "B",
        explain: 'Use Equation 20 in Ventilation. Q=volumetric flow required to limit contaminant concentration in cfm. SG=specific gravacity. ER = evaporation rate in pints/min. Mi = mixing ventilation (dilution) safety factor. MW=molecular weight. Cg = contaminant concentration in ppm. \n\n Q = 403*0.876*0.5*2*10\u2076/(78*1) = 4,526,000 cfm.'
    },
    {
        number: 24,
        description: "An open bottle on a laboratory table is evaporating benzene at a rate of 0.002 liters per second. To keep the concentration of benzene in the room below 1 ppm, what is the required flow rate of dilution air in cubic feet per second)? Assume the ventilation safety factor is 2 and the molecular weight of benzene is 78 g/mol and the specific gravity is 0.876.",
        choices: [
            "A. 7011 cfm",
            "B. 7011 m\u00B3/sec",
            "C. 1078 m\u00B3/sec",
            "D. 1078 cfm"
        ],
        answer: "C",
        explain: 'Use Equation 21 in Ventilation. Pay attention to the units. Q=volumetric flow required to limit contaminant concentration in cubic meters/second. SG=specific gravity. ER = evaporation rate in liters/second. Mi = mixing ventilation (dilution) safety factor. MW=molecular weight. Cg = contaminant concentration in ppm. \n\n Q = 24*0.876*0.002*2*10\u2076/(78*1) = 1078 m\u00B3/sec.'
    },
    {
        number: 25,
        description: "If a room has a volume of 20,000 cubic feet and a ventilation rate of 5,000 cfm, how many air exchanges per hour (ACH) are achieved?",
        choices: [
            "A. 5",
            "B. 25",
            "C. 10",
            "D. 15"
        ],
        answer: "D",
        explain: 'Use Equation 22 in Ventilation. Q = room ventilation in cfm. Vr = room volume. Number of changes = 60*5,000/20,000 = 15. \n\nAs a general guideline, the American Society of Heating, Refrigerating, and Air-Conditioning Engineers (ASHRAE) recommends a minimum of 4-6 air changes per hour (ACH) for office spaces. Additionally, during the COVID-19 pandemic, ASHRAE also recommends increasing ventilation rates to reduce the risk of airborne transmission of the virus.'
    },
    {
        number: 26,
        description: "What will be the concentration of benzene in a room with a volume of 20,000 cubic feet and a ventilation rate of 8,000 cfm, if an open bottle of benzene left on a lab table evaporating at a rate of 0.3 cfm for 15 minutes?",
        choices: [
            "A. 20 ppm",
            "B. 30 ppm",
            "C. 40 ppm",
            "D. 50 ppm"
        ],
        answer: "B",
        explain: 'Use Equation 23 in Ventilation. Cg2 = final concentration of gas or vapor in ppm. G = rate of generation of contaminant in cfm = 0.3; Δt= amount of time in mins = 15. Q’= effective room ventilation rate in cfm = 8000. Vr = room volume in cubit feet = 20,000.'
    },
    {
        number: 27,
        description: "After 30 minutes, what will be the concentration of benzene in a room with a volume of 20,000 cubic feet and a ventilation rate of 5,000 cfm, if the initial concentration of benzene is 80 ppm and there is no more benzene being generate?",
        choices: [
            "A. 0.044 ppm",
            "B. 0.055 ppm",
            "C. 0.6 ppm",
            "D. 4 ppm"
        ],
        answer: "A",
        explain: 'Use Equation 24 in Ventilation. Cg2 = final concentration of contaminant in ppm. Cg1 = initial concentration of contaminant in ppm = 80. Δt= amount of time in mins = 30. Q’= effective room ventilation rate in cfm = 5000. Vr = room volume in cubit feet = 20,000.'
    },
    {
        number: 28,
        description: "What is the new flow rate of a local exhaust ventilation system if its fan, with a diameter that remains constant, is replaced by one turning at 3000 rpm when the original fan had a flow rate of 400 cfm and was turning at 1000 rpm?",
        choices: [
            "A. 1200 cfm",
            "B. 900 cfm",
            "C. 2400 cfm",
            "D. 400 cfm"
        ],
        answer: "A",
        explain: 'Use Equation 25 in Ventilation. RPM\u2082 = new fan speed. RPM\u2081 = original fan speed. d\u2082=d\u2081. Q\u2081= initial flow rate. \n\nQ\u2082 = new flow rate = 400*(1/1)\u00B3*(3000/1000) = 1200 cfm.'
    },
    {
        number: 29,
        description: "What is the new fan pressure of a local exhaust ventilation system if its fan, with a diameter that remains constant, is replaced by one turning at 3000 rpm when the original fan had a pressure of 5 in.wc and was turning at 1000 rpm?",
        choices: [
            "A. 5 in. wc",
            "B. 45 in. wc",
            "C. 10 in. wc",
            "D. 20 in. wc"
        ],
        answer: "B",
        explain: 'Use Equation 26 in Ventilation. RPM\u2082 = new fan speed. RPM\u2081 = original fan speed. d\u2082=d\u2081. P\u2081= initial system pressure. \n\nP\u2082 = new system pressure = 5*(1/1)\u00B2(3000/1000)\u00B2 = 45 in. wc.'
    },
    {
        number: 30,
        description: "What is the new system power of a local exhaust ventilation system if the fan speed remains constant and the diameter is doubled? Original system power is 20 hp",
        choices: [
            "A. 800 hp",
            "B. 1600 hp",
            "C. 640 hp",
            "D. 400 hp"
        ],
        answer: "C",
        explain: 'Use Equation 27 in Ventilation. When the diameter is doubled and fan speed remains the same, the power will be 2\u2075=32 times as the original.'
    },
    {
        number: 31,
        description: "What is the static pressure of a fan given a static pressure of -5 in. wc at the inlet, a static pressure of 10 in. wc at the outlet, and a velocity pressure of 1 in. wc on the inlet side of the fan?",
        choices: [
            "A. 10",
            "B. 24",
            "C. 14",
            "D. 8"
        ],
        answer: "C",
        explain: 'Use Equation 28 in Ventilation. FSP = fan static pressure. SPout = static pressure measured on the outlet side of the fan. SPin =  static pressure measured on the inlet side of the fan. VPin = velocity pressure on the inlet side of the fan.\n\nTherefore, FSP = 10 - (-5) - 1 = 16 in. wc. Pay attention that the inlet Static Pressure will always be counted as negative, and the outlet Static Pressure and Velocity Pressure will be positive.'
    },
    {
        number: 32,
        description: "What is the static pressure of a fan if the total pressure at inlet is -5 in. wc and the total pressure at the outlet is 8 in.wc?",
        choices: [
            "A. 5 in. wc",
            "B. 8 in. wc",
            "C. 13 in. wc",
            "D. 2 in. wc"
        ],
        answer: "C",
        explain: 'Use Equation 29 in Ventilation. FTP = Fan total pressure. TPout = total pressure measured on the outlet side of the fan. TPin = total pressure measured on the inlet side of the fan. Pay attention that the inlet Static Pressure will always be counted as negative, and the outlet Static Pressure will be positive. FTP = 8-(-5) = 13 in. wc.'
    },
    {
        number: 33,
        description: "What would be the capture velocity of a flangeless slot hood, which has an opening height of 2 inches and is 12 inches long, and the flow rate is 600 cfm, when measured at a distance of 1 foot from the hood?",
        choices: [
            "A. 62 fpm",
            "B. 162 fpm",
            "C. 82 fpm",
            "D. 1620 fpm"
        ],
        answer: "C",
        explain: 'Use Equation 1 in Hood Airflow Equations. First verify the aspect ratio = 2/12<0.2. X= distance outward along the axis in feet = 1 foot. Q= volumetric flow rate in cfm. L = hood height in feet = 1 foot. Therefore, 600 = 3.7*1*Vx*1. Vx = 162 fpm.'
    },
    {
        number: 34,
        description: "What would be the capture velocity of a flanged slot hood, which has an opening height of 2 inches and is 12 inches long, and the flow rate is 600 cfm, when measured at a distance of 1 foot from the hood?",
        choices: [
            "A. 231 fpm",
            "B. 162 fpm",
            "C. 192 fpm",
            "D. 362 fpm"
        ],
        answer: "A",
        explain: 'Use Equation 2 in Hood Airflow Equations. First verify the aspect ratio = 2/12<0.2. X= distance outward along the axis in feet = 1 foot. Q= volumetric flow rate in cfm. L = hood height in feet = 1 foot. Therefore, 600 = 2.6*1*Vx*1. Vx = 231 fpm. Compared with the previous question, you see the flanged hood has higher velocity.'
    },
    {
        number: 35,
        description: "What would be the capture velocity of a plain opening slot hood, which has an opening height of 6 inches and is 6 inches long, and the flow rate is 600 cfm, when measured at a distance of 1 foot from the hood?",
        choices: [
            "A. 49 fpm",
            "B. 52 fpm",
            "C. 54 fpm",
            "D. 59 fpm"
        ],
        answer: "D",
        explain: 'Use Equation 3 in Hood Airflow Equations. First verify the aspect ratio = 2/2=1. X= distance outward along the axis in feet = 1 foot. Q= volumetric flow rate in cfm. L = hood height in feet = 1 foot. Af= area of hood face opening in square feet. \n\nTherefore, 600 = Vx(10*1\u00B2 + 0.5*0.5). Vx = 59 fpm.'
    },
    {
        number: 36,
        description: "What would be the capture velocity of a flanged opening slot hood, which has an opening height of 6 inches and is 6 inches long, and the flow rate is 600 cfm, when measured at a distance of 1 foot from the hood?",
        choices: [
            "A. 78 fpm",
            "B. 68 fpm",
            "C. 58 fpm",
            "D. 48 fpm"
        ],
        answer: "A",
        explain: 'Use Equation 4 in Hood Airflow Equations. First verify the aspect ratio = 2/2=1. X= distance outward along the axis in feet = 1 foot. Q= volumetric flow rate in cfm. L = hood height in feet = 1 foot. Af= area of hood face opening in square feet. Therefore, 600 = 0.75Vx(10*1\u00B2 + 0.5*0.5). Vx = 78 fpm. Compared with the previous question, you see the flanged hood has higher velocity.'
    },
    {
        number: 37,
        description: "If a local booth has a square hood with a side length of 3 feet and a velocity of 200 fpm, what is its volumetric flow rate?",
        choices: [
            "A. 900 fpm",
            "B. 1800 fpm",
            "C. 400 fpm",
            "D. 700 fpm"
        ],
        answer: "B",
        explain: 'Use Equation 5 in Hood Airflow Equations. Q=200*3*3=1800 fpm.'
    },
    {
        number: 38,
        description: "If a canopy has a tank with dimensions 5 ft by 3 ft, and is placed at a height of 1 foot above the work surface, what is its volumetric flow rate given that the centerline velocity is 200 fpm?",
        choices: [
            "A. 2480 cfm",
            "B. 4480 cfm",
            "C. 6480 cfm",
            "D. 1480 cfm"
        ],
        answer: "B",
        explain: 'Use Equation 6 in Hood Airflow Equations. P = perimeter of work = 5+5+3+3 = 16 feet. V= centerline velocity in fpm. X = height above work. Therefore, Q = 1.4*16*200*1 = 4480 cfm.'
    },
    {
        number: 39,
        description: "If a plain hood with multiple square slots has a flow rate of 400 cfm and a total opening area of 4 square feet, what is the capture velocity of the hood at a distance of 2 feet from the hood?",
        choices: [
            "A. 9.1 fpm",
            "B. 12.1 fpm",
            "C. 3.1 fpm",
            "D. 4.1 fpm"
        ],
        answer: "A",
        explain: 'Use Equation 7 in Hood Airflow Equations. First verify the aspect ratio, since it is a square, the ratio = 1. As = total areas of slots openings. Therefore, 400 = Vx(10*2\u00B2 + 4).  Vx = 9.1 fpm.'
    },
    {
        number: 40,
        description: "If a flanged hood with multiple square slots has a flow rate of 400 cfm and a total opening area of 4 square feet, what is the capture velocity of the hood at a distance of 2 feet from the hood?",
        choices: [
            "A. 2.1 fpm",
            "B. 13  fpm",
            "C. 12.1 fpm",
            "D. 9.1 fpm"
        ],
        answer: "C",
        explain: 'Use Equation 8 in Hood Airflow Equations. First verify the aspect ratio, since it is a square, the ratio = 1. As = total areas of slots openings. Therefore, 400 = 0.75*Vx(10*2\u00B2 + 4). Vx=12.1 fpm.'
    },
    {
        number: 41,
        description: "Which of the following statements is true regarding local exhaust ventilation (LEV) and dilution ventilation?",
        choices: [
            "A. LEV is more effective than dilution ventilation in controlling airborne contaminants.",
            "B. Dilution ventilation is more effective than LEV in controlling airborne contaminants.",
            "C. LEV and dilution ventilation are equally effective in controlling airborne contaminants.",
            "D. The effectiveness of LEV and dilution ventilation depends on the type of contaminant and the ventilation system design."
        ],
        answer: "D",
        explain: 'LEV is a ventilation system that captures and removes airborne contaminants at or near their source using hoods, ducts, and fans. This type of system is especially useful for controlling high concentrations of contaminants in areas where workers perform tasks that generate high levels of contaminants, such as welding or spray painting. LEV is effective in removing a large percentage of the contaminants from the air in the immediate vicinity of the source, and can be a very effective control measure for some types of contaminants.\n\nDilution Ventilation, on the other hand, is a type of ventilation system that involves introducing fresh air into a work area to dilute and reduce the concentration of contaminants in the air. This type of system is useful for controlling low to moderate concentrations of contaminants in large areas where the contaminants are more diffuse and evenly distributed. Dilution ventilation relies on air movement to mix the fresh air with the contaminated air, and to remove the contaminated air from the work area.'
    },
    {
        number: 42,
        description: "Which of the following types of hoods is designed to capture contaminants that are generated above a work surface?",
        choices: [
            "A. Canopy hood",
            "B. Downdraft hood",
            "C. Enclosure hood",
            "D. All of the above"
        ],
        answer: "D",
        explain: 'A. Canopy hood: Captures contaminants released above the work surface by utilizing upward airflow to draw the airborne contaminants into the hood.\n\nB. Downdraft hood: Captures contaminants both above and on the work surface by pulling the contaminants downward and away from the operator and surrounding environment.\n\nC. Enclosure hood: Fully encloses a process or apparatus, capturing contaminants generated within the enclosure, including those above the work surface.\n\nEach type of hood is designed to suit different scenarios and specific airborne contaminant control requirements, but they all can effectively capture contaminants generated above the work surface. Therefore, the correct answer is D. All of the above.'
    },
    {
        number: 43,
        description: "What is a pitot tube used for in industrial hygiene?",
        choices: [
            "A. Measuring the velocity of air in ductwork",
            "B. Measuring the concentration of airborne contaminants",
            "C. Measuring the temperature of air in ductwork",
            "D. Measuring the static pressure of air in ductwork"
        ],
        answer: "A",
        explain: 'A pitot tube is a device used to measure the velocity of air in ductwork. It consists of a small tube that is inserted into the airflow and pointed into the direction of the airflow. The pitot tube measures the difference between the total pressure of the air flowing in the duct and the static pressure of the air, which is the pressure of the air at rest. This difference in pressure is used to calculate the velocity of the air in the duct.'
    },
    {
        number: 44,
        description: "What is the partial pressure of carbon monoxide in the air, if the measured concentration of carbon monoxide is 10 ppm? The atmospheric pressure is 780 mmHg.",
        choices: [
            "A. 0.0078 mmHg",
            "B. 0.078 mmHg",
            "C. 0.78 mmHg",
            "D. 0.00078 mmHg"
        ],
        answer: "A",
        explain: 'Partial pressure = 10/10\u2076 * 780 mmHg.'
    },
    {
        number: 45,
        description: "Which of the following statements best describes the differences between static pressure and velocity pressure in a ventilation system?",
        choices: [
            "A. Static pressure is the pressure due to the movement of air in a duct, while velocity pressure is the pressure difference between the blow side and suction side of a fan.",
            "B. Static pressure is the pressure due to the movement of air through an opening, while velocity pressure is the pressure difference between the blow side and suction side of a fan.",
            "C. Static pressure is the pressure difference between the blow side and suction side of a fan, with positive pressure on the blow side and negative pressure on the suction side, while velocity pressure is the pressure due to the movement of air in a duct.",
            "D. Static pressure is the pressure difference between the blow side and suction side of a fan, with negative pressure on the blow side and positive pressure on the suction side, while velocity pressure is the pressure due to the movement of air through an opening."
        ],
        answer: "C",
        explain: 'Static pressure is the pressure difference between the blow and suction side of a fan, while velocity pressure is the pressure due to the movement of air in a duct. Positive static pressure occurs on the blow side of the fan, while negative static pressure occurs on the suction side of the fan. Velocity pressure is always positive and is a measure of the kinetic energy of the moving air. Total pressure is negative on suction side (upstream of fan) and positive on blow side(downstream of fan).'
    },
    {
        number: 46,
        description: "What is the recommended indoor CO\u2082  level, according to ASHRAE, in relation to outdoor air levels?",
        choices: [
            "A. Indoor CO\u2082  levels should be no higher than outdoor air levels.",
            "B. Indoor CO\u2082  levels should be no higher than 500 ppm above outdoor air levels.",
            "C. Indoor CO\u2082  levels should be no higher than 700 ppm above outdoor air levels.",
            "D. Indoor CO\u2082  levels should be no higher than 1000 ppm above outdoor air levels."
        ],
        answer: "C",
        explain: 'ASHRAE, the American Society of Heating, Refrigerating and Air-Conditioning Engineers, is a professional organization that provides guidelines for indoor air quality. One of their guidelines is that indoor CO\u2082  levels should be no higher than 700 ppm above outdoor air levels to maintain good indoor air quality. This guideline is based on the fact that elevated levels of CO\u2082  can cause headaches, fatigue, and decreased concentration, among other symptoms, and can also indicate poor ventilation in a building.'
    },
    {
        number: 47,
        description: "Which of the following is a characteristic feature of baghouses in industrial applications?",
        choices: [
            "A. Baghouses are used to control and capture airborne particulate matter through filtration.",
            "B. Baghouses are used to regulate temperature and humidity levels in enclosed spaces.",
            "C. Baghouses are used to store and transport hazardous chemicals safely.",
            "D. Baghouses are used to generate and distribute compressed air in manufacturing processes."
        ],
        answer: "A",
        explain: "Baghouses are widely used in various industrial applications to control and capture airborne particulate matter, such as dust, smoke, and fine particles. They are typically designed as filtration systems that employ fabric bags or filters to trap and collect the particles present in the air. Baghouses are particularly effective in industries where air pollution control and dust containment are critical, such as manufacturing, mining, pharmaceuticals, and power generation."
    },
    {
        number: 48,
        description: "Which of the following statements accurately describes cyclones in the context of industrial processes?",
        choices: [
            "A. Cyclones are used to measure the flow rate of gases in ductwork.",
            "B. Cyclones are devices used to separate solid particles from gas streams through centrifugal force.",
            "C. Cyclones are used to generate and distribute compressed air in manufacturing processes.",
            "D. Cyclones are heat exchangers used to control and regulate temperature in industrial systems."
        ],
        answer: "B",
        explain: "In industrial processes, cyclones are commonly used to remove solid particles, such as dust, from gas streams. They operate on the principle of centrifugal force, which causes the particles to move towards the outer walls of the cyclone due to the swirling motion induced by the gas flow. As a result, the solid particles separate from the gas stream and collect at the bottom of the cyclone, while the cleaned gas continues to exit through the top."
    },
    {
        number: 49,
        description: "Which of the following statements accurately describes Electrostatic Precipitators (ESPs) in the context of air pollution control?",
        choices: [
            "A. ESPs use mechanical filters to capture and remove airborne particles from gas streams.",
            "B. ESPs generate ozone to neutralize harmful pollutants in industrial emissions.",
            "C. ESPs use electrostatic forces to charge and collect particulate matter from gas streams.",
            "D. ESPs are used to regulate and control the temperature of industrial exhaust gases."
        ],
        answer: "C",
        explain: "Electrostatic Precipitators (ESPs) are air pollution control devices that use electrostatic forces to remove particulate matter from gas streams. The gas stream containing the particles passes through an electrostatic field created by high-voltage electrodes. As the particles pass through this field, they become charged and are attracted to oppositely charged collection plates or electrodes. This causes the particles to be removed from the gas stream and collected on the plates or electrodes. The collected particles can then be periodically removed from the ESP for disposal."
    },
    {
        number: 50,
        description: "In a hospital setting, negative pressure rooms are primarily used to:",
        choices: [
            "A. Enhance patient comfort",
            "B. Improve air circulation",
            "C. Prevent the spread of airborne infectious diseases",
            "D. Increase energy efficiency"
        ],
        answer: "C",
        explain: "Negative pressure rooms are used to isolate patients with infectious diseases so that the pathogens they produce do not spread to other patients or staff. The negative pressure in the room creates a flow of air from the outside of the room into the room, which helps to prevent the pathogens from escaping."
    },
    {
        number: 51,
        description: "Positive pressure rooms are commonly used in which of the following settings?",
        choices: [
            "A. Intensive care units (ICUs)",
            "B. Cleanrooms",
            "C. Radiology departments",
            "D. Hospital cafeterias"
        ],
        answer: "B",
        explain: "Positive pressure rooms are commonly used in cleanroom environments where maintaining a high level of cleanliness is crucial. These rooms have a higher air pressure inside compared to the surrounding areas, preventing the entry of contaminants from outside. Positive pressure helps to push air out of the room, minimizing the infiltration of particles and microorganisms."
    },
    {
        number: 52,
        description: "What is the term used to describe the resistance to airflow caused by the dense structure of HEPA filters?",
        choices: [
            "A. Airflow hindrance",
            "B. Pressure drop",
            "C. Flow impedance",
            "D. Resistance buildup"
        ],
        answer: "B",
        explain: "Pressure drop is the decrease in air pressure that occurs when air passes through a filter. The denser the filter, the greater the pressure drop. HEPA filters are very dense, so they cause a significant pressure drop.\n\nTo maintain optimal performance, it's important to monitor and maintain proper airflow rates in systems utilizing HEPA filters."
    },
    {
        number: 53,
        description: "Which of the following is an example of an engineering control for noise reduction?",
        choices: [
            "A. Providing workers with earplugs",
            "B. Limiting the duration of noisy tasks",
            "C. Installing acoustic enclosures around noisy machinery",
            "D. Conducting regular noise exposure assessments"
        ],
        answer: "C",
        explain: "Engineering controls are physical changes to the workplace that reduce noise exposure. Installing acoustic enclosures around noisy machinery is an example of an engineering control because it physically blocks the noise from reaching the worker."
    },
    {
        number: 54,
        description: "How can engineering controls effectively reduce noise exposure in the workplace?",
        choices: [
            "A. By blocking all noise sources",
            "B. By absorbing or redirecting sound waves",
            "C. By providing workers with hearing protection devices",
            "D. By increasing the volume of ambient noise to mask the loud sounds"
        ],
        answer: "B",
        explain: "Engineering controls for noise reduction focus on mitigating the transmission and propagation of sound waves. Rather than blocking all noise sources or increasing ambient noise, engineering controls work by employing materials and structures that absorb or redirect sound waves, thereby reducing the overall noise exposure in the workplace. \n\nExamples of such controls include soundproofing materials, acoustic enclosures, mufflers, and the design of equipment with noise-reducing features. Providing workers with hearing protection devices (option C) is considered a personal protective measure and should be used in conjunction with engineering controls when necessary."
    },
    {
        number: 55,
        description: "In which engineering applications is the Reynolds number commonly used?",
        choices: [
            "A. Structural analysis",
            "B. Electrical circuit design",
            "C. Fluid dynamics",
            "D. Material strength testing"
        ],
        answer: "C",
        explain: "The Reynolds number is a dimensionless quantity that is used to characterize the flow of fluids. It is commonly used in fluid dynamics to determine the type of flow (laminar or turbulent) and to calculate the friction factor."
    },
    {
        number: 56,
        description: "Which of the following mechanisms is most effective for capturing the smallest particles, including ultrafine particles?",
        choices: [
            "A. Interception",
            "B. Impaction",
            "C. Diffusion",
            "D. Electrostatic attraction"
        ],
        answer: "C",
        explain: "Diffusion is the most effective mechanism for capturing the smallest particles, including ultrafine particles. When air passes through a filter, these small particles exhibit random, erratic movement due to their thermal motion, a phenomenon known as Brownian motion. As they move, they collide with gas molecules and are eventually captured by the filter fibers through diffusion.\n\nA. Interception: Interception occurs when particles are captured by filter fibers as they come into contact with them. This mechanism is more effective for particles of larger sizes.\n\nB. Impaction: Impaction is the process of particles being forced to deviate from the airflow and collide with filter surfaces due to their inertia. This mechanism is effective for particles of intermediate sizes.\n\nD. Electrostatic attraction: Electrostatic attraction involves using electric charges to attract and capture particles. While it can be effective for various particle sizes, it is particularly useful for capturing smaller particles that may not be effectively captured by interception or impaction."
    },
    {
        number: 57,
        description: "How do interception and impaction differ in their mechanism of particle capture?",
        choices: [
            "A. Interception involves particles colliding with filter fibers, while impaction involves particles changing direction easily and striking the fibers directly.",
            "B. Interception is effective for larger particles, while impaction is effective for smaller particles.",
            "C. Interception relies on the particles' thermal motion, while impaction relies on the particles' size and inertia.",
            "D. All of the above"
        ],
        answer: "D",
        explain: "Interception and impaction are two of the most important mechanisms of particle capture in filtration. They differ in a number of ways, including:\n\nThe way particles interact with the filter: Interception occurs when particles collide with the surface of a filter or other barrier. Impaction occurs when particles are thrown against a surface by the force of the airflow.\n\nThe size of particles that are most effectively captured: Interception is more effective for larger particles, while impaction is more effective for smaller particles.\n\nThe forces that are responsible for particle capture: Interception relies on the particles' thermal motion, while impaction relies on the particles' size and inertia."
    },
    {
        number: 58,
        description: "What is the most common size used to measure HEPA filter efficiency?",
        choices: [
            "A. 0.1 microns",
            "B. 0.2 microns",
            "C. 0.3 microns",
            "D. 0.4 microns"
        ],
        answer: "C",
        explain: "The most common size used to measure HEPA filter efficiency is 0.3 microns. This measurement refers to the particle size at which the filter's efficiency is evaluated. HEPA filters are designed to capture particles of various sizes, including both larger and smaller particles.\n\nWhile 0.3 microns might seem like an arbitrary choice, it is considered the most challenging particle size for a filter to capture. Particles larger than 0.3 microns tend to be captured more easily due to interception and impaction mechanisms, while particles smaller than 0.3 microns are captured through diffusion. By focusing on 0.3 microns, it provides a standardized and representative measure of the filter's overall efficiency across a range of particle sizes."
    },
    {
        number: 59,
        description: "Which type of scrubber is typically more efficient in removing acid gases, such as sulfur dioxide (SO\u2082), from industrial emissions?",
        choices: [
            "A. Wet scrubber",
            "B. Dry scrubber",
            "C. Both wet and dry scrubbers have similar efficiency for acid gas removal.",
            "D. Acid gases cannot be effectively removed by either type of scrubber."
        ],
        answer: "A",
        explain: "Wet scrubbers are typically more efficient in removing acid gases, such as sulfur dioxide (SO\u2082), from industrial emissions. Wet scrubbers utilize a liquid, such as water or a chemical solution, to remove pollutants from the gas stream. When it comes to acid gases, wet scrubbers are particularly effective because the liquid in the scrubber reacts with the acidic components, neutralizing them and capturing them within the liquid.\n\nThe liquid used in wet scrubbers can be adjusted to optimize the removal of specific pollutants. In the case of acid gases, alkaline solutions or substances, such as lime or limestone, are often used to create a chemical reaction that converts the acidic pollutants into less harmful compounds. This chemical reaction is known as absorption.\n\nThe efficiency of acid gas removal in wet scrubbers is further enhanced by the intimate contact between the gas and liquid phases. As the gas passes through the scrubber, it comes into direct contact with the liquid, allowing for effective absorption of the acid gases.\n\nOn the other hand, dry scrubbers typically use a dry sorbent material, such as activated carbon or dry chemicals, to remove pollutants from the gas stream. While dry scrubbers can be effective in capturing certain pollutants, they are generally less efficient in removing acid gases compared to wet scrubbers. Acid gases tend to require a liquid medium for effective absorption and neutralization."
    },
    {
        number: 60,
        description: "The minimum velocity of air required for a LEV system to be effective is typically between:",
        choices: [
            "A. 60 and 120 feet per minute",
            "B. 120 and 180 feet per minute",
            "C. 180 and 240 feet per minute",
            "D. 240 and 300 feet per minute"
        ],
        answer: "A",
        explain: "The minimum velocity of air required for a LEV system to be effective depends on the type of contaminant being captured and the size of the particles, but in general, the minimum velocity should be between 60 and 120 feet per minute.\n\nAn excessively high air velocity in a Local Exhaust Ventilation (LEV) system can lead to problems like re-entrainment of contaminants, increased noise levels, higher energy consumption, and uncomfortable working conditions for employees. It may also cause potential damage to equipment and flow instabilities, resulting in uneven distribution of airflow. Striking a balance between adequate airflow velocity for effective contaminant capture and avoiding these issues is essential for an efficient and functional LEV system. Regular monitoring and maintenance can help ensure its optimal performance."
    },
    {
        number: 61,
        description: "An air plenum is: ",
        choices: [
            "A. A respirator return hose",
            "B. An air measuring pump",
            "C. An HVAC insulated duct",
            "D. The area above a suspended ceiling that may be used for return air to the A/C system"
        ],
        answer: "D",
        explain: "An air plenum, in the context of HVAC systems, refers to the space above a suspended ceiling or below a raised floor that is used for return air to the air conditioning (A/C) system. This area allows the HVAC system to circulate and recirculate air in a building, contributing to the efficient functioning of the heating, ventilation, and air conditioning system. The air plenum helps distribute air to various parts of the building and plays a crucial role in maintaining indoor air quality and temperature control."
    }



]