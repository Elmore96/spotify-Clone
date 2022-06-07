import { useContext, useState } from "react"
import { Context } from "../Context"

export default function Submit({func}) {
    const { user, setuser } = useContext(Context)
    const USERS = [
        {
            username: 'keren',
            password: 1234,
            usersID: 1
        },
        {
            username: 'baruch',
            password: 1234,
            usersID: 2
        },
        {
            username: 'david',
            password: 1234,
            usersID: 3
        },
        {
            username: 'moshe',
            password: 1234,
            usersID: 4
        },
        {
            username: 'yoram',
            password: 1234,
            usersID: 5
        },
    ]

    const [User, setUser] = useState({ name: 'AA', password: 'SS' })
    function check() {
        if (USERS.find(v => v.username == User.name && v.password == User.password)) {
            setuser(User)
            return true
        }
        else {
            return false
        }
    }

    return (
        <div className="container">
            <label>User Name</label>
            <input type='text' id='user' onChange={(e) => setUser({ name: e.target.value, password: User.password })}></input>
            <label>Password</label>
            <input type='text' id='password' onChange={(e) => setUser({ name: User.name, password: e.target.value })} ></input>
            <button onClick={()=>func(check(),user)}>submmit </button>
        </div>
    )
}