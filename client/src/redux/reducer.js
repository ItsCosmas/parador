import { combineReducers } from 'redux';
import authReducer from './reducers/auth/authReducer';
// import roomReducer from './reducers/room/roomReducer';
// import bookingReducer from './reducers/booking/bookingReducer';
const reducer = combineReducers({
	Auth: authReducer,
	// Room: roomReducer,
	// Booking: bookingReducer,
});

export default reducer;
