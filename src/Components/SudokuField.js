import React, { Component } from 'react'

export default class SudokuField extends Component {
    render() {
        const { field, r, c } = this.props;
        this.handleChange = e => {
            const value = e.target.value === "" ? null : parseInt(e.target.value, 10)
            this.props.onChange({ ...this.props.field, value: value });
        }
        const bokbas_r = r + 1;

        return (
            <input
                oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                maxLength="1"
                id={(r * 9 + c)}
                type="text"
                className="field"
                value={field.value || ""}
                readOnly={field.readOnly}
                onChange={this.handleChange}
                style={{
                    color: field.readOnly ? "red" : "green",
                    borderRight: (c % 3 === 0) ? "4px solid black" : "1px solid black",
                    borderBottom: (bokbas_r % 3 === 0) ? "4px solid black" : "1px solid black",
                    borderTop: (bokbas_r === 1) ? "4px solid black" : "1px solid black",
                    borderLeft: (c === 1) ? "4px solid black" : "1px solid black"
                }}
            />
        )
    }
}
