import React, { Component } from 'react';
import '../CustomStyles.css';
import Circle from './Circle';

export class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formSubmitted: false,
            data: []
        }
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Yb Digits</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <table>
                    <tbody>
                        <tr>
                            <td></td>
                                <td><Circle radius={100}>414</Circle></td>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td><Circle radius={75}>4</Circle></td>
                                <td><Circle radius={75}>10</Circle></td>
                                <td><Circle radius={75}>19</Circle></td>
                            </tr>
                            <tr>
                                <td><Circle radius={75}>14</Circle></td>
                                <td><Circle radius={75}>25</Circle></td>
                                <td><Circle radius={75}>23</Circle></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td><Circle radius={50}>+</Circle></td>
                                <td><Circle radius={50}>*</Circle></td>
                                <td><Circle radius={50}>-</Circle></td>
                                <td><Circle radius={50}>/</Circle></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </center>
            </div>
            
        );
    }
        
}

export default View;