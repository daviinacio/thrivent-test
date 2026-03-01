import { media } from "@/styles/media";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spaces.container};
  margin: auto;
  gap: 12px 32px;
  padding: 0.375rem 1rem;

  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;

  ${media.tablet} {
    padding: 1rem 1.5rem;
  }

  ${media.desktop} {
    padding: 1.75rem 1.5rem;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  ${media.wide} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
  }
`;

export const LogoContainer = styled.div`
  text-align: center;

  svg {
    width: 104px;
    height: auto;
  }

  ${media.desktop} {
    text-align: left;
    grid-column: 1 / -1;
  }

  ${media.wide} {
    grid-column: 1;
  }
`;

export const LeftPanel = styled.div`
  ${media.desktop} {
    display: none;
  }
`;

export const RightPanel = styled.div`
  display: none;
  ${media.desktop} {
    display: flex;
    gap: 1rem;
  }
`;
