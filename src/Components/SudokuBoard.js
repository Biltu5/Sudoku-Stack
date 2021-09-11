import React, { Component } from "react"
import Result from "./Result";
import SudokuField from "./SudokuField"
import Timer from "./Timer";

export default class SudokuBoard extends Component {
    render() {
        const { sudoku, onChange } = this.props;
        let r = 0;
        let c = 1;

        return (
            <div className="board-div">
                {/* for each row we create 9 field rows:[{index:0, cols:{row:0,col:0,value:5,readonly:true},...},...] */}
                {!sudoku.solvedTime && <Timer start={sudoku.startTime} />}
                {sudoku.solvedTime && <Result sudoku={sudoku} />}
                <div className="board">
                    {sudoku.rows.map(row => (
                        <div className="row" key={row.index}>
                            {row.cols.map(field => (
                                <SudokuField field={field} r={r} c={c++} key={field.col} onChange={onChange} />
                            ))}
                            <div style={{ display: "none" }}>{c = 1, r = (r + 1)}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}