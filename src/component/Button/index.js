import React from "react";
import "./button.css";

const Button = (props) => {
  const getClassName = () => {
    return `button ${props.variant === "outline" ? "button-outline" : ""} ${
      props.variant === "text" ? "button-text" : ""
    } ${props.disableShadow ? "button-disable-shadow" : ""}
      ${props.disabled ? "button-disabled" : ""}
      ${props.size === "sm" ? "button-sm" : ""}

      ${props.size === "md" ? "button-md" : ""}
      ${props.size === "lg" ? "button-lg" : ""}
      ${props.color === "default" ? "button-default" : ""}
      ${props.color === "primary" ? "button-primary" : ""}
      ${props.color === "secondary" ? "button-secondary" : ""}
      ${props.color === "danger" ? "button-danger" : ""}
      ${props.startIcon  ? "button-primary button-icon" : ""}
      ${props.endIcon  ? "button-primary button-icon" : ""}
      `;
  };
  console.log("props", props);
  return (
    <>
      {/* <LocalGroceryStoreIcon /> */}
      <button type="button" className={getClassName()}>
        {props.startIcon === "local_grocery_store" && <span class="material-icons md-14">add_shopping_cart</span>}
        <span>Default</span>
        {props.endIcon === "local_grocery_store" && <span class="material-icons md-14">add_shopping_cart</span>}
      </button>
    </>
  );
};
export default Button;
