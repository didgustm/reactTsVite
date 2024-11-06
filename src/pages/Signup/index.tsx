import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Wrapper, Codebox, CodeBlock } from '@comp/template';
import styles from './Style.module.css';
import sourceCode from './formik.txt';
import sourceCode2 from './input.txt';

type SignProps = {
    uid: string;
    umail: string;
    pass: string;
    passCheck: string;
    gender: string;
};

function Signup() {
    const [codeText, setCodeText] = useState<string>('');
    const [codeText2, setCodeText2] = useState<string>('');
    useEffect(() => {
        axios(sourceCode).then((res) => {
            setCodeText(res.data);
        });
        axios(sourceCode2).then((res) => {
            setCodeText2(res.data);
        });
    }, []);

    const validate = (values: SignProps) => {
        const errors = {};

        if (!values.uid) {
            errors.uid = '아이디를 입력해주세요.';
        }

        if (!values.umail) {
            errors.umail = '이메일을 입력해주세요,';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.umail)) {
            errors.umail = '잘못된 형식입니다.';
        }

        if (!values.pass) {
            errors.pass = '비밀번호를 입력해주세요,';
        }

        if (!values.passCheck) {
            errors.passCheck = '비밀번호를 확인해주세요.';
        } else if (values.pass !== values.passCheck) {
            errors.passCheck = '비밀번호가 다릅니다.';
        }

        if (!values.gender) {
            errors.gender = '성별을 선택해주세요.';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            uid: '',
            umail: '',
            pass: '',
            passCheck: '',
            gender: '',
        },
        validate: validate,
        validateOnChange: false,
        onSubmit: (values: SignProps) => {
            console.log(values);
            alert('가입 완료!');
            resetData();
        },
    });

    const setAllData = () => {
        formik.setValues({
            uid: 'bw03306',
            umail: 'bw03306@gmail.com',
            pass: 'qwer1234',
            passCheck: 'qwer1234',
            gender: 'M',
        });
    };

    const resetData = () => {
        formik.resetForm({
            values: {
                uid: '',
                umail: '',
                pass: '',
                passCheck: '',
                gender: '',
            },
        });
    };

    return (
        <Wrapper title="데이터 등록하기(axios, formik)">
            <Codebox title="Install formik">
                <div className="codeArea">pnpm i formik</div>
            </Codebox>
            <Codebox title="useFormik()">
                <div style={{ marginTop: 5 }}>
                    <p className="words">
                        <span className="c-theme">* initialValues</span>: 초기값 세팅
                    </p>
                    <p className="words">
                        <span className="c-theme">* validate</span>: 에러 메세지 설정
                    </p>
                    <p className="words">
                        <span className="c-theme">* onSubmit</span>: 등록 이벤트
                    </p>
                </div>
                <CodeBlock codeText={codeText} />
            </Codebox>
            <Codebox title="Input 설정">
                <div style={{ marginTop: 5 }}>
                    · formik.handler... onChange 세팅 <br />· formik.values... value 값 세팅(name
                    값과 같은 이름으로) <br />· formik.errors... 으로 error 시 text 설정
                </div>
                <CodeBlock codeText={codeText2} />
            </Codebox>
            <Codebox title="Sample">
                <div className={styles.form}>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <div className={styles.inputs}>
                            <label htmlFor="uid" className={styles.label}>
                                아이디
                            </label>
                            <input
                                type="text"
                                name="uid"
                                id="uid"
                                onChange={formik.handleChange}
                                value={formik.values.uid}
                            />
                            {formik.errors.uid && (
                                <p className={styles.errorMsg}>{formik.errors.uid}</p>
                            )}
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="umail" className={styles.label}>
                                이메일
                            </label>
                            <input
                                type="email"
                                name="umail"
                                id="umail"
                                onChange={formik.handleChange}
                                value={formik.values.umail}
                            />
                            {formik.errors.umail && (
                                <p className={styles.errorMsg}>{formik.errors.umail}</p>
                            )}
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="pass" className={styles.label}>
                                비밀번호
                            </label>
                            <input
                                type="password"
                                name="pass"
                                id="pass"
                                onChange={formik.handleChange}
                                value={formik.values.pass}
                            />
                            {formik.errors.pass && (
                                <p className={styles.errorMsg}>{formik.errors.pass}</p>
                            )}
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="passCheck" className={styles.label}>
                                비밀번호 확인
                            </label>
                            <input
                                type="password"
                                name="passCheck"
                                id="passCheck"
                                onChange={formik.handleChange}
                                value={formik.values.passCheck}
                            />
                            {formik.errors.passCheck && (
                                <p className={styles.errorMsg}>{formik.errors.passCheck}</p>
                            )}
                        </div>
                        <div>
                            <p className={styles.label}>성별</p>
                            <div className={styles.radios}>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="W"
                                        onChange={formik.handleChange}
                                        checked={formik.values.gender === 'W'}
                                    />
                                    <span className={styles.checkbox}></span>
                                    <span>여자</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="M"
                                        onChange={formik.handleChange}
                                        checked={formik.values.gender === 'M'}
                                    />
                                    <span className={styles.checkbox}></span>
                                    <span>남자</span>
                                </label>
                            </div>
                            {formik.errors.gender && (
                                <p className={styles.errorMsg}>{formik.errors.gender}</p>
                            )}
                        </div>
                        <div className={styles.btns}>
                            <button type="button" onClick={resetData}>
                                리셋
                            </button>
                            <button type="button" onClick={setAllData}>
                                데이터 채우기
                            </button>
                            <button type="submit">확인</button>
                        </div>
                    </form>
                </div>
            </Codebox>
        </Wrapper>
    );
}

export default Signup;
