import {Time} from '@angular/common';

export interface Subject {
    name: string;
    code: string;
    search: string;
    commissions: Commission[];
    priority: number;
}
export interface Timeblock {
    day: string;
    start: string;
    end: string;
}

export interface Commission {
    name: string;
    professors: string[];
    subject?: Subject;
    schedule: Timeblock[];
}

