import React, { Component } from "react";

import ImageLoader from "components/image-loader";
import DeviceFrame from "components/device-frame";

export const data = {
  order: 3,
  title: "Archive",
  color: "pink",
  description: "Older projects.",
  media: [
    {
      type: "image",
      src: "/images/archive/archive-header.png",
      aspectRatio: 0.5043
    }
  ],
  styles: {
    background: "linear-gradient(80deg, rgb(45, 104, 201), rgb(65, 64, 98))",
    backgroundPosition: "100%"
  }
};

export default class SideProjects extends Component {
  render() {
    const { title, styles } = data;

    return (
      <div className="portfolio">
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item portfolio-media-item--flush-bottom"
              style={styles}
            >
              <ImageLoader
                img="/images/archive/archive-header.png"
                aspectRatio={706 / 1400}
              />
            </div>
          </div>
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row center">
            <div className="col-xs-8">
              <p className="load-in">
                {"Older projects. From the olden times."}
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-4 portfolio-media-item"
              style={{ background: "#a0c2de" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/side-projects/milestones-mobile.png"
                  placeholder="/images/side-projects/milestones-mobile-small.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-8 portfolio-media-item"
              style={{ background: "#b4bde9" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/side-projects/milestones@2x.png"
                  placeholder="/images/side-projects/milestones-small.png"
                  aspectRatio={1342 / 2560}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f9f9f9" }}
            >
              <DeviceFrame type="phone--light">
                <ImageLoader
                  img="/images/side-projects/spender-splash.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#f1f1f4" }}
            >
              <DeviceFrame type="phone">
                <ImageLoader
                  img="/images/side-projects/spender-overview.png"
                  aspectRatio={1334 / 750}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#222" }}
            >
              <DeviceFrame className="load-in" styles={{ maxWidth: 720 }}>
                <video className="video-player" autoPlay loop playsInline>
                  <source src="/videos/krisandrazi.mp4" type="video/mp4" />
                </video>
              </DeviceFrame>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
