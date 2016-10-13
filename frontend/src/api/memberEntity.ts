
export default class MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  gender: string;
  age: number;

  constructor(login?: string, gender?: string, age?: number, avatar_url?: string) {
    this.id = -1;
    this.login = login ? login : '';
    this.avatar_url = avatar_url ? avatar_url : "";
    this.gender = gender ? gender : 'Female';
    this.age = age ? age : 0;
  }
}
