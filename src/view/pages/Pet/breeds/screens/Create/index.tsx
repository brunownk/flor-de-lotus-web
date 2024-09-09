import { Link } from "react-router-dom";

import { Page } from "@components";
import { PetBreedGeneral } from "../../components/PetBreedsGeneral";

import { useCreatePetBreedController } from "./useCreatePetBreedController";

export function CreatePetBreed() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    handleSubmit
  } = useCreatePetBreedController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: <Link to="/pets">{translateRoute('list')}</Link> },
          { title: translateRoute('create') }
        ]}
      />

      <PetBreedGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Page>
  )
}
