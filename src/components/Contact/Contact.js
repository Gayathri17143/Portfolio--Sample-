import React from 'react'
import "./Contact.css";
import { Element } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import { Facebook,Instagram, LinkedIn } from '@material-ui/icons';

const Contact = () => {
  return (
    <Element className='contact' id="contact">
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span> gayathri17143@gmail.com</span>
            </p>
            <p>
                Github Username : <span> https://github.com/Gayathri17143</span>
            </p>
            <div className='contact__icons'>
                <a href="google.com">
                    <IconButton>
                    <LinkedIn/>
                    </IconButton>
                </a>
                <a href="google.com">
                    <IconButton>
                    <Instagram/>
                    </IconButton>
                </a>
                <a href="google.com">
                    <IconButton>
                    <Facebook/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact;
