import "./_DirectoryItem.scss";
const DirectoryItem = ({ imageUrl, title }) => {
  // This component only used in Directory Component. It's only for homepage

  return (
    <div className="directory-item-container bg-red-800	 p-4">
      <div
        className="background-image "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
