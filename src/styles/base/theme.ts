interface ThemeData {
  color: string;
  colorLight: string;
  colorDark: string;
  text: string;
  border: string;
  fontSize: string;
}

export interface Theme {
  primary: ThemeData;
  secondary: ThemeData;
}

const light: Theme = {
  primary: {
    color: '#FFCB42',
    colorLight: '#FFF4CF',
    colorDark: '#FFB200',
    text: '#333',
    border: '#f1c40f',
    fontSize: '16px',
  },
  secondary: {
    color: '#16a085',
    colorLight: '#07cda6',
    colorDark: '#1e7060',
    text: '#fff',
    border: '#f1c40f',
    fontSize: '16px',
  },
};

const dark: Theme = {
  primary: {
    color: '#2c3e50',
    colorLight: '#305f8e',
    colorDark: '#25313d',
    text: '#fff',
    border: '#95a5a6',
    fontSize: '16px',
  },
  secondary: {
    color: '#34495e',
    colorLight: '#498ed2',
    colorDark: '#2a3744',
    text: '#fff',
    border: '#95a5a6',
    fontSize: '16px',
  },
};

export const theme = {
  light,
  dark,
};
