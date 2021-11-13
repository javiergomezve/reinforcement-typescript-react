import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../../api/reqRes';
import { ReqResList, User } from '../../interfaces/reqRes';

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    const pageRef = useRef(1);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await reqResApi.get<ReqResList>('/users', {
                params: {
                    page: pageRef.current,
                },
            });

            if (response.data.data.length > 0) {
                setUsers(response.data.data);
                pageRef.current++;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const renderItem = ({ id, first_name, last_name, avatar, email }: User) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 50,
                            borderRadius: 100,
                        }}
                    />
                </td>
                <td>{last_name}</td>
                <td>{email}</td>
            </tr>
        );
    };

    return (
        <div>
            <h3>Users</h3>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{users.map(renderItem)}</tbody>
            </table>

            <button className="btn btn-primary" onClick={fetchUsers}>
                Next
            </button>
        </div>
    );
};

export default Users;
