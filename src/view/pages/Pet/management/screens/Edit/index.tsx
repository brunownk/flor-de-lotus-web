import { Link } from "react-router-dom";

import { Page } from "@components";
import { PetGeneral } from "../../components/PetGeneral";

import { useEditPetController } from "./useEditPetController";

export function EditPet() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    petName,
    handleSubmit
  } = useEditPetController()

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

      <PetGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        editingOtherPet
        edit
      />
    </Page>
  )
}
