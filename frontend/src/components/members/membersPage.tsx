import * as React from 'react';
import MemberEntity from '../../api/memberEntity';
import memberAPI from '../../api/memberAPI';
import MemberRow from './memberRow';
import MemberEditableRow from './memberEditableRow';

var autobind = require('autobind-decorator');

interface Props extends React.Props<MembersPage> {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class MembersPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { members: [] };
  }

  // Changing to componentDidMount to handle initial ajax request response
  public componentDidMount() {
    var promise: Q.Promise<MemberEntity[]> = memberAPI.getAllMembersAsync();

    promise.done(function (members) {
      this.setState({ members: members.reverse() })
    }.bind(this))
  }

  @autobind
  public saveMember(member) {
    this.setState({ members: [member].concat(this.state.members) });
    memberAPI.addMember(member);
  }

  @autobind
  public removeMember(member) {
    var index = this.state.members.indexOf(member);

    memberAPI.removeMember(member.id);

    var newMembers = this.state.members.slice(); //copy array
    newMembers.splice(index, 1); //remove element
    this.setState({ members: newMembers }); //update state
  }

  public render() {

    return (
      <div className="member-page row">
        <h2> Members Page</h2>
        <table className="table">
          <thead>
            <tr>
              <th>
                Avatar
              </th>
              <th>
                Name
              </th>
              <th>
                Age
              </th>
              <th>
                Gender
              </th>
            </tr>
          </thead>
          <tbody>
            <MemberEditableRow onSave={this.saveMember} />
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} onRemove={this.removeMember} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
