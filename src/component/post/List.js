import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { posts } from '../../redux/actions/post'
import { getItems} from '../../redux/actions/post'
const columns = [
    {
        title: 'عنوان',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'عملیات',
        dataIndex: 'actions',
        key: 'actions',
        render: (field, record) => <Link to={`/post/${record.id}/show`}><EyeOutlined /></Link>
    }
];

class List extends Component {


    constructor() {
        super()
        this.state = {
            // posts: [],
            loading: true
        }
    }

    componentDidMount() {
        this.props.getItems()
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => this.props.getItem(response.data))
            .finally(() => this.setState({ loading: false }))

    }

    render() {
        return (
            <Table columns={columns} dataSource={this.props.data} rowKey="ID" loading={this.state.loading} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems: data => dispatch(getItems(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);