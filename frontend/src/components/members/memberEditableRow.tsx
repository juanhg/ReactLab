import * as React from 'react';
import MemberEntity from '../../api/memberEntity';


var MemberEditableRow = React.createClass({

    render() {
        return (
            <tr>
                <td>
                    <input type="text" className="form-control" name="fname"/>
                </td>
                <td>
                    <input type="text" className="form-control" name="fname"/>
                </td>
                <td>
                     <input type="number" className="form-control" name="quantity" min="1" max="120"/>
                </td>
                <td>
                    <select className="form-control">
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Others">Other</option>
                    </select>
                </td>
            </tr>
        );
    }
});

export default MemberEditableRow;

