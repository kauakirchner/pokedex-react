import styled from "styled-components";
import { fadeIn } from "./animations";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    min-width: 200px;
    width: 200px;
    height: 200px;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.45);
    margin: 10px;
    transition: all 0.6s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation: fade-in-card-animation;
    animation-duration: 2s;
    border-radius: 8px;
    background-color: #111;
    animation: ${fadeIn};
    animation-duration: 2s;

    &:hover{
        transform: scale(1.040);
        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);
    }
`

const CardText = styled.p`
    text-decoration: none;
    color: #fff;
    list-style-type: none;
    border-bottom: 3px solid #271831;
`
const MoreInfosCard = styled.div`
    min-width: 200px;
    width: 200px;
    height: 200px;
    max-width: 100%;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.45);
    margin: 10px;
    transition: all 0.6s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation: fade-in-card-animation;
    animation-duration: 2s;
    border-radius: 8px;
    background-color: #111;

    &:hover{
        transform: scale(1.040);
        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.45);
    }
`

const Button = styled.button`
    font-size: 14px;
    text-shadow: 0px 0px 5px rgb(0, 0, 0, .35);
    padding: 10px 20px;
    border-radius: 10px;
    border-color: #287CD0;
    color: #fff;
    background-color: transparent;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0px 0px 5px rgb(0 0 0 / 35%);
    transition: 0.3s ease-in-out;

    &&:hover {
        transform: scale(1.025);
        border: 2.25px solid #287CD0;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        box-shadow: 0px 0px 10px rgb(0, 0, 0, .5);
        border-radius: 15px;
        background-color: #287CD0;
    }
`
export { Card,Container,CardText, MoreInfosCard, Button }
