import axios from 'axios';
import { useState, useEffect } from 'react';
import { Wrapper, Codebox, CodeBlock } from '@comp/template';
import sourceCode from './baseurl.txt';
import sourceCode2 from './getdata.txt';

const baseURL = import.meta.env.VITE_APP_TEST_URI;
export const client = axios.create({ baseURL });

type dataProps = {
    id: number;
    date: number | string;
    activity: string;
};

function ReadData() {
    const [codeText, setCodeText] = useState<string>('');
    const [codeText2, setCodeText2] = useState<string>('');
    const [dataList, setDataList] = useState<dataProps[]>();

    const getData = async () => {
        const response = await client.get('/schedule', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response && response.status === 200) {
            const { data } = response;
            setDataList(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        axios(sourceCode).then((res) => {
            setCodeText(res.data);
        });
        axios(sourceCode2).then((res) => {
            setCodeText2(res.data);
        });
    }, []);

    return (
        <Wrapper title="데이터 조회하기(axios)">
            <Codebox title="Install axios">
                <div className="codeArea">pnpm i axios</div>
            </Codebox>
            <Codebox title="Set baseURL">
                <div>
                    · .env 페이지에 baseURL 설정 ex) VITE_APP_TEST_URI=http://localhost:4000/ <br />
                    · 데이터 조회 페이지에서 불러오고 axios에 추가
                    <CodeBlock codeText={codeText} />
                </div>
            </Codebox>
            <Codebox title="Read data">
                · async, await 혹은 promise 로 불러오기 <br />
                · client.get('/경로', 옵션들(...headers, params)) <br />
                · status 200 일 때 불러오기
                <CodeBlock codeText={codeText2} />
            </Codebox>
            <Codebox title="Sample">
                {dataList?.map((x) => {
                    return (
                        <div key={x.id}>
                            <p>{x.date}일</p>
                            <p>{x.activity}</p>
                        </div>
                    );
                })}
            </Codebox>
        </Wrapper>
    );
}

export default ReadData;
