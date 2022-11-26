import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`
export const ModalWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 200px;
    max-width: 400px;
    background-color: #fff;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 10px #0000000d;

`