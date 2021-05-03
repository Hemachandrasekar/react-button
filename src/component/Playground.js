import React from "react";
import Button from "./Button";

const Playground = () => {
  return (
    <div>
      <h2 className="h2-heading">Button</h2>
      <Button />

      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
      <Button disabled />
      <Button startIcon="local_grocery_store" />
      <Button endIcon="local_grocery_store" />
      <Button size="sm" />
      <Button size="md" />
      <Button size="lg" />
      <Button color="default" />
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
    </div>
  );
};
export default Playground;
