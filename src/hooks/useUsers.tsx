import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    const pageRef = useRef(1);
    const totalPagesRef = useRef(1);

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

            totalPagesRef.current = response.data.total_pages;

            if (response.data.data.length > 0) {
                setUsers(response.data.data);
            } else {
                alert('There is no more users');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const prevPage = () => {
        if (pageRef.current > 1) {
            pageRef.current--;
            fetchUsers();
            return;
        }

        alert('There is no previous page');
    };

    const nextPage = () => {
        if (pageRef.current < totalPagesRef.current) {
            pageRef.current++;
            fetchUsers();
            return;
        }

        alert('There is no next page');
    };

    return {
        users,
        fetchUsers,
        prevPage,
        nextPage,
    };
};

export default useUsers;
