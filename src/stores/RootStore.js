import { types as t } from 'mobx-state-tree'
import { TodoListModel } from "./Todo/Todo";
import { GroupListModel } from "./Groups/Groups";
import {autorun} from "mobx";

const RootStore = t
    .model("RootStore",{
        todos: t.optional(TodoListModel, {}),
        groups: t.optional(GroupListModel, {})
    })



const rootStore = RootStore.create({})



export default rootStore

