import "./categories.scss";
const Category = ({ imageUrl, title }) => {
  return (
    <div className="category-container bg-red-800	 p-4">
      <div
        className="background-image "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
