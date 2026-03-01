import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/media";

export const Region = styled.section`
  height: 35rem;
  position: relative;

  ${media.tablet} {
    height: 31.5rem;
  }

  ${media.desktop} {
    height: 80vh;
    max-height: 90rem;
  }
`;

export const RegionBackground = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 75%;
  z-index: 0;
`;

export const RegionShadow = styled.div`
  position: absolute;
  inset: 0px;
  background: linear-gradient(0deg, rgb(0, 0, 0) 7%, rgba(0, 0, 0, 0) 74%);
  opacity: 0.9;
  z-index: 0;
  width: 100%;
`;

export const RegionContent = styled.div`
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  max-width: 78rem;
  margin: auto;
`;

export const RegionTitle = styled.h2`
  color: white;

  line-height: 2.75rem;
  font-size: 2.5rem;

  ${media.tablet} {
    max-width: 50%;
    line-height: 4rem;
    font-size: 4rem;
  }
`;

export const RegionButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;

  flex-direction: column;

  button {
    width: 100%;
  }

  ${media.tablet} {
    flex-direction: row;

    button {
      width: fit-content;
    }
  }
`;

export const QuoteSection = styled.section`
  background-color: #d7e5e7;
  padding-block: 2rem;
`;

export const QuiteContent = styled.div`
  padding-block: 2rem;
  padding-inline-start: 2.5rem;
`;
