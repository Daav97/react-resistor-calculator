import "./SelectableColor.css";
const SelectableColor = ({ bandColor, onSelectableColorClick, isSelected }) => {
  const styles = {
    backgroundColor: bandColor.colorHexCode,
  };

  return (
    <div
      style={styles}
      onClick={onSelectableColorClick}
      className={`selectableColor selectableObject ${
        isSelected && "selectedObject"
      }`}
    >
      {bandColor.name}
    </div>
  );
};
export default SelectableColor;
