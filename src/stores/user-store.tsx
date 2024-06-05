import { create } from "zustand"
import { persist } from "zustand/middleware"

interface UserState{
    canAccess: boolean,
    SetCanAccess: (canAccess: boolean) => void,
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
        canAccess: false,
        SetCanAccess: (canAccess) => set(() => ({ canAccess })),
        }),
        {
            name: 'user-storage'
        }
    )
)