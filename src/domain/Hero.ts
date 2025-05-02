export interface Hero {
    hero: HeroContent;
}

export interface HeroContent {
    title:       string;
    description: string;
    form:        Form;
    trustedBy:   TrustedBy;
    image:       Image;
}

export interface Form {
    ctaLabel:    string;
    placeholder: string;
    inputName:   string;
    inputType:   string;
}

export interface Image {
    src: string;
    alt: string;
}

export interface TrustedBy {
    label:  string;
    brands: string[];
}