import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { media } from "@/styles/media";
import styled from "styled-components";

export const Container = styled(NavigationMenu.Root)`
  display: none;

  ${media.desktop} {
    display: initial;
  }
`;

export const LeftPanel = styled.div`
  white-space: nowrap;
  padding: 2.5rem 3rem 2rem;

  & > a {
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 500;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      filter: brightness(1.2);
    }

    svg {
      width: 12px;
    }
  }
`;

export const LeftPanelGrid = styled.div`
  display: flex;
  gap: 32px;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    color: #32769f;
  }

  b {
    text-transform: uppercase;
  }
`;

export const RightPanel = styled.div`
  padding: 2.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  gap: 32px;
  width: max-content;
  max-width: 20rem;

  b {
    font-size: 18px;
  }
`;
