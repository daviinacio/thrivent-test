import { HtmlHTMLAttributes } from "react";
import * as S from "./styles";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: S.ButtonVariant;
  size?: S.ButtonSize;
  accentColor?: string;
}

export function Button({
  children,
  variant = "default",
  size = "default",
  accentColor,
  ...props
}: ButtonProps) {
  return (
    <S.Container
      $variant={variant}
      $size={size}
      $accentColor={accentColor}
      {...props}
    >
      {children}
    </S.Container>
  );
}
