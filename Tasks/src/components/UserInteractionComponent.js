//@flow

import React from "react"; // Required for JSX
import type {
  StatelessFunctionalComponent,
  Element,
  ChildrenArray
} from "react";

type Props = {
  children: ChildrenArray<Element<any>>,
  showNotification: boolean,
  message: string,
  className: string
};

const UserInteractionComponent: StatelessFunctionalComponent<Props> = ({
  children,
  showNotification,
  message,
  className
}) =>
  showNotification ? (
    <div>
      <div className="container">
        <div className={className} role="alert">
          {message}
        </div>
      </div>
      {children}
    </div>
  ) : (
    children
  );

export default UserInteractionComponent;
