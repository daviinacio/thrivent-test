import { HtmlHTMLAttributes } from "react";
import * as S from "./styles";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: S.ButtonVariant;
  accentColor?: string;
}

export function Button({
  children,
  variant = "default",
  accentColor,
  ...props
}: ButtonProps) {
  return (
    <S.Container $variant={variant} $accentColor={accentColor} {...props}>
      {children}
    </S.Container>
  );
}
