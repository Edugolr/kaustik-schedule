import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddButtonDialog from './AddButtonDialog';
import { SocialIcon } from 'react-social-icons';

const appBarStyle = {
    background: '#13a861'
}

const NavBar = (props) => {
    return(
        <div>
            <AppBar style={appBarStyle} position="static">
                <ToolBar >
                    <Typography variant="title" color="inherit">
                        Frontend Kaustik
                    </Typography>
                    <SocialIcon
                        style={{marginTop: 10, position: 'absolute', right: 30}}
                        bgColor="#ffffff" fgColor="#3B5998" target="_blank"
                        url="https://www.facebook.com/christofer.wikman"
                    />
                    <SocialIcon
                        style={{marginTop: 10, position: 'absolute', right: 100}}
                        bgColor="#ffffff" fgColor="#0077B5" target="_blank"
                        url="https://www.linkedin.com/in/christofer-wikman/"
                    />
                    <SocialIcon
                        style={{marginTop: 10, position: 'absolute', right: 170}}
                        bgColor="#ffffff"
                        fgColor="#333333"
                        target="_blank"
                        url="https://github.com/Edugolr"
                    />
                </ToolBar>
                <AddButtonDialog/>

            </AppBar>
        </div>
    )
}

export default NavBar;
