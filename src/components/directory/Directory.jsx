import Category from "../category/Category";
import "./_Directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="App">
      <div className="categories-container">
        {categories.map(({ id, title, imageUrl }) => (
          <Category key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
