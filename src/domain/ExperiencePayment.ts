export interface ExperiencePayment {
    section: Section;
}

export interface Section {
    title:       string;
    headline:    string;
    description: string;
    features:    Feature[];
}

export interface Feature {
    title:       string;
    description: string;
}