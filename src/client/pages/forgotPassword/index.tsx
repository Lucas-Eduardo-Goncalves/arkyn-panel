import {
  Button,
  FormProvider,
  Input,
  useScopedParams,
} from "@arkyn/components";
import { Mail } from "lucide-react";
import { Link, useActionData, useLocation, useNavigation } from "react-router";

import { FormContainer, NavigateContainer, PageContainer } from "./styles";

function ForgotPasswordPage() {
  const data = useActionData();
  const { state } = useNavigation();

  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  const emailSent = scopedParams.getParam("emailSent");

  if (emailSent === "true") {
    return (
      <PageContainer>
        <div className="headerContainer">
          <strong>Email sent!</strong>
          <p>Check your inbox to reset your password.</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="headerContainer">
        <strong>Forgot your password?</strong>
        <p>Follow the steps to reset your password</p>
      </div>

      <FormProvider
        fieldErrors={data?.fieldErrors}
        form={<FormContainer method="POST" />}
      >
        <Input
          showAsterisk
          name="email"
          type="text"
          label="Enter your email:"
          leftIcon={Mail}
        />

        <Button
          name="_action"
          value="ForgotPassword"
          isLoading={state === "submitting"}
        >
          Confirm
        </Button>

        <strong className="formErrorMessage">{data?.message}</strong>
      </FormProvider>

      <NavigateContainer>
        <p>Remembered your password?</p>
        <Link to="/sign-in">Click here</Link>
      </NavigateContainer>
    </PageContainer>
  );
}

export { ForgotPasswordPage };
