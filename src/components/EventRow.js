import React from "react";
import styled from "@emotion/styled";
import Flex from "./Flex";
import { Colors, Radius, Shadow, Type } from "../design-system";

const Container = styled(Flex)({
  backgroundColor: Colors.Core.White,
  borderRadius: Radius.Small,
  boxShadow: Shadow.Subtle
});

const Title = styled(Type)({
  marginBottom: 8
});

export default function EventRow() {
  return (
    <Container p={1.5} direction="column">
      <Title size={15} ellipsis>
        On-site interview - Jillian (Jill) Arnofsky - Marketing Designer
      </Title>
      <Type size={15} color="light">
        1:30pm
      </Type>
    </Container>
  );
}
