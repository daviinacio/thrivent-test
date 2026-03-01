import styled from "styled-components";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { media } from "@/styles/media";

export const Root = styled(NavigationMenuPrimitive.Root)`
  position: relative;
`;

export const ViewportPositioner = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  perspective: 2000px;

  /* @media (min-width: 600px) {
    width: var(--radix-navigation-menu-viewport-width);
  } */
`;

export const Viewport = styled(NavigationMenuPrimitive.Viewport)`
  position: relative;
  overflow: hidden;

  /* 1. Define a largura vinda do Radix */
  width: var(--radix-navigation-menu-viewport-width);
  height: var(--radix-navigation-menu-viewport-height);

  /* 2. O PULO DO GATO: Não deixa ultrapassar a tela */
  max-width: calc(100vw - 32px); // 16px de cada lado de margem de segurança

  /* 3. Garante que se o menu for muito largo, ele se ajuste internamente */
  transition:
    width,
    height,
    transform 300ms ease;

  /* Estilos para animação de entrada */
  &[data-state="open"] {
    animation: fadeIn 200ms ease;
  }

  /* @media (min-width: 600px) {
    width: var(--radix-navigation-menu-viewport-width);
  } */
`;

export const Trigger = styled(NavigationMenuPrimitive.Trigger)`
  cursor: pointer;
  border: none;
  position: relative;
  background-color: transparent;
  font-weight: 500;
  line-height: 1.125rem;
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 2px;

  border-bottom: 2px solid transparent;

  svg {
    width: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
  }

  &[data-state="open"] {
    &:after {
      display: block;
    }
  }

  &:after {
    display: none;
    content: "";
    width: 16px;
    height: 16px;
    background: linear-gradient(to bottom right, white 50%, transparent 50%);
    z-index: 15;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    position: absolute;
    transform: rotate(45deg) translateX(-50%);
    top: 40px;
    left: 50%;
  }
`;

export const List = styled(NavigationMenuPrimitive.List)`
  display: flex;
  gap: 16px;
`;

export const Item = styled(NavigationMenuPrimitive.Item)`
  list-style: none;
`;

export const Content = styled(NavigationMenuPrimitive.Content)`
  display: flex;
  overflow: hidden;
  transform: translateY(1rem);
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid #ddd;
  border-radius: 8px;
  z-index: 10;
`;
