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
        <div className="submit">
            <div className="sub-inputs">
                <input type='text' required='required' onChange={(e) => setUser({ name: e.target.value, password: User.password })}></input>
                <span>User Name</span>
            </div>
            <div className="sub-inputs">
                <input type='text' required='required' onChange={(e) => setUser({ name: User.name, password: e.target.value })} ></input>
                <span>Password</span>
            </div>
            <div className="sub-inputs">
                <input type='button' value='submmit' style={{height:'3.4rem'}} onClick={()=>func(check(),user)}></input>
            </div>
        </div>
    )
}