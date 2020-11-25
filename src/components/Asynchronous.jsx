import fetch from "cross-fetch";
import React from "react";
import { TextField, CircularProgress, Fade } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";


export default function Asynchronous(props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [query, setQuery] = React.useState("");
    const [result, seResult] = React.useState([]);
    const loading = open && options.length === 0;
    const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY;



    const handleSelect = (address) => {
        setQuery(address);
        if (result.filter && address) {
            const Asynchronous = result.filter((item) => item.display_name === address)
            console.log('Asynchronous CALL result', Asynchronous[0])

            const latitude = result.filter((item) => item.display_name === address)[0].lat;
            const longitude = result.filter((item) => item.display_name === address)[0].lon;
            let pos = { latitude, longitude }
            props.searchPosition(pos, Asynchronous[0].display_place)
        }
    };

    React.useEffect(() => {
        if (query) {
            (async () => {
                const response = await fetch(
                    `https://api.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${query}&limit=20&dedupe=1`
                );
                const countries = await response.json();
                seResult(countries);
                if (countries.map) {
                    setOptions(countries.map((item) => item.display_name));
                }
            })();
        }


    }, [loading, query, LOCATIONIQ_API_KEY]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);
    const [checked, setChecked] = React.useState(false);

    return (

        <Autocomplete
            size='small'
            id="asynchronous"
            open={open}
            onOpen={() => {
                setOpen(true);
                setChecked(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(event, value, reason) => handleSelect(value)}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            onBlur={() => {
                setChecked(false);
            }}
            popupIcon={
                <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    <Fade in={!checked}>
                        <SearchIcon
                            onClick={() => {
                                setChecked(true);
                            }}
                        />
                    </Fade>
                </React.Fragment>
            }
            renderInput={(params) => (
                <TextField  {...params} label="SEARCH" variant="outlined" onChange={(event) => setTimeout(setQuery, 5000, event.target.value)} />
            )}
        />

    );
}
