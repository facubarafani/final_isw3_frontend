import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const card = (
    <React.Fragment>
        <CardHeader title={
            <Grid container justifyContent="flex-start">
                Here goes title
            </Grid>
        } />
        <CardContent>
            <Stack direction="row">
                Here goes card body
            </Stack>
        </CardContent>
    </React.Fragment>
);

export default function ToDoTextBox() {
    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    );
}