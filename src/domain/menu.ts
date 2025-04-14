export interface Menu {
	logo: Logo;
	navLinks: Login[];
	auth: Auth;
}

export interface Auth {
	login: Login;
	signup: Login;
}

export interface Login {
	text: string;
	url: string;
}

export interface Logo {
	src: string;
	alt: string;
}
