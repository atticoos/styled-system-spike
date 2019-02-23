import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { Colors, margins } from "./design-system";
import {
  Flex,
  Header,
  DayAnchor,
  UpcomingEventCard,
  FocusTimeRow,
  EventRow
} from "./components";

import "./styles.css";

const Container = styled(Flex)(margins.mt(2), margins.ml(10), {
  backgroundColor: Colors.Core.Ghost,
  maxWidth: 375
});

const Block = styled.div(margins.m(20), {
  width: 100,
  height: 100,
  backgroundColor: "black"
});

function App() {
  return (
    <div className="App">
      <Block />
      <Container direction="column">
        <Header py={2.5} px={2} flex={1} />
        <DayAnchor start />
        <Flex px={2} direction="column" flex={1}>
          <UpcomingEventCard mb={4} />
          <FocusTimeRow mb={1} />
          <FocusTimeRow mb={1} />
          <EventRow />
        </Flex>
        <DayAnchor end />
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
