import { createStyledRuleset } from "./ruleFactory";
import { composeStyledRules, withStaticValues } from "./utils";

const BASE_POINT = 8;

// what if we passed in props?
// styledRulesetFactory(ruleValueFromPropsSelector)
const getScaledSpacingValue = spacing => spacing * BASE_POINT;

function createSpacingRuleset(ruleset) {
  const spacingRuleset = Object.keys(ruleset).reduce(
    (enhancedRuleset, ruleKey) => {
      const ruleValue = ruleset[ruleKey];
      const styleNames = Array.isArray(ruleValue) ? ruleValue : [ruleValue];

      enhancedRuleset[ruleKey] = createSpacingRule(ruleKey, styleNames);
      return enhancedRuleset;
    },
    {}
  );

  return spacingRuleset;
}

function createSpacingRule(ruleKey, styleNames) {
  return props => {
    const spacing = getScaledSpacingValue(props[ruleKey]);
    if (!isNaN(spacing)) {
      const out = styleNames.reduce(
        (styles, styleName) => ({
          ...styles,
          [styleName]: spacing
        }),
        {}
      );
      return out;
    }
  };
}

const marginRuleset = createSpacingRuleset({
  m: "margin",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  my: ["marginTop", "marginBottom"],
  mx: ["marginLeft", "marginRight"]
});

const paddingRuleset = createSpacingRuleset({
  p: "padding",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  px: ["paddingTop", "paddingBottom"],
  py: ["paddingLeft", "paddingTop"]
});

const marginRules = Object.values(marginRuleset);
const paddingRules = Object.values(paddingRuleset);

export const margins = composeStyledRules(...marginRules);
export const padding = composeStyledRules(...paddingRules);
Object.assign(margins, withStaticValues(marginRuleset));
Object.assign(padding, withStaticValues(paddingRuleset));
