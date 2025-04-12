import type { IMenu } from "@domain/menu";

export const Menu: IMenu[] = [
	{
		name: "Products",
		icon: "store",
		link: "/",
		ariaLabel: "Products",
	},
	{
		name: "Customers",
		icon: "people",
		link: "/customers",
		ariaLabel: "Customers",
	},
	{
		name: "Pricing",
		icon: "attach_money",
		link: "/pricing",
		ariaLabel: "Pricing",
	},
	{
		name: "Learn",
		icon: "school",
		link: "/learn",
		ariaLabel: "Learn",
	},
];
