import { User } from '../../interfaces/reqRes';
import useUsers from '../../hooks/useUsers';

const Users = () => {
    const { users, prevPage, nextPage } = useUsers();

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
            <button className="btn btn-primary" onClick={prevPage}>
                Previous
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={nextPage}>
                Next
            </button>
        </div>
    );
};

export default Users;
