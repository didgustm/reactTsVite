import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode | string;
    gap?: number;
}
function Row({ children, gap = 10 }: Props) {
    return (
        <div className="row inner" style={{ gap: gap }}>
            {children}
        </div>
    );
}

export default Row;
