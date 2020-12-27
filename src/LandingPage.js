import React from 'react';
import {Spring} from 'react-spring/renderprops';

export function LandingPage (props){

    return(
        <div style={{ 
            backgroundImage: "url(./signup-page-background.jpg)", 
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            height: "100vh",
            border: "1px solid black",
            }}>
            <Spring from={{opacity:0}} to={{opacity:1}} config={{delay:250}}>
                {props => (
                    <div style={props}>
                        <div className="header-flex">
                            <h1 className="header-landing-page">Welcome to Vishank's portfolio</h1>  
                        </div>
                    </div>
                )}

            </Spring>
          </div>
        )
  }