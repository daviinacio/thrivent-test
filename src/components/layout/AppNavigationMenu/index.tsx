import { PropsWithChildren } from "react";
import * as S from "./styles";
import styled from "styled-components";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "lucide-react";

export interface AppNavigationMenuProps extends PropsWithChildren {}

export function AppNavigationMenu({}: AppNavigationMenuProps) {
  return (
    <S.Container>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <div>Financial Advice</div>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <LeftPanel>
                <LeftPanelGrid>
                  <div>
                    <b>Advice Services</b>
                    <a href="#">Free Money Coaching</a>
                    <a href="#">Dedicated Planning Services</a>
                    <a href="#">Managed Accounts Program</a>
                    <a href="#">Trust Services</a>
                  </div>
                  <div>
                    <b>Financial Goals</b>
                    <a href="#">Starting Out Financially</a>
                    <a href="#">Balancing Work & Family</a>
                    <a href="#">Nearing Retirement</a>
                    <a href="#">Living in Retirement</a>
                  </div>
                </LeftPanelGrid>
                <a href="#">
                  Working with a financial advisor <ArrowRightIcon />{" "}
                </a>
              </LeftPanel>
              <RightPanel>
                <b>Find a Financial Advisor</b>
                <span>
                  Get started on your journey to financial confidence today.
                </span>
                <Button variant="tertiary">Start your search</Button>
              </RightPanel>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <LeftPanel>
                <LeftPanelGrid>
                  <div>
                    <b>Banking</b>
                    <a href="#">Thrivent Bank</a>
                    <a href="#">Church Loans</a>
                  </div>
                  <div>
                    <b>Investments</b>
                    <a href="#">Annuities</a>
                    <a href="#">Mutual Funds</a>
                    <a href="#">ETFs</a>
                  </div>
                  <div>
                    <b>Insurance</b>
                    <a href="#">Life Insurance</a>
                    <a href="#">Disability Income Insurance</a>
                    <a href="#">Long-Term Care Strategy</a>
                  </div>
                </LeftPanelGrid>
                <a href="#">
                  Products & services <ArrowRightIcon />{" "}
                </a>
              </LeftPanel>
              <RightPanel>
                <b>Discover Thrivent ETFs</b>
                <span>
                  Actively managed ETFs designed to help you reach your
                  financial goals.
                </span>
                <Button variant="tertiary">Learn about Thrivent ETFs</Button>
              </RightPanel>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Why Thrivent</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <LeftPanel>
                <LeftPanelGrid>
                  <div>
                    <b>Company</b>
                    <a href="#">About Us</a>
                    <a href="#">Our History</a>
                    <a href="#">Our Leadership</a>
                    <a href="#">Our Financials</a>
                  </div>
                  <div>
                    <b>Values</b>
                    <a href="#">Our Values</a>
                    <a href="#">Client Stories</a>
                  </div>
                </LeftPanelGrid>
                <a href="#">
                  Why Thrivent <ArrowRightIcon />
                </a>
              </LeftPanel>
              <RightPanel>
                <b>How We Give Back</b>
                <span>
                  Our unique combination of financial services and generosity
                  programs helps you make a difference with your money.
                </span>
                <Button variant="tertiary">Learn about our generosity</Button>
              </RightPanel>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Generosity</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <LeftPanel>
                <LeftPanelGrid>
                  <div>
                    <b>Giving Back</b>
                    <a href="#">Generosity Programs</a>
                    <a href="#">Thrivent Charitable</a>
                  </div>
                  <div>
                    <b>Membership</b>
                    <a href="#">Member Benefits</a>
                  </div>
                </LeftPanelGrid>
                <a href="#">
                  Generosity <ArrowRightIcon />
                </a>
              </LeftPanel>
              <RightPanel>
                <b>Client Story</b>
                <span>
                  Doc&apos;s passion for giving back grew with Thrivent,
                  allowing him to impact young people in his community.
                </span>
                <Button variant="tertiary">Read Doc&apos;s story</Button>
              </RightPanel>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Resources</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <LeftPanel>
                <LeftPanelGrid>
                  <div>
                    <b>Learn</b>
                    <a href="#">Insights & Guidance</a>
                    <a href="#">Financial Education Events</a>
                    <a href="#">Market & Economic Update</a>
                    <a href="#">Tools & Calculators</a>
                    <a href="#">Thrivent Magazine</a>
                  </div>
                  <div>
                    <b>Get help</b>
                    <a href="#">Client Resources</a>
                    <a href="#">Claims</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                  </div>
                </LeftPanelGrid>
              </LeftPanel>
              <RightPanel>
                <b>Looking for a Form?</b>
                <span>
                  Download important forms or access online applications below.
                </span>
                <Button variant="tertiary">Search forms</Button>
              </RightPanel>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </S.Container>
  );
}

export const LeftPanel = styled.div`
  white-space: nowrap;
  padding: 2.5rem 3rem 2rem;

  & > a {
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 500;
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      filter: brightness(1.2);
    }

    svg {
      width: 12px;
    }
  }
`;

const LeftPanelGrid = styled.div`
  display: flex;
  gap: 32px;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    color: #32769f;
  }

  b {
    text-transform: uppercase;
  }
`;

const RightPanel = styled.div`
  padding: 2.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  gap: 32px;
  width: max-content;
  max-width: 20rem;

  b {
    font-size: 18px;
  }
`;
