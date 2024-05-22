import axios from "axios"

import env from "../../../environments";
import addAuthInterceptors from "../../auth/authInterceptors";

const instance = axios.create({
    baseURL: env.ResourceServer.Endpoint + "products/",
});
addAuthInterceptors(instance);
export default instance