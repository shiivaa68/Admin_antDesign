import React from 'react';
import {Link} from 'react-router-dom'
import { Result, Button } from 'antd';

const NotFound = () => {
    return(
        <>
    <Result
    status="404"
    title="404"
    subTitle="متاسفانه صفحه در دسترس نیست"
    extra={ <Link to='/'> <Button type="primary"> برگشت به خانه</Button></Link>}
  />,
        </>
    )
}

export default NotFound