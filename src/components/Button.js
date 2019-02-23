import React from "react";
import styled from "@emotion/styled";
import { Box, Colors, Radius, margin, padding } from "../design-system";
import { fade } from "../utils/colors";

const themes = {
  primary: {
    backgroundColor: Colors.Core.Concrete,
    color: Colors.Core.Ink,
    "&:hover": {
      backgroundColor: fade(Colors.Core.Concrete, 0.2)
    }
  },
  secondary: {
    backgroundColor: Colors.Core.Ink,
    color: Colors.Core.White,
    "&:hover": {
      backgroundColor: fade(Colors.Core.Ink, 0.2)
    }
  }
};

// how can i bring in our spacing vars?
const sizes = {
  compact: {
    padding: 1 * 8
  },
  default: {
    padding: 1.5 * 8
  },
  large: {
    padding: 2 * 8
  }
};

const StyledButton = styled.button(
  margin,
  padding,
  {
    alignSelf: "flex-start",
    borderRadius: Radius.Large,
    border: 0,
    color: Colors.Core.Ink,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    transition: "background-color 200ms ease-in-out"
  },
  ({ theme }) => themes[theme] || themes.primary,
  ({ size }) => sizes[size] || sizes.default
);

export default function Button({
  children,
  theme = "primary",
  size = "default",
  ...props
}) {
  return (
    <StyledButton theme={theme} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
