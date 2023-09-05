import { biostats_epi_questions } from "./biostats_epi_questions"
import { air_sampling_questions } from "./air_sampling_questions"
import { analytical_chemistry_questions } from "./analytical_chemistry"
import { basic_science_questions } from "./basic_science_questions"
import { biohazards_questions } from "./biohazards_questions"
import { ventilation_questions } from "./ventilation_questions"
import { ergonomics_questions } from "./ergonomics_questions"
import { noise_questions } from "./noise_questions"
import { non_engineering_questions } from "./non_engineering_questions"
import { radiation_questions } from "./radiation_questions"
import { thermal_questions } from "./thermal_questions"
import { toxicology_questions } from "./toxicology_questions"
import { work_environment_questions } from "./work_environment_questions"
export const allQuestions = {
    "Air_Sampling": air_sampling_questions,
    "Analytical_Chemistry": analytical_chemistry_questions,
    "Basic_Science": basic_science_questions,
    "Biohazards": biohazards_questions,
    "Biostats_Epi": biostats_epi_questions,
    "Engineering_Control": ventilation_questions,
    "Ergonomics": ergonomics_questions,
    "Noise": noise_questions,
    "Non_Engineering": non_engineering_questions,
    "Radiation": radiation_questions,
    "Thermal_Stressors": thermal_questions,
    "Toxicology": toxicology_questions,
    "Work_Environment": work_environment_questions,
}

