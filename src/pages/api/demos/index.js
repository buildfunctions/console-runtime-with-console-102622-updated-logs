import dbConnect from '../../../../lib/dbConnect'
import Demo from '../../../models/Demo'
import fs from 'fs'
import shell from "shelljs";
// import InlineCodeBlock from '../../../components/Blocks/MDX.InlineCodeBlock';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function ProtectedRoute(req, res) {
    
  const {
    method,
    body,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const demos = await Demo.find({})
        res.status(200).json({ success: true, data: demos })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        // fs.writeFileSync('api/functions/file', body.function_value);
        // shell.exec('chmod +x ./script.sh && ./script.sh');
        const demo = await Demo.create(
          req.body
        )
        const activeDemoId = String(demo._id)
        // console.log(String(demo._id))
        // const functionPageValue =
        // `
        // import React from 'react'

        // export default function ${body.function_name}() {
        //   return (
        //     <div>
        //       <h1>${body.function_name}</h1>
        //       <p>This is the ${body.function_name} function</p>
        //     </div>
        //   )
        // }
        // `
        const functionPageValue =
        `
        import Sidebar from '../../../partials/Sidebar';
        import Header from '../../../partials/Header';
        import ConsoleNewLeftContent from '../../../partials/console/ConsoleNewLeftContent';
        import ForumEntries from '../../../partials/community/ForumEntries';
        import ConsoleRightContent from '../../../partials/console/ConsoleRightContent';
        import { useRouter } from 'next/router'
        import useSWR from 'swr'
        import styles from "../../../styles/terminal.module.css"
        // import { Layout } from '../../components/Layout'
        import fetchAPI from '../../../../lib/fetch-api'
        // import ApiRequest from '../../components/api-request'
        import TokenButton from '../../../components/tokenbutton'
        import Code from '../../../components/Code'
        // import { USER_TOKEN } from '../../../../lib/constants'
        import Link from 'next/link';
        import dbConnect from '../../../../lib/dbConnect'
        import Demo from '../../../models/Demo'
        import Form from '../../../components/Form'
        import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
        import { ToastContainer, toast } from 'react-toastify';
        import 'react-toastify/dist/ReactToastify.css';
        import React, { useState, useEffect } from "react";
        // import {useUnsavedChanges} from "./useUnsavedChanges";
        import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

        function InlineCodeBlock({ children }) {
            return <code>{children}</code>
        }

        const Loading = () => <div>Loading...</div>;

        const fetcher = (url) => fetch(url).then(r => r.json())

        async function saveFormData(data, url) {
            return await fetch(url, {
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                // headers: { Authorization: \`Bearer \${token}\` },
                method: "POST"
            })
        }

        function ClientPage({ demos }) {
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
                                                    <textarea rows="28" className="rounded form-text area w-full bg-black border border-gray-400 focus:border-white text-violet-600 dark:text-gold-100 pl-2 pt-2 pb-2" type={functionValueField.type} autoComplete={functionValueField.autoComplete} placeholder={functionValueField.placeholder} value={functionValueField.value}
                                                            {...register(functionValueField.name, {required: functionValueField.required})} />
                                                    <div className="error">{errors[functionValueField.name]?.message}</div>
                                                {/* </InlineCodeBlock> */}
                                                        <div className="leading-tight btn-sm mb-2 focus:bg-gray-700 flex-row justify-center border-shadowed border-white text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 ">
                                                        <a href="/new">New function</a>
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

                                <div className="xl:flex">

                                    {/* Left + Middle content */}
                                    <div className="md:flex flex-1">

                                        {/* Left content */}
                                        <ConsoleNewLeftContent />

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
                                    <ConsoleRightContent />

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

            // Submit handler which displays errors + success messages to the user
            const onSubmit = async (data) => {
                const response = await saveFormData(data, url)

                if (response.status === 400) {
                    // Validation error, expect response to be a JSON response {"field": "error message for that field"}
                    const fieldToErrorMessage = await response.json()
                    for (const [fieldName, errorMessage] of Object.entries(fieldToErrorMessage)) {
                        setError(fieldName, { type: 'custom', message: errorMessage })
                    }
                } else if (response.ok) {
                    // successful
                    toast.success("Successfully saved")
                    router.push('/projectmikey')
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
                                    {renderForm({ register, errors, isSubmitting })}

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


        
        export default withPageAuthRequired(ClientPage, {
          onRedirecting: () => <Loading />,
          onError: error => <ErrorMessage>{error.message}</ErrorMessage>
        });

        `

        console.log(activeDemoId)
        console.log(body.function_name, body.function_value, body.user_username)
        

         // step one is to 'write to disk'. we take the text from the /console page and write to a script file called userfile.sh (in the api-checks/initial-checks directory).
         const initialjson = '[]'
         const timestamp = Date.now();
         //stage 0
         const objSuccess0 = JSON.parse(initialjson);
         objSuccess0.push("Your project has been initialized succesfully... please wait while we perform the initial checks... The entire process may take a couple of minutes...", + timestamp);
         const finalJSONSuccess0 = JSON.stringify(objSuccess0);
         fs.writeFileSync('db/projectmikey/status-messages/stage-one.json', finalJSONSuccess0);
         // stage 1
         fs.writeFileSync('api-checks/initial-checks/userfile.sh', body.function_value);
         // stage 2: initial checks
         if (shell.exec('./initial_checks.sh').code !== 0) {
           // if script exits with anything but a 0 status code, we failt the build with an error message.
           shell.echo('Sorry initial checks failed, There are certain keywords/commands that can not be requested in your code.');
           shell.exit(1);
         };
            // creating the stage 1 success message and error handling
        const objSuccess1 = JSON.parse(initialjson);
        objSuccess1.push("Stage 1 success: Initial checks passed... Your sandbox process is being prepared... Preparing to build functions in a sandbox..", + timestamp);
        const finalJSONSuccess1 = JSON.stringify(objSuccess1);
        fs.writeFileSync('db/projectmikey/status-messages/stage-two.json', finalJSONSuccess1);
      
         // building functions in a sandbox 
        if (shell.exec('./node_buildfunctions_checks.sh').code !== 0) {
           shell.echo('Sorry compiled checks failed, There are certain keywords/commands that can not be requested in your code.');
           shell.exit(1);
        };
            // stage 2: success message / error handling
        const objSuccess2 = JSON.parse(initialjson);
        objSuccess2.push("Sandbox functions were built succesfully... Preparing final checks...", + timestamp);
        const finalJSONSuccess2 = JSON.stringify(objSuccess2);
        fs.writeFileSync('db/projectmikey/status-messages/stage-three.json', finalJSONSuccess2);
         // after we build the user function in a sandbox we can check again that the user didnt arbitrarily call for environmental variabled or commands through the build process through variable manipulation. The new folder we check is in api-checks/compiled-checks
         // stage 3: compiled checks
         if (shell.exec('./compiled_checks.sh').code !== 0) {
           shell.echo('Sorry compiled checks failed, There are certain keywords/commands that can not be requested in your code.');
           shell.exit(1);
         };
         // stage 3: success message / error handling
        const objSuccess3 = JSON.parse(initialjson);
        objSuccess3.push("stage 3 success:  All tests have passed... preparing to build functions...", + timestamp);
        const finalJSONSuccess3 = JSON.stringify(objSuccess3);
        fs.writeFileSync('db/projectmikey/status-messages/stage-four.json', finalJSONSuccess3);
          // stage 4
          // if all goes well we fire off the buildfunctions.sh runtime script (in a similar manner as before, we execute the script by starting the node_buildfunctions.sh helper script) to get things going in node.js! We build our users function as an API endpoint and assign a url.
        if (shell.exec('./node_buildfunctions.sh').code !== 0) {
           shell.echo('Sorry compiled checks failed, There are certain keywords/commands that can not be requested in your code.');
           shell.exit(1);
        };
         // stage 4 success message
         const objSuccess4 = JSON.parse(initialjson);
         objSuccess4.push("Stage 4 success: Your build was succesful...  Please wait as the system mounts your API endpoint...", + timestamp);
         const finalJSONSuccess4 = JSON.stringify(objSuccess4);
         fs.writeFileSync('db/projectmikey/status-messages/stage-five.json', finalJSONSuccess4);
         // stage 5
         // and finally we use a github pull request to commit (save) the user's new function to the buildfunctions github repo which triggers an automatic deploy to vercel! and of course if anything happens we fail the build and exit with a non-zero exit code.
        //  if (shell.exec('git branch -M main && git add . && git commit -m "Auto-commit $(date)" && git push -uf origin main').code !== 0) {
        //    shell.echo('Error: Git commit failed');
        //    shell.exit(1);
        //  }

      
        // stage 5
          // and finally we use a github pull request to commit (save) the user's new function to the buildfunctions github repo which triggers an automatic deploy to vercel! and of course if anything happens we fail the build and exit with a non-zero exit code.
          const objSuccess5 = JSON.parse(initialjson);
          objSuccess5.push("stage 5 success: The service was created successfully... Your function has been cached to the file system...  Your projects generated endpoint is ... https://api-example/api/functions/hi", + timestamp);
          const finalJSONSuccess5 = JSON.stringify(objSuccess5);
          fs.writeFileSync('db/projectmikey/status-messages/stage-five.json', finalJSONSuccess5);

        fs.writeFileSync(`api/functions/${body.function_name}`, body.function_value);
        shell.exec(`mkdir src/pages/__/${body.user_username}`);
        shell.exec('touch `src/pages/__/${body.user_username}/${body.function_name}.js`');
        fs.writeFileSync(`src/pages/__/${body.user_username}/${body.function_name}.js`, functionPageValue);

        res.status(200).json({ IdData: activeDemoId })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
})