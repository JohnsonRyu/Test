import React from "react";

import styled, { css } from "styled-components";

import { IComponentProps } from "../../../constants/types";
import {
  IOuterType,
  IInnerType,
  IContentAlignType,
  outerStyling,
  innerStyling,
  contentAlignStyling
} from "../../../constants/styles";
import { THEME } from "../../../constants/colors";

interface IContainerProps extends IComponentProps {
  _outer?: IOuterType;
  _inner?: IInnerType;
  _content_align?: IContentAlignType;

  _width?: string;
  _height?: string;
  _borderBottom?: boolean;
  _header?: boolean;
  _body?: boolean;
  _background_color?: string;
  _font_size?: string;
  _line_height?: string;
  _margin_top?: string;
}

const CustomStyledContainer = ({ className, ...props }: IContainerProps) => (
  <div
    className={className}
  >
    {props.children}
  </div>
);

const StyledContainer = styled(CustomStyledContainer)`
  ${props => props._outer && outerStyling(props._outer)}
  ${props => props._inner && innerStyling(props._inner)}
  ${props => props._content_align && contentAlignStyling(props._content_align)}

  background-color: ${props => props._background_color};
  width: ${props => props._width};
  height: ${props => props._height};
  font-size: ${props => props._font_size};
  line-height: ${props => props._line_height};
  margin-top: ${props => props._margin_top};

  ${props =>
    props._borderBottom === true &&
    css`
      border-bottom: 1px solid ${THEME.basic.containerBorder};
  `};

  ${props =>
    props._header === true &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
      box-sizing: border-box;
  `};

  ${props =>
    props._body === true &&
    css`
      margin-top: 40px;
  `};
`;

export const Container = (props: IContainerProps) => (
  <StyledContainer
    _outer={props._outer}
    _inner={props._inner}
    _content_align={props._content_align}
    _width={props._width}
    _height={props._height}
    _borderBottom={props._borderBottom}
    _header={props._header}
    _body={props._body}
    _background_color={props._background_color}
    _font_size={props._font_size}
    _line_height={props._line_height}
    _margin_top={props._margin_top}
  >
    {props.children}
  </StyledContainer>
);
