import React from 'react'
import {useParams} from 'react-router-dom'
import CaloryProteinGlucideLipide from '../components/CaloryProteinGlucideLipide';
import { useData } from '../useFetch';
import calory from '../images/calory.png';
import protein from '../images/protein.png'
import apple from '../images/apple.png'
import cheeseburger from '../images/cheeseburger.png'
import styled from 'styled-components';
import AddBarChart from '../components/AddBarChart';
import AddLineChart from '../components/AddLineChart';
import AddRadarChart from '../components/AddRadarChart';
import AddPieChart from '../components/AddPieChart';

const StyleMain = styled.main`
    margin-left:150px;
    margin-top:50px;
`
const StyleHeaderDiv = styled.div`
    margin-left:30px;
`
const StyleAside = styled.aside`
    display:flex;
    flex-direction:column;
    height:600px;
    justify-content:space-between;
    align-items:flex-end;
    margin-right:40px;
`
const StyleNameSpan = styled.span`
    color:#ff0101;
    font-size:49px;
`
const StyleBonjourP = styled.p`
    color:black;
    font-size:48px;
    margin-bottom:0;
`
const StyleChartContainerDiv = styled.div`
   width:750px;
   height:350px;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   gap:50px;
   
`
const StyleDownChartContainerDiv = styled.div`
    display:flex;
    width:750px;
    gap:10px;
    justify-content:space-between;
`
const Dashboard = () => {
    const {id : params}= useParams();
    const  {data : userInformation}  = useData(params);
  return (
    <StyleMain>
        <StyleHeaderDiv>
          <StyleBonjourP>Bonjour, <StyleNameSpan>{userInformation?.userInfos.firstName}</StyleNameSpan></StyleBonjourP>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </StyleHeaderDiv>
        <div style={{display:'flex',gap:'80px'}}>
        <StyleChartContainerDiv>
            <AddBarChart userID={params}/>
            <StyleDownChartContainerDiv>
                <AddLineChart userID={params}/>
                <AddRadarChart userID={params} />
                <AddPieChart props={userInformation}/>
            </StyleDownChartContainerDiv>
        </StyleChartContainerDiv>
        <StyleAside>
            <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.calorieCount} IconSource={calory} title={'Calories'} />
            <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.proteinCount} IconSource={protein} title={'Protoines'} />
            <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.carbohydrateCount} IconSource={apple} title={'Glucides'}/>
            <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.lipidCount} IconSource={cheeseburger} title={'Lipides'}/>
        </StyleAside>
        </div>
    </StyleMain>

  )
}

export default Dashboard