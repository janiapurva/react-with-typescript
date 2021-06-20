// define props type
interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

// mention React component and props type is expecting and you can destructure
const List: React.FC<IProps> = ({ people }) => {
  const renderlist = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} year old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderlist()}</ul>;
};

export default List;
