"use client";

import { useState } from "react";
import { User, LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useAuthStore from "@/lib/store";
import { logout } from "@/lib/auth-client";

export default function ProfilePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const clearToken = useAuthStore((s) => s.clearToken);

  const handleLogout = async () => {
    try {
      await logout();       // call API to clear cookie
      clearToken();         // clear Zustand state
      router.push("/login"); // redirect to login
    } catch (err: any) {
      alert(err?.message || "Logout failed");
    }
  };

  return (
    <div>
      <div className="relative"
                  style={{ cursor: 'pointer'}}>
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          className="flex items-center gap-2 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  style={{ cursor: 'pointer'}}
        >
          <Image
            src="/images/userprofile.png"
            alt="User Profile"
            width={25}
            height={25}
            style={{ cursor: 'pointer'}}
          />
        </button>

        {/* Popup Menu */}
        {isOpen && (
          <>
            {/* Backdrop to close on click */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <div
              className="absolute top-full mt-2 right-0 w-64 bg-white rounded-lg shadow-lg z-20 overflow-hidden"
              onMouseLeave={() => setIsOpen(false)}
            >
              {/* User Info Section */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <User size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900">Daniel Joseph</div>
                    <div className="text-sm text-gray-500 truncate">
                      daniel.joseph@accessbankplc.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
                  style={{ cursor: 'pointer'}}>
                  <User size={20} className="text-blue-600" />
                  <span className="text-gray-700">Profile</span>
                </button>

                <button
                  onClick={handleLogout} // <-- Hook up logout here
                  className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
                  style={{ cursor: 'pointer'}}
                >
                  <LogOut size={20} className="text-red-500" />
                  <span className="text-red-500">Logout</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}