import * as React from 'react';
import MemberEntity from '../../api/memberEntity';

var autobind = require('autobind-decorator');

interface Props extends React.Props<MemberRow> {
  member: MemberEntity;
  onRemove: (member: MemberEntity) => any;
}

export default class MemberRow extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  @autobind
  public onClick(event) {
    this.props.onRemove(this.props.member);
  }

  public render() {
    return (
      <tr>
        <td>
          <img src={this.props.member.avatar_url} className="avatar" />
        </td>
        <td>
          <span>{this.props.member.login}</span>
        </td>
        <td>
          <span>{this.props.member.age}</span>
        </td>
        <td>
          <span>{this.props.member.gender}</span>
        </td>
        <td>
          <button type="button" className="btn btn-danger" onClick={this.onClick}>Remove</button>
        </td>
      </tr>
    );
  }
}
