import styled from "styled-components";

export const RegForm = styled.form`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;
`

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;

`