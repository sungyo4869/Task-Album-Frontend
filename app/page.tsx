import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
import Icon from '../public/icon.png'

export default function Page() {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
            <Grid item xs={12} md={5} container justifyContent="center" alignItems="center" direction="column">
                <Image
                    src={Icon}
                    alt="icon"
                />
                <Typography variant='h5'>
                    開発者：城間華
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
                <Typography variant='h2'>
                    たすくあるばむ
                </Typography>
                <Typography variant='subtitle1'>
                    心が温まるTODOアプリ
                </Typography>
                <Link href="/task-album" passHref>
                    <Button variant='contained' sx={{ mt: 5 }}>
                        はじめる
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}
