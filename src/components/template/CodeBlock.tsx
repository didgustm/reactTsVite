import { useState, ReactNode } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.min.css';
import { cn } from '@util/cn';
import show from '@img/show.svg';
import hide from '@img/hide.svg';

export type CodeProps = {
    isExpand?: boolean;
    className?: string;
    codeText?: string;
};

function CodeBlock({ codeText, isExpand = false, className }: CodeProps) {
    const [codeExpand, setCodeExpand] = useState<boolean>(isExpand);
    const handleClick = () => {
        if (!codeExpand) {
            setCodeExpand(true);
        } else {
            setCodeExpand(false);
        }
    };

    const highlightCode = hljs.highlight(codeText, { language: 'jsx' }).value;

    return (
        <div className={cn('codeblock', className)}>
            <a href="#!" onClick={handleClick}>
                {codeExpand ? (
                    <>
                        <img src={hide} /> hide source
                    </>
                ) : (
                    <>
                        <img src={show} /> view source
                    </>
                )}
            </a>
            {codeExpand && (
                <div className="codeArea">
                    <pre>
                        <code dangerouslySetInnerHTML={{ __html: highlightCode }}></code>
                    </pre>
                </div>
            )}
        </div>
    );
}

export default CodeBlock;
