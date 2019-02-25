import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import {
  Type,
  typography,
  margins,
  padding,
  nested,
  composeStyledRules
} from "../design-system";
import Button from "./Button";
console.log("MARGINS", Object.keys(margins));

// This is a good example of where it would be nice
// to spread (or something) our Spacing variables so that
// we can use them inline below without having to compose the
// components out of <Box />

// Or like, some how say "hey, everything in this
// function, should be able to take Spacing variables"

// I wonder, what is this best way to these different text blocks.
// Should we compose based on text or just define functions with
// our inline variables? Perhaps this depends on how many properties
// we want to allow Type to have. When does it become "too many"

// Perhaps it's just a judgement call, but maybe we should define some
// general rules that we can follow

// const Eyebrow = ({children}) => {
//   return (
//     <Type size={12} weight={700} color="light">
//      {children}
//     </Type>
//   )
// }

const Eyebrow = styled(Type)(
  typography.size(12),
  typography.weight(700),
  typography.spacing(0.5),
  typography.transform("uppercase")
).withComponent("h6");

const Header = styled(Type)(
  typography.size(18),
  margins.bottom(2)
).withComponent("h2");

const IconRow = styled(Type)(
  typography.size(16),
  margins.bottom(1.5),
  nested(composeStyledRules(margins.bottom(2), margins.top(0)), styles => ({
    "&:last-of-type": {
      ...styles
    }
  }))
).withComponent("p");

export default function UpcomingEventCard(props) {
  return (
    <Card direction="column" {...props}>
      <Eyebrow color="light" mt={0.5} mb={2}>
        Upcoming Event
      </Eyebrow>
      <Header>3.0 Milestone Planning</Header>
      <IconRow color="light">Imagine an Icon</IconRow>
      <IconRow color="light">Another IconRow</IconRow>
      <Button>Join Hangout Meeting</Button>
    </Card>
  );
}

Card.Eyebrow = Eyebrow;
Card.Header = Header;
Card.IconRow = IconRow;
