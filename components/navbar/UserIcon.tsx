import { fetchUserProfileImage } from "@/utils/actions/profileActions";
import { LuUser2 } from "react-icons/lu";

async function UserIcon() {
  const profileImage = await fetchUserProfileImage();
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 bg-primary rounded-full" />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
