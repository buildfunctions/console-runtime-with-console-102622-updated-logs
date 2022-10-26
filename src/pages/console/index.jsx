import Sidebar from '../../partials/Sidebar';
import Image from 'next/image';
import Header from '../../partials/Header';
import ConsoleNavigation from '../../partials/console/ConsoleNavigation';
import ForumEntries from '../../partials/community/ForumEntries';
import ConsoleBuildLogsNew from '../../partials/console/ConsoleBuildLogsNew';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from "../../styles/terminal.module.css"
// import { Layout } from '../components/Layout'
import fetchAPI from '../../../lib/fetch-api'
// import ApiRequest from '../components/api-request'
import TokenButton from '../../components/tokenbutton'
import Code from '../../components/Code'
// import { USER_TOKEN } from '../lib/constants'
import Link from 'next/link';
import dbConnect from '../../../lib/dbConnect'
import Demo from '../../models/Demo'
import Form from '../../components/Form'
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react";
// import {useUnsavedChanges} from "./useUnsavedChanges";
import { useUser } from '@auth0/nextjs-auth0';

function InlineCodeBlock({ children }) {
    return <code>{children}</code>
}

const Loading = () => <div>Loading...</div>;

const fetcher = (url) => fetch(url).then(r => r.json())

async function saveFormData(data, url) {
    return await fetch(url, {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        // headers: { Authorization: `Bearer ${token}` },
        method: "POST"
    })
}

function ConsolePage({ demos }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const router = useRouter()
    const contentType = 'application/json'
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const [loading, setLoading] = useState(false)

    const issuedDate = new Date();

    const { user, isLoading } = useUser();

    const activeUser = user?.nickname;
    // const userUsernamePlaceholder = user?.nickname;
    const userUsernamePlaceholder = String(activeUser)

    const functionNamePlaceholder = "function-name"
  
    const functionNameVields = [
          {type: "text", name: "function_name", required: false, label: "function_name"},
          {type: "hidden", name: "user_username", required: true, label: "user_username", value: userUsernamePlaceholder},
    ]

        const functionValueFields = [
            {type: "text", name: "function_value", required: false, label: "function_value"},
        ]
        

    const renderForm = ({apiKeys, register, errors, isSubmitting}) => {
        return (
            <>
                <div className="flex flex-col justify-center bg-gray-300 bg-opacity-75 rounded pt-1 m-4">
                    <div className="flex flex-grow justify-center">
                            {functionNameVields.map(functionNameVield => {
                                return (
                                    <>
                                        {/* <label htmlFor={functionNameVield.name}>{functionNameVield.label}</label> */}
                                        <input placeholder={functionNamePlaceholder} className="justify-center text-gray-200 bg-gray-600 w-full py-2 px-3 leading-tight rounded outline-2 focus:shadow-outline focus:bg-gray-700 focus:ring-1 focus:ring-purple-300 focus:text-indigo-50" type={functionNameVield.type} autoComplete={functionNameVield.autoComplete} value={functionNameVield.value}
                                                {...register(functionNameVield.name, {required: functionNameVield.required})} />
                                        <div className="error">{errors[functionNameVield.name]?.message}</div>
                                        
                                    </>
                                )
                            })}
                    </div>
            
                    <br />
                    <div className="flex flex-col justify-center">
                   
                        <b className='flex justify-start mb-2 mt-2 ml-1 text-white'>#!bin/bash </b>
                    

                            {functionValueFields.map(functionValueField => {
                                return (
                                    <>
                                        {/* <InlineCodeBlock width='720' height='239' className='max-w-full'> */}
                                            {/* <label htmlFor={functionValueField.name}>{functionValueField.label}</label> */}
                                            <textarea rows="28" className="rounded form-text bg-black border border-gray-400 focus:border-white text-violet-600 dark:text-gold-100 pl-2 pt-2 pb-2" type={functionValueField.type} autoComplete={functionValueField.autoComplete} placeholder={functionValueField.placeholder} value={functionValueField.value}
                                                    {...register(functionValueField.name, {required: functionValueField.required})} />
                                            <div className="error">{errors[functionValueField.name]?.message}</div>
                                        {/* </InlineCodeBlock> */}
                                                <div className="leading-tight btn-sm mb-2 focus:bg-gray-700 flex-row justify-center border-shadowed border-white text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 ">
                                                <button disabled={isSubmitting}>
                                                    {isSubmitting ? <Loading/> : "Submit"}
                                                  
                                                </button>
                                        </div>
                                    </>
                                )
                                
                            })}
                    </div>

                    <br />
                   
                </div>

            </>
        )
    }


    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">

                        <div className="lg:flex">

                            {/* Left + Middle content */}
                            <div className="sm:flex flex-1">

                                {/* Left content */}
                                {/* <ConsoleNavigation /> */}
                                {/* <ConsoleBuildLogsNew /> */}

                                {/* Middle content */}
                                <div className="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                                    <div className="md:py-8">

                                        {/* Buttons group */}
                                        <div className="mb-4">
                                            <div className="w-full flex flex-wrap -space-x-px">
                                                {/* <button className="btn grow bg-white border-slate-200 text-indigo-500 rounded-none first:rounded-l last:rounded-r">Input</button> */}
                                                <button className="btn grow bg-white border-slate-200 hover:bg-slate-50 text-slate-600 rounded-none first:rounded-l last:rounded-r">Config</button>
                                                <button className="btn grow bg-white border-slate-200 hover:bg-slate-50 text-slate-600 rounded-none first:rounded-l last:rounded-r">Metrics</button>
                                            </div>
                                        </div>

                                        {/* Forum Entries */}
                                        <FormComponent url="/api/demos" renderForm={renderForm} />

                                    </div>
                                </div>

                            </div>

                            {/* Right content */}
                            <ConsoleBuildLogsNew />
                            {/* <ConsoleBuildLogsNew /> */}
                            <div className="ml-8">
                                <ConsoleNavigation />
                            </div>

                        </div>

                    </div>
                </main>

            </div>
        </div>
    );
}

function FormComponent({ url, renderForm }) {
    // Fetch our initial form data
    const { data, error } = useSWR(url, fetcher)
    const { register, reset, handleSubmit, setError, formState: { isSubmitting, errors, isDirty } } = useForm();

    const router = useRouter();
    // Confirm redirects when isDirty is true
    // useConfirmRedirectIfDirty(isDirty)

    const { user, isLoading } = useUser();
    const activeUser = user?.nickname;

    

    // Submit handler which displays errors + success messages to the user
    const onSubmit = async (data) => {
        

        const response = await saveFormData(data, url)

        // const currentFunctionName = data.currentFunctionName[0].value;
        if (response.status === 400) {
            // Validation error, expect response to be a JSON response {"field": "error message for that field"}
            const fieldToErrorMessage = await response.json()
            for (const [fieldName, errorMessage] of Object.entries(fieldToErrorMessage)) {
                setError(fieldName, { type: 'custom', message: errorMessage })
            }
        } else if (response.ok) {
            // successful
            toast.success("Successfully saved")
            router.push('/__/' + activeUser + "/" + data.function_name + "/")
        } else {
            // unknown error
            toast.error("An unexpected error occurred while saving, please try again")
        }
    }

    // Sets the default value of the form once it's available
    useEffect(() => {
        if (data === undefined) {
            return; // loading
        }
        reset(data);
    }, [reset, data]);

    // Handle errors + loading state
    if (error) {
        return <div>An unexpected error occurred while loading, please try again</div>
    } else if (!data) {
        return <div>Loading...</div>
    }

    // Finally, render the form itself
    // return <form onSubmit={handleSubmit(onSubmit)}>
    //     {renderForm({ register, errors, isSubmitting })}
    //     <ToastContainer position="bottom-center" />
    // </form>;
    return (
        <div className="space-y-2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-grow justify-center bg-gray-300 bg-opacity-75 rounded pt-1 m-4">

                <div className="flex flex-grow justify-center">
                    <div className="relative flex-col justify-center w-full px-3 py-1">
                        <div className="flex flex-col justify-center pl-20 pr-20">
                        </div>
                        {/* <div className="flex flex-grow justify-center"> */}
                            {renderForm({ register, errors, isSubmitting })}

                        {/* </div> */}
                        <br />
                        <div className="flex flex-row justify-left w-full px-3 py-3 pl-4 text-base text-white"></div>

                        <div className="flex flex-grow justify-center">


                        </div>
                    </div>
                </div>

                <div>
                    {Object.keys(errors).map((err, index) => (
                        <li key={index}>{err}</li>
                    ))}
                </div>

                <ToastContainer position="bottom-center" />

            </form>

        </div>
    )
}

function useConfirmRedirectIfDirty(isDirty) {
    const router = useRouter()

    // prompt the user if they try and leave with unsaved changes
    useEffect(() => {
        const warningText = 'You have unsaved changes - are you sure you wish to leave this page?';
        const handleWindowClose = (e) => {
            if (!isDirty) return;
            e.preventDefault();
            return (e.returnValue = warningText);
        };
        const handleBrowseAway = () => {
            if (!isDirty) return;
            if (window.confirm(warningText)) return;
            // router.events.emit('routeChangeError');
            setChat(c => emit('routeChangeError'));
            throw 'routeChange aborted.';
        };
        window.addEventListener('beforeunload', handleWindowClose);
        // router.events.on('routeChangeStart', handleBrowseAway);
        setChat(c => on('routeChangeStart', handleBrowseAway));
        return () => {
            window.removeEventListener('beforeunload', handleWindowClose);
            // router.events.off('routeChangeStart', handleBrowseAway);
            setChat(c => off('routeChangeStart', handleBrowseAway));
        };
    }, [isDirty]);
}

export async function getServerSideProps() {

    await dbConnect()

    const result = await Demo.find({})
    const demos = result.map((doc) => {
        const demo = doc.toObject()
        demo._id = demo._id.toString()
        return demo
    })

    return { props: { demos: demos } }
}


export default ConsolePage;