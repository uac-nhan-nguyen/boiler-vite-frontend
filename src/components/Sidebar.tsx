import {useConfig} from "../hooks/useConfig";
import {IConfig} from "../interface/portal";

export const Sidebar = (props: {
  config: IConfig,
  onMenuSelected?: (key: string) => void;
}) => {
  const {config} = props;
  return <>
    <div className={'bg-slate-800 text-white'}>
      {config.menus.map((i) => {
        return <div key={i.key}
                    className={'cursor-pointer hover:bg-slate-600'}
                    onClick={() => props?.onMenuSelected?.(i.key)}>
          <div className={''}>{i.label}</div>
        </div>;
      })}
    </div>
  </>
}