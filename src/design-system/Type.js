import styled from "@emotion/styled";
import Colors from "./Colors";
import StyleUtils from "../utils/style";
import { margins, padding, typography } from "./StyledSystem";

const colors = {
  light: Colors.Core.WetConcrete,
  dark: Colors.Core.Ink,
  link: Colors.Core.Windex,
  white: "#FFFFFF"
};

const Type = styled.span(
  margins,
  padding,
  typography,
  // ({ size }) => ({
  //   fontSize: size
  // }),
  // ({ weight = 400 }) => ({
  //   fontWeight: weight
  // }),
  // ({ color = "dark" }) => ({
  //   color: colors[color] || color
  // }),
  // ({ transform }) => ({
  //   textTransform: transform
  // }),
  // ({ decoration }) => ({
  //   textDecoration: decoration
  // }),
  ({ cursor }) => ({
    cursor: cursor
  }),
  ({ link }) =>
    link && {
      cursor: "pointer",
      textDecoration: "underline"
    },
  ({ ellipsis }) =>
    ellipsis && {
      ...StyleUtils.Ellipsis
    }
);

export default Type;
