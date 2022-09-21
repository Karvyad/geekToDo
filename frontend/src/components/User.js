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
        <table>
            <th>
                Username
            </th>
            <th>
                User Email
            </th>
            <th>
                First mame
            </th>
            <th>
                Last name
            </th>
            {users.map((userItem) => <UserItem user={userItem} />)}
        </table>
    );
}

export default UsersList;