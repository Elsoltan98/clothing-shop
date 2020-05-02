import React from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "./../../components/collection-preview/collection-preview.component";

import "./shop.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return collections.map(({ id, ...otherPreviewProps }) => (
      <CollectionPreview key={id} {...otherPreviewProps} />
    ));
  }
}

export default ShopPage;
