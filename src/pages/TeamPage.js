import React from 'react';

function TeamPage(props) {
    return (
        <>
            
            <div id="teamDiv1">
                <p>The Team</p>
            </div>
            <div className="row" id="teamDiv2">
                <div className="developer col-lg-3">
                    <p>
                        Ahmai 
                        <br></br>
                        Chaney-Smith
                    </p>
                    <p>
                        Brooklyn College
                        <br></br>
                        Front-End Developer
                        <br></br>
                        GitHub: arc-Smith
                    </p>
                </div>
                <div className="developer col-lg-3">
                    <p>
                        Fabio 
                        <br></br>
                        Pecora
                    </p>
                    <p>
                        College of Staten Island
                        <br></br>
                        Back-End Developer
                        <br></br>
                        GitHub: fabio-pecora
                    </p>
                </div>
                <div className="developer col-lg-3">
                    <p>
                        Tahmina 
                        <br></br>
                        Munni
                    </p>
                    <p>
                        Hunter College
                        <br></br>
                        Front-End Developer
                        <br></br>
                        GitHub: TahminaM
                    </p>
                </div>
                <div className="developer col-lg-3">
                    <p>
                        Yasiris 
                        <br></br>
                        Ortiz
                    </p>
                    <p>
                        The City College of New York
                        <br></br>
                        Back-End Developer
                        <br></br>
                        GitHub: 
                    </p>
                </div>
            </div>
        </>
    );
}
  
export default TeamPage;