import { PropsWithChildren } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as S from "./styles";
import { ChevronDownIcon } from "lucide-react";

export interface NavigationMenuTriggerProps
  extends NavigationMenuPrimitive.NavigationMenuTriggerProps {}

export function NavigationMenuTrigger({
  children,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <S.Trigger {...props}>
      {children} <ChevronDownIcon />
    </S.Trigger>
  );
}
