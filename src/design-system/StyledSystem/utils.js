export const composeStyledRules = (...styledFns) => props =>
  styledFns.reduce(
    (styles, styledFn) => ({
      ...styles,
      ...styledFn(props)
    }),
    {}
  );

export const compose = composeStyledRules;

export const mapProps = mapper => func => props => func(mapper(props));

export const nested = (styledFn, styledDelegate) => props =>
  styledDelegate(styledFn(props));

export const withStaticValues = ruleset =>
  Object.keys(ruleset).reduce((rulesetAPI, ruleKey) => {
    const rule = ruleset[ruleKey];
    rulesetAPI[ruleKey] = staticValue => props =>
      rule({ [ruleKey]: staticValue, ...props });
    return rulesetAPI;
  }, {});

// Exploring if we can just do margin.m(2) -> {margin: 2}
// rather than margin.m(2) -> props => ({margin: 2})
export const withStaticValues___ = ruleset =>
  Object.keys(ruleset).reduce((rulesetAPI, ruleKey) => {
    const rule = ruleset[ruleKey];
    rulesetAPI[ruleKey] = staticValue => rule({ [ruleKey]: staticValue });
    return rulesetAPI;
  }, {});

// composed https://repl.it/@ajwhite/VacantMundaneExperiments
