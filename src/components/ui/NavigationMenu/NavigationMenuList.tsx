import { PropsWithChildren } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as S from "./styles";

export interface NavigationMenuListProps
  extends NavigationMenuPrimitive.NavigationMenuListProps {}

export function NavigationMenuList({
  children,
  ...props
}: NavigationMenuListProps) {
  return <S.List {...props}>{children}</S.List>;
}
