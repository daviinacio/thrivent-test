import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/Button";
import * as S from "./styles";
import { AppNavigationMenu } from "../AppNavigationMenu";

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

        {/* <AppNavigationMenu>
          <MenuIcon />
          Menu
        </AppNavigationMenu> */}
        <S.RightPanel>
          <Button variant="outline">Log in</Button>
          <Button>Find financial advisors</Button>
        </S.RightPanel>
      </S.Container>
    </S.Header>
  );
}
