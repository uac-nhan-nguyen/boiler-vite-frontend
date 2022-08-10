import * as axios from 'axios'
import {IConfig, IPage} from "interface/portal";

const x = new axios.Axios({
  baseURL: import.meta.env.VITE_API
});

export abstract class PortalAPI {
  static async getConfig () {
    const r = await x.get('/portal');
    return JSON.parse(r.data) as IConfig;
  }

  static async getPage(key: string) {
    const r = await x.get(`/portal/${key}`);
    return JSON.parse(r.data) as IPage;
  }
}