import generator from "sudoku";
/* 
    Immer: Immutability the easy way, it's like userState hook
    Generate a sudoku data sturucture
    {rows : [{index:0, cols:{row:0,col:0,value:5,readonly:true},...},
             {index:1, cols:{row:1,col:0,value:1,readonly:true},...},...]}
*/
export function generateSudoku() {
    const fromUrl = extractUrlData();
    // console.log(fromUrl)
    const raw = fromUrl ? fromUrl.raw : generator.makepuzzle();
    const rawSolution = generator.solvepuzzle(raw);

    const formatted = raw.map((e) => (e === null ? null : e + 1));
    const formattedSolution = rawSolution.map((e) => e + 1)
    const result = {
        raw,
        rows: [],
        solution: formattedSolution,
        startTime: new Date(),
        solvedTime: null,
        challengerStartTime: fromUrl && fromUrl.startTime,
        challengerSolvedTime: fromUrl && fromUrl.solvedTime
    };

    // console.log(result);

    for (let i = 0; i < 9; i++) {
        let final_row = { index: i, cols: [] }
        for (let j = 0; j < 9; j++) {
            const value = formatted[i * 9 + j];
            const cols = {
                row: i,
                col: j,
                value: value,
                readOnly: value !== null
            };
            final_row.cols.push(cols);
        }
        result.rows.push(final_row);
    }
    // console.log(result);
    return result;
}

export function checkSolution(sudoku) {
    const candidate = sudoku.rows.map(row => row.cols.map(col => col.value)).flat();
    for (let i = 0; i < candidate.length; i++) {
        if (candidate[i] === null || candidate[i] !== sudoku.solution[i])
            return false;
    }
    return true;
}

export function shareUrl(sudoku) {
    const data = {
        raw: sudoku.raw,
        startTime: sudoku.startTime,
        solvedTime: sudoku.solvedTime
    }
    const query = btoa(JSON.stringify(data));
    return document.location.href.replace(/\?.+$/, "") + `?sudoku=${query}`
}

function extractUrlData() {
    const match = document.location.search.match(/sudoku=([^&]+)/);
    if (match)
        return JSON.parse(atob(match[1]));
    return null;
}