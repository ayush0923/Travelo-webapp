import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';




const options = [
    'English',
    'French',
    'German',
    'Spanish',
    'Hindi',
    'Italiano',
    'Arabic',
    'Chinese',
    'Russian',
    'Portugese',
    'Japanese',
    'Persian',
    'Urdu',
    'Korean',
];
function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Dialog
            maxWidth="xs"
            onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogTitle id="confirmation-dialog-title">Choose a language</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="language"
                    name="language"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleOk} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}
ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80%',
        maxHeight: 435,
    },
}));


function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('English');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };



    return (
        <div className='header'>
            <div className="header_titleimg">
                <Link to='/'>
                    <img
                        className="header__icon"
                        src="https://image.flaticon.com/icons/png/512/1323/1323544.png"
                        alt=""
                    />
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <p className="header_title">Travelo</p>
                </Link>
            </div>
            <div className='header__center'>
                <input className="headersearch" type="text" />
                <div className='searchicon'>
                    <SearchIcon />
                </div>
            </div>

            <div className='header__right'>
            <Link to='/host' style={{ textDecoration: 'none' }}>
                <p className="host">Become a host</p>
                </Link>
                <div className="language">
                    <LanguageIcon onClick={handleClickListItem} style={{ fontSize: 30 }}/>
                </div>
                <ConfirmationDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id="language-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                />
             
                <div className="profile">
                    <Avatar />
                </div>
               


            </div>
        </div>
    )
}

export default Header