import * as React from 'react';
import MemberEntity from '../../api/memberEntity';


interface Props extends React.Props<MemberEditableRow> {
    onSave: (event: any) => any;
}

interface State{
    avatar_url?: string;
    login?: string;
    gender?: string;
    age?: any;
}

export default class MemberEditableRow extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            avatar_url: "",
            login: "",
            gender: "Female",
            age: 0
        };

        this.onAvatarUrlChanged = this.onAvatarUrlChanged.bind(this);
        this.onLoginChanged = this.onLoginChanged.bind(this);
        this.onAgeChanged = this.onAgeChanged.bind(this);
        this.onGenderChanged = this.onGenderChanged.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    public onClick(event) {
        var member = new MemberEntity(this.state.login, this.state.gender, this.state.age, this.state.avatar_url);

        this.props.onSave(member);
    }

    private onAvatarUrlChanged(event){
        this.setState({ avatar_url: event.target.value });
    }

    private onLoginChanged(event){
        this.setState({ login: event.target.value });
    }

    private onGenderChanged(event){
        this.setState({ gender: event.target.value });
    }

    private onAgeChanged(event){
        this.setState({ age: parseInt(event.target.value) });
    }

    public render() {
        return (<tr>
            <td>
                <input
                    type="text"
                    className="form-control"
                    name="avatarUrl"         
                    onBlur={this.onAvatarUrlChanged}       
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className="form-control" 
                    name="fname"
                    onBlur={this.onLoginChanged}
                 />
            </td>
            <td>
                <input 
                    type="number" 
                    className="form-control" 
                    name="quantity" 
                    min="1" 
                    max="120"
                    onBlur={this.onAgeChanged}
                />
            </td>
            <td>
                <select 
                    className="form-control"
                    onBlur={this.onGenderChanged}>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Others">Other</option>
                </select>
            </td>
            <td>
                <button type="button" className="btn btn-success" onClick={this.onClick}>Add</button>
            </td>
        </tr>
        );
    }
}
