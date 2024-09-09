import { Link } from "react-router-dom";

import { Page } from "@components";
import { MedicalRecordGeneral } from "../../components/MedicalRecordGeneral";

import { useCreateMedicalRecordController } from "./useCreateMedicalRecordController";

export function CreateMedicalRecord() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    handleSubmit
  } = useCreateMedicalRecordController()

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

      <MedicalRecordGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Page>
  )
}
