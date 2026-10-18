import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

//import robot from '../../assets/robot.jpg';
//import drivetrain from '../../assets/drivetrain.jpg';
//import flapper from '../../assets/flapper.jpg';
import code from '../../assets/code.png';
import track from '../../assets/track.png';
import robot from '../../assets/robot.png';
import cad from '../../assets/cad.png';
// To show a big picture at the bottom of this page:
// 1. Put your image in src/assets/ (for example arena-robot.jpg)
// 2. Uncomment the import line below and make the file name match yours
// 3. Delete the line that says: const projectImage: string = '';
// import projectImage from '../../assets/arena-robot.jpg';
//const projectImage: string = '';



const ArenaRobot = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <ProjectLayout>
      <div className="mb-8">
        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
        >
          Autonomous Arena Mechatronic System
        </h1>
        <p
          className="text-lg"
          style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.text.secondary }}
        >
          Mechanical Design Course, Georgia Tech | Aug 2026 - Present
        </p>
      </div>

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "For my mechanical design course, my team designed and built a machine that completes three tasks in an arena on its own. After the code is compiled, we unplug the computer and the machine runs without anyone controlling it.",
            "The machine drives on motor-driven wheels to the middle of the arena and stops. A pneumatic flapper system then releases a rope so the flaps open and knock objects out of the way. Last, a solenoid pulls in to open a door at the top, and the balls drop into the arena.",
            "This project is still in progress, and the next phase will add more mechanisms.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={[ "C", "Teensy", "Pneumatics", "Solenoids","Motors", "Hands-on Assembly"]} />
      </ProjectSection>

      <ProjectSection title="Highlights">
        <TechnicalHighlights
          highlights={[
            "Designed and built a motor-driven drivetrain, a pneumatic flapper, and a solenoid-actuated release door.",
            "Programmed a Teensy in C to sequence and execute all three arena tasks.",
            "Runs on its own once the code is uploaded and the computer is unplugged.",
            "Still in progress: more mechanisms are being added in the next phase.",
          ]}
        />
      </ProjectSection>

      



<ProjectSection title="Project Photos">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[robot, cad, track, code].map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Arena robot project ${index + 1}`}
        className="w-full h-64 rounded-lg object-contain"
      />
    ))}
  </div>
</ProjectSection>




    </ProjectLayout>
  );
};

export default ArenaRobot;
