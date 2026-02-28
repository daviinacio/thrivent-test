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

interface ContainerProps {
  $variant: ButtonVariant;
  $accentColor?: string;
}

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 8px 12px;
  background-color: transparent;
  font-weight: bold;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    width: 18px;
  }

  ${({ $variant }) => variantStyles[$variant]}
`;
