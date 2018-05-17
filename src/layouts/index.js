import React from "react";
import Link from "gatsby-link";

export default ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 650, padding: '0 1rem' }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: 'none' }}>
      <h1>Brad Porter</h1>
    </Link>
    {children()}
  </div>
);
