import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
        </tr>
    )
}

const UsersList = ({users}) => {
    return (
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">
                        Username
                    </th>
                    <th scope="col">
                        User Email
                    </th>
                    <th scope="col">
                        First mame
                    </th>
                    <th scope="col">
                        Last name
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((userItem) => <UserItem user={userItem} />)}
            </tbody>
        </table>
    );
}

export default UsersList;