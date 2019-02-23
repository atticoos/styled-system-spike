// export function makeRule({ prop, styleName }, applicator = value => value) {
//   const styleNames = Array.isArray(styleName) ? styleName : [styleName];

//   function styledRule(props) {
//     const propValue = props[prop];

//     if (propValue) {
//       return styleNames.reduce(
//         (styles, name) => ({
//           ...styles,
//           [name]: applicator(propValue)
//         }),
//         {}
//       );
//     }
//   }

//   return { prop, styleName, styledRule };
// }

// export const createRuleMaker = applicator => rule => makeRule(rule, applicator);

export const stylesFromProps = (props = {}, rules = []) =>
  rules.reduce(
    (styles, { styledRule }) => ({
      ...styles,
      ...styledRule(props) // @TODO: deep merge
    }),
    {}
  );

export const styledRulesetFactory = ruleSet => {
  function styledRuleset(props) {
    return stylesFromProps(props, Object.values(ruleSet));
    // return Object.values(ruleSet).reduce(
    //   (styles, { styledRule }) => ({
    //     ...styles,
    //     ...styledRule(props) // @TODO: deep merge
    //   }),
    //   {}
    // );
  }

  Object.keys(ruleSet).forEach(ruleKey => {
    const rule = ruleSet[ruleKey];
    styledRuleset[ruleKey] = withStyledRule({
      prop: ruleKey,
      styledRule: rule
    });
  });

  return styledRuleset;
};

// export const withStyledRule = ({ prop, styledRule }) => value => {
//   return styledRule({ [prop]: value });
// };

// export function createStyledRuleMaker(applicator = value => value) {
//   return (...styleNames) => {
//     function styledRule(props) {
//       const propValue = props[prop];

//       if (propValue) {
//         return styleNames.reduce(
//           (styles, name) => ({
//             ...styles,
//             [name]: applicator(propValue)
//           }),
//           {}
//         );
//       }
//     }

//     return styledRule;
//   };
// }
