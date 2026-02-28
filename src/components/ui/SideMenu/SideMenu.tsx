import { PropsWithChildren } from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import * as S from "./styles";

export interface SideMenuRootProps extends SheetPrimitive.DialogProps {}

export function SideMenuRoot({ children, ...props }: SideMenuRootProps) {
  return <S.Root {...props}>{children}</S.Root>;
}
