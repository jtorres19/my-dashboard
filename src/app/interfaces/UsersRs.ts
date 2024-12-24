export interface UsersRs {
  per_page: number;
  total: number;
  data: User[];
  page: number;
  total_pages: number;
  support: Support;
}

export interface User {
  last_name: string;
  id: number;
  avatar: string;
  first_name: string;
  email: string;
}

export interface Support {
  text: string;
  url: string;
}

export interface UserRs {
  data: User;
  support: Support;
}
