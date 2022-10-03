import { useParams } from "react-router-dom";

function Room() {
    const {roomId} = useParams();
    console.log(roomId);
    return (
      <div>
        Room
      </div>
    );
  }
  
  export default Room;
  