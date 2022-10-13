import { atom } from 'recoil';
import { UserInfoType } from '../../types/user.type';

export const userInfoAtom = atom<UserInfoType | null>({
  key: 'user_info_atom',
  default: null,
});

export const userCount = atom<number>({
  key: 'user_count',
  default: 0,
});
