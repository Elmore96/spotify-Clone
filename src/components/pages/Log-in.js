import { useNavigate } from 'react-router-dom';
import Submit from '../log-in-comps/Submit';
import './Log-in.css'

export default function LogIn(){
    const usenavigate = useNavigate();
    const goToMain = ()=>{
      usenavigate({pathname: '/home'})
    }

    function enter(bool,state) {
        if(bool){
            localStorage.setItem('User', JSON.stringify(state));
            goToMain();
        }else{
            alert('wrong pass or user name')
        }
    }
    
    function creatUser(bool,state) {
        
    }

    return(
        <div className='log-page'>
            <div className="center">
            <h1><u>Log In</u></h1>
            <Submit func={enter} ></Submit>
            </div>
            <div className="center">
            <h1><u>Create User</u></h1>
            <Submit  func={creatUser}></Submit>
            </div>
        </div>
    )
}