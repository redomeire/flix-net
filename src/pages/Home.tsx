import React from "react";
import { FaImdb } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import Button from "../components/button/Button";
import CardMusic from "../features/movie/components/CardMusic";
import Input from "../components/input/Input";
import AppLayout from "../components/partials/Layouts/AppLayout";
import Typography from "../components/typography/Typography";

const Home = () => {
    return (
        <AppLayout>
            <div className="rounded-xl flex items-center justify-between">
                <div className="w-full rounded-xl min-h-[200px] p-4" style={{
                    background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80")',
                    backgroundPosition: 'right top', backgroundSize: 'cover'
                }}>
                    <div>
                        <Typography className="text-[50px] leading-[60px] mb-3">the <span className="font-semibold">Soul <br />Conductor</span></Typography>
                        <div className="flex items-center">
                            <Button className="flex items-center">
                                <FaImdb size={25} /> <Typography className="text-[13px] ml-2">7.8</Typography>
                            </Button>
                            <Button className="flex items-center ml-3">
                                <MdLanguage size={25} /> <Typography className="text-[13px] ml-2">English</Typography>
                            </Button>
                        </div>
                        <div className="mt-5">
                            <Button className="bg-red-500 text-sm">Watch</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Typography className="font-semibold text-xl mt-10">Parties</Typography>
            <div className="flex items-center flex-wrap">
                <CardMusic title="jdu"/>
                <CardMusic/>
                <CardMusic/>
                <CardMusic/>
                <CardMusic/>
            </div>
        </AppLayout>
    );
}

export default Home;
