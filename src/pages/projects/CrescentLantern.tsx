import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';


import plas from '../../assets/plas.png';
import dim from '../../assets/dim.png';
import final from '../../assets/final.png';
import draw from '../../assets/draw.png';

// To show a big picture at the bottom of this page:
// 1. Put your image in src/assets/ (for example crescent-lantern.jpg)
// 2. Uncomment the import line below and make the file name match yours
// 3. Delete the line that says: const projectImage: string = '';
// import projectImage from '../../assets/crescent-lantern.jpg';
//const projectImage: string = '';

const CrescentLantern = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <ProjectLayout>
      <div className="mb-8">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
        >
          Crescent Lantern
        </h1>
        <p
          className="text-lg"
          style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.text.secondary }}
        >
          Product Design Project, Georgia Tech | Jan 2025 - May 2025
        </p>
      </div>

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "I designed a lantern that works as both a decoration and a functional tea light candle holder. I modeled it in SolidWorks and tested the design with 3D-printed prototypes.",
            "I used the prototypes to refine the CAD model and improve how well the lantern works and how easily it can be made.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["SolidWorks", "3D Printing", "Iterative Prototyping", "DFM"]} />
      </ProjectSection>

      <ProjectSection title="Highlights">
        <TechnicalHighlights
          highlights={[
            "Designed a multifunctional lantern that combines decorative style with a working tea light holder.",
            "Built and tested iterative 3D-printed prototypes.",
            "Improved functionality and manufacturability through repeated CAD modeling and prototyping.",
          ]}
        />
      </ProjectSection>

   

<ProjectSection title="Project Photos">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[draw, final, plas, dim].map((item) => (
      <div
        key={item}
        className="w-full h-64 rounded-lg overflow-hidden"
      >
        <img
          src={item}
          alt="Crescent Lantern project"
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    ))}
  </div>
</ProjectSection>


    </ProjectLayout>
  );
};

export default CrescentLantern;
