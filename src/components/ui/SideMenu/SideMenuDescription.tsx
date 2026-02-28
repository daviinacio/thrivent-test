import { PropsWithChildren } from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import * as S from "./styles";

export interface SideMenuDescriptionProps
  extends SheetPrimitive.DialogDescriptionProps {}

export function SideMenuDescription({
  children,
  ...props
}: SideMenuDescriptionProps) {
  return <S.Description {...props}>{children}</S.Description>;
}
