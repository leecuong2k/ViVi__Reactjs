import styled from "styled-components";

export const TestimonialContainer = styled.section`
  background-color: #000;
  background-image: url("./image/testimonial-bg.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  overflow: hidden;

  .owl-theme .owl-dots {
    margin-top: 100px !important;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -72px;
      left: 0;
      right: 0;
      margin: auto;
      width: 1px;
      height: 50px;
      background-color: #fff;
    }
  }

  .owl-theme .owl-dots .owl-dot span {
    width: 15px;
    height: 15px;
    display: block;
    background: #414749;
    transition: all 200ms ease;
  }

  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .testimonial__item {
    color: #fff;
    text-align: center;
    max-width: 850px;
    margin: 0px auto 0;
    i {
      font-size: 10rem;
      color: #313939;
      line-height: 1;
      margin-bottom: 25px;
      display: inline-block;
    }

    p {
      font-size: 2.5rem;
      letter-spacing: 1px;
      word-spacing: 3px;
      line-height: 4.5rem;
      font-weight: 300;
      margin-bottom: 25px;
    }

    h3 {
      font-size: 2.5rem;
      word-spacing: 3px;
      line-height: 3rem;
      font-weight: 800;
      text-transform: uppercase;
    }

    span {
      display: block;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 739px) {
    padding: 30px 0;

    .testimonial__item {
      padding: 0 12px;
      i {
        font-size: 5rem;
      }

      p {
        font-size: 1.8rem;
        word-spacing: 0px;
        line-height: 1.6;
      }

      h3 {
        font-size: 2rem;
      }

      span {
        font-size: 1.2rem;
      }
    }
  }
`;
