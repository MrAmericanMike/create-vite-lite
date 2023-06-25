type ColorFunc = (message: string | number) => string;

export type FrameworkVariant = {
	name: string;
	display: string;
	color: ColorFunc;
};

export type Framework = {
	name: string;
	display: string;
	color: ColorFunc;
	variants: FrameworkVariant[];
};
