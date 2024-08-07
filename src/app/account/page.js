"use client";
import  BasicInfo  from "@/components/account/basic-info/basic-info";
import InfoTabs from "@/components/account/tabs/info_tabs";
import { useAuth } from "@/hooks";
import MainLayout from "@/layout/main/main-layout";
import { useRouter } from "next/navigation";

export default function Account(){
    const router = useRouter();
    const {user} = useAuth();

    if(!user){
        router.push("/");
        return;
    }
    return(
        <>
            <MainLayout>
                <BasicInfo/>
                <InfoTabs/>
            </MainLayout>
            
        </>
    )
}