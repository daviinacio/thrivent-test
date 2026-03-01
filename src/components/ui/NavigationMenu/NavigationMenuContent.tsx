import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as S from "./styles";

export interface NavigationMenuContentProps
  extends NavigationMenuPrimitive.NavigationMenuContentProps {}

export function NavigationMenuContent({
  children,
  ...props
}: NavigationMenuContentProps) {
  return <S.Content {...props}>{children}</S.Content>;
}
