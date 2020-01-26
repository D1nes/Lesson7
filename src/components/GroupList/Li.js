import React from "react";
import {observer} from "mobx-react";
import {values} from "mobx";
import store from "../../stores/RootStore";
import {Link} from "react-router-dom";

const Li = ( { group } ) => {
    const session = JSON.parse(sessionStorage.getItem(group.id))

    console.log(session)
    return (
        <>
            {
                values(store.groups.list).map(group =>  (
                    <Link key={group.id} to={`/todo?id=${group.id}`}>
                        <li>
                            {group.title}
                        </li>
                    </Link>
                ))
            }
        </>
    )
}

export default observer(Li)
