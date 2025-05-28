import React from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";

const Photo = styled.img`
  width: 100px; /* Fixed width of each icon */
  height: 100px; /* Fixed height of each icon */
  object-fit: contain; /* Ensures the image fits inside the container */
  object-position: center; /* Centers the image */
  border-radius: 50%; /* Makes the icon circular */
  margin: 10px;
  // box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12); /* Optional shadow */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandsSlideShow = () => {
  // Dynamically generate image paths
  const photos = times(155, (i) => `assets/images/brands/${i}.png`);

  return (
    <div className="mt-24">
      <div>
        <Marquee
          key="marquee-2"
          velocity={10}         
          direction="ltr"          
          style={{ height: "100%", overflow: "hidden" }}
        >
          {times(155, (id) => (
            <Photo
              src={photos[id]} // Start from the next set of images
              key={`marquee-example-2-${id}`}
              style={{
                maxWidth: "150px",
                maxHeight: "70px",
                objectFit: "contain",
                // mixBlendMode: "multiply",
              }}
              className="top-brand__item flex-center rounded-8 border border-gray-100 hover-border-gray-200 transition-1 px-8"
            />
          ))}
        </Marquee>
        <Marquee
          key="marquee-2"
          velocity={10}
          direction="rtl"
          style={{ height: "100%", overflow: "hidden" }}
        >
          {times(155, (id) => (
            <Photo
              src={photos[id]} // Start from the next set of images
              key={`marquee-example-2-${id}`}
              style={{
                maxWidth: "150px",
                maxHeight: "70px",
                objectFit: "contain",
                // mixBlendMode: "multiply",
              }}
              className="top-brand__item flex-center rounded-8 border border-gray-100 hover-border-gray-200 transition-1 px-8"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrandsSlideShow;
