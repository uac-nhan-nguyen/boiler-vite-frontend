import {Menu} from "components/Menu";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "common/routes";
import {MENUS} from "common/menus";

export interface IRoute {
  path: string;
  title: string;
  exact: boolean;
  component: () => JSX.Element,
}

const RouteComponentWithTitle = (props: {
  title: string;
  element: () => JSX.Element;
}) => {
  useEffect(() => {
    document.title = (props.title ? `${props.title} - ` : '') + 'Sound Rig';
  }, [props.title]);
  const Component = props.element;
  return <Component/>;
};

const createRoute = (route: IRoute, index: number) => {
  const Component = () =>
    RouteComponentWithTitle({title: route.title, element: route.component});
  return (
    <Route key={`route-${index}`} path={route.path} element={<Component/>}/>
  );
};


function App() {

  return (
    <div className="App">
      <Menu menus={MENUS}/>
      <Routes>{ROUTES.map(createRoute)}</Routes>
    </div>
  )
}

export default App
