import { createStyledRulesetFactory } from "./ruleFactory";

const BASE_POINT = 8;

// what if we passed in props?
// styledRulesetFactory(ruleValueFromPropsSelector)
const getScaledSpacingValue = spacing => spacing * BASE_POINT;
const styledFromRuleset = createStyledRulesetFactory(getScaledSpacingValue);

const marginRuleset = {
  m: "margin",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  my: ["marginTop", "marginBottom"],
  mx: ["marginLeft", "marginRight"]
};

const paddingRuleset = {
  p: "padding",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  px: ["paddingTop", "paddingBottom"],
  py: ["paddingLeft", "paddingTop"]
};

export const margins = styledFromRuleset(marginRuleset);
export const padding = styledFromRuleset(paddingRuleset);
