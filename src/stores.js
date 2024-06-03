import {configureStore} from '@reduxjs/toolkit'
import mulReducer from './mulSlice'
import addReducer from './addSlice'
import subReducer from './subSlice'
import divReducer from './divSlice'

export default configureStore({
    reducer:{
        mul:mulReducer,
        add:addReducer,
        sub:subReducer,
        div:divReducer
    },
})