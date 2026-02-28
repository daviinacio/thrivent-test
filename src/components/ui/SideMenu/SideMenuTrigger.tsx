import { PropsWithChildren } from "react";
import { Dialog as SheetPrimitive } from "radix-ui";
import * as S from "./styles";

export interface SideMenuTriggerProps
  extends SheetPrimitive.DialogTriggerProps {}

export function SideMenuTrigger({ children, ...props }: SideMenuTriggerProps) {
  return <S.Trigger {...props}>{children}</S.Trigger>;
}
