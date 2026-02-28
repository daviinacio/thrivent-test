import styled from "styled-components";
import { Dialog as SheetPrimitive } from "radix-ui";

export const Root = styled(SheetPrimitive.Root)``;

export const Trigger = styled(SheetPrimitive.Trigger)``;

export const Close = styled(SheetPrimitive.Close)``;

export const Portal = styled(SheetPrimitive.Portal)``;

export const Overlay = styled(SheetPrimitive.Overlay)``;

export const Content = styled(SheetPrimitive.Content)`
  overflow-y: auto;
  background-color: white;
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(SheetPrimitive.Title)``;

export const Description = styled(SheetPrimitive.Description)``;
