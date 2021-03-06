import styled from "styled-components";

export const ProductContainer = styled.section`
  .section__title {
    max-width: 750px;
    margin: -6px auto 50px;
    text-align: center;
    position: relative;
    span {
      text-transform: uppercase;
      display: block;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 0;
      font-size: 50px;
      position: relative;
      text-transform: uppercase;
      display: block;
      font-weight: 700;
      color: #272b2b;
    }
  }

  .tab {
    .tabs__nav {
      list-style: none;
      margin-bottom: 0;
      position: relative;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 10px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #676a6a;
      }

      li {
        display: inline-block;
        cursor: pointer;
        margin: 0 50px 20px;
        position: relative;

        &:hover {
          &::before {
            transform: scale(1);
          }
          span {
            color: #333;

            &::before {
              background-color: #000;
            }
          }
        }

        &::before {
          content: "";
          top: -12px;
          left: 0;
          right: 0;
          margin: auto;
          position: absolute;
          width: 25px;
          height: 25px;
          background: #909292;
          border-radius: 50%;
          transition: all 0.5s;
          transform: ${({ isActive }) => (isActive ? "scale(1)" : "scale(0)")};
        }
        span {
          display: inline-block;
          margin-top: 50px;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #7a7a7a;
          transition: all 0.5s;

          &::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            left: 0;
            right: 0;
            margin: auto;
            top: -7px;
            background: #7a7a7a;
            transition: all 0.5s;
          }

          &::after {
            content: "";
            position: absolute;
            top: 15px;
            height: 35px;
            width: 1px;
            left: 0;
            right: 0;
            margin: auto;
            background: #000;
          }
        }
      }

      li.current {
        &::before {
          transform: scale(1);
        }
        span {
          color: #333;

          &::before {
            background-color: #000;
          }
        }
      }
    }

    .tab__content {
      .tab__item {
        display: none;
        .products {
          img {
            display: block;
            width: 100%;
          }
        }

        .products__content {
          span {
            font-size: 15px;
            font-weight: 700;
            text-transform: uppercase;
            display: block;
            margin-bottom: 20px;
          }

          h2 {
            font-size: 4rem;
            margin-bottom: 30px;
            color: #272b2b;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 5rem;
          }

          p {
            font-size: 1.6rem;
            position: relative;
            margin-left: 100px;
            margin-bottom: 40px;
            line-height: 1.8;
            opacity: 0.8;

            &::before {
              content: "";
              position: absolute;
              top: 10px;
              left: -100px;
              width: 70px;
              height: 1px;
              background-color: #272b2b;
            }
          }

          .default__btn {
            margin-left: 100px;
          }
        }
      }

      .tab__item.active {
        display: block;
      }
    }
  }

  @media (min-width: 740px) and (max-width: 1023px) {
    padding-top: 50px;
    padding-bottom: 50px;

    .section__title {
      h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }
    }

    .tab {
      .tab__content {
        .tab__item {
          .products {
            padding: 0 40px;
            margin-bottom: 20px;
          }
          .products__content {
            text-align: center;

            span {
              margin-bottom: 10px;
            }
            h2 {
              font-size: 2rem;
              margin-bottom: 10px;
            }

            p {
              font-size: 1.4rem;
              margin-left: 0px;
              margin-bottom: 20px;
              opacity: 0.6;

              &::before {
                display: none;
              }
            }

            .default__btn {
              margin-left: 0px;
              font-size: 1.3rem;
              padding: 1.2rem 2rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 739px) {
    padding: 30px 0;

    .section__title {
      h2 {
        font-size: 2rem;
      }
    }

    .tab {
      padding: 0 12px;

      .tabs__nav {
        margin: 0 0 10px;
        li {
          &::before {
            content: "";
            top: -12px;
            left: 0;
            right: 0;
            margin: auto;
            position: absolute;
            width: 25px;
            height: 25px;
            background: #909292;
            border-radius: 50%;
            transition: all 0.5s;
            transform: ${({ isActive }) =>
              isActive ? "scale(1)" : "scale(0)"};
          }
          span {
            display: inline-block;
            margin-top: 50px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
            color: #7a7a7a;
            transition: all 0.5s;

            &::before {
              content: "";
              position: absolute;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              left: 0;
              right: 0;
              margin: auto;
              top: -7px;
              background: #7a7a7a;
              transition: all 0.5s;
            }

            &::after {
              content: "";
              position: absolute;
              top: 15px;
              height: 35px;
              width: 1px;
              left: 0;
              right: 0;
              margin: auto;
              background: #000;
            }
          }
        }
      }

      .tab__content {
        text-align: center;

        .tab__item {
          .products {
          }

          .products__content {
            span {
              margin-top: 20px;
            }

            h2 {
              font-size: 1.8rem;
              line-height: 1.4;
              margin-bottom: 20px;
            }

            p {
              font-size: 1.45rem;
              margin-left: 0;
              margin-bottom: 20px;

              &::before {
                display: none;
              }
            }

            .default__btn {
              margin-left: 0;
              font-size: 1.2rem;
              padding: 1.2rem 2rem;
            }
          }
        }
      }
    }
  }
`;
