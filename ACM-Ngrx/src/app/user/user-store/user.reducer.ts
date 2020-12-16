import { User } from './../user';
import * as AppState from '../../state/app.state';
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface State extends AppState.State{
    users: UserState
}

export interface UserState{
    maskUserName: boolean,
    currentUser: User
}

const initialState: UserState ={
    maskUserName: true,
    currentUser: null
}

export const UserReducer = createReducer<UserState>(
    initialState,
    on(UserActions.maskUserName, (state: UserState)=>{
        return{
            ...state,
            maskUserName: !state.maskUserName
        }
    })
)