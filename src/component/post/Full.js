import React, { useEffect } from 'react'
import {Row,Col} from 'antd'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import {post} from '../../redux/actions/post'

const Full =()=>{

const {id} = useParams();
const dispatch= useDispatch()

const item = useSelector(state=> {
    return state.post
})

console.log(item,'item post full')
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => dispatch(post(response.data)))
},[id])


    return(
        <div>
            <Row>
                <Col span={4}>عنوان :</Col>
                <Col span={20}>{item.name}</Col>
            </Row>
            <Row>
             <Link to="/post">بازگشت به لیست مقالات</Link>
            </Row>
        
        </div>
    )
}

export default Full;