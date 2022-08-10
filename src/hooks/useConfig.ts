import {useEffect, useState} from "react";
import {PortalAPI} from "../api/portal";
import {IConfig} from "../interface/portal";
import {Simulate} from "react-dom/test-utils";

let cache : IConfig | undefined;
let loading = false;

export const useConfig = () => {
  const [config, setConfig] = useState<IConfig | undefined>(cache);

  useEffect(() => {
    if (config != undefined) return;
    PortalAPI.getConfig().then((e) => {
      setConfig(e);
      cache = e;
    });
  }, [])

  return [config]
}