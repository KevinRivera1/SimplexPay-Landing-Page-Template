export interface BannerTryItNow {
	subtitle: string;
	title: string;
	description: string;
	buttons: Buttons;
}

export interface Buttons {
	primary: Ary;
	secondary: Ary;
}

export interface Ary {
	text: string;
	link: string;
}
