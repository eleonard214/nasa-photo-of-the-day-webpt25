import React from "react";
import GetImage from './GetImg';
import styled from 'styled-components';

const StyledSect = styled.section`
font-size:25px;
color: cyan;
`;
function IsItLoad({data,loading,updateDate}){
    if (loading)
    return  <h2> Still loading...Please wait ! </h2>    
    else
    {
    return(
    <StyledSect className="load" >  
    <p>{data.title} <span>(Date: {data.date})</span></p>
   
    
    
    {/* <span>---</span> */}
    <GetImage 
      imageUrl={data.url}
      mediaType={data.media_type}
    />
    <h5>Copyright : {data.copyright}</h5>
    </StyledSect>
    )
    }
}

export default IsItLoad;