import {
	BEFORE_STATE_ROOM,
	FETCH_ROOMS,
	FETCH_ROOMS_ERROR,
	CREATE_ROOM_SUCCESS,
	UPDATE_ROOM_SUCCESS,
	CREATE_ROOM_ERROR,
	UPDATE_ROOM_ERROR,
	GET_ROOM_SUCCESS,
	GET_ROOM_ERROR,
	DELETE_ROOM_SUCCESS,
	DELETE_ROOM_ERROR,
	FETCH_AUTH_ROOMS,
	FETCH_AUTH_ROOMS_ERROR,
} from './roomTypes';

export const initState = {
	rooms: [],
	authrooms: [],
	room: {},
	roomsError: null,
	isLoading: false,
};

const roomReducer = (state = initState, action) => {
	const { payload, type } = action;
	switch (type) {
		case BEFORE_STATE_ROOM:
			return {
				...state,
				roomsError: null,
				isLoading: true,
			};
		case FETCH_ROOMS:
			return {
				...state,
				rooms: payload,
				isLoading: false,
			};

		case FETCH_ROOMS_ERROR:
			return {
				...state,
				roomsError: payload,
				isLoading: false,
			};

		case FETCH_AUTH_ROOMS:
			return {
				...state,
				authRooms: payload,
				isLoading: false,
			};

		case FETCH_AUTH_ROOMS_ERROR:
			return {
				...state,
				roomsError: payload,
				isLoading: false,
			};

		case GET_ROOM_SUCCESS:
			return {
				...state,
				room: payload,
				roomsError: null,
				isLoading: false,
			};

		case GET_ROOM_ERROR:
			return {
				...state,
				roomsError: payload,
				isLoading: false,
			};

		case CREATE_ROOM_SUCCESS:
			return {
				...state,
				rooms: [payload, ...state.rooms],
				roomsError: null,
				isLoading: false,
			};

		case CREATE_ROOM_ERROR:
			return {
				...state,
				roomsError: payload,
				isLoading: false,
			};

		case UPDATE_ROOM_SUCCESS:
			return {
				...state,
				rooms: state.rooms.map((room) =>
					room.id === payload.id
						? {
								...room,
								title: payload.title,
								content: payload.content,
						  }
						: room
				),
				authRooms: state.authRooms.map((room) =>
					room.id === payload.id
						? {
								...room,
								title: payload.title,
								content: payload.content,
						  }
						: room
				),
				room: payload,
				roomsError: null,
				isLoading: false,
			};

		case UPDATE_ROOM_ERROR:
			return {
				...state,
				roomsError: payload,
				isLoading: false,
			};

		case DELETE_ROOM_SUCCESS:
			return {
				...state,
				rooms: state.rooms.filter(
					(room) => room.id !== payload.deletedID
				),
				authRooms: state.authRooms.filter(
					(room) => room.id !== payload.deletedID
				),
				roomsError: null,
				isLoading: false,
			};

		case DELETE_ROOM_ERROR:
			return {
				...state,
				roomsError: payload,
				isLoading: false,
			};

		default:
			return state;
	}
};

export default roomReducer;
