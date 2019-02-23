import React from "react";
import styled from "@emotion/styled";
import Flex from "./Flex";
import { Colors, Radius, Type, Border } from "../design-system";

const Container = styled(Flex)({
  backgroundColor: Colors.Core.Conrete,
  border: Border.Thin + Border.Light,
  borderRadius: Radius.Small
});

// const TimeRow = styled(Type)({
//   marginBottom: 8
// });

export default function FocusTimeRow(props) {
  return (
    <Container p={2} mb={1} direction="column" {...props}>
      <Type size={15} mb={1} color="light">
        1:30pm
      </Type>
      <Type size={15} weight={500} color="light" link>
        Add Focus Time
      </Type>
    </Container>
  );
}
