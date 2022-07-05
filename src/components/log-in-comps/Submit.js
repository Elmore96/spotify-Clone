import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context"

export default function Submit({creatUser }) {
    const


    const { user, setuser } = useContext(Context)
    const [users, setUsers] = useState([]);

   
    const [User, setUser] = useState({ email: '', password: '' })
    function check() {

        if (users.find((v) => v.email == User.email && v.password == User.password)) {
            setuser(User);
            return true;
        }
        else {
            return false
        }
    }

    return (
        <div className="submit">
            <div className="sub-inputs">
                <input type='text' required='required' onChange={(e) => setUser({ email: e.target.value, password: User.password })}></input>
                <span>User Name</span>
            </div>
            <div className="sub-inputs">
                <input type='text' required='required' onChange={(e) => setUser({ email: User.email, password: e.target.value })} ></input>
                <span>Password</span>
            </div>
            <div className="sub-inputs">
                <input type='button' value='submmit' style={{ height: '3.4rem' }} onClick={()=>creatUser(check,user)} ></input>
            </div>
        </div>
    )
}

// onClick={()=>func(check(),user)}
// v.email == User.email && v.password == User.password
// onClick={()=>func(check(),user)}