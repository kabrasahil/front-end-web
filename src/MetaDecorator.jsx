import React from "react";
import PropTypes  from "prop-types";
import { Helmet } from "react-helmet";

function MetaDecorators({title, description, url, image}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content="igts nsut, igtsnsut, igts, nsut , IGTSNSUT, IGTS, NSUT"
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta property="og:type" content="website"  />
      <meta property="og:title" content={title}  />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:domain"
        content="igtsnsut.org"
        
      />
      <meta
        property="twitter:url"
        content={url}
        
      />
      <meta name="twitter:title" content={title}  />
      <meta
        name="twitter:description"
        content={description}
        
      />
      <meta
        name="twitter:image"
        content={image}
        
      />
    </Helmet>
  );
}

MetaDecorators.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default MetaDecorators;