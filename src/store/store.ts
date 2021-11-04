import { configureStore } from '@reduxjs/toolkit';
import people from '../pages/People/people.slice';

const store = configureStore({
    reducer: {
        people,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;