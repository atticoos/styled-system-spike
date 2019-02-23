const Border = {};

// Sizes
const Thin = "1px solid";
const Thick = "2px solid";

Border.Thin = Thin;
Border.Thick = Thick;

// Colors
const Light = "#D2DAE1";

Border.Light = Light;

//
// I would love to be able to chain dot syntax
// Is anything like that possible? Any ideas on how we
// could make this more flexible?
//
// Imagine something like this:
//
// Border.Thin.Light
// Border.Thick.Dark
//
// I suppose we could just do like
//
// Border.ThinLight
//
// but, it'd be cool to be
// a bit more customizable during implementation
//
// Maybe during implementation we just do:
//
// border: Border.Thin + Border.Light
//
// or separate out the style and the color:
// border: Border.Thin
// borderColor: Border.Light
//
// Maybe I'm overthinking, we may not even have enough
// border styles to even worry about this, but my train of
// thought is: we have different size borders and different
// border "themes".
//

export default Border;
