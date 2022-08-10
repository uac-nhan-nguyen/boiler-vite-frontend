import * as axios from 'axios'
import {IConfig} from "interface/portal";

const x = new axios.Axios({
  baseURL: import.meta.env.VITE_API
});

export abstract class PortalAPI {
  static async getConfig () {
    const r = await x.get('/portal');
    console.log(r.data)
    return JSON.parse(r.data) as IConfig;
  }
}