import React from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from  '../../../../assets/images/logo.png'

const Login = () => {
	 
	return (
		<>
			<div className="form-wrap min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="form-inner">
					<div className="form-content sm:mx-auto sm:w-full sm:max-w-md"> 
					        <img src={Logo} alt="Logo" className="mx-auto h-12 w-auto" />
						    <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Login to your account</h2>
						    <p class="mt-2 text-center text-base leading-5 text-gray-600"> Or   
							<Link to='/Signup' className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-1">register</Link>
						</p>
					</div>
					<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mx-3"> 

					  {/* form Login*/}
						<form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
							<div className="input-wrap">
								<label for="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700"> E-mail </label> 
									<input type="text" autocomplete="username" name="email" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" /> 
							</div>
							<div className="input-wrap mt-6">
								<label for="password" className="block text-sm font-medium leading-5 mb-1 text-gray-700"> Password </label> 
									<input type="password" autocomplete="current-password" name="password" className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" />  
							</div>
							<div className="mt-2 flex items-center justify-end">
								<div className="text-sm leading-5"> 
								    <Link to='/ResetPassword' className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"> Forgot password? </Link> 
							    </div>
							</div>
							<div className="mt-6"> 
								<span className="block w-full rounded-md shadow-sm">
									<button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">To entrar
									</button>
								</span>
						    </div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
};

export default Login;
