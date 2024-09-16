import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import {
  fetchUserProfile,
  updateProfileImageAction,
  updateUserProfileAction,
} from "@/utils/actions/profileActions";

export default async function Page() {
  const user = await fetchUserProfile();
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Update Profile</h1>
      <ImageInputContainer
        image={user.profileImage}
        name={user.username}
        action={updateProfileImageAction}
        text="Update profile Image"
      />
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={updateUserProfileAction}>
          <div className="grid  md:grid-cols-2 gap-4 mt-4 ">
            <FormInput
              type="text"
              name="firstName"
              label="First Name"
              defaultValue={user.firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Last Name"
              defaultValue={user.lastName}
            />
            <FormInput
              type="text"
              name="username"
              label="Username"
              defaultValue={user.username}
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-4" />
        </FormContainer>
      </div>
    </section>
  );
}
