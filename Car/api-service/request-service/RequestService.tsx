import APIService from "../APIService";
import APIRoutes from "../APIRoutes";
import Request from "../../models/request/RequestModel";

const route = APIRoutes.getRequestUrl();

const RequestService = {
    getRequest: async (id: number) =>
        APIService.get<Request>(route + id),

    addRequest: async (request: Request) =>
        APIService.post<Request>(route,request),

    updateRequest: async (request:Request) =>
        APIService.put<Request>(route + "update-request/", request),

    delete: async (id: number) =>
        APIService.delete(route + id)
};

export default RequestService;
