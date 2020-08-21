export type AppearancesTypes = keyof typeof APPEARANCES;

type btnType =
	| "primary"
	| "primaryOutline"
	| "secondary"
	| "secondaryOutline"
	| "tertiary"
	| "outline"
	| "inversePrimary"
	| "inverseSecondary"
	| "inverseOutline";

type AppearancesObj = {
	[key in btnType]: btnType;
};

export const APPEARANCES: AppearancesObj = {
	primary: "primary",
	primaryOutline: "primaryOutline",
	secondary: "secondary",
	secondaryOutline: "secondaryOutline",
	tertiary: "tertiary",
	outline: "outline",
	inversePrimary: "inversePrimary",
	inverseSecondary: "inverseSecondary",
	inverseOutline: "inverseOutline",
};
export type SizesTypes = keyof typeof SIZES;
type sizeType = "small" | "medium";
type sizeObj = {
	[key in sizeType]: sizeType;
};
export const SIZES: sizeObj = {
	small: "small",
	medium: "medium",
};