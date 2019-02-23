import styled from "@emotion/styled";
import { margins, padding } from "./StyledSystem";
const BASE_POINT = 8;

const Box = styled.div(margins, padding);

export default Box;

// Idea Bin
// What would it be like if we individually defined these?
// Would we be able to import just the certain properties we'd need?
// How can we pass these variables into other components without the need
// to recompose the component off of <Box />?

// [AW]: Check out ./StyledSystem.js

const mb = x => {
  return {
    marginBottom: x * BASE_POINT
  };
};

const mt = ({ x }) => ({
  marginTop: x && x * BASE_POINT
});

const Spacing = {};

export { Spacing, mt, mb };
