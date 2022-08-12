import {Link} from "react-router-dom";
import {IMenuItem, MENUS} from "common/menus";
import {useMenuKey} from "hooks/useMenuKey";
import classNames from "classnames";

export const Menu = (props: {
  menus: IMenuItem[],
}) => {
  const {selectedMenuKey} = useMenuKey(MENUS)

  console.log(selectedMenuKey);

  return <>
    <div className={'bg-slate-800 text-white flex gap-2 justify-center'}>
      {props.menus.map((i) => {
        const selected = selectedMenuKey === i.key
        return <Link key={i.key} to={i.path}>
          <div className={classNames('cursor-pointer hover:bg-slate-700 m-1 rounded-md px-3 py-2 duration-300', {
            'bg-slate-500': selected
          })}>
            <div className={''}>{i.label}</div>
          </div>
        </Link>
      })}
    </div>
  </>
}