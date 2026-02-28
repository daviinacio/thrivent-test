import { PropsWithChildren } from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import * as S from "./styles";

export interface SideMenuContentProps
  extends SheetPrimitive.DialogContentProps {}

export function SideMenuContent({ children, ...props }: SideMenuContentProps) {
  return (
    <S.Portal>
      <S.Overlay />
      <S.Content {...props}>{children}</S.Content>
    </S.Portal>
  );
}
