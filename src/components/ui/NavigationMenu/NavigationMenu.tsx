import { PropsWithChildren } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as S from "./styles";

export interface NavigationMenuRootProps
  extends NavigationMenuPrimitive.NavigationMenuProps {}

export function NavigationMenuRoot({
  children,
  ...props
}: NavigationMenuRootProps) {
  return (
    <S.Root {...props}>
      {children}
      {/* <S.ViewportPositioner>
        <S.Viewport />
      </S.ViewportPositioner> */}
    </S.Root>
  );
}
