//@flow

import { createContext } from "react";

import type { UserInteraction } from "../shared/types";

const UserInteractionContext = createContext<UserInteraction>({
  notify: () => {
    throw Error("Context is not avaiable");
  }
});

export default UserInteractionContext;
