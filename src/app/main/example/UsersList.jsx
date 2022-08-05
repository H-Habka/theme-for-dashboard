import UserItem from "./UserItem";

const UsersList = ({ users }) => {
    if(!users)return <p>... loding</p>
    return (
        <ul className="flex flex-col p-10 gap-5 ">
            {users.map((user) => (
                <UserItem user={user} key={user.id}/>
            ))}
        </ul>
    );
};

export default UsersList;
