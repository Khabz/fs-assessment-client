import { IPerson } from "./person.interface";

export interface IResponse {
    count: number;
    previous: string;
    next: string;
    results: IPerson[];
}
