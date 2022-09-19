import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        transform: rotate(0deg);
        opacity: 0;
        font-size: 0;
        width: 0;
    }
    to {
        transform: rotate(360deg);
        opacity: 1;
        font-size: 12px;
        width: 200px;
    }
`
export { fadeIn }