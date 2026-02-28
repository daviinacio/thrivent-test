import { PropsWithChildren } from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import * as S from "./styles";

export interface SideMenuTitleProps extends SheetPrimitive.DialogTitleProps {}

export function SideMenuTitle({ children, ...props }: SideMenuTitleProps) {
  return <S.Title {...props}>{children}</S.Title>;
}
