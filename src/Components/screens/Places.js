
import React,{ useState,useEffect } from 'react'
import Header from '../../includes/Header'
import {Helmet} from "react-helmet";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from "axios"
export default function Places() {
    const [places,setPlaces]= useState([]);
    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/places/")
            .then((response) => {
            setPlaces(response.data.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    const renderPlaces =() =>{
        return places.map((place) =>(         
            <Placecard>
                <PlaceCardLink to={`/place/${place.id}`} >
                    <PlaceImage src={place.image} alt= "Image"></PlaceImage>
                    <PlacebottomContainer>
                        <PlaceTitle>{place.name}</PlaceTitle>
                        <Location>
                            <LocationIcon src={require("../../assets/images/place.svg").default} alt="image" />
                        <LocationName>{place.location}</LocationName>
                        </Location>
                    </PlacebottomContainer>
                </PlaceCardLink>
            </Placecard>
        ))
    } 
    return (
        <>
            <Helmet>
                <title>Places | Travel Guide</title>
            </Helmet>
            <Header />
            <TopContainer>
                <Heading>WElcome Albin royson</Heading>
                <Paragraph>Explore the world around you</Paragraph>
            </TopContainer>
            <Placescontainer>
                {renderPlaces()}
            </Placescontainer>           
        </>
    )
};
const TopContainer =styled.div`
    width:90%;
    margin:100px auto 0;`
const Heading =styled.h1`
    font-size:36px;
    margin-bottom:20px;`
const Paragraph =styled.p`
    font-size:22px;
    color:#dfdfe2;`
const Placescontainer =styled.ul`
    display:flex;
    flex-wrap:wrap;
    width:90%;
    margin:50px auto 0;`
const Placecard =styled.li`
    width:23.5%;
    margin-right:2%;
    margin-bottom:25px;
    &:nth-child(4n){
        margin-right: 0;
    }`
const PlaceImage =styled.img`
    width:100%;
    display:block;
    border-top-left-radius:10px;
    border-top-right-radius:10px;`
const PlaceCardLink =styled(Link)`
    display:block;
    appearance:none;`
const PlacebottomContainer =styled.div`
    padding:10px 15px;`
const PlaceTitle =styled.h3`
    margin-bottom:10px;
    font-size:20px;`
const Location =styled.div`
    display: flex;`
const LocationIcon  =styled.img`
    margin-right:10px;`
const LocationName =styled.span`
    font-size:18px;
    color:#000;`


