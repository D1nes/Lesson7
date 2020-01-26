import { types as t } from 'mobx-state-tree'
import uuid from 'uuid/v4'

export const TodoModel = t
    .model("TodoModel",{
        id: t.identifier,
        title: t.string,
        isCompleted: t.optional(t.boolean, false),
        isFavorite: t.optional(t.boolean, false)
    })
    .actions((store) => ({
        toggleCompleted() {
            store.isCompleted = !store.isCompleted
            console.log('ok')
        },
        toggleFavorite() {
            store.isFavorite = !store.isFavorite
        }
    }))

export const TodoListModel = t
    .model("TodoListModel",{
        list: t.optional(t.array(TodoModel), []),

    })
    .views((store) => ({
        get favoriteList() {
            return store.list.filter(item => item.isFavorite)
        }
    }))
    .actions((store) => ({
        add(title) {
            const todo = {
                id: uuid(),
                title
            }
            console.log(todo)
            store.list.unshift(todo)
        }
    }))

