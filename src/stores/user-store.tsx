import { create } from "zustand"

interface UserState{
    canAccess: boolean,
    SetCanAccess: (canAccess: boolean) => void,
}

export const useUserStore = create<UserState>((set) => ({
    canAccess: false,
    SetCanAccess: (canAccess) => set(() => ({ canAccess })),
}))