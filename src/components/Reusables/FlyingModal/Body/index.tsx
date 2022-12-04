import { FC, ReactElement } from "react";

interface FlyingFormBodyProps {
  children: ReactElement<any, any>;
}

const FlyingFormBody: FC<FlyingFormBodyProps> = ({ children }) => {
  return (
    <div className="flying-form__body" style={{ minHeight: 270 }}>
      {children}
    </div>
  );
};

export default FlyingFormBody;
