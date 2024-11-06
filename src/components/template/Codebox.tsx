import { ReactNode } from 'react';

export type Props = {
    title?: string;
    children?: ReactNode | string;
    className?: string;
};

function Codebox({ title, children, className = '' }: Props) {
    return (
        <section className={`sct ${className}`}>
            <h3 className="subject">{title}</h3>
            {children}
        </section>
    );
}

export default Codebox;
