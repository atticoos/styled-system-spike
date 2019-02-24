import Colors from "../Colors";
import { composeStyledRules, withStaticValues } from "./utils";

const colors = {
  light: Colors.Core.WetConcrete,
  dark: Colors.Core.Ink,
  link: Colors.Core.Windex,
  white: "#FFFFFF",
  default: "#000"
};

const typographyRuleset = {
  size: ({ size }) => size && { fontSize: size },
  weight: ({ weight }) => weight && { fontWeight: weight },
  color: ({ color }) => color && { color: colors[color] || colors.default },
  spacing: ({ spacing }) => spacing && { letterSpacing: spacing },
  transform: ({ transform }) => transform && { textTransform: transform }
};

const rules = Object.values(typographyRuleset);

export const typography = composeStyledRules(...rules);
Object.assign(typography, withStaticValues(typographyRuleset));

// console.warn("typing test", typography({ size: 12 }), typography.size(13));
