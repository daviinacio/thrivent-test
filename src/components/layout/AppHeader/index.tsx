import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/Button";
import * as S from "./styles";
import { AppNavigationMenu } from "../AppNavigationMenu";
import { AppSideMenu } from "../AppSideMenu";
import { MenuIcon } from "lucide-react";

export function AppHeader() {
  return (
    <S.Header>
      <S.Container>
        <S.LeftPanel>
          <Button variant="outline">Log in</Button>
        </S.LeftPanel>

        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <AppNavigationMenu />

        <AppSideMenu>
          <MenuIcon />
          Menu
        </AppSideMenu>

        <S.RightPanel>
          <Button variant="outline">Log in</Button>
          <Button>Find financial advisors</Button>
        </S.RightPanel>
      </S.Container>
    </S.Header>
  );
}
