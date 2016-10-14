
export default class MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  gender: string;
  age: number;

  constructor(login?: string, gender?: string, age?: number, avatar_url?: string) {
    this.id = "";
    this.login = login ? login : '';
    this.avatar_url = avatar_url ? avatar_url : "";
    this.gender = gender ? gender : 'Female';
    this.age = age ? age : 0;
  }
}
