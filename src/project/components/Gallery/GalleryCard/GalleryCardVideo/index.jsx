import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Stack } from '@mui/material';


export default function GalleryCardVideo({link}) {
    return (
        <>
            <Stack direction="column" spacing={2}
                sx={{ alignItems: "center" }}>
                {/* <Language /> */}
                <VideoEmbed link={link}/>
            </Stack>
        </>

    )
}

// helps

function Language() {
    return (
        <>

            <FormControl>
                <FormLabel
                    sx={{ margin: "auto" }}
                    id="demo-row-radio-buttons-group-label">Language</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="ch" control={<Radio />} label="中" />
                    <FormControlLabel value="en" control={<Radio />} label="En" />

                </RadioGroup>
            </FormControl>
        </>
    )
}
function VideoEmbed({link}) {

    let src;
    if (link.includes("you")) {
        let video_id = extract_youtube_id(link)
        src = `https://www.youtube.com/embed/${video_id}`
    } else if (link.includes("vimeo")) {
        let video_id = extract_vimeo_id(link)
        src = `https://player.vimeo.com/video/${video_id}?h=7c051b9510`
    }
    
    return (
        <>
            <iframe src={src} //
                width={"100%"} height={200}
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen />
        </>
    )
}

function extract_youtube_id(text) {
    
    return text.match(/(?<=https:\/\/youtu\.be\/)[^/]+/)[0]

}
function extract_vimeo_id(text) {

    return text.match(/(?<=https:\/\/vimeo\.com\/)[^/]+/)[0]

}