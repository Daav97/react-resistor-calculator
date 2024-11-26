const SelectableColor = ({ bandColor, onSelectableColorClick, isSelected }) => {
  const styles = {
    backgroundColor: bandColor.colorHexCode,
    fontSize: "0.7rem",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#49494a",
  };

  return (
    <div
      style={styles}
      onClick={onSelectableColorClick}
      className={`selectableObject ${isSelected && "selectedObject"}`}
    >
      {bandColor.name}
    </div>
  );
};
export default SelectableColor;
