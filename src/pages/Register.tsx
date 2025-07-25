import { useForm } from "react-hook-form";
import { authApi, type RegisterRequest } from "../api/authApi";

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterRequest>();
    const onSubmit = (data: RegisterRequest) => {
        console.log(data);
        authApi.register(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="../register-svgrepo-com.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create a new account
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                        <span>Or </span>
                        <a href="/login"
                            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            login to your account
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="name" placeholder="John Doe" type="text" {...register("name", { required: true })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
                                <div className="mt-1 flex rounded-md shadow-sm">

                                    <input id="username" placeholder="john" type="text" {...register("username", { required: true })}
                                        className="h-10 flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                </div>
                                {errors.username && <p className="text-red-500 text-sm">Username is required</p>}
                            </div>

                            <div className="mt-6">
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" placeholder="user@example.com" type="email" {...register("email", { required: true })}

                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="password" type="password" {...register("password", { required: true })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="password_confirmation" type="password" {...register("password_confirmation", { required: true })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                    {errors.password_confirmation && <p className="text-red-500 text-sm">Password confirmation is required</p>}
                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Create account
                                    </button>
                                </span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}