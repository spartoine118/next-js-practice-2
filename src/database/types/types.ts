import { WithId } from "mongodb";

export interface Post {
  userId: string;
  name: string;
  content: string;
}

export type PostWithId = WithId<Post>;

export interface User {
  firstName: string;
  lastName: string;
  alias?: string;
  email: string;
  linkedInProfile?: string;
  phoneNumber: string;
  password: string;
}

export type UserWithId = WithId<User>;
