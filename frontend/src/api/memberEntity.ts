
export default class MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  gender: string;
  age: number;

  constructor() {
    this.id = -1;
    this.login = "";
    this.avatar_url = "";
    this.gender = "";
    this.age;
  }
}
