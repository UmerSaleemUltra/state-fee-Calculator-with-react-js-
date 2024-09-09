import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '16px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#374151',
    marginBottom: '24px',
  },
  formControl: {
    marginBottom: '16px',
    width: '100%',
    textAlign: 'left',
  },
  button: {
    marginTop: '16px',
    width: '100%',
    padding: '12px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#2563eb',
  },
  result: {
    marginTop: '24px',
    fontSize: '18px',
    color: '#374151',
    fontWeight: '500',
  },
};

const fees = {
    "Alabama": {
        "llc": 200,
        "corp": 250
    },
    "Alaska": {
        "llc": 250,
        "corp": 300
    },
    "Arizona": {
        "llc": 150,
        "corp": 200
    },
    "Arkansas": {
        "llc": 50,
        "corp": 50
    },
    "California": {
        "llc": 70,
        "corp": 100
    },
    "Colorado": {
        "llc": 50,
        "corp": 50
    },
    "Connecticut": {
        "llc": 120,
        "corp": 250
    },
    "Delaware": {
        "llc": 90,
        "corp": 89
    },
    "Florida": {
        "llc": 125,
        "corp": 78.75
    },
    "Georgia": {
        "llc": 100,
        "corp": 100
    },
    "Hawaii": {
        "llc": 51.25,
        "corp": 50
    },
    "Idaho": {
        "llc": 100,
        "corp": 100
    },
    "Illinois": {
        "llc": 150,
        "corp": 150
    },
    "Indiana": {
        "llc": 95,
        "corp": 95
    },
    "Iowa": {
        "llc": 50,
        "corp": 50
    },
    "Kansas": {
        "llc": 160,
        "corp": 90
    },
    "Kentucky": {
        "llc": 40,
        "corp": 50
    },
    "Louisiana": {
        "llc": 100,
        "corp": 75
    },
    "Maine": {
        "llc": 175,
        "corp": 145
    },
    "Maryland": {
        "llc": 150,
        "corp": 100
    },
    "Massachusetts": {
        "llc": 500,
        "corp": 275
    },
    "Michigan": {
        "llc": 50,
        "corp": 60
    },
    "Minnesota": {
        "llc": 155,
        "corp": 155
    },
    "Mississippi": {
        "llc": 50,
        "corp": 50
    },
    "Missouri": {
        "llc": 50,
        "corp": 58
    },
    "Montana": {
        "llc": 70,
        "corp": 70
    },
    "Nebraska": {
        "llc": 105,
        "corp": 100
    },
    "Nevada": {
        "llc": 75,
        "corp": 75
    },
    "New Hampshire": {
        "llc": 100,
        "corp": 100
    },
    "New Jersey": {
        "llc": 125,
        "corp": 125
    },
    "New Mexico": {
        "llc": 50,
        "corp": 100
    },
    "New York": {
        "llc": 200,
        "corp": 125
    },
    "North Carolina": {
        "llc": 125,
        "corp": 125
    },
    "North Dakota": {
        "llc": 135,
        "corp": 100
    },
    "Ohio": {
        "llc": 99,
        "corp": 99
    },
    "Oklahoma": {
        "llc": 100,
        "corp": 100
    },
    "Oregon": {
        "llc": 100,
        "corp": 100
    },
    "Pennsylvania": {
        "llc": 125,
        "corp": 125
    },
    "Rhode Island": {
        "llc": 150,
        "corp": 230
    },
    "South Carolina": {
        "llc": 110,
        "corp": 135
    },
    "South Dakota": {
        "llc": 150,
        "corp": 150
    },
    "Tennessee": {
        "llc": 300,
        "corp": 300
    },
    "Texas": {
        "llc": 300,
        "corp": 300
    },
    "Utah": {
        "llc": 70,
        "corp": 70
    },
    "Vermont": {
        "llc": 125,
        "corp": 125
    },
    "Virginia": {
        "llc": 100,
        "corp": 100
    },
    "Washington": {
        "llc": 180,
        "corp": 180
    },
    "West Virginia": {
        "llc": 100,
        "corp": 100
    },
    "Wisconsin": {
        "llc": 130,
        "corp": 100
    },
    "Wyoming": {
        "llc": 100,
        "corp": 100
    }
};


const FeeCalculator = () => {
  const [state, setState] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState('');

  const calculateFee = () => {
    if (fees[state] && fees[state][type]) {
      const fee = fees[state][type];
      setResult(`Fee for forming a ${type.toUpperCase()} in ${state}: $${fee}`);
    } else {
      setResult("Fee data not available for the selected state and entity type.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Company Formation Fee Calculator</h2>
        <FormControl variant="outlined" style={styles.formControl}>
          <InputLabel>State</InputLabel>
          <Select
            value={state}
            onChange={(e) => setState(e.target.value)}
            label="State"
          >
            <MenuItem value=""><em>Select State</em></MenuItem>
            {Object.keys(fees).map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={styles.formControl}>
          <InputLabel>Entity Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Entity Type"
          >
            <MenuItem value=""><em>Select Entity Type</em></MenuItem>
            <MenuItem value="llc">LLC</MenuItem>
            <MenuItem value="corp">Corporation</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          onClick={calculateFee}
        >
          Calculate Fee
        </Button>
        <div id="result" style={styles.result}>
          {result}
        </div>
      </div>
    </div>
  );
};

export default FeeCalculator;
