import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Codebox, Wrapper, CodeBlock } from '@comp/template';
import useStateCode from './useState.txt';
import useEffectCode from './useEffect.txt';
import useRefCode from './useRef.txt';
import styles from './basic.module.css';

function Hooks() {
    const [count, setCount] = useState<number>(0);
    const [codeText, setCodeText] = useState<string>('');
    const [codeText2, setCodeText2] = useState<string>('');
    const [codeText3, setCodeText3] = useState<string>('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref: any = useRef(null);

    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleDecrease = () => {
        count > 0 && setCount(count - 1);
    };
    const handleChangeColor = () => {
        ref.current.style.color = 'red';
    };

    useEffect(() => {
        axios(useStateCode).then((res) => {
            setCodeText(res.data);
        });
        axios(useEffectCode).then((res) => {
            setCodeText2(res.data);
        });
        axios(useRefCode).then((res) => {
            setCodeText3(res.data);
        });
    }, []);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <>
            <Wrapper title="useState" style={{ marginBottom: 50 }}>
                <Codebox>
                    <div>
                        · 컴포넌트 state(상태) 관리
                        <br />· state, setState
                        <p className="words" style={{ marginTop: 5 }}>
                            <span className="c-theme">* Example</span>
                        </p>
                    </div>
                    <CodeBlock codeText={codeText} />
                </Codebox>
                <Codebox title="Sample">
                    <div className={styles.exState}>
                        <span>{count}</span>
                        <button type="button" className={styles.basicBtn} onClick={handleIncrease}>
                            +1
                        </button>
                        <button type="button" className={styles.basicBtn} onClick={handleDecrease}>
                            -1
                        </button>
                    </div>
                </Codebox>
            </Wrapper>
            <Wrapper title="useEffect" style={{ marginBottom: 50 }}>
                <Codebox>
                    <div>
                        · 컴포넌트 랜더링 시 effect 안 작업 실행
                        <br />· 컴포넌트 마운트, 언마운트, 업데이트 시 실행됨
                    </div>
                    <CodeBlock codeText={codeText2} />
                </Codebox>
            </Wrapper>
            <Wrapper title="useRef" style={{ marginBottom: 50 }}>
                <Codebox>
                    <div>
                        · 특정 DOM 요소에 접근 <br />· ref.current 로 전달
                    </div>
                    <CodeBlock codeText={codeText3} />
                </Codebox>
                <Codebox title="Sample">
                    <p ref={ref}>ref target</p>
                    <button className={styles.basicBtn} type="button" onClick={handleChangeColor}>
                        ref 컬러 변경
                    </button>
                </Codebox>
            </Wrapper>
        </>
    );
}

export default Hooks;
