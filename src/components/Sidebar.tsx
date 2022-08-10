import {useConfig} from "../hooks/useConfig";
import {IConfig} from "../interface/portal";

export const Sidebar = (props: {
  config: IConfig,
}) => {
  const {config} = props;
  return <>
    <div className={'bg-red-400'}>
      {config.menus.map((i) => {
        return <div key={i.key}>
          <div className={''}>{i.label}</div>
        </div>;
      })}
    </div>
  </>
}