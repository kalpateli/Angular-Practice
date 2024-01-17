import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { LeavesService } from "../../services/leaves.service";
import {
    LOAD_LEAVES,
    // LOAD_LEAVES_PAGINATED,
    addLeaves,
    addLeavesSuccess,
    deleteLeaves,
    deleteLeavesSuccess,
    loadLeavesFail,
    // loadLeavesPaginatedSuccess,
    loadLeavesSuccess,
    updatedLeaves,
    updatedLeavesSuccess
} from "./leaves.action";
import { LeavesModel } from "./leaves.model";

@Injectable()

export class LeavesEffects {

    constructor(
        private action$: Actions,
        private _leaves: LeavesService
    ) {



    }

    // _leavePaginated = createEffect(() =>
    //     this.action$.pipe(
    //         ofType(LOAD_LEAVES_PAGINATED),
    //         exhaustMap((action: { page: number; pageSize: number }) => {
    //             return this._leaves.getLeavesDetailsPaginated(action.page, action.pageSize).pipe(
    //                 tap(data => console.log('API Response:', data)),
    //                 map((data) => {
    //                     console.log(Array.isArray(data))
    //                     if (Array.isArray(data)) {
    //                         console.log("array");

    //                         return loadLeavesPaginatedSuccess({ leaveslist: data })
    //                     } else if (typeof data === 'object' && data !== null) {
    //                         console.log("object");

    //                         return loadLeavesPaginatedSuccess({ leaveslist: Object.keys(data).map(key => data[key]) })
    //                     } else {

    //                         throw new Error('Invalid data type')
    //                     }
    //                     // return loadLeavesPaginatedSuccess({ leaveslist: data })
    //                 }),
    //                 catchError((_error) => of(loadLeavesFail({ Errortext: _error.message })))
    //             );
    //         })
    //     )
    // );



    _leave = createEffect(() =>
        this.action$.pipe(
            ofType(LOAD_LEAVES),
            exhaustMap((action) => {
                return this._leaves.getLeavesDetails().pipe(
                    map((data) => {
                        return loadLeavesSuccess({ leaveslist: data });
                    }),
                    catchError((_error) => of(loadLeavesFail({ Errortext: _error.message })))
                )
            })
        ))

    _addLeaves = createEffect(() =>
        this.action$.pipe(
            ofType(addLeaves),
            exhaustMap((action) => {
                return this._leaves.createLeavesDetails(action.leavesData).pipe(
                    map((data: LeavesModel) => {
                        return addLeavesSuccess({ leavesData: data as LeavesModel });
                    }),
                    catchError((_error) => of(loadLeavesFail({ Errortext: _error.message })))
                )
            })
        ))

    _updateLeaves = createEffect(() =>
        this.action$.pipe(
            ofType(updatedLeaves),
            exhaustMap((action) => {
                return this._leaves.updatedLeavesDetails(action.leavesData).pipe(
                    map((data) => {
                        return updatedLeavesSuccess({ leavesData: data as LeavesModel });

                    }),
                    catchError((_error) => of(loadLeavesFail({ Errortext: _error.message })))
                )
            })
        ))

    _deleteLeaves = createEffect(() =>
        this.action$.pipe(
            ofType(deleteLeaves),
            exhaustMap((action) => {
                return this._leaves.delete_LeavesDetails(action.id).pipe(
                    map((data) => {
                        return deleteLeavesSuccess({ id: action.id });

                    }),
                    catchError((_error) => of(loadLeavesFail({ Errortext: _error.message })))
                )
            })
        ))


}