import Color from "color";

/**
 * Darkens a color (RGB, HSL, or hex) and returns a new hex
 *
 * @param  {string} color The string of the color
 * @param  {number} percentage between 0 and 1 to darken the input color
 * @return {string} The string of the new, darkened color
 */
export function darken(color, percentage) {
  return Color(color)
    .darken(percentage)
    .rgb()
    .string();
}

/**
 * Lightens a color (RGB, HSL, or hex) and returns a new hex
 *
 * @param  {string} color The string of the color
 * @param  {number} percentage between 0 and 1 to lighten input color,
 * @return {string} The hex code string of the new, lightened color
 */
export function lighten(color, percentage) {
  return Color(color)
    .lighten(percentage)
    .rgb()
    .string();
}

/**
 * Fades a color (RGB, HSL, or hex) and returns a new hex
 *
 * @param  {string} color The string of the color
 * @param  {number} percentage between 0 and 1 to fade input color,
 * @return {string} The hex code string of the new, faded color
 */
export function fade(color, percentage) {
  return Color(color)
    .fade(percentage)
    .rgb()
    .string();
}
