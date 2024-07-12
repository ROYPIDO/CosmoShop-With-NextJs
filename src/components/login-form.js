"use client";
import React from "react";
import {
	Alert,
	Button,
	Card,
	Col,
	FloatingLabel,
	Form,
	Row,
} from "react-bootstrap";
import { TfiGithub, TfiGoogle } from "react-icons/tfi";
import { useFormState } from "react-dom";
import {
	signInWithCredentialsAction,
	signInWithSocialAction,
} from "@/actions/auth-actions";

const LoginForm = () => {
	const initialState = { ok: false, message: "", errors: {} };
	const [state, dispatch] = useFormState(
		signInWithCredentialsAction,
		initialState
	);

	return (
		<Row>
			<Col sm={9} md={7} lg={5} className="mx-auto">
				<Card>
					<Card.Body>
						<Card.Title className="mb-3">Login</Card.Title>

						{state?.message ? (
							<Alert variant="danger" className="mb-3">
								{state.message}
							</Alert>
						) : null}

						<Form action={dispatch}>
							<FloatingLabel
								className="mb-3"
								controlId="username"
								label="Username"
							>
								<Form.Control
									type="text"
									placeholder="Username"
									name="username"
									isInvalid={!!state?.errors?.username}
									defaultValue="emilys"
								/>
								<Form.Control.Feedback type="invalid">
									{state?.errors?.username}
								</Form.Control.Feedback>
							</FloatingLabel>
							<FloatingLabel
								className="mb-3"
								controlId="password"
								label="Password"
							>
								<Form.Control
									type="password"
									placeholder="Password"
									name="password"
									isInvalid={!!state?.errors?.password}
									defaultValue="emilyspass"
								/>
								<Form.Control.Feedback type="invalid">
									{state?.errors?.password}
								</Form.Control.Feedback>
							</FloatingLabel>
							<Button
								type="submit"
								className="w-100 text-uppercase"
								variant="warning"
							>
								Login
							</Button>
						</Form>

						<hr className="my-4" />

						<div className="d-flex gap-2 justify-content-center">
							<Form action={signInWithSocialAction}>
								<input
									type="hidden"
									name="provider"
									value="github"
								/>
								<Button type="submit">
									<TfiGithub />
								</Button>
							</Form>

							<Form action={signInWithSocialAction}>
								<input
									type="hidden"
									name="provider"
									value="google"
								/>
								<Button type="submit">
									<TfiGoogle />
								</Button>
							</Form>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default LoginForm;
