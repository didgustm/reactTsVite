import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Codebox, Wrapper, CodeBlock } from '@comp/template/';
import sourceCode from './router.txt';
import sourceCode2 from './layout.txt';
import sourceCode3 from './menu.txt';

function Router() {
    const [codeText, setCodeText] = useState<string>('');
    const [codeText2, setCodeText2] = useState<string>('');
    const [codeText3, setCodeText3] = useState<string>('');
    useEffect(() => {
        Axios(sourceCode).then((res) => {
            setCodeText(res.data);
        });
        Axios(sourceCode2).then((res) => {
            setCodeText2(res.data);
        });
        Axios(sourceCode3).then((res) => {
            setCodeText3(res.data);
        });
    }, []);
    return (
        <Wrapper title="Router">
            <Codebox title="start">
                <div className="codeArea">pnpm install react-router-dom</div>
            </Codebox>
            <Codebox title="Layout">
                <div style={{ marginTop: 5 }}>
                    · Layout 페이지 content 는 Suspense(fallback 설정), Outlet(= slot) <br />
                    <p className="words">
                        <span className="c-theme">* Suspense</span>: 내용이 로드되기 전까지 보여 질
                        페이지 설정
                    </p>
                    <p className="words">
                        <span className="c-theme">* Outlet</span>: 랜더링 될 페이지 내용들
                    </p>
                </div>
                <CodeBlock codeText={codeText2} />
            </Codebox>
            <Codebox title="Routes">
                <div style={{ marginTop: 5 }}>
                    · lazy, memo, createBrowserRouter를 이용해서 라우트 페이지 생성
                    <p className="words">
                        <span className="c-theme">* lazy</span>: 코드 스플리팅(최적화 / 필요한
                        컴포넌트만 먼저 로드)
                    </p>
                    <p className="words">
                        <span className="c-theme">* memo</span>: 이미 랜더링 한 공통
                        컴포넌트들(레이아웃 등)은 리랜더링 하지 않음
                    </p>
                </div>
                <CodeBlock codeText={codeText} />
            </Codebox>
            <Codebox title="RouteProvider">
                <div style={{ marginTop: 5 }}>
                    · App.tsx 에서 RouteProvider로 받기(router props)
                </div>
            </Codebox>
            <Codebox title="Menu">
                <div style={{ marginTop: 5 }}>· Link, useLocation으로 메뉴 설정</div>
                <CodeBlock codeText={codeText3} />
            </Codebox>
        </Wrapper>
    );
}

export default Router;
