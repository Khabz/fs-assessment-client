import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse } from "../../interfaces/People/response.interface";
import { RootState } from "../../store/store";

const initialState : IResponse = {
    count: 0,
    next: "",
    previous: "",
    results: []
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeople: (state = initialState, action: PayloadAction<IResponse>) => {
            return {
                ...action.payload,
                state
            }
        }
    }
})

export const { setPeople } = peopleSlice.actions;

export const getPeopleSelector = (state: RootState) => state.people;

export default peopleSlice.reducer
