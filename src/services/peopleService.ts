import httpCommon from "../config/httpCommon";
import { IResponse } from "../interfaces/People/response.interface";

class PeopleService {
    public getPeople = async(page: number) =>  {
        const response = await httpCommon.get(`swapi/people?page=${page}`)

        const { data } = response;

        return data as IResponse
    }
}

export default new PeopleService();