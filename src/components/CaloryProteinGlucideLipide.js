import React from 'react'
import styled from 'styled-components'

const StyleGrandDiv = styled.div`
    width:258px;
    height:124px;
    border-radious:5px;
    background-color:#FBFBFB;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const StyleIconDiv = styled.div`
    width:60px;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    // opacity: 0.07;
    border-radius: 6px;
    background: #FFf;
    // background: rgba(74, 184, 255, 0.1);
    img{
        width:32px;
        height:32px;
    }
`
const StyleCaloryDiv = styled.div`
    width:80px;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:baseline;
    flex-direction:column;
    gap:10px;
`
const StyleCaloriP = styled.p`
        font-size:20px;
        font-weight:700;
        margin:0;
`
const StyleTitleP = styled.p`
        font-size:14px;
        font-weight:500;
        color:#74798C;
        margin:0;
`
const CaloryProteinGlucideLipide = ({CalorieSource, IconSource, title}) => {
    // console.log('icon', IconSource)
  return (
   <StyleGrandDiv>
        <StyleIconDiv>
            <img src={IconSource}  alt='icon' />
        </StyleIconDiv>
        <StyleCaloryDiv>
            <StyleCaloriP>{CalorieSource}</StyleCaloriP>
            <StyleTitleP>{title}</StyleTitleP>
        </StyleCaloryDiv>
   </StyleGrandDiv>
  )
}

export default CaloryProteinGlucideLipide