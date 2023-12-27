import { createAction, props } from "@ngrx/store"

export const decrement = createAction("decrement")
export const increment  = createAction("increment")
export const reset  = createAction("reset")
export const customIncrement  = createAction("customIncrement",props<{value : number ,  action : string}>())
export const rename  = createAction("rename",props<{page : string}>())


