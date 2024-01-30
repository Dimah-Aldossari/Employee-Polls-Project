import { configureStore } from '@reduxjs/toolkit';
import authSlice from './actions/Creat_Users'
import questionsReducer from './actions/questionsSlice'; // استبدل بالمسار الصحيح
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import usersReducer from './actions/usersSlice'
const persistConfig = {
    key: 'root',
    storage, // استخدم localStorage
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
    reducer: {
        authSlice: persistedAuthReducer,
        questions: questionsReducer,
        users: usersReducer,
    }
});
export const persistor = persistStore(store);

export default store;
