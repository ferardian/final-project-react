import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

// Merubah Tampilan background Dark Mode

export default function MyPage() {
    const { colorTheme, onChangeTheme } = useContext(ThemeContext);

    return (
        
        <div style={{
            backgroundColor:
                colorTheme === 'white' ? 'black' : 'white',
            width: 'auto',
            height: '100vh',
            fontSize: 24,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: colorTheme === 'white' ? 'white' : 'black'
        }}>
                <h1 className="text-center page-title" style={{color: colorTheme === 'white' ? 'white' : 'green'}}>Selamat Datang di Web Perkiraan Cuaca</h1>
                
                <button
                style={{ marginTop: 30 }}
                onClick={onChangeTheme}
            >Dark Mode </button>

        </div>

    );
}