import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import UserStatistic from "../../models/user/UserStatistic";

const route = APIRoutes.getUserStatisticUrl();

const UserStatisticService = {
    getUserStatisticById: async (id: number) => APIService.get<UserStatistic>(route + id),
};

export default UserStatisticService;