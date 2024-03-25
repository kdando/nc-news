//Components
import UserCard from './UserCard'


export default function UserList ({ availableUsers }) {


    return (
        <>
        <ul>
            {availableUsers.map((user) => {
                return <UserCard key={user.username} user={user} />
            })}
        </ul>
        </>
    )

}