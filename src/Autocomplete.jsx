// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from "cross-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Asynchronous() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [select, setSelect] = React.useState("");
    const [query, setQuery] = React.useState("");
    const [result, seResult] = React.useState([]);

    const loading = open && options.length === 0;

    React.useEffect(() => {
        console.log("select", select);

        if (result && select) {
            console.log("result", result);
            console.log(
                "result FILTERED",
                result.filter((item) => item.display_name === select),
                result.filter((item) => item.display_name === select)[0].lat,
                result.filter((item) => item.display_name === select)[0].lon
            );
        }
    }, [select, result]);
    React.useEffect(() => {
        console.log("query", query);
    }, [query]);

    React.useEffect(() => {

        (async () => {
            const response = await fetch(
                `https://api.locationiq.com/v1/autocomplete.php?key=pk.a4f67330ebe696ea8b4f97b0203144f2&q=${query}&limit=10`
            );
            //await sleep(1e3); // For demo purposes.
            const countries = await response.json();
            seResult(countries);

            console.log("countries", countries);
            if (countries.map) {
                setOptions(countries.map((item) => item.display_name));
            }
        })();

    }, [loading, query]);

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
            onChange={(event, value, reason) => setSelect(value)}
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Asynchronous"
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
