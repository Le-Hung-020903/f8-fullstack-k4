import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";

const Profile = async () => {
    const session = await getServerSession(authOptions);

    console.log(session);
    if (!session) {
        redirect("/login");
    }

    return (
        <div>
            <ul>
                <li>Name: {session.user?.name}</li>
                <li>Email: {session.user?.email}</li>
                <li>
                    <Image
                        src={session.user?.image ?? ""}
                        alt={"Avatar"}
                        width={300}
                        height={300}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Profile;
