export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public email: string,
    public desc: string,
    public sex: string,
    public vehicle: string,
    public alterEgo?: string

  ) {  }

}