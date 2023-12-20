import { useEffect, useState } from 'react'
import FindCoWorkerCard from './Card'
import Button from './Button'
import { Stack } from '@mui/material'
import { fetchData } from './fetchData'
import Grid from '@mui/material/Unstable_Grid2';

function MainCard(){
    const localData = localStorage.getItem("dataObjects")

    const [dataObjects, setDataObjects] = useState(localData && localData !== "undefined" ? JSON.parse(localData) : null)

    useEffect(() => {
        fetchData().then(
            (res) => {
                setDataObjects(res)
                // set the localStorage item, dataObjects, to the value of res, the downloaded data
                localStorage.setItem("dataObjects", JSON.stringify(res))
            }
        )

    }, [])

    const ui = dataObjects ? <Grid container spacing={5}>
        {
            dataObjects.map((e, i) => {
                console.log(i)

                return <Grid sx={2}>
                    <FindCoWorkerCard email={e["Contact Email"]} need_people={e['Vacancy Number of Teammate']} 
                        poster={e['Contact Person']} total_people={e['Current Number of Teammates']}
                        />
                    </Grid>
            })
        }
    </Grid> : <div> loading....</div>

    return ui
}




export default function FindCoWorker() {
    return (
            <>
                <Stack 
                    direction="column"
                    justifyContent="center" // 將子元件置中
                    alignItems="center" // 水平居中對齊
                    sx={{ height: '80vh' }} // 容器高度為視窗高度
                >
                    <MainCard/>
                    <Stack direction="row" spacing={2} sx={{ position: 'absolute', bottom: 0 }}>
                        <Button word="Post at" color='rgb(25, 118, 210)' link='https://script.google.com/macros/s/AKfycby_fv2NyZLxcCkWDOiArIOMIbG8SgE8JgCUjZs0CZUWPZ8334L2s5kum99zbB1O-oxp/exec'/>
                        <Button word="Register at" color='rgb(156, 39, 176)' link='https://docs.google.com/forms/d/e/1FAIpQLSdIj3EKvGmdg_olWN_BVre1lp4nxEFnPmsVTF6_bf6AhaTchQ/viewform'/>
                    </Stack>
                </Stack>
            </>
        );
}

