"use client"
import { titleFont } from "@/config/fonts";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { FormEvent, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';

export const Register =() => {
    const { warning, authRegister } = useAuthContext();

    const {
        register: formRegister,
        handleSubmit: handleRegisterSubmit,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const password = useRef({});
    password.current = watch('password', '');

    const handleSubmit = handleRegisterSubmit((data) => {
        const datos = {
            email: data.email,
            password: data.password
        };
        authRegister(datos);
    });

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <div>
                        <Link
                            href="/"
                            className="text-gray-800 text-2xl sm:text-3xl"
                        >
                            <span className={`${titleFont.className} antialised font-bold`}>Teslo</span>
                            <span> | Shop</span>
                        </Link>
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                        <p>Already have an account? <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
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
                                {...formRegister('email', {
                                    required: {
                                        value: true,
                                        message: 'Email must be provided'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]/,
                                        message: 'Must be email format valid'
                                    }
                                })}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                {...formRegister('password', {
                                    required: {
                                        value: true,
                                        message: 'Password must be provided'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Password must have 5 min chars'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Password max length is 30'
                                    }
                                })}
                            />
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                        <div>
                            <label className="font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                {...formRegister('confirmPassword', {
                                    validate: value => value === password.current || 'Passwords must match'
                                })}
                            />
                            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                        </div>
                        {warning && <h1>{warning}</h1>}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Create account
                        </button>
                    </form>
                   
                </div>
            </div>
        </main>
    );
}