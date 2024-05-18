import React from "react"
import { useParams } from "react-router-dom";

const Room = ()=>{

    const {roomid} = useParams();
    return(
        <div>
            This is room {roomid}
        </div>
    )
}

export default Room;