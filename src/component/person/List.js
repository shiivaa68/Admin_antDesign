import React, { Component } from 'react'
import {connect} from 'react-redux'
import {persons} from '../../redux/actions/person'
import {Table} from 'antd'
import {EyeOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'


const columns = [
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'نام کاربری',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'آدرس',
      dataIndex: 'address',
      key: 'address',
      render: field => `${field.city} ${field.street} ${field.suite}`
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      render: (field, record) => <Link to={`/person/${record.id}/show`}><EyeOutlined /></Link>
    }
  ];

  class List extends Component{
      constructor(){
          super();
          this.state = {
              // data:[],
              loading:true

          }
      
      }
    

      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(data => this.setState({data}))
        .then(data =>this.props.getItems(data))
     
        .catch(err=>console.log(err))
        .finally(()=>this.setState({loading:false}))
      
    }


     render(){
         
         return(
             <Table columns={columns} dataSource={this.props.data} rowKey="id"  loading={this.state.loading} />
         )
     }
  }

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        data:state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getItems:(data) => dispatch(persons(data))
    }
}


  export default connect(mapStateToProps,mapDispatchToProps)(List);


  