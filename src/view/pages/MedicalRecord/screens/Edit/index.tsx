import { Link } from "react-router-dom";

import { Page } from "@components";
import { MedicalRecordGeneral } from "../../components/MedicalRecordGeneral";

import { useEditMedicalRecordController } from "./useEditMedicalRecordController";

export function EditMedicalRecord() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    userName,
    handleSubmit
  } = useEditMedicalRecordController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: <Link to="/users">{translateRoute('list')}</Link> },
          { title: userName }
        ]}
      />

      <MedicalRecordGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        edit
      />
    </Page>
  )
}
