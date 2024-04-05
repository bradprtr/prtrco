import React from "react";
import { Link } from "gatsby"

const FourOhFour = () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>404</h1>
    <p>Nothing here. :/</p>
    <Link to="/">Head home?</Link>
  </div>
)
export default FourOhFour
