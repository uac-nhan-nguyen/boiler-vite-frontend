import {IPage} from "../interface/portal";
import {useEffect, useState} from "react";
import {PortalAPI} from "../api/portal";

export const Page = (props: {
  id: string;
}) => {
  const {id} = props;
  const [page, setPage] = useState<IPage | undefined>()

  useEffect(() => {
    if (id != null){
      console.log('Loading page ...')
      const id_ = id;
      setPage(undefined);
      PortalAPI.getPage(id_).then((e) => {
        if (id_ === id) {
          setPage(e);
        }
      })
    }

  }, [id]);

  if (page == null){
    return <>
      <div>Loading {id}..</div>
    </>
  }

  return <>
    <h1>{page.title}</h1>
  </>
}