import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LinkWrap = styled.div`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`

export const StyledLink = styled(NavLink)`
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
`