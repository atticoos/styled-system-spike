import React from "react";
import styled from "@emotion/styled";
import { styledRulesetFactory } from "./utils";

const BASE_POINT = 8;

// what if we passed in props?
// styledRulesetFactory(ruleValueFromPropsSelector)
const styledFromRuleset = styledRulesetFactory(spacing => spacing * BASE_POINT);

const marginRuleset = {
  m: "margin",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  my: ["marginTop", "marginBottom"],
  mx: ["marginLeft", "marginRight"]
};
export const margins = styledFromRuleset(marginRuleset);

const paddingRuleset = {
  p: "padding",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  px: ["paddingTop", "paddingBottom"],
  py: ["paddingLeft", "paddingTop"]
};
export const padding = styledFromRuleset(paddingRuleset);

/*
And what about the same for other systems?

```
const typeRuleset = {
  size: 'fontSize',
  weight: 'fontWeight'
}
```


*/

// const paddingRuleset = {
//   p: createPaddingRule({
//       prop: "p",
//       styleName: "padding"
//     }),
//     createPaddingRule({
//       prop: "pt",
//       styleName: "paddingTop"
//     }),
//     createPaddingRule({
//       prop: "pb",
//       styleName: "paddingBottom"
//     }),
//     createPaddingRule({
//       prop: "pl",
//       styleName: "paddingLeft"
//     }),
//     createPaddingRule({
//       prop: "pr",
//       styleName: "paddingRight"
//     }),
//     createPaddingRule({
//       prop: "py",
//       styleName: ["paddingBottom", "paddingTop"]
//     }),
//     createPaddingRule({
//       prop: "px",
//       styleName: ["paddingLeft", "paddingRight"]
//     })

// };

// export const padding = createStyledRuleset(paddingRuleset)

// Object.keys(marginRules).for

// export const margins = props => {
//   const rules = Object.values(marginRules);
//   return stylesFromProps(props, rules);
// };

// // attach styled functions
// // eg: styled(...)(margins.m(4))
// Object.keys(marginRules).forEach(ruleKey => {
//   const rule = marginRules[ruleKey];
//   margins[ruleKey] = withStyledRule(rule);
// });

// export const padding = props => {
//   const createPaddingRule = createRuleMaker(padding => padding * BASE_POINT);

//   const rules = [
//     createPaddingRule({
//       prop: "p",
//       styleName: "padding"
//     }),
//     createPaddingRule({
//       prop: "pt",
//       styleName: "paddingTop"
//     }),
//     createPaddingRule({
//       prop: "pb",
//       styleName: "paddingBottom"
//     }),
//     createPaddingRule({
//       prop: "pl",
//       styleName: "paddingLeft"
//     }),
//     createPaddingRule({
//       prop: "pr",
//       styleName: "paddingRight"
//     }),
//     createPaddingRule({
//       prop: "py",
//       styleName: ["paddingBottom", "paddingTop"]
//     }),
//     createPaddingRule({
//       prop: "px",
//       styleName: ["paddingLeft", "paddingRight"]
//     })
//   ];
//   return stylesFromProps(props, rules);
// };

// const createStyledSystemHoc = (...styledSystems) => (rules = []) => {
//   return WrappedComponent => {
//     const StyledComponent = styled(WrappedComponent)(...styledSystems);
//     return props => <StyledComponent {...rules} {...props} />;
//   };
// };

// export const withMargins = createStyledSystemHoc(margins);
// export const withPadding = createStyledSystemHoc(padding);
