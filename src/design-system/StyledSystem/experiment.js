import { compose, mapProps } from "./utils";

function mapValueToSpacing(value, { theme }) {
  const spacing = value * theme.grid.pointScale;
  if (!isNaN(spacing)) {
    return spacing;
  }
}

const paddingStylers = {};

paddingStylers.top = createStyle({
  propName: "paddingTop",
  alias: "pt",
  styleName: "paddingTop",
  mapValue: mapValueToSpacing
});

paddingStylers.bottom = createStyle({
  propName: "paddingBottom",
  alias: "pb",
  styleName: "paddingBottom",
  mapValue: mapValueToSpacing
});

paddingStylers.left = createStyle({
  propName: "paddingLeft",
  alias: "pl",
  styleName: "paddingLeft",
  mapValue: mapValueToSpacing
});

paddingStylers.right = createStyle({
  propName: "paddingRight",
  alias: "pr",
  styleName: "paddingRight",
  mapValue: mapValueToSpacing
});

paddingStylers.horizontal = createCompositeStyle({
  propName: "paddingHorizontal",
  alias: "px",
  stylers: [paddingStylers.left, paddingStylers.right]
});

paddingStylers.vertical = createCompositeStyle({
  propName: "paddingVertical",
  alias: "py",
  stylers: [paddingStylers.top, paddingStylers.bottom]
});

paddingStylers.all = createCompositeStyle({
  propName: "padding",
  alias: "p",
  stylers: [paddingStylers.horizontal, paddingStylers.vertical]
});

export const padding = compose(
  ...Object.values(paddingStylers).map(({ styleFromProps }) => styleFromProps)
);

Object.assign(padding, getStyleAPI(paddingStylers));

const marginStylers = {};
marginStylers.top = createStyle({
  propName: "marginTop",
  alias: "mt",
  styleName: "marginTop",
  mapValue: mapValueToSpacing
});

marginStylers.bottom = createStyle({
  propName: "marginBottom",
  alias: "mb",
  styleName: "marginBottom",
  mapValue: mapValueToSpacing
});

marginStylers.left = createStyle({
  propName: "marginLeft",
  alias: "ml",
  styleName: "marginLeft",
  mapValue: mapValueToSpacing
});

marginStylers.right = createStyle({
  propName: "marginRight",
  alias: "mr",
  styleName: "marginRight",
  mapValue: mapValueToSpacing
});

marginStylers.horizontal = createCompositeStyle({
  propName: "marginHorizontal",
  alias: "mx",
  stylers: [marginStylers.left, marginStylers.right]
});

marginStylers.vertical = createCompositeStyle({
  propName: "marginVertical",
  alias: "my",
  stylers: [marginStylers.top, marginStylers.bottom]
});

marginStylers.all = createCompositeStyle({
  propName: "margin",
  alias: "m",
  stylers: [marginStylers.horizontal, marginStylers.vertical]
});

export const margins = compose(
  ...Object.values(marginStylers).map(({ styleFromProps }) => styleFromProps)
);
Object.assign(margins, getStyleAPI(marginStylers));

function createStyle({
  propName,
  alias,
  mapValue = value => value,
  styleName
}) {
  const getStyle = (value, props) => ({ [styleName]: mapValue(value, props) });
  const valueFromProps = props => props[propName] || props[alias];
  const styleFromProps = props => getStyle(valueFromProps(props), props);
  return { getStyle, styleFromProps, propName, alias };
}

function createCompositeStyle({ propName, alias, stylers }) {
  const getStyle = (value, props) =>
    stylers.reduce((style, styler) => {
      return { ...style, ...styler.getStyle(value, props) };
    }, {});

  const styleFromProps = props =>
    stylers.reduce((style, styler) => {
      return { ...style, ...styler.styleFromProps(props) };
    }, {});

  return { getStyle, styleFromProps, propName, alias };
}

function getStyleAPI(stylers) {
  return Object.keys(stylers).reduce((api, apiName) => {
    const { getStyle } = stylers[apiName];
    const styleFn = value => props => getStyle(value, props);
    api[apiName] = styleFn;
    return api;
  }, {});
}
