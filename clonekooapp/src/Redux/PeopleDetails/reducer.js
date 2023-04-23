import { GET_PEOPLE_DATA,GET_FEED_DATA } from "./actionType";
import { FeedContext } from "../../Context/FeedContext";


const initialState = {
    peopleData:[],
    feedData:[],
    count:0
}



const reducer = (state = initialState , {type , payload}) =>{
    

    switch(type){

        case GET_PEOPLE_DATA:
            return{
                ...state , peopleData:payload
            }
            case GET_FEED_DATA:
                return{
                    ...state , feedData:payload
                }
                case 'incCount':
                return{
                    ...state , count:state.count+1
                }
        default:
            return state;
    }
}

export {reducer};