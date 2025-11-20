import {
  Button,
  FormProvider,
  Input,
  useScopedParams,
} from "@arkyn/components";
import { Check, Lock, Shield } from "lucide-react";
import {
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router";

import { CheckCircle, FormContainer, PageContainer } from "./styles";

function ChangeForgotPasswordPage() {
  const data = useActionData();
  const { state } = useNavigation();

  const navigate = useNavigate();
  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  const passwordChanged = scopedParams.getParam("passwordChanged");

  function handleNavigateToLogin() {
    navigate("/sign-in");
  }

  if (passwordChanged === "true") {
    return (
      <PageContainer>
        <CheckCircle>
          <div>
            <Check />
          </div>
        </CheckCircle>

        <div className="headerContainer">
          <strong>Password successfully recovered!</strong>
          <p>You can now log in to your account with the new password.</p>
        </div>

        <Button onClick={handleNavigateToLogin}>Back to login</Button>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="headerContainer">
        <strong>Set a new password</strong>
        <p>Create a new password and regain access to your account</p>
      </div>

      <FormProvider
        fieldErrors={data?.fieldErrors}
        form={<FormContainer method="POST" />}
      >
        <Input
          showAsterisk
          name="newPassword"
          type="text"
          label="Enter your new password:"
          leftIcon={Lock}
        />

        <Input
          showAsterisk
          name="confirmPassword"
          type="text"
          label="Confirm your new password:"
          leftIcon={Shield}
        />

        <Button
          name="_action"
          value="changeForgotPassword"
          isLoading={state === "submitting"}
        >
          Submit
        </Button>

        <strong className="formErrorMessage">{data?.message}</strong>
      </FormProvider>
    </PageContainer>
  );
}

export { ChangeForgotPasswordPage };
