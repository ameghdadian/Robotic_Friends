import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_FAILED,
	REQUEST_ROBOTS_SUCCESS 
} from './constants';

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state = initialStateSearch , action = {}) =>{
	switch(action.type){
			case CHANGE_SEARCH_FIELD:
				return Object.assign({} , state , {searchField: action.payload})
			default:
				return state;
		}
}

const initialStateRequest = {
	isPending: true,
	robots: [],
	error: ''
}

export const requestRobots = (state = initialStateRequest ,action ={}) => {
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({} , state, {isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({} , state,{isPending: false, robots: action.payload})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({} , state,{isPending: false, error: action.payload})
		default:
			return state;
	}
}





