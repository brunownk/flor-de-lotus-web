import { Link } from "react-router-dom";

import { Page } from "@components";
import { PetBreedGeneral } from "../../components/PetBreedsGeneral";

import { useEditPetBreedController } from "./useEditPetBreedController";

export function EditPetBreed() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    petName,
    handleSubmit
  } = useEditPetBreedController()

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: <Link to="/pets">{translateRoute('list')}</Link> },
          { title: petName }
        ]}
      />

      <PetBreedGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        editingOtherPet
        edit
      />
    </Page>
  )
}
