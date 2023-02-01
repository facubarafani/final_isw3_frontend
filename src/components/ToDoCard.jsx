import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';

export default function ToDoCard({ title, body }) {
    return (
        <Card variant="outlined">
            <CardHeader title={title} />
            <CardContent>
                {body}
            </CardContent>
        </Card>
    );
}