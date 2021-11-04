import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 720)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: #d5cafa;
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(200)};
    min-height: ${px2vw(200)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h6`
  color: #333;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  margin-bottom: ${px2vw(20)};
  color: #666;
  font-size: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const QuantityContainer = styled.div`
  diplay: flex;
  text-align: center;
  padding: 0;
`;

