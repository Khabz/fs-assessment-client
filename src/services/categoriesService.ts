import httpCommon from "../config/httpCommon";

class CategoryService {
    public getCategories = async () => {
        const response = await httpCommon.get("chuck/categories")

        const { data } = response;

        return data;
    }
}

export default new CategoryService();