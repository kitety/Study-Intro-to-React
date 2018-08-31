import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//Game=>Board=>Square*9
// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

//转换为功能组件
//props 为 this.props
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
class Board extends React.Component {
    // 取出数组里面的值
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
                { squares: Array(9).fill(null) }
            ],
            xIsNext: true
        }
    }
    handleClick(i) {
        const history = this.state.history
        const current = history[history.length - 1]
        // make a copy Array
        const squares = current.squares.slice();
        // 已经胜利或者已经选择就return
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        // 这个已经是在操作this.state了,每次次改都要重置
        //这里要用xIsNext: !this.state.xIsNext,因为前面可以读到this.state,后面的呢不可以
        this.setState({
            // concat 返回新的数组
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            xIsNext: !this.state.xIsNext
        })
    }
    render() {
        const history = this.state.history
        const current = history[history.length - 1]
        const winner = calculateWinner(current.squares)
        let status;
        if (winner) {
            status = `Winner ${winner}`
        } else {
            status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O')
        }
        return (
            // 传递的是数组
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => { this.handleClick(i) }}
                    />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        // 解构赋值
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
