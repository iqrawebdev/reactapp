import React from 'react';
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
function Home() {
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
                <Button variant="contained">Contained</Button>
                <br/> <br/>
                <Button variant="contained" disabled>Disabled</Button>
                <br/> <br/>
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Here is a gentle confirmation that your action was successful.</Alert>
            </main>

        </div>
    )
}
export default Home;
