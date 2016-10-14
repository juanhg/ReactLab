import * as React from 'react';
import MemberEntity from '../../api/memberEntity';

var autobind = require('autobind-decorator');

import ImageLoader from '../utils/ImageLoader';


interface Props extends React.Props<MemberEditableRow> {
    onSave: (event: any) => any;
}

interface State {
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
    }

    @autobind
    public onClick(event) {
        var member = new MemberEntity(this.state.login, this.state.gender, this.state.age, this.state.avatar_url);

        this.props.onSave(member);
    }

    @autobind
    private onAvatarUrlChanged(event) {
        this.setState({ avatar_url: event.target.value });
    }

    @autobind
    private onLoginChanged(event) {
        this.setState({ login: event.target.value });
    }

    @autobind
    private onGenderChanged(event) {
        this.setState({ gender: event.target.value });
    }

    @autobind
    private onAgeChanged(event) {
        this.setState({ age: parseInt(event.target.value) });
    }

    @autobind
    private onImageLoad(event){
        var me = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        debugger
        reader.onload = function (e) {
            var imageElement = document.getElementById('avatar-preview');
            var src =  e.target['result'];
            imageElement['src'] = src;
            me.state.avatar_url = src;
        };

        reader.readAsDataURL(file);
    }
    

    public render() {
        return (<tr>
            <td>
                <div>
                    <img id="avatar-preview"
                        name="avatarUrl"
                        className="avatar-preview"
                        src="https://maxcdn.icons8.com/windows10/PNG/48/Users/person_female-48.png"
                        onBlur={this.onAvatarUrlChanged} />
                    <ImageLoader 
                        className="image-loader"
                        fileInputClassName="btn btn-primary file-input"
                        placeholder="Upload Image"
                        onImageLoad={this.onImageLoad}/>
                </div>
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
