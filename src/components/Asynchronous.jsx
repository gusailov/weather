import React from "react";
import { TextField, CircularProgress, Fade } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import useDebounce from './use-debounce';
import { getCoordsByPlace } from './api';


export default function Asynchronous(props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [query, setQuery] = React.useState("");
    const [result, seResult] = React.useState([]);
    const loading = open && options.length === 0;
    const LOCATIONIQ_API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY;
    const debouncedQuery = useDebounce(query, 500);

    const handleSelect = (address) => {
        setQuery(address);
        if (result.filter && address) {
            const Asynchronous = result.filter((item) => item.label === address)
            props.searchPosition(...Asynchronous)
        }
    };

    React.useEffect(() => {

        if (debouncedQuery) {
            (async () => {
                const response = await getCoordsByPlace(debouncedQuery, props.lang)
                const countr = await response.data;
                const countries = await countr.suggestions;
                seResult(countries);
                if (countries.map) {
                    setOptions(countries.map((item) => item.label));
                }
            })();
        }


    }, [loading, debouncedQuery, LOCATIONIQ_API_KEY, props.lang]);

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
                <TextField  {...params} label="SEARCH" variant="outlined" onChange={event => setQuery(event.target.value)} />
            )}
        />

    );
}
