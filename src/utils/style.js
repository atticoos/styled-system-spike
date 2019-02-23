const Ellipsis = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

const FlexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

function Size(height, width = height) {
  return {
    height,
    width
  };
}

function Position(position, top, right, bottom, left) {
  if (typeof position === "string") {
    return {
      position: position,
      top: top,
      right: right,
      bottom: bottom,
      left: left
    };
  } else {
    return {
      top: position,
      right: top,
      bottom: right,
      left: bottom
    };
  }
}

const StyleUtils = {};

StyleUtils.Ellipsis = Ellipsis;
StyleUtils.FlexCenter = FlexCenter;
StyleUtils.Size = Size;
StyleUtils.Position = Position;

export default StyleUtils;
