import * as $ from 'jquery';
import * as Q from 'q';
import MemberEntity from './memberEntity';

// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
class MemberAPI {
  //This would be performed on the server in a real app. Just stubbing in.
  private _clone(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };


  //Q.Promise<Array<MemberEntity>
  getAllMembersAsync(): Q.Promise<MemberEntity[]> {
    // Going more modern: check 'fetch' and ES6 Promise
    var deferred = Q.defer<Array<MemberEntity>>();


    $.ajax({
      url: 'http://localhost:3000/persons',
      dataType: "jsonp",
      success: function (data) {
        var members: Array<MemberEntity>;
        console.log(data);
        members = data.map((serverMember) => {
          var member: MemberEntity = new MemberEntity();
          
          member.id = serverMember._id;
          member.login = serverMember.name;
          member.avatar_url = 'https://maxcdn.icons8.com/windows10/PNG/48/Users/person_female-48.png';
          member.gender = serverMember.gender;
          member.age = serverMember.age;

          return member;
        });

        deferred.resolve(members);
      }
    });

    return deferred.promise;
  }
}

export default new MemberAPI();