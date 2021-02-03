import React from "react";
import DateInput from './DateInput';
import GetImage from './GetImg';


function IsItLoad({data,loading,updateDate}){
    if (loading)
    return  <h2> Still loading...Please wait ! </h2>    
    else
    {
    return(
    <div className="load">  
    <p>{data.title} <span>(Date: {data.date})</span></p>
   
    <div>
    <DateInput
    updateDate={updateDate}
    />
    </div>
    
    {/* <span>---</span> */}
    <GetImage 
      imageUrl={data.url}
      mediaType={data.media_type}
    />
    <h5>Copyright : {data.copyright}</h5>
    </div>
    )
    }
}

export default IsItLoad;