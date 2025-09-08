import React from 'react';
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
function Home() {
    const local = () => { alert('Button clicked!') }
    const [visible] = useState(true);
    const remote = () => { alert("Good Job") }
    const navigate = useNavigate();
    const [use, popup] = useState(false)
    const [run, setmsg] = useState(false)
    const Headers=()=>{setmsg(!run)}
    const [value,system]=useState(true)
    const Delete=()=>{alert("are you wanted to delete ?")
        setTimeout(() => {
           system(false)  
        }, 3000);
      

    }
    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>

            <main style={{ padding: "40px", minHeight: "60vh", textAlign: "center" }}>
                 
                <h2>Welcome to TechSolutions</h2>
                <p>
                    we provide innovative digital
                    solutions to help businesses grow. From modern web applications to
                    mobile apps and cloud services — we make technology simple and
                    effective. we provide innovative digital
                    solutions to help businesses grow. From modern web applications to
                    mobile apps and cloud services — we make technology simple and
                    effective.

                </p>
                <Button variant="contained" onClick={local}>Contained</Button>
                <br /> <br />
                {visible && (
                    <Button variant="contained" onClick={remote} >Hide</Button>)}
                <br /> <br />
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Here is a gentle confirmation that your action was successful.</Alert>
                <p>
                    we provide innovative digital
                    solutions to help businesses grow. From modern web applications to
                    mobile apps and cloud services — we make technology simple and
                    effective. we provide innovative digital
                    solutions to help businesses grow. From modern web applications to
                    mobile apps and cloud services — we make technology simple and
                    effective.

                </p>
                <Button variant="contained" onClick={() => navigate('/contact')}>Contained</Button>
                <br /> <br />
                <Button variant="contained" onClick={() => popup(true)}>Disabled</Button>
                {use && (
                    <div style={{
                        position: 'fixed', top: '30%', left: '30%',
                        background: '#fff', padding: '20px', border: '1px solid #ccc', zIndex: 1000
                    }}>
                        <p>This is a popup!</p>
                        <button onClick={() => popup(false)}>Close</button>
                    </div>
                )}


                <br /> <br />
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Here is a gentle confirmation that your action was successful.</Alert><br />
                <Button variant="contained" onClick={() => Headers(false)}  >Click me</Button>
                {
                    run && (
                        <div>
                            <p>Thnaks for clicking here.</p>
                        </div>
                    )
                }<br/><br/>
              {  value &&(
                <div>
                    <p> we provide innovative digital
                    solutions to help businesses grow. From modern web applications to
                    mobile apps and cloud services — we make technology simple and
                    effective. we provide innovative digital
                    solutions to help businesses grow. From modern web applications to
                    mobile apps and cloud services — we make technology simple and
                    effective.</p>
                    <Button variant="contained" onClick={() =>Delete(true)}  >Delete</Button>
                </div>)}
            </main>

        </div>
    )
}
export default Home;
