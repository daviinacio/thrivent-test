import { media } from "@/styles/media";
import styled, { css, RuleSet } from "styled-components";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost";

export const variantStyles: {
  [key in ButtonVariant]: RuleSet<ContainerProps>;
} = {
  default: css<ContainerProps>`
    color: white;
    background-color: ${({ theme, $accentColor }) =>
      $accentColor || theme.colors.primary};
  `,
  secondary: css<ContainerProps>`
    color: white;
    background-color: ${({ theme, $accentColor }) =>
      $accentColor || theme.colors.secondary};
  `,
  tertiary: css<ContainerProps>`
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme, $accentColor }) =>
      $accentColor || theme.colors.tertiary};
  `,
  ghost: css<ContainerProps>`
    color: ${({ theme, $accentColor }) => $accentColor || theme.colors.text};
    background-color: transparent;
  `,
  outline: css<ContainerProps>`
    color: ${({ theme, $accentColor }) => $accentColor || theme.colors.primary};
    border-color: ${({ theme, $accentColor }) =>
      $accentColor || theme.colors.primary};
  `,
};

export type ButtonSize = "default" | "big";

export const sizeStyles: {
  [key in ButtonSize]: RuleSet<ContainerProps>;
} = {
  default: css<ContainerProps>`
    padding: 0.75rem;
    font-size: 0.75rem;
  `,
  big: css<ContainerProps>`
    padding: 0.75rem;
    font-size: 0.75rem;

    ${media.tablet} {
      padding: 1.5rem;
      font-size: 1rem;
    }
  `,
};

interface ContainerProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $accentColor?: string;
}

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: transparent;
  font-weight: bold;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  line-height: 18px;

  svg {
    width: 18px;
    height: 18px;
  }

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`;
