import { PropsWithChildren } from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import * as S from "./styles";

export interface SideMenuCloseProps extends SheetPrimitive.DialogCloseProps {}

export function SideMenuClose({ children, ...props }: SideMenuCloseProps) {
  return <S.Close {...props}>{children}</S.Close>;
}
