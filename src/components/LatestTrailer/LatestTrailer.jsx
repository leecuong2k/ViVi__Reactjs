import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { LatestTrailerContainer } from "./LatestTrailerElements";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const LatestTrailer = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { latestTrailerStore } = useSelector(
    (state) => state.latestTrailerReducer
  );

  const settings = {
    responsive: {
      0: {
        items: 1,
      },

      600: {
        item: 2,
      },

      768: {
        items: 2,
      },

      1000: {
        items: 2,
      },
    },
  };

  return (
    <>
      <LatestTrailerContainer className="ptb-100">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
        <div className="grid wide">
          <div className="row row--custom">
            <div className="col l-6">
              <div className="latest__trailer__content">
                <Fade left>
                  <span>Latest Trailer</span>
                </Fade>
                <Fade bottom>
                  <h2>Upcoming Movies By Our Production</h2>
                </Fade>
                <Fade bottom>
                  <p>
                    Video production work with producing video content. It is
                    the analogical of film making, but the images are digitally
                    recorded instead of film stock. There are three levels of
                    video production: production, pre-production and
                    post-production.
                  </p>
                </Fade>
              </div>
            </div>
            <div className="col l-6">
              <OwlCarousel
                className="owl-theme"
                loop
                autoplayHoverPause
                autoplay
                smartSpeed={2000}
                responsiveClass={true}
                responsive={settings.responsive}
                margin={30}
                dots
              >
                {latestTrailerStore?.map((item, index) => {
                  return (
                    <Zoom key={index}>
                      <div className="latest__trailer__item">
                        <img src={item.url} alt={item.url} />
                        <div className="caption">
                          <div className="d__table ">
                            <div className="d__table__cell">
                              <button onClick={() => setOpen(true)}>
                                <i className="fas fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Zoom>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </LatestTrailerContainer>
    </>
  );
};

export default LatestTrailer;
