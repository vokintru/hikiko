// src/components/Header.tsx
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  projectLogo: string
  iconMag: string
  iconClose: string
}

export const Header: React.FC<HeaderProps> = ({ projectLogo, iconMag, iconClose }) => {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-zinc-900 text-white px-6 py-4 flex items-center justify-between shadow-md z-50">
      <div className="flex items-center">
        <img src={projectLogo} alt="Hikiko Logo" className="h-8 cursor-pointer" />
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-75">
        <div className="relative w-full flex items-center justify-center">
          <AnimatePresence>
            {!searchOpen && (
              <motion.div
                key="buttons"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center space-x-2"
              >
                <button className="px-4 py-2 rounded-full hover:bg-zinc-800 font-semibold transition-colors">
                  Главная
                </button>
                <button className="px-4 py-2 rounded-full hover:bg-zinc-800 font-semibold transition-colors">
                  Список
                </button>
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center"
                >
                  <img src={iconMag} className="h-5 w-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                key="search"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute left-0 flex items-center bg-zinc-800 rounded-full overflow-hidden"
              >
                <input
                  type="text"
                  placeholder="Поиск..."
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder-white focus:outline-none px-4 py-2"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="h-8 w-8 mx-1 flex items-center justify-center rounded-full hover:bg-zinc-700 transition-colors"
                >
                  <img src={iconClose} className="h-5 w-5 object-contain" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <button className="font-semibold hover:underline">Профиль</button>
      </div>
    </header>
  )
}
