export interface Project {
    name: string;
    url?: string;
    note?: string;
    bullets: string[];
}

export interface Job {
    company: string;
    role: string;
    period: string;
    location: string;
    intro?: string;
    projects?: Project[];
    bullets?: string[];
    stack: string[];
}
