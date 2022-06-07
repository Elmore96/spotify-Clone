import { useNavigate } from 'react-router-dom';
import Submit from './log-in-comps/Submit'

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
        <div>
            <div>Log In</div>
            <Submit func={enter} ></Submit>
            <div>Create User</div>
            <Submit func={creatUser}></Submit>
        </div>
    )
}