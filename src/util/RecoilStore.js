import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist()

export const isLoaderAtom = atom({
    key: 'isLoaderAtom',
    default: false
});

export const snakeBarAtom = atom({
    key: 'snakeBarAtom',
    default: {
        snackStatus: false,
        snackColor: "bg-primary",
        snackMsg: ""
    },
});
export const userAtom = atom({
    key: 'userAtom',
    default: {},
    effects_UNSTABLE: [persistAtom],

});

export const tokenAtom = atom({
    key: 'tokenAtom',
    default: '',
    effects_UNSTABLE: [persistAtom],

});


