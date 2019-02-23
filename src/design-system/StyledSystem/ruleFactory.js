// move styledRulesetFactory here
export function createStyledRulesetFactory(applicator) {
  const styledRuleFactory = createStyledRuleFactory(applicator);
  return ruleset => {
    ruleset = rulesetWithStyledRules(ruleset, styledRuleFactory);
    const styledRules = Object.values(ruleset);

    function styledRuleset(props) {
      return styledRules.reduce(
        (styles, styledRule) => ({
          ...styles,
          ...styledRule(props)
        }),
        {}
      );
    }

    return styledRulesetWithFunctions(ruleset, styledRuleset);
  };
}

export function createStyledRule(
  prop,
  styleNames,
  applicator = value => value
) {
  styleNames = Array.isArray(styleNames) ? styleNames : [styleNames];

  function styledRule(props) {
    const propValue = props[prop];
    if (propValue) {
      return styleNames.reduce(
        (styles, name) => ({
          ...styles,
          [name]: applicator(propValue)
        }),
        {}
      );
    }
  }

  return styledRule;
}

export const createStyledRuleFactory = applicator => (prop, styleNames) =>
  createStyledRule(prop, styleNames, applicator);

function styledRulesetWithFunctions(ruleset, styledRuleset) {
  const enhancedStyledRuleset = copy(styledRuleset);

  Object.keys(ruleset).forEach(ruleKey => {
    const styledRule = ruleset[ruleKey];
    enhancedStyledRuleset[ruleKey] = asStyledFunction(ruleKey, styledRule);
  });

  return enhancedStyledRuleset;
}

const copy = fn => (...args) => fn(...args);

const asStyledFunction = (ruleKey, styledRule) => value =>
  styledRule({ [ruleKey]: value });

const rulesetWithStyledRules = (ruleset, styledRuleFactory) =>
  Object.keys(ruleset).reduce((enhancedRuleset, ruleKey) => {
    enhancedRuleset[ruleKey] = styledRuleFactory(ruleKey, ruleset[ruleKey]);
    return enhancedRuleset;
  }, {});
