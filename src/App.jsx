import React, { useState } from "react";

import ButtonGroupOnly from "./ButtonGroupOnly";
import ButtonGroupAddNew from "./ButtonGroupAddNew";

const App = () => {
  return (
    <div>
      <ButtonGroupOnly />
      <ButtonGroupAddNew />
    </div>
  );
};

export default App;
