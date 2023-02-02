import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex'
    },
    square: {
        fontSize: '48px'
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));



function Square(props) {
    const styles = useStyles()

    return <div className={styles.square}>{props.value}</div>
}

export default function TicTacToe() {
    const [grid, setGrid] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ])
    const styles = useStyles()

    const rows = grid.map((row) => {
        const rowCells = row.map((col) => {
            return <Square value={col} />
        })
        return <div className={styles.row}>{rowCells}</div>
    })


    return (
        <div className={styles.grid}>
            {rows}
        </div>
    );
}