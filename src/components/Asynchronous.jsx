import fetch from "cross-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Asynchronous(props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [query, setQuery] = React.useState("");
    const [result, seResult] = React.useState([]);
    const loading = open && options.length === 0;
    const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY;
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

    return (
        <Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(event, value, reason) => handleSelect(value)}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="SEARCH"
                    variant="outlined"
                    onChange={(event) => setQuery(event.target.value)}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress color="inherit" size={20} />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        )
                    }}
                />
            )}
        />
    );
}
