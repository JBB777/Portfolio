import './Tag.scss';

function Tag({ title, idx }) {
  return (
    <div className={`${title}` + ' tag'} key={idx}>
      {title}
    </div>
  );
}

export default Tag;
