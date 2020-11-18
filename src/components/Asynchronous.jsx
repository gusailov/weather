import fetch from "cross-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import Fade from "@material-ui/core/Fade";

export default function Asynchronous(props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [query, setQuery] = React.useState("");
    const [result, seResult] = React.useState([]);
    const loading = open && options.length === 0;
    const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATIONIQ_API;
    console.log('Asynchronous CALL')

    const handleSelect = (address) => {
        console.log('address', address)
        setQuery(address);
        if (result.filter && address) {
            const latitude = result.filter((item) => item.display_name === address)[0].lat;
            const longitude = result.filter((item) => item.display_name === address)[0].lon;
            let pos = { latitude, longitude }
            console.log('COORDSASYNC', pos)
            props.searchPosition(pos)
        }
    };

    React.useEffect(() => {

        (async () => {
            const response = await fetch(
                `https://api.locationiq.com/v1/autocomplete.php?key=${LOCATIONIQ_API_KEY}&q=${query}&limit=10`
            );
            const countries = await response.json();
            seResult(countries);
            if (countries.map) {
                setOptions(countries.map((item) => item.display_name));
            }
        })();

    }, [loading, query, LOCATIONIQ_API_KEY]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (

        <Autocomplete
            size='small'
            id="asynchronous-demo"
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
                <TextField  {...params} label="SEARCH" variant="outlined" />
            )}
        />

    );
}
