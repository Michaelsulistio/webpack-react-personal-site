import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex',
    },
    square: {
        display: 'flex',
        fontSize: '48px',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',    
        height: '100px',
        width: '100px',
    },
    grid: {
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        paddingTop: '12px',
        fontSize: '48px',
        textAlign: 'center'
    },
    gameContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    gameInstructionHeader: {
        textAlign: 'center',
        overflowWrap: 'break-word',
        maxWidth: '500px'
    },
    gameScore: {
        textAlign: 'center',
        overflowWrap: 'break-word',
        maxWidth: '500px'
    }
}));

function convertToSquare(num) {
    if (num === -1) {
        return 'O'
    } else if (num === 1) {
        return 'X'
    } else {
        return ''
    }
}

function Square(props) {
    const styles = useStyles()

    return <div className={styles.square}>{convertToSquare(props.value)}</div>
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
        <div className={styles.gameContainer}>
            <div className={styles.header}>Async TicTacToe</div>
            <div className={styles.gameInstructionHeader}>
                Play against me in an asynchronous game of TicTacToe. You (and anyone that visits this site)
                are controlling 'X' and can make a move. I'll respond and make a move usually within a 24hour time period.
                </div>
            <div className={styles.grid}>
                {rows}
            </div>
            <div className={styles.gameScore}> Everyone: 0 | Mike: 0 </div>
        </div>
    );
}