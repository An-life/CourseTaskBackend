export class UserDto {
  id;
  role;
  status;

  constructor(model) {
    this.id = model._id;
    this.role = model.role;
    this.status = model.status;
  }
}
