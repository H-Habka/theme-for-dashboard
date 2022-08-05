// import DeleteIcon from "./icons/DeleteIcon";
// import EditIcon from "./icons/EditIcon";
// import ExternalLinkIcon from "./icons/ExternalLinkIcon";

import {DeleteIcon,EditIcon,ExternalLinkIcon} from './icons'

const UserItem = ({ user }) => {
    return (
        <li className="flex justify-start items-center bg-green-50 px-8 py-4 rounded sm:gap-12 gap-6">
            <div className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] overflow-hidden rounded-20 ">
                <img src={user.photoURL} alt="userImage" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold text-xl">{user.displayName}</div>
                <div className=" text-gray-800">{user.email}</div>
                <div className="text-gray-900">
                    Role :
                    {user.role.map((role, idx) => (
                        <span key={idx} className="p-2">{role}</span>
                    ))}
                </div>
            </div>
            <div className="grow"></div>
            <div className="flex flex-col sm:flex-row justify-start gap-8 items-center">
                <DeleteIcon onClick={()=> alert("delete is Clicked")} className="w-16 h-16 sm:w-24 sm:h-24 text-red cursor-pointer" />
                <EditIcon onClick={()=> {alert("edit is Clicked")}} className="w-16 h-16 sm:w-24 sm:h-24 text-green-600 cursor-pointer" />
                <ExternalLinkIcon onClick={()=> {alert("ExternalLink is Clicked")}} className="w-16 h-16 sm:w-24 sm:h-24 text-blue-600 cursor-pointer" />

            </div>
        </li>
    );
};

export default UserItem;
