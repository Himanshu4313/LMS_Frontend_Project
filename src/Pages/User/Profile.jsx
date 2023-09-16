import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import profileImage from "../../assets/Image/apj.png";
import HomeLayout from "../../Layouts/HomeLayout";

function UserProfile() {

    const { data } = useSelector((state) => state?.auth?.data);

    function handleCancelSubscription(){
        
    }
    return (
        <>
            <HomeLayout>
                <div className="min-h-[90vh] text-white flex justify-center items-center py-20 px-10  relative">
                    <div className=" w-96 rounded-md shadow-[0_0_10px_black] flex justify-center items-center flex-col gap-3 p-3">
                        <div>
                            <img
                                // src={data.avatar.secure_url} 
                                src={profileImage}
                                alt="ProfileImage"
                                className="w-20 rounded-full border my-4 m-auto"
                            />
                            <h1 className="my-2 capitalize font-semibold text-xl">
                                {/* {data.fillName} */}
                                Himanshu Kumar
                            </h1>
                        </div>
                        <div className=" grid grid-cols-2 ">
                            <p>Email : </p>
                            {/* <p>{data.email}</p> */}
                            <p>hv3243@gmail.com</p>
                            <p>Role :</p>
                            {/* <p>{data.role}</p> */}
                            <p>Admin</p>
                            <p>Subscription: </p>
                            {/* <p>{data?.subscription?.status === 'active' ? "Active" : "Inactive"}</p> */}
                            <p>Inactive</p>
                        </div>
                        <div className=" w-full flex justify-center items-center gap-2 my-3 mx-1">
                            
                                <button className=" w-full flex justify-center items-center bg-yellow-600 rounded-md py-2 px-3 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                    <Link to={"/changePassword"}>Change Password</Link>
                                </button>
                            
                            
                                <button className=" w-full flex justify-center items-center bg-yellow-600 rounded-md py-2 px-3 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                    <Link to={"/EditProfile"}>Edit Profile</Link>
                                </button>
                           

                        </div>
                        
                            {data?.subscription?.status === 'active' && (
                               <button
                               onClick={handleCancelSubscription} 
                               className=" w-full px-3 py-2 bg-red-700 rounded-md text-center font-semibold cursor-pointer hover:bg-red-900 transition-all ease-in-out duration-300 ">
                                  Cancel Subscription
                               </button>
                            )}
                     
                    </div>
                </div>
            </HomeLayout>
        </>
    );
}
export default UserProfile;