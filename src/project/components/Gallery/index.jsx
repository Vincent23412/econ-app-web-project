import { useEffect, useState } from 'react'
import  GalleryGridCard from './GalleryCard'
import { fetchData } from './fetchData'
import Grid from '@mui/material/Unstable_Grid2';


export default function Gallery() {

    // using `window.` create a global variable, ratings
    window.ratings = Object()

    const localData = localStorage.getItem("dataObjects")

    // initiate a state variable, dataObjects, with the value of localData
    // if localData is not null, then parse it, otherwise set it to null
    const [dataObjects, setDataObjects] = useState(localData && localData !== "undefined" ? JSON.parse(localData) : null)

    const ui = dataObjects ? <Grid container spacing={2}>
        {
            dataObjects.map((e, i) => {
                return <GalleryGridCard project = {e} key={i} number={i+1} group={i+1}/>
            })
        }
    </Grid> : <div> loading....</div>

    useEffect(() => {
        fetchData().then(
            (res) => {
                setDataObjects(res)
                // set the localStorage item, dataObjects, to the value of res, the downloaded data
                localStorage.setItem("dataObjects", JSON.stringify(res))
            }
        )

    }, [])

    return (
        <>
            {ui}
        </>
    )
}
