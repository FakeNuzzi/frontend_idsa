import React from 'react'
import { Grid,Box,Button,TextField } from '@mui/material'
import AddressCard from './AddressCard'

const FormDatiFatturazione = () => {

    const handleSubmit = (e) => {
        e.preventDefaut();
        console.log("address")
        const data = new FormData(e.currenTarget);
        const address = {
            firstname: data.get.get("firstname"),
            lastname: data.get("lastname"),
            address: data.get("address"),
            citta: data.get("citta"),
            provincia: data.get("provincia"),
             zipcode:data.get("zipcode")
        }
        console.log("address",address)
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounder-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{mt:2,bgcolor:"RGB(145 85 253"} } size='large' variant='container'>Conferma</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid containern spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstname"
                                        name="firstname"
                                        lable="firstname"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                  
                                        
                                    
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastnamename"
                                        name="lastname"
                                        lable="lastname"
                                        fullWidth
                                        autoComplete="given-name"
                                    />



                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="firstname"
                                        lable="firstname"
                                        fullWidth
                                        autoComplete="given-name"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="citta"
                                        name="citta"
                                        lable="citta"
                                        fullWidth
                                        autoComplete="given-name"
                                    />



                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="provincia"
                                        name="provincia"
                                        lable="provincia"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="codice postale"
                                        name="codice postale"
                                        lable="codice postale"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button sx={{py=1.5, mt: 2, bgcolor: "RGB(145 85 253" }} size='large' variant='container' type="submit">Conferma</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormDatiFatturazione