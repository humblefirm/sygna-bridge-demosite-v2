import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const products = [
    { name: 'Private Info', desc: '04bb2aae0e33fbe50ffb6121375a4e...' },
    { name: 'Transaction', desc: '' },
    { name: 'Date', desc: '2019-08-15T10:28:10.364Z' },
    { name: 'Signature', desc: '9eee630c20a2aa894373216b32343c...' },
    { name: 'Transfer ID', desc: '01ca7589-f697-4637-931e-aa8922...' },
    { name: 'Transfer ID', desc: '01ca7589-f697-4637-931e-aa8922...' },
];

const useStyles = makeStyles((theme) => ({
}));

const TestBtn = withStyles({
    root: {
        marginBottom: '15px',
        padding: '8px 15px',
        lineHeight: 1.5,
        '&:hover': {
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
        },
    }
})(Button);

export default function BeneInfo () {
    const classes = useStyles();
    const [verify, setVerify] = React.useState(true);
    return (
        <React.Fragment>
            <ListItem>
                <ListItemText>
                    {verify ? '' : 'Verify Sucecss!'}
                </ListItemText>
                <Typography>
                {verify ? (
                    <TestBtn onClick={() => setVerify(false)} variant="contained" className="btn btn-primary">
                        Verify
                    </TestBtn>
                    ) : (
                    <TestBtn onClick={() => setVerify(true)} variant="contained" className="btn">
                        Decrypt
                    </TestBtn>
                )}
                </Typography>
            </ListItem>
            <div className="border-form">
                <Typography variant="h6" gutterBottom className="title">
                    transfer info
                </Typography>
                <List disablePadding>
                    {products.map((product) => (
                        <ListItem className={classes.listItem} key={product.name}>
                            <ListItemText primary={product.name} />
                            <Typography variant="subtitle1">
                                {product.desc}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </div>
        </React.Fragment>
    );
}
