export interface Pet {
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  breed: string;
  owner: string;
  ownerAvatarUrl?: string;
  ownerEmail: string;
  createdAt: Date;
}
