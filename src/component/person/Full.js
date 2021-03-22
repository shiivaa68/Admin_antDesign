import React, { useEffect }  from 'react'
import {Row,Col} from 'antd'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {person} from '../../redux/actions/person'
const Full = ()=>{

const {id} =useParams()
const dispatch = useDispatch()

const item =useSelector(state => {
    return state.person
})

console.log(item,'item')


useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(response => dispatch(person(response.data)))
},[id])
    return(
        <>
        <Row>
            <Col span={4}>نام:</Col>
            <Col span={20}>{item.name}</Col>
        </Row>
        <Row>
            <Col span={4}>نام کاربری:</Col>
            <Col span={20}>
                {item.username}
            </Col>
        </Row>
        <Row>
            <Col span={4}>ایمیل:</Col>
            <Col span={20}>{item.email}</Col>
        </Row>
        <Row>
           <Link to='/person'>بازگشت به لیست</Link>
        </Row>
        </>
    )
}

export default Full;