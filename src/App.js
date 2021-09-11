import './App.css'
import produce from "immer"
import React, { Component } from "react"
import generator from "sudoku";
import SudokuBoard from "./Components/SudokuBoard"
import { generateSudoku, checkSolution, shareUrl } from "./lib/sudoku"
import { About } from "./Components/About"
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
window.generator = generator;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = produce({}, () => ({
      sudoku: generateSudoku()
    }))
  }

  handleChange = e => {
    this.setState(produce((state) => {
      state.sudoku.rows[e.row].cols[e.col].value = e.value;
      if (!state.sudoku.solvedTime) {
        const solved = checkSolution(state.sudoku);
        if (solved) {
          state.sudoku.solvedTime = new Date();
          state.sudoku.shareUrl = shareUrl(state.sudoku);
        }
      }
    }))
  };

  solveSudoku = e => {
    this.setState(produce(state => {
      state.sudoku.rows.forEach(row =>
        row.cols.forEach(col => {
          col.value = state.sudoku.solution[col.row * 9 + col.col]
        })
      )
    }))
  };

  printSudoku = () => {
    window.print();
  }

  newSudoku = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1><Link to="/">Sudoku Stack</Link></h1>
            <Link to="./About" rel="noopener noreferrer">About Us</Link>
          </header>

          <Switch>
            <Route path="/about">
              <About mode='dark' />
            </Route>
            <Route path="/">
              <div id="App-body">
                <SudokuBoard sudoku={this.state.sudoku} onChange={this.handleChange} />
                <button className="btn-primary mx-2" style={{ width: '110px' }} onClick={this.newSudoku}>New Game</button>
                <button className="btn-primary mx-2" style={{ width: '110px' }} onClick={this.printSudoku}>Print</button>
                {/* <button className="btn-primary mx-2" onClick={this.solveSudoku}>Solve it Magically!</button> */}
              </div>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  };
}

export default App;
