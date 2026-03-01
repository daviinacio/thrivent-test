import { AppHeader } from "@/components/layout/AppHeader";
import * as S from "./styles";

import BannerImg from "@/assets/banner.webp";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <AppHeader />
      <S.Region>
        <S.RegionBackground src={BannerImg} alt="" />
        <S.RegionShadow />

        <S.RegionContent>
          <S.RegionTitle>Big goals start with a financial plan</S.RegionTitle>
          <S.RegionButtonWrapper>
            <Button variant="secondary" size="big">
              Explore our approach
            </Button>
            <Button variant="tertiary" size="big">
              Goal-setting strategies <ArrowRightIcon />
            </Button>
          </S.RegionButtonWrapper>
        </S.RegionContent>
      </S.Region>
      <S.QuoteSection>
        <S.QuiteContent>
          “Money is a tool to help us achieve those goals and dreams we care
          about. It allows us to feel more secure and confident about our
          financial future.”
        </S.QuiteContent>
      </S.QuoteSection>
    </div>
  );
}
