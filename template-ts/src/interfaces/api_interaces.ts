import { AxiosResponse } from "axios";

export interface Api_Interface {
	v1: (data: object) => Promise<AxiosResponse>;
}

// export interface Login_Response {
// 	data: {
// 		token: string;
// 		user: object;
// 	};
// }
