import Link from "next/link";
import UserInfo from "./components/user-info/UserInfo";
import NavigationLinks from "./components/navigation-links/NavigationLinks";

export default function NavigationBar(): JSX.Element {
  return (
    <div className="flex items-center justify-between py-4 bg-gradient-to-r from-sky-400 via-blue-300 to-sky-400 px-4 mb-8  ">
      <NavigationLinks />
      <div className="banner grow text-center">
        Welcome to my nextJS practice website
      </div>
      <UserInfo />
    </div>
  );
}
