"use client";
import React from "react";
import {
	Alert,
	Button,
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

const cardStyle = {
	background: "var(--color-surface)",
	border: "1px solid var(--color-border)",
	borderRadius: "var(--radius-lg)",
	padding: "2rem",
	color: "var(--color-text)",
};

const inputStyle = {
	background: "var(--color-surface-alt)",
	border: "1px solid var(--color-border)",
	color: "var(--color-text)",
};

const LoginForm = () => {
	const initialState = { ok: false, message: "", errors: {} };
	const [state, dispatch] = useFormState(
		signInWithCredentialsAction,
		initialState
	);

	return (
		<Row>
			<Col sm={10} md={7} lg={5} className="mx-auto">
				<div style={cardStyle}>
					<h4 style={{ fontWeight: 800, marginBottom: "0.25rem" }}>Sign In</h4>
					<p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
						Use the demo credentials below or sign in with a provider.
					</p>

					{/* Demo hint */}
					<div
						style={{
							background: "rgba(255,123,0,0.08)",
							border: "1px solid rgba(255,123,0,0.25)",
							borderRadius: "var(--radius)",
							padding: "0.65rem 1rem",
							marginBottom: "1.25rem",
							fontSize: "0.82rem",
							color: "var(--color-text-muted)",
						}}
					>
						<strong style={{ color: "var(--color-accent)" }}>Demo:</strong>{" "}
						username&nbsp;<code style={{ color: "#e8eaf0" }}>emilys</code> &nbsp;/&nbsp; password&nbsp;
						<code style={{ color: "#e8eaf0" }}>emilyspass</code>
					</div>

					{state?.message ? (
						<Alert variant="danger" className="mb-3" style={{ fontSize: "0.875rem" }}>
							{state.message}
						</Alert>
					) : null}

					<Form action={dispatch}>
						<FloatingLabel className="mb-3" controlId="username" label="Username">
							<Form.Control
								type="text"
								placeholder="Username"
								name="username"
								isInvalid={!!state?.errors?.username}
								defaultValue="emilys"
								style={inputStyle}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.username}
							</Form.Control.Feedback>
						</FloatingLabel>
						<FloatingLabel className="mb-3" controlId="password" label="Password">
							<Form.Control
								type="password"
								placeholder="Password"
								name="password"
								isInvalid={!!state?.errors?.password}
								defaultValue="emilyspass"
								style={inputStyle}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.password}
							</Form.Control.Feedback>
						</FloatingLabel>
						<Button
							type="submit"
							className="w-100 text-uppercase fw-semibold"
							variant="warning"
						>
							Login
						</Button>
					</Form>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "0.75rem",
							margin: "1.25rem 0",
						}}
					>
						<hr style={{ flex: 1, borderColor: "var(--color-border)", margin: 0 }} />
						<span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", whiteSpace: "nowrap" }}>
							or continue with
						</span>
						<hr style={{ flex: 1, borderColor: "var(--color-border)", margin: 0 }} />
					</div>

					<div className="d-flex gap-2">
						<Form action={signInWithSocialAction} className="flex-grow-1">
							<input type="hidden" name="provider" value="github" />
							<Button
								type="submit"
								variant="outline-secondary"
								className="w-100 d-flex align-items-center justify-content-center gap-2"
								style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
							>
								<TfiGithub size={16} /> GitHub
							</Button>
						</Form>
						<Form action={signInWithSocialAction} className="flex-grow-1">
							<input type="hidden" name="provider" value="google" />
							<Button
								type="submit"
								variant="outline-secondary"
								className="w-100 d-flex align-items-center justify-content-center gap-2"
								style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
							>
								<TfiGoogle size={16} /> Google
							</Button>
						</Form>
					</div>

					<p style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", textAlign: "center", marginTop: "1rem", marginBottom: 0 }}>
						OAuth providers require environment variables to be configured.
					</p>
				</div>
			</Col>
		</Row>
	);
};

export default LoginForm;
