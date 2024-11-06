import { ReactNode } from 'react';

function Wrapper({ children, title, ...props }: WrapperProps) {
    return (
        <div {...props}>
            <h2 className="title">{title && title}</h2>
            {children && children}
        </div>
    );
}

export type WrapperProps = {
    children?: ReactNode | string;
    title?: string;
};

export default Wrapper;
