import React, {useState} from 'react';
import './CopyCode.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCode } from '../actions';


const CopyCode = () => {
  const Code = useSelector(state=>state.code);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const handleCode=()=>{
    //dispatching action creator
    dispatch(fetchCode());
    navigator.clipboard.writeText(Code)
    .then(()=>{
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    })
    .catch(()=>{
      console.error("Failed to copy");
    })
  }
  return (
     <div className="container">
      <h3>My Banker Code</h3>
      <p className='text'>Don't forget to share you banker code and earn your much deserved rewards</p>
      <div className='button-pop'>
      <button onClick={handleCode} className="copy-code-button"> Copy Code
     </button>
     {showPopup && <div className='pop-up'>Code Copied!</div>}
      </div>
   </div>
  )
}

export default CopyCode;


