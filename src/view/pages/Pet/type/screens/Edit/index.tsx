import { Link } from "react-router-dom";

import { Page } from "@components";
import { PetTypeGeneral } from "../../components/PetTypeGeneral";

import { useEditPetTypeController } from "./useEditPetTypeController";

export function EditPetType() {
  const {
    methods,
    isLoading,
    translate,
    translateRoute,
    petName,
    handleSubmit
  } = useEditPetTypeController()

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

      <PetTypeGeneral
        methods={methods}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        edit
      />
    </Page>
  )
}
