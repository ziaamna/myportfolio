import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

// To show a big picture at the bottom of this page:
// 1. Put your image in src/assets/ (for example research.jpg)
// 2. Uncomment the import line below and make the file name match yours
// 3. Delete the line that says: const projectImage: string = '';
// import projectImage from '../../assets/research.jpg';
const projectImage: string = '';

const ResearchProject = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <ProjectLayout>
      <div className="mb-8">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
        >
          MFlowDB Turbulence Research
        </h1>
        <p
          className="text-lg"
          style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.text.secondary }}
        >
          AI/ML Research Assistant, Flow Physics and Computational Science Lab, Georgia Tech | Dec 2025 - Present
        </p>
      </div>

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "I generate high-fidelity multiphase turbulence simulations on Aurora for MFlowDB, an open-source dataset built with Argonne National Lab and NVIDIA. The dataset replaces costly physical experiments with simulation data that can be produced at scale.",
            "I use fluid mechanics principles to set up the simulations and check that the outputs are physically reasonable. I then test deep learning models on the dataset to predict how flows evolve across different turbulence regimes.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["Python", "Aurora (HPC)", "Deep Learning", "Autoencoders", "Neural Operators", "SHAP"] } />
      </ProjectSection>

      <ProjectSection title="Highlights">
        <TechnicalHighlights
          highlights={[
            "Generated multiphase turbulence simulation data on Aurora for the open-source MFlowDB dataset, built with Argonne National Lab and NVIDIA.",
            "Set up and validated simulations using fluid mechanics principles to make sure outputs are physically accurate.",
            "Benchmarked autoencoders and neural operators for predicting flow evolution across turbulence regimes.",
            "Used SHAP-based explainable AI to identify the flow features driving model predictions.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Project Photo">
        {projectImage ? (
          <img
            src={projectImage}
            alt="MFlowDB turbulence simulation"
            className="w-full rounded-lg shadow-lg"
            style={{ maxHeight: '600px', objectFit: 'contain' }}
          />
        ) : (
          <div
            className="w-full rounded-lg flex items-center justify-center text-center p-6"
            style={{
              minHeight: '320px',
              border: `2px dashed ${themeColors.colors.pink[300]}`,
              color: isDarkMode ? themeColors.colors.white : themeColors.text.secondary
            }}
          >
            Add your project photo here
          </div>
        )}
      </ProjectSection>
    </ProjectLayout>
  );
};

export default ResearchProject;
