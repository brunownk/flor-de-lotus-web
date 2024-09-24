import { Link } from "react-router-dom";

import { Page } from "@components";
import { PetTypeGeneral } from "../../components/PetTypeGeneral";

import { useCreatePetTypeController } from "./useCreatePetTypeController";

export function CreatePetType() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    handleSubmit
  } = useCreatePetTypeController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: <Link to="/pet-types">{translateRoute('list')}</Link> },
          { title: translateRoute('create') }
        ]}
      />

      <PetTypeGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Page>
  )
}
