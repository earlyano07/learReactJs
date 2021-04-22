import React from "react";
import Button from "../elements/Button";

export default function Footer(props) {
  return (
    <footer className="spacing-sm">
      <div className="container">
        <Button className="brand-text-icon" href="" type="link">
         <center><h3>copyright@earlyano</h3></center>
        </Button>
      </div>
    </footer>
  );
}