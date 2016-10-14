import * as React from 'react';
import MemberEntity from '../../api/memberEntity';

var autobind = require('autobind-decorator');

import ImageLoader from '../utils/ImageLoader';


interface Props extends React.Props<MemberEditableRow> {
    onSave: (event: any) => any;
}

interface State {
    src?: string;
    name?: string;
    gender?: string;
    age?: any;
}

export default class MemberEditableRow extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = this.getInitState();
    }

    @autobind
    public clearMember(){
       this.setState(this.getInitState());
    }

    public getInitState(){
        return {
            src: "https://maxcdn.icons8.com/windows10/PNG/48/Users/person_female-48.png",
            name: "",
            gender: "Female",
            age: 0
        }
    }

    @autobind
    public onClick(event) {
        var member = new MemberEntity(this.state.name, this.state.gender, this.state.age, this.state.src);
        this.props.onSave(member);
        this.clearMember();
    }

    @autobind
    private onAvatarUrlChanged(event) {
        this.setState({ src: event.target.value });
    }

    @autobind
    private onLoginChanged(event) {
        this.setState({ name: event.target.value });
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

        reader.onload = function (e) {
            var imageElement = document.getElementById('avatar-preview');
            var src =  e.target['result'];
            imageElement['src'] = src;
            me.state.src = src;
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
                        src={this.state.src}
                        value={this.state.src}
                        onChange={this.onAvatarUrlChanged} />
                    <ImageLoader 
                        className="image-loader"
                        fileInputClassName="btn btn-primary file-input"
                        placeholder="Upload Image"
                        onImageLoad={this.onImageLoad} />
                </div>
            </td>
            <td>
                <input
                    type="text"
                    className="form-control"
                    name="fname"
                    onChange={this.onLoginChanged}
                    value={this.state.name}
                    />
            </td>
            <td>
                <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    min="1"
                    max="120"
                    onChange={this.onAgeChanged}
                    value={this.state.age}

                    />
            </td>
            <td>
                <select
                    className="form-control"
                    onChange={this.onGenderChanged}
                    value={this.state.gender}>
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
