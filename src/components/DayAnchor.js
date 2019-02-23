import React from "react";
import Flex from "./Flex";

export default function DayAnchor({ start, end, ...props }) {
  return (
    <Flex py={4} justify="center" {...props}>
      {start ? "Start" : end ? "End" : null} Of Day
    </Flex>
  );
}
