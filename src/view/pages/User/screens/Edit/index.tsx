import { Link } from "react-router-dom";

import { Page } from "@components";
import { UserGeneral } from "../../components/UserGeneral";

import { useEditUserController } from "./useEditUserController";

export function EditUser() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    handleSubmit
  } = useEditUserController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('dashboard')}</Link> },
          { title: <Link to="/users">{translateRoute('dashboard')}</Link> },
          { title: translateRoute('profile') }
        ]}
      />

      <UserGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        edit
      />
    </Page>
  )
}
