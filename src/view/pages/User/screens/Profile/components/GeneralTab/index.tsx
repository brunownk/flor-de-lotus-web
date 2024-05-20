import { UserGeneral } from "@pages/User/components/UserGeneral";
import { useGeneralTabController } from "./useGeneralTabController";

export function GeneralTab() {
  const { methods, isLoading, handleSubmit } = useGeneralTabController();

  return (
    <UserGeneral
      methods={methods}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      edit
    />
  )
}
