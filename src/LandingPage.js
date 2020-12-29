import React from 'react';
import {Spring} from 'react-spring/renderprops';

export function LandingPage (){

    return(
        <div style={{ 
            backgroundImage: "url(./signup-page-background.jpg)", 
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            height: "100vh",
            border: "1px solid black",
            }}>
            <Spring from={{opacity:0}} to={{opacity:1}} config={{delay:300}}>
                {props => (
                    <div style={props}>
                        <div className="header-flex">
                            <p className="header-landing-page">Hey! 👋🏽 
                            <br/><br/>I'm <em className="name">Vishank Rughwani</em>. I am passionate <br/> about software development and executing <br/> ideas that create a lasting impact.
                            <br/><br/><em className="scroll">Please scroll down to learn more...</em>
                            </p>

                        </div>
                    </div>
                )}

            </Spring>
          </div>
        )
  }