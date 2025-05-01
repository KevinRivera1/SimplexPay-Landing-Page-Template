export interface Plans {
	title: string;
	plans: Plan[];
}

export interface Plan {
	_id: string;
	name: string;
	price: Price;
	highlighted: boolean;
}

export interface Price {
	amount: number;
	currency: string;
	billing_cycle: string;
	formatted: string;
}
