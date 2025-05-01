export interface Benefits {
	title: string;
	headline: string;
	steps: Step[];
}

export interface Step {
	value: string;
	label: string;
	description: string;
}
