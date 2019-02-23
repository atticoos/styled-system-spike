import React from "react";
import styled from "@emotion/styled";
import Flex from "./Flex";
import { Type, Shadow, Colors } from "../design-system";

const Container = styled(Flex)({
  backgroundColor: Colors.Core.White,
  boxShadow: Shadow.Subtle
});

export default function Header(props) {
  return (
    <Container {...props}>
      <Type size={18} weight={500}>
        Friday, Feb 8
      </Type>
    </Container>
  );
}
