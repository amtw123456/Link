import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <React.Fragment>
            <TextField
                variant="outlined"
                placeholder="Search..."
                size="small" // Use "small" to reduce height
                sx={{
                    width: '250px', // Set a specific width, adjust as needed
                    backgroundColor: '#f5f5f5',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'gray',
                            borderWidth: 1, // Set default border width
                        },
                        '&:hover fieldset': {
                            borderColor: 'blue',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'blue', // Border color on focus
                            borderWidth: 1, // Set border width on focus
                        },
                        // Set font family for the input text
                        '& .MuiInputBase-input': {
                            fontFamily: 'Inter, sans-serif', // Use Inter font
                        },
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </React.Fragment>
    );
}
