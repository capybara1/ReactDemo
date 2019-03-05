//@flow

import React, { useState } from "react"; // Required for JSX
import type {
  StatelessFunctionalComponent,
  Element,
  ChildrenArray
} from "react";

import type { UserNotification } from "../shared/types";
import UserInteractionContext from "../context/UserInteractionContext";

type Props = {
  children: ChildrenArray<Element<any>>
};

const UserInteractionPanel: StatelessFunctionalComponent<Props> = ({
  children
}) => {
  const [value, setValue] = useState<?UserNotification>(null);

  const notify = (message, level) => {
    setValue({ message, level });
  };

  const getClassName = level => {
    let result = "alert";
    switch (level) {
      case "info":
        result += " alert-info";
        break;
      case "warn":
        result += " alert-warning";
        break;
      case "error":
        result += " alert-danger";
        break;
      default:
        break;
    }
    return result;
  };

  return (
    <UserInteractionContext.Provider value={{ notify }}>
      {value ? (
        <div>
          <div className="container">
            <div className={getClassName(value.level)} role="alert">
              {value.message}
            </div>
          </div>
          {children}
        </div>
      ) : (
        children
      )}
    </UserInteractionContext.Provider>
  );
};

export default UserInteractionPanel;
