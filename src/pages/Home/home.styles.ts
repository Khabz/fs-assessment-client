import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
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
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;


export const Price = styled.h5`
  color: #333;
  span {
    color: blue;
    font-weight: 600;
    font-size: 1.5rem
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

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #333;
  color: #fff;
  text-align: center;
`;

export const Button = styled.button`
  background: #333;
  color: #fff;
  font-size: 18px;
  border: none;
  padding: 10px;
  cursor: pointer
`;

export const Image = styled.img`
  display: flex;
  margin: auto;
  align-item: center;
  align-content: center;
  height: 40px;
  width: 40px
`
