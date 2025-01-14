import { getCurrent } from "@/features/auth/queries";

import { redirect } from "next/navigation";
import React from "react";
import ProjectIdSettingsClient from "./client";

type Props = {
  params: {
    projectId: string;
  };
};
const ProjectIdSettingsPage = async ({ params }: Props) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <ProjectIdSettingsClient />;
};

export default ProjectIdSettingsPage;
