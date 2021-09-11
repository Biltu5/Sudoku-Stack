import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        const { sudoku } = this.props;
        const elapsed = Math.floor((sudoku.solvedTime.getTime() - sudoku.startTime.getTime()) / 1000);
        // console.log(sudoku)
        // console.log(sudoku.challengerSolvedTime)
        // console.log(sudoku.challengerStartTime)
        // console.log(sudoku.challengerSolvedTime.getTime())
        const soTime = new Date(sudoku.challengerSolvedTime);
        const stTime = new Date(sudoku.challengerStartTime);

        const opponent = sudoku.challengerSolvedTime ? Math.floor(
            (soTime.getTime() - stTime.getTime()) / 1000
        ) : null;

        return (
            <div>
                <h2>You solved the sudoku in {elapsed} seconds</h2>
                {opponent && <h3>Your opponenet solved it in {opponent} seconds</h3>}
                <p>
                    Challenge a friend (or enemy):
                    <a href={sudoku.shareUrl} target="_blank" rel="noopener noreferrer">Share Link</a>.
                </p>
            </div>
        )
    }
}
