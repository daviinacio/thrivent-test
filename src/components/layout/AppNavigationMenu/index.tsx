import { Button } from "@/components/ui/Button";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { menus } from "@/lib/constants";
import { ArrowRightIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import * as S from "./styles";

export interface AppNavigationMenuProps extends PropsWithChildren {}

export function AppNavigationMenu({}: AppNavigationMenuProps) {
  return (
    <S.Container>
      <NavigationMenu.List>
        {menus.map((it, i) => (
          <NavigationMenu.Item key={i}>
            <NavigationMenu.Trigger>
              <div>{it.label}</div>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <S.LeftPanel>
                <S.LeftPanelGrid>
                  {it.sections.map((it, i) => (
                    <div key={i}>
                      <b>{it.title}</b>
                      {it.items.map((it, i) => (
                        <a href={it.url || "#"} key={i}>
                          {it.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </S.LeftPanelGrid>
                {it.link && (
                  <a href={it.link.url || "#"}>
                    {it.link.label} <ArrowRightIcon />{" "}
                  </a>
                )}
              </S.LeftPanel>
              <S.RightPanel>
                <b>{it.extra.title}</b>
                <span>{it.extra.description}</span>
                <Button variant="tertiary">{it.extra.action}</Button>
              </S.RightPanel>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </S.Container>
  );
}
