import React from 'react';
import Carousel from 'react-elastic-carousel';

import signInBgImg from '../../assets/bgSlider.png';

import { Slide } from './style';
import './style.css';

const Slider: React.FC = () => (
  <>
    <Carousel isRTL={false} enableAutoPlay showArrows={false}>
      <Slide>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>

      <Slide>
        <img src={signInBgImg} alt="" />

        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>

      <Slide>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>

      <Slide>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>

      <Slide>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>

      <Slide>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>

      <Slide>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>

      <Slide>
        <img src={signInBgImg} alt="" />
        <h2>Marcenas mattis egestas</h2>

        <p>
          Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
          porta.
        </p>
      </Slide>
    </Carousel>
  </>
);

export default Slider;
