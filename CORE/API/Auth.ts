import Axios from "CORE/util/Axios";
import { AxiosResponse } from "axios";
import Endpoints from "CORE/constants/Endpoints";
async function SignIn() {
  const res = await Axios.post<string, AxiosResponse<unknown>>(
    Endpoints.AutoLogin
  );
  return res.data;
}

export default {
  SignIn,
};
