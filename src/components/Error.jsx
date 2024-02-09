
import { Link } from 'react-router-dom'

export default function Error ({ error }) {

    return (
        <>
        <div className='notification is-danger'>
            <Link to='/'><button className='delete'></button></Link>
            <h1>Something went wrong :(</h1>
            { error ? 
            <p><strong>{error.status}</strong> {error.msg}</p>
            : <p>Path does not exist, please check the URL.</p>}
            <p>Close this panel to return Home.</p>
        </div>
        </>
    )

}
