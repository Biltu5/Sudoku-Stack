import React from 'react'

export function About(props) {
    let styleSheet = {
        color: props.mode === 'light' ? '#666' : 'white',
        display: 'flex',
        flexDirection: 'row',
        fontSize: "17px",
        fontWeight: '400',
        fontFamily: 'Verdana',
        fontStyle: 'Normal',
        lineHeight: "1.71em",
        opacity: 1
    }

    return (
        <div style={{ backgroundColor: "#042743" }}>
            <div className="container" style={styleSheet}>

                <div id="list-example" className=".list-groups mx-4" style={{ width: '65%' }}>
                    <h1>About us</h1>
                    <hr />
                    <h2>Send us your comments</h2>
                    <p>SudokuStack.com welcomes your feedback. Our goal is to create the best Computer Game-specific site on the web. One way we can do that is by listening to your feedback. We will try to address all feedback on a case-by-case basis. Please be patient.
                    </p>
                    <p className='my-4'>Thank you for your interest in SudokuStack.com .</p>
                    <p className='my-4'><span style={{ color: 'red' }}>*</span> Indicates field is required</p>

                    <div className="container">
                        <form action="" className="was-validated">
                            <div className="mb-3">
                                <label htmlFor="validationTooltip01" className="form-label">Name: <span style={{ color: 'red' }}>*</span></label>
                                <input className="form-control is-invalid" id="validationTooltip01" placeholder="Narendra Modi" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="validationTooltip02" className="form-label">E-Mail: <span style={{ color: 'red' }}>*</span></label>
                                <input className="form-control is-invalid" id="validationTooltip02" type='email' placeholder="pmmodi@gmail.com" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Contact: <span style={{ color: 'red' }}>*</span></label>
                                <select className="form-select" required aria-label="select example">
                                    <option value="">Select a Contact Option</option>
                                    <option value="1">Contact the Editors</option>
                                    <option value="2">Contact the Sudoku_Stack</option>
                                    <option value="3">General Comments / Feedback</option>
                                    <option value="4">Advertising Information Request</option>
                                    <option value="5">E-Mail Issues</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="validationTextarea" className="form-label">Feedback: <span style={{ color: 'red' }}>*</span></label>
                                <textarea className="form-control is-invalid" id="validationTextarea" style={{ height: '159px' }} placeholder="Your feedback here" required></textarea>
                            </div>

                            {/* <strong>The following authentication is provided to prevent unauthorized submission of this form.</strong> */}
                            <div className="mb-3">
                                <button className="btn btn-primary" type="submit" >Submit form</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example">
                    <h1>Write, call or fax</h1>
                    <hr />
                    <p>SudokuStack.com</p>
                    <p>c/o TechBaba</p>
                    <p>275 Grove Street</p>
                    <p>Newton, MA 02466</p>
                    <p>Phone: (617) 981-9800</p>
                    <p>Fax: (617) 732-9871</p>
                </div>
            </div>
        </div>
    )
}
