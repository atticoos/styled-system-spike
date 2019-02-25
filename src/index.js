import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import StyleSystem, {
  ThemeProvider,
  Colors,
  margins,
  padding
} from "./design-system";
import {
  Flex,
  Header,
  DayAnchor,
  UpcomingEventCard,
  FocusTimeRow,
  EventRow
} from "./components";

import "./styles.css";

const Container = styled(Flex)(
  margins.top(2), // => {margin: }
  margins.left(20),
  {
    backgroundColor: Colors.Core.Ghost,
    maxWidth: 375
  }
);
console.log(
  "margins",
  margins.top(2)({ mt: 2, theme: { grid: { pointScale: 8 } } })
);
const Block = styled.div(
  margins,
  margins.all(2),
  // margins.top(2),
  // margins.vertical(4),
  // props => !props.last && margins.right(4),
  {
    width: 100,
    height: 100,
    backgroundColor: "black"
  }
);

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Flex direction="row">
          <Block mt={2} />
          <Block />
          <Block last />
          <Block />
        </Flex>
        {/* 
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

        */}
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
