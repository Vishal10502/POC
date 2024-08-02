export const Fetch_Success = "Fetch_Success";
export const Fetch_Failure = "Fetch_Failure";
//creating initial state
const initialState = {
    code:"",
    error:null,
};

const Reducer =(state=initialState,action)=>{
    switch(action.type){
        case Fetch_Success:
            return{
                ...state,
                code:action.payload,
                error:null,
            };
        case Fetch_Failure:
            return{
                ...state,
                code:null,
                error:action.payload
            }
        default:
            return state;
    }
};

export default Reducer;