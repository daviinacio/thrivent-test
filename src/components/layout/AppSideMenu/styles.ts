import { SideMenu } from "@/components/ui/SideMenu";
import { media } from "@/styles/media";
import styled from "styled-components";

export const SideMenuTrigger = styled(SideMenu.Trigger)`
  ${media.desktop} {
    display: none;
  }
`;

export const Header = styled.div`
  z-index: 10;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.375rem 1rem;
`;

export interface ContentProps {
  $itemOpen: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  padding-top: 40px;
  padding-bottom: 100px;

  transition: transform 0.2s;

  transform: translateX(${({ $itemOpen }) => ($itemOpen ? -100 : 0)}%);

  & > div {
    padding: 1rem;
    min-width: calc(100dvw);
  }
`;

export const ListWrapper = styled.div`
  /* flex: 1; */
`;

export const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ListItemContent = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: #32769f;
    }

    b {
      text-transform: uppercase;
    }
  }
`;

export const Footer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: grid;
  padding: 1rem;
  gap: 0.5rem;
  button {
    width: 100%;
  }
`;
