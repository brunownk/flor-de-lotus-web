import { Link } from "react-router-dom";

import { Page } from "@components";
import { UserGeneral } from "../../components/UserGeneral";

import { useCreateUserController } from "./useCreateUserController";

export function CreateUser() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    handleSubmit
  } = useCreateUserController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: <Link to="/users">{translateRoute('list')}</Link> },
          { title: translateRoute('profile') }
        ]}
      />

      <UserGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Page>
  )
}
