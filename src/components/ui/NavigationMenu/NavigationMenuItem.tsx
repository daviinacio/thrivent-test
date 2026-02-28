import { PropsWithChildren } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as S from "./styles";

export interface NavigationMenuItemProps
  extends NavigationMenuPrimitive.NavigationMenuItemProps {}

export function NavigationMenuItem({
  children,
  ...props
}: NavigationMenuItemProps) {
  return <S.Item {...props}>{children}</S.Item>;
}
