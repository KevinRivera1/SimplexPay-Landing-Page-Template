export interface Footer {
	footer: FooterClass;
}

export interface FooterClass {
	content: Content;
}

export interface Content {
	logo: Logo;
	sections: Section[];
	socialMedia: SocialMedia;
	copyright: Copyright;
}

export interface Copyright {
	text: string;
}

export interface Logo {
	link: string;
	component: string;
	alt: string;
}

export interface Section {
	title: string;
	links: SectionLink[];
}

export interface SectionLink {
	text: string;
	url: string;
}

export interface SocialMedia {
	title: string;
	links: SocialMediaLink[];
}

export interface SocialMediaLink {
	platform: string;
	url: string;
	iconComponent: string;
	ariaLabel: string;
}
