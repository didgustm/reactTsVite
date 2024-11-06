import { Wrapper, Codebox } from '@comp/template';

function ReduxSample() {
    return (
        <Wrapper title="리덕스(Redux) 기본">
            <Codebox title="Install Redux">
                <div className="codeArea">pnpm i redux @reduxjs/toolkit react-redux</div>
            </Codebox>
            <Codebox title="리덕스(Redux)란?">
                <div style={{ marginTop: 5 }}>
                    · 여러 컴포넌트기 공유하는 상태를 관리하기 위한 라이브러리
                    <br />· 리액트로 사용할 때 React Tool kit 설치
                    <br />
                    · 컴포넌트 외부 Store 에서 한번에 상태를 관리함
                    <br />· 상태가 업데이트 되면 Reducer를 통해 전달(Dispatch 메소드)
                </div>
            </Codebox>
            <Codebox title="기본 사용법">
                <div></div>
            </Codebox>
        </Wrapper>
    );
}

export default ReduxSample;
