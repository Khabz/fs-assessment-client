import { IPerson } from "./person.interface";

export interface IResponse {
    count: number;
    previous: string | null;
    next: string | null;
    results: IPerson[];
}
