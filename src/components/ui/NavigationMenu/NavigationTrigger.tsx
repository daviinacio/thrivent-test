import { PropsWithChildren } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as S from "./styles";

export interface NavigationMenuTriggerProps
  extends NavigationMenuPrimitive.NavigationMenuTriggerProps {}

export function NavigationMenuTrigger({
  children,
  ...props
}: NavigationMenuTriggerProps) {
  return <S.Trigger {...props}>{children}</S.Trigger>;
}
