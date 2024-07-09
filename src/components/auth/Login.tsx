"use client"

import { titleFont } from "@/config/fonts"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"
import { useForm } from "react-hook-form"

export default function Login() {

    const { authLogin, warning } = useAuthContext()

    const {
        register: registerLogin,
        handleSubmit: loginSubmit,
        formState: { errors: errorsLogin }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = loginSubmit((data) => {
        const datos = {
            email: data.email,
            password: data.password
        }
        authLogin(datos)
    }) 

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div>
                        <Link
                            href="/"
                            className="text-gray-800 text-2xl  sm:text-3xl"
                        >
                            <span className={`${titleFont.className} antialised font-bold`}>Teslo</span>

                            <span> | Shop</span>
                        </Link>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don&apos;t have an account? <Link href="/auth/new-account" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                {
                                    ...registerLogin('email', {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9_.+-]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9]/,
                                            message: 'Must be email format valid'
                                        }
                                    })
                                }
                            />
                            {
                                errorsLogin.email && <span className='text-red-400'>{errorsLogin.email?.message}</span>
                            }
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                {
                                    ...registerLogin('password', {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        }
                                    })
                                }
                            />
                            {
                                errorsLogin.password && <span className='text-red-400'>{errorsLogin.password?.message}</span>
                            }
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Sign in
                        </button>
                    </form>
                    {
                        warning && <h1>{warning}</h1>
                    }
                </div>
                <div className="text-center">
                    <a className="hover:text-indigo-600">Forgot password?</a>
                </div>
            </div>
        </main>
    )
}
