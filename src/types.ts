type ColorFunc = (message: string | number) => string;

export type FrameworkFlavor = {
	name: string;
	display: string;
	color: ColorFunc;
};

export type Framework = {
	name: string;
	display: string;
	color: ColorFunc;
	flavors: FrameworkFlavor[];
};
