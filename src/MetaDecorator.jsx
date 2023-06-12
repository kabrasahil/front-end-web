import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function MetaDecorators({ title, description, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="canonical"
        href={
          "https://igtsnsut.org" +
          window.location.pathname +
          window.location.search
        }
      />
      <meta
        name="keywords"
        content="igts nsut, igtsnsut, igts, nsut , IGTSNSUT, IGTS, NSUT"
      />
      <meta
        property="og:url"
        content={
          "https://igtsnsut.org" +
          window.location.pathname +
          window.location.search
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="igtsnsut.org" />
      <meta
        property="twitter:url"
        content={
          "https://igtsnsut.org" +
          window.location.pathname +
          window.location.search
        }
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
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
