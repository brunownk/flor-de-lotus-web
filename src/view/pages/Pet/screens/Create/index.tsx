import { Link } from "react-router-dom";

import { Page } from "@components";
import { PetGeneral } from "../../components/PetGeneral";

import { useCreatePetController } from "./useCreatePetController";

export function CreatePet() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    handleSubmit
  } = useCreatePetController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('dashboard')}</Link> },
          { title: <Link to="/pets">{translateRoute('list')}</Link> },
          { title: translateRoute('create') }
        ]}
      />

      <PetGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Page>
  )
}
