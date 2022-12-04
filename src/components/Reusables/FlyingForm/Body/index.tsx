import { CSSProperties, FC, ReactElement } from "react";

interface FlyingFormBodyProps {
  children: ReactElement<any, any>;
  style?: CSSProperties;
}

const FlyingFormBody: FC<FlyingFormBodyProps> = ({ children, style }) => {
  return (
    <div className="flying-form__body" style={{ minHeight: 270, ...style }}>
      {children}
    </div>
  );
};

export default FlyingFormBody;
