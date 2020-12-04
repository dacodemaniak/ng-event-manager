export class UserModel {
  public id?: number;
  public username = '';
  public password = '';
  public email = '';

  public deserialize(data: any): UserModel {
    // Méthode 1 : à bannir
    //Object.assign(this, data);
    /**
     * {
     *  username: 'Blah',
     *  password: 'Blih',
     *  confirmPassword: 'Blih',
     *  email: 'm@m.tr',
     *  confirmEmail: 'm@m.tr'
     * }
     */
    for (const property in data) {
      if (this.hasOwnProperty(property)) {
        this[property] = data[property];
      }
    }
    return this;
  }
}
