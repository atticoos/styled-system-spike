import React from "react";
import styled from "@emotion/styled";
import Flex from "./Flex";
import { Shadow, Colors, Radius } from "../design-system";

const Container = styled(Flex)({
  backgroundColor: Colors.Core.White,
  borderRadius: Radius.Small,
  boxShadow: Shadow.Subtle
});

export default function Card({ children, ...props }) {
  return (
    <Container px={2} py={2.5} {...props}>
      {children}
    </Container>
  );
}
