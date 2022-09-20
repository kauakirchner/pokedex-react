import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
        font-size: 0;
        width: 0;
    }
    to {
        opacity: 1;
        font-size: 12px;
        width: 200px;
    }
`
export { fadeIn }