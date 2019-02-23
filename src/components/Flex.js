import React from "react";
import styled from "@emotion/styled";
import { Box } from "../design-system";

const Container = styled(Box)(
  {
    display: "flex"
  },
  ({ align }) => ({
    alignItems: align
  }),
  ({ justify }) => ({
    justifyContent: justify
  }),
  ({ direction }) => ({
    flexDirection: direction
  }),
  ({ wrap }) => ({
    flexWrap: wrap
  }),
  ({ flex }) => ({
    flex: flex
  })
);

export default function Flex({
  justify,
  align,
  direction,
  wrap,
  flex,
  children,
  ...props
}) {
  return (
    <Container
      justify={justify}
      align={align}
      direction={direction}
      wrap={wrap}
      flex={flex}
      {...props}
    >
      {children}
    </Container>
  );
}
