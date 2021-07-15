import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    width: 3rem;
    margin: 0 auto;

    img {
      width: auto;
      height: 3rem;
      margin: 0 auto;
    }
  `}
`;
