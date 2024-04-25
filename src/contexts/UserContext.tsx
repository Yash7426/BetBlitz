"use client";

import IUserContext from "@/interfaces/IUserContext";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const intialData: IUserContext = {
  username: "",
  setUsername: () => {},
  userId: "",
  setUserId: () => {},
};

const UserContext = createContext<IUserContext>(intialData);

export function useUser() {
  const context = useContext(UserContext);

  if (context.username !== "") {
    return context;
  } else {
    return context;
  }
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [username, setUsername] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const user: any = localStorage.getItem("user");
    console.log("hello")
    if (user) {
      const  parsedUser = JSON.parse(user);
      setUsername(parsedUser.address as string);
      setUserId(parsedUser._id as string);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
