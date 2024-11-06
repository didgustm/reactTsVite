import { useState, useEffect } from 'react';
import axios from 'axios';
import { Codebox, Wrapper, CodeBlock } from '@comp/template';
import useStateCode from './useState.txt';
import useEffectCode from './useEffect.txt';
import styles from './basic.module.css';

function Hooks() {
    const [count, setCount] = useState<number>(0);
    const [codeText, setCodeText] = useState<string>('');
    const [codeText2, setCodeText2] = useState<string>('');

    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleDecrease = () => {
        count > 0 && setCount(count - 1);
    };

    useEffect(() => {
        axios(useStateCode).then((res) => {
            setCodeText(res.data);
        });
        axios(useEffectCode).then((res) => {
            setCodeText2(res.data);
        });
    }, []);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <>
            <Wrapper title="useState">
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
                        <button onClick={handleIncrease}>+1</button>
                        <button onClick={handleDecrease}>-1</button>
                    </div>
                </Codebox>
            </Wrapper>
            <Wrapper title="useEffect">
                <Codebox>
                    <div>
                        · 컴포넌트 랜더링 시 effect 안 작업 실행
                        <br />· 컴포넌트 마운트, 언마운트, 업데이트 시 실행됨
                    </div>
                    <CodeBlock codeText={codeText2} />
                </Codebox>
            </Wrapper>
        </>
    );
}

export default Hooks;
