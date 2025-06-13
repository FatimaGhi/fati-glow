export class User {
  id?: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  address: string;

  constructor(data?: Partial<User>) {
    this.id = data?.id;
    this.fullName = data?.fullName || '';
    this.email = data?.email || '';
    this.password = data?.password || '';
    this.phone = data?.phone || '';
    this.address = data?.address || '';
  }
}
