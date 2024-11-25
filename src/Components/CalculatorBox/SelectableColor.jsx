const SelectableColor = ({ bandColor, onSelectableColorClick }) => {
  const styles = {
    backgroundColor: bandColor.colorHexCode,
    fontSize: "0.7rem",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
    cursor: "pointer",
    color: "#49494a",
  };

  return (
    <div style={styles} onClick={onSelectableColorClick}>
      {bandColor.name}
    </div>
  );
};
export default SelectableColor;
