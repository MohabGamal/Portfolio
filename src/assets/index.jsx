import logo from "./logo2.svg"
import github from "./github.png"


import css from "./tech/css.png"
import docker from "./tech/docker.png"
import express from "./tech/express.webp"
import git from "./tech/git.png"
import html from "./tech/html.png"
import javascript from "./tech/javascript.png"
import mongodb from "./tech/mongodb.png"
import nodejs from "./tech/nodejs.svg"
import reactjs from "./tech/reactjs.png"
import hardhat from "./tech/hardhat.png"
import tailwind from "./tech/tailwind.png"
import typescript from "./tech/typescript-flipped.png"
import solidity from "./tech/solidity.svg"
import jest from "./tech/jest.webp"
import githubActions from "./tech/github_actions.webp"
import aws from "./tech/aws.webp"
import next from "./tech/next-flipped.png"
import socketIo from "./tech/socket-io.webp"
import nest from "./tech/nestjs.svg"
import mongoose from "./tech/mongoose.png"
import postgres from "./tech/postgres.svg"
import prisma from "./tech/prisma.svg"
import githubGIF from "./github-animation.json"
import facebookGIF from "./facebook-animation.json"
import BookingMERN from "./BookingMERN.webp"

import armedForces from "./company/armedForces.png"
import AUC from "./company/AUC.ico"
import nuItCs from "./company/NU ITCS.png"
import NU from "./company/NU.ico"
import nestRealtor from "./nestRealtor.webp"
import aucCert from "./AUC B1 Cert.webp"
import graduationCert from "./graduationCert.webp"

import Supply from "./Supply.webp"
import Portfolio from "/Portfolio.webp"
import email from "./email.svg"
import cv from "./cv.png"
import externalLink from "./externalLink.svg"

/* svgs */
const DownloadFileSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={22}
		height={22}
		fill="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<g stroke="#23142c" strokeLinecap="round" strokeWidth={1}>
			<path d="M4 4a1 1 0 0 1 1-1h9.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Z" />
			<path strokeLinejoin="round" d="M20 8h-5V3M12 9v8M9 14l3 3 3-3" />
		</g>
	</svg>
)

const LoadingSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
		viewBox="0 0 24 24"
		{...props}
	>
		<circle
			cx={12}
			cy={12}
			r={10}
			stroke="currentColor"
			strokeWidth={4}
			className="opacity-25"
		/>
		<path
			fill="currentColor"
			d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			className="opacity-75"
		/>
	</svg>
)

const LinkedInSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={32}
		height={32}
		viewBox="0 0 48 48"
		{...props}
	>
		<path
			fill="#0288D1"
			d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"
		/>
		<path
			fill="#FFF"
			d="M12 19h5v17h-5zm2.485-2h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99-.144.35-.101 1.318-.101 1.807v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"
		/>
	</svg>
)

const FacebookSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={32}
		height={32}
		viewBox="0 0 48 48"
		{...props}
	>
		<path fill="#039be5" d="M24 5a19 19 0 1 0 0 38 19 19 0 1 0 0-38Z" />
		<path
			fill="#fff"
			d="M26.572 29.036h4.917l.772-4.995h-5.69v-2.73c0-2.075.678-3.915 2.619-3.915h3.119v-4.359c-.548-.074-1.707-.236-3.897-.236-4.573 0-7.254 2.415-7.254 7.917v3.323h-4.701v4.995h4.701v13.729c.931.14 1.874.235 2.842.235.875 0 1.729-.08 2.572-.194v-13.77z"
		/>
	</svg>
)

const GithubSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={32}
		height={32}
		viewBox="0 0 48 48"
		{...props}
	>
		<path
			fill="#fff"
			d="M41 24c0 9.4-7.6 17-17 17S7 33.4 7 24 14.6 7 24 7s17 7.6 17 17z"
		/>
		<path
			fill="#455a64"
			d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1H21zm19.1-14.6s-1.3-.4-2.4-.4h-.1c-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1s0-.1.1-.1 2-.3 3.1-.3 2.4.4 2.5.4c.1 0 .1.1.1.2-.2-.1-.2 0-.3 0zm-.3.8s-1.4-.4-2.6-.4c-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1s0-.1.1-.1 2.2-.2 3.1-.2c1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2 0-.1 0 0-.1 0zm-32-.8c-.1 0-.1 0-.1-.1s0-.1.1-.2c.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1s-2.7-.2-3.5-.2c-1.1.2-2.6.4-3.4.6zm.4 1.5s-.1 0-.1-.1v-.2c.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1s-2.8-.3-4.1-.1c-1.5.3-2.9 1.1-2.9 1.1z"
		/>
		<path
			fill="#455a64"
			d="M14.2 23.5c0-4.4 4.6-8.5 10.3-8.5 5.7 0 10.3 4 10.3 8.5S31.5 31 24.5 31s-10.3-3.1-10.3-7.5z"
		/>
		<path
			fill="#455a64"
			d="M28.6 16.3s1.7-2.3 4.8-2.3c1.2 1.2.4 4.8 0 5.8l-4.8-3.5zm-8.2 0S18.7 14 15.6 14c-1.2 1.2-.4 4.8 0 5.8l4.8-3.5zm-.3 19.6h-2.8c-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9l-.6 3z"
		/>
		<path
			fill="#00bcd4"
			d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm0 36c-8.8 0-16-7.2-16-16S15.2 8 24 8s16 7.2 16 16-7.2 16-16 16z"
		/>
	</svg>
)

const StackoverflowSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={32}
		height={32}
		viewBox="0 0 48 48"
		{...props}
	>
		<path fill="#607D8B" d="M9 28h3v14H9z" />
		<path fill="#607D8B" d="M9 39h26v3H9z" />
		<path fill="#607D8B" d="M32 28h3v14h-3zm-17 6h14v3H15z" />
		<path fill="#A68A6E" d="M15.08 28.26 29 29.758l-.32 2.982-13.92-1.498z" />
		<path fill="#EF6C00" d="m36.87 6 2.134 13.835-2.966.458-2.133-13.836z" />
		<path
			fill="#FF9800"
			d="m28.47 8.237 6.831 12.218-2.62 1.464-6.83-12.218z"
		/>
		<path
			fill="#D38B28"
			d="m20.501 14.551 11.5 7.982-1.712 2.465-11.5-7.982z"
		/>
		<path
			fill="#C09553"
			d="m16.9 21.218 13.172 4.739-1.016 2.823-13.172-4.738z"
		/>
	</svg>
)

const ArrowSvg = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 5" {...props}>
		<path d="M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 0 0 7.4 0H1.6a1 1 0 0 0-.7 1.7l3 2.7z" />
	</svg>
)

const MenuSvg = (props) => (
	<svg viewBox="0 0 32 32" className={`hamburger-svg`} {...props}>
		<path
			className="hamburger-line hamburger-line-top-bottom"
			d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
		/>
		<path className="hamburger-line" d="M7 16 27 16" />
	</svg>
)

export {
	logo,
	github,
	menu,
	close,
	css,
	docker,
	git,
	html,
	javascript,
	mongodb,
	nodejs,
	reactjs,
	tailwind,
	typescript,
	armedForces,
	AUC,
	nuItCs,
	NU,
	Supply,
	nestRealtor,
	Portfolio,
	email,
	cv,
	jest,
	githubActions,
	express,
	solidity,
	hardhat,
	aws,
	next,
	socketIo,
	postgres,
	prisma,
	nest,
	mongoose,
	githubGIF,
	facebookGIF,
	externalLink,
	BookingMERN,
	aucCert,
	graduationCert,
	LinkedInSvg,
	FacebookSvg,
	GithubSvg,
	StackoverflowSvg,
	DownloadFileSvg,
	LoadingSvg,
	ArrowSvg,
	MenuSvg,
}
