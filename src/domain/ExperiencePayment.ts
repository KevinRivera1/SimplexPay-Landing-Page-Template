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
    icon:        string;
    title:       string;
    description: string;
}