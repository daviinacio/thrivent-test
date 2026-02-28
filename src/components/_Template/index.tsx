import { PropsWithChildren } from "react";
import * as S from "./styles";

export interface TemplateProps extends PropsWithChildren {}

export function Template({}: TemplateProps) {
  return <S.Container></S.Container>;
}
