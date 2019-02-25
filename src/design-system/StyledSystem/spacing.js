import { createStyledRuleset } from "./ruleFactory";
import { composeStyledRules, withStaticValues } from "./utils";

// what if we passed in props?
// styledRulesetFactory(ruleValueFromPropsSelector)
const getScaledSpacingValue = (spacing, pointSize) => spacing * pointSize;

function createSpacingRule(propName, styleNames) {
  function styledRule({ theme, ...props }) {
    const spacingValue = props[propName];
    const spacing = getScaledSpacingValue(spacingValue, theme.grid.pointScale);

    if (!isNaN(spacing)) {
      return styleNames.reduce(
        (styles, styleName) => ({
          ...styles,
          [styleName]: spacing
        }),
        {}
      );
    }
  }

  return {
    propName,
    styleNames,
    styledRule
  };
}

const marginRuleset = {
  all: createSpacingRule("m", ["margin"]),
  top: createSpacingRule("mt", ["marginTop"]),
  bottom: createSpacingRule("mb", ["marginBottom"]),
  left: createSpacingRule("ml", ["marginLeft"]),
  right: createSpacingRule("mr", ["marginRight"]),
  vertical: createSpacingRule("my", ["marginTop", "marginBottom"]),
  horizontal: createSpacingRule("mx", ["marginLeft", "marginRight"])
};

export const margins = composeStyledRules(
  ...Object.values(marginRuleset).map(({ styledRule }) => styledRule)
);
Object.assign(margins, withRulesetAPI(marginRuleset));

const paddingRuleset = {
  all: createSpacingRule("p", ["padding"]),
  top: createSpacingRule("pt", ["paddingTop"]),
  bottom: createSpacingRule("pb", ["paddingBottom"]),
  left: createSpacingRule("pl", ["paddingLeft"]),
  right: createSpacingRule("pr", ["paddingRight"]),
  vertical: createSpacingRule("py", ["paddingTop", "paddingBottom"]),
  horizontal: createSpacingRule("px", ["paddingLeft", "paddingRight"])
};

export const padding = composeStyledRules(
  ...Object.values(paddingRuleset).map(({ styledRule }) => styledRule)
);
Object.assign(padding, withRulesetAPI(paddingRuleset));
// const paddingRuleset = createSpacingRuleset({
//   p: "padding",
//   pt: "paddingTop",
//   pb: "paddingBottom",
//   pl: "paddingLeft",
//   pr: "paddingRight",
//   px: ["paddingTop", "paddingBottom"],
//   py: ["paddingLeft", "paddingTop"]
// });

// const paddingRules = Object.values(paddingRuleset);

// export const padding = composeStyledRules(...paddingRules);
// // Object.assign(margins, withStaticValues(marginRuleset));
// Object.assign(padding, withStaticValues(paddingRuleset));

function withRulesetAPI(ruleset) {
  return Object.keys(ruleset).reduce((rulesetAPI, key) => {
    const { propName, styledRule } = ruleset[key];
    rulesetAPI[key] = value => props =>
      styledRule({ [propName]: value, ...props });
    return rulesetAPI;
  }, {});
}

// const marginRuleset = createSpacingRuleset({
//   m: "margin",
//   mt: "marginTop",
//   mb: "marginBottom",
//   ml: "marginLeft",
//   mr: "marginRight",
//   my: ["marginTop", "marginBottom"],
//   mx: ["marginLeft", "marginRight"]
// });

// const marginRules = Object.values(marginRuleset);
// export const margins = composeStyledRules(...marginRules);

// const paddingRuleset = createSpacingRuleset({
//   p: "padding",
//   pt: "paddingTop",
//   pb: "paddingBottom",
//   pl: "paddingLeft",
//   pr: "paddingRight",
//   px: ["paddingTop", "paddingBottom"],
//   py: ["paddingLeft", "paddingTop"]
// });

// const paddingRules = Object.values(paddingRuleset);

// export const padding = composeStyledRules(...paddingRules);
// // Object.assign(margins, withStaticValues(marginRuleset));
// Object.assign(padding, withStaticValues(paddingRuleset));
