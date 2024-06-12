"use client";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import {
  signin,
  signout,
  useSession,
  getProviders,
  signOut,
} from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div>
        <Link href={"/"} className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            alt="promptia logo"
            className="object-contain"
          />
          <p className="logo_text"> Promptopia</p>
        </Link>
        {/* Desktop navigation */}
      </div>
      <div className="sm:flex hidden ">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-post"} className="black_btn">
              Create Post{" "}
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              SignOut
            </button>
            <Link href={"/profile"}>
              <Image
                src={"/assets/images/logo.svg"}
                width={37}
                height={37}
                className="rounded-full"
                Profil
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {provider &&
              Object.value(providers).map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => signin(provider.id)}
                  className="black_btn"
                >
                  SignIn
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src={"/assets/images/logo.svg"}
              width={37}
              height={37}
              className="rounded-full"
              Profil
              alt="profile"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdow_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={"/create-post"}
                  className="dropdow_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Post{" "}
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    signOut();
                    setProviders(false);
                  }}
                >
                  SignOut
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {provider &&
              Object.value(providers).map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => signin(provider.id)}
                  className="black_btn"
                >
                  SignIn
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
