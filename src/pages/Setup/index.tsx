import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Codebox, Wrapper, CodeBlock } from '@comp/template';
import sourceCode1 from './tsconfig.txt';
import sourceCode2 from './eslintrc.txt';
import sourceCode3 from './prettierrc.txt';
import sourceCode4 from './prettierrc.txt';

function Setup() {
    const [codeText, setCodeText] = useState<string>('');
    const [codeText2, setCodeText2] = useState<string>('');
    const [codeText3, setCodeText3] = useState<string>('');
    const [codeText4, setCodeText4] = useState<string>('');
    useEffect(() => {
        Axios(sourceCode1).then((res) => {
            setCodeText(res.data);
        });
        Axios(sourceCode2).then((res) => {
            setCodeText2(res.data);
        });
        Axios(sourceCode3).then((res) => {
            setCodeText3(res.data);
        });
        Axios(sourceCode4).then((res) => {
            setCodeText4(res.data);
        });
    }, []);

    return (
        <Wrapper title="React + Typescript + Vite 환경 세팅하기">
            <Codebox title="start">
                <div className="codeArea">
                    pnpm create vite . <br />
                    pnpm install <br />
                    pnpm dev (로컬에서 실행)
                </div>
            </Codebox>
            <Codebox title="Paths 설정">
                <ul>
                    <li>
                        <div className="codeArea">pnpm i -D vite-tsconfig-paths @types/node</div>
                    </li>
                    <li style={{ marginTop: '0.5rem' }}>
                        · vite config 파일에 vite-tsconfig-paths 추가
                    </li>
                    <li>
                        · tsconfig.json 파일에 컴파일옵션 설정 (baseUrl, Paths)
                        <CodeBlock codeText={codeText} />
                    </li>
                </ul>
            </Codebox>
            <Codebox title="ESLint Prettier 설정">
                <ul>
                    <li>
                        <div className="codeArea">
                            pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier
                        </div>
                    </li>
                    <li style={{ marginTop: '0.5rem' }}>
                        · eslintrc.cjs 설정
                        <CodeBlock codeText={codeText2} />
                    </li>
                    <li>
                        · prettierrc 설정 <CodeBlock codeText={codeText3} />
                    </li>
                    <li>
                        · vscode settings.json 설정 <CodeBlock codeText={codeText4} />
                    </li>
                </ul>
            </Codebox>
        </Wrapper>
    );
}

export default Setup;
