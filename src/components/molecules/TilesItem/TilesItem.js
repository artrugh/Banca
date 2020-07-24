import React, { Component } from "react";
import Image from "../../atoms/Image/Image";

class TilesItem extends Component {
  render() {
    const { icon, title, description, delay, alt } = this.props;
    return (
      <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image src={icon} alt={alt} width={64} height={64} />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">{title}</h4>
            <p className="m-0 text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TilesItem;
