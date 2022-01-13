import React,{ useState,useEffect} from 'react'
import { Helmet } from 'react-helmet'
import axios from "axios"
import Header from '../../includes/Header';
import styled from 'styled-components';
import { useParams } from "react-router";

export default function Place({match}) {
    const {id} =useParams()
    const [place,setPlace]=useState({
        name:"",
        gallery:[],

    })
    useEffect(()=>{
        axios
        .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
        .then((response) => {
        setPlace(response.data.data);
    })
    .catch((error)=>{
        console.log(error);
    });

    },[]);

    return (
        <>
            <Helmet>
                <title>{place.name}</title>     
            </Helmet>
           <Header />
            <MainContainer>
                <Title>{place.name}</Title>
                <Infocontainer>
                    <CategoryName>{place.category_name}</CategoryName>
                    <Locationcontainer>
                        <LocationIcon src={require("../../assets/images/place.svg").default}
                        alt="image" />
                        <Locationname>{place.location}</Locationname>
                    </Locationcontainer>
                </Infocontainer>
                <GalleryContainer>
                    <GalleryImageitem>
                        <Galleryimage src={place.image} ></Galleryimage>

                    </GalleryImageitem>
                    {
                        place.gallery.map((image)=>(
                            <GalleryImageitem>
                                <Galleryimage src={image.image}></Galleryimage>
                            </GalleryImageitem>
                            
                        ))
                    }
                </GalleryContainer>
                <Subheading>Placesdetails</Subheading>
                <Discription>{place.description}</Discription>

            </MainContainer>
        </>
    )
}
const MainContainer=styled.div`
    width:70%;
    margin:70px auto 0;`
const Title=styled.h1`
    font-size:48px;
    margin-bottom:15px;`
const Infocontainer=styled.div`
    display: flex;
    margin-bottom: 15px;`
const CategoryName=styled.span`
    padding:5px 10px;
    border-radius:20px;
    display:inline-block;
    border:1px solid #9c9c9c;
    color:#9c9c9c;
    margin-right:15px;`
const Locationcontainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;`
const LocationIcon=styled.img`
    margin-right:5px;`
const Locationname=styled.span`
    color:#9c9c9c;
    font-weight:bold;
    font-size:14px;`
const GalleryContainer=styled.ul`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:20px;
    overflow:hidden;
    margin-bottom:35px;`;
const GalleryImageitem=styled.li`
    &:first-child{
        grid-column-end:span 2;
        grid-row-end:span 2;
    }`
const Galleryimage=styled.img`
    width:100%;
    display:block;`
const Subheading=styled.h3`
    font-size:28px;
    margin-bottom:20px;`
const Discription=styled.p`
    font-size:16px;
    line-height:1.6em;`