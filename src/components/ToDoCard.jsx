import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function ToDoCard({ title, body }) {
    return (
        <Box sx={{ width: 1 }}>
            <Card variant="outlined" sx={{ backgroundColor: '#393a41' }}>
                <CardHeader title={title} />
                <CardContent>
                    {body}
                </CardContent>
            </Card>
        </Box>
    );
}