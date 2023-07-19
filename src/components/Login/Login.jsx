import React, { useContext } from "react";
import { useState } from "react";
import { AccountContext } from "../Account";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { authenticate, isAuthenticated, tokens } = useContext(AccountContext);
	console.log("isAuthenticated", isAuthenticated, "tokens", tokens);
	const onSubmit = (event) => {
		event.preventDefault();
		authenticate(email, password)
			.then((data) => {
				console.log("logged in!");
				navigate("/dashboard");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md p-10 space-y-8 bg-white rounded-lg shadow-md">
				<div>
					<h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
						Log in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={onSubmit}>
					<input type="hidden" name="remember" value="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md group hover:bg-warning focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
							Sign in
						</button>
					</div>
					<p>
						Don't Have an account? Sign up{" "}
						<span
							className="cursor-pointer"
							onClick={() => navigate("/signup")}
						>
							<strong>here</strong>
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
