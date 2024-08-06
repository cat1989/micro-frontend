import * as React from 'react'
import { Button, Form, Input, Table, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { users } from '@/services'
import { useNavigate } from 'react-router-dom'

type User = {
    id: number;
    name: string;
}

const Index: React.FC = () => {
    const navigate = useNavigate()
    const click = () => {
        navigate("/about")
    }
    const [name, setName] = React.useState('')
    const [dataSource, setDataSource] = React.useState<User[]>([])
    const columns = [
        {
            title: '编号',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '操作',
            render: () => {
                return (
                    <Button onClick={click} type="link">详情</Button>
                )
            },
        },
    ]
    React.useEffect(() => {
        users.get().then((users: User[]) => {
            setDataSource(users)
        })
    }, [])
    return (
        <section>
            <Form>
                <Form.Item
                    label="名称"
                >
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button
                            type="primary"
                            icon={<SearchOutlined />}
                        >查询</Button>
                        <Button
                            onClick={click}
                        >跳转</Button>
                    </Space>
                </Form.Item>
            </Form>
            <Table
                dataSource={dataSource}
                columns={columns}
            ></Table>
        </section>
    )
}

export default Index
