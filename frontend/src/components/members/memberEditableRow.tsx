import * as React from 'react';
import MemberEntity from '../../api/memberEntity';


interface Props extends React.Props<MemberEditableRow> {
    // member: MemberEntity
    onSave: (event: any) => any;
}

interface State {
    login: string;
    gender: string;
    age: any;
}

export default class MemberEditableRow extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            login: "",
            gender: "Female",
            age: 0
        };
    }

    public onClick(event) {
        //creamos el member a partir del state
        var member = new MemberEntity();

        member.login = this.state.login;
        member.gender = this.state.gender;
        member.age = this.state.age;

        this.props.onSave(member);
    }

    private onLoginChanged(event){
        this.setState({
            login: event.target.value,
            gender: this.state.gender,
            age: this.state.age
        });
    }

    private onGenderChanged(event){
        this.setState({
            login: this.state.login,
            gender: event.target.value,
            age: this.state.age
        });
    }

    private onAgeChanged(event){
        this.setState({
            login: this.state.login,
            gender: this.state.gender,
            age: parseInt(event.target.value)
        });
    }

    public render() {
        return (<tr>
            <td>
                <input
                    type="text"
                    className="form-control"
                    name="fname"                    
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className="form-control" 
                    name="fname"
                    onChange={this.onLoginChanged.bind(this)}
                    value={this.state.login}/>
            </td>
            <td>
                <input 
                    type="number" 
                    className="form-control" 
                    name="quantity" 
                    min="1" 
                    max="120"
                    onChange={this.onAgeChanged.bind(this)}
                    value={this.state.age}/>
            </td>
            <td>
                <select 
                    className="form-control"
                    onChange={this.onGenderChanged.bind(this)}
                    value={this.state.gender}>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Others">Other</option>
                </select>
            </td>
            <td>
                <button type="button" className="btn btn-success" onClick={this.onClick.bind(this)}>Add</button>
            </td>
        </tr>
        );
    }
}
