import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../Context"
import { Link, useNavigate } from "react-router-dom";

export default function Submit({creatUser }) {
    const emailRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();
    const getToken=()=>{
        axios.post('http://localhost:3002/api/users/login',{
            email:emailRef.current.value,
            password:passwordRef.current.value
        },
        ).then((res)=>{
          console.log(res.data)
          if(res.data){
           localStorage.setItem("token",res.data)
           navigate('/home')
          }
        })
    }

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
                <input type='text' required='required'  ref={emailRef}></input>
                <span>Email</span>
            </div>
            <div className="sub-inputs">
                <input type='text' required='required' ref={passwordRef}  ></input>
                <span>Password</span>
            </div>
            <div className="sub-inputs">
                <input type='button' value='submmit' style={{ height: '3.4rem' }} onClick={getToken} ></input>
            </div>
            <Link to='/register'>creat a new accunt</Link>
        </div>
    )
}
