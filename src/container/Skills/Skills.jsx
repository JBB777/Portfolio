import './Skills.scss';
import Skill from '../../components/Skill/Skill';
import skills from '../../datas/skills.json';

function Skills() {
  return (
    <section className="skills">
      <h2>Compétences</h2>
      <div className="skills__container">
        {skills.map((skill) => {
          return (
            <Skill key={skill.id} title={skill.title} cover={skill.cover} />
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
