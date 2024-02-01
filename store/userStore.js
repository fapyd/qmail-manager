import { create } from "zustand";

const useUserStore = create(set => ({
    //user: null,
    //isAuthenticated: false,
    user: { username: "Pepe", id: 1, email: "pepe@pepe.com" },
    isAuthenticated: true,
    setUser: user => set(() => ({ user })),
    setAuthenticated: isAuthenticated => set(() => ({ isAuthenticated }))
}))

export default useUserStore