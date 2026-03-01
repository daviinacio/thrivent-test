import { SideMenu } from "@/components/ui/SideMenu";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import * as S from "./styles";
import { Button } from "@/components/ui/Button";
import { menus, MenuType } from "@/lib/constants";
import { theme } from "@/styles/theme";

export interface AppSideMenuProps extends PropsWithChildren {}

export function AppSideMenu({ children }: AppSideMenuProps) {
  const [open, setOpen] = useState(false);

  const [currentMenuOption, setCurrentMenuOption] = useState<MenuType>(
    menus[0],
  );

  const [isItemOpen, setIsItemOpen] = useState(false);

  useEffect(() => setIsItemOpen(false), [open]);

  return (
    <SideMenu.Root open={open} onOpenChange={setOpen}>
      <S.SideMenuTrigger asChild>
        <Button variant="ghost">{children}</Button>
      </S.SideMenuTrigger>
      <SideMenu.Content>
        <S.Header>
          <SideMenu.Title>
            {isItemOpen ? (
              <Button onClick={() => setIsItemOpen(false)} variant="ghost">
                <ChevronLeftIcon />
                Back
              </Button>
            ) : (
              "Menu"
            )}
          </SideMenu.Title>
          <SideMenu.Close asChild>
            <Button variant="ghost" accentColor={theme.colors.destructive}>
              <XIcon />
            </Button>
          </SideMenu.Close>
        </S.Header>

        <S.Content $itemOpen={isItemOpen}>
          <S.ListWrapper>
            {menus.map((it, i) => (
              <S.ListItem
                key={i}
                onClick={() => {
                  setCurrentMenuOption(it);
                  setIsItemOpen(true);
                }}
              >
                <div>
                  <h3>{it.label}</h3>
                  <span>{it.description}</span>
                </div>
                <ChevronRightIcon />
              </S.ListItem>
            ))}
          </S.ListWrapper>
          <S.ListItemContent>
            <h2>{currentMenuOption.label}</h2>
            <span>{currentMenuOption.description}</span>
            {currentMenuOption.link && (
              <div>
                <a href={currentMenuOption.link.url || "#"}>
                  {currentMenuOption.link.label} <ArrowRightIcon />
                </a>
              </div>
            )}

            {currentMenuOption.sections.map((it, i) => (
              <div key={i}>
                <b>{it.title}</b>

                {it.items.map((it, i) => (
                  <a href={it.url || "#"} key={i}>
                    {it.label}
                  </a>
                ))}
              </div>
            ))}
          </S.ListItemContent>
        </S.Content>

        <S.Footer>
          <Button variant="outline">Log in</Button>
          <Button>Find financial advisors</Button>
        </S.Footer>
      </SideMenu.Content>
    </SideMenu.Root>
  );
}
