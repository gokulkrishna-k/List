import React from 'react';

import {
  Container,
  ContentContainer,
  Title,
  Info,
  Button,
  Link,
  Text,
  ButtonContainer,
  Image,
} from './landing.styles';
export default function Landing({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Landing.ContentContainer = function LandingContentContainer({
  children,
  ...restProps
}) {
  return <ContentContainer {...restProps}>{children}</ContentContainer>;
};
Landing.Title = function LandingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Landing.Info = function LandingInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Landing.Link = function LandingLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Landing.Text = function LandingText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Landing.ButtonContainer = function LandingButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};
Landing.Button = function LandingButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Landing.Image = function LandingImage({ ...restProps }) {
  return <Image {...restProps} />;
};
