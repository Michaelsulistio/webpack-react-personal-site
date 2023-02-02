import * as React from 'react';


function Square(props) {
    return <div>{props.value}</div>
}

export default function TicTacToe() {
    const [grid, setGrid] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ])

    const rows = grid.map((row) => {
        return row.map((col) => {
            return <Square value={grid[row][col]} />
        })
    })


    return (
        <div className={"tictactoe-grid"}>
            {rows}
        </div>
    );
}