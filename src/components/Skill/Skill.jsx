import './Skill.scss';

function Skill({ title, cover }) {
  return (
    <div className="skill">
      <img src={cover} alt={'logo ' + `${title}`} />
      <span>{title}</span>
    </div>
  );
}

export default Skill;
