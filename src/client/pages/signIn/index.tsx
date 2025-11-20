import { Button, FormProvider, Input } from "@arkyn/components";
import { Lock, Mail } from "lucide-react";
import { Link, useFetcher } from "react-router";

import { FormContainer, PageContainer } from "./styles";

function SignInPage() {
  const { Form, state, data } = useFetcher();

  return (
    <PageContainer>
      <div className="headerContainer">
        <strong>You are welcome!</strong>
        <p>Please log in to continue and access your account!</p>
      </div>

      <FormProvider
        fieldErrors={data?.fieldErrors}
        form={<Form method="POST" />}
      >
        <FormContainer>
          <Input
            showAsterisk
            name="email"
            type="text"
            label="Email:"
            placeholder="Enter your email"
            leftIcon={Mail}
          />

          <Input
            showAsterisk
            name="password"
            type="password"
            label="Password:"
            placeholder="Enter your password"
            leftIcon={Lock}
          />

          <Link className="forgotPasswordLink" to="/forgot-password">
            Forgot your password?
          </Link>

          <Button
            name="_action"
            value="authAdmin"
            isLoading={state === "submitting"}
          >
            Sign in
          </Button>

          <strong className="formErrorMessage">{data?.message}</strong>
        </FormContainer>
      </FormProvider>
    </PageContainer>
  );
}

export { SignInPage };
