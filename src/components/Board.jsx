import React from "react";
// import Square from "./Square";
import Knight from "./Knight";

// import { moveKnight, canMoveKnight } from "./Game";

//引入React dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//加入包裝後元件
import BoardSquare from "./BoardSquare";

//棋盤元件

//用此func來管理整面棋盤
//原本的[knightX, knightY]改為Game來管理
function renderSquare(i, knightPosition) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
        <DndProvider key={i} backend={HTML5Backend}>
            <div key={i} style={{ width: "12.5%", height: "12.5%" }} >
                <BoardSquare x={x} y={y}>
                    {renderPiece(x, y, knightPosition)}
                </BoardSquare>
            </div>
        </DndProvider>
    );
}

//把renderSquare的部分功能拆分至此
function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
}

// function handleSquareClick(toX, toY) {
//     if (canMoveKnight(toX, toY)) {
//         moveKnight(toX, toY);
//     }
// }

export default function Board({ knightPosition }) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexWrap: "wrap"
            }}
        >
            {/* 可以想像這裡是只有一格的棋盤 */}
            {/* <Square black>
                <Knight />
            </Square> */}

            {/* 現在嘗試產生三格棋盤 */}
            {/* {renderSquare(0, 0, knightPosition)}
            {renderSquare(1, 0, knightPosition)}
            {renderSquare(2, 0, knightPosition)} */}

            {/* 直接根據棋盤格數來產生 */}
            {squares}
        </div>
    )
}