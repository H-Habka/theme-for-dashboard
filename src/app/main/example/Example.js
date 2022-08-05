import DemoContent from "@fuse/core/DemoContent";
import { styled } from "@mui/material/styles";
import FusePageSimple from "@fuse/core/FusePageSimple";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUserDataFirebase } from "app/auth/store/userSlice";
import UsersList from "./UsersList";

const Root = styled(FusePageSimple)({
    "& .FusePageSimple-header": {},
    "& .FusePageSimple-toolbar": {},
    "& .FusePageSimple-content": {},
    "& .FusePageSimple-sidebarHeader": {},
    "& .FusePageSimple-sidebarContent": {},
});

function ExamplePage(props) {
    const [users, setUsers] = useState([]);

    let getUsers = () => {
        axios
            .get("http://localhost:5000/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <UsersList users={users} />
        </>
    );

    return <p>{props.test}</p>;

    const { t } = useTranslation("examplePage");

    return (
        <Root
            header={
                <div className="p-24">
                    <h4>{t("TITLE")}</h4>
                </div>
            }
            contentToolbar={
                <div className="px-24">
                    <h4>Content Toolbar</h4>
                </div>
            }
            content={
                <div className="p-24">
                    <h4>Content</h4>
                    <br />
                    <DemoContent />
                </div>
            }
        />
    );
}

export default ExamplePage;
