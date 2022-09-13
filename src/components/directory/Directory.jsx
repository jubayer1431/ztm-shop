import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./_Directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="App">
      <div className="categories-container">
        {categories.map(({ id, title, imageUrl }) => (
          <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
