
import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"
import userReducer from "./users/usersReducer";
import productReducer from "./Products/productsReducer";
import stockReducer from "./Stock/stockReducer";
import cartReducer from "./Cart/cartReducer";
import orderReducer from "./orders/ordersReducer";

const reducer=combineReducers({
user:userReducer,
products:productReducer,
stock:stockReducer,
cartItems:cartReducer,
orders:orderReducer
})

const store=createStore(reducer,
    composeWithDevTools(applyMiddleware(logger,thunk)))


    export default store