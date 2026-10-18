import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

// To show a big picture at the bottom of this page:
// 1. Put your image in src/assets/ (for example row-weeding-robot.jpg)
// 2. Uncomment the import line below and make the file name match yours
// 3. Delete the line that says: const projectImage: string = '';
// import projectImage from '../../assets/row-weeding-robot.jpg';
import done from '../../assets/done.png';
import pic from '../../assets/pic.png';
import row from '../../assets/row.png';
import wheel from '../../assets/wheel.png';

const RowWeedingRobot = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <ProjectLayout>
      <div className="mb-8">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
        >
          Row-Weeding Robot Drivetrain
        </h1>
        <p
          className="text-lg"
          style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.text.secondary }}
        >
          Mechanical Design Project, Georgia Tech | Jan 2025 - May 2025
        </p>
      </div>

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "I designed the wheel subsystem for an autonomous agricultural robot that weeds between rows of crops. In SolidWorks, I modeled a multi-part wheel with its drivetrain components, assemblies, and motion constraints.",
            "I improved the design through several rounds of CAD revision, using tolerance analysis and checking how the subsystem connects to the robot's chassis.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["SolidWorks", "Assemblies", "Tolerance Analysis", "Fits & Clearances", "DFM"]} />
      </ProjectSection>

      <ProjectSection title="Highlights">
        <TechnicalHighlights
          highlights={[
            "Modeled a multi-part wheel subsystem in SolidWorks, including drivetrain components, assemblies, and motion constraints.",
            "Improved fit, stability, and manufacturability through iterative CAD design.",
            "Used tolerance analysis and chassis integration to make the subsystem work with the rest of the robot.",
          ]}
        />
      </ProjectSection>


<ProjectSection title="Project Photos">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[row, done, pic, wheel].map((item) => (
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

export default RowWeedingRobot;
