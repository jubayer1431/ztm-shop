import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./DirectoryItem.styles";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ imageUrl, title, route }) => {
  // This component only used in Directory Component. It's only for homepage
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={onClickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
