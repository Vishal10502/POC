import axios from 'axios';
import { Fetch_Success, Fetch_Failure } from './Reducer/Reducer';
//create action 

//action for success in fetching
const fetchSuccess=(code)=>({
    type:Fetch_Success,
    payload:code,
  });

//action for failure in fetching
  const fetchFailure=(error)=>({
    type:Fetch_Failure,
    payload:error,
  });


  //action creator
export const fetchCode = () => {
    return (dispatch) => {
      axios.get('https://dummyjson.com/quotes/1')
        .then(response => {
          const author = response.data.author;
          //dispatching action
          dispatch(fetchSuccess(author));
        })
        .catch(error => {
          dispatch(fetchFailure(error))
          console.error('Failed to fetch code: ', error);
        });
    };
  };