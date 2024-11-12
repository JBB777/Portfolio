import './Skills.scss';
import Skill from '../../components/Skill/Skill';
import skills from '../../datas/skills.json';

const hardSkills = skills.hard;

function Skills() {
  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className="skills__container">
        {hardSkills.map((skill) => {
          return (
            <Skill key={skill.id} title={skill.title} cover={skill.cover} />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
